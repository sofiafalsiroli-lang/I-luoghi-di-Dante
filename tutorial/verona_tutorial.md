# Tutorial: verona.html

## Introduction
This tutorial explains the structure and function of the `verona.html` page, which presents the city of Verona in the context of Dante Alighieri's journey. The tutorial is designed for beginners and provides a detailed, step-by-step explanation of the HTML code in both English and Italian.

| Code | Explanation (English) | Spiegazione (Italiano) |
|------|----------------------|------------------------|
| `<!DOCTYPE html>` | Declares the document type and version of HTML. It tells the browser to render the page using HTML5. | Dichiara il tipo di documento e la versione di HTML. Indica al browser di visualizzare la pagina usando HTML5. |
| `<html lang="it"> ... </html>` | The root element of the HTML document. The `lang="it"` attribute specifies that the content is in Italian. | L'elemento radice del documento HTML. L'attributo `lang="it"` specifica che il contenuto è in italiano. |
| `<head> ... </head>` | Contains meta-information about the page, such as the title, character encoding, description, links to stylesheets, and internal CSS. | Contiene meta-informazioni sulla pagina, come il titolo, la codifica dei caratteri, la descrizione, i collegamenti ai fogli di stile e il CSS interno. |
| `<body> ... </body>` | Contains all the visible content of the web page, including navigation, headings, main content, and images. | Contiene tutto il contenuto visibile della pagina web, inclusi navigazione, intestazioni, contenuto principale e immagini. |
| `<div class="lang-bar"> ... </div>` | The language bar at the top of the page. It allows users to switch between Italian, English, and German versions of the page. | La barra delle lingue in alto nella pagina. Permette agli utenti di cambiare tra le versioni italiana, inglese e tedesca della pagina. |
| `<div class="main-head"> ... </div>` | The main header section, with the site title "Sulle tracce di Dante" in white on a red background. | L'intestazione principale, con il titolo del sito "Sulle tracce di Dante" in bianco su sfondo rosso. |
| `<header> ... </header>` | Contains the navigation bar with links to the home page, city dropdown, map, and about page. | Contiene la barra di navigazione con i collegamenti alla home, al menu delle città, alla mappa e alla pagina about. |
| `<nav class="navbar" ...>` | The navigation bar. The dropdown menu under "I LUOGHI DI DANTE" lists all city pages. | La barra di navigazione. Il menu a tendina sotto "I LUOGHI DI DANTE" elenca tutte le pagine delle città. |
| `<div class="lang-section lang-it"> ... </div>` | The main content section for the Italian language. Contains the city name, introduction, and all content blocks. | La sezione principale del contenuto in italiano. Contiene il nome della città, l'introduzione e tutti i blocchi di contenuto. |
| `<div class="page-layout"> ... </div>` | A flexbox container that arranges the main content and images side by side (or stacked on mobile). | Un contenitore flexbox che dispone il contenuto principale e le immagini affiancate (o sovrapposte su mobile). |
| `<div class="section-highlight"> ... </div>` | Highlights each main section with a red vertical line. Used for introduction and each place of interest. | Evidenzia ogni sezione principale con una linea verticale rossa. Usata per l'introduzione e ogni luogo di interesse. |
| `<div class="section-flex-row"> ... </div>` | Arranges text and images in a row for each section. | Dispone testo e immagini in riga per ogni sezione. |
| `<div class="section-text"> ... </div>` | Contains the main text for each section. | Contiene il testo principale di ogni sezione. |
| `<div class="section-img"> ... </div>` | Contains the image or map for each section. | Contiene l'immagine o la mappa per ogni sezione. |
| `<div class="img-block"> ... </div>` | A container for images, captions, and tooltips. | Un contenitore per immagini, didascalie e tooltip. |
| `<span class="img-tooltip-wrapper"> ... </span>` | Wraps the image and its tooltip for accessibility and interactivity. | Racchiude l'immagine e il tooltip per accessibilità e interattività. |
| `<img ...>` | The image element. Displays a photo related to the place described. | L'elemento immagine. Mostra una foto relativa al luogo descritto. |
| `<span class="img-caption"> ... </span>` | The caption for the image, shown below the image. | La didascalia dell'immagine, mostrata sotto l'immagine. |
| `<span class="img-credit-tooltip"> ... </span>` | Tooltip with image credits and license, shown on hover. | Tooltip con crediti e licenza dell'immagine, visibile al passaggio del mouse. |
| `<section class="sources"> ... </section>` | Lists the sources for quotations from the Divine Comedy and other references. | Elenca le fonti per le citazioni dalla Divina Commedia e altre referenze. |
| `<style> ... </style>` | Internal CSS for layout, colors, and responsive design. | CSS interno per layout, colori e design responsivo. |
