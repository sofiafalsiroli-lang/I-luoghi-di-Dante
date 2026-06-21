/*
  tutorials/app_tutorial.js

  Tutorial-annotated application script for the Dante project.

  Purpose & structure:
  - Contains the client-side single-page app (SPA) logic used by the site.
  - Responsible for: language selection, simple routing (page, city), loading
    markdown content from `data/texts/`, and wiring interactive map placeholders
    that `interactive-map.js` initializes.
  - Data conventions:
    - Text content lives under `data/texts/{Language}/` and follows the
      filename pattern: `<Place>_text_{lang}.md` or `1_Home_page_text_{lang}.md`.
    - City images and credits are referenced from `data/pictures/` and
      `data/pictures/credits.json`.

  Notes for readers:
  - This file is a faithful copy of the app logic with extra inline
    explanations to help understand how UI, routing and content loading interact.
  - The app intentionally separates concerns: this file handles UI and
    markdown loading; `interactive-map.js` handles map rendering.
*/

const LANGUAGES = ["it", "en", "de"];

// Translations for UI strings used by the shell (header, nav, loading/error text).
// Add or modify languages here; ensure `LANGUAGES` and `LANG_DIR` stay in sync.
const TRANSLATIONS = {
  it: {
    siteTitle: "Sulle orme di Dante",
    siteSubtitle: "Un viaggio nel Nord Italia",
    home: "Home",
    cities: "Citt\u00e0",
    map: "Mappa",
    about: "About",
    // placeholder map strings removed — site uses interactive maps instead
    loading: "Caricamento contenuti...",
    missingContent: "Contenuto non disponibile.",
    imageAlt: "Immagine",
    mapCreditsLabel: "Crediti mappa",
    mapHoverHint: "Clicca sui segnaposti rossi per scoprire in quale citt\u00e0 Dante fu ospitato."
  },
  en: {
    siteSubtitle: "A journey through Northern Italy",
    home: "Home",
    cities: "Cities",
    map: "Map",
    about: "About",
    // placeholder map strings removed — site uses interactive maps instead
    loading: "Loading content...",
    missingContent: "Content is not available.",
    imageAlt: "Image",
    mapCreditsLabel: "Map credits",
    mapHoverHint: "Click the red markers to find out in which city Dante was hosted."
  },
  de: {
    siteTitle: "Auf Dantes Spuren",
    siteSubtitle: "Eine Reise durch Norditalien",
    home: "Startseite",
    cities: "St\u00e4dte",
    map: "Karte",
    about: "\u00dcber diese Website",
    // placeholder map strings removed — site uses interactive maps instead
    loading: "Inhalte werden geladen...",
    missingContent: "Inhalt nicht verf\u00fcgbar.",
    imageAlt: "Bild",
    mapCreditsLabel: "Karten-Credits",
    mapHoverHint: "Klicke auf die roten Markierungen, um herauszufinden, in welcher Stadt Dante zu Gast war."
  }
};

// Project city definitions. Each entry contains a `slug` (URL-safe id),
// localized `label`s, `textKey` used to pick the markdown file name, and
// picture folder/prefix used when loading images from `data/pictures/`.
const CITIES = [
  {
    slug: "bologna",
    label: { it: "Bologna", en: "Bologna", de: "Bologna" },
    textKey: { it: "Bologna", en: "Bologna", de: "Bologna" },
    pictureFolder: "bologna",
    imagePrefix: "Bologna"
  },
  {
    slug: "casentino",
    label: { it: "Casentino", en: "Casentino", de: "Casentino" },
    textKey: { it: "Casentino", en: "Casentino", de: "Casentino" },
    pictureFolder: "casentino",
    imagePrefix: "Casentino"
  },
  {
    slug: "forli",
    label: { it: "Forl\u00ec", en: "Forl\u00ec", de: "Forl\u00ec" },
    textKey: { it: "Forli", en: "Forli", de: "Forli" },
    pictureFolder: "forl\u00ec",
    imagePrefix: "Forli"
  },
  {
    slug: "lunigiana",
    label: { it: "Lunigiana", en: "Lunigiana", de: "Lunigiana" },
    textKey: { it: "Lunigiana", en: "Lunigiana", de: "Lunigiana" },
    pictureFolder: "lunigiana",
    imagePrefix: "Lunigiana"
  },
  {
    slug: "ravenna",
    label: { it: "Ravenna", en: "Ravenna", de: "Ravenna" },
    textKey: { it: "Ravenna", en: "Ravenna", de: "Ravenna" },
    pictureFolder: "ravenna",
    imagePrefix: "Ravenna"
  },
  {
    slug: "treviso",
    label: { it: "Treviso", en: "Treviso", de: "Treviso" },
    textKey: { it: "Treviso", en: "Treviso", de: "Treviso" },
    pictureFolder: "treviso",
    imagePrefix: "Treviso"
  },
  {
    slug: "verona",
    label: { it: "Verona", en: "Verona", de: "Verona" },
    textKey: { it: "Verona", en: "Verona", de: "Verona" },
    pictureFolder: "verona",
    imagePrefix: "Verona"
  }
];

