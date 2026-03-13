import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";

const inscriptions = [
  "`fix`",
  "`fix actual issue`",
  "`please work`",
  "`revert previous calm decision`",
  "`final final`",
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
      <PageSection title="Selected Inscriptions">
        <div className="grid gap-5">
          {inscriptions.map((inscription) => (
            <article
              key={inscription}
              className="rounded-[1.75rem] border border-border bg-surface p-6"
            >
              <p className="font-mono text-lg">{inscription}</p>
            </article>
          ))}
        </div>
      </PageSection>
      <PageSection title="Curatorial Reading">
        <div className="space-y-5">
          <p>
            The commit log offers one of the clearest windows into human programming.
            Naming starts aspirationally, degrades under pressure, then recovers just
            enough structure to satisfy posterity.
          </p>
          <p>
            Scholars of the field note recurring forms: vague repair, urgent
            correction, apologetic rollback, and the ceremonial declaration that the
            current attempt is definitely the final one.
          </p>
        </div>
      </PageSection>
    </>
  );
}

