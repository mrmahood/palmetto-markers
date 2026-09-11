import { createServerFn } from "@tanstack/react-start";
import { normalizeId } from "./match-plaque";

export type PlaqueRead =
  | { ok: true; id: string | null; title: string | null; raw: string }
  | { ok: false; error: string };

const PROMPT = `You are reading a roadside South Carolina Historical Marker.

These plaques are usually black metal with raised light letters. They often say SOUTH CAROLINA at the top, show a marker number such as 46-21, 10-46, or 07-15, then a title and a paragraph of inscription.

Look at the photograph and extract what is actually on the plaque.

Return JSON only, no markdown:
{"id":"46-21" or null,"title":"short title from the plaque or null","raw":"visible text transcript"}

Rules:
- id must match the printed number (digits, hyphen, digits). Use null if you cannot see a number.
- Do not invent a marker. If this is not a historical marker plaque, id and title are null.
- raw should quote the words you can read.`;

export const readPlaque = createServerFn({ method: "POST" })
  .validator((input: { image: string }) => input)
  .handler(async ({ data }): Promise<PlaqueRead> => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false, error: "unavailable" };

    const image = data.image.trim();
    if (!image.startsWith("data:image/") || image.length < 80) {
      return { ok: false, error: "empty" };
    }
    if (image.length > 1_800_000) return { ok: false, error: "too-large" };

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.6",
        temperature: 0,
        messages: [
          {
            role: "user",
            content: [
              { type: "image_url", image_url: { url: image, detail: "high" } },
              { type: "text", text: PROMPT },
            ],
          },
        ],
      }),
    });
    if (!res.ok) return { ok: false, error: `vision ${res.status}` };
    const payload = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = payload.choices?.[0]?.message?.content?.trim() ?? "";
    const json = extractJson(text);
    if (!json) return { ok: false, error: "unreadable" };
    const id = normalizeId(typeof json.id === "string" ? json.id : "");
    const title =
      typeof json.title === "string" && json.title.trim()
        ? json.title.trim()
        : null;
    const raw = typeof json.raw === "string" ? json.raw : text;
    return { ok: true, id, title, raw };
  });

function extractJson(text: string): { id?: unknown; title?: unknown; raw?: unknown } | null {
  const fenced = text.match(/\{[\s\S]*\}/);
  if (!fenced) return null;
  try {
    return JSON.parse(fenced[0]) as { id?: unknown; title?: unknown; raw?: unknown };
  } catch {
    return null;
  }
}
