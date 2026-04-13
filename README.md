
# Sulle Tracce di Dante Alighieri

> **Work in Progress**
>
> This project is still under development:
> 1. Content may still be added or updated.
> 2. The JavaScript functionality is not yet complete and may change.

A multilingual website exploring the places connected to Dante Alighieri's life and works, with content in Italian, English, and German.

## Features
- Multilingual navigation (Italian, English, German)
- City pages with historical and literary context
- Interactive map (planned/optional)
- Responsive design and accessible navigation

## Project Structure
```
css/
data/
  Coordinates/
    Bologna_coordinates.geojson
    Casentino_coordinates.geojson
    Forli_coordinates.geojson
    Lunigiana_coordinates.geojson
    Overview_map.geojson
    Ravenna_coordinates.geojson
    Treviso_coordinates.geojson
    Verona_coordinates.geojson
  Home_page.html
  List_of_places.md
  Pictures/
    Bologna/
    Casentino/
    Forlì/
    Lunigiana/
    Ravenna/
    Treviso/
    Verona/
    credits.json
    favicon.svg
    map_placeholder_credits.txt
    Secondary_map_placeholder.PNG
  Styling_ideas/
  Texts/
    City_page_structure.md
    English/
      1_Home_page_text_en.md
      2_About_text_en.md
      Bologna_text_en.md
      Casentino_text_en.md
      Forlì_text_en.md
      Lunigiana_text_en.md
      Ravenna_text_en.md
      Treviso_text_en.md
      Verona_text_en.md
    German/
      1_Home_page_text_de.md
      2_About_text_de.md
      Bologna_text_de.md
      Casentino_text_de.md
      Forli_text_de.md
      Lunigiana_text_de.md
      Ravenna_text_de.md
      Treviso_text_de.md
      Verona_text_de.md
    Italian/
      1_Home_page_text_it.md
      2_About_text_it.md
      Bologna_text_it.md
      Casentino_text_it.md
      Forlì_text_it.md
      Lunigiana_text_it.md
      Ravenna_text_it.md
      Treviso_text_it.md
      Verona_text_it.md
docs/
  data_documentation.md
  history/
  html_creation_requirements.md
  journal.md
  requirements_AI.md
  requirements_translated_homepages.md
  translated_page_creation.md
  visual_design.md
de/
en/
impressum.html
index.html
it/
js/
map_placeholder.html
README.md
tutorial/
```

## Getting Started
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/dante-map.git
   cd dante-map
   ```
2. **Open the project in your browser:**
   - You can use a local server (recommended for navigation and assets):
     - With Python 3:
       ```sh
       python -m http.server
       ```
     - Or use VS Code Live Server extension.
   - Open `Pages/Italian_pages/index_it.html`, `Pages/English/index_en.html`, or `Pages/German_pages/index_de.html` as the homepage for each language.

## Deployment
- Push all files to your GitHub repository.
- For GitHub Pages:
  - Set the root (or `/Pages/`) as the publishing source in repository settings.
  - The main homepage can be set to the language of your choice (e.g., `index_en.html`).

## Credits
- Content and research: [Your Name or Team]
- Images: See image credits in each page
- Code: HTML, CSS, JavaScript

## License
Specify your license here (e.g., MIT, CC BY-SA 4.0, etc.)

---
For questions or contributions, open an issue or pull request.

