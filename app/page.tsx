import Link from "next/link";
import { HomeExhibitionLab } from "@/components/interactive/home-exhibition-lab";
import { CodeArtifact } from "@/components/ui/code-artifact";
import { Container } from "@/components/ui/container";
import { getExhibits } from "@/lib/museum";
import { highlightCode } from "@/lib/shiki";

const sellingPoints = [
  {
    title: "Handcrafted bugs",
    description:
      "Subtle defects introduced through lived context, time pressure, and perfectly sincere assumptions about edge cases.",
  },
  {
    title: "Ceremonial refactors",
    description:
      "Systems periodically renewed through naming debates, extracted helpers, and one regrettable abstraction layer.",
  },
  {
    title: "Emotionally debugged services",
    description:
      "Production incidents resolved by senior engineers entering a private interpretive relationship with logs.",
  },
  {
    title: "Protected legacy areas",
    description:
      "Historically significant logic preserved behind comments, tests, and a tone of institutional caution.",
  },
];

export default async function HomePage() {
  const exhibits = await getExhibits();
  const heroArtifact = await highlightCode("// TODO: refactor this later", "typescript");
  const highlightedExhibits = await Promise.all(
    exhibits.slice(0, 3).map(async (exhibit) => ({
      slug: exhibit.slug,
      highlighted: await highlightCode(exhibit.artifact, exhibit.artifactLanguage),
    })),
  );

  return (
    <>
      <section className="border-b border-border">
        <Container className="grid-overlay relative grid gap-8 overflow-hidden py-14 lg:grid-cols-[minmax(0,1fr)_24rem] lg:py-20">
          <div className="museum-panel relative p-8 sm:p-10 lg:p-12">
            <div className="absolute right-6 top-6 flex flex-wrap gap-2">
              <span className="status-chip">Institutional Use</span>
              <span className="status-chip">Human Authorship Verified</span>
            </div>
            <p className="annotation">
              Boutique agency / museum of human programming / preservation office
            </p>
            <h1 className="text-balance mt-6 max-w-5xl text-5xl leading-[0.95] sm:text-6xl lg:text-8xl">
              The endangered craft of writing software by hand.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-muted">
              Artisinal Code builds bespoke systems and preserves the cultural record
              of human programming: handcrafted bugs, ceremonial refactors, protected
              legacy zones, and commit histories still carrying visible stress.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/museum"
                className="rounded-full border border-foreground bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-[0.35em] text-background"
              >
                Enter Museum
              </Link>
              <Link
                href="/commission"
                className="rounded-full border border-border-strong bg-surface-strong px-6 py-3 font-mono text-xs uppercase tracking-[0.35em] text-foreground"
              >
                Commission Software
              </Link>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="tooling-panel p-4">
                <p className="annotation">Current status</p>
                <p className="mt-3 text-2xl">Manual production active</p>
              </div>
              <div className="tooling-panel p-4">
                <p className="annotation">Preservation priority</p>
                <p className="mt-3 text-2xl">Authentic irregularity</p>
              </div>
              <div className="legacy-warning p-4">
                <p className="annotation">Protected legacy area</p>
                <p className="mt-3 text-2xl">Do not normalize</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <CodeArtifact
                label="Recovered artifact"
                filename="src/runtime/todo.ts"
                highlighted={heroArtifact}
              />
              <p className="mt-4 text-sm leading-6 text-muted">
                Museum label: unresolved, stable in production, cited in meetings.
              </p>
            </div>

            <div className="museum-panel p-6">
              <p className="annotation">Curatorial annotation</p>
              <p className="mt-3 text-lg leading-8">
                Each system we build contains the subtle irregularities only a human
                developer can produce.
              </p>
              <p className="mt-4 text-sm text-muted">
                Introduced during emergency refactor. Retained for authenticity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-14">
        <Container className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div>
            <p className="annotation">Institutional mission</p>
            <h2 className="mt-4 text-4xl leading-tight">Preservation statement</h2>
          </div>
          <div className="museum-panel grid gap-6 p-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="space-y-5">
              <p>
                We maintain that human-written code should be preserved as cultural
                heritage. It bears the marks of context, pressure, judgment, ego,
                compromise, and the brief but sincere belief that this helper would
                only ever be used in one place.
              </p>
              <p>
                In a period dominated by synthetic fluency, we continue to value
                systems shaped by real debugging, accidental complexity, inconsistent
                naming conventions, and the occasional architecture choice that made
                complete sense on a Thursday.
              </p>
            </div>
            <div className="tooling-panel p-5">
              <p className="annotation">Collection taxonomy</p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>Emotional debugging</li>
                <li>Artisanal overengineering</li>
                <li>Protected legacy logic</li>
                <li>Commit history as record</li>
                <li>Scope creep under glass</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-14">
        <Container className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div>
            <p className="annotation">Museum collection</p>
            <h2 className="mt-4 text-4xl leading-tight">Highlights from the archive</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {exhibits.slice(0, 3).map((exhibit) => (
              <Link
                key={exhibit.slug}
                href={`/museum/exhibits/${exhibit.slug}`}
                className={`museum-panel group p-6 ${
                  exhibit.slug === exhibits[0]?.slug ? "lg:col-span-2" : ""
                }`}
              >
                <p className="annotation">
                  {exhibit.year} / {exhibit.developer}
                </p>
                <h3 className="mt-4 text-3xl leading-tight">{exhibit.title}</h3>
                <p className="mt-3 text-muted">{exhibit.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {exhibit.tags.map((tag) => (
                    <span key={tag} className="status-chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <CodeArtifact
                    label="Preserved snippet"
                    filename={exhibit.artifactFilename}
                    highlighted={
                      highlightedExhibits.find((item) => item.slug === exhibit.slug)!
                        .highlighted
                    }
                    showLineNumbers={exhibit.artifactLineNumbers}
                  />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-14">
        <Container className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sellingPoints.map((feature) => (
            <article key={feature.title} className="tooling-panel relative p-6">
              <p className="annotation">Human-crafted software trait</p>
              <h2 className="mt-4 text-2xl leading-tight">{feature.title}</h2>
              <p className="mt-3 text-muted">{feature.description}</p>
            </article>
          ))}
        </Container>
      </section>

      <HomeExhibitionLab />

      <section className="py-16">
        <Container className="museum-panel grid gap-8 p-8 sm:p-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <div>
            <p className="annotation">Next action</p>
            <h2 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">
              Explore the museum or commission a carefully hand-built system with
              traceable human errors.
            </h2>
            <p className="mt-5 max-w-2xl text-muted">
              Visitors may browse the permanent collection. Patrons may request new
              work produced with judgment, inconsistency, and full curatorial
              accountability.
            </p>
          </div>
          <div className="grid gap-4">
            <Link
              href="/museum/exhibits"
              className="rounded-[1.5rem] border border-foreground bg-foreground px-6 py-4 font-mono text-xs uppercase tracking-[0.35em] text-background"
            >
              Browse Exhibits
            </Link>
            <Link
              href="/commission"
              className="rounded-[1.5rem] border border-border-strong bg-surface-strong px-6 py-4 font-mono text-xs uppercase tracking-[0.35em] text-foreground"
            >
              Request Commission
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
