"use client";

import type { BlogPost } from "@/mockup/blog";

const STORAGE_KEY = "cms_blog_posts_v1";
const AUTH_KEY = "admin_auth_v1";

export type BlogFormPost = Omit<BlogPost, "publishedAt" | "tags"> & {
  publishedAt: string;
  tags: string | string[];
};

export const blogStore = {
  getAll(): BlogPost[] {
    if (typeof window === "undefined") return [];
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const data = JSON.parse(raw) as BlogPost[];
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  },
  saveAll(posts: BlogPost[]) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  },
  upsert(post: BlogPost) {
    const all = this.getAll();
    const idx = all.findIndex((p) => p.slug === post.slug);
    if (idx >= 0) {
      all[idx] = post;
    } else {
      all.unshift(post);
    }
    this.saveAll(all);
  },
  remove(slug: string) {
    const all = this.getAll().filter((p) => p.slug !== slug);
    this.saveAll(all);
  },
  mergeWithDefaults(defaults: BlogPost[]): BlogPost[] {
    const custom = this.getAll();
    const mergedMap = new Map<string, BlogPost>();
    for (const p of defaults) mergedMap.set(p.slug, p);
    for (const p of custom) mergedMap.set(p.slug, p);
    return Array.from(mergedMap.values());
  },
};

export const adminAuth = {
  signIn(email: string, password: string): boolean {
    const envEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@example.com";
    const envPass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";
    const ok = email === envEmail && password === envPass;
    if (ok && typeof window !== "undefined") {
      localStorage.setItem(AUTH_KEY, JSON.stringify({ email, at: Date.now() }));
    }
    return ok;
  },
  signOut() {
    if (typeof window === "undefined") return;
    localStorage.removeItem(AUTH_KEY);
  },
  isSignedIn(): boolean {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem(AUTH_KEY);
  },
};
