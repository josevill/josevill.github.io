import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export function isVisiblePost(post: BlogPost): boolean {
	return import.meta.env.DEV || !post.data.draft;
}

export async function getVisiblePosts(): Promise<BlogPost[]> {
	const posts = await getCollection("blog", isVisiblePost);
	return posts.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
}

/** Published posts only — used by RSS and any production-only surface. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
	const posts = await getCollection("blog", ({ data }) => !data.draft);
	return posts.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
}

export function slugifyTag(tag: string): string {
	return tag
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

export type BlogTag = {
	slug: string;
	label: string;
	posts: BlogPost[];
};

export async function getBlogTags(): Promise<BlogTag[]> {
	const posts = await getVisiblePosts();
	const bySlug = new Map<string, BlogTag>();

	for (const post of posts) {
		for (const tag of post.data.tags) {
			const slug = slugifyTag(tag);
			if (!slug) continue;

			const existing = bySlug.get(slug);
			if (existing) {
				existing.posts.push(post);
			} else {
				bySlug.set(slug, { slug, label: tag, posts: [post] });
			}
		}
	}

	return [...bySlug.values()].sort((a, b) =>
		a.label.localeCompare(b.label, undefined, { sensitivity: "base" }),
	);
}

export function formatPostDate(date: Date): string {
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC",
	});
}
