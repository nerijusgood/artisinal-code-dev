import type { HighlightedCode } from "@/lib/shiki";

type CodeArtifactProps = {
  highlighted: HighlightedCode;
  filename?: string;
  label?: string;
  showLineNumbers?: boolean;
  className?: string;
};

function getFontStyle(fontStyle?: number) {
  if (!fontStyle) {
    return undefined;
  }

  return {
    fontStyle: fontStyle & 1 ? "italic" : undefined,
    fontWeight: fontStyle & 2 ? "700" : undefined,
    textDecoration: fontStyle & 4 ? "underline" : undefined,
  };
}

export function CodeArtifact({
  highlighted,
  filename,
  label = "Recovered code fragment",
  showLineNumbers = false,
  className = "",
}: CodeArtifactProps) {
  return (
    <div className={`code-panel rounded-[1.75rem] p-5 ${className}`.trim()}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d6c4ad]">
            {label}
          </p>
          {filename ? (
            <p className="mt-2 font-mono text-sm text-[#f5ecdc]">{filename}</p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-[#5d4636] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#d6c4ad]">
            {highlighted.language}
          </span>
          {showLineNumbers ? (
            <span className="rounded-full border border-[#5d4636] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#d6c4ad]">
              Line Numbers
            </span>
          ) : null}
        </div>
      </div>
      <div className="mt-4 overflow-x-auto">
        <div className="min-w-max font-mono text-sm leading-7 text-[#f5ecdc]">
          {highlighted.lines.map((line) => (
            <div
              key={line.number}
              className={`grid ${showLineNumbers ? "grid-cols-[3rem_minmax(0,1fr)] gap-4" : "grid-cols-1"} whitespace-pre`}
            >
              {showLineNumbers ? (
                <span className="select-none text-right text-[#a78f77]">
                  {line.number}
                </span>
              ) : null}
              <span>
                {line.tokens.length > 0 ? (
                  line.tokens.map((token, tokenIndex) => (
                    <span
                      key={`${line.number}-${tokenIndex}`}
                      style={{
                        color: token.color,
                        ...getFontStyle(token.fontStyle),
                      }}
                    >
                      {token.content}
                    </span>
                  ))
                ) : (
                  <span>&nbsp;</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

