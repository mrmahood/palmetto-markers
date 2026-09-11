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
  ];
