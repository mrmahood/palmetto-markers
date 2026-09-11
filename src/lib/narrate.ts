import { createServerFn } from "@tanstack/react-start";
import { getNarrator, type NarratorId } from "@/lib/voices";

const MAX_CHARS = 4000;
const CACHE_MAX = 24;

const cache = new Map<string, { mime: string; audio: string }>();

function cacheGet(key: string) {
  const hit = cache.get(key);
  if (!hit) return null;
  cache.delete(key);
  cache.set(key, hit);
  return hit;
}

function cacheSet(key: string, value: { mime: string; audio: string }) {
  cache.set(key, value);
  while (cache.size > CACHE_MAX) {
    const first = cache.keys().next().value;
    if (first === undefined) break;
    cache.delete(first);
  }
}

export type NarrateResult =
  | { ok: true; mime: string; audio: string }
  | { ok: false; error: string };

export const narrateLesson = createServerFn({ method: "POST" })
  .validator((input: { text: string; narrator: NarratorId }) => input)
  .handler(async ({ data }): Promise<NarrateResult> => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false, error: "unavailable" };

    const raw = data.text.trim();
    if (!raw) return { ok: false, error: "empty" };
    const text = raw.length > MAX_CHARS ? `${raw.slice(0, MAX_CHARS)}.` : raw;
    const narrator = getNarrator(data.narrator);
    const key = `${narrator.id}:1.15:${text}`;
    const cached = cacheGet(key);
    if (cached) return { ok: true, ...cached };

    const res = await fetch("https://api.x.ai/v1/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        text,
        voice_id: narrator.voice,
        language: "en",
        speed: 1.15,
      }),
    });
    if (!res.ok) {
      return { ok: false, error: `tts ${res.status}` };
    }
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.byteLength < 200) return { ok: false, error: "empty-audio" };
    const mime = res.headers.get("content-type")?.split(";")[0] || "audio/mpeg";
    const payload = { mime, audio: buf.toString("base64") };
    cacheSet(key, payload);
    return { ok: true, ...payload };
  });
