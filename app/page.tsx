import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getExhibits } from "@/lib/museum";

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

const commitEntries = [
  {
    hash: "9af31d2",
    title: "fix",
    note: "Initial intervention. Confidence high, evidence limited.",
  },
  {
    hash: "bd1e771",
    title: "fix actual issue",
    note: "Revised after contact with runtime behavior.",
  },
  {
    hash: "ca20d44",
    title: "final final",
    note: "Added during emergency refactor. Not final.",
  },
];

const escalationRows = [
  ["Client request", '"simple landing page"'],
  ["Week two clarification", "newsletter signup plus CMS"],
  ["Stakeholder alignment", "authentication, payments, CRM"],
  ["Late strategic opportunity", "AI assistant and mobile app"],
  ["Final delivery contour", "platform, archive, dashboard, migration plan"],
];

const architectureLayers = [
  "Button",
  "ButtonPrimitive",
  "InteractiveSurfaceProvider",
  "VariantResolverBoundary",
  "ThemeContextAdapter",
  "LegacyCompatibilityShell",
  "AnalyticsIntentBridge",
];

export default async function HomePage() {
  const exhibits = await getExhibits();

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
            <div className="code-panel p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d6c4ad]">
                  Recovered artifact
                </p>
                <span className="rounded-full border border-[#5d4636] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#d6c4ad]">
                  TODO / 2017
                </span>
              </div>
              <pre className="mt-5 overflow-x-auto font-mono text-sm leading-7">
                <code>{`// TODO: refactor this later`}</code>
              </pre>
              <p className="mt-4 text-sm leading-6 text-[#d6c4ad]">
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
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {exhibits.slice(0, 3).map((exhibit) => (
              <Link
                key={exhibit.slug}
                href={`/museum/exhibits/${exhibit.slug}`}
                className="museum-panel group p-6"
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
                <div className="code-panel mt-6 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d6c4ad]">
                    Preserved snippet
                  </p>
                  <pre className="mt-3 overflow-x-auto font-mono text-xs leading-6">
                    <code>{exhibit.artifact}</code>
                  </pre>
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

      <section className="border-b border-border py-14">
        <Container className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div>
            <p className="annotation">Architecture exhibit</p>
            <h2 className="mt-4 text-4xl leading-tight">
              The simple button implementation
            </h2>
          </div>
          <div className="museum-panel p-8">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
              <div className="space-y-5">
                <p>
                  This diagram documents the preservation of a modest user interface
                  element after repeated rounds of responsible abstraction. The
                  button remains technically clickable, though its governance burden
                  has grown considerably.
                </p>
                <div className="space-y-3">
                  {architectureLayers.map((layer, index) => (
                    <div
                      key={layer}
                      className="rounded-[1.25rem] border border-border bg-background/70 p-4"
                      style={{ marginLeft: `${index * 18}px` }}
                    >
                      <p className="annotation">Layer {index + 1}</p>
                      <p className="mt-2 text-lg">{layer}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="tooling-panel p-5">
                <p className="annotation">System note</p>
                <p className="mt-3 text-lg leading-8">
                  Introduced to support a secondary quiet destructive loading state
                  requested after visual QA identified tonal ambiguity.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-14">
        <Container className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div>
            <p className="annotation">Commit history wing</p>
            <h2 className="mt-4 text-4xl leading-tight">Selected inscriptions</h2>
          </div>
          <div className="museum-panel p-8">
            <div className="space-y-4 border-l border-border pl-6">
              {commitEntries.map((entry) => (
                <div
                  key={entry.hash}
                  className="grid gap-2 rounded-[1.25rem] border border-border bg-background/70 p-4 md:grid-cols-[7rem_minmax(0,1fr)]"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                    {entry.hash}
                  </p>
                  <div>
                    <p className="font-mono text-sm text-foreground">{entry.title}</p>
                    <p className="mt-2 text-muted">{entry.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-14">
        <Container className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div>
            <p className="annotation">Client request escalation</p>
            <h2 className="mt-4 text-4xl leading-tight">Scope growth under glass</h2>
          </div>
          <div className="museum-panel p-8">
            <div className="grid gap-3">
              {escalationRows.map(([label, value], index) => {
                const rowClassName =
                  index === 0
                    ? "diff-add"
                    : index === escalationRows.length - 1
                      ? "legacy-warning"
                      : "tooling-panel";

                return (
                  <div
                    key={label}
                    className={`${rowClassName} grid gap-2 p-4 md:grid-cols-[15rem_minmax(0,1fr)]`}
                  >
                    <p className="annotation">{label}</p>
                    <p className="text-lg">{value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

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
