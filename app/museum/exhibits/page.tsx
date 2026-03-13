import { ExhibitCard } from "@/components/museum/exhibit-card";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { getExhibits } from "@/lib/museum";

export default async function ExhibitsPage() {
  const exhibits = await getExhibits();

  return (
    <>
      <PageHero
        eyebrow="Exhibitions"
        title="Curated artifacts from the late manual period of software production."
        description="Each record preserves a distinct human programming behavior: hesitation, improvisation, ritual, and the stubborn refusal to rename something once it shipped."
        aside="Objects are catalogued with developer attribution where possible. In some cases, the author remains unknown but clearly stressed."
      />
      <Container className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="museum-panel p-5">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
            Permanent Collection
          </p>
          <p className="mt-3 text-muted">
            Canonical objects from the late manual period.
          </p>
        </div>
        <div className="museum-panel p-5">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
            Recently Recovered
          </p>
          <p className="mt-3 text-muted">
            Likely produced under deadline pressure and only now suitable for display.
          </p>
        </div>
        <div className="legacy-warning p-5">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
            Access Notice
          </p>
          <p className="mt-3 text-muted">
            Some snippets remain operationally significant. Observe respectfully.
          </p>
        </div>
      </Container>
      <Container className="grid gap-6 pb-16 sm:grid-cols-2 xl:grid-cols-3">
        {exhibits.map((exhibit) => (
          <ExhibitCard key={exhibit.slug} exhibit={exhibit} />
        ))}
      </Container>
    </>
  );
}
