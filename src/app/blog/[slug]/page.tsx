import { renderBasicMarkdown } from "@/lib/markdown";
import { findPostBySlug } from "@/mockup/blog";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Script from "next/script";

type PageProps = {
  params: { slug: string };
};

export default function BlogDetailPage({ params }: PageProps) {
  const post = findPostBySlug(params.slug);
  if (!post) return notFound();

  if (post.externalUrl) {
    redirect(post.externalUrl);
  }

  return (
    <article className="max-w-none bg-[linear-gradient(123.51deg,rgba(215,237,237,0.1)_-61.8%,rgba(204,235,235,0.01))] p-8 rounded-[20px] border-t-[hsla(0,0%,100%,0.1)] border-t border-solid space-y-8">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{post.title}</h1>
        <div className="flex items-center gap-3 text-xs md:text-sm text-gray-500">
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
      </header>

      <div
        className="prose prose-invert max-w-none prose-headings:scroll-mt-20"
        dangerouslySetInnerHTML={{ __html: renderBasicMarkdown(post.content) }}
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
  const post = findPostBySlug(params.slug);
  if (!post) return {};

  const title = post.title;
  const description = post.excerpt || "";
  const url = post.externalUrl || `https://yourdomain.com/blog/${params.slug}`;
  const image = post.coverImage || "/default-og.png";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
