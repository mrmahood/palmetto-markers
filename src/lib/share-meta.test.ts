import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  escapeHtml,
  injectGrokPwaHead,
  snapshotOgIdentity,
} from "../../scripts/grok-pwa-shared.mjs";
import { heroImage, type Marker } from "./markers.ts";
import {
  absoluteAsset,
  markerPageShare,
  shareMetaDescriptors,
  siteShare,
  type HeadMeta,
} from "./share-meta.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..");

function renderSsrHead(meta: HeadMeta[]): string {
  const parts = meta.map((tag) => {
    if ("title" in tag) return `<title>${escapeHtml(tag.title)}</title>`;
    if ("property" in tag) {
      return `<meta property="${escapeHtml(tag.property)}" content="${escapeHtml(tag.content)}"/>`;
    }
    return `<meta name="${escapeHtml(tag.name)}" content="${escapeHtml(tag.content)}"/>`;
  });
  return `<!doctype html><html><head>${parts.join("")}</head><body></body></html>`;
}

/** Child route wins on title and on each name/property, matching TanStack head dedupe. */
function mergeHead(parent: HeadMeta[], child: HeadMeta[]): HeadMeta[] {
  const childKeys = new Set<string>();
  let childTitle = false;
  for (const tag of child) {
    if ("title" in tag) childTitle = true;
    else if ("property" in tag) childKeys.add(tag.property);
    else childKeys.add(tag.name);
  }
  const kept = parent.filter((tag) => {
    if ("title" in tag) return !childTitle;
    if ("property" in tag) return !childKeys.has(tag.property);
    return !childKeys.has(tag.name);
  });
  return [...kept, ...child];
}

function ogTitle(html: string): string[] {
  return [...html.matchAll(/property="og:title" content="([^"]*)"/g)].map((match) => match[1]);
}

test("SSR HTML for a marker contains its title in og:title", () => {
  const markers = JSON.parse(
    readFileSync(join(ROOT, "public/data/markers.json"), "utf8"),
  ) as Marker[];
  const marker = markers.find((row) => row.id === "46-21");
  assert.ok(marker, "marker 46-21 is in the catalog");

  const merged = mergeHead(
    shareMetaDescriptors(siteShare()),
    shareMetaDescriptors(markerPageShare(marker, heroImage(marker), marker.id)),
  );
  const out = injectGrokPwaHead(renderSsrHead(merged), {
    host: "palmettomarkers.grok.me",
    cwd: ROOT,
    site: snapshotOgIdentity(ROOT).site,
  });

  assert.deepEqual(ogTitle(out), ["Fort Mill · Palmetto Markers"]);
  assert.equal(out.split('property="og:description"').length - 1, 1);
  assert.match(out, /property="og:description" content="Fort Mill — Fort Mill, York County\./);
  assert.equal(out.split('property="og:url"').length - 1, 1);
  assert.match(
    out,
    /property="og:url" content="https:\/\/palmettomarkers\.grok\.me\/markers\/46-21"/,
  );
  assert.equal(out.split('property="og:type"').length - 1, 1);
  assert.match(out, /property="og:type" content="article"/);
  assert.doesNotMatch(out, /content="x:game"/);
  assert.equal(out.split('property="og:image"').length - 1, 1);
  assert.match(
    out,
    /property="og:image" content="https:\/\/palmettomarkers\.grok\.me\/images\/hist\/catawba-map\.jpg"/,
  );
  assert.match(out, /property="og:site_name" content="Palmetto Markers"/);
  assert.equal(out.split('name="twitter:card"').length - 1, 1);
  assert.match(out, /name="twitter:card" content="summary_large_image"/);
  assert.match(out, /name="twitter:title" content="Fort Mill · Palmetto Markers"/);
  assert.match(
    out,
    /name="twitter:image" content="https:\/\/palmettomarkers\.grok\.me\/images\/hist\/catawba-map\.jpg"/,
  );
  assert.equal(out.split("<title>").length - 1, 1);
  assert.match(out, /<title>Fort Mill · Palmetto Markers<\/title>/);
});

test("a marker with no image falls back to the site card", () => {
  assert.equal(absoluteAsset(""), "https://palmettomarkers.grok.me/og.jpg");
  assert.equal(
    absoluteAsset("/images/hist/catawba-map.jpg"),
    "https://palmettomarkers.grok.me/images/hist/catawba-map.jpg",
  );
});
