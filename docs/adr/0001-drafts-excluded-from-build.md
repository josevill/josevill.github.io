# Drafts excluded from production builds

Draft Posts must not be reachable on the live site. We omit them from `astro build` entirely (no static HTML) instead of generating pages and only hiding them from the index/RSS. That way a guessed or leaked URL cannot serve WIP content when `dist/` is deployed to GitHub Pages. Drafts remain readable in `astro dev` for local preview.
