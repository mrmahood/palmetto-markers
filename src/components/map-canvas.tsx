import { useEffect, useRef } from "react";
import type { Marker } from "@/lib/markers";
import { SC_BOUNDS, SC_CENTER } from "@/lib/geo";
import {
  ATLAS_CITIES,
  ATLAS_LANDMARKS,
  RIVER_LABELS,
  SC_FALLBACK,
  WATER_LABELS,
  centroid,
  isMajorRiver,
  loadRivers,
  loadScMap,
  type Geom,
  type RiverData,
  type ScMapData,
} from "@/lib/sc-geo";
import type { AtlasTheme } from "@/store/app-store";

type Props = {
  markers: Marker[];
  satellite: boolean;
  theme: AtlasTheme;
  selectedId: string | null;
  userLoc: { lat: number; lng: number } | null;
  onSelect: (id: string | null) => void;
  onStack?: (ids: string[]) => void;
  onVisible?: (items: { id: string; name: string }[]) => void;
  flyTo?: { lng: number; lat: number; zoom?: number } | null;
};

type Camera = { cx: number; cy: number; k: number };

type Cluster = {
  x: number;
  y: number;
  count: number;
  id?: string;
  ids?: string[];
  lng: number;
  lat: number;
  name?: string;
};

const COS = Math.cos((SC_CENTER[1] * Math.PI) / 180);
const INSET = { top: 92, right: 16, bottom: 104, left: 16 };
type Palette = {
  ocean0: string;
  ocean1: string;
  neighbor: string;
  land: string;
  county: string;
  shore: string;
  pin: string;
  pinStroke: string;
  cluster: string;
  clusterHi: string;
  text: string;
  muted: string;
  user: string;
  river: string;
  riverMajor: string;
  chip: string;
  chipText: string;
  washes: string[];
  york: string;
  landmark: string;
};

const PAL: { ink: Palette; earth: Palette; day: Palette; terrain: Palette } = {
  ink: {
    ocean0: "#16303a",
    ocean1: "#10242c",
    neighbor: "#1a2824",
    land: "#24352c",
    county: "rgba(243,238,228,0.2)",
    shore: "#9dccb0",
    pin: "#f3eee4",
    pinStroke: "#9dccb0",
    cluster: "#3d5c4c",
    clusterHi: "#9dccb0",
    text: "#f3eee4",
    muted: "rgba(243,238,228,0.62)",
    user: "#7eb6e8",
    river: "#7eb8d4",
    riverMajor: "#b7e3f5",
    chip: "rgba(16,24,21,0.92)",
    chipText: "#f3eee4",
    washes: ["#2a3b32", "#24362e", "#2c3830", "#26342c"],
    york: "#3d4a32",
    landmark: "#e7b15a",
  },
  earth: {
    ocean0: "#243028",
    ocean1: "#1a2420",
    neighbor: "#22281c",
    land: "#3a4634",
    county: "rgba(240,230,200,0.2)",
    shore: "#d2c4a2",
    pin: "#f0e6c8",
    pinStroke: "#8a9a6e",
    cluster: "#4a5538",
    clusterHi: "#c6d2a4",
    text: "#f0e6c8",
    muted: "rgba(240,230,200,0.62)",
    user: "#a3b07c",
    river: "#6a9eb4",
    riverMajor: "#9fd0e4",
    chip: "rgba(22,24,16,0.92)",
    chipText: "#f0e6c8",
    washes: ["#3e4a36", "#445238", "#3a4632", "#4a4634"],
    york: "#5a6240",
    landmark: "#e7b15a",
  },
  day: {
    ocean0: "#c5e4f6",
    ocean1: "#a9d4ee",
    neighbor: "#d5e6d4",
    land: "#f7f1e4",
    county: "rgba(31,90,58,0.45)",
    shore: "#1f6b45",
    pin: "#d4532c",
    pinStroke: "#fffaf3",
    cluster: "#1f7a4d",
    clusterHi: "#16603c",
    text: "#1c2822",
    muted: "rgba(28,40,34,0.62)",
    user: "#1d6fbf",
    river: "#3d94c8",
    riverMajor: "#1468a8",
    chip: "rgba(255,250,243,0.96)",
    chipText: "#1c2822",
    washes: ["#e5f3d4", "#f6e4c4", "#dceee6", "#f6ddd2", "#e3eef8", "#efe7c4"],
    york: "#f0d48a",
    landmark: "#9a3412",
  },
  terrain: {
    ocean0: "#d5ead2",
    ocean1: "#c3dfc4",
    neighbor: "#dce8d4",
    land: "#e7f0c8",
    county: "rgba(40,80,40,0.4)",
    shore: "#2f6a32",
    pin: "#c2410c",
    pinStroke: "#fffaf3",
    cluster: "#3f6b28",
    clusterHi: "#2f5a18",
    text: "#1c2820",
    muted: "rgba(28,40,32,0.62)",
    user: "#1d6fbf",
    river: "#2f86c0",
    riverMajor: "#0f5f98",
    chip: "rgba(247,252,240,0.96)",
    chipText: "#1c2820",
    washes: ["#d7ebb0", "#e7e2a4", "#cfe6c4", "#e8d8b0", "#d4e4c8", "#efe0b4"],
    york: "#efd078",
    landmark: "#9a3412",
  },
};

