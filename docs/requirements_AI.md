# Website Requirements — Dante's Places

## 1. Aim of the Website

The website aims to present the places (cities and regions) where Dante Alighieri lived during his exile, using an interactive map and multilingual content. It is designed for anyone interested in following Dante’s journey through Italy, both digitally and in person.

## 2. Website Structure (Overview)

- **Main Page:**
  - Displays an interactive map of Italy with markers for each city/region associated with Dante.
  - Horizontal menu bar with dropdown for city/region selection.
  - Language switcher (Italian, English, German) in the top right.
  - Explanatory text about the project.
- **City/Region Pages:**
  - Dedicated page for each city/region.
  - Contains:
    - Historical context of Dante’s stay
    - List and description of relevant places (e.g., statues, museums, landmarks)
    - Quotations from the Divine Comedy
    - ?????Practical visitor information (where available)???? => NOT YET
    - Images with credits and tooltips
- **Other Pages:**
  - About page (project info)
  - Impressum (legal notice)
  - 404 error page (multilingual)

## 3. Website Functionality

- **Interactive Map:**
  - Clicking a city/region marker opens the corresponding city/region page.
  - Map is implemented using a mapping API (e.g., Leaflet) and GeoJSON data.
- **Navigation:**
  - Menu bar allows direct navigation to all main sections and city/region pages.
  - Dropdown menu for quick access to all cities/regions.
- **Language Switching:**
  - Language button in the top right; clicking it shows available languages (ITA, EN, DE).
  - Selecting a language reloads the current page in the chosen language.
- **Images & Credits:**
  - Images are shown for each place, with multilingual descriptions and proper attributions.
  - Hovering over an image shows a tooltip with credits; clicking may open the Wikimedia Commons source.
- **Accessibility & Responsiveness:**
  - All navigation and interactive elements are keyboard accessible.
  - Layout adapts to desktop and mobile devices.
- **Error Handling:**
  - 404 page is shown for invalid URLs, with language support.

## 4. Content & Data

- **Texts:**
  - Provided in Italian (original), English, and German (AI-assisted translation).
  - Each city/region page contains:
    - Introduction
    - List of Dante-related places
    - Historical/cultural context
    - Relevant quotations from the Divine Comedy
    - Visitor information (where available)
- **Images:**
  - Sourced mainly from Wikimedia Commons, with proper licensing and attributions.
  - Credits are managed in a structured JSON file.
- **Map Data:**
  - GeoJSON files provide coordinates for all cities/regions and individual places.

## 5. User Stories (What Should Happen...)

- When a user visits the main page, they see an interactive map and can read about the project.
- When a user clicks a city/region marker on the map, the corresponding city/region page opens.
- When a user selects a city/region from the menu, they are taken to that page.
- When a user clicks the language button, they can switch the site language; all content updates accordingly.
- When a user hovers over an image, a tooltip with credits appears; clicking the image may open the source.
- When a user visits a non-existent page, a multilingual 404 error page is shown.

## 6. Additional Requirements

- All content and navigation must be accessible and responsive.
- All images must have proper attributions and licensing information.
- The site must be easy to maintain and update (clear folder structure, consistent naming, and documentation).
- SEO meta tags and accessibility (ARIA) attributes should be included.


---


