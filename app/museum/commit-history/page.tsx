import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";

const inscriptions = [
  {
    year: "2019",
    hash: "7ea9201",
    message: "fix",
    reading: "A rare surviving fragment from the pre-prompt era. Likely produced under deadline pressure.",
  },
  {
    year: "2021",
    hash: "84fd112",
    message: "fix actual issue",
    reading: "Purpose remains contested among historians, though the second adjective suggests contact with reality.",
  },
  {
    year: "2023",
    hash: "ca20d44",
    message: "please work",
    reading: "An unusually direct appeal to the deployment environment.",
  },
  {
    year: "2024",
    hash: "1b03aef",
    message: "revert previous calm decision",
    reading: "Documents the collapse of an earlier design philosophy.",
  },
  {
    year: "2025",
    hash: "ae772f0",
    message: "final final",
    reading: "A ceremonial declaration observed throughout late-stage release periods.",
  },
];

export default function CommitHistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Commit History Wing"
        title="An inscription gallery devoted to the compressed emotional record of software delivery."
        description="Commit messages are displayed here as textual artifacts: terse, revealing, and often written under conditions not conducive to literary excellence."
        aside="Unlike institutional press releases, commit history preserves uncertainty in its original form."
      />
      <Container className="grid gap-8 pb-16 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
            Commit History Gallery
          </p>
        </div>
        <div className="museum-panel p-8">
          <div className="space-y-4 border-l border-border pl-6">
            {inscriptions.map((entry) => (
              <article
                key={entry.hash}
                className="grid gap-3 rounded-[1.5rem] border border-border bg-background/70 p-5 md:grid-cols-[6rem_8rem_minmax(0,1fr)]"
              >
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                  {entry.year}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                  {entry.hash}
                </p>
                <div>
                  <p className="font-mono text-base">{entry.message}</p>
                  <p className="mt-2 text-muted">{entry.reading}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
