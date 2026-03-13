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
      <Container className="grid gap-6 pb-16 sm:grid-cols-2 xl:grid-cols-3">
        {exhibits.map((exhibit) => (
          <ExhibitCard key={exhibit.slug} exhibit={exhibit} />
        ))}
      </Container>
    </>
  );
}

