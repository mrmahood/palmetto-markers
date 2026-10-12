---
name: verify-palmetto
description: Drive Palmetto Markers in a browser against a local Vite dev server or a URL you pass in, and prove the atlas and plaque-scan flows with screenshots. Use when changing the map, the scan page, plaque id matching, or before claiming the app works.
---

# Verify Palmetto Markers

Palmetto Markers is a mobile web app: a canvas atlas of South Carolina historical markers, plus a plaque scan page. This skill drives those flows in Chromium the way a person would. It does not change deployment headers, robots rules, or the public site.

Run every command from the repository root.

## Launch

The full proof launches its own Vite process and then drives it:

```bash
node .cursor/skills/verify-palmetto/scripts/verify.mjs run
```

That command:

- Starts `node scripts/with-app-env.mjs vite dev --host 127.0.0.1 --port 8091 --strictPort` (the next free port through 8105 if 8091 is taken). Port 8080 is the human dev port from the README. This skill does not bind it and does not kill whatever is already there.
- Waits until `GET /` and `GET /data/index.json` both return HTTP 200.
- Records the process in `verify-output/palmetto/server.json` (`owner` is `verify-palmetto`).
- Doctors the instance, drives the atlas and scan flows, runs `npm test`, writes evidence, then stops only that process.

To drive an instance that is already up, including the public app, pass its origin and do not launch:

```bash
node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --url http://127.0.0.1:8080
node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --url https://palmettomarkers.grok.me
```

`--url` must be `http:` or `https:` with no userinfo. Two verification servers can run at once on different ports. Marker data is static JSON. Each browser context has its own `localStorage`, so two drives do not share onboarding or bookmarks. Do not point two drives at one server and then kill it out from under the other. Refuse to drive a URL that fails doctor.

Ready means both of these succeed:

- `GET /` returns HTTP 200
- `GET /data/index.json` returns HTTP 200

Vite's log line is not the ready check. The dev server keeps an HMR websocket open, so a browser `networkidle` wait never settles. The harness uses `domcontentloaded` and then waits for the controls below.

## Doctor

Read-only. Run this before a drive whenever the page looks stale, the port might belong to someone else, or a previous run crashed:

```bash
node .cursor/skills/verify-palmetto/scripts/verify.mjs doctor
node .cursor/skills/verify-palmetto/scripts/verify.mjs doctor --url http://127.0.0.1:8091
```

Without `--url`, doctor reads `verify-output/palmetto/server.json` and requires that pid to be alive with `vite` on its command line. With `--url`, doctor only checks HTTP. An instance that fails doctor is not worth driving. `run` prints `doctor ok` or stops.

## Drive

The harness is Playwright against system Chrome (`channel: "chrome"`), viewport 390×844, `deviceScaleFactor` 1. It grants camera permission and launches Chrome with `--use-fake-device-for-media-stream` and `--use-fake-ui-for-media-stream`. It wraps `getUserMedia` and counts calls. If that device does not settle within 1.5s, the wrapper resolves a canvas `captureStream` instead, so the Open camera click can finish without hardware. Either stream is only for that click path. Plaque type-in uses the real marker index. The call count on load is still 0: the wrapper does not invoke the camera by itself.

Prefer these handles. The atlas pins are canvas pixels, not DOM nodes.

| What | Handle |
| --- | --- |
| Dismiss first-run cover | button `Open the atlas` |
| Atlas surface | `role=application` named `South Carolina historical marker atlas` |
| Marker count | text matching `official South Carolina markers` |
| Marker details sheet | `article` that contains button `Lesson`, an `h2` name, and a line like `46-21 · Early Republic` |
| Map theme | button `Switch to dark mode`, then button `Switch to light mode` |
| Dense tap result | text matching `markers here`, then the first button in that `z-30` sheet |
| Scan page | heading `Scan the plaque` at `/ar` |
| Camera | button `Open camera`, then button `Scan plaque`, status `Hold the plaque in the frame` |
| Plaque number | placeholder matching `Number on the plaque` |
| Locked scan card | heading level 2, the id line in the `p` before that `h2`, button `Scan another marker` |
| Bottom nav | links `Map`, `Explore`, `Scan`, `Tours` |

Default drive (what `run` executes):

```bash
node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --feature required --url http://127.0.0.1:8091
```

`required` is the atlas flow and the scan flow. One feature at a time:

```bash
node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --feature atlas --url http://127.0.0.1:8091
node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --feature scan --url http://127.0.0.1:8091
node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --feature lesson --url http://127.0.0.1:8091
node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --feature explore --url http://127.0.0.1:8091
node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --feature tours --url http://127.0.0.1:8091
```

Atlas proof, in order:

