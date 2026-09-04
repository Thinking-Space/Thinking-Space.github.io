# Thinking Space

The homepage for Thinking Space. Published at
<https://thinking-space.github.io>.

## Stack

Astro, no UI framework, no CSS framework, no client-side JavaScript. Two routes rendered
to static HTML at build time.

```
src/
├── data/lab.json        every string on the site — the single source of truth
├── layouts/Base.astro   document shell, header, footer, and all styles
└── pages/
    ├── index.astro      /          vision, belief, and the newest paper
    └── research.astro   /research/ both papers, in full
```

## Content

`src/data/lab.json` holds all copy and links. Nothing is hardcoded in the templates, so
editing that one file changes the site. The research list is sorted by date at render
time, newest first — adding an entry cannot put the wrong paper at the top.

## Develop

```
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve dist/
```

## Deploy

`.github/workflows/deploy.yml` builds on every push to `main` and publishes to GitHub
Pages. Enable it once under **Settings → Pages → Source → GitHub Actions**.

Because this repo is `<org>.github.io`, the site serves from the domain root and needs no
`base` path. Every internal link derives from a single `base` constant in
`src/layouts/Base.astro`, so moving to a project page would only mean setting `base` in
`astro.config.mjs`.

## Known placeholders

| Where | Value | Replace with |
| --- | --- | --- |
| `public/favicon.svg` | a "T" set in the wordmark's green | a real mark, when there is one |
