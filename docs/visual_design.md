# Visual Design Documentation

This document summarizes all visual design requirements for the Dante Map website, synthesizing both the main CSS file and all relevant inline styles. It is intended as a single source of truth for developers and designers to ensure strict visual and structural consistency across all pages.

---

## 1. Layout Structure

- **Main Head**: Fixed at the top, dark red background (#b22222), white text, large serif title. Present on every page.
- **Language Bar**: Fixed at the very top, dark red (#8b1818), language switch button in the upper right.
- **Navigation Menu**: Horizontal, below the main head. Dropdown for city selection. Consistent across all pages.
- **Content Wrapper**: Max width 1100px (main content), centered with responsive side margins.
- **Section Layout**: Uses `.section-flex-row` (flexbox, gap: 2em, align-items: flex-start). On screens ≤900px, stacks vertically.
- **Section Highlight**: Left border (5px solid #b22222) and left padding (1.2em) for highlighted sections and decorated paragraphs.
- **Footer**: Present but blank (to be filled later).

---

## 2. Color Palette

- **Primary Red**: #b22222 (main head, section highlights, menu hover, etc.)
- **Pink (Map Block)**: #ffc0cb (background for `.map-col`)
- **Background**: #f8f6f3 (body)
- **Text**: #222 (main), #fff (on red backgrounds), #555 (image captions)
- **Language Bar**: #8b1818

---

## 3. Typography

- **Body Font**: 'Segoe UI', Arial, sans-serif, 22px
- **Main Head Title**: 'Merriweather', serif, 3.2rem, bold, letter-spacing: 0.06em
- **City Headings**: 2.1rem, bold, #b22222
- **Menu Items**: 1.1–1.35rem, bold, uppercase for main menu
- **Image Captions**: 0.8em, #555
- **Quotes**: Italic

---

## 4. Key Components & Classes

### .main-head
- Fixed, full width, dark red background, white text
- Large serif title centered

### .lang-bar & .lang-switch
- Fixed at top, right-aligned button
- Button: white background, red border/text, inverts on hover

### .menu, .main-menu, .menu.four-cols
- Horizontal flex layout, dropdowns for cities
- Active/hover: background red/white inversion

### .section-flex-row
- Flexbox row for main content sections
- `.section-text`: flex: 3; `.section-img`: flex: 1; both min-width: 0
- Responsive: stacks vertically on ≤900px

### .section-highlight, .decorated-paragraph, .section-text > p
- 5px solid #b22222 left border, 1.2em left padding

### .img-block
- Centered image container, max-width: 430px
- Images: max-width: 420px, width: 100%, border-radius: 8px
- Responsive: max-width: 95vw on small screens

### .map-col
- Pink background (#ffc0cb), border-radius: 12px
- min-width: 320px, max-width: 420px, min-height: 320px
- Flexbox centered content, bold red text
- Responsive: min-height 100px, max-width 100% on ≤900px

### .quote
- Italic, margin: 1em 0

### .trad-mancante
- Bold, #b22222 (for missing translation notices)

### .img-caption
- Small, muted text below images

### .img-tooltip-wrapper, .img-credit-tooltip
- Tooltip for image credits: appears on hover, styled with white background, gray border, drop shadow

---

## 5. Responsive Design

- **Breakpoints**:
  - ≤1100px: Side margins reduced
  - ≤900px: `.section-flex-row` and `.map-col` stack vertically, images scale to 95vw max
  - ≤700px: Menu font size reduced, tighter gaps

---

## 6. Miscellaneous

- **Favicon**: Path is `../Data/Pictures/favicon.svg` in all HTML files
- **Image Credits**: Tooltip on hover, links to Wikimedia Commons on click
- **Footer**: Present but empty for now

---

## 7. Accessibility & Usability

- All navigation and language switch elements are keyboard accessible
- Sufficient color contrast for text on backgrounds
- Tooltips for image credits

---

## 8. Visual Consistency Rules

- All city pages use identical structure and class names
- Images and map blocks are always the same size and alignment
- Section highlights and decorated paragraphs use the same border and padding
- Navigation, language bar, and main head are visually and structurally consistent across all pages

---

*This document should be updated if any visual or structural changes are made to the CSS or HTML templates.*
