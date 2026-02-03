export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string; // ISO string
  tags: string[];
  externalUrl?: string;
  coverImage?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "khi-ban-truy-cap-mot-trang-web-dieu-gi-xay-ra",
    title: "Khi bạn truy cập một trang web thì điều gì xảy ra sau đó?",
    excerpt:
      "Tổng quan các bước từ DNS, TCP handshake, HTTP request/response cho đến khi trình duyệt render.",
    content: `
<h2>Introduction</h2>
<p>Khi bạn gõ một địa chỉ vào trình duyệt và nhấn Enter, rất nhiều điều diễn ra trong vài mili-giây. Đằng sau một hành động đơn giản là hàng loạt bước phức tạp trong mạng và trình duyệt.</p>

<h2>Body</h2>
<ol>
  <li><strong>DNS Lookup</strong>: Trình duyệt tìm IP tương ứng với tên miền bằng DNS.</li>
  <li><strong>TCP Handshake</strong>: Trình duyệt và server thiết lập kết nối 3 bước.</li>
  <li><strong>TLS Handshake</strong>: Nếu HTTPS, trao đổi certificate để bảo mật.</li>
  <li><strong>HTTP Request</strong>: Trình duyệt gửi request (GET/POST).</li>
  <li><strong>Server Response</strong>: Thường gồm HTML, CSS, JS.</li>
  <li><strong>Rendering</strong>: Parse HTML, tải CSS/JS, dựng DOM + CSSOM → Render tree.</li>
  <li><strong>Repaint & Reflow</strong>: Cuối cùng nội dung được hiển thị.</li>
</ol>

<h2>Conclusion</h2>
<p>Một cú click đơn giản nhưng ẩn sau là cả chuỗi hoạt động phức tạp. Hiểu rõ giúp lập trình viên tối ưu website tốt hơn.</p>
    `,
    publishedAt: "2024-07-25T08:07:00.000Z",
    tags: ["internet", "dns", "http", "tcp"],
    externalUrl:
      "https://viblo.asia/p/khi-ban-truy-cap-mot-trang-web-thi-dieu-gi-xay-ra-sau-do-oK9VyZMO4QR",
  },
  {
    slug: "react-performance-checklist-2025",
    title: "React Performance Checklist 2025",
    excerpt:
      "Các kỹ thuật tối ưu hiệu năng React/NextJS thực tế: memo hóa, tách code, virtualization và đo lường.",
    content: `
<h2>Introduction</h2>
<p>Hiệu năng là yếu tố quyết định trải nghiệm người dùng. Một app React có thể render nhanh hơn nhiều lần nếu áp dụng đúng kỹ thuật.</p>

<h2>Body</h2>
<ul>
  <li><strong>Đo lường trước khi tối ưu</strong>: Dùng React Profiler, Lighthouse, Web Vitals để tìm điểm nghẽn.</li>
  <li><strong>Memoization</strong>: <code>React.memo</code>, <code>useMemo</code>, <code>useCallback</code> giúp tránh render thừa.</li>
  <li><strong>Code Splitting</strong>: Dùng dynamic import và lazy loading.</li>
  <li><strong>Virtualization</strong>: Với list lớn, dùng react-window hoặc react-virtualized.</li>
  <li><strong>Lazy load</strong>: Chỉ tải image/component khi cần.</li>
  <li><strong>Monitoring</strong>: Tích hợp analytics để theo dõi sau deploy.</li>
</ul>

<h2>Conclusion</h2>
<p>Tối ưu hiệu năng là quá trình lặp lại: đo lường → tối ưu → giám sát.</p>
    `,
    publishedAt: "2025-08-12T09:00:00.000Z",
    tags: ["react", "performance", "nextjs"],
  },
  {
    slug: "tailwind-ui-patterns",
    title: "Tailwind UI Patterns mình hay dùng",
    excerpt:
      "Tập hợp các pattern UI thường gặp với Tailwind: card, list, skeleton, badge, button.",
    content: `
<h2>Introduction</h2>
<p>Tailwind CSS không chỉ là utility-first mà còn cho phép xây dựng nhanh các UI pattern phổ biến, giúp code gọn và dễ tái sử dụng.</p>

<h2>Body</h2>
<ul>
  <li><strong>Card</strong>: Dùng shadow, rounded-lg, padding để tạo thẻ đẹp.</li>
  <li><strong>Skeleton loading</strong>: Gradient shimmer cho UX mượt khi chờ data.</li>
  <li><strong>Badge & Tag</strong>: Thêm sắc thái cho trạng thái success, warning, error.</li>
  <li><strong>Button variants</strong>: Quản lý size, color bằng <code>clsx</code> hoặc <code>tailwind-variants</code>.</li>
  <li><strong>Responsive grid/list</strong>: Dùng <code>grid-cols-</code> và <code>gap-</code>.</li>
</ul>

<h2>Conclusion</h2>
<p>Chuẩn hoá pattern giúp tiết kiệm thời gian và tăng tính nhất quán UI.</p>
    `,
    publishedAt: "2025-07-01T10:00:00.000Z",
    tags: ["tailwind", "ui", "css"],
  },
  {
    slug: "nextjs-app-router-seo-basics",
    title: "SEO cơ bản với NextJS App Router",
    excerpt:
      "Thiết lập metadata, sitemap, OpenGraph, robots và các lưu ý khi dùng App Router.",
    content: `
<h2>Introduction</h2>
<p>
Next.js App Router mang đến nhiều cải tiến về cách xây dựng ứng dụng React,
đặc biệt là khả năng tối ưu hóa cho SEO. Tuy nhiên, để website thực sự
“thân thiện với Google”, developer cần thiết lập đúng các yếu tố như
<em>metadata</em>, <em>sitemap</em>, <em>robots.txt</em>, và
<em>structured data</em>. Trong bài viết này, mình sẽ chia sẻ các bước
cơ bản để tối ưu SEO với App Router.
</p>

<h2>1. Metadata với App Router</h2>
<p>
Trong App Router, mỗi route là một React Server Component, và Next.js
hỗ trợ SEO thông qua <code>generateMetadata</code>.
</p>

<pre><code class="language-ts">
// app/blog/[slug]/page.tsx
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise&lt;Metadata&gt; {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: \`https://yourdomain.com/blog/\${params.slug}\`,
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}
</code></pre>

<p>
👉 Mỗi bài viết hoặc trang nên có <code>title</code>, <code>description</code>,
Open Graph, Twitter Card riêng biệt để tối ưu chia sẻ trên social và kết quả tìm kiếm.
</p>

<h2>2. Sitemap động</h2>
<p>
Sitemap giúp Google hiểu cấu trúc website. App Router có API route
<code>/app/sitemap.ts</code> để xuất ra sitemap.xml:
</p>

<pre><code class="language-ts">
// app/sitemap.ts
import { MetadataRoute } from "next";

export default async function sitemap(): Promise&lt;MetadataRoute.Sitemap&gt; {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    url: \`https://yourdomain.com/blog/\${post.slug}\`,
    lastModified: post.updatedAt,
  }));
}
</code></pre>

<p>
👉 Với dự án có CMS (WordPress, Strapi, Sanity…), bạn có thể generate sitemap động từ database.
</p>

<h2>3. Robots.txt</h2>
<p>
robots.txt giúp điều hướng crawler. Ví dụ, chặn staging nhưng cho phép production:
</p>

<pre><code class="language-txt">
# public/robots.txt (production)
User-agent: *
Allow: /

# public/robots.txt (staging)
User-agent: *
Disallow: /
</code></pre>

<p>👉 Đừng quên deploy đúng file cho từng môi trường để tránh bị index nhầm staging site.</p>

<h2>4. Structured Data (Schema Markup)</h2>
<p>
Structured data giúp Google hiển thị rich snippets (FAQ, Article, Product…). 
Trong App Router, bạn có thể chèn JSON-LD:
</p>

<pre><code class="language-tsx">
&lt;script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: { "@type": "Person", name: "Chau Vu Minh Quan" },
    }),
  }}
/&gt;
</code></pre>

<p>👉 Với blog, Article schema rất hữu ích để cải thiện CTR trên Google.</p>

<h2>5. Core Web Vitals</h2>
<p>
Ngoài SEO “on-page”, hiệu năng website cũng ảnh hưởng trực tiếp đến ranking.
Một số best practices:
</p>

<ul>
  <li>Sử dụng <code>next/image</code> để tối ưu ảnh.</li>
  <li>Code splitting với <code>dynamic import()</code>.</li>
  <li>Prefetch route bằng <code>&lt;Link prefetch&gt;</code>.</li>
  <li>Theo dõi Lighthouse, PageSpeed Insights và Web Vitals.</li>
</ul>

<h2>Conclusion</h2>
<p>
App Router trong Next.js cung cấp nhiều công cụ mạnh mẽ để tối ưu SEO,
từ metadata, sitemap, robots.txt, structured data cho đến hiệu năng. 
SEO không phải chỉ là thêm vài thẻ meta, mà là một quá trình tổng thể
để website của bạn vừa nhanh, vừa thân thiện với người dùng và dễ dàng 
được tìm thấy trên Google.
</p>
  `,
    publishedAt: "2025-06-10T08:30:00.000Z",
    tags: ["nextjs", "seo"],
    coverImage: "/images/blog/seo-nextjs.png",
  },
  {
    slug: "state-management-compare-2025",
    title: "So sánh các giải pháp state management 2025",
    excerpt:
      "Zustand, Redux Toolkit, Jotai, Recoil – dùng khi nào và ưu nhược điểm ra sao?",
    content: `
<h2>Introduction</h2>
<p>State management luôn là vấn đề then chốt. 2025 chứng kiến sự đa dạng của nhiều thư viện.</p>

<h2>Body</h2>
<ul>
  <li><strong>Redux Toolkit</strong>: Mạnh cho enterprise, ecosystem lớn, nhược điểm verbose.</li>
  <li><strong>Zustand</strong>: Nhẹ, API đơn giản, thích hợp dự án vừa và nhỏ.</li>
  <li><strong>Jotai</strong>: State theo atom, dễ compose, cộng đồng đang phát triển.</li>
  <li><strong>Recoil</strong>: Xử lý dependency state hay, nhưng chưa ổn định như Redux.</li>
</ul>

<h2>Conclusion</h2>
<p>Không có one-size-fits-all. Redux cho enterprise, Zustand cho sự đơn giản, Jotai/Recoil cho dự án thử nghiệm.</p>
    `,
    publishedAt: "2025-09-01T11:00:00.000Z",
    tags: ["react", "state", "zustand", "redux"],
  },
];

export const findPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};
