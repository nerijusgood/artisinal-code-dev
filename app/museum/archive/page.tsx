import { ArchiveGroup } from "@/components/museum/archive-group";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { getArchiveGroups } from "@/lib/museum";

export default async function ArchivePage() {
  const archive = await getArchiveGroups();

  return (
    <>
      <PageHero
        eyebrow="Archive"
        title="A digital archive arranged by date, taxonomy, and the visible shape of developer fatigue."
        description="The archive preserves manual software artifacts as documentary evidence rather than isolated jokes. Together they form a record of how engineers actually worked."
        aside="Researchers may browse by year to study periods of heightened refactoring optimism, or by tag to trace recurring rituals across disciplines."
      />
      <Container className="mb-8 grid gap-4 md:grid-cols-3">
        {archive.statuses.slice(0, 3).map(([status, items]) => (
          <div key={status} className="museum-panel p-5">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
              Preservation Status
            </p>
            <h2 className="mt-3 text-2xl">{status}</h2>
            <p className="mt-2 text-sm text-muted">{items.length} artifacts in this condition.</p>
          </div>
        ))}
      </Container>
      <Container className="grid gap-8 pb-16 lg:grid-cols-2">
        <div className="space-y-8">
          {archive.years.map(([year, items]) => (
            <ArchiveGroup key={year} title={year} items={items} />
          ))}
        </div>
        <div className="space-y-8">
          {archive.tags.map(([tag, items]) => (
            <ArchiveGroup key={tag} title={tag} items={items} />
          ))}
        </div>
      </Container>
    </>
  );
}
