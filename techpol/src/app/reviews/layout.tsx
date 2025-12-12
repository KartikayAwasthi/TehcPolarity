export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen px-5 md:px-6 lg:px-8">
      
      {children}
    </div>
  );
}
