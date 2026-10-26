# Palmetto Markers verification map

This directory is the maintained source for verifying the user-facing behavior of Palmetto Markers. Read the index before driving the app, then use the matching feature file as the recipe.

## Baseline preconditions

- Launch with `node .cursor/skills/verify-palmetto/scripts/verify.mjs run`, or drive an existing origin with `--url`.
- The default verification server is `http://127.0.0.1:8091`. It is separate from the README dev server on port 8080.
- `node .cursor/skills/verify-palmetto/scripts/verify.mjs doctor` must report HTTP 200 for `/` and `/data/index.json`.
- Never drive an instance that failed doctor. Never kill a server this skill did not record in `verify-output/palmetto/server.json`.
- Browser state starts empty. The first visit to `/` shows the `Open the atlas` cover.

## Driving conventions

- Run commands from the repository root.
- The harness is `verify.mjs`. It uses Playwright role and accessible-name locators, then canvas pixel targets for the atlas.
- Treat every command as literal. Keep the plaque numbers `46-21`, `7-15`, and `07-15` unchanged.
- `run` is the full proof: atlas, scan, and `npm test`.
- A feature command proves only that feature. Do not report it as a pass for the others.
- Evidence stays in `verify-output/palmetto/`. Cleanup does not delete it.

## Proof and skip reporting

- Capture the action and the resulting state. Each required step has a named PNG.
- A marker detail proof includes the visible name and the marker id.
- A scan proof includes the typed characters and the id the card shows after the tap. `7-15` is only a pass when the card shows `07-15`.
- Record the feature id in `summary.json`.
- If a path cannot be reached, the step is `FAIL` with the attempted handle and the unmet condition. Do not mark it passed because a different path showed the same marker.

## Feature entry contract

Each feature file starts with an H1 and one paragraph, then exactly four H2 sections: `Sub-features`, `How to get to it (user POV)`, `Driving it with verify-palmetto`, and `Gotchas`.

## Features

- [Atlas](./atlas.md) covers the map on `/`: load, the light map and the dark-mode switch, rendered pins or clusters, and a tap that opens marker details.
- [Scan](./scan.md) covers `/ar`: camera stays closed, Open camera, and plaque numbers `46-21`, `7-15`, and `07-15`.
- [Lesson](./lesson.md) covers the marker page, Play lesson, the hands-on inscription lesson (Fort Mill, plus one Greenville and one Darlington lesson), and the server-rendered link preview for `/markers/46-21`.
- [Explore](./explore.md) covers region filtering and opening a marker from the list.
- [Tours](./tours.md) covers the tour list, opening Charleston Harbor, and that tour’s server-rendered link preview.
