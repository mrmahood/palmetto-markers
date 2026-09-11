import { useEffect, useRef } from "react";
import type { Marker } from "@/lib/markers";
import { createArWorld, type ArHandle } from "@/lib/ar-world";
import { heroImage, sceneKind } from "@/lib/markers";

type Props = {
  marker: Marker;
  locked: boolean;
};

export function ArStage({ marker, locked }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const worldRef = useRef<ArHandle | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const world = createArWorld(canvas, sceneKind(marker), heroImage(marker));
    worldRef.current = world;
    const fit = () => {
      const p = canvas.parentElement;
      if (!p) return;
      world.resize(p.clientWidth, p.clientHeight);
    };
    fit();
    window.addEventListener("resize", fit);
    return () => {
      window.removeEventListener("resize", fit);
      world.dispose();
      worldRef.current = null;
    };
  }, [marker]);

  useEffect(() => {
    worldRef.current?.setLocked(locked);
  }, [locked]);

  useEffect(() => {
    const onOrient = (e: DeviceOrientationEvent) => {
      const g = (e.gamma ?? 0) / 45;
      const b = ((e.beta ?? 45) - 45) / 45;
      worldRef.current?.setParallax(g, -b);
    };
    window.addEventListener("deviceorientation", onOrient);
    return () => window.removeEventListener("deviceorientation", onOrient);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full touch-none"
      style={{ touchAction: "none" }}
    />
  );
}
