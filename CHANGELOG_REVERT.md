# Revert Log

Use this file to track every applied change so the work can be rolled back cleanly.

## 2026-06-21

- Restored interactive map rendering in `app.js` by converting `[Interactive map: ...geojson]` markdown markers into `.interactive-map` containers and initializing them after each city render.
- Restored the dedicated map page in `app.js` to mount `#overview-map` and initialize it with Leaflet again.
- Added hash scrolling and popup-link delegation in `app.js` so Leaflet markers can jump back into city pages and land on the correct heading.
- Added map container sizing and Leaflet contrast overrides in `styles.css` so the interactive maps render visibly and remain readable.

## Revert steps

1. Remove the interactive-map helper and hash-scroll additions from `app.js`.
2. Restore the previous static map placeholder markup in `app.js` if needed.
3. Remove the `.overview-map`, `.interactive-map`, and Leaflet override rules from `styles.css`.