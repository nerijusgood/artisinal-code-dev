export type CommitHistoryItem = {
  id?: string | number;
  hash: string;
  message: string;
  author: string;
  timestamp: string;
  note?: string;
  label?: string;
};

type CommitHistoryListProps = {
  title?: string;
  items: CommitHistoryItem[];
  className?: string;
};

export function CommitHistoryList({
  title,
  items,
  className = "",
}: CommitHistoryListProps) {
  return (
    <section className={`commit-history museum-panel p-0 ${className}`.trim()}>
      {title ? (
        <div className="commit-history__header">
          <p className="annotation">{title}</p>
        </div>
      ) : null}
      <div className="commit-history__list">
        {items.map((item) => (
          <article
            key={item.id ?? `${item.hash}-${item.message}`}
            className="commit-history__item"
          >
            <div className="commit-history__main">
              <div className="commit-history__message-row">
                <p className="commit-history__message">{item.message}</p>
                {item.label ? (
                  <span className="commit-history__label">{item.label}</span>
                ) : null}
              </div>
              {item.note ? <p className="commit-history__note">{item.note}</p> : null}
            </div>
            <div className="commit-history__meta">
              <span className="commit-history__hash">{item.hash}</span>
              <span className="commit-history__author">{item.author}</span>
              <span className="commit-history__timestamp">{item.timestamp}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

