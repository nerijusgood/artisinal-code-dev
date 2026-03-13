import Link from "next/link";
import { getArtifactId, type ExhibitListItem } from "@/lib/museum";

type ArchiveGroupProps = {
  title: string;
  items: ExhibitListItem[];
};

export function ArchiveGroup({ title, items }: ArchiveGroupProps) {
  return (
    <section className="museum-panel p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl">{title}</h2>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
          {items.length} records
        </p>
      </div>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/museum/exhibits/${item.slug}`}
            className="block rounded-[1.5rem] border border-border bg-background/70 p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                {getArtifactId(item)}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="status-chip">{item.artifactLanguage}</span>
                <span className="status-chip">{item.status}</span>
              </div>
            </div>
            <h3 className="mt-3 text-xl">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
            <div className="mt-3 grid gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-muted sm:grid-cols-2">
              <span>{item.year}</span>
              <span>{item.developer}</span>
              <span>{item.classification}</span>
              <span>{item.artifactFilename ?? "artifact path unrecorded"}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
