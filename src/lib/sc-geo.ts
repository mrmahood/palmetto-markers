export type LngLat = [number, number];

export type Geom =
  | { type: "Polygon"; coordinates: LngLat[][] }
  | { type: "MultiPolygon"; coordinates: LngLat[][][] };

export type ScFeature = {
  type: "Feature";
  properties: { name: string; id?: string };
  geometry: Geom;
};

export type ScMapData = {
  state: ScFeature;
  counties: ScFeature[];
  neighbors: ScFeature[];
};

/** Coarse outline so the atlas paints even if sc-map.json is slow. */
export const SC_FALLBACK: ScMapData = {
  state: {
    type: "Feature",
    properties: { name: "South Carolina", id: "45" },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-82.764, 35.067],
          [-82.551, 35.16],
          [-82.277, 35.198],
          [-81.044, 35.149],
          [-81.039, 35.045],
          [-80.935, 35.105],
          [-80.781, 34.935],
          [-80.798, 34.82],
          [-79.675, 34.804],
          [-78.541, 33.851],
          [-78.717, 33.802],
          [-78.936, 33.637],
          [-79.149, 33.38],
          [-79.188, 33.172],
          [-79.357, 33.008],
          [-79.582, 33.008],
          [-79.631, 32.887],
          [-79.867, 32.756],
          [-79.998, 32.613],
          [-80.206, 32.553],
          [-80.431, 32.4],
          [-80.453, 32.328],
          [-80.661, 32.246],
          [-80.886, 32.033],
          [-81.116, 32.12],
          [-81.121, 32.29],
          [-81.28, 32.558],
          [-81.417, 32.63],
          [-81.428, 32.843],
          [-81.493, 33.008],
          [-81.762, 33.161],
          [-81.937, 33.347],
          [-81.926, 33.462],
          [-82.195, 33.632],
          [-82.326, 33.818],
          [-82.556, 33.944],
          [-82.715, 34.152],
          [-82.748, 34.267],
          [-82.901, 34.486],
          [-83.005, 34.47],
          [-83.339, 34.684],
          [-83.323, 34.788],
          [-83.109, 35.001],
          [-82.764, 35.067],
        ],
      ],
    },
  },
  counties: [],
  neighbors: [],
};

let cache: ScMapData | null = null;
let inflight: Promise<ScMapData> | null = null;

export function loadScMap(): Promise<ScMapData> {
  if (cache) return Promise.resolve(cache);
  if (!inflight) {
    inflight = fetch("/data/sc-map.json")
      .then((r) => {
        if (!r.ok) throw new Error("Could not load map geography");
        return r.json() as Promise<ScMapData>;
      })
      .then((data) => {
        cache = data;
        return data;
      })
      .catch(() => {
        cache = SC_FALLBACK;
        return cache;
      });
  }
  return inflight;
}

export function centroid(geom: Geom): LngLat {
  const ring =
    geom.type === "Polygon" ? geom.coordinates[0] : geom.coordinates[0]?.[0];
  if (!ring?.length) return [-81, 33.83];
  let x = 0;
  let y = 0;
  const n = Math.max(1, ring.length - 1);
  for (let i = 0; i < n; i++) {
    x += ring[i][0];
    y += ring[i][1];
  }
  return [x / n, y / n];
}

