# Data Documentation

This document describes the structure, format, and relationships of the data used in the Dante Map project. It is intended to help developers, maintainers, and contributors understand the data organization and how different files and folders relate to each other.

---

## 1. Data Overview

The `Data/` folder contains all content and assets related to the cities and regions associated with Dante. The data is organized into the following main subfolders:

- `Coordinates/` — GeoJSON files with geographic coordinates for places and cities
- `Pictures/` — Images for each place/city, organized in subfolders, plus image credits and metadata
- `Texts/` — Multilingual textual content for each city/place, organized by language
- `List_of_places.md` — Master list of all places and cities/regions

---

## 2. Coordinates

- **Folder:** `Data/Coordinates/`
- **Format:** GeoJSON (`.geojson`)
- **Files:**
  - One file per city/region (e.g., `Bologna_coordinates.geojson`)
  - `Overview_map.geojson` for city/region-level markers
- **Structure:**
  - Each file is a GeoJSON FeatureCollection
  - Each feature represents a place, with properties:
    - `name`: Place name (matches List_of_places.md and image/text files)
    - `ID`: Unique place identifier (e.g., `BO_1`)
    - `geometry`: Coordinates (longitude, latitude)
- **Relationships:**
  - Place IDs and names correspond to entries in `List_of_places.md`, image filenames, and text sections

---

## 3. Pictures

- **Folder:** `Data/Pictures/`
- **Format:** JPEG, PNG, JFIF images; JSON for credits
- **Structure:**
  - Subfolders for each city/region (e.g., `Bologna/`, `Casentino/`, etc.)
  - Images named with a code: `[CITYCODE]_[NUMBER]_[PlaceName].[ext]` (e.g., `BO_1_Garisenda.jpg`)
  - `credits.json`: Metadata and attributions for each image
  - `map_placeholder_credits.txt`: Attribution for map placeholder images
  - `favicon.svg`: Site favicon
- **credits.json:**
  - Key: Image filename
  - Value: Object with fields:
    - `place`: Place name
    - `city`: City/region
    - `description`: Multilingual (it/en/de)
    - `credit`: HTML-formatted attribution (with license and Wikimedia link)
- **Relationships:**
  - Image filenames match place IDs in coordinates and entries in `List_of_places.md`
  - Descriptions and credits are used for tooltips and attributions on the website

---

## 4. Texts

- **Folder:** `Data/Texts/`
- **Format:** Markdown (`.md`)
- **Structure:**
  - Subfolders by language: `English/`, `German/`, `Italian/`
  - Each subfolder contains one file per city/region (e.g., `Bologna_en_text.md`, `Bologna_text_de.md`, `Bologna_text_it.md`)
  - `City_page_structure.md`: Template/outline for city pages
- **Content:**
  - Each file contains:
    - Introduction to the city/region
    - List of places (matching `List_of_places.md` and coordinates)
    - Detailed sections for each place, with historical/cultural context and relevant Dante quotations
    - Multilingual structure: Each language folder contains equivalent content for each city/region
- **Relationships:**
  - Place names and order match those in `List_of_places.md`, coordinates, and image files
  - Used to populate the content of city pages on the website

---

