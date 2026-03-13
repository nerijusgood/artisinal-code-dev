import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { pageIntros } from "@/lib/site";

const intro = pageIntros.about;

export default function AboutPage() {
  return (
    <>
      <PageHero
        {...intro}
        aside="Founded by former engineers and accidental archivists, the institution documents software made before every prototype began with a prompt and a vague threat."
      />
      <PageSection title="Mission">
        <div className="space-y-5">
          <p>
            We maintain that software was once an artisanal discipline involving
            keyboard wear, highly specific editor preferences, and arguments about
            dependency weight measured in principle rather than kilobytes.
          </p>
          <p>
            Our mission is to conserve the evidence: stack traces pinned like field
            notes, config files with historic sediment, and interfaces refined by
            actual human indecision.
          </p>
        </div>
      </PageSection>
      <PageSection title="Collection Policy">
        <div className="space-y-5">
          <p>
            The museum accepts donations of meaningful artifacts, including hand-tuned
            regular expressions, shell scripts with oral histories, and bug reports
            whose reproduction steps read like personal memoir.
          </p>
        </div>
      </PageSection>
    </>
  );
}

