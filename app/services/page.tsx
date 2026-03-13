import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { pageIntros } from "@/lib/site";

const services = [
  {
    name: "Bespoke Software",
    body: "Custom systems designed with measurable restraint, documented assumptions, and a healthy suspicion of fashionable abstraction layers.",
  },
  {
    name: "Legacy Conservation",
    body: "Stabilization of mature codebases whose business value now depends on one macro, two cron jobs, and an atmosphere of collective caution.",
  },
  {
    name: "Interface Curation",
    body: "Editorially composed product surfaces for organizations that prefer institutional dignity over conversion-optimized shouting.",
  },
];

const intro = pageIntros.services;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        {...intro}
        aside="Every engagement includes provenance records, selective overthinking, and at least one sentence beginning with 'we should keep this simple.'"
      />
      <PageSection title="Catalogue">
        <div className="grid gap-5">
          {services.map((service) => (
            <article key={service.name} className="rounded-[1.75rem] border border-border bg-surface p-6">
              <h2 className="text-2xl">{service.name}</h2>
              <p className="mt-3 text-muted">{service.body}</p>
            </article>
          ))}
        </div>
      </PageSection>
      <PageSection title="Method">
        <p>
          We favor static rendering, durable content models, and systems that can be
          maintained by future adults rather than only by the person who wrote the
          launch week hotfix at 2:14 a.m.
        </p>
      </PageSection>
    </>
  );
}

