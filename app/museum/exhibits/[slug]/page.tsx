import { notFound } from "next/navigation";
import { Placard } from "@/components/museum/placard";
import { CodeArtifact } from "@/components/ui/code-artifact";
import { Container } from "@/components/ui/container";
import { getExhibitBySlug, getExhibitSlugs } from "@/lib/museum";
import { highlightCode } from "@/lib/shiki";

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

  const highlighted = await highlightCode(exhibit.artifact, exhibit.artifactLanguage);

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
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="museum-panel p-5">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
              Curator Note
            </p>
            <p className="mt-3 text-muted">{exhibit.curatorNote}</p>
          </div>
          <div className="museum-panel p-5">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
              Origin Story
            </p>
            <p className="mt-3 text-muted">{exhibit.originStory}</p>
          </div>
        </div>
        <div className="mt-10">
          <CodeArtifact
            label="Artifact snippet"
            filename={exhibit.artifactFilename}
            highlighted={highlighted}
            showLineNumbers={exhibit.artifactLineNumbers}
          />
        </div>
        {exhibit.warningLabel ? (
          <div className="legacy-warning mt-8 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
              Warning Label
            </p>
            <p className="mt-3 text-muted">{exhibit.warningLabel}</p>
          </div>
        ) : null}
        <div className="mt-10 [&_h1]:hidden">{exhibit.content}</div>
      </article>
    </Container>
  );
}
