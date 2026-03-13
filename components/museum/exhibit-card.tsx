import Link from "next/link";
import { CodeArtifact } from "@/components/ui/code-artifact";
import { getArtifactId } from "@/lib/museum";
import { highlightCode } from "@/lib/shiki";
import type { ExhibitListItem } from "@/lib/museum";

type ExhibitCardProps = {
  exhibit: ExhibitListItem;
};

export async function ExhibitCard({ exhibit }: ExhibitCardProps) {
  const highlighted = await highlightCode(
    exhibit.artifact,
    exhibit.artifactLanguage,
  );

  return (
    <article className="museum-panel group p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
            {exhibit.classification}
          </p>
          <h2 className="mt-4 text-2xl leading-tight">{exhibit.title}</h2>
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
          {exhibit.year}
        </p>
      </div>
      <p className="mt-4 text-muted">{exhibit.description}</p>
      <p className="mt-3 text-sm text-muted">{exhibit.curatorNote}</p>
      <div className="mt-5">
        <CodeArtifact
          label="Artifact snippet"
          filename={exhibit.artifactFilename}
          highlighted={highlighted}
          showLineNumbers={exhibit.artifactLineNumbers}
          renderMode={exhibit.artifactRenderMode}
          metadata={[
            { label: "Artifact ID", value: getArtifactId(exhibit) },
            { label: "Status", value: exhibit.status },
          ]}
        />
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {exhibit.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/museum/exhibits/${exhibit.slug}`}
          className="font-mono text-xs uppercase tracking-[0.35em] text-foreground"
        >
          View artifact
        </Link>
      </div>
    </article>
  );
}
