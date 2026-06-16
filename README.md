# Dante Project

Lightweight static site showcasing Dante-related places with small interactive Leaflet maps.

## What this repository contains

- HTML pages: `index.html`, `impressum.html` and city content in `data/texts/` (English, German, Italian).
- Maps: `interactive-map.js` — minimal vanilla JS that creates Leaflet maps and loads per-city GeoJSON from `data/coordinates/`.
- GeoJSON data: `data/coordinates/*.geojson` (per-city point files) and `data/coordinates/overview_map.geojson`.
- Media and content: `data/pictures/`, `data/texts/`.
- A tutorial copy: `tutorials/interactive-map-tutorial.js` (this file is not included by the site by default).

## Quick start (view locally)

Option A — open files directly (no server):
- Open `index.html` in your browser. This works for static pages that don't require server-side features.

Option B — run a simple static server (recommended):
- If you have `npm` and want a small local server, install `http-server` globally:

```bash
npm install -g http-server
http-server . -c-1
```

- Or, if you prefer Python 3:

```bash
python -m http.server 8000
```

Then open `http://localhost:8080` (or the port shown by the command).

## How the interactive maps work

- `interactive-map.js` exposes three global helpers:
  - `initMap(containerId, geoJsonUrl, lang = 'en')` — create a Leaflet map in the given container (element or id) and load GeoJSON.
  - `initInteractiveMaps()` — finds `.interactive-map` placeholders, reads their `data-geojson-path` and `data-lang`, and initializes each map.
  - `initOverviewMap(lang = 'en')` — initializes the `#overview-map` element using `data-geojson-path` or falling back to `data/coordinates/overview_map.geojson`.

- GeoJSON files are in `data/coordinates/` and include a `properties.link` used by popups to navigate to pages/fragments.
- `app.js` handles SPA routing and intercepts `.map-popup-link` clicks to perform in-page navigation and scrolling under the sticky header.



## Contributing

- Edit Markdown files under `data/texts/` to update page content. City heading ids should match GeoJSON `properties.anchor` if you rely on fragment navigation.
- Add or update GeoJSON files in `data/coordinates/` (preserve feature properties; add `properties.link` to each feature pointing to the page fragment you want the popup to open).

## Sources and License

- Images: Wikimedia Commons credits and license details are listed in `data/pictures/credits.json`.
- Data: project text and GeoJSON content are stored in `data/texts/` and `data/coordinates/`.
- External libraries:
  - Leaflet (`https://unpkg.com/leaflet@1.9.4/dist/leaflet.js`, BSD-2-Clause license)
  - Marked (`https://cdn.jsdelivr.net/npm/marked/marked.min.js`, MIT license)

This repository is licensed under the MIT License (see `LICENSE`).
MIT was chosen because it is short, permissive, and well-suited for an educational project that should be easy to reuse and adapt.
