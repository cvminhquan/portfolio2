"use client";

import { adminAuth } from "@/lib/blogStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = adminAuth.signIn(email, password);
    if (ok) {
      router.replace("/admin");
    } else {
      setError("Sai email hoặc mật khẩu");
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
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-lg border border-white/15 px-4 py-2 hover:border-blue-500 transition-colors"
        >
          Đăng nhập
        </button>
        <p className="text-xs text-gray-400 text-center">
          Dùng biến môi trường NEXT_PUBLIC_ADMIN_EMAIL và NEXT_PUBLIC_ADMIN_PASSWORD
        </p>
      </form>
    </section>
  );
}
