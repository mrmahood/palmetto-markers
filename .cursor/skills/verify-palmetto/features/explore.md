# Explore

Explore is a searchable list of markers with region and theme filters. Choosing a marker opens its lesson.

## Sub-features

- `explore-region` filters the list to Lowcountry.
- `explore-open` opens a marker from that list.

## How to get to it (user POV)

- Choose `Explore` in the bottom nav.
- Open `/explore` directly.

## Driving it with verify-palmetto

Preconditions:

- Doctor reports the origin healthy.
- The marker index has loaded so the list is not empty.

- **Filter and open.** Run `node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --feature explore --url http://127.0.0.1:8091`. Heading `Explore` is visible. Choose the `Lowcountry` button. A marker link is visible (`09-explore-lowcountry.png`). Choose the first marker link. The URL contains `/markers/` and a level-1 heading is visible (`10-explore-lesson.png`).

## Gotchas

- An install hint can sit above the list. It does not cover the region buttons. Dismiss it only if it blocks the marker link. The dismiss control is named `Dismiss`.
- Region filter state is the shared app store. A later atlas drive in the same page can inherit Lowcountry. The harness uses a fresh browser context per command, so a separate `drive` starts unfiltered.
- The list is capped. Assert that a marker link appeared, not that every Lowcountry marker is on screen.
