import type { ComponentPropsWithoutRef } from "react";

function createHeading(tag: "h1" | "h2" | "h3") {
  return function Heading({
    className = "",
    ...props
  }: ComponentPropsWithoutRef<"h1"> | ComponentPropsWithoutRef<"h2"> | ComponentPropsWithoutRef<"h3">) {
    const sizes =
      tag === "h1"
        ? "text-4xl"
        : tag === "h2"
          ? "mt-12 text-3xl"
          : "mt-10 text-2xl";

    const Tag = tag;
    return <Tag className={`${sizes} leading-tight ${className}`.trim()} {...props} />;
  };
}

export const mdxComponents = {
  h1: createHeading("h1"),
  h2: createHeading("h2"),
  h3: createHeading("h3"),
  p: ({ className = "", ...props }: ComponentPropsWithoutRef<"p">) => (
    <p className={`mt-5 text-lg leading-8 text-foreground/88 ${className}`.trim()} {...props} />
  ),
  ul: ({ className = "", ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul className={`mt-6 space-y-3 pl-6 text-lg text-foreground/88 ${className}`.trim()} {...props} />
  ),
  li: ({ className = "", ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className={`list-disc pl-2 ${className}`.trim()} {...props} />
  ),
  blockquote: ({
    className = "",
    ...props
  }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className={`mt-8 border-l-2 border-accent pl-6 italic text-muted ${className}`.trim()}
      {...props}
    />
  ),
  code: ({ className = "", ...props }: ComponentPropsWithoutRef<"code">) => (
    <code
      className={`rounded bg-accent-soft px-1.5 py-1 font-mono text-sm ${className}`.trim()}
      {...props}
    />
  ),
  pre: ({ className = "", ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className={`mt-6 overflow-x-auto rounded-[1.5rem] border border-border bg-[#201711] px-5 py-4 font-mono text-sm leading-7 text-[#f5ecdc] ${className}`.trim()}
      {...props}
    />
  ),
};
