import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LocateFixed, Satellite, Search, SlidersHorizontal } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import { MapCanvas } from "@/components/map-canvas";
import { MarkerPreview } from "@/components/marker-preview";
import { Onboarding } from "@/components/onboarding";
import { Button } from "@/components/ui/button";
import { ERA_LABEL, MARKER_COUNT, REGION_ORDER } from "@/lib/markers";
import { haversineKm } from "@/lib/geo";
import { cn } from "@/lib/utils";
import { selectFiltered, useAppStore } from "@/store/app-store";

export const Route = createFileRoute("/")({ component: MapHome });

function MapHome() {
  const load = useAppStore((s) => s.load);
  const ready = useAppStore((s) => s.ready);
  const markers = useAppStore((s) => s.markers);
  const filters = useAppStore((s) => s.filters);
  const setFilter = useAppStore((s) => s.setFilter);
  const clearFilters = useAppStore((s) => s.clearFilters);
  const seenOnboard = useAppStore((s) => s.seenOnboard);
  const userLoc = useAppStore((s) => s.userLoc);
  const setUserLoc = useAppStore((s) => s.setUserLoc);
  const satellite = useAppStore((s) => s.satellite);
  const setSatellite = useAppStore((s) => s.setSatellite);

  const [mounted, setMounted] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [visible, setVisible] = useState<{ id: string; name: string }[]>([]);
  const [stack, setStack] = useState<{ id: string; name: string }[] | null>(null);
  const [listQuery, setListQuery] = useState("");
  const [flyTo, setFlyTo] = useState<{ lng: number; lat: number; zoom?: number } | null>(
    null,
  );

  useEffect(() => {
    setMounted(true);
    void load();
  }, [load]);

  const filtered = useMemo(
    () => selectFiltered(markers, filters),
    [markers, filters],
  );
  const selected = markers.find((m) => m.id === selectedId) ?? null;
  const km = selected && userLoc ? haversineKm(userLoc, selected) : null;

  function locate() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setUserLoc(loc);
        setFlyTo({ lng: loc.lng, lat: loc.lat, zoom: 11.5 });
      },
      () => {
        setFlyTo({ lng: -80.945, lat: 35.007, zoom: 11 });
      },
      { enableHighAccuracy: true, timeout: 8000 },
    );
  }

  const activeFilterCount = [
    filters.region,
    filters.era,
    filters.theme,
    filters.query,
  ].filter(Boolean).length;

  return (
    <main className="relative h-dvh overflow-hidden bg-background">
      {mounted ? (
        <MapCanvas
          markers={filtered}
          satellite={satellite}
          selectedId={selectedId}
          userLoc={userLoc}
          onSelect={(id) => {
            setSelectedId(id);
            setStack(null);
          }}
          onStack={(ids) => {
            const items = ids
              .map((id) => markers.find((m) => m.id === id))
              .filter((m): m is NonNullable<typeof m> => Boolean(m))
              .map((m) => ({ id: m.id, name: m.name }));
            setStack(items);
            setSelectedId(null);
          }}
          onVisible={setVisible}
          flyTo={flyTo}
        />
      ) : (
        <div className="absolute inset-0 bg-subtle" />
      )}

      <header
        className="pointer-events-none absolute inset-x-0 top-0 z-20 p-3"
        style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
      >
        <div className="pointer-events-auto mx-auto flex max-w-lg items-center gap-2">
          <label className="flex h-11 flex-1 items-center gap-2 rounded-xl border border-border bg-elevated/95 px-3">
            <Search className="size-4 text-muted" />
            <input
              value={filters.query}
              onChange={(e) => setFilter({ query: e.target.value })}
              placeholder="Search markers, towns, counties"
              className="h-full w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
              suppressHydrationWarning
            />
          </label>
          <Button
            variant="secondary"
            size="icon"
            aria-label="Filters"
            onClick={() => setShowFilters((v) => !v)}
            className="relative bg-elevated/95"
          >
            <SlidersHorizontal className="size-4" />
            {activeFilterCount > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-accent" />
            ) : null}
          </Button>
        </div>
        {showFilters ? (
          <div className="pointer-events-auto mx-auto mt-2 max-w-lg rounded-xl border border-border bg-elevated/95 p-3">
            <FilterRow
              label="Region"
              value={filters.region}
              options={REGION_ORDER.map((r) => [r, r] as const)}
              onChange={(region) => setFilter({ region })}
            />
            <FilterRow
              label="Era"
              value={filters.era}
              options={Object.entries(ERA_LABEL)}
              onChange={(era) => setFilter({ era })}
            />
            <div className="mt-2 flex justify-between">
              <p className="text-xs text-muted tabular-nums">
                {filtered.length.toLocaleString()} markers
              </p>
              <button
                type="button"
                className="text-xs font-medium text-accent"
                onClick={clearFilters}
              >
                Clear
              </button>
            </div>
          </div>
        ) : (
          <p className="pointer-events-none mx-auto mt-2 max-w-lg px-1 text-xs text-muted">
            {ready
              ? `${filtered.length.toLocaleString()} official South Carolina markers`
              : `${MARKER_COUNT.toLocaleString()} official South Carolina markers`}
          </p>
        )}
      </header>

      <div className="absolute right-3 top-[7.5rem] z-20 flex flex-col gap-2">
        <Button
          variant="secondary"
          size="icon"
          aria-label="My location"
          className="bg-elevated/95"
          onClick={locate}
        >
          <LocateFixed className="size-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          aria-label="Toggle satellite"
          className={cn("bg-elevated/95", satellite && "text-accent")}
          onClick={() => setSatellite(!satellite)}
        >
          <Satellite className="size-4" />
        </Button>
      </div>

      {stack && stack.length > 1 && !selected ? (
        <div className="pointer-events-auto absolute inset-x-0 bottom-[4.6rem] z-30 px-3">
          <div className="overflow-hidden rounded-2xl border border-border bg-elevated">
            <p className="px-4 pt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
              {stack.length} markers here
            </p>
            <ul className="max-h-56 overflow-y-auto py-1">
              {stack.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedId(item.id);
                      setStack(null);
                    }}
                    className="flex w-full items-center justify-between px-4 py-2.5 text-left"
                  >
                    <span className="truncate font-medium">{item.name}</span>
                    <span className="ml-3 shrink-0 text-xs text-muted">{item.id}</span>
                  </button>
                </li>
              ))}
            </ul>
            {visible.length > stack.length ? (
              <button
                type="button"
                onClick={() => setStack(null)}
                className="w-full border-t border-border py-2.5 text-center text-xs font-medium text-accent"
              >
                All {visible.length} in this view
              </button>
            ) : null}
          </div>
        </div>
      ) : null}

      {!selected && !stack && visible.length > 1 ? (
        <ViewList
          items={visible}
          query={listQuery}
          onQuery={setListQuery}
          onPick={(id) => setSelectedId(id)}
        />
      ) : null}

      {selected ? (
        <MarkerPreview marker={selected} km={km} onClose={() => setSelectedId(null)} />
      ) : null}

      <BottomNav />
      {!seenOnboard ? <Onboarding /> : null}
    </main>
  );
}

