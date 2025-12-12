export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen px-3 md:px-4 lg:px-6">
      {children}
    </div>
  );
}
