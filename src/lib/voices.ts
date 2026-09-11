export type NarratorId = "palmetto" | "lowcountry" | "piedmont" | "harbor";

export type Narrator = {
  id: NarratorId;
  voice: string;
  name: string;
  blurb: string;
};

/** Named guides — xAI voice IDs stay on the server. */
export const NARRATORS: Narrator[] = [
  {
    id: "palmetto",
    voice: "castor",
    name: "Palmetto",
    blurb: "Down-home and unhurried — the closest thing to a Carolina porch voice.",
  },
  {
    id: "lowcountry",
    voice: "lumen",
    name: "Lowcountry",
    blurb: "Warm and clear, like a Sea Island guide walking you to the marker.",
  },
  {
    id: "piedmont",
    voice: "lux",
    name: "Piedmont",
    blurb: "Quiet, grounded, a little gravel — upcountry historian.",
  },
  {
    id: "harbor",
    voice: "orion",
    name: "Harbor",
    blurb: "Deep and cinematic, like evening radio out of Charleston.",
  },
];

export const DEFAULT_NARRATOR: NarratorId = "palmetto";

export function getNarrator(id: string | null | undefined): Narrator {
  return NARRATORS.find((n) => n.id === id) ?? NARRATORS[0];
}
