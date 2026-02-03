"use client";

import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type BlogPost = {
	id: string
	slug: string
	title: string
	excerpt: string | null
	content_md: string | null
	tags: string[] | null
	published_at: string | null
	status: 'draft' | 'published' | 'archived'
}

const emptyForm: Partial<BlogPost> = {
	slug: "",
	title: "",
	excerpt: "",
	content_md: "",
	tags: [],
	status: 'draft',
};

export default function AdminDashboard() {
	const router = useRouter();
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [form, setForm] = useState<Partial<BlogPost>>(emptyForm);
	const [editing, setEditing] = useState(false);
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const checkAuth = async () => {
			const supabase = createClient()
			const { data: { user } } = await supabase.auth.getUser()
			
			if (!user) {
				router.replace("/admin/login");
				return;
			}
			
			setUser(user);
			await loadPosts();
		};
		
		checkAuth();
	}, [router]);

	const loadPosts = async () => {
		try {
			const response = await fetch('/api/blog', { cache: 'no-store' });
			if (response.ok) {
				const data = await response.json();
				setPosts(data.posts || []);
			}
		} catch (error) {
			console.error('Failed to load posts:', error);
		}
	};

	const handleChange = (field: keyof BlogPost, value: string | string[]) => {
		setForm((f) => ({ ...f, [field]: value }));
	};

	const handleSave = async () => {
		if (!form.slug || !form.title) return;
		
		setLoading(true);
		try {
			const response = await fetch(`/api/blog/${form.slug}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			});
			
			if (response.ok) {
				await loadPosts();
				setForm(emptyForm);
				setEditing(false);
			}
		} catch (error) {
			console.error('Failed to save post:', error);
		} finally {
			setLoading(false);
		}
	};

	const handleEdit = (p: BlogPost) => {
		setForm(p);
		setEditing(true);
	};

	const handleSignOut = async () => {
		const supabase = createClient()
		await supabase.auth.signOut();
		router.replace("/admin/login");
	};

	if (!user) return null;

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
								value={form.slug || ""}
								onChange={(e) => handleChange("slug", e.target.value)}
								className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
								placeholder="my-post-slug"
								disabled={loading}
							/>
						</label>
						<label className="block text-sm">
							<span className="mb-1 block text-gray-300">Tiêu đề</span>
							<input
								value={form.title || ""}
								onChange={(e) => handleChange("title", e.target.value)}
								className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
								disabled={loading}
							/>
						</label>
						<label className="block text-sm">
							<span className="mb-1 block text-gray-300">Tóm tắt</span>
							<textarea
								value={form.excerpt || ""}
								onChange={(e) => handleChange("excerpt", e.target.value)}
								className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
								rows={3}
								disabled={loading}
							/>
						</label>
						<label className="block text-sm">
							<span className="mb-1 block text-gray-300">Nội dung (Markdown)</span>
							<textarea
								value={form.content_md || ""}
								onChange={(e) => handleChange("content_md", e.target.value)}
								className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
								rows={10}
								placeholder={"```ts\nconsole.log('hello')\n```"}
								disabled={loading}
							/>
						</label>
						<label className="block text-sm">
							<span className="mb-1 block text-gray-300">Tags (phân cách bởi dấu phẩy)</span>
							<input
								value={Array.isArray(form.tags) ? form.tags.join(", ") : ""}
								onChange={(e) => handleChange("tags", e.target.value.split(",").map(t => t.trim()).filter(Boolean))}
								className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
								placeholder="react, nextjs"
								disabled={loading}
							/>
						</label>
						<label className="block text-sm">
							<span className="mb-1 block text-gray-300">Trạng thái</span>
							<select
								value={form.status || 'draft'}
								onChange={(e) => handleChange("status", e.target.value as 'draft' | 'published' | 'archived')}
								className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
								disabled={loading}
							>
								<option value="draft">Draft</option>
								<option value="published">Published</option>
								<option value="archived">Archived</option>
							</select>
						</label>
						<div className="flex gap-3">
							<button
								onClick={handleSave}
								className="rounded-lg border border-white/15 px-4 py-2 hover:border-blue-500 transition-colors disabled:opacity-50"
								disabled={loading}
							>
								{loading ? "Đang lưu..." : editing ? "Lưu" : "Tạo"}
							</button>
							{editing ? (
								<button
									onClick={() => {
										setForm(emptyForm);
										setEditing(false);
									}}
									className="rounded-lg border border-white/15 px-4 py-2 hover:border-blue-500 transition-colors"
									disabled={loading}
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
									<div className="text-xs text-gray-400">/{p.slug} • {p.status}</div>
								</div>
								<div className="flex items-center gap-2">
									<button onClick={() => handleEdit(p)} className="text-sm rounded-md border border-white/15 px-2 py-1 hover:border-blue-500">Sửa</button>
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