const PAGES = ["home", "about", "map", "city"];

// Mapping from language code to the folder name used under `data/texts/`.
const LANG_DIR = {
  it: "Italian",
  en: "English",
  de: "German"
};

// Runtime application state. Contains the currently selected language, page,
// active city, and loaded credits. Mutated by event handlers and routing code.
const state = {
  lang: pickInitialLanguage(),
  page: "home",
  city: "bologna",
  credits: null
};

function pickInitialLanguage() {
  const saved = localStorage.getItem("dante_lang");
  return LANGUAGES.includes(saved) ? saved : "en";
}

function parseRoute() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");
  const city = params.get("city");
  const lang = params.get("lang");

  if (LANGUAGES.includes(lang)) {
    state.lang = lang;
  }

  if (PAGES.includes(page)) {
    state.page = page;
  }

  if (state.page === "city" && city) {
    const validCity = CITIES.find((item) => item.slug === city);
    if (validCity) {
      state.city = validCity.slug;
    }
  }

  if (state.page !== "city") {
    state.city = state.city || "bologna";
  }
}

function updateRoute(push = true) {
  const params = new URLSearchParams();
  params.set("lang", state.lang);
  params.set("page", state.page);
  if (state.page === "city") {
    params.set("city", state.city);
  }
  const next = `${window.location.pathname}?${params.toString()}`;
  if (push) {
    window.history.pushState({}, "", next);
  } else {
    window.history.replaceState({}, "", next);
  }
}

function getCityBySlug(slug) {
  return CITIES.find((item) => item.slug === slug);
}

function textPathFor(page, citySlug, lang) {
  const dir = LANG_DIR[lang];
  if (page === "home") {
    return `data/texts/${dir}/1_Home_page_text_${lang}.md`;
  }
  if (page === "about") {
    return `data/texts/${dir}/2_About_text_${lang}.md`;
  }
  const city = getCityBySlug(citySlug);
  if (!city) {
    return "";
  }
  const name = city.textKey[lang];
  return `data/texts/${dir}/${name}_text_${lang}.md`;
}

async function loadInitialData() {
  const creditsResponse = await fetch("data/pictures/credits.json");
  state.credits = await creditsResponse.json();
}

