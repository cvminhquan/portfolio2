export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto md:px-6 py-10 md:py-16 space-y-8">
      {children}
    </div>
  );
}
