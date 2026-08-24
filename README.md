# Book List Showcase

A small React + TypeScript component — a personal book list rendered as a responsive card grid. It's not meant to be a full app; it's a focused sample of how I structure and style a simple UI.

**What it shows**

- **Typed content, separated from presentation** — book data lives in [`src/data/books.ts`](src/data/books.ts) as a typed array, imported into the component rather than hardcoded in JSX. Swapping or extending the data doesn't touch layout code.
- **Small, single-purpose components** — `App` → `BookList` → `Book`, each doing one thing, instead of one file handling data, layout, and markup.
- **Tailwind CSS v4, config-in-CSS** — theme tokens (custom fonts) are declared with `@theme` in [`App.css`](src/App.css) rather than a `tailwind.config.js`, keeping styling colocated with the styles it configures.
- **Responsive by default** — a 1/2/3-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) and fluid spacing, not a fixed desktop layout with breakpoints bolted on.
- **Accessible images** — cover art gets descriptive `alt` text (`"Book Cover - {title} by {author}"`) instead of empty or filename-derived alt attributes.

**Stack**: React 19, TypeScript, Vite, Tailwind CSS v4.

## Running locally

```bash
npm install
npm run dev
```

`npm run build` type-checks with `tsc -b` before bundling; `npm run lint` runs ESLint (`typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`).
