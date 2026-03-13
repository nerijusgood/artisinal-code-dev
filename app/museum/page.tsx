import { ExhibitCard } from "@/components/museum/exhibit-card";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { getExhibits } from "@/lib/museum";
import { pageIntros } from "@/lib/site";

const intro = pageIntros.museum;

export default async function MuseumPage() {
  const exhibits = await getExhibits();

  return (
    <>
      <PageHero
        {...intro}
        aside="All artifacts are preserved in stable environmental conditions and away from product managers asking if they can just 'rewrite it cleanly with AI.'"
      />
      <Container className="grid gap-6 pb-16 sm:grid-cols-2 xl:grid-cols-3">
        {exhibits.map((exhibit) => (
          <ExhibitCard key={exhibit.slug} exhibit={exhibit} />
        ))}
      </Container>
    </>
  );
}

