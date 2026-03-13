import { cache } from "react";
import { codeToTokensBase, type BundledLanguage, type BundledTheme } from "shiki";

const theme: BundledTheme = "github-light";

const languageMap = {
  javascript: "javascript",
  js: "javascript",
  typescript: "typescript",
  ts: "typescript",
  css: "css",
  html: "html",
  bash: "bash",
  sh: "bash",
  shell: "bash",
  json: "json",
  sql: "sql",
  yaml: "yaml",
  yml: "yaml",
} as const;

export type SupportedCodeLanguage = keyof typeof languageMap;

export type HighlightedToken = {
  content: string;
  color?: string;
  fontStyle?: number;
};

export type HighlightedLine = {
  number: number;
  tokens: HighlightedToken[];
};

export type HighlightedCode = {
  language: BundledLanguage;
  lines: HighlightedLine[];
};

function normalizeLanguage(language: SupportedCodeLanguage | string): BundledLanguage {
  const normalized = language.toLowerCase() as SupportedCodeLanguage;
  return (languageMap[normalized] ?? "typescript") as BundledLanguage;
}

export function inferCodeLanguage(
  filename?: string,
  fallback: SupportedCodeLanguage = "typescript",
): SupportedCodeLanguage {
  if (!filename) {
    return fallback;
  }

  const extension = filename.split(".").pop()?.toLowerCase();
  switch (extension) {
    case "js":
      return "javascript";
    case "ts":
    case "tsx":
      return "typescript";
    case "css":
      return "css";
    case "html":
      return "html";
    case "sh":
      return "bash";
    case "json":
      return "json";
    case "sql":
      return "sql";
    case "yml":
    case "yaml":
      return "yaml";
    default:
      return fallback;
  }
}

export const highlightCode = cache(
  async (
    code: string,
    language: SupportedCodeLanguage | string,
  ): Promise<HighlightedCode> => {
    const normalizedLanguage = normalizeLanguage(language);
    const tokens = await codeToTokensBase(code, {
      lang: normalizedLanguage,
      theme,
    });

    return {
      language: normalizedLanguage,
      lines: tokens.map((line, index) => ({
        number: index + 1,
        tokens: line.map((token) => ({
          content: token.content,
          color: token.color,
          fontStyle: token.fontStyle,
        })),
      })),
    };
  },
);

