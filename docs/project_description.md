# Project description
My aim is to create a Dante-themed website. The main theme is Dante's journey through Northern Italy during his exile.

The website should support three languages: Italian, English, German. I already have the texts I'd like to put in the website translated in the three languages.

The website structure should be:
- Homepage
- City pages
- Interactive map
- About page

Each page should have the same structure at the top:
- Language bar with language buttons to switch between languages
- Main title bar with the title according to the selected language:
    - "Sulle orme di Dante"
    - "On Dante's Trail"
    - "Auf Dantes Spuren"
- Menu bar with the following entries:
    - Homepage
    - Cities (dropdown with all cities)
    - Map
    - About

And at the bottom:
- Footer

The pages should be stylistically consistent, with dark red as the main color.


Images:
-> There is one image for each "place linked to Dante" in every city (for example Bologna has 3, Casentino has 2, and so on).
I want every image to be displayed in the matching paragraph.
Credits for every image (stored in `credits.json` in the picture folder) should:
    - be displayed when hovering over the image
    - link to the corresponding Wikimedia Commons page when the image is clicked


Placeholder map
-> Every city page (in every language) should include a map block at the beginning (ideally next to or under the Introduction paragraph).


## Implementation:
- The texts for each page are saved as Markdown files.
- Anything between square brackets `[]` should be interpreted as placement instructions (images, maps, links), not as user-visible text.
- Images and the map block on city pages should be displayed to the right of the assigned paragraph.
YOU ARE NOT ALLOWED TO INSERT TEXT/IMAGES THAT ARE NOT PRESENT IN THE MARKDOWN FILES OR PICTURE FOLDER