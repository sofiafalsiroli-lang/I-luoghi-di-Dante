### Main Page structure
- title: "Sulle tracce di Dante"
- horizontal menu bar:
- main head: Sulle tracce di Dante
    - HOME
    - I LUOGHI DI DANTE
        - si apre come menù a tendina verso il basso, mostrando le 7 città regioni(Bologna, etc...). Cliccando sulla città corrispondente si apre la pagina della città
    - MAPPA
        - cliccandoci si apre si apre la pagina con la mappa interattiva che verrà creata con leaflet. (per ora con immagine placeholder)
    - ABOUT THE WEBSITE
    - FOOTER
        - for the moment blank, I'll handle the text later

The Home Page will have some kind of explanatory text about the website, I still have to write it, for the moment just use a paragraph of lorem ipsum


Language switch: button in the upper right corner (over the menu bar) whicH, when pressed, shows the available languages as "ITA", "EN", "DE"

Credits: will be display as tooltip when hoovering over the image, if we image is clicked it will lead to the correspondent Wikimedia Commons page


### Secondary page structure:
- title (html head): "City name"

- main head: Sulle tracce di Dante
- menu bar (the same as in the main page)
- language switch button
==> Basically I want the main head and the menu bar to be displayed in every page of the website

- Head (city name)
- text from the text file associated to the city
    - for the text in English and German, in a parallel column to the quotations from the Commedia add the following text in red "TRADUZIONE MANCANTE". It serves to remind me to add the translation later. In the final version I will want original text and translation to be parallel, but I don't want to see any "lines" of the table. We'll get to that with CSS
- images from the folder associated to the city inserted at the right spot (check the numeration on List_of_places)
- interactive map
