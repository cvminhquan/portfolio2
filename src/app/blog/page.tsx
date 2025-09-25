'use client';
import { blogStore } from "@/lib/blogStore";
import { blogPosts } from "@/mockup/blog";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState(() =>
    [...blogPosts].sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  );

  useEffect(() => {
    const merged = blogStore
      .mergeWithDefaults(blogPosts)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    setPosts(merged);
  }, []);

  return (
    <section>
      <ul className="grid gap-4 md:gap-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={post.externalUrl ? post.externalUrl : `/blog/${post.slug}`}
              className="group block rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors"
              {...(post.externalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 text-xs md:text-sm text-gray-400">
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("vi-VN")}
                  </time>
                  <span>•</span>
                  <span className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                </div>
                <h2 className="mt-3 text-lg md:text-2xl font-semibold tracking-tight group-hover:text-white flex items-center gap-2">
                  <span>{post.title}</span>
                  {post.externalUrl ? (
                    <span aria-label="External link" className="text-gray-400 group-hover:text-gray-300">↗</span>
                  ) : null}
                </h2>
                <p className="mt-2 text-sm md:text-base text-gray-400">
                  {post.excerpt}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-blue-400">
                  <span>Đọc thêm</span>
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