function catawbaFrame(kf: number, w: number, h: number): Camera {
  const minLng = -81.035;
  const maxLng = -80.88;
  const minLat = 34.945;
  const maxLat = 35.038;
  const vw = Math.max(80, w - INSET.left - INSET.right);
  const vh = Math.max(120, h - INSET.top - INSET.bottom);
  const k =
    Math.min(vw / ((maxLng - minLng) * COS), vh / (maxLat - minLat)) * 0.92;
  return {
    cx: (minLng + maxLng) / 2,
    cy: (minLat + maxLat) / 2 - 0.012,
    k: clamp(k, kf * 2, kf * 40),
  };
}

function countyWash(name: string, pal: Palette) {
  if (name === "York") return pal.york;
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 33 + name.charCodeAt(i)) >>> 0;
  return pal.washes[h % pal.washes.length];
}

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function fitK(w: number, h: number) {
  const vw = Math.max(80, w - INSET.left - INSET.right);
  const vh = Math.max(80, h - INSET.top - INSET.bottom);
  const spanX = (SC_BOUNDS[1][0] - SC_BOUNDS[0][0]) * COS;
  const spanY = SC_BOUNDS[1][1] - SC_BOUNDS[0][1];
  return Math.min(vw / spanX, vh / spanY) * 0.92;
}

function originX(w: number) {
  return (INSET.left + w - INSET.right) / 2;
}
function originY(h: number) {
  return (INSET.top + h - INSET.bottom) / 2;
}

function project(cam: Camera, w: number, h: number, lng: number, lat: number) {
  return {
    x: (lng - cam.cx) * COS * cam.k + originX(w),
    y: (cam.cy - lat) * cam.k + originY(h),
  };
}

function unproject(cam: Camera, w: number, h: number, x: number, y: number) {
  return {
    lng: cam.cx + (x - originX(w)) / (COS * cam.k),
    lat: cam.cy - (y - originY(h)) / cam.k,
  };
}

