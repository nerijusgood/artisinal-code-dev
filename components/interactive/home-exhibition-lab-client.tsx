"use client";

import { useState } from "react";
import { CodeArtifact } from "@/components/ui/code-artifact";
import type { HighlightedCode } from "@/lib/shiki";

const commitMessages = [
  "fix",
  "fix again",
  "actually fix",
  "revert previous fix",
  "patch for production issue",
  "temporary patch",
  "permanent temporary patch",
  "remove debug logs",
  "add debug logs back",
];

const architectureLayers = [
  "Button",
  "ButtonPrimitive",
  "InteractiveSurfaceProvider",
  "VariantResolverBoundary",
  "AnalyticsIntentBridge",
  "ThemeContextAdapter",
  "LegacyCompatibilityShell",
  "FeatureFlagCompatibilityWrapper",
];

const clientFeedback = [
  "Can we make it pop more?",
  "This should be simple.",
  "Can we add AI?",
  "Can we keep the budget the same?",
  "Can it also work as an internal tool?",
  "Could this become the foundation for the mobile app?",
];

const legacyWarnings = [
  "Functioning since 2014.",
  "Unknown dependencies detected.",
  "No surviving documentation.",
  "Two teams believe they own this.",
];

type CommitEntry = {
  id: number;
  hash: string;
  message: string;
  note: string;
};

type Specimen = {
  title: string;
  taxonomy: string;
  curatorNote: string;
  filename: string;
  highlighted: HighlightedCode;
};

type HomeExhibitionLabClientProps = {
  specimens: Specimen[];
  legacyHighlighted: HighlightedCode;
};

function makeHash(seed: number) {
  return (seed * 92821).toString(16).slice(0, 7);
}