function normalizeText(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

/**
 * scrollToHash
 * Scroll to an element id, accounting for a sticky header offset.
 * Waits briefly to allow dynamic DOM updates to settle. Retries once
 * if the element is not yet present.
 */
function scrollToHash(id, attempts = 0) {
  if (!id) return;
  setTimeout(() => {
    const target = document.getElementById(id);
    if (!target) {
      if (attempts < 2) scrollToHash(id, attempts + 1);
      return;
    }
    try {
      const header = document.querySelector('.site-header');
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const targetTop = window.scrollY + target.getBoundingClientRect().top - headerHeight - 8; // small gap
      window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
    } catch (err) {
      try { target.scrollIntoView(); } catch (e) { /* ignore */ }
    }
  }, 50);
}

function shouldAttachImageToHeading(headingText) {
  const value = normalizeText(headingText);
  const blockedStarts = [
    "introduzione",
    "introduction",
    "einfuhrung",
    "fonti",
    "sources",
    "quellen",
    "presentazione"
  ];
  return !blockedStarts.some((prefix) => value.startsWith(prefix));
}

// Small helpers to extract URL and readable text from the stored credit HTML
// strings. The credits file contains HTML fragments and this code sanitizes
// and converts them to link targets and alt/caption text used in the gallery.
function extractWikimediaUrl(creditHtml) {
  const match = creditHtml.match(/href=\"([^\"]+)\"/i);
  return match ? match[1] : "#";
}

function extractCreditText(creditHtml) {
  return creditHtml.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function cityImagesFor(city) {
  if (!state.credits) {
    return [];
  }
  const prefix = `${city.imagePrefix}_`;
  return Object.keys(state.credits)
    .filter((key) => key.startsWith(prefix))
    .sort((a, b) => {
      const na = Number((a.match(/_(\d+)/) || [0, 0])[1]);
      const nb = Number((b.match(/_(\d+)/) || [0, 0])[1]);
      return na - nb;
    })
    .map((key) => ({
      fileName: key,
      path: `data/pictures/${city.pictureFolder}/${key}`,
      credit: state.credits[key]
    }));
}

function attachCityMedia(contentEl, city, lang) {
  const images = cityImagesFor(city);
  let imageIndex = 0;

  const headings = [...contentEl.querySelectorAll("h3")];
  headings.forEach((heading) => {
    if (!shouldAttachImageToHeading(heading.textContent)) {
      return;
    }

    if (imageIndex >= images.length) {
      return;
    }

    const item = images[imageIndex];
    const tooltipText = extractCreditText(item.credit.credit);
    const sourceUrl = extractWikimediaUrl(item.credit.credit);

    const figure = document.createElement("figure");
    figure.className = "inline-image";

    const link = document.createElement("a");
    link.href = sourceUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "credit-tooltip";
    link.setAttribute("data-tooltip", tooltipText);

    const img = document.createElement("img");
    const imageDescription = item.credit?.description?.[lang] || item.credit?.place || item.fileName;
    img.alt = imageDescription;
    img.src = item.path;

    const caption = document.createElement("figcaption");
    caption.className = "image-description";
    caption.textContent = imageDescription;

    link.appendChild(img);
    figure.appendChild(link);
    figure.appendChild(caption);

    heading.insertAdjacentElement("afterend", figure);
    imageIndex += 1;
  });

  const introHeading = headings.find((heading) => {
    const value = normalizeText(heading.textContent);
    return value.startsWith("introduzione") || value.startsWith("introduction") || value.startsWith("einfuhrung");
  });
  // No longer inserting a static placeholder map image; interactive maps
  // are created by `interactive-map.js`. Keep page content focused on text
  // and city images only.
}

function markActiveNav() {
  const home = document.getElementById("nav-home");
  const map = document.getElementById("nav-map");
  const about = document.getElementById("nav-about");
  [home, map, about].forEach((item) => item.removeAttribute("aria-current"));

  if (state.page === "home") {
    home.setAttribute("aria-current", "page");
  } else if (state.page === "map") {
    map.setAttribute("aria-current", "page");
  } else if (state.page === "about") {
    about.setAttribute("aria-current", "page");
  }
}

// Render a lightweight overview map placeholder element that `initOverviewMap`
// will replace. Ensures a predictable DOM target (`#overview-map`).
function renderMapPlaceholder(lang) {
  const content = document.getElementById('content');
  if (!content) return;
  // Render only the DOM container that the overview map script will attach to.
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  content.innerHTML = `
    <section class="overview-map-section" data-tooltip="${t.mapHoverHint}">
      <div id="overview-map" class="overview-map" data-geojson-path="data/coordinates/overview_map.geojson" style="width:100%;height:520px"></div>
    </section>`;
}

// Replace textual markdown placeholders like:
//   [Interactive map: data/coordinates/bologna_coordinates.geojson]
// with an actual `.interactive-map` container element the minimal
// `interactive-map.js` can initialize.
window.replaceInteractiveBlocks = async function (contentEl, citySlug, lang = 'en') {
  if (!contentEl) return;
  const paragraphs = [...contentEl.querySelectorAll('p')];
  paragraphs.forEach(p => {
    const text = p.textContent && p.textContent.trim();
    const match = text && text.match(/^\[Interactive map:\s*(.+\.geojson)\]$/i);
    if (match) {
      const geoJsonPath = match[1].trim();
      const mapDiv = document.createElement('div');
      mapDiv.className = 'interactive-map';
      // ensure an id exists for the map initializer
      mapDiv.id = `interactive-map-${citySlug || 'city'}`;
      mapDiv.style.height = '360px';
      mapDiv.dataset.geojsonPath = geoJsonPath;
      mapDiv.dataset.lang = lang;
      mapDiv.dataset.city = citySlug || '';
      p.replaceWith(mapDiv);
    }
  });
  // initialize any maps in the newly created containers
  if (window.initInteractiveMaps) {
    try { window.initInteractiveMaps(); } catch (e) { /* ignore */ }
  }
};

function renderShellText() {
  const t = TRANSLATIONS[state.lang];

  document.getElementById("site-title").textContent = t.siteTitle;
  document.getElementById("site-subtitle").textContent = t.siteSubtitle;
  document.getElementById("nav-home").textContent = t.home;
  document.getElementById("nav-cities").textContent = t.cities;
  document.getElementById("nav-map").textContent = t.map;
  document.getElementById("nav-about").textContent = t.about;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    if (btn.dataset.lang === state.lang) {
      btn.setAttribute("aria-current", "true");
    } else {
      btn.removeAttribute("aria-current");
    }
  });

  const cityMenu = document.getElementById("cities-menu");
  const cityToggle = document.getElementById("nav-cities");
  cityToggle.setAttribute("aria-expanded", "false");
  cityMenu.hidden = true;
  cityMenu.innerHTML = "";
  CITIES.forEach((city) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = city.label[state.lang];
    btn.addEventListener("click", () => {
      state.page = "city";
      state.city = city.slug;
      cityMenu.hidden = true;
      cityToggle.setAttribute("aria-expanded", "false");
      updateRoute();
      renderPage();
    });
    cityMenu.appendChild(btn);
  });

  markActiveNav();
}

