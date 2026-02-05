export default function AboutPage({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="text-center">
      <h1>Test about page</h1>
      {children}
    </div>
  );
}
