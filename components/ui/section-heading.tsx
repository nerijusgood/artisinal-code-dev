type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
        {eyebrow}
      </p>
      <h1 className="text-balance text-4xl leading-tight sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description ? <p className="text-lg text-muted">{description}</p> : null}
    </div>
  );
}

