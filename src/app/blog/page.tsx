import Link from "next/link";
import { getPublishedPosts, type BlogPostRow } from '@/lib/blogRepo'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
	let posts: BlogPostRow[] = []
	
	try {
		posts = await getPublishedPosts()
	} catch (error) {
		console.error('Failed to fetch posts:', error)
	}

	return (
    <main className="mx-auto pb-28">
      <div className="py-16 sm:text-center">
        <h1 className="text-3xl md:text-5xl text-center font-bold mb-4">
          Blog
        </h1>
        <p className="text-sm md:text-base text-gray-400 text-center">
          Chia sẻ về React, NextJS, UI/UX, hiệu năng và best practices.
        </p>
      </div>
      <section className="space-y-8 md:space-y-16">
         <div className="relative sm:ml-[calc(2rem+1px)] sm:pb-12 md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-60rem))]">
          <div className="space-y-16">
            {posts.map((post) => (
              <article key={post.slug} className="group relative">
                <div
                  className="absolute -inset-y-2.5 -inset-x-4 dark:group-hover:bg-accent/40 group-hover:bg-accent sm:rounded-2xl md:-inset-y-4 md:-inset-x-6 group-hover:bg-gray-800 transition-colors"
                ></div>

                <svg
                  viewBox="0 0 9 9"
                  className="text-gray-400 absolute right-full top-2 mr-6 hidden h-[calc(0.5rem+1px)] w-[calc(0.5rem+1px)] overflow-visible sm:block md:mr-12"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></circle>
                </svg>

                <div className="relative">
                  <h2 className="pt-8 text-base font-semibold tracking-tight lg:pt-0 text-white group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.slug}`} className="block">
                      {post.title}
                    </Link>
                  </h2>

                  <div className="z-10 mt-2 mb-4 line-clamp-2 text-gray-400">
                    <p>{post.excerpt}</p>
                  </div>

                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm text-gray-500">
                      {post.published_at ? (
                        <time dateTime={post.published_at}>
                          {new Date(post.published_at).toLocaleDateString(
                            "vi-VN",
                            {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            }
                          )}
                        </time>
                      ) : null}
                    </dd>
                  </dl>
                </div>

                <Link
                  className="flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300"
                  title={post.title}
                  href={`/blog/${post.slug}`}
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 sm:rounded-2xl md:-inset-y-4 md:-inset-x-6"></span>
                  <span className="relative">
                    Đọc thêm<span className="sr-only">, {post.title}</span>
                  </span>
                  <svg
                    className="relative mt-px ml-2.5 overflow-visible text-blue-400"
                    width="3"
                    height="6"
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6"></path>
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
