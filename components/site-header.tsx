import Link from "next/link";
import { navigation, siteName } from "@/lib/site";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur-md">
      <Container className="flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-md">
          <Link href="/" className="inline-flex items-baseline gap-3">
            <span className="font-display text-2xl tracking-tight">{siteName}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted">
              Est. Human Era
            </span>
          </Link>
        </div>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="border-b border-transparent pb-1 hover:border-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

