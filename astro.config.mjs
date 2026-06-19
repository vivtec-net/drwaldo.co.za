// @ts-check
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://vivtec-net.github.io",
	base: "/",
	trailingSlash: "always",
	markdown: {
		processor: satteri({
			features: { directive: true },
		}),
	},
	integrations: [mdx(), sitemap()],
});
