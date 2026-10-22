import type { Marker } from "./markers";
import markerJson from "../../public/data/markers.json?raw";

let byId: Map<string, Marker> | undefined;

function catalog(): Map<string, Marker> {
  if (!byId) {
    const rows = JSON.parse(markerJson) as Marker[];
    byId = new Map(rows.map((marker) => [marker.id, marker]));
  }
  return byId;
}

export function readMarkerById(id: string): Marker | null {
  return catalog().get(id) ?? null;
}
