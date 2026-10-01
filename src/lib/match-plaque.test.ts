import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { isCompleteMarkerId, matchPlaque, normalizeId } from "./match-plaque.ts";
import type { Marker } from "./markers.ts";

function marker(id: string, name: string): Marker {
  return {
    id,
    name,
    name2: "",
    lat: 0,
    lng: 0,
    county: "",
    cc: "",
    region: "",
    city: "",
    addr: "",
    front: "",
    back: "",
    year: null,
    era: "other",
    tags: [],
    sponsor: "",
    missing: false,
  };
}

const atlas = [
  marker("07-15", "Penn School"),
  marker("46-21", "Fort Mill"),
  marker("40-122", "State House"),
  marker("10-04", "Old Bank Building"),
  marker("08-34", "St. Stephen's Episcopal Church"),
  marker("08-34 [should be 8-33]", "Moss Grove"),
];

describe("normalizeId", () => {
  it("pads unpadded county and sequence numbers", () => {
    assert.equal(normalizeId("7-15"), "07-15");
    assert.equal(normalizeId("07-15"), "07-15");
    assert.equal(normalizeId("10-4"), "10-04");
    assert.equal(normalizeId("46-21"), "46-21");
  });

  it("keeps a three-digit sequence", () => {
    assert.equal(normalizeId("40-122"), "40-122");
  });

  it("accepts dashes and spaces around the hyphen", () => {
    assert.equal(normalizeId("7–15"), "07-15");
    assert.equal(normalizeId("7—15"), "07-15");
    assert.equal(normalizeId("  7 - 15 "), "07-15");
  });

  it("reads a number embedded in plaque text", () => {
    assert.equal(normalizeId("SOUTH CAROLINA 7-15 Penn School"), "07-15");
  });

  it("returns null when there is no marker number", () => {
    assert.equal(normalizeId(""), null);
    assert.equal(normalizeId("Penn School"), null);
    assert.equal(normalizeId("123-4567"), null);
  });
});

describe("isCompleteMarkerId", () => {
  it("accepts a full typed number and rejects a one-digit prefix", () => {
    assert.equal(isCompleteMarkerId("46-21"), true);
    assert.equal(isCompleteMarkerId("7-15"), true);
    assert.equal(isCompleteMarkerId("07–15"), true);
    assert.equal(isCompleteMarkerId("46-2"), false);
    assert.equal(isCompleteMarkerId("fort mill"), false);
  });
});

describe("matchPlaque", () => {
  it("matches padded and unpadded ids to the stored marker", () => {
    const penn = atlas[0];
    assert.equal(matchPlaque(atlas, { id: "7-15", title: null, raw: "" }), penn);
    assert.equal(matchPlaque(atlas, { id: "07-15", title: null, raw: "" }), penn);
    assert.equal(matchPlaque(atlas, { id: null, title: null, raw: "No. 7-15" }), penn);
    assert.equal(matchPlaque(atlas, { id: "46-21", title: null, raw: "" })?.name, "Fort Mill");
    assert.equal(
      matchPlaque(atlas, { id: "10-4", title: null, raw: "" })?.name,
      "Old Bank Building",
    );
    assert.equal(matchPlaque(atlas, { id: "40-122", title: null, raw: "" })?.name, "State House");
  });

  it("matches an unpadded stored id from a padded read", () => {
    const stored = [marker("7-15", "Penn School")];
    assert.equal(matchPlaque(stored, { id: "07-15", title: null, raw: "7-15" })?.id, "7-15");
  });

  it("prefers the exact id when both paddings exist", () => {
    const both = [marker("7-15", "Unpadded"), marker("07-15", "Padded")];
    assert.equal(matchPlaque(both, { id: "7-15", title: null, raw: "" })?.name, "Unpadded");
    assert.equal(matchPlaque(both, { id: "07-15", title: null, raw: "" })?.name, "Padded");
  });

  it("does not let an annotated duplicate steal a pad match", () => {
    assert.equal(
      matchPlaque(atlas, { id: "8-34", title: null, raw: "" })?.name,
      "St. Stephen's Episcopal Church",
    );
  });

  it("prefers an id match over a conflicting title", () => {
    const hit = matchPlaque(atlas, {
      id: "46-21",
      title: "Penn School",
      raw: "46-21",
    });
    assert.equal(hit?.id, "46-21");
  });

  it("returns undefined when nothing matches", () => {
    assert.equal(matchPlaque(atlas, { id: "99-99", title: null, raw: "no plaque" }), undefined);
    assert.equal(matchPlaque(atlas, { id: null, title: "zzzz", raw: "" }), undefined);
    assert.equal(matchPlaque([], { id: "07-15", title: "Penn School", raw: "" }), undefined);
  });

  it("matches one exact title and refuses duplicate titles", () => {
    assert.equal(matchPlaque(atlas, { id: null, title: "Fort Mill", raw: "" })?.id, "46-21");
    const dupes = [
      marker("01-01", "First Baptist Church"),
      marker("02-02", "First Baptist Church"),
    ];
    assert.equal(
      matchPlaque(dupes, { id: null, title: "First Baptist Church", raw: "" }),
      undefined,
    );
  });

  it("refuses a loose title when more than one marker could match", () => {
    const forts = [marker("10-01", "Fort Sumter"), marker("10-02", "Fort Moultrie")];
    assert.equal(
      matchPlaque(forts, { id: null, title: "Fort Sumter and Fort Moultrie", raw: "" }),
      undefined,
    );
    assert.equal(matchPlaque(forts, { id: null, title: "Fort Sumter", raw: "" })?.id, "10-01");
  });

  it("allows a single loose title match", () => {
    const hit = matchPlaque(atlas, {
      id: null,
      title: "Lesson at Penn School on St. Helena",
      raw: "",
    });
    assert.equal(hit?.id, "07-15");
  });
});
