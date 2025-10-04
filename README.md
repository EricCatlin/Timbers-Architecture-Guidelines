# The Timbers HOA — Architectural Review Guidelines

A **Docusaurus** website for HOA architectural guidelines with automated GitHub Pages deployment.

## Quick Start
```bash
# install dependencies
pnpm install

# start development server
pnpm start  # http://localhost:3000/hoa-guidelines/

# build static site
pnpm build

# serve built site locally
pnpm serve

# deploy to GitHub Pages
pnpm deploy
```

## GitHub Pages Deployment
- The included workflow automatically builds and deploys to the `gh-pages` branch.  
- Ensure Pages is enabled for the repo and points at the `gh-pages` branch.
- Site will be available at: `https://ericcatlin.github.io/hoa-guidelines/`

## Content Management
- All content lives under `docs/` in Markdown files.  
- Add attachments (PDFs/images) under `static/attachments/` and link them like `/attachments/your-file.pdf`.
- Navigation is controlled by `sidebars.js`.

## Exporting Content
Users can export individual pages or the entire site as PDF using their browser's built-in "Print to PDF" feature (Cmd+P or Ctrl+P).
