"use client";

import { createClient } from '@/utils/supabase/client';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const supabase = createClient()
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError("Sai email hoặc mật khẩu");
      } else {
        router.replace("/admin");
      }
    } catch (err) {
      setError("Lỗi đăng nhập");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-2xl border border-white/10 p-6 bg-white/5"
      >
        <h1 className="text-2xl font-semibold text-center">Admin Login</h1>
        {error && (
          <div className="text-sm text-red-400" role="alert">
            {error}
          </div>
        )}
        <label className="block text-sm">
          <span className="mb-1 block text-gray-300">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
            required
            disabled={loading}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-gray-300">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
            required
            disabled={loading}
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-lg border border-white/15 px-4 py-2 hover:border-blue-500 transition-colors disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
        <p className="text-xs text-gray-400 text-center">
          Đăng nhập bằng tài khoản Supabase
        </p>
      </form>
    </section>
  );
}
