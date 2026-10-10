# Lesson

A lesson is the full marker page: name, id, inscription, and a Play lesson control.

## Sub-features

- `lesson-open` opens `/markers/46-21` and shows Fort Mill.
- `lesson-play-control` shows the `Play lesson` button on that page.

## How to get to it (user POV)

- From a map details sheet, choose `Lesson`.
- From a locked scan card, choose `Full lesson`.
- Open `/markers/46-21` directly.

## Driving it with verify-palmetto

Preconditions:

- Doctor reports the origin healthy.

- **Open Fort Mill.** Run `node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --feature lesson --url http://127.0.0.1:8091`. The heading is `Fort Mill`, the page shows `46-21`, and button `Play lesson` is visible. Evidence is `08-lesson-fort-mill.png`.

## Gotchas

- `Play lesson` starts speech. The harness does not click it. A visible control is the proof. Audio output is not required.
- The map sheet's button is named `Lesson`. The lesson page's button is named `Play lesson`. They are different screens.
- This feature does not prove the atlas tap or the scan type-in. Run those features for that.
