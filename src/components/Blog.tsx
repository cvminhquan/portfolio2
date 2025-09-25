"use client";

import { SectionHeader } from "@/components/section-header";
import { blogStore } from "@/lib/blogStore";
import { blogPosts } from "@/mockup/blog";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blog = () => {
  const [latest, setLatest] = useState(
    [...blogPosts]
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 3)
  );

  useEffect(() => {
    const merged = blogStore
      .mergeWithDefaults(blogPosts)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 3);
    setLatest(merged);
  }, []);

  return (
    <section id="blog" className="py-10 md:py-20">
      <div>
        <SectionHeader title="Blog" subTitle="Bài viết mới nhất" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={post.externalUrl ? post.externalUrl : `/blog/${post.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors p-5 md:p-6"
              {...(post.externalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <div className="flex items-center gap-3 text-xs md:text-sm text-gray-400">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("vi-VN")}
                </time>
                <span>•</span>
                <span className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((t) => (
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
                {post.externalUrl ? (
                  <span aria-label="External link" className="text-gray-400 group-hover:text-gray-300">↗</span>
                ) : null}
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
