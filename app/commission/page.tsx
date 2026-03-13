import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { pageIntros } from "@/lib/site";

const intro = pageIntros.commission;
const packages = [
  {
    name: "Basic Handwritten Application",
    description:
      "A focused digital product shaped by senior human attention, suitable for small teams, institutions, and clients who need one good system rather than a platform mythology.",
    notes:
      "Includes practical architecture, tasteful constraints, and a realistic number of TODO comments left only where future work actually exists.",
  },
  {
    name: "Small Batch Architecture",
    description:
      "A more expansive engagement for organizations whose requirements are still moving but have begun doing so in recognizable patterns.",
    notes:
      "Appropriate when multiple user roles, integrations, or internal opinions must be reconciled without pretending this is merely a technical problem.",
  },
  {
    name: "Collector's Edition Enterprise System",
    description:
      "A high-ceremony commission for institutions requiring bespoke software with provenance, governance, and enough composure to survive committee review.",
    notes:
      "Recommended for clients prepared for dependency review, taxonomy debates, phased delivery, and the moment when a legacy export format becomes a constitutional issue.",
  },
];

export default function CommissionPage() {
  return (
    <>
      <PageHero
        {...intro}
        aside="Prospective patrons are encouraged to arrive with a brief, a budget, and the emotional resilience required for naming things in public."
      />
      <PageSection title="Process">
        <div className="space-y-5">
          <p>
            Commission inquiries begin with a curatorial interview covering scope,
            operational stakes, and whether your organization has been harmed by a
            dashboard that called itself intuitive.
          </p>
          <p>
            Selected projects move into an atelier phase: architecture, tone studies,
            content structure, and careful negotiation of which rough edges are signs
            of character versus future incident reports.
          </p>
        </div>
      </PageSection>

      <PageSection title="Service Tiers">
        <div className="grid gap-5">
          {packages.map((item) => (
            <article
              key={item.name}
              className="rounded-[1.75rem] border border-border bg-surface p-6"
            >
              <h2 className="text-2xl">{item.name}</h2>
              <p className="mt-3 text-muted">{item.description}</p>
              <p className="mt-3 text-muted">{item.notes}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection title="Client Realities">
        <div className="space-y-5">
          <p>
            Our handcrafted process does not eliminate the normal pains of software
            work. It simply renders them with more dignity. Requirements may evolve.
            Milestones may move after contact with reality. A simple integration may
            reveal a small legal history and an undocumented XML dialect.
          </p>
          <p>
            We consider these events part of the medium. They are managed through
            communication, judgment, and the occasional architecture discussion that
            begins as planning and ends as metaphysics.
          </p>
        </div>
      </PageSection>

      <PageSection title="Preferred Patrons">
        <p>
          We work best with institutions, studios, and technically literate teams who
          can distinguish between speed and haste.
        </p>
      </PageSection>
    </>
  );
}