async function renderMarkdownPage(path, options = {}) {
  const content = document.getElementById("content");
  const t = TRANSLATIONS[state.lang];
  content.innerHTML = `<p class="loading">${t.loading}</p>`;

  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load: ${path}`);
    }

    const markdown = await response.text();
    const html = marked.parse(markdown, { gfm: true, breaks: true });
    content.innerHTML = html;

    // Keep exactly one page-level H1 (the shell title) by demoting
    // markdown-generated H1 headings to H2 in dynamic content.
    [...content.querySelectorAll("h1")].forEach((h1) => {
      const h2 = document.createElement("h2");
      [...h1.attributes].forEach((attr) => h2.setAttribute(attr.name, attr.value));
      h2.innerHTML = h1.innerHTML;
      h1.replaceWith(h2);
    });

    // Ensure headings have stable ids so markers can link to in-page anchors.
    // Use normalizeText to create a slug and guarantee uniqueness per page.
    const headingCounts = {};
    [...content.querySelectorAll('h1,h2,h3,h4')].forEach((h) => {
      if (h.id) return;
      const base = normalizeText(h.textContent).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      let id = base || 'heading';
      if (headingCounts[id]) {
        headingCounts[id] += 1;
        id = `${id}-${headingCounts[id]}`;
      } else {
        headingCounts[id] = 1;
      }
      h.id = id;
    });

    // On city pages, mark "sources" sections so we can style their links differently.
    try {
      if (options.city) {
        markSourcesSections(content);
      }
    } catch (e) {
      // non-fatal
    }

    if (options.city) {
      attachCityMedia(content, options.city, state.lang);
    }

    try {
      const citySlug = options.city ? options.city.slug : state.city;
      await window.replaceInteractiveBlocks(content, citySlug, state.lang);
    } catch (e) {
      // non-blocking
    }

    // Delegated handler: intercept clicks on `.map-popup-link` anchors and
    // use SPA routing (pushState + renderPage). This keeps popup HTML simple
    // while ensuring internal navigation is handled client-side.
    if (!window._mapPopupDelegationInstalled) {
      window._mapPopupDelegationInstalled = true;
      document.addEventListener('click', (e) => {
        try {
          const a = e.target.closest && e.target.closest('.map-popup-link');
          if (!a) return;
          const href = a.getAttribute('href');
          if (!href) return;
          // External links (starting with http) should behave normally.
          if (/^https?:\/\//i.test(href)) return;
          e.preventDefault();
          history.pushState({}, '', href);
          parseRoute();
          renderPage();
        } catch (err) {
          // swallow
        }
      });
    }

    // If the URL contains a hash fragment, attempt to scroll to the matching
    // heading after rendering. Delegate to the shared helper `scrollToHash`.
    try {
      const hash = window.location.hash;
      if (hash) {
        const id = decodeURIComponent(hash.slice(1));
        scrollToHash(id);
      }
    } catch (err) {
      // swallow errors — scrolling is best-effort
    }
  } catch (error) {
    content.innerHTML = `<p class="error">${t.missingContent}</p>`;
    console.error(error);
  }
}

// Wrap content that belongs to "Sources" headings in a div.sources-section
function markSourcesSections(contentEl) {
  const keywords = ["sources", "fonti", "quellen"];
  const headings = [...contentEl.querySelectorAll('h1,h2,h3,h4')];
  headings.forEach((h) => {
    const text = normalizeText(h.textContent || '');
    if (!keywords.some((k) => text.startsWith(k))) return;

    const level = Number(h.tagName.replace('H', '')) || 2;
    const wrapper = document.createElement('div');
    wrapper.className = 'sources-section';

    // Collect nodes until the next heading of same-or-higher level
    let node = h.nextSibling;
    const toMove = [];
    while (node) {
      if (node.nodeType === 1 && /^H[1-4]$/.test(node.tagName)) {
        const nextLevel = Number(node.tagName.replace('H', ''));
        if (nextLevel <= level) break;
      }
      toMove.push(node);
      node = node.nextSibling;
    }

    if (toMove.length) {
      // Insert wrapper after the heading
      h.parentNode.insertBefore(wrapper, toMove[0]);
      toMove.forEach((n) => wrapper.appendChild(n));
    }
  });
}

async function renderPage() {
  renderShellText();

  if (state.page === "map") {
    renderMapPlaceholder(state.lang);
    if (window.initOverviewMap) {
      // initialize interactive overview map (loads Overview_map.geojson)
      try {
        window.initOverviewMap(state.lang);
      } catch (e) {
        console.warn('initOverviewMap failed', e);
      }
    }
    markActiveNav();
    return;
  }

  if (state.page === "city") {
    const city = getCityBySlug(state.city);
    if (!city) {
      state.city = "bologna";
    }
    const cityNow = getCityBySlug(state.city);
    const path = textPathFor("city", cityNow.slug, state.lang);
    await renderMarkdownPage(path, { city: cityNow });
    markActiveNav();
    return;
  }

  const path = textPathFor(state.page, "", state.lang);
  await renderMarkdownPage(path);
  markActiveNav();
}

function bindEvents() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.lang = btn.dataset.lang;
      localStorage.setItem("dante_lang", state.lang);
      updateRoute();
      renderPage();
    });
  });

  document.getElementById("nav-home").addEventListener("click", (event) => {
    event.preventDefault();
    state.page = "home";
    updateRoute();
    renderPage();
  });

  document.getElementById("nav-map").addEventListener("click", (event) => {
    event.preventDefault();
    state.page = "map";
    updateRoute();
    renderPage();
  });

  document.getElementById("nav-about").addEventListener("click", (event) => {
    event.preventDefault();
    state.page = "about";
    updateRoute();
    renderPage();
  });

  const cityToggle = document.getElementById("nav-cities");
  const cityMenu = document.getElementById("cities-menu");

  cityToggle.addEventListener("click", () => {
    const isOpen = cityMenu.hidden;
    cityMenu.hidden = !isOpen;
    cityToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
      cityMenu.hidden = true;
      cityToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      cityMenu.hidden = true;
      cityToggle.setAttribute("aria-expanded", "false");
      cityToggle.focus();
    }
  });

  window.addEventListener("popstate", () => {
    parseRoute();
    renderPage();
  });
}

async function init() {
  parseRoute();
  bindEvents();

  try {
    await loadInitialData();
  } catch (error) {
    console.error("Data loading failed", error);
  }

  updateRoute(false);
  renderPage();
}

init();