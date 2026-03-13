import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CodeArtifact } from "@/components/ui/code-artifact";
import { Container } from "@/components/ui/container";
import { getArtifactId, getExhibits } from "@/lib/museum";
import { highlightCode } from "@/lib/shiki";

const museumLinks = [
  {
    href: "/museum/exhibits",
    title: "Exhibits",
    description:
      "A curated gallery of preserved human programming artifacts, each presented with context, tags, and code remains.",
  },
  {
    href: "/museum/archive",
    title: "Archive",
    description:
      "Browse the collection by year and subject, from debugging rituals to requirement sprawl and component overgrowth.",
  },
  {
    href: "/museum/commit-history",
    title: "Commit History",
    description:
      "An inscription wing dedicated to terse revision messages written under changing emotional weather.",
  },
  {
    href: "/museum/endangered-practices",
    title: "Endangered Practices",
    description:
      "A field guide to vanishing human development habits once passed down through observation and mild suffering.",
  },
];

export default async function MuseumPage() {
  const exhibits = await getExhibits();
  const protectedLegacy = exhibits.filter((item) => item.tags.includes("legacy")).slice(0, 2);
  const protectedLegacyArtifacts = await Promise.all(
    protectedLegacy.map(async (exhibit) => ({
      slug: exhibit.slug,
      highlighted: await highlightCode(exhibit.artifact, exhibit.artifactLanguage),
    })),
  );

  return (
    <>
      <PageHero
        eyebrow="Museum of Human Programming"
        title="A heritage institution dedicated to preserving the fragile record of software written by people."
        description="The museum treats human code artifacts as cultural objects: flawed, revealing, historically situated, and impossible to reproduce without lived context."
        aside="All artifacts are preserved in stable environmental conditions and away from product managers asking if they can just 'rewrite it cleanly with AI.'"
      />
      <Container className="grid gap-6 pb-10 md:grid-cols-2">
        {museumLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="museum-panel p-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
              Museum Route
            </p>
            <h2 className="mt-4 text-3xl">{link.title}</h2>
            <p className="mt-3 text-muted">{link.description}</p>
          </Link>
        ))}
      </Container>
      <Container className="border-t border-border py-10">
        <div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <div className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
              Permanent Collection
            </p>
            <p className="text-sm text-muted">
              A rare surviving fragment from the pre-prompt era may still bear stress,
              uncertainty, and comments addressed to no one in particular.
            </p>
          </div>
          <div className="grid gap-4 xl:grid-cols-3">
            {exhibits.slice(0, 3).map((exhibit) => (
              <Link
                key={exhibit.slug}
                href={`/museum/exhibits/${exhibit.slug}`}
                className="museum-panel p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                    {getArtifactId(exhibit)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="status-chip">{exhibit.artifactLanguage}</span>
                    <span className="status-chip">{exhibit.status}</span>
                  </div>
                </div>
                <h3 className="mt-2 text-2xl">{exhibit.title}</h3>
                <p className="mt-2 text-muted">{exhibit.description}</p>
                <p className="mt-3 text-sm text-muted">{exhibit.curatorNote}</p>
                <div className="mt-4 grid gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-muted sm:grid-cols-2">
                  <span>{exhibit.developer}</span>
                  <span>{exhibit.classification}</span>
                  <span>{exhibit.year}</span>
                  <span>{exhibit.artifactFilename ?? "artifact path unrecorded"}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <Container className="border-t border-border py-10">
        <div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
              Protected Legacy Systems Wing
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {protectedLegacy.map((exhibit) => (
              <div key={exhibit.slug} className="legacy-warning p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                  Preservation Notice
                </p>
                <h3 className="mt-2 text-2xl">{exhibit.title}</h3>
                <p className="mt-2 text-muted">{exhibit.warningLabel ?? exhibit.status}</p>
                <div className="mt-4">
                  <CodeArtifact
                    label="Restricted snippet"
                    filename={exhibit.artifactFilename}
                    highlighted={
                      protectedLegacyArtifacts.find((item) => item.slug === exhibit.slug)!
                        .highlighted
                    }
                    showLineNumbers={exhibit.artifactLineNumbers}
                    renderMode={exhibit.artifactRenderMode}
                    metadata={[
                      { label: "Artifact ID", value: getArtifactId(exhibit) },
                      { label: "Year", value: exhibit.year },
                      { label: "Status", value: exhibit.status },
                      { label: "Developer", value: exhibit.developer },
                    ]}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
