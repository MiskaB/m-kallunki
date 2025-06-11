# ProjectComments.md

## Project Overview
This project is a multilingual, static website for a breathwork and somatic healing practitioner. It features:
- Event listings (upcoming and past)
- Multilingual support (English, Finnish, Dutch, Spanish)
- Responsive design
- Preloader with random background images
- Contact and collaboration pages
- Portfolio and testimonials

## Structure & Conventions
- All static HTML files are in the root directory (e.g., `index.html`, `about.html`, `events.html`).
- CSS is split between `/css/style.css` (main site styles) and `style.css` (legacy or global styles).
- JavaScript for language switching and dynamic content is in `/js/lang.js`.
- Language files are in `/lang/` as JSON (`en.json`, `fi.json`, `es.json`, `nl.json`).
- Event data is in `events.json` (array of event objects with both English and Finnish fields).
- Images and media are in `/images/`.

## Internationalization (i18n)
- All translatable text is referenced in HTML via `data-i18n` attributes (e.g., `<h1 data-i18n="events.heading"></h1>`).
- Language files use a nested JSON structure. All event-related keys are under the `events` object for best practice.
- To add a new language, create a new JSON file in `/lang/` and add the language to the language switcher in HTML and JS.

## Events Schema
- `events.json` contains an array of event objects:
  - `name_en`, `name_fi`: Event name in English and Finnish
  - `date`: Date or date range (string, e.g., "3.-5.5.2024")
  - `location_en`, `location_fi`: Location in both languages
  - `info_en`, `info_fi`: Short description in both languages
- The site dynamically sorts and displays upcoming and past events based on the current date.

## Adding/Editing Events
- Add new events to `events.json` in the same schema.
- For new event types or fields, update the schema in `events.json` and adjust the rendering logic in `/js/lang.js` and relevant HTML.

## Adding/Editing Languages
- Add a new JSON file in `/lang/` (e.g., `de.json` for German).
- Copy the structure from `en.json` and translate all values.
- Update the language switcher in HTML and `/js/lang.js`.

## Testimonials Page
- Each testimonial is accompanied by a solo image of Merja (no images with other people are used for privacy and context clarity).
- Testimonial images are placed to the left of the testimonial on desktop, and above on mobile for better responsiveness.
- Images are clickable: clicking a testimonial image opens it in a fullscreen modal, similar to the portfolio gallery.
- Images scale up on hover for a more interactive experience.

## Styling
- Main styles are in `/css/style.css`.
- Responsive design is handled via media queries.
- The `.language-menu` is fixed in the top-right for language selection.
- Preloader overlay is styled for smooth background image loading.
- Testimonial images are styled to be visually balanced, responsive, and maintain aspect ratio. Only solo images of Merja are used in testimonials, and images open in a modal on click.

## JavaScript
- `/js/lang.js` handles language switching, i18n text replacement, and event table population.
- The script expects all i18n keys to be present in the selected language file.
- If a key is missing, fallback is to English.

## Best Practices
- All event-related i18n keys should be under the `events` object in language files.
- Use `data-i18n` for all translatable text in HTML.
- Keep event schema consistent for easy parsing and rendering.
- Avoid using em dashes (—) in text; use commas or periods for a more natural feel.
- For new features, follow the existing modular structure: update schema, i18n, and rendering logic as needed.

## Extending the Project
- To add new sections (e.g., blog, gallery), create new HTML files and corresponding i18n keys.
- For new data-driven features, use JSON files for data and update JS for dynamic rendering.
- For new languages, follow the i18n process above.

## Deployment
- This project is static and can be hosted on GitHub Pages or any static file server.
- The `CNAME` file is used for custom domain configuration.

## Contribution & Maintenance
- Keep all language files in sync when adding new features or text.
- Document any schema changes in this file for future maintainers.
- Use clear, descriptive commit messages.

---

This file should be included in any new repo based on this project to help Copilot or other developers quickly understand and extend the project with similar conventions and structure.
