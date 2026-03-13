import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { pageIntros } from "@/lib/site";

const intro = pageIntros.about;
const traits = [
  {
    title: "Emotional debugging",
    description:
      "Human developers do not merely inspect logs. They form temporary personal relationships with failing services, become convinced the database is offended, and solve the issue moments after explaining it out loud.",
  },
  {
    title: "Architectural overengineering",
    description:
      "A practiced engineer can transform a straightforward requirement into a lasting monument of layers, adapters, and future-proofing for futures that never arrive.",
  },
  {
    title: "Accidental complexity",
    description:
      "Machine-generated systems tend to be tidy in a suspicious way. Human code acquires useful irregularities: historic flags, defensive wrappers, and one utility function that should not matter but absolutely does.",
  },
  {
    title: "Inconsistent naming conventions",
    description:
      "Real software carries traces of time. One module speaks in terse abbreviations, another in essay-length clarity, and a third still references a product name the company abandoned two rebrands ago.",
  },
  {
    title: "Authentic bugs",
    description:
      "Not synthetic benchmark defects, but the genuine article: subtle, contextual, and expressive of the exact pressure under which the feature was originally shipped.",
  },
];

const principles = [
  "Each system we build contains the subtle irregularities only a human developer can produce.",
  "We treat bug history as provenance rather than contamination.",
  "We believe a little asymmetry is often the visible mark of genuine judgment.",
];

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
            Artisinal Code exists to preserve the manual tradition. We still believe
            a system should bear evidence of the mind that made it: hesitations,
            convictions, course corrections, and the occasional private war with a
            build pipeline.
          </p>
          <p>
            Our studio builds contemporary software with historic methods. No
            probabilistic enthusiasm, no mass-produced application slurry, just
            deliberate implementation by people capable of making the wrong decision
            for deeply defensible reasons.
          </p>
        </div>
      </PageSection>

      <PageSection title="Human Qualities">
        <div className="grid gap-5">
          {traits.map((trait) => (
            <article
              key={trait.title}
              className="rounded-[1.75rem] border border-border bg-surface p-6"
            >
              <h2 className="text-2xl">{trait.title}</h2>
              <p className="mt-3 text-muted">{trait.description}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection title="Studio Position">
        <div className="space-y-5">
          {principles.map((principle) => (
            <p key={principle}>{principle}</p>
          ))}
          <p>
            Where others promise frictionless automation, we offer attentive manual
            production. The result is software with grain, character, and the faint
            but unmistakable signature of someone who once lost an afternoon to a
            missing environment variable.
          </p>
        </div>
      </PageSection>
    </>
  );
}
