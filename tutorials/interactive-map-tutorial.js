// Minimal interactive-map.js.
//
// This file is intentionally small. It only knows how to:
// - create a Leaflet map in a given DOM element,
// - load GeoJSON from a URL,
// - turn each GeoJSON feature into a marker with a popup link,
// - initialize all placeholders already present on the page.
//
// All routing, Markdown rendering, and scroll handling live elsewhere
// (mainly in `app.js`). Keeping this file tiny makes it easier to read and
// easier to explain in class.

(function () {
  // Create one Leaflet map and fill it with points from a GeoJSON file.
  //
  // Parameters:
  // - el: the DOM element that should become the map container.
  // - geoUrl: path to the GeoJSON file for this map.
  // - lang: current language code, used to choose localized names.
  function createMap(el, geoUrl, lang) {
    // If Leaflet is missing, do nothing. This prevents hard crashes when
    // scripts fail to load or the page is opened without the CDN (content delivery network) available.
    if (typeof L === 'undefined') return; // global Lf object => if LF fails to load then L type is undefined


    // Create the map instance.
    // scrollWheelZoom is disabled so the page does not jump unexpectedly
    // when the user scrolls over the map area.
    const map = L.map(el, { scrollWheelZoom: false }).setView([44.5, 11.3], 12);
    // .map = function of L that creates a new map in a DOM element. It takes as parameter:
    //  - el = the Dom element where the map should be created)
    //  - scroll..  = object literal Leaflet map option  => disable zooming with the mouse when over the map
    // .setView = method of Leaflet map istance
    //  - coordinates in an array (lat + long) => in this case just default/fall back until the geojson file is loaded later with fit bounds()
    //  - zoom level
    //  - ? also other options, here not implemented ?


    // Add the base map tiles from OpenStreetMap.
    // This provides the background map image behind our markers.
    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: '&copy; OpenStreetMap contributors' }
    ).addTo(map);
    // .tileLayer = LF method on L, takes as arguments:
    // - URL template
    // - option object (in this case attribution)
    // .addTo = method of tileLayer that adds a layer to its argument:
    // - LF map => in this case the constant map we created before




    // Load the GeoJSON file for this map.
    // The file contains point features with metadata such as name, city slug,
    // and anchor information.
    fetch(geoUrl) // browser API 4 HTTP requests returns a promise that resolves to a Response object
      .then((response) => response.json()) // when the required object is available parse it as Json and return it to the next promise
      .then((geo) => { // the parsed json file
        // Convert every GeoJSON feature into a Leaflet layer.
        // For point data we use circle markers so the design stays consistent.
        const layer = L.geoJSON(geo, {
          pointToLayer: (feature, latlng) => {
            return L.circleMarker(latlng, {
              radius: 6, //pixels
              color: '#b22222',
              fillColor: '#b22222',
              fillOpacity: 1
            });
          },
        
          // .geoJSON = LF factory on L that creates a GEOJSON layers for Gj data, takes as argument:
          //  - geoJSON data (object/feature/feature collection)
          //  - options objects (in this case pointToLayer + onEachFeature)
          //      - pointToLayer = option passed to L.geojson that controls how gj point features 
          //        are converted to LF layers. => if not provided just standard markers. It's a 
          //        property that takes an (arrow) function as value and returns a LF layer  Arguments:
          //            - the GJ feature
          //            - the coordinates
          //   - L.circleMArker = LF factory that takes as argument:
          //     - latlng
          //     - an options object
          // return a Leaftlet layers which then should be added to a map





          // For every feature, create popup HTML.
          // The popup contains a normal <a> element so browser behavior and
          // accessibility stay simple, while app.js handles the click routing.
          onEachFeature: (feature, lyr) => {
            const props = feature.properties || {};
            // assign a constant (props) to feature.properties OR to an empty object if the feature has no property
            //    => avoids an error if later props.something is called and evaluated to undefined (defensive programming)

            // Pick the best available name for the current language.
            // Fallback order: localized name -> generic name -> English name.
            const name = props[`name_${lang}`] || props.name || props.name_en || '';
                // props[`name_${lang}`] = try to get the name that matches the language (passed as arg at the beginning of the function)
                // props.name = try just to find a generic name
                // props.name_en = try to find and English name
                // ' ' = last resort for missing/falsy => prevents name from being undefined by setting it to an empty string

            // (Using `properties.link` from GeoJSON; no runtime anchor/city needed)

            // Use the precomputed `properties.link` from the GeoJSON. Do not
            // construct links here — GeoJSON now provides the target URL.
            const link = props.link || '#';

            // Bind the popup content. `app.js` will intercept `.map-popup-link` clicks.
            lyr.bindPopup(`<a class="map-popup-link" href="${escapeHtml(link)}">${escapeHtml(name)}</a>`);
                // .bindPopup = method of layer that attaches the given html/text to it as popup
            
            }
        }).addTo(map);

        // Try to fit the map viewport to all loaded features.
        // If the GeoJSON file is empty or invalid, fitBounds may fail, so we
        // keep that failure silent.
        try {
          map.fitBounds(layer.getBounds()); // center the map on the given bounds (passed through layer.getBounds)
          // layer was defined before, .getBounds gives back the coordinates computes the minimal bounding rectangle that contains them all.
        } catch (e) {
          // ignore empty-bounds errors =  .layer.getBounds() produces an invalid result, don't do anything and just keep the fallback coordinates and zoom
        }
      })
      .catch(() => {
        // handles any error from the fetch/JSON/then chain and then silently swallows it so a failing GeoJSON load doesn't break the page.
      });

    return map;
  }

  // Small HTML escaping helper.
  // Used only for popup text, because popup strings are built manually.
  function escapeHtml(text) {
    return String(text || '')
      .replace(/&/g, '&amp;') // g = global
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // public, small API to create a Leaflet map into a container and 
  // load a GeoJSON file into it
  window.initMap = function (containerId, geoJsonUrl, lang = 'en') {
    // window is the global object, attaching initMap to it makes the function available to any other script
    const el = typeof containerId === 'string'  // if contanerId is passed as string
      ? document.getElementById(containerId)  // el is this
      : containerId; // if containerID is already passed as object

    if (!el) return null;

    // ALTERNATIVE
  //  let el;
  //  if (typeof containerId === 'string') {
  // el = document.getElementById(containerId);
  // } else {
  // el = containerId;
  // }


    return createMap(el, geoJsonUrl, lang); // call the create Map function
  };

  // Public API: find every `.interactive-map` placeholder on the page and initialize it.
  //
  // app.js creates these placeholders when it replaces the markdown tag:
  // [Interactive map: path/to/file.geojson]
  //
  // Each placeholder stores its GeoJSON path in a data attribute so we do not have
  // to guess which file should be loaded.
  window.initInteractiveMaps = function () {
    const nodes = [...document.querySelectorAll('.interactive-map')];

    nodes.forEach((node) => {
        // .forEach = array method

      // Prevent double initialization if this function gets called more than once.
      if (node.dataset.inited) return;
      node.dataset.inited = '1';

      // The GeoJSON path can be stored in several data attributes because earlier
      // versions of the code used slightly different names. This keeps the file tolerant
      // of old content or small markup differences.
      const geo = (node.dataset.geojsonPath || '').trim(); //toglie white space inizio e fine string

      // Default to English if no language was stored on the container.
      const lang = node.dataset.lang || 'en';

      // Only initialize if we know which GeoJSON file to load.
      if (geo) {
        window.initMap(node.id, geo, lang);
      }
    });
  };

  // Public API: initialize the overview map shown on the dedicated map page.
  // The overview map uses a fixed container id and a fixed GeoJSON file.
  window.initOverviewMap = function (lang = 'en') {
    const el = document.getElementById('overview-map');
    if (!el) return null; //no map

    // If the overview container already knows its GeoJSON path, use that.
    // Otherwise, fall back to the standard overview file.
    const geo = el.dataset.geojsonPath || 'data/coordinates/overview_map.geojson';

    return createMap(el, geo, lang);
  };
})();