export const ATLAS_CITIES: { name: string; lng: number; lat: number; major?: boolean }[] =
  [
    { name: "Charleston", lng: -79.931, lat: 32.777, major: true },
    { name: "Columbia", lng: -81.035, lat: 34.001, major: true },
    { name: "Greenville", lng: -82.394, lat: 34.853, major: true },
    { name: "Myrtle Beach", lng: -78.887, lat: 33.689, major: true },
    { name: "Spartanburg", lng: -81.932, lat: 34.95 },
    { name: "Rock Hill", lng: -81.025, lat: 34.925 },
    { name: "Florence", lng: -79.763, lat: 34.195 },
    { name: "Beaufort", lng: -80.67, lat: 32.432 },
    { name: "Aiken", lng: -81.72, lat: 33.56 },
    { name: "Hilton Head", lng: -80.753, lat: 32.216 },
    { name: "Georgetown", lng: -79.295, lat: 33.377 },
    { name: "Fort Mill", lng: -80.945, lat: 35.007 },
    { name: "Sumter", lng: -80.342, lat: 33.92 },
    { name: "Anderson", lng: -82.65, lat: 34.503 },
    { name: "York", lng: -81.242, lat: 34.994 },
    { name: "Clover", lng: -81.177, lat: 35.111 },
    { name: "Tega Cay", lng: -81.028, lat: 35.037 },
    { name: "Lancaster", lng: -80.771, lat: 34.72 },
    { name: "Chester", lng: -81.214, lat: 34.705 },
    { name: "Gaffney", lng: -81.65, lat: 35.072 },
    { name: "Camden", lng: -80.607, lat: 34.246 },
    { name: "Summerville", lng: -80.176, lat: 33.019 },
    { name: "Mount Pleasant", lng: -79.828, lat: 32.832 },
    { name: "Orangeburg", lng: -80.866, lat: 33.492 },
    { name: "Greenwood", lng: -82.162, lat: 34.189 },
    { name: "Newberry", lng: -81.619, lat: 34.274 },
    { name: "Seneca", lng: -82.953, lat: 34.684 },
    { name: "Clemson", lng: -82.837, lat: 34.683 },
    { name: "Hartsville", lng: -80.073, lat: 34.374 },
    { name: "Conway", lng: -79.056, lat: 33.836 },
    { name: "Lexington", lng: -81.236, lat: 33.981 },
    { name: "North Augusta", lng: -81.965, lat: 33.502 },
    { name: "Union", lng: -81.623, lat: 34.715 },
    { name: "Cheraw", lng: -79.883, lat: 34.698 },
  ];

/** Water names that explain the piedmont, not just the big cities. */
export const WATER_LABELS: { name: string; lng: number; lat: number }[] = [
  { name: "Lake Wylie", lng: -81.03, lat: 35.095 },
  { name: "Lake Murray", lng: -81.33, lat: 34.065 },
  { name: "Lake Marion", lng: -80.35, lat: 33.45 },
  { name: "Lake Moultrie", lng: -80.05, lat: 33.3 },
];

export const RIVER_LABELS: { name: string; lng: number; lat: number; major?: boolean }[] = [
  { name: "Catawba River", lng: -80.984, lat: 34.992, major: true },
  { name: "Wateree", lng: -80.62, lat: 34.12 },
  { name: "Congaree", lng: -80.85, lat: 33.88 },
  { name: "Santee", lng: -79.85, lat: 33.42 },
  { name: "Pee Dee", lng: -79.55, lat: 34.15 },
  { name: "Savannah", lng: -81.75, lat: 33.35 },
  { name: "Broad", lng: -81.48, lat: 34.55 },
  { name: "Saluda", lng: -81.85, lat: 34.25 },
  { name: "Edisto", lng: -80.55, lat: 33.05 },
  { name: "Ashley", lng: -80.15, lat: 32.95 },
  { name: "Cooper", lng: -79.93, lat: 33.0 },
  { name: "Waccamaw", lng: -79.05, lat: 33.55 },
];

export type AtlasLandmark = {
  id: string;
  name: string;
  note: string;
  lng: number;
  lat: number;
  minZ: number;
};

/**
 * Carhartt's marker sits on the Rock Hill bluff. Fort Mill is on the
 * opposite bank of the Catawba, so the callout has to survive clustering.
 */
export const ATLAS_LANDMARKS: AtlasLandmark[] = [
  {
    id: "46-82",
    name: "Carhartt Mansion",
    note: "York County · west bank, across from Fort Mill",
    lng: -80.95815,
    lat: 34.97315,
    minZ: 3.4,
  },
];

export const PLACE_NOTES: Record<string, string> = {
  "46-82":
    "York County, on the west bank of the Catawba — across the river from Fort Mill.",
};

export type RiverData = { name: string; paths: LngLat[][] };

const MAJOR_RIVERS = new Set([
  "Catawba",
  "Savannah",
  "Pee Dee",
  "Santee",
  "Congaree",
  "Wateree",
  "Broad",
  "Saluda",
  "Edisto",
  "Cooper",
  "Ashley",
  "Waccamaw",
]);

export function isMajorRiver(name: string) {
  return MAJOR_RIVERS.has(name);
}

let riverCache: RiverData[] | null = null;
let riverInflight: Promise<RiverData[]> | null = null;

export function loadRivers(): Promise<RiverData[]> {
  if (riverCache) return Promise.resolve(riverCache);
  if (!riverInflight) {
    riverInflight = fetch("/data/rivers.json")
      .then((r) => {
        if (!r.ok) throw new Error("Could not load rivers");
        return r.json() as Promise<RiverData[]>;
      })
      .then((data) => {
        riverCache = data;
        return data;
      })
      .catch(() => {
        riverCache = [];
        return riverCache;
      });
  }
  return riverInflight;
}
