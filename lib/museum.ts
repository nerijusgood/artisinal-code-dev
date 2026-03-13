import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import type { ReactElement } from "react";
import { mdxComponents } from "@/components/museum/mdx-prose";

const exhibitsDirectory = path.join(process.cwd(), "content/exhibits");

export type ExhibitFrontmatter = {
  title: string;
  year: string;
  developer: string;
  description: string;
  tags: string[];
  artifact: string;
  status?: string;
};

export type ExhibitListItem = ExhibitFrontmatter & {
  slug: string;
};

async function readExhibitFile(slug: string) {
  const filePath = path.join(exhibitsDirectory, `${slug}.mdx`);
  return fs.readFile(filePath, "utf8");
}

export async function getExhibitSlugs() {
  const files = await fs.readdir(exhibitsDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
    .sort();
}

export async function getExhibits(): Promise<ExhibitListItem[]> {
  const slugs = await getExhibitSlugs();
  const exhibits = await Promise.all(
    slugs.map(async (slug) => {
      const source = await readExhibitFile(slug);
      const { data } = matter(source);

      return {
        slug,
        ...(data as ExhibitFrontmatter),
      };
    }),
  );

  return exhibits.sort((left, right) => right.year.localeCompare(left.year));
}

export async function getArchiveGroups() {
  const exhibits = await getExhibits();
  const byYear = new Map<string, ExhibitListItem[]>();
  const byTag = new Map<string, ExhibitListItem[]>();

  for (const exhibit of exhibits) {
    byYear.set(exhibit.year, [...(byYear.get(exhibit.year) ?? []), exhibit]);

    for (const tag of exhibit.tags) {
      byTag.set(tag, [...(byTag.get(tag) ?? []), exhibit]);
    }
  }

  return {
    exhibits,
    years: [...byYear.entries()].sort((a, b) => b[0].localeCompare(a[0])),
    tags: [...byTag.entries()].sort((a, b) => a[0].localeCompare(b[0])),
  };
}

export async function getExhibitBySlug(
  slug: string,
): Promise<(ExhibitListItem & { content: ReactElement }) | null> {
  try {
    const source = await readExhibitFile(slug);
    const { content, frontmatter } = await compileMDX<ExhibitFrontmatter>({
      source,
      components: mdxComponents,
      options: {
        parseFrontmatter: true,
      },
    });

    return {
      slug,
      content,
      ...frontmatter,
    };
  } catch {
    return null;
  }
}
