import { getPublishedPosts } from '@/lib/blogRepo'
import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

const routes = [
	'',
	'/blog',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await getPublishedPosts()
	const staticUrls: MetadataRoute.Sitemap = routes.map((path) => ({
		url: `${BASE_URL}${path}`,
		lastModified: new Date().toISOString(),
	}))
	const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
		url: `${BASE_URL}/blog/${post.slug}`,
		lastModified: post.published_at || new Date().toISOString(),
	}))
	return [...staticUrls, ...blogUrls]
}
