// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://joseviloria.com',
	integrations: [sitemap()],
	markdown: {
		shikiConfig: {
			// Match site chrome: WebTUI Catppuccin Mocha
			theme: 'catppuccin-mocha',
			// Keep long lines scrolling inside <pre> (blog CSS), not wrapped
			wrap: false,
			langAlias: {
				js: 'javascript',
				ts: 'typescript',
				// Note: a ```c++ fence info-string is parsed as language `c`, so a
				// `c++`→`cpp` alias never fires — authors should use ```cpp.
				golang: 'go',
				yml: 'yaml',
				sh: 'bash',
				shell: 'bash',
				wat: 'wasm',
			},
		},
	},
	vite: {
		ssr: {
			noExternal: ['@webtui/css', '@webtui/theme-catppuccin'],
		},
	},
});
