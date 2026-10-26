# Tours

Tours are curated lists of markers. Opening a tour shows its title and stops.

## Sub-features

- `tours-list` shows the tour index.
- `tours-open` opens Charleston Harbor.
- `tours-share-preview` reads the server HTML for `/tours/charleston-harbor` and requires that tour’s Open Graph and Twitter card.

## How to get to it (user POV)

- Choose `Tours` in the bottom nav.
- Open `/tours`, then choose a tour card.

## Driving it with verify-palmetto

Preconditions:

- Doctor reports the origin healthy.

- **Open a tour.** Run `node .cursor/skills/verify-palmetto/scripts/verify.mjs drive --feature tours --url http://127.0.0.1:8091`. Heading `Tours` is visible. Choose the link whose name matches `Charleston Harbor`. The URL is `/tours/charleston-harbor` and the heading is `Charleston Harbor`. Evidence is `11-tour-charleston-harbor.png`.
- **Share preview.** The same command loads `/tours/charleston-harbor` again and reads that document response. The step `tours: Charleston Harbor share preview` passes when the HTML has one title and one `og:title` of `Charleston Harbor · Palmetto Markers`, `og:type` `article`, `og:url` `https://palmettomarkers.grok.me/tours/charleston-harbor`, `og:image` `https://palmettomarkers.grok.me/images/era-revolution.jpg`, `og:site_name` `Palmetto Markers`, `twitter:card` `summary_large_image`, matching `twitter:title` and `twitter:image`, and one `og:description` that starts `Charleston Harbor — Lowcountry.` and matches `twitter:description`. The check does not read or change robots tags.

## Gotchas

- The tour card's accessible name includes the blurb, not only the title. Match `Charleston Harbor` as a substring of the link name.
- Stop names load from the marker index. The proof is the tour heading, not a specific stop, unless the change is about stop order.
- This does not prove the atlas or the scan page.
- Link-preview tags are on the document the server returns for `/tours/<id>`. `og:url` and `og:image` stay on `https://palmettomarkers.grok.me` when the page is opened from the local verification origin. The harness does not edit robots or noindex.
