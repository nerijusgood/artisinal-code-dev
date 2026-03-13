import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type PageSectionProps = {
  title: string;
  children: ReactNode;
};

export function PageSection({ title, children }: PageSectionProps) {
  return (
    <section className="border-t border-border py-10 sm:py-12">
      <Container className="grid gap-6 lg:grid-cols-[14rem_minmax(0,1fr)]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
            {title}
          </p>
        </div>
        <div>{children}</div>
      </Container>
    </section>
  );
}

