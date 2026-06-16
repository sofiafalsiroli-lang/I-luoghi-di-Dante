# Map implementation blueprint

## Goal
Build the interactive maps with Leaflet while keeping the current site structure clean and maintainable.

## File split
- `app.js`: app state, routing, language switching, page selection, and the decision of when a map page should be shown.
- `interactive-map.js`: Leaflet-specific logic, including map creation, markers, popups, and map initialization helpers.
- `index.html`: loads `interactive-map.js` and `app.js`.

## Data needed
The existing coordinate files are enough as a base, but the map features should ideally contain:
- a stable feature key or ID that matches the text section or paragraph it should scroll to
- a human-readable place name
- optional localized names for Italian, English, and German
- optional popup text or short description
- optional city slug or page slug if the same structure is reused across pages

## Map flow
1. `app.js` renders the requested page.
2. If the page needs a map, it calls a function from `interactive-map.js`.
3. `interactive-map.js` initializes the Leaflet map.
4. The GeoJSON data is loaded and converted into markers or other map layers.
5. Each marker gets a click handler.
6. When a marker is clicked, the page scrolls to the matching text section or paragraph.
7. If the user changes page or city, the map logic re-initializes the visible map container.

## Responsibilities for `interactive-map.js`
- create the Leaflet map instance
- set the tile layer and attribution
- load and parse the GeoJSON data
- add markers or other overlays
- connect each feature to the matching anchor in the text
- handle multilingual popup content
- support overview map and city-specific maps
- expose reusable helpers (`initMap`, `initInteractiveMaps`, `initOverviewMap`)

## Suggested responsibilities for `app.js`
- keep the URL and page state in sync
- decide whether the current page is home, about, map, or a city page
- load the correct markdown content for the selected language
- call the map module only when a map should be shown
- keep the current site navigation and language UI working

## Anchor behavior
For each map feature, the text page should contain a stable `id` on the relevant heading or paragraph.
- The map feature stores the same key.
- On marker click, the page scrolls to that `id`.
- Smooth scrolling can be added later as a small enhancement.

## Implementation order
1. Load Leaflet in the page.
2. Initialize the overview map.
3. Initialize one city page map end-to-end.
4. Reuse the pattern for the remaining city pages.
5. Add multilingual popup text and polish.

## Notes
- Leaflet is the chosen mapping library.
- The current coordinate data can be reused, but the map will be easier to maintain if the feature IDs are consistent across JSON, text headings, and map behavior.
- Keeping the map logic separate from `app.js` makes the project easier to debug and extend.