1. Open `/`. If the cover is up, choose `Open the atlas`. The canvas and the official-marker count are visible. The map starts in light mode.
2. Sample the canvas. Light cluster fills `#1f7a4d` and `#16603c` must be present. Cream land `#f7f1e4` is not a pin. Shore `#1f6b45` does not count. Screenshot `01-atlas-loaded.png`.
3. Choose `Switch to dark mode`. Dark cluster fill `#3d5c4c` must be present (earth `#4a5538` when satellite is also on). The shore highlight is not a cluster. Screenshot `01-atlas-dark.png`. Choose `Switch to light mode` and require the light cluster fills again.
4. Click a rendered cluster or pin (only when `elementFromPoint` is the canvas). A cluster zooms; at a close zoom it opens the `markers here` sheet. A single pin, or a row in that sheet, opens the details article. Screenshot `02-atlas-marker-details.png`. The article shows a marker name and an id of the form `NN-NN` or `NN-NNN`.

Scan proof, in order:

1. Open `/ar`. Heading `Scan the plaque` and button `Open camera` are visible. `getUserMedia` has been called 0 times. The live `<video>` opacity is `0`. Screenshot `03-scan-camera-closed.png`.
2. Choose `Open camera`. The fake camera starts: `getUserMedia` count is at least 1, video opacity is `1`, status is `Hold the plaque in the frame`, and button `Scan plaque` exists. Screenshot `04-scan-camera-open.png`.
3. Type `46-21` into the plaque field, choose the `Fort Mill` row, and require the locked card id to be `46-21` and the heading `Fort Mill`. Screenshot `05-scan-fort-mill.png`.
4. Choose `Scan another marker`. Type `7-15`. The row and the locked card show `Penn School` and id `07-15`. Screenshot `06-scan-penn-7-15.png`.
5. Scan another. Type `07-15`. Same marker, same id `07-15`. Screenshot `07-scan-penn-07-15.png`.

`run` also executes `npm test` (node tests under `scripts/` and `src/lib/`). `--skip-test` skips that. A UI failure does not skip the test run. The process exit code is 1 if any step failed.

The feature map lists lesson, explore, and tours as well. Drive those with the `--feature` commands above when a change touches them. A pass on atlas or scan does not cover those entry points. Recipes: [features/README.md](features/README.md).

## Evidence

Every `run` and `drive` writes to `verify-output/palmetto/` (override with `--out`). The directory is gitignored. Cleanup does not delete it.

- `01-atlas-loaded.png`, `01-atlas-dark.png`, and `02-atlas-marker-details.png` through `07-scan-penn-07-15.png` for the required flows
- `08-lesson-fort-mill.png`, `08-lesson-fort-mill-hands-on.png`, `09-explore-lowcountry.png`, `10-explore-lesson.png`, `11-tour-charleston-harbor.png` when those features run
- `fail-<step>.png` when a step fails
- `session.webm` unless `--no-video`
- `summary.json` and a PASS/FAIL list on stdout
- `npm-test.log` when `run` executes `npm test`
- `dev-server.log` when this skill launched Vite

Stdout ends with one line per step and a tally:

```text
PASS  palmetto verification
PASS  doctor — http://127.0.0.1:8091
PASS  atlas: page loads — Palmetto Markers
...
8 passed, 0 failed
evidence /path/to/verify-output/palmetto
```

Proof is the user path: a click or a typed plaque number, then the resulting screen. Do not set Zustand state, do not call `matchPlaque` from the harness, and do not treat a unit test as a substitute for the screenshot. `npm test` is an additional step, reported beside the browser steps. The fake camera is the production `getUserMedia` boundary with a synthetic device. Confirm the camera stayed closed by the call count and the video opacity, not by the button label alone.

## Cleanup

```bash
node .cursor/skills/verify-palmetto/scripts/verify.mjs cleanup
```

Cleanup reads `verify-output/palmetto/server.json` and signals that pid only when `owner` is `verify-palmetto` and the command line contains `vite`. It sends `SIGTERM`, then `SIGKILL` if the process is still alive, then deletes `server.json`. It never kills by process name, never frees port 8080, and never removes PNG, WebM, `summary.json`, or `dev-server.log`. `run` already cleans up the server it started. After a failed launch, run `cleanup` before retrying so the port is not left occupied by a half-started Vite.

## Helpers

The only helper is the executable harness:

```bash
node .cursor/skills/verify-palmetto/scripts/verify.mjs run
node .cursor/skills/verify-palmetto/scripts/verify.mjs doctor [--url ORIGIN]
node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --feature required|atlas|scan|lesson|explore|tours [--url ORIGIN]
node .cursor/skills/verify-palmetto/scripts/verify.mjs cleanup
```

Options: `--port` (launch only), `--out`, `--skip-test`, `--no-video`. Chrome must be on `PATH` (`google-chrome`). Dependencies come from `npm install` at the repo root, which provides `playwright`. Session video also needs Playwright's ffmpeg binary: `npx playwright install ffmpeg`. If that binary is missing, rerun with `--no-video` instead of leaving the browser open.

## Upkeep

When the app changes, re-check this skill with `/maintain-verification-skill`. That pass updates only this directory. A product regression stays a reported failure. It is not rewritten into the map.
