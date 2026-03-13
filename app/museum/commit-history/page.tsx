import { PageHero } from "@/components/page-hero";
import {
  CommitHistoryList,
  type CommitHistoryItem,
} from "@/components/ui/commit-history-list";
import { Container } from "@/components/ui/container";

const inscriptions: CommitHistoryItem[] = [
  {
    id: "2019-fix",
    hash: "7ea9201",
    message: "fix",
    author: "Unknown frontend engineer",
    timestamp: "2019",
    label: "main",
    note: "A rare surviving fragment from the pre-prompt era. Likely produced under deadline pressure.",
  },
  {
    id: "2021-fix-actual",
    hash: "84fd112",
    message: "fix actual issue",
    author: "Platform maintainer",
    timestamp: "2021",
    label: "hotfix",
    note: "Purpose remains contested among historians, though the second adjective suggests contact with reality.",
  },
  {
    id: "2023-please-work",
    hash: "ca20d44",
    message: "please work",
    author: "Senior engineer",
    timestamp: "2023",
    label: "production",
    note: "An unusually direct appeal to the deployment environment.",
  },
  {
    id: "2024-revert",
    hash: "1b03aef",
    message: "revert previous calm decision",
    author: "Release steward",
    timestamp: "2024",
    label: "revert",
    note: "Documents the collapse of an earlier design philosophy.",
  },
  {
    id: "2025-final-final",
    hash: "ae772f0",
    message: "final final",
    author: "Multiple authors",
    timestamp: "2025",
    label: "tagged",
    note: "A ceremonial declaration observed throughout late-stage release periods.",
  },
];

export default function CommitHistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Commit History Wing"
        title="An inscription gallery devoted to the compressed emotional record of software delivery."
        description="Commit messages are displayed here as textual artifacts: terse, revealing, and often written under conditions not conducive to literary excellence."
        aside="Unlike institutional press releases, commit history preserves uncertainty in its original form."
      />
      <Container className="grid gap-8 pb-16 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted">
            Commit History Gallery
          </p>
        </div>
        <CommitHistoryList title="Curated revision log" items={inscriptions} />
      </Container>
    </>
  );
}
