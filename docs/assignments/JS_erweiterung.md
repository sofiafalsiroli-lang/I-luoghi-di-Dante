Falsiroli Sofia  
SS 2026  
Webentwicklung, 28/04/26

### Javascript für die Website "Auf Dantes Spuren":

#### Was implementiert werden soll: interaktive Karten 
Die Anwendung soll interaktive Karten zu Dantes Spuren bereitstellen. Die Daten werden aus der Folder "coordinates" (wo die Koordinaten in json Format gespeichert sind) geholt und das ganze wird mit der JavaScript-Bibliothek Leaflet umgesetzt.

1. **Was soll die Anwendung tun?**
- Auf der Seite "Mappe/Maps/Karte":
    - tooltip mit dem Namen der Stadt/Region anzeigen, (eventuell auch ein kleines Foto/ eine kleine Beschreibung) 
    - wenn man darauf clickt, die enstprechende Seite öffnen
- Auf jeder "Stadtseite":
    - die verschiedene mit Dante verbundene Orte der Stadt/Region anzeigen:
    - Tooltip mit Name des Ortes zeigen
    - In-page anchor der zum entsprechenden Absatz führt


2. **Wie wird sie bedient?**
Die Bedienung erfolgt direkt im Browser:
    - Karte zoomen und verschieben
    - Marker anklicken, um Details zu sehen
    - Per Marker-Klick zum passenden Abschnitt im Text springen


3. **Wie fügt sich die Anwendung in meine Seite ein?**
    - Eine externe js Datei die über ein "Script" Element in der "index.html" Datei referenziert wird  
=> Die Kartenfunktion wird in die bestehende Website-Struktur integriert und wird als eigener Modulbereich ergänzt, damit der Code wartbar und übersichtlich bleibt.
