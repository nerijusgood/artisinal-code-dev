import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { getExhibits } from "@/lib/museum";

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
            className="rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow)]"
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
        <div className="grid gap-5 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
            Recent Acquisitions
          </p>
          <div className="grid gap-4">
            {exhibits.slice(0, 3).map((exhibit) => (
              <Link
                key={exhibit.slug}
                href={`/museum/exhibits/${exhibit.slug}`}
                className="rounded-[1.75rem] border border-border bg-surface p-5"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                  {exhibit.year} / {exhibit.developer}
                </p>
                <h3 className="mt-2 text-2xl">{exhibit.title}</h3>
                <p className="mt-2 text-muted">{exhibit.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
