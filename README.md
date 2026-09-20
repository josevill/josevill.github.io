# joseviloria.com

Pseudo online CV and blog for [José Viloria](https://joseviloria.com), built with [Astro](https://astro.build). The UI reads as a syntax-highlighted Markdown file (WebTUI + Catppuccin Mocha).

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Local dev server at `localhost:4321`        |
| `npm run check`   | Typecheck with `astro check`                |
| `npm run build`   | Typecheck, then build static site to `dist/` |
| `npm run preview` | Preview the production build locally        |

Requires Node.js `>=22.12.0`.

## Edit content

- **Resume** (sections, nav, social links): [`src/data/resume.ts`](src/data/resume.ts)
- **Profile photo**: [`src/assets/profile.jpg`](src/assets/profile.jpg)
- **Blog posts**: Markdown files in [`src/content/blog/`](src/content/blog/)
  - Required frontmatter: `title`, `description`, `pubDate`
  - Optional: `updatedDate`, `tags`, `draft: true`
  - Drafts preview in `astro dev` and are omitted from production builds / RSS

Section order on `/`: Interests → About → Experience → Education → Skills → latest posts.

## Deploy

GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on push to `main`. In the repo settings, set Pages source to **GitHub Actions**.

Domain / canonical URL is configured in [`astro.config.mjs`](astro.config.mjs) (`https://joseviloria.com`).

## Project notes

- Domain glossary: [`CONTEXT.md`](CONTEXT.md)
- Architecture decisions: [`docs/adr/`](docs/adr/)
