import { defineConfig } from 'astro/config';

// Deployed at the organization root, so no `base` is needed. `site` gives Astro an
// absolute origin for canonical URLs; if this ever moves to a project page
// (thinking-space.github.io/<repo>/), add `base` and the internal links in
// src/layouts/Base.astro will follow it — they all derive from one `base` constant.
export default defineConfig({
  site: 'https://thinking-space.github.io',
});
