/** iOS Safari only attaches a stream if the <video> already exists
 *  and getUserMedia runs from a user gesture (or a prior grant).
 *  Call this from a tap. The first await must be getUserMedia — a timer
 *  or effect loses the gesture and Safari rejects the request. */

function isPermissionDenied(err: unknown): boolean {
  const name = err instanceof Error ? err.name : "";
  return name === "NotAllowedError" || name === "PermissionDeniedError";
}

export async function startRearCamera(video: HTMLVideoElement): Promise<MediaStream> {
  video.setAttribute("playsinline", "true");
  video.setAttribute("webkit-playsinline", "true");
  video.playsInline = true;
  video.muted = true;
  video.autoplay = true;
  video.setAttribute("muted", "");
  video.setAttribute("autoplay", "");

  if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia) {
    throw new Error("Camera unavailable");
  }

  const attempts: MediaStreamConstraints[] = [
    {
      audio: false,
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
    },
    { audio: false, video: { facingMode: "environment" } },
    { audio: false, video: true },
  ];

  let last: unknown;
  for (const constraints of attempts) {
    let stream: MediaStream | null = null;
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      video.srcObject = stream;
      // play() can reject after the gesture ends. Keep the granted stream
      // instead of retrying getUserMedia, which Safari will block.
      const play = video.play();
      if (play) void play.catch(() => {});
      return stream;
    } catch (err) {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        if (video.srcObject === stream) video.srcObject = null;
      }
      last = err;
      if (isPermissionDenied(err)) break;
    }
  }
  throw last instanceof Error ? last : new Error("Camera unavailable");
}

export function stopStream(stream: MediaStream | null) {
  stream?.getTracks().forEach((t) => t.stop());
}

export function captureFrame(video: HTMLVideoElement, maxEdge = 960): string {
  const vw = video.videoWidth || 1280;
  const vh = video.videoHeight || 720;
  const scale = Math.min(1, maxEdge / Math.max(vw, vh));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(vw * scale));
  canvas.height = Math.max(1, Math.round(vh * scale));
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", 0.72);
}
