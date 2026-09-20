import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPublishedPosts } from "../lib/blog";
import { site } from "../data/resume";

export async function GET(context: APIContext) {
	const posts = await getPublishedPosts();
	// Point the channel link at the blog index; item links resolve against it.
	const blogSite = new URL("blog/", context.site!);
	const lastBuildDate = (posts[0]?.data.pubDate ?? new Date()).toUTCString();

	return rss({
		title: `${site.shortName} — Blog`,
		description: `Posts by ${site.shortName} — notes on cloud, architecture, and building in public.`,
		site: blogSite,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `${post.id}/`,
			categories: post.data.tags,
		})),
		customData: `<language>en-us</language><lastBuildDate>${lastBuildDate}</lastBuildDate>`,
	});
}
