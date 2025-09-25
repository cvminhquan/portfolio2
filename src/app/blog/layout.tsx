export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-8">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Blog</h1>
        <p className="text-sm md:text-base text-gray-400">
          Chia sẻ về React, NextJS, UI/UX, hiệu năng và best practices.
        </p>
      </header>
      {children}
    </div>
  );
}
