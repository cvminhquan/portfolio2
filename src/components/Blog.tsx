"use client";

import { SectionHeader } from "@/components/section-header";
import Link from "next/link";
import { useEffect, useState } from "react";

type BlogPost = {
	id: string
	slug: string
	title: string
	excerpt: string | null
	cover_image_url: string | null
	tags: string[] | null
	category: string | null
	published_at: string | null
	updated_at: string | null
	seo_title: string | null
	seo_description: string | null
}

const Blog = () => {
	const [latest, setLatest] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchLatest = async () => {
			try {
				const response = await fetch('/api/blog', { cache: 'no-store' });
				if (response.ok) {
					const data = await response.json();
					const posts = data.posts || [];
					setLatest(posts.slice(0, 3));
				}
			} catch (error) {
				console.error('Failed to fetch latest posts:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchLatest();
	}, []);

	if (loading) {
		return (
			<section id="blog" className="py-10 md:py-20">
				<div>
					<SectionHeader title="Blog" subTitle="Bài viết mới nhất" />
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
						{[1, 2, 3].map((i) => (
							<div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 animate-pulse">
								<div className="h-4 bg-white/10 rounded mb-2"></div>
								<div className="h-6 bg-white/10 rounded mb-3"></div>
								<div className="h-16 bg-white/10 rounded"></div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}

	return (
		<section id="blog" className="py-10 md:py-20">
			<div>
				<SectionHeader title="Blog" subTitle="Bài viết mới nhất" />

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
					{latest.map((post) => (
						<Link
							key={post.slug}
							href={`/blog/${post.slug}`}
							className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors p-5 md:p-6"
						>
							<div className="flex items-center gap-3 text-xs md:text-sm text-gray-400">
								{post.published_at ? (
									<time dateTime={post.published_at}>
										{new Date(post.published_at).toLocaleDateString("vi-VN")}
									</time>
								) : null}
								{post.tags && post.tags.length ? <span>•</span> : null}
								<span className="flex flex-wrap gap-2">
									{(post.tags || []).slice(0, 2).map((t) => (
										<span
											key={t}
											className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10"
										>
											{t}
										</span>
									))}
								</span>
							</div>
							<h3 className="mt-3 text-lg md:text-xl font-semibold tracking-tight group-hover:text-white flex items-center gap-2">
								<span>{post.title}</span>
							</h3>
							<p className="mt-2 text-sm md:text-base text-gray-400 line-clamp-3">
								{post.excerpt}
							</p>
							<div className="mt-4 inline-flex items-center gap-2 text-sm text-blue-400">
								<span>Đọc thêm</span>
								<span className="transition-transform group-hover:translate-x-0.5">→</span>
							</div>
						</Link>
					))}
				</div>

				<div className="mt-8 flex justify-center">
					<Link
						href="/blog"
						className="px-5 py-3 rounded-full border border-white/15 text-sm md:text-base hover:border-blue-500 transition-colors"
						aria-label="Xem tất cả bài viết"
					>
						Xem tất cả bài viết
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Blog;
