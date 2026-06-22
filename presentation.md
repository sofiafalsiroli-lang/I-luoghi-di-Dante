# Präsentation

## Folie 1: Was macht die Website?

- Die Website zeigt Orte in Norditalien, die mit Dante verbunden sind.
- Sie ist in drei Sprachen verfügbar: Italienisch, Englisch und Deutsch.
- Es gibt eine Startseite, Stadtseiten, eine Karten-Seite und eine About-Seite.
- Auf den Stadtseiten stehen Texte, Bilder und Quellen zu den einzelnen Orten.
- Die interaktive Karte hilft dabei, die Städte und Orte schnell zu finden.

## Folie 2: Wie funktioniert die Website?

- `app.js` ist die Hauptlogik der Seite und steuert Navigation, Sprache und das Laden der Inhalte.
- Es liest die URL-Parameter `lang`, `page` und `city`, damit die richtige Seite gezeigt wird.
- Beim Sprachwechsel speichert `app.js` die Auswahl auch in `localStorage`.
- `renderPage()` lädt den passenden Inhalt für Home, About, Map oder eine Stadtseite.
- Die Texte liegen als Markdown-Dateien in `data/texts/`.
- `renderMarkdownPage()` lädt diese Dateien mit `fetch()` und wandelt sie mit `marked` in HTML um.
- Auf Stadtseiten bekommen die Überschriften stabile `id`-Werte.
- Diese `id`-Werte sind wichtig, damit Links zu bestimmten Abschnitten funktionieren.
- `interactive-map.js` baut die Karten mit Leaflet auf.
- Es lädt die GeoJSON-Dateien aus `data/coordinates/` und erstellt daraus Marker.
- Jeder Marker bekommt ein Popup mit einem Link zu einer Stadt oder zu einem Textabschnitt.
- Wenn man auf so einen Link klickt, springt die Seite zu dem passenden Anker.
- Bilder und Bildquellen kommen aus `data/pictures/` und `credits.json`.
- Die Bild-Credits werden beim Erzeugen der Stadtinhalte direkt an das richtige Bild gekoppelt.

## Folie 3: Was könnte besser sein?

- Die Seite könnte noch stärker für mobile Geräte optimiert werden.
- Die Karten könnten noch mehr Filter oder Suchfunktionen haben.
- Die Inhalte könnten in Zukunft noch mit mehr Orten erweitert werden.
- Die Datenstruktur könnte noch einheitlicher sein.
- Die Seiten könnten noch mehr kleine interaktive Elemente bekommen.

## Schlussfolie: Fazit

- Das Projekt verbindet Literatur, Geschichte und Webentwicklung.
- Die Website ist übersichtlich, mehrsprachig und datenbasiert.
- Interaktive Karten machen die Inhalte leichter zugänglich.
- Das Projekt ist eine gute Basis für weitere Erweiterungen.
