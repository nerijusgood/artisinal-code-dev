import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getExhibits } from "@/lib/museum";

const features = [
  {
    title: "Handcrafted Delivery",
    description:
      "Software assembled by experienced humans using traditional tools such as judgment, regret, and shell history.",
  },
  {
    title: "Code Conservation",
    description:
      "Archival treatment for legacy systems whose undocumented quirks have become part of the institution itself.",
  },
  {
    title: "Exhibitions & Research",
    description:
      "Public programming dedicated to studying lint exceptions, premature abstractions, and ritualized deployment folklore.",
  },
];

export default async function HomePage() {
  const exhibits = await getExhibits();

  return (
    <>
      <Container className="grid gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:py-28">
        <div className="space-y-8">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
            Boutique Agency and Human Code Museum
          </p>
          <h1 className="text-balance max-w-4xl text-5xl leading-none sm:text-6xl lg:text-8xl">
            Preserving the endangered art of writing software by hand.
          </h1>
          <p className="max-w-2xl text-xl leading-8 text-muted">
            Artisinal Code produces bespoke software while maintaining a permanent
            collection of fragile programming artifacts from the pre-synthetic era.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/commission"
              className="rounded-full border border-foreground bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-[0.35em] text-background"
            >
              Commission Work
            </Link>
            <Link
              href="/museum"
              className="rounded-full border border-border-strong bg-surface-strong px-6 py-3 font-mono text-xs uppercase tracking-[0.35em] text-foreground"
            >
              Visit Museum
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow)]">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
            Current Exhibition Thesis
          </p>
          <p className="mt-4 text-xl leading-8">
            Human code remains recognizable by its subtle asymmetries: lovingly named
            helpers, impossible TODOs, and comments written after the bug was only
            spiritually understood.
          </p>
        </div>
      </Container>

      <section className="border-t border-border py-10 sm:py-14">
        <Container className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="space-y-3 rounded-[1.75rem] border border-border bg-surface p-6">
              <h2 className="text-2xl">{feature.title}</h2>
              <p className="text-muted">{feature.description}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="border-t border-border py-14">
        <Container className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
              Recent Acquisitions
            </p>
          </div>
          <div className="grid gap-5">
            {exhibits.slice(0, 2).map((exhibit) => (
              <Link
                key={exhibit.slug}
                href={`/museum/${exhibit.slug}`}
                className="grid gap-4 rounded-[1.75rem] border border-border bg-surface p-6 shadow-[var(--shadow)] md:grid-cols-[1fr_auto]"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
                    {exhibit.accessionNumber}
                  </p>
                  <h2 className="mt-3 text-3xl">{exhibit.title}</h2>
                  <p className="mt-3 text-muted">{exhibit.summary}</p>
                </div>
                <div className="self-start rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
                  {exhibit.year}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

