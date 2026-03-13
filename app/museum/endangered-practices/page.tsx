import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";

const practices = [
  {
    title: "Manual breakpoint placement",
    body: "A once-common field technique involving intuition, timing, and the quiet shame of forgetting to remove one before demo day.",
  },
  {
    title: "Naming by lived context",
    body: "The practice of choosing variable names based on what the team had just been discussing, rather than what an outsider might understand three months later.",
  },
  {
    title: "Small, suspicious utility files",
    body: "Compact modules containing indispensable logic and no accompanying explanation beyond git blame and collective memory.",
  },
  {
    title: "Reading the documentation voluntarily",
    body: "Now rare in the wild, though still observed among senior engineers immediately after an avoidable incident.",
  },
];

export default function EndangeredPracticesPage() {
  return (
    <>
      <PageHero
        eyebrow="Endangered Practices"
        title="Traditional programming habits now at risk of displacement by infinite synthetic confidence."
        description="This gallery documents behaviors once learned through repetition, incident response, and informal apprenticeship."
        aside="Preservation efforts focus on techniques that require patience, judgment, and the capacity to doubt one's first abstraction."
      />
      <PageSection title="Field Guide">
        <div className="grid gap-5">
          {practices.map((practice) => (
            <article
              key={practice.title}
              className="rounded-[1.75rem] border border-border bg-surface p-6"
            >
              <h2 className="text-2xl">{practice.title}</h2>
              <p className="mt-3 text-muted">{practice.body}</p>
            </article>
          ))}
        </div>
      </PageSection>
      <PageSection title="Preservation Status">
        <p>
          The museum considers these practices critically endangered but still
          recoverable, provided engineers are allowed to struggle productively for at
          least a few minutes before a machine offers five identical solutions.
        </p>
      </PageSection>
    </>
  );
}

