import { narrateLesson } from "@/lib/narrate";
import type { NarratorId } from "@/lib/voices";

let seq = 0;
let audioEl: HTMLAudioElement | null = null;
let objectUrl: string | null = null;
let currentUtter: SpeechSynthesisUtterance | null = null;

function killAudio() {
  if (audioEl) {
    audioEl.onended = null;
    audioEl.onerror = null;
    audioEl.pause();
    audioEl.src = "";
    audioEl = null;
  }
  if (objectUrl) {
    URL.revokeObjectURL(objectUrl);
    objectUrl = null;
  }
  currentUtter = null;
  if (typeof window !== "undefined" && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

function pickVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  const prefer = voices.find(
    (v) =>
      /en-US|en_US/i.test(v.lang) &&
      /Google|Samantha|Enhanced|Natural|Premium|Aria|Jenny/i.test(v.name),
  );
  return prefer ?? voices.find((v) => v.lang.startsWith("en")) ?? voices[0] ?? null;
}

function speakBrowser(text: string, onend?: () => void): void {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    onend?.();
    return;
  }
  const plain = text
    .replace(/<\/?[^>]+>/g, " ")
    .replace(/\[[^\]]+\]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const u = new SpeechSynthesisUtterance(plain);
  u.rate = 0.88;
  u.pitch = 0.92;
  u.lang = "en-US";
  const voice = pickVoice();
  if (voice) u.voice = voice;
  u.onend = () => {
    if (currentUtter === u) currentUtter = null;
    onend?.();
  };
  u.onerror = () => {
    if (currentUtter === u) currentUtter = null;
    onend?.();
  };
  currentUtter = u;
  window.speechSynthesis.resume();
  window.speechSynthesis.speak(u);
}

function b64ToBlob(b64: string, mime: string): Blob {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Blob([bytes], { type: mime });
}

export function stopSpeaking(): void {
  seq += 1;
  killAudio();
}

export function isSpeaking(): boolean {
  if (audioEl && !audioEl.paused) return true;
  if (typeof window === "undefined" || !window.speechSynthesis) return false;
  return window.speechSynthesis.speaking;
}

export function unlockSpeech(): void {
  if (typeof window === "undefined") return;
  if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.resume();
  }
}

export async function playLesson(
  text: string,
  narrator: NarratorId,
  onend?: () => void,
): Promise<void> {
  const my = ++seq;
  killAudio();
  try {
    const result = await narrateLesson({ data: { text, narrator } });
    if (my !== seq) return;
    if (!result.ok) {
      speakBrowser(text, onend);
      return;
    }
    const blob = b64ToBlob(result.audio, result.mime);
    objectUrl = URL.createObjectURL(blob);
    const el = new Audio(objectUrl);
    audioEl = el;
    el.onended = () => {
      if (my !== seq) return;
      killAudio();
      onend?.();
    };
    el.onerror = () => {
      if (my !== seq) return;
      killAudio();
      speakBrowser(text, onend);
    };
    await el.play();
  } catch {
    if (my !== seq) return;
    speakBrowser(text, onend);
  }
}

/** @deprecated use playLesson — kept for any leftover call sites */
export function speak(text: string, onend?: () => void): void {
  speakBrowser(text, onend);
}
