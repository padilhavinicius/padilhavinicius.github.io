# Vinícius Padilha — Portfolio

Personal portfolio built with React, Vite and Tailwind CSS v4. Responsive, bilingual (PT/EN), and with persistent light/dark mode.

## Local development

```bash
npm ci
npm run dev
```

Run `npm run build` to generate `dist/` and `npm run preview` to check the production build.

Content and translations are in `src/content.js`; visual styles are in `src/styles.css`. Update the contact links there when needed.

The visual guide lives at `/styleguide/`. Its bilingual examples are in `src/Styleguide.jsx` and use the shared theme tokens from `src/styles.css`. The build copies the app shell to `dist/styleguide/index.html` so the URL works directly on GitHub Pages.

## Publishing

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source once. This user site uses Vite `base: '/'` and publishes at `https://padilhavinicius.github.io/`.