function ViewList({
  items,
  query,
  onQuery,
  onPick,
}: {
  items: { id: string; name: string }[];
  query: string;
  onQuery: (v: string) => void;
  onPick: (id: string) => void;
}) {
  const q = query.trim().toLowerCase();
  const shown = q
    ? items.filter((i) => `${i.name} ${i.id}`.toLowerCase().includes(q))
    : items;
  return (
    <div className="pointer-events-auto absolute inset-x-0 bottom-[4.6rem] z-20 px-3">
      <div className="overflow-hidden rounded-2xl border border-border bg-elevated/97 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between px-4 pt-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
            {items.length} in this view
          </p>
        </div>
        {items.length > 8 ? (
          <input
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Filter this list"
            className="mx-3 mt-2 h-9 w-[calc(100%-1.5rem)] rounded-lg border border-border bg-subtle px-3 text-sm outline-none placeholder:text-muted"
            suppressHydrationWarning
          />
        ) : null}
        <ul className="max-h-52 overflow-y-auto py-1">
          {shown.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onPick(item.id)}
                className="flex w-full items-center justify-between px-4 py-2.5 text-left"
              >
                <span className="truncate text-sm font-medium">{item.name}</span>
                <span className="ml-3 shrink-0 text-xs text-muted">{item.id}</span>
              </button>
            </li>
          ))}
          {shown.length === 0 ? (
            <li className="px-4 py-3 text-sm text-muted">No match in this view.</li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}

function FilterRow({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string | null;
  options: readonly (readonly [string, string])[];
  onChange: (v: string | null) => void;
}) {
  return (
    <div className="mb-2">
      <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
        {label}
      </p>
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {options.map(([key, name]) => {
          const on = value === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onChange(on ? null : key)}
              className={cn(
                "h-8 shrink-0 rounded-full border px-3 text-xs font-medium",
                on
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-subtle text-foreground",
              )}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
