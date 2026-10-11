# Scan

Scan opens a plaque camera on `/ar` only after a tap, and it can resolve a typed marker number to the matching lesson without a photo.

## Sub-features

- `scan-camera-closed` loads `/ar` with the camera off and `Open camera` visible.
- `scan-open-camera` starts the camera from that button.
- `scan-type-46-21` resolves `46-21` to Fort Mill.
- `scan-type-7-15` resolves `7-15` to Penn School shown as `07-15`.
- `scan-type-07-15` resolves `07-15` to the same Penn School id `07-15`.

## How to get to it (user POV)

- Choose `Scan` in the bottom nav.
- Open `/ar` directly.

## Driving it with verify-palmetto

Preconditions:

- Doctor reports the origin healthy.
- Chrome was launched with a fake media device. The harness does this itself, and substitutes a canvas stream if the device does not settle.
- Marker index `/data/index.json` returned HTTP 200.

- **Camera stays closed.** Open `/ar`. Run `node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --feature scan --url http://127.0.0.1:8091`. The step `scan: camera stays closed on load` passes when, after 3 seconds with no clicks and no typing, heading `Scan the plaque` and button `Open camera` are visible, `getUserMedia` has been called 0 times, the live video opacity is `0`, and the page does not contain `iPhone: tap Open camera, then allow access.` Evidence is `03-scan-camera-closed.png`.
- **Open camera.** Choose `Open camera`. The step `scan: Open camera` passes when `getUserMedia` has been called exactly once, video opacity is `1`, the status reads `Hold the plaque in the frame`, and button `Scan plaque` is visible. Evidence is `04-scan-camera-open.png`.
- **Fort Mill.** Type `46-21` in the field whose placeholder matches `Number on the plaque`. Choose the `Fort Mill` row. The locked card heading is `Fort Mill` and the id line starts with `46-21`. Evidence is `05-scan-fort-mill.png`.
- **Unpadded Penn School.** Choose `Scan another marker`. Type `7-15`. The row shows `Penn School` and `07-15`. After the tap, the id line starts with `07-15` and the heading is `Penn School`. Evidence is `06-scan-penn-7-15.png`.
- **Padded Penn School.** Scan another marker. Type `07-15`. The same heading and id `07-15` appear. Evidence is `07-scan-penn-07-15.png`.

## Gotchas

- The camera must not start from a timer or from page load. Wait 3 seconds after the scan page renders, with no clicks and no typing, before reading `getUserMedia`. A sample taken when `Open camera` first appears still reads 0 if the timer is 250ms. That extra call shows up later as a count of 2 after one click. The closed step fails when the count is not 0. The open step fails when the count is not exactly 1.
- Fail the closed step when the page still says `iPhone: tap Open camera, then allow access.`
- A tap that lands before hydration is dropped and the button still reads `Open camera`. Tap again after the page has hydrated. Do not count that first dropped tap as a camera start.
- `Open camera` is the accessible name only while the camera is closed. While the request is in flight the label is `Opening camera…`.
- The type-in field stays on the page while the camera is open and the card is not locked. After a match, choose `Scan another marker` before typing the next number.
- Stored ids are padded (`07-15`). A row that only echoes the typed `7-15` is a failure.
- `07-15` contains the characters `7-15`. Assert the id token, not a bare substring check for the absence of `7-15`.
- The fake camera satisfies the click path only. It does not read a plaque. Type-in is the proof for Fort Mill and Penn School.
- Do not call the plaque matcher from Node and call that a UI pass.
