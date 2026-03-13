import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { pageIntros } from "@/lib/site";

const intro = pageIntros.contact;
const expectations = [
  "Deadlines may slip when hidden complexity reveals itself in broad daylight.",
  "Requirements may change after someone important finally sees the staging environment.",
  "Debugging can become emotional when the defect appears to react to observation.",
  "Architecture discussions occasionally drift from implementation into philosophy.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        {...intro}
        aside="Correspondence is reviewed by a small human committee with strong opinions about whitespace and acceptable subject lines."
      />
      <PageSection title="Correspondence">
        <div className="space-y-4">
          <p>Commissions: commissions@artisinalcode.example</p>
          <p>Acquisitions: museum@artisinalcode.example</p>
          <p>General inquiries: frontdesk@artisinalcode.example</p>
          <p>
            For immediate reassurance, please refrain from emailing phrases such as
            &quot;small change&quot;, &quot;should be easy&quot;, or &quot;the AI already wrote most of
            it&quot;.
          </p>
        </div>
      </PageSection>

      <PageSection title="Inquiry Form Guidance">
        <div className="space-y-5">
          <p>
            Our contact form is intended for prospective patrons who understand that
            human-built software is an interpretive practice. Please describe your
            project, your timeline, and the degree to which your current system is
            being held together by heroics, browser tabs, or interpersonal memory.
          </p>
          <p>
            Concision is welcome, but useful details include technical constraints,
            institutional sensitivities, existing tooling, and whether the phrase
            &quot;we can probably reuse the old backend&quot; has already entered the room.
          </p>
        </div>
      </PageSection>

      <PageSection title="Before Writing">
        <div className="space-y-4">
          {expectations.map((expectation) => (
            <p key={expectation}>{expectation}</p>
          ))}
        </div>
      </PageSection>

      <PageSection title="Next Step">
        <p>
          Begin with the{" "}
          <Link
            href="/commission"
            className="underline decoration-border-strong underline-offset-4"
          >
            commissions office
          </Link>{" "}
          if you need actual software rather than emotional closure.
        </p>
      </PageSection>
    </>
  );
}
