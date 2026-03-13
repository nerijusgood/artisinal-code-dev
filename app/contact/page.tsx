import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { pageIntros } from "@/lib/site";

const intro = pageIntros.contact;

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
      <PageSection title="Next Step">
        <p>
          Begin with the <Link href="/commission" className="underline decoration-border-strong underline-offset-4">commissions office</Link> if you need actual software rather than emotional closure.
        </p>
      </PageSection>
    </>
  );
}

