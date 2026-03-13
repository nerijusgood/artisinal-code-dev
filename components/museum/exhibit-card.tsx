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
            {exhibit.accessionNumber}
          </p>
          <h2 className="mt-4 text-2xl leading-tight">{exhibit.title}</h2>
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
          {exhibit.year}
        </p>
      </div>
      <p className="mt-4 text-muted">{exhibit.summary}</p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <span className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
          {exhibit.discipline}
        </span>
        <Link
          href={`/museum/${exhibit.slug}`}
          className="font-mono text-xs uppercase tracking-[0.35em] text-foreground"
        >
          View artifact
        </Link>
      </div>
    </article>
  );
}

