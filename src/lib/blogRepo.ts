import { createClient } from '@/utils/supabase/server'

export type BlogPostRow = {
	id: string
	slug: string
	title: string
	excerpt: string | null
	content_md: string | null
	content_html: string | null
	cover_image_url: string | null
	author_name: string | null
	author_avatar_url: string | null
	reading_time_minutes: number | null
	tags: string[] | null
	category: string | null
	language: string | null
	source: string | null
	status: 'draft' | 'published' | 'archived'
	published_at: string | null
	updated_at: string | null
	canonical_url: string | null
	seo_title: string | null
	seo_description: string | null
	seo_keywords: string[] | null
	meta_robots: string | null
	og_title: string | null
	og_description: string | null
	og_image_url: string | null
	twitter_card: string | null
	twitter_title: string | null
	twitter_description: string | null
	twitter_image_url: string | null
	structured_data: Record<string, unknown> | null
}

export const getPublishedPosts = async () => {
	const supabase = await createClient()
	const { data, error } = await supabase
		.from('blog_posts')
		.select(
			'id, slug, title, excerpt, cover_image_url, tags, category, published_at, updated_at, seo_title, seo_description'
		)
		.eq('status', 'published')
		.order('published_at', { ascending: false })
	if (error) return []
	return data as unknown as BlogPostRow[]
}

export const getPostBySlug = async (slug: string) => {
	const supabase = await createClient()
	const { data, error } = await supabase
		.from('blog_posts')
		.select('*')
		.eq('slug', slug)
		.limit(1)
		.maybeSingle()
	if (error || !data) return null
	return data as unknown as BlogPostRow
}
