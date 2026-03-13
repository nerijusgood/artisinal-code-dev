import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { pageIntros } from "@/lib/site";

const intro = pageIntros.commission;

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
      <PageSection title="Preferred Patrons">
        <p>
          We work best with institutions, studios, and technically literate teams who
          can distinguish between speed and haste.
        </p>
      </PageSection>
    </>
  );
}

