# WCAG 2.1 AA Accessibility Notes

WCAG compliance for this site was evaluated with WAVE and manual testing of the main pages, navigation, language switching, and map interactions.

## 1.3.1 Info and Relationships

The page structure uses semantic HTML elements and native controls: `header`, `nav`, `main`, `footer`, headings, lists, links, and buttons. The language selector is a button group, the city menu is a real button with `aria-expanded` and `aria-controls`, and the skip link targets the main content container. These patterns preserve the visual and programmatic relationships that assistive technologies depend on in this codebase.

## 2.4.1 Bypass Blocks (Skip to Content)

A skip link is placed at the start of the document and points to `#content`. It is hidden by default and becomes visible on keyboard focus. This allows keyboard and screen reader users to bypass the fixed header and reach the page content directly.

## 2.4.7 Focus Visible

The stylesheet defines a visible focus style for links, buttons, inputs, selects, and textareas using `:focus-visible`. The outline is high contrast and offset so it remains visible against the site background and header styling. This supports clear focus tracking during keyboard navigation.

## 2.1.1 Keyboard

The main navigation uses native links and buttons, so it is operable without a mouse. The city dropdown opens with a button and each city entry is rendered as a button that updates the page through the SPA router, which keeps the interaction keyboard accessible. The map page itself does not require pointer-only actions for navigation to the page; users can reach it through the keyboard-accessible main menu and then use the map controls provided by Leaflet and the underlying browser focus model.
