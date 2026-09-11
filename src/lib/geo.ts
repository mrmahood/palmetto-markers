import type { Marker } from "./markers";

export const SC_CENTER: [number, number] = [-81.0, 33.83];
export const SC_BOUNDS: [[number, number], [number, number]] = [
  [-83.36, 32.03],
  [-78.5, 35.22],
];

export function haversineKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const s1 = Math.sin(dLat / 2);
  const s2 = Math.sin(dLng / 2);
  const h =
    s1 * s1 +
    Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * s2 * s2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

export function formatKm(km: number): string {
  if (km < 0.1) return `${Math.round(km * 1000)} m`;
  if (km < 10) return `${km.toFixed(1)} km`;
  return `${Math.round(km)} km`;
}

export function nearestMarkers(
  origin: { lat: number; lng: number },
  markers: Marker[],
  n = 8,
): { marker: Marker; km: number }[] {
  return markers
    .map((marker) => ({ marker, km: haversineKm(origin, marker) }))
    .sort((a, b) => a.km - b.km)
    .slice(0, n);
}

export function directionsUrl(m: { lat: number; lng: number; name: string }): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${m.lat},${m.lng}&destination_place_id=&travelmode=driving`;
}
