import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { pageIntros } from "@/lib/site";

const services = [
  {
    name: "Handwritten Frontend Systems",
    body: "Interfaces composed by actual people, with state handled through experience, caution, and at least one principled disagreement about whether a component has become too clever.",
  },
  {
    name: "Emotionally Engineered Backend Services",
    body: "Server-side systems shaped through sustained exposure to queues, edge cases, and the sobering realization that every elegant data model eventually meets a CSV import.",
  },
  {
    name: "Ceremonial Refactoring",
    body: "A deliberate rite in which inherited logic is examined, renamed, extracted, and briefly made worse before emerging clearer, calmer, and only slightly more abstract.",
  },
  {
    name: "Legacy Code Conservation",
    body: "Stewardship for mature systems whose continued operation depends on convention, folklore, and one file nobody wants to touch during business hours.",
  },
];

const practices = [
  {
    title: "Frontend craft",
    description:
      "We produce calm, typographic interfaces rather than conversion sirens. Expect careful layouts, restrained motion, and a documented explanation for why that dropdown ended up stateful after all.",
  },
  {
    title: "Backend temperament",
    description:
      "Our backend work favors durability over theatrical scale claims. We build services that acknowledge the emotional realities of production: partial failures, strange payloads, and logs written by people trying to help their future selves.",
  },
  {
    title: "Refactoring liturgy",
    description:
      "Refactoring is offered as a high-touch service. We preserve behavior, remove ornamental indirection, and catalogue every moment when a variable named temp2 is revealed to be business critical.",
  },
  {
    title: "Conservation treatment",
    description:
      "For codebases of historical significance, we stabilize the system without erasing its cultural record. Useful scars remain visible. Dangerous ones are isolated behind tests and respectful comments.",
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
            <article
              key={service.name}
              className="rounded-[1.75rem] border border-border bg-surface p-6"
            >
              <h2 className="text-2xl">{service.name}</h2>
              <p className="mt-3 text-muted">{service.body}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection title="Practice Areas">
        <div className="grid gap-5">
          {practices.map((practice) => (
            <article
              key={practice.title}
              className="rounded-[1.75rem] border border-border bg-surface p-6"
            >
              <h2 className="text-2xl">{practice.title}</h2>
              <p className="mt-3 text-muted">{practice.description}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection title="Method">
        <div className="space-y-5">
          <p>
            We favor static rendering, durable content models, and systems that can
            be maintained by future adults rather than only by the person who wrote
            the launch week hotfix at 2:14 a.m.
          </p>
          <p>
            Every engagement is guided by a simple standard: the software should be
            understandable by competent engineers who were not present for the
            original philosophical dispute.
          </p>
        </div>
      </PageSection>
    </>
  );
}
