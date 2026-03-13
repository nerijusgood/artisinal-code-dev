import { HomeExhibitionLabClient } from "@/components/interactive/home-exhibition-lab-client";
import { highlightCode } from "@/lib/shiki";

const specimens = [
  {
    title: "Nested Factory Sequence",
    taxonomy: "Wrapper Proliferation",
    curatorNote:
      "The object appears to construct a helper that produces a factory returning configuration for a single string transform.",
    filename: "formatters/create-formatter-factory.ts",
    language: "typescript",
    artifact: `export const createFormatterFactory = (config) =>
  createScopedFormatter(() =>
    buildRuntimeFormatter(config, getInheritedDefaults())
  );`,
  },
  {
    title: "Boolean Flag Cluster",
    taxonomy: "Semantic Ambiguity",
    curatorNote:
      "Four booleans coexist without clear hierarchy, suggesting the logic evolved through multiple sincere clarifications.",
    filename: "features/render-experience.ts",
    language: "typescript",
    artifact: `if (isEnabled && !isDisabled && shouldBypass !== true && isReadyMaybe) {
  renderExperience();
}`,
  },
  {
    title: "Utility Wrapper of Unknown Purpose",
    taxonomy: "Inherited Helper",
    curatorNote:
      "Purpose remains contested among historians. The function survived three rewrites and one migration plan.",
    filename: "utils/safely-maybe-normalize-thing.ts",
    language: "typescript",
    artifact: `export function safelyMaybeNormalizeThing(input: unknown) {
  return normalizeThing(withLegacyFallback(input));
}`,
  },
] as const;

const legacyArtifact = `// DO NOT TOUCH
if (legacyMode) return runOldFlow(payload);`;

export async function HomeExhibitionLab() {
  const highlightedSpecimens = await Promise.all(
    specimens.map(async (specimen) => ({
      title: specimen.title,
      taxonomy: specimen.taxonomy,
      curatorNote: specimen.curatorNote,
      filename: specimen.filename,
      highlighted: await highlightCode(specimen.artifact, specimen.language),
    })),
  );

  const legacyHighlighted = await highlightCode(legacyArtifact, "typescript");

  return (
    <HomeExhibitionLabClient
      specimens={highlightedSpecimens}
      legacyHighlighted={legacyHighlighted}
    />
  );
}
