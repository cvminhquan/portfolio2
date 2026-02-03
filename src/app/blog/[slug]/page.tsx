import { getPostBySlug, type BlogPostRow } from '@/lib/blogRepo';
import { renderBasicMarkdown } from "@/lib/markdown";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

export const dynamic = 'force-dynamic'

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: PageProps) {
	const { slug } = await params
	let post: BlogPostRow | null = null
	
	try {
		post = await getPostBySlug(slug)
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
	const { slug } = await params
	let post: BlogPostRow | null = null
	
	try {
		post = await getPostBySlug(slug)
	} catch (error) {
		console.error('Failed to fetch post for metadata:', error)
	}

	if (!post) return {};

	const title = post.seo_title || post.title;
	const description = post.seo_description || post.excerpt || "";
	const url = post.canonical_url || `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`;
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