function drawGeom(
  ctx: CanvasRenderingContext2D,
  geom: Geom,
  cam: Camera,
  w: number,
  h: number,
  mode: "fill" | "stroke" | "both",
) {
  const polys = geom.type === "Polygon" ? [geom.coordinates] : geom.coordinates;
  for (const poly of polys) {
    ctx.beginPath();
    for (let r = 0; r < poly.length; r++) {
      const ring = poly[r];
      for (let i = 0; i < ring.length; i++) {
        const p = project(cam, w, h, ring[i][0], ring[i][1]);
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.closePath();
    }
    if (mode === "fill" || mode === "both") ctx.fill();
    if (mode === "stroke" || mode === "both") ctx.stroke();
  }
}

export function MapCanvas({
  markers,
  satellite,
  theme,
  selectedId,
  userLoc,
  onSelect,
  onStack,
  onVisible,
  flyTo,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const propsRef = useRef({
    markers,
    satellite,
    theme,
    selectedId,
    userLoc,
    onSelect,
    onStack,
    onVisible,
    flyTo,
  });
  propsRef.current = {
    markers,
    satellite,
    theme,
    selectedId,
    userLoc,
    onSelect,
    onStack,
    onVisible,
    flyTo,
  };

  const camRef = useRef<Camera>({
    cx: SC_CENTER[0],
    cy: SC_CENTER[1],
    k: 180,
  });
  const geoRef = useRef<ScMapData>(SC_FALLBACK);
  const riversRef = useRef<RiverData[]>([]);
  const landmarkHitsRef = useRef<{ x: number; y: number; id: string; name: string }[]>([]);
  const clustersRef = useRef<Cluster[]>([]);
  const hoverRef = useRef<Cluster | null>(null);
  const fittedRef = useRef(false);
  const kFitRef = useRef(180);
  const animRef = useRef<number | null>(null);
  const drawRef = useRef<() => void>(() => {});
  const easeToRef = useRef<(to: Camera, dur?: number) => void>(() => {});
  const lastFilterKey = useRef<string>("");
  const lastVisibleKey = useRef("");

  useEffect(() => {
    const root = wrapRef.current;
    const view = canvasRef.current;
    if (!root || !view) return;
    const gfx = view.getContext("2d");
    if (!gfx) return;
    const wrap: HTMLDivElement = root;
    const canvas: HTMLCanvasElement = view;
    const ctx: CanvasRenderingContext2D = gfx;

    const pointers = new Map<number, { x: number; y: number }>();
    let lastPinch = 0;
    let moved = 0;
    let down: { x: number; y: number; t: number } | null = null;
    let lastTap: { x: number; y: number; t: number } | null = null;
    let size = { w: 0, h: 0 };
    let raf = 0;
    let dirty = true;

    const palOf = () => {
      const { satellite: sat, theme: mode } = propsRef.current;
      if (sat) return mode === "dark" ? PAL.earth : PAL.terrain;
      return mode === "dark" ? PAL.ink : PAL.day;
    };

    function kRange() {
      const kf = kFitRef.current;
      return { min: kf * 0.82, max: kf * 72 };
    }

    function zoomAt(sx: number, sy: number, factor: number) {
      const cam = camRef.current;
      const geo = unproject(cam, size.w, size.h, sx, sy);
      const { min, max } = kRange();
      cam.k = clamp(cam.k * factor, min, max);
      const after = project(cam, size.w, size.h, geo.lng, geo.lat);
      cam.cx += (after.x - sx) / (COS * cam.k);
      cam.cy -= (after.y - sy) / cam.k;
      dirty = true;
    }

    function fit() {
      const k = fitK(size.w, size.h);
      kFitRef.current = k;
      camRef.current = {
        cx: (SC_BOUNDS[0][0] + SC_BOUNDS[1][0]) / 2,
        cy: (SC_BOUNDS[0][1] + SC_BOUNDS[1][1]) / 2,
        k,
      };
      fittedRef.current = true;
      dirty = true;
    }

    function resize() {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (w < 8 || h < 8) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      size = { w, h };
      if (!fittedRef.current) fit();
      dirty = true;
    }

    function clusterCell() {
      const n = propsRef.current.markers.length;
      if (n <= 24) return 0;
      const z = camRef.current.k / kFitRef.current;
      if (z < 1.6) return 54;
      if (z < 3.2) return 40;
      if (z < 6) return 28;
      if (z < 10) return 20;
      return 0;
    }

    function spiderfy(pins: Cluster[]): Cluster[] {
      const n = pins.length;
      if (n < 2 || n > 120) return pins;
      const parent = pins.map((_, i) => i);
      const find = (a: number): number =>
        parent[a] === a ? a : (parent[a] = find(parent[a]));
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          if (Math.hypot(pins[i].x - pins[j].x, pins[i].y - pins[j].y) < 24) {
            const a = find(i);
            const b = find(j);
            if (a !== b) parent[b] = a;
          }
        }
      }
      const groups = new Map<number, number[]>();
      for (let i = 0; i < n; i++) {
        const root = find(i);
        const g = groups.get(root);
        if (g) g.push(i);
        else groups.set(root, [i]);
      }
      for (const idxs of groups.values()) {
        if (idxs.length === 1) continue;
        const cx = idxs.reduce((s, i) => s + pins[i].x, 0) / idxs.length;
        const cy = idxs.reduce((s, i) => s + pins[i].y, 0) / idxs.length;
        const rings = idxs.length > 10 ? 2 : 1;
        idxs.forEach((i, k) => {
          const ring = rings === 1 ? 0 : k < 8 ? 0 : 1;
          const inRing = rings === 1 ? idxs.length : ring === 0 ? Math.min(8, idxs.length) : idxs.length - 8;
          const idxInRing = ring === 0 ? k : k - 8;
          const r = 22 + ring * 26 + Math.max(0, inRing - 4) * 2.5;
          const a = (idxInRing / inRing) * Math.PI * 2 - Math.PI / 2;
          pins[i].x = cx + Math.cos(a) * r;
          pins[i].y = cy + Math.sin(a) * r;
        });
      }
      return pins;
    }

    function landmarkIdsOn(z: number) {
      const ids = new Set<string>();
      for (const lm of ATLAS_LANDMARKS) if (z >= lm.minZ) ids.add(lm.id);
      return ids;
    }

    function buildClusters(): Cluster[] {
      const { markers: list, selectedId: sel } = propsRef.current;
      const cam = camRef.current;
      const cell = clusterCell();
      const z = cam.k / kFitRef.current;
      const hide = landmarkIdsOn(z);
      const out: Cluster[] = [];
      if (!cell) {
        for (const m of list) {
          if (hide.has(m.id)) continue;
          const p = project(cam, size.w, size.h, m.lng, m.lat);
          if (p.x < -24 || p.y < -24 || p.x > size.w + 24 || p.y > size.h + 24) continue;
          out.push({
            x: p.x,
            y: p.y,
            count: 1,
            id: m.id,
            ids: [m.id],
            lng: m.lng,
            lat: m.lat,
            name: m.name,
          });
        }
        return spiderfy(out);
      }
      const buckets = new Map<string, Cluster>();
      for (const m of list) {
        if (hide.has(m.id)) continue;
        const p = project(cam, size.w, size.h, m.lng, m.lat);
        if (p.x < -40 || p.y < -40 || p.x > size.w + 40 || p.y > size.h + 40) continue;
        if (m.id === sel) continue;
        const gx = Math.floor(p.x / cell);
        const gy = Math.floor(p.y / cell);
        const key = `${gx}:${gy}`;
        const b = buckets.get(key);
        if (!b) {
          buckets.set(key, {
            x: p.x,
            y: p.y,
            count: 1,
            id: m.id,
            ids: [m.id],
            lng: m.lng,
            lat: m.lat,
            name: m.name,
          });
        } else {
          const n = b.count + 1;
          b.x = (b.x * b.count + p.x) / n;
          b.y = (b.y * b.count + p.y) / n;
          b.lng = (b.lng * b.count + m.lng) / n;
          b.lat = (b.lat * b.count + m.lat) / n;
          b.count = n;
          b.ids = [...(b.ids ?? [b.id!]), m.id];
          b.id = undefined;
          b.name = undefined;
        }
      }
      return [...buckets.values()];
    }

    function hitsNear(x: number, y: number, r = 34): Cluster[] {
      return clustersRef.current
        .filter((c) => c.count === 1 && c.id && Math.hypot(c.x - x, c.y - y) < r)
        .sort((a, b) => Math.hypot(a.x - x, a.y - y) - Math.hypot(b.x - x, b.y - y));
    }

    function hit(x: number, y: number): Cluster | null {
      for (const lm of landmarkHitsRef.current) {
        if (Math.hypot(lm.x - x, lm.y - y) < 26) {
          return {
            x: lm.x,
            y: lm.y,
            count: 1,
            id: lm.id,
            ids: [lm.id],
            lng: 0,
            lat: 0,
            name: lm.name,
          };
        }
      }
      const near = hitsNear(x, y, 34);
      if (near[0]) return near[0];
      let best: Cluster | null = null;
      let bestD = 40;
      for (const c of clustersRef.current) {
        if (c.count <= 1) continue;
        const r = 22 + Math.min(14, Math.log2(c.count) * 3);
        const d = Math.hypot(c.x - x, c.y - y);
        if (d < r && d < bestD) {
          best = c;
          bestD = d;
        }
      }
      return best;
    }

    function draw() {
      const { w, h } = size;
      if (w < 8 || h < 8) return;
      const pal = palOf();
      const cam = camRef.current;
      const geo = geoRef.current;
      const z = cam.k / kFitRef.current;

      ctx.clearRect(0, 0, w, h);
      const bg = ctx.createRadialGradient(w * 0.5, h * 0.42, 20, w * 0.5, h * 0.5, Math.max(w, h) * 0.75);
      bg.addColorStop(0, pal.ocean0);
      bg.addColorStop(1, pal.ocean1);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      ctx.fillStyle = pal.neighbor;
      ctx.strokeStyle = pal.shore;
      ctx.globalAlpha = 0.18;
      ctx.lineWidth = 1;
      for (const n of geo.neighbors) {
        drawGeom(ctx, n.geometry, cam, w, h, "both");
      }
      ctx.globalAlpha = 1;

      ctx.fillStyle = pal.land;
      ctx.strokeStyle = pal.shore;
      ctx.lineWidth = 1.6;
      drawGeom(ctx, geo.state.geometry, cam, w, h, "fill");

      if (geo.counties.length) {
        for (const c of geo.counties) {
          ctx.fillStyle = countyWash(c.properties.name, pal);
          drawGeom(ctx, c.geometry, cam, w, h, "fill");
        }
        ctx.strokeStyle = pal.county;
        ctx.lineWidth = z > 2 ? 1.15 : 0.8;
        for (const c of geo.counties) {
          drawGeom(ctx, c.geometry, cam, w, h, "stroke");
        }
      }

      ctx.strokeStyle = pal.shore;
      ctx.lineWidth = 1.8;
      ctx.globalAlpha = 0.9;
      drawGeom(ctx, geo.state.geometry, cam, w, h, "stroke");
      ctx.globalAlpha = 1;

      const rivers = riversRef.current;
      if (rivers.length) {
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        for (const river of rivers) {
          const major = isMajorRiver(river.name);
          if (!major && z < 2.2) continue;
          ctx.strokeStyle = major ? pal.riverMajor : pal.river;
          ctx.globalAlpha = major ? 0.95 : 0.72;
          ctx.lineWidth = major ? (z > 8 ? 4.6 : z > 5 ? 3.2 : z > 2 ? 2.2 : 1.6) : z > 6 ? 1.5 : 0.9;
          ctx.beginPath();
          for (const path of river.paths) {
            if (path.length < 2) continue;
            if (!major && path.length < 6 && z < 4) continue;
            for (let i = 0; i < path.length; i++) {
              const p = project(cam, w, h, path[i][0], path[i][1]);
              if (i === 0) ctx.moveTo(p.x, p.y);
              else ctx.lineTo(p.x, p.y);
            }
          }
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      if (z > 0.9) {
        ctx.font = "italic 600 12px Fraunces, Georgia, serif";
        for (const river of RIVER_LABELS) {
          if (river.name.startsWith("Catawba") && z < 3.2) continue;
          if (!river.major && z < 2.4) continue;
          const p = project(cam, w, h, river.lng, river.lat);
          if (p.x < 36 || p.y < 78 || p.x > w - 36 || p.y > h - 86) continue;
          ctx.fillStyle = pal.riverMajor;
          ctx.globalAlpha = river.major ? 1 : 0.8;
          ctx.lineWidth = 3;
          ctx.strokeStyle = pal.chip;
          ctx.strokeText(river.name, p.x, p.y);
          ctx.fillText(river.name, p.x, p.y);
        }
        if (z > 2.2) {
          ctx.font = "italic 500 11px Fraunces, Georgia, serif";
          for (const lake of WATER_LABELS) {
            const p = project(cam, w, h, lake.lng, lake.lat);
            if (p.x < 36 || p.y < 78 || p.x > w - 36 || p.y > h - 86) continue;
            ctx.fillStyle = pal.river;
            ctx.globalAlpha = 0.9;
            ctx.fillText(lake.name, p.x, p.y);
          }
        }
        ctx.globalAlpha = 1;
      }

      ctx.font = "500 11px Figtree, system-ui, sans-serif";
      ctx.fillStyle = pal.muted;
      if (z > 1.55 && geo.counties.length) {
        for (const c of geo.counties) {
          const [lng, lat] = centroid(c.geometry);
          const p = project(cam, w, h, lng, lat);
          if (p.x < 40 || p.y < 80 || p.x > w - 40 || p.y > h - 80) continue;
          const york = c.properties.name === "York";
          ctx.font = york
            ? "600 12px Figtree, system-ui, sans-serif"
            : "500 11px Figtree, system-ui, sans-serif";
          ctx.fillStyle = york ? pal.text : pal.muted;
          ctx.fillText(york ? "York County" : c.properties.name, p.x, p.y);
        }
      }

      ctx.font = "600 11px Figtree, system-ui, sans-serif";
      for (const city of ATLAS_CITIES) {
        if (!city.major && z < 1.45) continue;
        if (!city.major && z < 2.6 && city.name !== "Fort Mill" && city.name !== "Rock Hill") {
          continue;
        }
        const p = project(cam, w, h, city.lng, city.lat);
        if (p.x < 24 || p.y < 72 || p.x > w - 24 || p.y > h - 90) continue;
        ctx.fillStyle = pal.text;
        ctx.globalAlpha = city.major || city.name === "Fort Mill" ? 0.95 : 0.7;
        ctx.beginPath();
        ctx.arc(p.x, p.y + 11, city.name === "Fort Mill" ? 2.4 : 1.4, 0, Math.PI * 2);
        ctx.fill();
        const fort = city.name === "Fort Mill" && z >= 3.4;
        ctx.font = fort
          ? "700 14px Figtree, system-ui, sans-serif"
          : "600 11px Figtree, system-ui, sans-serif";
        ctx.lineWidth = 3;
        ctx.strokeStyle = pal.chip;
        ctx.strokeText(city.name, p.x, p.y);
        ctx.fillText(city.name, p.x, p.y);
        if (fort) {
          ctx.font = "600 11px Figtree, system-ui, sans-serif";
          ctx.fillStyle = pal.riverMajor;
          ctx.strokeStyle = pal.chip;
          ctx.lineWidth = 3;
          ctx.strokeText("east of the Catawba", p.x, p.y - 15);
          ctx.fillText("east of the Catawba", p.x, p.y - 15);
        }
      }
      ctx.globalAlpha = 1;

      const clusters = buildClusters();
      clustersRef.current = clusters;

      const inView: { id: string; name: string }[] = [];
      if (z >= 3.4) {
        for (const m of propsRef.current.markers) {
          const p = project(cam, w, h, m.lng, m.lat);
          if (p.x < 4 || p.y < 72 || p.x > w - 4 || p.y > h - 88) continue;
          inView.push({ id: m.id, name: m.name });
        }
        inView.sort((a, b) => a.name.localeCompare(b.name));
      }
      const visKey = inView.map((c) => c.id).join("|");
      if (visKey !== lastVisibleKey.current) {
        lastVisibleKey.current = visKey;
        propsRef.current.onVisible?.(inView);
      }

      for (const c of clusters) {
        if (c.count === 1) {
          ctx.beginPath();
          ctx.fillStyle = pal.pin;
          ctx.strokeStyle = pal.pinStroke;
          ctx.lineWidth = 2;
          ctx.arc(c.x, c.y, 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else {
          const r = 14 + Math.min(10, Math.log2(c.count) * 2.4);
          const fill = c.count > 60 ? pal.clusterHi : pal.cluster;
          ctx.beginPath();
          ctx.fillStyle = fill;
          ctx.strokeStyle = pal.pin;
          ctx.lineWidth = 1.2;
          ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = propsRef.current.theme === "light" ? pal.pinStroke : pal.pin;
          ctx.font = "600 11px Figtree, system-ui, sans-serif";
          ctx.fillText(c.count > 999 ? `${Math.round(c.count / 100) / 10}k` : String(c.count), c.x, c.y);
        }
      }

      const sel = propsRef.current.selectedId;
      if (sel) {
        const m = propsRef.current.markers.find((mm) => mm.id === sel);
        if (m) {
          const p = project(cam, w, h, m.lng, m.lat);
          ctx.beginPath();
          ctx.strokeStyle = pal.pin;
          ctx.lineWidth = 2;
          ctx.globalAlpha = 0.5;
          ctx.arc(p.x, p.y, 14, 0, Math.PI * 2);
          ctx.stroke();
          ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.fillStyle = pal.clusterHi;
          ctx.strokeStyle = pal.pin;
          ctx.lineWidth = 2;
          ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          if (m.name) {
            const lm = ATLAS_LANDMARKS.find((item) => item.id === m.id);
            const label = m.name.length > 32 ? `${m.name.slice(0, 30)}…` : m.name;
            const note = lm?.note;
            ctx.font = "600 12px Figtree, system-ui, sans-serif";
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            const tw = ctx.measureText(label).width;
            let nw = 0;
            if (note) {
              ctx.font = "500 11px Figtree, system-ui, sans-serif";
              nw = ctx.measureText(note).width;
            }
            const boxW = Math.max(tw, nw) + 14;
            const boxH = note ? 36 : 22;
            ctx.fillStyle = pal.chip;
            ctx.strokeStyle = pal.county;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.roundRect(p.x + 12, p.y - boxH / 2, boxW, boxH, 8);
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = pal.chipText;
            ctx.font = "600 12px Figtree, system-ui, sans-serif";
            ctx.fillText(label, p.x + 19, note ? p.y - 7 : p.y);
            if (note) {
              ctx.font = "500 11px Figtree, system-ui, sans-serif";
              ctx.fillStyle = pal.riverMajor;
              ctx.fillText(note, p.x + 19, p.y + 8);
            }
            ctx.textAlign = "center";
          }
        }
      }

      const loc = propsRef.current.userLoc;
      if (loc) {
        const p = project(cam, w, h, loc.lng, loc.lat);
        ctx.beginPath();
        ctx.fillStyle = pal.user;
        ctx.globalAlpha = 0.2;
        ctx.arc(p.x, p.y, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.fillStyle = pal.user;
        ctx.strokeStyle = pal.pin;
        ctx.lineWidth = 3;
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      const hover = hoverRef.current;
      if (hover?.name && hover.count === 1 && hover.id !== propsRef.current.selectedId) {
        ctx.font = "500 12px Figtree, system-ui, sans-serif";
        const tw = ctx.measureText(hover.name).width;
        const bx = hover.x;
        const by = hover.y - 18;
        ctx.fillStyle = pal.chip;
        ctx.strokeStyle = pal.county;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(bx - tw / 2 - 8, by - 11, tw + 16, 22, 8);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = pal.chipText;
        ctx.fillText(hover.name, bx, by);
      }

      const lmHits: { x: number; y: number; id: string; name: string }[] = [];
      const selectedNow = propsRef.current.selectedId;
      for (const lm of ATLAS_LANDMARKS) {
        if (z < lm.minZ) continue;
        const p = project(cam, w, h, lm.lng, lm.lat);
        if (p.x < -20 || p.y < 60 || p.x > w + 20 || p.y > h - 70) continue;
        lmHits.push({ x: p.x, y: p.y, id: lm.id, name: lm.name });
        ctx.beginPath();
        ctx.fillStyle = pal.landmark;
        ctx.strokeStyle = pal.pinStroke;
        ctx.lineWidth = 2;
        ctx.moveTo(p.x, p.y - 11);
        ctx.lineTo(p.x + 8, p.y);
        ctx.lineTo(p.x, p.y + 11);
        ctx.lineTo(p.x - 8, p.y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        if (lm.id === selectedNow) continue;
        const showNote = true;
        ctx.font = "600 12px Figtree, system-ui, sans-serif";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        const title = lm.name;
        const tw = ctx.measureText(title).width;
        let nw = 0;
        if (showNote) {
          ctx.font = "500 11px Figtree, system-ui, sans-serif";
          nw = ctx.measureText(lm.note).width;
        }
        const boxW = Math.max(tw, nw) + 14;
        const boxH = showNote ? 36 : 22;
        let bx = p.x - boxW - 16;
        let by = p.y - 4;
        if (bx < 8) bx = p.x + 14;
        if (by + boxH > h - 78) by = p.y - boxH - 10;
        if (by < 78) by = 78;
        ctx.strokeStyle = pal.landmark;
        ctx.globalAlpha = 0.85;
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(bx < p.x ? bx + boxW : bx, by + boxH / 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.fillStyle = pal.chip;
        ctx.strokeStyle = pal.landmark;
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.roundRect(bx, by, boxW, boxH, 8);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = pal.chipText;
        ctx.font = "600 12px Figtree, system-ui, sans-serif";
        ctx.fillText(title, bx + 7, showNote ? by + 12 : by + boxH / 2);
        if (showNote) {
          ctx.font = "500 11px Figtree, system-ui, sans-serif";
          ctx.fillStyle = pal.riverMajor;
          ctx.fillText(lm.note, bx + 7, by + 26);
        }
        ctx.textAlign = "center";
      }
      landmarkHitsRef.current = lmHits;

      if (z >= 8) {
        ctx.font = "500 10px Figtree, system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const placed: { x: number; y: number }[] = [];
        const ranked = [...propsRef.current.markers].sort((a, b) => {
          const pa = project(cam, w, h, a.lng, a.lat);
          const pb = project(cam, w, h, b.lng, b.lat);
          const da = Math.hypot(pa.x - w / 2, pa.y - h / 2);
          const db = Math.hypot(pb.x - w / 2, pb.y - h / 2);
          return da - db;
        });
        let drawn = 0;
        for (const m of ranked) {
          if (drawn >= 28) break;
          if (m.id === selectedNow) continue;
          if (lmHits.some((lm) => lm.id === m.id)) continue;
          const p = project(cam, w, h, m.lng, m.lat);
          if (p.x < 28 || p.y < 86 || p.x > w - 28 || p.y > h - 96) continue;
          if (placed.some((q) => Math.hypot(q.x - p.x, q.y - p.y) < 46)) continue;
          const label = m.name.length > 22 ? `${m.name.slice(0, 20)}…` : m.name;
          ctx.fillStyle = pal.muted;
          ctx.fillText(label, p.x, p.y + 16);
          placed.push(p);
          drawn += 1;
        }
      }

      const pxPerKm = cam.k / 110.574;
      const kmOpts = [0.2, 0.5, 1, 2, 5, 10, 20, 50, 100];
      let barKm = kmOpts[0];
      let best = Infinity;
      for (const km of kmOpts) {
        const d = Math.abs(km * pxPerKm - 90);
        if (d < best) {
          best = d;
          barKm = km;
        }
      }
      const barW = barKm * pxPerKm;
      const bx = 16;
      const by = h - 92;
      ctx.strokeStyle = pal.muted;
      ctx.fillStyle = pal.muted;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(bx + barW, by);
      ctx.moveTo(bx, by - 4);
      ctx.lineTo(bx, by + 4);
      ctx.moveTo(bx + barW, by - 4);
      ctx.lineTo(bx + barW, by + 4);
      ctx.stroke();
      ctx.font = "500 10px Figtree, system-ui, sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(barKm < 1 ? `${Math.round(barKm * 1000)} m` : `${barKm} km`, bx, by - 10);
      ctx.textAlign = "center";
    }

    function loop() {
      raf = requestAnimationFrame(loop);
      if (!dirty) return;
      dirty = false;
      draw();
    }

    drawRef.current = () => {
      dirty = true;
    };

    function cancelAnim() {
      if (animRef.current != null) {
        cancelAnimationFrame(animRef.current);
        animRef.current = null;
      }
    }

    function pt(e: PointerEvent) {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }

    easeToRef.current = (to: Camera, dur = 700) => {
      cancelAnim();
      const reduce =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || dur <= 0) {
        camRef.current = { ...to };
        dirty = true;
        return;
      }
      const from = { ...camRef.current };
      const t0 = performance.now();
      const step = (now: number) => {
        const t = clamp((now - t0) / dur, 0, 1);
        const e = 1 - Math.pow(1 - t, 3);
        camRef.current = {
          cx: from.cx + (to.cx - from.cx) * e,
          cy: from.cy + (to.cy - from.cy) * e,
          k: from.k + (to.k - from.k) * e,
        };
        dirty = true;
        if (t < 1) animRef.current = requestAnimationFrame(step);
        else animRef.current = null;
      };
      animRef.current = requestAnimationFrame(step);
    };

    function onPointerDown(e: PointerEvent) {
      try {
        canvas.setPointerCapture(e.pointerId);
      } catch {
        /* synthetic / already captured */
      }
      const p = pt(e);
      pointers.set(e.pointerId, p);
      down = { x: p.x, y: p.y, t: performance.now() };
      moved = 0;
      cancelAnim();
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        lastPinch = Math.hypot(a.x - b.x, a.y - b.y);
      }
    }

    function onPointerMove(e: PointerEvent) {
      const p = pt(e);
      if (!pointers.has(e.pointerId) && pointers.size === 0) {
        hoverRef.current = hit(p.x, p.y);
        canvas.style.cursor = hoverRef.current ? "pointer" : "grab";
        dirty = true;
        return;
      }
      const prev = pointers.get(e.pointerId);
      pointers.set(e.pointerId, p);
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (lastPinch > 0 && dist > 0) {
          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          zoomAt(midX, midY, dist / lastPinch);
        }
        lastPinch = dist;
        return;
      }
      if (prev && pointers.size === 1) {
        const dx = p.x - prev.x;
        const dy = p.y - prev.y;
        moved += Math.hypot(dx, dy);
        const cam = camRef.current;
        cam.cx -= dx / (COS * cam.k);
        cam.cy += dy / cam.k;
        canvas.style.cursor = "grabbing";
        dirty = true;
      }
    }

    function onPointerUp(e: PointerEvent) {
      pointers.delete(e.pointerId);
      lastPinch = 0;
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {
        /* already released */
      }
      const p = pt(e);
      if (moved < 8 && down) {
        const now = performance.now();
        if (
          lastTap &&
          now - lastTap.t < 280 &&
          Math.hypot(p.x - lastTap.x, p.y - lastTap.y) < 28
        ) {
          zoomAt(p.x, p.y, 1.85);
          lastTap = null;
        } else {
          const target = hit(p.x, p.y);
          const stack = hitsNear(p.x, p.y, 30);
          const z = camRef.current.k / kFitRef.current;
          if (target?.count && target.count > 1) {
            if (z >= 6 && target.ids && target.ids.length > 1) {
              propsRef.current.onStack?.(target.ids);
            } else {
              zoomAt(target.x, target.y, 2.4);
            }
          } else if (stack.length > 1) {
            const d1 = Math.hypot(stack[0].x - p.x, stack[0].y - p.y);
            const d2 = Math.hypot(stack[1].x - p.x, stack[1].y - p.y);
            if (d2 < d1 + 14) {
              propsRef.current.onStack?.(
                stack.map((c) => c.id).filter((id): id is string => Boolean(id)),
              );
            } else if (stack[0].id) {
              propsRef.current.onSelect(stack[0].id);
            }
          } else if (target?.id) {
            propsRef.current.onSelect(target.id);
          } else {
            propsRef.current.onSelect(null);
          }
          lastTap = { x: p.x, y: p.y, t: now };
        }
      }
      down = null;
      canvas.style.cursor = "grab";
    }

    function onWheel(e: WheelEvent) {
      e.preventDefault();
      cancelAnim();
      const r = canvas.getBoundingClientRect();
      zoomAt(e.clientX - r.left, e.clientY - r.top, Math.exp(-e.deltaY * 0.0015));
    }

    function onLost() {
      pointers.clear();
    }

    resize();
    raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(() => resize());
    ro.observe(wrap);
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
    canvas.addEventListener("pointerleave", onLost);
    canvas.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", resize);

    void loadScMap().then((data) => {
      geoRef.current = data;
      dirty = true;
    });
    void loadRivers().then((data) => {
      riversRef.current = data;
      dirty = true;
    });

    return () => {
      cancelAnim();
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      canvas.removeEventListener("pointerleave", onLost);
      canvas.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    drawRef.current();
  }, [markers, satellite, theme, selectedId, userLoc]);

  useEffect(() => {
    if (!flyTo) return;
    if (!fittedRef.current) return;
    const kf = kFitRef.current;
    const targetK = flyTo.zoom
      ? clamp(kf * Math.pow(2, Math.max(0, flyTo.zoom - 6.2)), kf * 0.82, kf * 48)
      : Math.max(camRef.current.k, kf * 8);
    easeToRef.current({ cx: flyTo.lng, cy: flyTo.lat, k: targetK }, 720);
  }, [flyTo]);

  useEffect(() => {
    if (!selectedId || !fittedRef.current) return;
    const m = markers.find((x) => x.id === selectedId);
    if (!m) return;
    const kf = kFitRef.current;
    const wrap = wrapRef.current;
    if (m.id === "46-82" && wrap) {
      easeToRef.current(catawbaFrame(kf, wrap.clientWidth, wrap.clientHeight), 640);
      return;
    }
    easeToRef.current(
      {
        cx: m.lng,
        cy: m.lat,
        k: Math.max(camRef.current.k, kf * 8),
      },
      520,
    );
  }, [selectedId, markers]);

  useEffect(() => {
    if (!fittedRef.current || markers.length === 0) return;
    let minLng = 180;
    let minLat = 90;
    let maxLng = -180;
    let maxLat = -90;
    for (const m of markers) {
      minLng = Math.min(minLng, m.lng);
      minLat = Math.min(minLat, m.lat);
      maxLng = Math.max(maxLng, m.lng);
      maxLat = Math.max(maxLat, m.lat);
    }
    const spanX = (maxLng - minLng) * COS;
    const spanY = maxLat - minLat;
    const stateX = (SC_BOUNDS[1][0] - SC_BOUNDS[0][0]) * COS;
    const tight = markers.length <= 48 || spanX < stateX * 0.42 || spanY < 1.1;
    const key = tight
      ? `${markers.length}:${minLng.toFixed(2)}:${minLat.toFixed(2)}:${maxLng.toFixed(2)}:${maxLat.toFixed(2)}`
      : `state:${markers.length > 200 ? "all" : markers.length}`;
    if (key === lastFilterKey.current) return;
    lastFilterKey.current = key;

    const wrap = wrapRef.current;
    if (!wrap || wrap.clientWidth < 8) return;
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    const vw = Math.max(80, w - INSET.left - INSET.right);
    const vh = Math.max(80, h - INSET.top - INSET.bottom);
    const kf = kFitRef.current;
    if (markers.length === 1 && markers[0].id === "46-82") {
      easeToRef.current(catawbaFrame(kf, w, h), 700);
      propsRef.current.onSelect(markers[0].id);
      return;
    }
    if (!tight) {
      easeToRef.current(
        {
          cx: (SC_BOUNDS[0][0] + SC_BOUNDS[1][0]) / 2,
          cy: (SC_BOUNDS[0][1] + SC_BOUNDS[1][1]) / 2,
          k: kf,
        },
        640,
      );
      return;
    }
    const padLng = Math.max(0.08, (maxLng - minLng) * 0.22);
    const padLat = Math.max(0.08, (maxLat - minLat) * 0.22);
    const k = Math.min(
      vw / Math.max(0.12, (maxLng - minLng + padLng * 2) * COS),
      vh / Math.max(0.12, maxLat - minLat + padLat * 2),
    );
    easeToRef.current(
      {
        cx: (minLng + maxLng) / 2,
        cy: (minLat + maxLat) / 2,
        k: clamp(k, kf * 0.82, kf * 48),
      },
      700,
    );
    if (markers.length === 1) {
      propsRef.current.onSelect(markers[0].id);
    }
  }, [markers]);

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <canvas
        ref={canvasRef}
        className="atlas-map absolute inset-0 h-full w-full cursor-grab touch-none"
        role="application"
        aria-label="South Carolina historical marker atlas"
      />
    </div>
  );
}