export function HomeExhibitionLabClient({
  specimens,
  legacyHighlighted,
}: HomeExhibitionLabClientProps) {
  const [developerView, setDeveloperView] = useState(false);
  const [commitIndex, setCommitIndex] = useState(2);
  const [commits, setCommits] = useState<CommitEntry[]>([
    {
      id: 0,
      hash: "9af31d2",
      message: "fix",
      note: "Initial intervention. Confidence high, evidence limited.",
    },
    {
      id: 1,
      hash: "bd1e771",
      message: "fix actual issue",
      note: "Revision produced after direct contact with production.",
    },
  ]);
  const [visibleLayers, setVisibleLayers] = useState(3);
  const [selectedSpecimen, setSelectedSpecimen] = useState(0);
  const [scopeIndex, setScopeIndex] = useState(0);
  const [legacyUnlocked, setLegacyUnlocked] = useState(false);

  const addCommit = () => {
    const nextIndex = (commitIndex + 1) % commitMessages.length;
    const message = commitMessages[nextIndex];
    setCommitIndex(nextIndex);
    setCommits((current) => [
      {
        id: current.length,
        hash: makeHash(current.length + 3),
        message,
        note:
          nextIndex % 2 === 0
            ? "Likely produced under deadline pressure."
            : "Curators classify this as a corrective inscription.",
      },
      ...current,
    ]);
  };

  const currentSpecimen = specimens[selectedSpecimen];
  const scopeComplexity = 1 + scopeIndex * 2;

  return (
    <section className="border-b border-border py-14">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div className="space-y-4">
            <p className="annotation">Interactive conservation interfaces</p>
            <h2 className="text-4xl leading-tight">Live workflows under glass</h2>
            <p className="text-muted">
              These interfaces simulate ordinary developer realities with museum-grade
              seriousness.
            </p>
            <button
              type="button"
              aria-pressed={developerView}
              onClick={() => setDeveloperView((current) => !current)}
              className="rounded-full border border-border-strong bg-surface-strong px-5 py-3 font-mono text-xs uppercase tracking-[0.35em] text-foreground"
            >
              {developerView ? "Hide Developer View" : "Reveal Developer View"}
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid gap-6 xl:grid-cols-2">
              <section className="museum-panel p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="annotation">Commit Message Generator</p>
                    <h3 className="mt-3 text-3xl">Revision inscriptions</h3>
                  </div>
                  <button
                    type="button"
                    onClick={addCommit}
                    className="rounded-full border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-foreground"
                  >
                    Generate commit
                  </button>
                </div>
                <div className="mt-6 space-y-3 border-l border-border pl-5">
                  {commits.map((entry) => (
                    <article
                      key={entry.id}
                      className="rounded-[1.25rem] border border-border bg-background/70 p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                          {entry.hash}
                        </p>
                        <span className="status-chip">Commit Record</span>
                      </div>
                      <p className="mt-3 font-mono text-base">{entry.message}</p>
                      <p className="mt-2 text-sm text-muted">{entry.note}</p>
                      {developerView ? (
                        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
                          internal note: confidence was overstated
                        </p>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>

              <section className="museum-panel p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="annotation">Overengineering Visualizer</p>
                    <h3 className="mt-3 text-3xl">Button abstraction tree</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setVisibleLayers((current) =>
                        current < architectureLayers.length ? current + 1 : current,
                      )
                    }
                    disabled={visibleLayers >= architectureLayers.length}
                    className="rounded-full border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Add layer
                  </button>
                </div>
                <div className="mt-6 space-y-3">
                  {architectureLayers.slice(0, visibleLayers).map((layer, index) => (
                    <div
                      key={layer}
                      className="rounded-[1.25rem] border border-border bg-background/70 p-4 transition-all"
                      style={{ marginLeft: `${index * 16}px` }}
                    >
                      <p className="annotation">Layer {index + 1}</p>
                      <p className="mt-2 text-lg">{layer}</p>
                      {developerView && index === visibleLayers - 1 ? (
                        <p className="mt-2 text-sm text-muted">
                          added to support a secondary quiet destructive hover state
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_24rem]">
              <section className="museum-panel p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="annotation">Spaghetti Code Specimen Viewer</p>
                    <h3 className="mt-3 text-3xl">Taxonomy drawer</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {specimens.map((specimen, index) => (
                      <button
                        key={specimen.title}
                        type="button"
                        onClick={() => setSelectedSpecimen(index)}
                        className={`rounded-full border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.28em] ${
                          selectedSpecimen === index
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-muted"
                        }`}
                      >
                        Specimen {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-6 grid gap-5 lg:grid-cols-[18rem_minmax(0,1fr)]">
                  <div className="tooling-panel p-5">
                    <p className="annotation">Taxonomy label</p>
                    <p className="mt-3 text-2xl">{currentSpecimen.taxonomy}</p>
                    <p className="mt-4 text-sm text-muted">
                      {currentSpecimen.curatorNote}
                    </p>
                    {developerView ? (
                      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
                        probable origin: helper added to avoid touching existing helper
                      </p>
                    ) : null}
                  </div>
                  <CodeArtifact
                    label={currentSpecimen.title}
                    filename={currentSpecimen.filename}
                    highlighted={currentSpecimen.highlighted}
                    showLineNumbers
                  />
                </div>
              </section>

              <section className="museum-panel p-6">
                <p className="annotation">Protected Legacy Zone</p>
                <h3 className="mt-3 text-3xl">Restricted access</h3>
                {legacyUnlocked ? (
                  <div className="legacy-warning mt-5 p-5">
                    <p className="annotation">Area opened with reluctance</p>
                    <ul className="mt-4 space-y-3 text-muted">
                      {legacyWarnings.map((warning) => (
                        <li key={warning}>{warning}</li>
                      ))}
                    </ul>
                    <div className="mt-5">
                      <CodeArtifact
                        label="Restricted system fragment"
                        filename="legacy/compatibility.ts"
                        highlighted={legacyHighlighted}
                        showLineNumbers
                      />
                    </div>
                  </div>
                ) : (
                  <div className="legacy-warning mt-5 p-5">
                    <p className="text-muted">
                      Protected area. No surviving documentation. Unknown dependencies.
                    </p>
                    <button
                      type="button"
                      onClick={() => setLegacyUnlocked(true)}
                      className="mt-4 rounded-full border border-border-strong bg-surface-strong px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-foreground"
                    >
                      Acknowledge risk
                    </button>
                  </div>
                )}
              </section>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <section className="museum-panel p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="annotation">Client Scope Creep Simulator</p>
                    <h3 className="mt-3 text-3xl">Complexity expansion engine</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setScopeIndex((current) =>
                        current < clientFeedback.length - 1 ? current + 1 : current,
                      )
                    }
                    disabled={scopeIndex >= clientFeedback.length - 1}
                    className="rounded-full border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Generate request
                  </button>
                </div>
                <div className="mt-6 space-y-3">
                  {clientFeedback.slice(0, scopeIndex + 1).map((feedback, index) => (
                    <div
                      key={`${feedback}-${index}`}
                      className={`grid gap-2 p-4 md:grid-cols-[12rem_minmax(0,1fr)] ${
                        index === scopeIndex ? "legacy-warning" : "tooling-panel"
                      }`}
                    >
                      <p className="annotation">Client note {index + 1}</p>
                      <p className="text-lg">{feedback}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="status-chip">Complexity {scopeComplexity}x</span>
                  <span className="status-chip">Budget unchanged</span>
                  <span className="status-chip">Timeline optimistic</span>
                </div>
                {developerView ? (
                  <p className="mt-4 text-sm text-muted">
                    Internal annotation: architecture now includes auth, billing,
                    prompt orchestration, admin, and a future migration we can already
                    sense.
                  </p>
                ) : null}
              </section>

              <section className="museum-panel p-6">
                <p className="annotation">Developer View Toggle</p>
                <h3 className="mt-3 text-3xl">Implementation scars</h3>
                <div className="mt-6 space-y-3">
                  <div className="tooling-panel p-4">
                    <p className="annotation">Public label</p>
                    <p className="mt-2 text-lg">Stable museum interface</p>
                    {developerView ? (
                      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
                        TODO: clean this up before someone asks how it works
                      </p>
                    ) : null}
                  </div>
                  <div className="tooling-panel p-4">
                    <p className="annotation">Architecture note</p>
                    <p className="mt-2 text-lg">Curated exhibit presentation</p>
                    {developerView ? (
                      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
                        introduced during emergency refactor / retained due to regression risk
                      </p>
                    ) : null}
                  </div>
                  <div className="tooling-panel p-4">
                    <p className="annotation">Operational record</p>
                    <p className="mt-2 text-lg">Human authorship verified</p>
                    {developerView ? (
                      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
                        commit note: naming remains under quiet dispute
                      </p>
                    ) : null}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

