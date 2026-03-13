import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { pageIntros } from "@/lib/site";

const projects = [
  {
    title: "Municipal Workflow Reliquary",
    note: "A civic platform restored from seven inherited dashboards into one calm internal system with documented rituals and fewer accidental permissions.",
  },
  {
    title: "Luxury Inventory Registry",
    note: "A commerce back office rebuilt to feel like a catalogue raisonne, complete with impeccable typography and one deeply necessary CSV export.",
  },
  {
    title: "Research Archive Console",
    note: "An editorial repository for a cultural institution that insisted search should feel contemplative rather than aggressive.",
  },
];

const intro = pageIntros.work;

export default function WorkPage() {
  return (
    <>
      <PageHero
        {...intro}
        aside="Our case studies emphasize material honesty, system temperament, and the exact point at which an elegant abstraction became a liability."
      />
      <PageSection title="Portfolio">
        <div className="grid gap-5">
          {projects.map((project) => (
            <article key={project.title} className="grid gap-3 rounded-[1.75rem] border border-border bg-surface p-6">
              <h2 className="text-2xl">{project.title}</h2>
              <p className="text-muted">{project.note}</p>
            </article>
          ))}
        </div>
      </PageSection>
    </>
  );
}

