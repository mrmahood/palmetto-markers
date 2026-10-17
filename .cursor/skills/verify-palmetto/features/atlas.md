# Atlas

The atlas is the map on `/`. A person dismisses the first-run cover, sees South Carolina in the light map with marker pins or clusters, can switch to dark mode, and taps one marker to open its details.

## Sub-features

- `atlas-load` opens `/`, dismisses `Open the atlas` when the cover is showing, and shows the canvas plus the official-marker count.
- `atlas-pins` shows rendered cluster or pin pixels on the default light canvas, not an empty landmass.
- `atlas-theme` switches the map to dark mode and back to light mode with the theme button.
- `atlas-tap` taps a cluster or pin and opens the details sheet with a marker name and id.

## How to get to it (user POV)

- Open the site root `/`.
- Choose `Map` in the bottom nav from any other tab.
- On a first visit, choose `Open the atlas` on the cover. The cover can paint again if that tap happens before saved state rehydrates. Tap it again. The atlas underneath is not usable until the cover stays gone.

## Driving it with verify-palmetto

Preconditions:

- Doctor reports the origin healthy.
- The browser context has not pre-seeded a selected marker.

- **Load.** Open `/` and dismiss the cover when it is present. Run `node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --feature atlas --url http://127.0.0.1:8091`. The step `atlas: page loads` passes when the canvas named `South Carolina historical marker atlas` and the text `official South Carolina markers` are visible. A fresh browser starts in light mode.
- **Pins or clusters.** The same command reads the light map palette from the app source and waits until those cluster-fill pixels are on the canvas. It writes `verify-output/palmetto/01-atlas-loaded.png`. The screenshot shows the state outline and marker clusters. Land is not a pin.
- **Theme.** Choose `Switch to dark mode`. The step `atlas: switch to dark mode` passes when cluster fills from the dark map palette are on the canvas. Evidence is `01-atlas-dark.png`. Choose `Switch to light mode`. The step `atlas: switch to light mode` passes when the light cluster fills return. The tap below runs on that restored light map.
- **Tap.** The harness clicks a cluster or a single pin. A cluster may zoom or open a sheet whose text matches `markers here`. Choosing a row in that sheet, or tapping a single pin, opens an article with button `Lesson`. The step `atlas: tap opens marker details` passes when that article shows a name and an id. Evidence is `02-atlas-marker-details.png`.

## Gotchas

- Pins are drawn on a canvas. There is no DOM node per marker. A pass that only checks `canvas` exists is not `atlas-pins`.
- The harness reads pin and cluster fills from the map style in `src/components/map-canvas.tsx`. `palOf` selects the light and dark palettes (satellite stays off in this proof). `src/styles.css` supplies the `@theme` tokens and the `data-theme="dark"` tokens when a paint uses `var(--color-…)` and when the map style names no fill. Both themes are read when both exist.
- Land and ocean are area fills. They are not tap targets. The shore, rivers, and place labels often use the same hex as a pin or a small cluster. Those pixels count only when the neighborhood is a filled disk, which is how a pin and a cluster are drawn. A thin stroke does not. Clicking land or the shoreline does not open marker details.
- The Catawba and the other rivers are canvas strokes and labels. They are not a control and not a tap target.
- The theme control is the button `Switch to dark mode` or `Switch to light mode`, in the top-right stack with `My location` and `Toggle satellite`. Satellite is a separate control. This proof does not turn it on.
- A double-tap zooms instead of selecting. Clicks in one proof are at least a second apart.
- Tapping a cluster while zoomed out zooms in. The details sheet appears after a later tap, or from the `markers here` list that a close cluster tap opens.
- The header search and the bottom nav sit over the canvas. Clicks that would land on those controls are misses, not selections.
- `networkidle` does not settle while Vite's HMR socket is open.
- The details sheet is the proof. Do not set the selected id from the store.
