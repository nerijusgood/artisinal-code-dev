import { notFound } from "next/navigation";
import { mdxComponents } from "@/components/museum/mdx-prose";
import { Container } from "@/components/ui/container";
import { getExhibitBySlug, getExhibitSlugs } from "@/lib/museum";

export async function generateStaticParams() {
  const slugs = await getExhibitSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

type ExhibitPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ExhibitPage({ params }: ExhibitPageProps) {
  const { slug } = await params;
  const exhibit = await getExhibitBySlug(slug);

  if (!exhibit) {
    notFound();
  }

  return (
    <Container className="grid gap-10 py-16 lg:grid-cols-[16rem_minmax(0,1fr)] lg:py-24">
      <aside className="space-y-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
            Accession Number
          </p>
          <p className="mt-2 text-lg">{exhibit.accessionNumber}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
            Year
          </p>
          <p className="mt-2 text-lg">{exhibit.year}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
            Discipline
          </p>
          <p className="mt-2 text-lg">{exhibit.discipline}</p>
        </div>
      </aside>
      <article className="rounded-[2rem] border border-border bg-surface p-8 shadow-[var(--shadow)] sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
          Museum Exhibit
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-5xl leading-tight">
          {exhibit.title}
        </h1>
        <p className="mt-5 max-w-3xl text-xl leading-8 text-muted">{exhibit.summary}</p>
        <div className="mt-10">
          {exhibit.content &&
            (await import("next-mdx-remote/rsc")).MDXRemote({
              source: "",
              components: mdxComponents,
            })}
          <div className="[&_h1]:hidden">{exhibit.content}</div>
        </div>
      </article>
    </Container>
  );
}

