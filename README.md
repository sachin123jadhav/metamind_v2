# Metamind Systems website

Corporate website for Metamind Systems Pvt. Ltd., built with Next.js 14 (Pages Router) and exported as a static site.

## Requirements

- Node.js 18.17 or newer (tested on Node 24)
- npm (the lockfile is `package-lock.json`; do not add a `yarn.lock`)

## Commands

```bash
npm install     # install dependencies
npm run dev     # development server on http://localhost:3000
npm run build   # production build; static files are written to ./out
```

`next.config.mjs` sets `output: 'export'`, so the site is plain HTML/CSS/JS and cannot use API routes or server-side rendering. Upload the contents of `out/` to the web host.

## Environment

Create a `.env` file (it is git-ignored) with:

```
NEXT_PUBLIC_TOKEN=<token expected by sendEmailwithAttachment.php>
```

The contact and career forms post to `https://metamindsystem.com/sendEmailwithAttachment.php`. Anything prefixed `NEXT_PUBLIC_` is visible to every visitor, so the PHP endpoint must not rely on that token as a secret.

## Structure

| Path | Contents |
|---|---|
| `src/pages` | Routes: home, about, team, surveillance, cyber-security, software-as-a-product, workfusion, document-management-system, service, e-governance-solutions, digital-mapping, kumbh2025, geo-referencing, contact, career, 404 |
| `src/components` | Page sections, one folder per page |
| `src/common`, `src/layout` | Shared sections, headers, footers |
| `src/forms` | Contact and career forms |
| `src/data` | Static content (team, services) |
| `hooks`, `utils` | Animation and scroll hooks, helpers |
| `src/styles/index.scss` | Stylesheet entry (Bootstrap, modal-video, then the theme) |
| `public/assets/scss`, `public/assets/css` | Theme styles; `custom.css` holds Metamind-specific rules |

## Styles

The theme uses the Sass module system (`@use` / `@forward`). `custom.css` uses CSS nesting, which Sass 1.71 cannot compile; the project is built and tested with Sass 1.106 (`^1.106.1` in `package.json`). `next build` and `next dev` do not display Sass deprecation warnings; to see them run:

```bash
npx sass public/assets/scss/main.scss > /dev/null
```
