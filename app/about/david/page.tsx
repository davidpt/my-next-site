import AboutPage from "../page";

function BlogLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <article className="max-w-3xl mx-auto p-8 prose prose-lg">
      {children}
    </article>
  )
}

export default function DavidPage() {
  return (
    <AboutPage>
      <BlogLayout>
        <p>Vai po caralho seu filha da puta</p>
      </BlogLayout>
    </AboutPage>
  );
}
