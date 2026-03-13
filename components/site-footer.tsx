import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="grid gap-4 text-sm text-muted sm:grid-cols-2">
        <p>
          Artisinal Code is a fictional agency and heritage institution devoted to
          preserving hand-written software practices.
        </p>
        <p className="sm:text-right">
          Conservation priorities include graceful degradation, dubious abstractions,
          and messages beginning with &quot;quick fix&quot;.
        </p>
      </Container>
    </footer>
  );
}

