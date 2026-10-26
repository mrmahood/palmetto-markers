# Lesson

A lesson is the marker page: name, id, official inscription, and a Play lesson control. Markers with a hands-on lesson also show that block under the inscription. Fort Mill’s hands-on lesson is one of the inscription lessons: every fact on it comes from the plaque. The same page’s server HTML is the link preview for a shared marker URL.

## Sub-features

- `lesson-open` opens `/markers/46-21` and shows Fort Mill, including the official inscription.
- `lesson-play-control` shows the `Play lesson` button on that page.
- `lesson-hands-on` scrolls to the hands-on lesson and moves it from part 1 to part 2.
- `lesson-share-preview` reads the server HTML for `/markers/46-21` and requires that marker’s Open Graph and Twitter card.
- `lesson-greenville` opens Greenville `23-01` and advances its inscription lesson.
- `lesson-darlington` opens Darlington `16-02` and advances its inscription lesson.

## How to get to it (user POV)

- From a map details sheet, choose `Lesson`.
- From a locked scan card, choose `Full lesson`.
- Open `/markers/46-21` directly.

## Driving it with verify-palmetto

Preconditions:

- Doctor reports the origin healthy.

- **Open Fort Mill.** Run `node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --feature lesson --url http://127.0.0.1:8091`. The level-1 heading is exactly `Fort Mill` (the hands-on title `How Fort Mill got its name` does not count), the page shows `46-21`, heading `Official inscription` is visible, and button `Play lesson` is visible. Evidence is `08-lesson-fort-mill.png`.
- **Hands-on lesson.** The same command scrolls to heading `How Fort Mill got its name` under the text `Hands-on lesson`. The intro says `Every fact is from the inscription.` Choose `Next`. The step `lesson: hands-on inscription` passes when the settled part label starts with `Part 2 of`. Evidence is `08-lesson-fort-mill-hands-on.png`.
- **Share preview.** The same command loads `/markers/46-21` again and reads that document response, not the hydrated DOM. The step `lesson: Fort Mill share preview` passes when the HTML has one title and one `og:title` of `Fort Mill · Palmetto Markers`, `og:type` `article`, `og:url` `https://palmettomarkers.grok.me/markers/46-21`, `og:image` `https://palmettomarkers.grok.me/images/hist/catawba-map.jpg`, `og:site_name` `Palmetto Markers`, `twitter:card` `summary_large_image`, matching `twitter:title` and `twitter:image`, and one `og:description` that starts `Fort Mill — Fort Mill, York County.` and matches `twitter:description`. There is no screenshot. The check does not read or change robots tags.
- **Greenville.** The same command opens `/markers/23-01`. The level-1 heading is `The Old Record Building`, the page shows `23-01`, and the hands-on heading is `County courthouse until 1855`. Choose `Next`. The step `lesson: Greenville inscription` passes when the page shows `Part 2 of`. Evidence is `12-lesson-greenville-23-01.png`.
- **Darlington.** The same command opens `/markers/16-02`. The level-1 heading is `David Rogerson Williams`, the page shows `16-02`, and the hands-on heading is `Governor and a War of 1812 general`. Choose `Next`. The step `lesson: Darlington inscription` passes when the page shows `Part 2 of`. Evidence is `13-lesson-darlington-16-02.png`.

## Gotchas

- `Play lesson` starts speech. The harness does not click it. A visible control is the proof. Audio output is not required.
- A `Next` tap before the lesson hydrates does nothing, and the button still reads `Next`. The harness taps again until the part label settles. While the timeline is still scrolling, that label can flash `Part 1 of` and then stay on `Part 2 of`. The pass is the settled label, read after the scroll. A label of `Part 3 of` or later is a failure.
- The map sheet's button is named `Lesson`. The lesson page's button is named `Play lesson`. They are different screens.
- `Play lesson` is on every marker page. It does not mean a hands-on lesson is present. The hands-on block is the heading under `Hands-on lesson`, with `Next` and `Back`.
- Beaufort, York, Richland (including the Columbia markers), Charleston, Greenville, and Darlington inscription lessons use that same hands-on block and the same intro, `Every fact is from the inscription.` Fort Mill (`46-21`) is the lesson this feature drives in full. Greenville `23-01` and Darlington `16-02` are the same player with that county’s plaque facts. A marker with no hands-on record shows the inscription and `Play lesson` only.
- Link-preview tags are on the document the server returns for `/markers/<id>`. `og:url` and `og:image` stay on `https://palmettomarkers.grok.me` when the page is opened from the local verification origin. The harness does not edit robots or noindex.
- This feature does not prove the atlas tap or the scan type-in. Run those features for that.
