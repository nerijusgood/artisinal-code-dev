import Link from "next/link";
import type { ExhibitListItem } from "@/lib/museum";

type ArchiveGroupProps = {
  title: string;
  items: ExhibitListItem[];
};

export function ArchiveGroup({ title, items }: ArchiveGroupProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow)]">
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
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
              {item.year} / {item.developer}
            </p>
            <h3 className="mt-2 text-xl">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

