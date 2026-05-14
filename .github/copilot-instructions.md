# Copilot instructions for Ananya Agrawal personal site

- Project type: static front-end only (HTML/CSS/JS). No Node, no build pipeline.
- Key files:
  - `index.html`: single-page sections (+ nav, hero, about, projects, skills, contact)
  - `styles.css`: global layout, responsive grid, light theme and `.section-alt` alternation
  - `script.js`: mobile nav toggle (`.nav-toggle`), smooth scrolling, animated skill bars on scroll

- Big picture
  - This is a responsive personal portfolio template. Changes are mostly content updates and style tweaks rather than feature architecture.
  - All interactivity is in `script.js`; the DOM uses classes like `nav-links`, `skill-fill`, `.project-card`.

- Workflow (no tests/build):
  - Run Python static server: `python3 -m http.server` from project root, open `http://localhost:8000`.
  - Alternatively, double-click `index.html` for quick preview.

- Project conventions
  - Semantic HTML sections with ids: `#about`, `#interests`, `#projects`, `#skills`, `#contact`.
  - CSS class naming is BEM-adjacent but flat (`hero-grid`, `card-grid`, `social-links`). Keep new class names consistent with this style.
  - Inline style on `.skill-fill` (width percentages) is initial state used by `script.js`; do not hard-code animation state outside this pattern.

- Extensibility patterns
  - For new section: add HTML section, include id for nav, CSS style in `styles.css`, and no extra JS unless dynamic behavior required.
  - For new nav links: update `<ul class="nav-links">` and ensure anchor scroll behavior covers `a[href^="#"]` in `script.js`.

- Avoid accidental regressions
  - `script.js` depends on `.nav-toggle` and `.nav-links` existing; keep these class names stable.
  - `animateSkills()` uses `window.removeEventListener('scroll', animateSkills)` to avoid repeated animations.

- Integration
  - No third-party JS libraries are included. Fonts are loaded from Google Fonts declared in `index.html`.
  - Image path uses local file (e.g., `WhatsApp Image...jpeg`). Replace with preferred image but maintain accessibility `alt` text.

Ask user if any UI/behavior gaps should be included (e.g., form submit handling is stubbed via `action="#"`).
