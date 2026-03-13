import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: string;
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <Container className="grid gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end lg:py-24">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      {aside ? (
        <div className="border-l border-border pl-6">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
            Curatorial Note
          </p>
          <p className="mt-3 text-sm leading-7 text-muted">{aside}</p>
        </div>
      ) : null}
    </Container>
  );
}

