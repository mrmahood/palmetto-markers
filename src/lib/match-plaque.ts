import type { Marker } from "./markers";

const DASHES = /[–—]/g;
const ID_PATTERN = /(?:^|[^\d])(\d{1,2})\s*-\s*(\d{1,3})(?!\d)/g;

/**
 * County codes are stored as two digits. The sequence is two digits under 100
 * (07-15, 46-21) and three when it needs them (40-122).
 */
function padPlaqueId(left: string, right: string): string {
  const county = String(Number(left)).padStart(2, "0");
  const sequence = Number(right);
  const seq = sequence < 100 ? String(sequence).padStart(2, "0") : String(sequence);
  return `${county}-${seq}`;
}

function idPattern(): RegExp {
  return new RegExp(ID_PATTERN.source, "g");
}

/** Canonical marker number, or null when the text has no plaque id. */
export function normalizeId(value: string): string | null {
  const match = idPattern().exec(value.replace(DASHES, "-"));
  if (!match) return null;
  return padPlaqueId(match[1], match[2]);
}

/** Whole-string marker number with a 2- or 3-digit sequence (46-21, not the prefix 46-2). */
export function isCompleteMarkerId(value: string): boolean {
  return /^\d{1,2}\s*-\s*\d{2,3}$/.test(value.trim().replace(DASHES, "-"));
}

function canonicalMarkerId(id: string): string | null {
  const match = /^(\d{1,2})-(\d{1,3})$/.exec(id.trim());
  if (!match) return null;
  return padPlaqueId(match[1], match[2]);
}

function addId(ids: string[], id: string | null | undefined) {
  if (!id) return;
  const trimmed = id.trim();
  if (!trimmed || ids.includes(trimmed)) return;
  ids.push(trimmed);
}

/** Caller-supplied id first, then as-written and padded forms. Exact string match uses this order. */
function collectIds(hit: { id: string | null; title: string | null; raw: string }): string[] {
  const ids: string[] = [];
  addId(ids, hit.id);
  for (const chunk of [hit.id, hit.raw, hit.title]) {
    if (!chunk) continue;
    for (const match of chunk.replace(DASHES, "-").matchAll(idPattern())) {
      addId(ids, `${match[1]}-${match[2]}`);
      addId(ids, `${Number(match[1])}-${Number(match[2])}`);
      addId(ids, padPlaqueId(match[1], match[2]));
    }
  }
  return ids;
}

export function matchPlaque(
  markers: Marker[],
  hit: { id: string | null; title: string | null; raw: string },
): Marker | undefined {
  const ids = collectIds(hit);

  for (const id of ids) {
    const exact = markers.find((marker) => marker.id === id);
    if (exact) return exact;
  }

  for (const id of ids) {
    const key = normalizeId(id);
    if (!key) continue;
    const padded = markers.filter((marker) => canonicalMarkerId(marker.id) === key);
    if (padded.length === 1) return padded[0];
    // Two different records share the number and neither id was exact. Don't guess.
    if (padded.length > 1) return undefined;
  }

  const title = (hit.title || "").trim().toLowerCase();
  if (title.length >= 4) {
    const exact = markers.filter((marker) => marker.name.trim().toLowerCase() === title);
    if (exact.length === 1) return exact[0];
    if (exact.length > 1) return undefined;
    const loose = markers.filter((marker) => {
      const name = marker.name.trim().toLowerCase();
      return name.length >= 4 && (name.includes(title) || title.includes(name));
    });
    if (loose.length === 1) return loose[0];
  }
  return undefined;
}
