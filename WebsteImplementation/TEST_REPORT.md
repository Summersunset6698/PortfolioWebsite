# Test Report

| Area | What was tested | Result | Fixes made |
|------|-----------------|--------|------------|
| Navigation | Every `href` on all 3 pages resolves to an existing file (script check) | ✅ No broken links | Nav is identical on all pages |
| Navigation | ✅ Click Projects / About Me / Artwork + logo on every page | | |
| Images | All 17 `<img>` tags point to files inside `images/` | ✅ All files exist | Images were moved from outside the site folder into `images/` so they work on GitHub Pages |
| Images | Every `<img>` has `alt` text | ✅ | — |
| Images | ✅ Images visibly load on the Artwork page | | |
| JavaScript | `js/script.js` passes a syntax check (`node --check`) | ✅ | Removed unused typing-animation code |
| JavaScript | ✅ Each filter (All, Drawings, Photography, CGI) shows only that category; ☐ clicking an image opens the lightbox; ☐ clicking or pressing Esc closes it; ☐ "Challenges" on the Forza card expands and collapses | | |
| Responsive | ✅ Desktop width + phone in DevTools device toolbar (F12) | | Added a ≤600px media query: nav stacks, buttons go full width, single-column gallery |
| Console | ✅ F12 → Console on all 3 pages shows no errors | | |
| Network | ✅ F12 → Network, reload each page, no 404s | | |
