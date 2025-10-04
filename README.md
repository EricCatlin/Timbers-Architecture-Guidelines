# The Timbers HOA — Architectural Review Guidelines (JS Edition)

A **JavaScript-first** setup using **Docusaurus** (no YAML required) with GitHub Pages deploy and a Node-based PDF export.

## Quick Start
```bash
# install
npm ci

# dev server
npm run start  # http://localhost:3000

# build static site
npm run build

# generate combined PDF
npm run pdf   # outputs dist/Timbers-HOA-Guidelines.pdf

# deploy to GitHub Pages (pushes to gh-pages)
npm run deploy
```

## Configure GitHub Pages
- Replace `YOUR_GITHUB_USERNAME` in `docusaurus.config.js` (org name & editUrl).  
- Push to `main`; the included workflow builds, generates a PDF, and deploys to `gh-pages`.  
- Ensure Pages is enabled for the repo and points at `gh-pages`.

## Content
- All content lives under `docs/` in Markdown.  
- Add attachments (PDFs/images) under `static/attachments/` and link them like `/attachments/your-file.pdf`.

## Notes
- The PDF uses `md-to-pdf` to combine all docs (sorted by path) into a single printable PDF.  
- Adjust the order by renaming files (e.g., `01-...`, `02-...`) or customizing `scripts/build-pdf.mjs`.
