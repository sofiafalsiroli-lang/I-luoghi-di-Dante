> **IMPORTANT:**
> 
> 1. **Use the existing Home_page.html as the template for all three pages.**
> 2. **Create three separate files: one for Italian, one for English, and one for German.**
> 3. **Insert the corresponding text from each language’s markdown file as the main content.**
> 4. **Ensure the inserted text appears in black.**
> 5. **Include a fully functional, language-appropriate navigation/menu bar on each page.**
> 6. **The structure and style should be consistent across all three pages.**

# Principles for Creating Translated City Pages

## 1. Structural and Visual Consistency
- Match the structure and layout of the Italian city pages exactly, including section order, navigation, and content blocks.
- Ensure all main sections (Introduction, Torre della Garisenda, Basilica di San Domenico, Frati Gaudenti, Sources) are visually and structurally separated as in the Italian version.

## 2. Language Fidelity
- Use English text from the provided markdown files, replacing only the text while keeping all HTML structure, classes, and layout identical to the Italian page.

## 3. Section Highlighting and Visual Separation
- Wrap each main section in its own `section-highlight` div to create a visually interrupted red vertical line between sections.
- Add spacing (`margin-bottom`) between `section-highlight` divs for clear visual breaks.

## 4. Navigation and Accessibility
- Ensure navigation menus, HOME links, and language switchers work and point to the correct pages.
- Maintain accessibility features (aria-labels, roles, etc.) as in the Italian template.

## 5. Image Presentation
- Match image display to the Italian Casentino page: remove any postcard/border/mask effects, using only a simple `img-block` with border-radius for images.
- Ensure image captions and credits are preserved where present, but without extra visual effects.

## 6. Source Attribution
- Include all source sections, including “Sources for quotes from the English translation of the Divina Commedia,” as in the Italian version.


## 7. Image Credits Display (CRITICAL)
- For translated city page creation, ensure all image credits are displayed according to these requirements:
  - All images must show a single tooltip on hover, containing both the image name and the full credits/license. Add the tooltip javascript if not present
  - The credits and license information must be sourced from credits.json.
  - All images must be clickable and link to their respective Wikimedia Commons page.
  - The tooltip and link markup must be present for every image.
  - The structure and visual style must be consistent across all city pages, with only the text changing between languages.

## 8. Translated Home Page Creation
- Use the existing Home_page.html as the template for all three pages.
- Create three separate files: one for Italian, one for English, and one for German.
- Insert the corresponding text from each language’s markdown file as the main content.
- Ensure the inserted text appears in black.
- Include a fully functional, language-appropriate navigation/menu bar on each page.
- The structure and style should be consistent across all three pages.
