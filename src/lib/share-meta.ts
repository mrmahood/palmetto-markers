export const SITE_NAME = "Palmetto Markers";
export const SITE_ORIGIN = "https://palmettomarkers.grok.me";
export const DEFAULT_DESCRIPTION =
  "A field guide to every official South Carolina historical marker — map, spoken lessons, and plaque scan.";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og.jpg`;

const DESCRIPTION_MAX = 200;

export type ShareMeta = {
  title: string;
  description: string;
  type: "website" | "article";
  image: string;
  url?: string;
};

export type HeadMeta =
  { title: string } | { name: string; content: string } | { property: string; content: string };

export type ShareMarker = {
  name: string;
  city: string;
  county: string;
  front: string;
  back: string;
};

export type ShareTour = {
  title: string;
  region: string;
  blurb: string;
  image: string;
};

export function absoluteAsset(src: string | undefined | null): string {
  const value = (src ?? "").trim();
  if (!value) return DEFAULT_OG_IMAGE;
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_ORIGIN}${value.startsWith("/") ? value : `/${value}`}`;
}

function clipText(text: string): string {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= DESCRIPTION_MAX) return flat;
  const cut = flat.slice(0, DESCRIPTION_MAX - 1);
  const space = cut.lastIndexOf(" ");
  const base = (space > DESCRIPTION_MAX * 0.6 ? cut.slice(0, space) : cut).replace(
    /[.,;:\s]+$/,
    "",
  );
  return `${base}…`;
}

export function siteShare(): ShareMeta {
  return {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    type: "website",
    image: DEFAULT_OG_IMAGE,
    url: `${SITE_ORIGIN}/`,
  };
}

export function markerShareDescription(marker: ShareMarker): string {
  const where = [marker.city, marker.county ? `${marker.county} County` : ""]
    .filter(Boolean)
    .join(", ");
  const inscription = [marker.front, marker.back].filter(Boolean).join(" ");
  const lead = where ? `${marker.name} — ${where}.` : `${marker.name}.`;
  const body = inscription.trim()
    ? `${lead} ${inscription}`
    : `${lead} A South Carolina historical marker.`;
  return clipText(body);
}

export function markerPageShare(
  marker: ShareMarker,
  imageSrc: string | undefined,
  id: string,
): ShareMeta {
  return {
    title: `${marker.name} · ${SITE_NAME}`,
    description: markerShareDescription(marker),
    url: `${SITE_ORIGIN}/markers/${encodeURIComponent(id)}`,
    type: "article",
    image: absoluteAsset(imageSrc),
  };
}

export function tourPageShare(tour: ShareTour, id: string): ShareMeta {
  return {
    title: `${tour.title} · ${SITE_NAME}`,
    description: clipText(`${tour.title} — ${tour.region}. ${tour.blurb}`),
    url: `${SITE_ORIGIN}/tours/${encodeURIComponent(id)}`,
    type: "article",
    image: absoluteAsset(tour.image),
  };
}

/** Meta descriptors for TanStack `head()`. One `title` and one tag per name/property. */
export function shareMetaDescriptors(meta: ShareMeta): HeadMeta[] {
  const tags: HeadMeta[] = [
    { title: meta.title },
    { name: "description", content: meta.description },
    { property: "og:title", content: meta.title },
    { property: "og:description", content: meta.description },
  ];
  if (meta.url) tags.push({ property: "og:url", content: meta.url });
  tags.push(
    { property: "og:type", content: meta.type },
    { property: "og:image", content: meta.image },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: meta.title },
    { name: "twitter:description", content: meta.description },
    { name: "twitter:image", content: meta.image },
  );
  return tags;
}
