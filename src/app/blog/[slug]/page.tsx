import { renderBasicMarkdown } from "@/lib/markdown";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

type PageProps = {
  params: { slug: string };
};

type BlogPost = {
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

export default async function BlogDetailPage({ params }: PageProps) {
	let post: BlogPost | null = null
	
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blog/${params.slug}`, {
			cache: 'no-store'
		})
		if (response.ok) {
			const data = await response.json()
			post = data.post
		}
	} catch (error) {
		console.error('Failed to fetch post:', error)
	}

	if (!post) return notFound();

	return (
		<article className="max-w-none bg-[linear-gradient(123.51deg,rgba(215,237,237,0.1)_-61.8%,rgba(204,235,235,0.01))] p-8 rounded-[20px] border-t-[hsla(0,0%,100%,0.1)] border-t border-solid space-y-8">
			<header className="mb-6">
				<h1 className="text-3xl md:text-4xl font-bold mb-2">{post.title}</h1>
				<div className="flex items-center gap-3 text-xs md:text-sm text-gray-500">
					{post.published_at ? (
						<time dateTime={post.published_at}>
							{new Date(post.published_at).toLocaleDateString("vi-VN")}
						</time>
					) : null}
					{post.tags && post.tags.length ? <span>•</span> : null}
					<span className="flex flex-wrap gap-2">
						{(post.tags || []).map((t) => (
							<span
								key={t}
								className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10"
							>
								{t}
							</span>
						))}
					</span>
				</div>
			</header>

			<div
				className="prose prose-invert max-w-none prose-headings:scroll-mt-20"
				dangerouslySetInnerHTML={{ __html: post.content_html || renderBasicMarkdown(post.content_md || '') }}
			/>
			<Script id="copy-code-handler" strategy="afterInteractive">
				{`
					(function(){
						if (window.__copyCodeBound) return; 
						window.__copyCodeBound = true;
						document.addEventListener('click', function(e){
							var t = e.target;
							if (!t) return;
							var el = t;
							if (el.dataset && el.dataset.copyCode){
								var code = t.dataset.copyCode;
								navigator.clipboard.writeText(code).then(function(){
									if (el.tagName === 'BUTTON') {
										var old = el.textContent; el.textContent = 'Copied';
										setTimeout(function(){ el.textContent = old || 'Copy'; }, 1200);
									}
								});
							}
						});
					})();
				`}
			</Script>
		</article>
	);
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	let post: BlogPost | null = null
	
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blog/${params.slug}`, {
			cache: 'no-store'
		})
		if (response.ok) {
			const data = await response.json()
			post = data.post
		}
	} catch (error) {
		console.error('Failed to fetch post for metadata:', error)
	}

	if (!post) return {};

	const title = post.seo_title || post.title;
	const description = post.seo_description || post.excerpt || "";
	const url = post.canonical_url || `https://yourdomain.com/blog/${params.slug}`;
	const image = post.og_image_url || post.cover_image_url || "/default-og.png";

	return {
		title,
		description,
		alternates: { canonical: url },
		openGraph: {
			title: post.og_title || title,
			description: post.og_description || description,
			url,
			type: "article",
			images: [image],
		},
		twitter: {
			card: (post.twitter_card as unknown as "summary_large_image" | "summary" | "player" | "app") || "summary_large_image",
			title: post.twitter_title || title,
			description: post.twitter_description || description,
			images: [image],
		},
	};
}
