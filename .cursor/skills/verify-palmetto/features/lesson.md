# Lesson

A lesson is the marker page: name, id, official inscription, and a Play lesson control. Markers with a hands-on lesson also show that block under the inscription. Fort Mill’s hands-on lesson is one of the inscription lessons: every fact on it comes from the plaque.

## Sub-features

- `lesson-open` opens `/markers/46-21` and shows Fort Mill, including the official inscription.
- `lesson-play-control` shows the `Play lesson` button on that page.
- `lesson-hands-on` scrolls to the hands-on lesson and moves it from part 1 to part 2.

## How to get to it (user POV)

- From a map details sheet, choose `Lesson`.
- From a locked scan card, choose `Full lesson`.
- Open `/markers/46-21` directly.

## Driving it with verify-palmetto

Preconditions:

- Doctor reports the origin healthy.

- **Open Fort Mill.** Run `node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --feature lesson --url http://127.0.0.1:8091`. The heading is `Fort Mill`, the page shows `46-21`, heading `Official inscription` is visible, and button `Play lesson` is visible. Evidence is `08-lesson-fort-mill.png`.
- **Hands-on lesson.** The same command scrolls to heading `How Fort Mill got its name` under the text `Hands-on lesson`. The intro says `Every fact is from the inscription.` Choose `Next`. The step `lesson: hands-on inscription` passes when the page shows `Part 2 of`. Evidence is `08-lesson-fort-mill-hands-on.png`.

## Gotchas

- `Play lesson` starts speech. The harness does not click it. A visible control is the proof. Audio output is not required.
- The map sheet's button is named `Lesson`. The lesson page's button is named `Play lesson`. They are different screens.
- `Play lesson` is on every marker page. It does not mean a hands-on lesson is present. The hands-on block is the heading under `Hands-on lesson`, with `Next` and `Back`.
- Beaufort, York, and Richland inscription lessons, including the Columbia markers, use that same hands-on block. Fort Mill (`46-21`) is the York lesson this feature drives. A marker with no hands-on record shows the inscription and `Play lesson` only.
- This feature does not prove the atlas tap or the scan type-in. Run those features for that.
