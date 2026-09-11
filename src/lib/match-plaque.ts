import type { Marker } from "./markers";

export function normalizeId(value: string): string | null {
  const m = value.replace(/[–—]/g, "-").match(/(\d{1,2})\s*-\s*(\d{1,3})/);
  if (!m) return null;
  return `${m[1]}-${m[2]}`;
}

export function matchPlaque(
  markers: Marker[],
  hit: { id: string | null; title: string | null; raw: string },
): Marker | undefined {
  const ids = new Set<string>();
  if (hit.id) ids.add(hit.id);
  for (const chunk of [hit.id, hit.raw, hit.title]) {
    if (!chunk) continue;
    const found = chunk.replace(/[–—]/g, "-").match(/\d{1,2}\s*-\s*\d{1,3}/g) ?? [];
    for (const f of found) {
      const n = normalizeId(f);
      if (n) ids.add(n);
    }
  }

  for (const id of ids) {
    const exact = markers.find((m) => m.id === id);
    if (exact) return exact;
    const padded = markers.find((m) => {
      const [a, b] = id.split("-");
      const [c, d] = m.id.split("-");
      return Number(a) === Number(c) && Number(b) === Number(d);
    });
    if (padded) return padded;
  }

  const title = (hit.title || "").trim().toLowerCase();
  if (title.length >= 4) {
    const named = markers.filter((m) => {
      const n = m.name.toLowerCase();
      return n === title || n.includes(title) || title.includes(n);
    });
    if (named.length === 1) return named[0];
    const tight = named.filter((m) => m.name.toLowerCase() === title);
    if (tight[0]) return tight[0];
  }
  return undefined;
}
