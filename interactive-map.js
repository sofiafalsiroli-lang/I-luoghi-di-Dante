// Minimal interactive-map.js.
//
// This file is intentionally small. It only knows how to:
// - create a Leaflet map in a given DOM element,
// - load GeoJSON from a URL,
// - turn each GeoJSON feature into a marker with a popup link,
// - initialize all placeholders already present on the page.
//
// All routing, Markdown rendering, and scroll handling live elsewhere
// (mainly in `app.js`). 

(function () {
  function createMap(el, geoUrl, lang) {
    if (typeof L === 'undefined') return; 

    // 1) Map
    const map = L.map(el, { scrollWheelZoom: false }).setView([44.5, 11.3], 12);
    
    // 2) Background
    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: '&copy; OpenStreetMap contributors' }
    ).addTo(map);
   
    // 3) Markers + popup
    fetch(geoUrl) // browser API 4 HTTP requests returns a promise that resolves to a Response object
      .then((response) => response.json()) // when the required object is available parse it as Json and return it to the next promise
      .then((geo) => { // the parsed json file
        // 3.1) Markers
        const layer = L.geoJSON(geo, {
          pointToLayer: (feature, latlng) => {
            return L.circleMarker(latlng, {
              radius: 6,
              color: '#b22222',
              fillColor: '#b22222',
              fillOpacity: 1
            });
          },
          // 3.2 Popup
          onEachFeature: (feature, lyr) => {
            const props = feature.properties || {};
           
            const name = props[`name_${lang}`] || props.name || props.name_en || '';
               
            const link = props.link || '#';
           
            lyr.bindPopup(`<a class="map-popup-link" href="${escapeHtml(link)}">${escapeHtml(name)}</a>`); 
            }
        }).addTo(map);

        try {
          map.fitBounds(layer.getBounds()); // center the map on the given bounds Die Karte auf den angegebenen Bereich zentrieren. (passed through layer.getBounds)
          // layer was defined before, .getBounds gives back the coordinates computes the minimal bounding rectangle that contains them all.
        } catch (e) {                     // gibt die Koordinaten zurück und berechnet das kleinste umschließende Rechteck, das alle Punkte enthält.
          
        }
      })
      .catch(() => {
        
      });

    return map;
  }

  function escapeHtml(text) {
    return String(text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

 
  window.initMap = function (containerId, geoJsonUrl, lang = 'en') {
    const el = typeof containerId === 'string'  // if contanerId is passed as string
      ? document.getElementById(containerId)  // el is this
      : containerId; // if containerID is already passed as object

    if (!el) return null;

    return createMap(el, geoJsonUrl, lang); // call the create Map function
  };

  
  window.initInteractiveMaps = function () {
    const nodes = [...document.querySelectorAll('.interactive-map')];
    nodes.forEach((node) => {
       
      if (node.dataset.inited) return;
      node.dataset.inited = '1';

      const geo = (node.dataset.geojsonPath || '').trim();
      const lang = node.dataset.lang || 'en';
      if (geo) {
        window.initMap(node.id, geo, lang);
      }
    });
  };

  
  window.initOverviewMap = function (lang = 'en') {
    const el = document.getElementById('overview-map');
    if (!el) return null;
    // prevent double-initialization if called multiple times
    if (el.dataset.inited) return null;
    el.dataset.inited = '1';

    const geo = (el.dataset.geojsonPath || 'data/coordinates/overview_map.geojson').trim();

    const map = createMap(el, geo, lang);
    return map;
  };
})();
