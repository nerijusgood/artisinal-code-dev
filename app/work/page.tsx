import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { pageIntros } from "@/lib/site";

const projects = [
  {
    title: "Custom CRM for a private institution",
    note: "Built through iterative existential refactoring, the system now records relationships, obligations, and quiet internal politics with a dignity the previous spreadsheet empire never achieved.",
    details:
      "The engagement involved three schema revisions, one respectful migration from 'misc_notes', and a careful acceptance that every CRM eventually becomes a study of human exception handling.",
  },
  {
    title: "React dashboard for an operational team",
    note: "Refined through multiple philosophical debates about state management, the dashboard was ultimately stabilized by using less of it than originally proposed.",
    details:
      "Curators note the presence of custom filters, reversible data views, and a surviving comment thread concerning whether derived state is a moral failing or merely a pattern.",
  },
  {
    title: "Editorial archive and research console",
    note: "A search system and archive interface designed for a cultural client that preferred contemplative retrieval over the usual feeling of being interrogated by enterprise software.",
    details:
      "The project is notable for its restrained UI, unusually literate metadata model, and one advanced search feature implemented only after the team admitted people really would use it.",
  },
  {
    title: "Small-batch internal platform",
    note: "Commissioned to replace a sequence of scripts described internally as 'temporary since 2018', the platform introduced process without disturbing the rituals staff had come to trust.",
    details:
      "Intervention was minimal but decisive: permissions made explicit, deploys made boring, and the historically important shell aliases preserved in documentation rather than governance.",
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
            <article
              key={project.title}
              className="grid gap-3 rounded-[1.75rem] border border-border bg-surface p-6"
            >
              <h2 className="text-2xl">{project.title}</h2>
              <p className="text-muted">{project.note}</p>
              <p className="text-muted">{project.details}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection title="Reading Room Notes">
        <div className="space-y-5">
          <p>
            We present completed work the way museums present objects: with context,
            materials, and evidence of the decisions that gave the thing its final
            form. Not every compromise is visible, but each one left a trace.
          </p>
          <p>
            Across projects, recurring themes emerge: cautious ambition, well-dressed
            admin tools, and interfaces refined by people who have personally suffered
            through dashboards that believed shouting was clarity.
          </p>
        </div>
      </PageSection>
    </>
  );
}
