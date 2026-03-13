type CodeArtifactProps = {
  label?: string;
  code: string;
};

export function CodeArtifact({
  label = "Recovered code fragment",
  code,
}: CodeArtifactProps) {
  return (
    <div className="code-panel rounded-[1.75rem] p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d6c4ad]">
          {label}
        </p>
        <span className="rounded-full border border-[#5d4636] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#d6c4ad]">
          Protected View
        </span>
      </div>
      <pre className="mt-4 overflow-x-auto font-mono text-sm leading-7 text-[#f5ecdc]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

