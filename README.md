# Palmetto Markers

A mobile-first atlas of official South Carolina historical markers: map, spoken lessons, and plaque scan.

Live: [palmettomarkers.grok.me](https://palmettomarkers.grok.me)

Not affiliated with the South Carolina Department of Archives and History. Marker inscriptions are from the [South Carolina Historical Marker Program](https://scdah.sc.gov/historic-preservation/programs/historical-markers).

## What it does

- **Map** — 2,100+ official markers, searchable, with a list when a town is dense
- **Lesson** — official inscription, narrator, and a still from a public-domain plate when we have one
- **Scan** — rear camera reads a plaque (id like `46-21`) and opens that lesson
- **Tours** — short curated routes (Charleston Harbor, Catawba & York, Gullah Geechee, …)

The atlas is public. Accounts, when they land, are only for contributing sourced historical photographs — not for reading.

## Stack

TanStack Start, React 19, Tailwind, Canvas atlas (no MapLibre tiles), xAI speech for narration, grok vision for plaque reading.

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

`npm run build` then `npm run preview` for a production build.

## Data and images

- Marker text and coordinates: SC Historical Marker Program / SCDAH
- Photographs: Library of Congress (Prints & Photographs, HABS, FSA, Highsmith, National Photo Company, Lewis Hine). Each lesson credits the plate. If we do not have the subject itself, the credit says so.
- Do not drop in AI-generated “historical” scenes. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Code: [MIT](LICENSE).

Inscriptions remain a matter of the Marker Program. Photographs remain under the rights of their source (most here are U.S. government / no known restriction). Do not assume you can strip credits.
