
export default function GamingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <div className="flex flex-col min-h-screen px-4 md:px-8 lg:px-48">
          {children}
        </div>
  );
}