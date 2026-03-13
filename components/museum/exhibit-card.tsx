import Link from "next/link";
import type { ExhibitListItem } from "@/lib/museum";

type ExhibitCardProps = {
  exhibit: ExhibitListItem;
};

export function ExhibitCard({ exhibit }: ExhibitCardProps) {
  return (
    <article className="group rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow)] transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
            {exhibit.developer}
          </p>
          <h2 className="mt-4 text-2xl leading-tight">{exhibit.title}</h2>
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
          {exhibit.year}
        </p>
      </div>
      <p className="mt-4 text-muted">{exhibit.description}</p>
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
