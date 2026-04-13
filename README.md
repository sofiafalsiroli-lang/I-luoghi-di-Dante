
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
- Interactive map placeholder (full interactivity planned)
- Responsive design and accessible navigation
- Beginner tutorials explaining key HTML files

## Project Structure
```
css/
  style.css
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
  pictures/
    bologna/
    casentino/
    forlì/
    lunigiana/
    ravenna/
    treviso/
    verona/
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
de/
  index_de.html
  about_de.html
  map_placeholder_de.html
  bologna_de.html  casentino_de.html  forli_de.html
  lunigiana_de.html  ravenna_de.html  treviso_de.html  verona_de.html
docs/
  data_documentation.md
  history/
  html_creation_requirements.md
  journal.md
  requirements_AI.md
  requirements_translated_homepages.md
  translated_page_creation.md
  visual_design.md
en/
  index_en.html
  about_en.html
  map_placeholder_en.html
  bologna_en.html  casentino_en.html  forli_en.html
  lunigiana_en.html  ravenna_en.html  treviso_en.html  verona_en.html
it/
  index_it.html
  about_it.html
  map_placeholder_it.html
  bologna_it.html  casentino_it.html  forli_it.html
  lunigiana_it.html  ravenna_it.html  treviso_it.html  verona_it.html
js/
  lang-switch.js
tutorial/
  index_tutorial.md
  index_de_tutorial.md
  about_de_tutorial.md
  bologna_de_tutorial.md
  map_placeholder_de_tutorial.md
  impressum_tutorial.md
  404_tutorial.md
  verona_tutorial.md
404.html
impressum.html
index.html
README.md
```

## Getting Started
1. **Clone the repository:**
   ```sh
   git clone https://github.com/sofiafalsiroli-lang/I-luoghi-di-Dante.git
   cd I-luoghi-di-Dante
   ```
2. **Open the project in your browser:**
   - You can use a local server (recommended for navigation and assets):
     - With Python 3:
       ```sh
       python -m http.server
       ```
     - Or use VS Code Live Server extension.
   - Open `index.html` as the entry point; it will let you choose your preferred language and redirect you to the corresponding homepage (`it/index_it.html`, `en/index_en.html`, or `de/index_de.html`).

## Tutorials
The `tutorial/` folder contains beginner-friendly, bilingual (English/Italian) walkthroughs of key HTML files. These explain the structure and purpose of each file and are intended for learners new to web development.

## Deployment
- Push all files to your GitHub repository.
- For GitHub Pages:
  - Set the repository root as the publishing source in repository settings.
  - The entry point is `index.html`, which handles language selection and redirects visitors accordingly.

## Credits
- Content and research: Sofia Falsiroli
- Images: See `data/pictures/credits.json` for full image credits
- Code: HTML, CSS, JavaScript

## License
Specify your license here (e.g., MIT, CC BY-SA 4.0, etc.)

---
For questions or contributions, open an issue or pull request.

