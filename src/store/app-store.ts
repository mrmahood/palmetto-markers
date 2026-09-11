import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Marker } from "@/lib/markers";
import { loadMapMarkers } from "@/lib/markers";
import { DEFAULT_NARRATOR, type NarratorId } from "@/lib/voices";

type Filters = {
  region: string | null;
  era: string | null;
  theme: string | null;
  query: string;
};

type AppState = {
  markers: Marker[];
  ready: boolean;
  error: string | null;
  filters: Filters;
  favorites: string[];
  visited: string[];
  seenOnboard: boolean;
  seenInstall: boolean;
  userLoc: { lat: number; lng: number } | null;
  satellite: boolean;
  narrator: NarratorId;
  load: () => Promise<void>;
  setFilter: (patch: Partial<Filters>) => void;
  clearFilters: () => void;
  toggleFavorite: (id: string) => void;
  markVisited: (id: string) => void;
  setSeenOnboard: () => void;
  setSeenInstall: () => void;
  setUserLoc: (loc: { lat: number; lng: number } | null) => void;
  setSatellite: (on: boolean) => void;
  setNarrator: (id: NarratorId) => void;
};

const emptyFilters: Filters = {
  region: null,
  era: null,
  theme: null,
  query: "",
};

const noopStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      markers: [],
      ready: false,
      error: null,
      filters: emptyFilters,
      favorites: [],
      visited: [],
      seenOnboard: false,
      seenInstall: false,
      userLoc: null,
      satellite: false,
      narrator: DEFAULT_NARRATOR,
      load: async () => {
        if (get().ready && get().markers.length) return;
        try {
          const markers = await loadMapMarkers();
          set({ markers, ready: true, error: null });
        } catch (err) {
          set({
            error: err instanceof Error ? err.message : "Failed to load markers",
            ready: true,
          });
        }
      },
      setFilter: (patch) =>
        set((s) => ({ filters: { ...s.filters, ...patch } })),
      clearFilters: () => set({ filters: emptyFilters }),
      toggleFavorite: (id) =>
        set((s) => ({
          favorites: s.favorites.includes(id)
            ? s.favorites.filter((x) => x !== id)
            : [...s.favorites, id],
        })),
      markVisited: (id) =>
        set((s) =>
          s.visited.includes(id) ? s : { visited: [...s.visited, id] },
        ),
      setSeenOnboard: () => set({ seenOnboard: true }),
      setSeenInstall: () => set({ seenInstall: true }),
      setUserLoc: (loc) => set({ userLoc: loc }),
      setSatellite: (on) => set({ satellite: on }),
      setNarrator: (id) => set({ narrator: id }),
    }),
    {
      name: "palmetto-markers-v1",
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? noopStorage : localStorage,
      ),
      partialize: (s) => ({
        favorites: s.favorites,
        visited: s.visited,
        seenOnboard: s.seenOnboard,
        seenInstall: s.seenInstall,
        narrator: s.narrator,
      }),
    },
  ),
);

export function selectFiltered(markers: Marker[], filters: Filters): Marker[] {
  const q = filters.query.trim().toLowerCase();
  return markers.filter((m) => {
    if (filters.region && m.region !== filters.region) return false;
    if (filters.era && m.era !== filters.era) return false;
    if (filters.theme && !m.tags.includes(filters.theme)) return false;
    if (q) {
      const hay =
        `${m.name} ${m.name2} ${m.city} ${m.county} ${m.addr} ${m.id}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}
