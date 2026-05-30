# Site rules for Claude

This is a Next.js 16 + Tailwind v4 site built by siteloop. The user has sent a prompt asking for a change. Follow these rules:

## Allowed

- Edit files in `app/` and any subdirectories you create under it.
- Edit `content.json` (the canonical place for site copy).
- Create new components in `components/` (create the folder if it doesn't exist).
- Use Tailwind utility classes for all styling. Edit `app/globals.css` for global tokens (colors, fonts) only.

## Forbidden

- Do not install new dependencies. Use only what's in `package.json`.
- Do not edit `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, or `.gitignore`.
- Do not import from `node_modules/...` paths directly; use the published package names.
- Do not add backend code, API routes, database calls, or external HTTP requests. This is a static site.

## House style

- Keep components small and presentational.
- Prefer `content.json` for any user-facing copy, so future edits are easy.
- Use semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`).
- Mobile-first: use Tailwind responsive prefixes (`md:`, `lg:`) for larger breakpoints.

## After editing

Once you're done, do not run `next build` or `npm install` — the siteloop worker handles that. Just exit when your changes are made.
