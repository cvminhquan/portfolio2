"use client";

import { adminAuth, blogStore } from "@/lib/blogStore";
import type { BlogPost } from "@/mockup/blog";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const emptyForm: BlogPost = {
  slug: "",
  title: "",
  excerpt: "",
  content: "",
  publishedAt: new Date().toISOString(),
  tags: [],
};

export default function AdminDashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [form, setForm] = useState<BlogPost>(emptyForm);
  const [editing, setEditing] = useState(false);
  const isAuthed = useMemo(() => adminAuth.isSignedIn(), []);

  useEffect(() => {
    if (!adminAuth.isSignedIn()) {
      router.replace("/admin/login");
      return;
    }
    setPosts(blogStore.getAll());
  }, [router]);

  const handleChange = (field: keyof BlogPost, value: string) => {
    if (field === "tags") {
      setForm((f) => ({ ...f, tags: value.split(",").map((t) => t.trim()).filter(Boolean) }));
    } else if (field === "publishedAt") {
      setForm((f) => ({ ...f, publishedAt: value }));
    } else {
      setForm((f) => ({ ...f, [field]: value } as BlogPost));
    }
  };

  const handleSave = () => {
    if (!form.slug || !form.title) return;
    blogStore.upsert(form);
    setPosts(blogStore.getAll());
    setForm(emptyForm);
    setEditing(false);
  };

  const handleEdit = (p: BlogPost) => {
    setForm(p);
    setEditing(true);
  };

  const handleDelete = (slug: string) => {
    blogStore.remove(slug);
    setPosts(blogStore.getAll());
  };

  const handleSignOut = () => {
    adminAuth.signOut();
    router.replace("/admin/login");
  };

  if (!isAuthed) return null;

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Blog CMS</h1>
        <button
          onClick={handleSignOut}
          className="rounded-lg border border-white/15 px-4 py-2 hover:border-blue-500 transition-colors"
        >
          Đăng xuất
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
          <h2 className="text-lg font-semibold mb-4">{editing ? "Sửa bài" : "Tạo bài mới"}</h2>
          <div className="space-y-3">
            <label className="block text-sm">
              <span className="mb-1 block text-gray-300">Slug</span>
              <input
                value={form.slug}
                onChange={(e) => handleChange("slug", e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
                placeholder="my-post-slug"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-gray-300">Tiêu đề</span>
              <input
                value={form.title}
                onChange={(e) => handleChange("title", e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-gray-300">Tóm tắt</span>
              <textarea
                value={form.excerpt}
                onChange={(e) => handleChange("excerpt", e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
                rows={3}
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-gray-300">Nội dung (Markdown)</span>
              <textarea
                value={form.content}
                onChange={(e) => handleChange("content", e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
                rows={10}
                placeholder={"```ts\nconsole.log('hello')\n```"}
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-gray-300">Tags (phân cách bởi dấu phẩy)</span>
              <input
                value={Array.isArray(form.tags) ? form.tags.join(", ") : ""}
                onChange={(e) => handleChange("tags", e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
                placeholder="react, nextjs"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-gray-300">Ngày xuất bản (ISO)</span>
              <input
                value={form.publishedAt}
                onChange={(e) => handleChange("publishedAt", e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
                placeholder={new Date().toISOString()}
              />
            </label>
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="rounded-lg border border-white/15 px-4 py-2 hover:border-blue-500 transition-colors"
              >
                {editing ? "Lưu" : "Tạo"}
              </button>
              {editing ? (
                <button
                  onClick={() => {
                    setForm(emptyForm);
                    setEditing(false);
                  }}
                  className="rounded-lg border border-white/15 px-4 py-2 hover:border-blue-500 transition-colors"
                >
                  Hủy
                </button>
              ) : null}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
          <h2 className="text-lg font-semibold mb-4">Danh sách bài viết</h2>
          <ul className="space-y-3">
            {posts.map((p) => (
              <li key={p.slug} className="flex items-center justify-between gap-3 rounded-lg border border-white/10 px-3 py-2">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium">{p.title}</div>
                  <div className="text-xs text-gray-400">/{p.slug}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleEdit(p)} className="text-sm rounded-md border border-white/15 px-2 py-1 hover:border-blue-500">Sửa</button>
                  <button onClick={() => handleDelete(p.slug)} className="text-sm rounded-md border border-white/15 px-2 py-1 hover:border-red-500">Xóa</button>
                </div>
              </li>
            ))}
            {posts.length === 0 ? (
              <li className="text-sm text-gray-400">Chưa có bài viết nào</li>
            ) : null}
          </ul>
        </div>
      </div>
    </section>
  );
}
