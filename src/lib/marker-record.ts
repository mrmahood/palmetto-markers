import { createServerFn } from "@tanstack/react-start";
import type { Marker } from "./markers";

function markerId(input: unknown): string {
  if (typeof input !== "string") throw new Error("marker id required");
  const id = input.trim();
  if (!id || id.length > 32) throw new Error("marker id required");
  return id;
}

export const loadMarkerRecord = createServerFn({ method: "GET" })
  .validator(markerId)
  .handler(async ({ data }): Promise<Marker | null> => {
    // The catalog is server-only (`?raw` JSON). Importing it at the top of this
    // module would pull the file into the client graph; the handler is the
    // server boundary, same as other `*.server` imports in this app.
    const { readMarkerById } = await import("./marker-record.server");
    return readMarkerById(data);
  });
