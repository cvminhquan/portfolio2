-- Schema và seed cho Supabase: instruments + blog_posts (kèm SEO)

-- EXTENSIONS (nếu chưa có)
create extension if not exists pgcrypto;

-- =====================
-- INSTRUMENTS
-- =====================
create table if not exists public.instruments (
  id bigint primary key generated always as identity,
  name text not null
);

alter table public.instruments enable row level security;

drop policy if exists "public can read instruments" on public.instruments;
create policy "public can read instruments"
on public.instruments
for select to anon
using (true);

insert into public.instruments (name) values ('violin'), ('viola'), ('cello')
on conflict do nothing;

-- =====================
-- BLOG_POSTS
-- =====================
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  content_md text,
  content_html text,
  cover_image_url text,
  author_name text,
  author_avatar_url text,
  reading_time_minutes smallint,
  tags text[] default '{}',
  category text,
  language text default 'vi',
  source text,

  status text not null default 'draft' check (status in ('draft','published','archived')),
  published_at timestamptz,
  updated_at timestamptz default now(),

  canonical_url text,

  seo_title text,
  seo_description text,
  seo_keywords text[] default '{}',
  meta_robots text default 'index,follow',

  og_title text,
  og_description text,
  og_image_url text,
  twitter_card text default 'summary_large_image',
  twitter_title text,
  twitter_description text,
  twitter_image_url text,

  structured_data jsonb default '{}'::jsonb
);

create index if not exists idx_blog_posts_slug on public.blog_posts (slug);
create index if not exists idx_blog_posts_status_published_at on public.blog_posts (status, published_at);
create index if not exists idx_blog_posts_tags_gin on public.blog_posts using gin (tags);

alter table public.blog_posts enable row level security;

drop policy if exists "public can read published blog posts" on public.blog_posts;
create policy "public can read published blog posts"
on public.blog_posts
for select
to anon
using (
  status = 'published'
  and (published_at is null or now() >= published_at)
);

drop policy if exists "authenticated can read all blog posts" on public.blog_posts;
create policy "authenticated can read all blog posts"
on public.blog_posts
for select
to authenticated
using (true);

drop policy if exists "authenticated can insert blog posts" on public.blog_posts;
create policy "authenticated can insert blog posts"
on public.blog_posts
for insert
to authenticated
with check (true);

drop policy if exists "authenticated can update blog posts" on public.blog_posts;
create policy "authenticated can update blog posts"
on public.blog_posts
for update
to authenticated
using (true)
with check (true);

insert into public.blog_posts (
  slug, title, excerpt, content_md, cover_image_url, author_name, reading_time_minutes,
  tags, category, language, status, published_at,
  canonical_url, seo_title, seo_description, seo_keywords, meta_robots,
  og_title, og_description, og_image_url,
  twitter_title, twitter_description, twitter_image_url,
  structured_data
) values (
  'hello-world-seo',
  'Hello World với SEO chuẩn',
  'Bài viết mẫu minh hoạ bảng blog với trường SEO.',
  '# Xin chào\nĐây là nội dung markdown mẫu.',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305',
  'Admin',
  3,
  array['nextjs','seo','supabase'],
  'tutorial',
  'vi',
  'published',
  now(),
  'https://example.com/blog/hello-world-seo',
  'Hello World - Bài viết mẫu chuẩn SEO',
  'Bài viết mẫu có meta description phục vụ SEO và social share.',
  array['nextjs','seo','blog'],
  'index,follow',
  'Hello World - OG Title',
  'Mô tả OG cho mạng xã hội.',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305',
  'Hello World - Twitter Title',
  'Mô tả Twitter Card.',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305',
  jsonb_build_object(
    '@context','https://schema.org',
    '@type','BlogPosting',
    'headline','Hello World với SEO chuẩn',
    'datePublished', to_char(now(),'YYYY-MM-DD"T"HH24:MI:SS"Z"'),
    'author', jsonb_build_object('@type','Person','name','Admin')
  )
)
on conflict (slug) do nothing;
