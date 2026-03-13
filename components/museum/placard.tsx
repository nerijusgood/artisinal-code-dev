import type { ExhibitListItem } from "@/lib/museum";

type PlacardProps = {
  exhibit: ExhibitListItem;
};

export function Placard({ exhibit }: PlacardProps) {
  return (
    <div className="rounded-[1.75rem] border border-border bg-background-muted/60 p-6">
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
        Exhibit Placard
      </p>
      <dl className="mt-5 space-y-5">
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
            Classification
          </dt>
          <dd className="mt-2 text-lg">{exhibit.classification}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
            Developer
          </dt>
          <dd className="mt-2 text-lg">{exhibit.developer}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
            Year
          </dt>
          <dd className="mt-2 text-lg">{exhibit.year}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
            Status
          </dt>
          <dd className="mt-2 text-lg">{exhibit.status}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
            Tags
          </dt>
          <dd className="mt-3 flex flex-wrap gap-2">
            {exhibit.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-muted"
              >
                {tag}
              </span>
            ))}
          </dd>
        </div>
        {exhibit.warningLabel ? (
          <div className="legacy-warning p-4">
            <dt className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
              Warning Label
            </dt>
            <dd className="mt-2 text-sm leading-6">{exhibit.warningLabel}</dd>
          </div>
        ) : null}
      </dl>
    </div>
  );
}
