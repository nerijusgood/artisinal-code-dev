import { notFound } from "next/navigation";
import { Placard } from "@/components/museum/placard";
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
    <Container className="grid gap-10 py-16 lg:grid-cols-[18rem_minmax(0,1fr)] lg:py-24">
      <Placard exhibit={exhibit} />
      <article className="rounded-[2rem] border border-border bg-surface p-8 shadow-[var(--shadow)] sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
          Preserved Artifact
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-5xl leading-tight">
          {exhibit.title}
        </h1>
        <p className="mt-5 max-w-3xl text-xl leading-8 text-muted">
          {exhibit.description}
        </p>
        <div className="mt-10 rounded-[1.75rem] border border-border bg-[#201711] px-5 py-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d8c5aa]">
            Artifact Snippet
          </p>
          <pre className="mt-4 overflow-x-auto font-mono text-sm leading-7 text-[#f5ecdc]">
            <code>{exhibit.artifact}</code>
          </pre>
        </div>
        <div className="mt-10 [&_h1]:hidden">{exhibit.content}</div>
      </article>
    </Container>
  );
}

