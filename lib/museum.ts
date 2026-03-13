import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import type { ReactElement } from "react";

const exhibitsDirectory = path.join(process.cwd(), "content/exhibits");

export type ExhibitFrontmatter = {
  title: string;
  summary: string;
  year: string;
  discipline: string;
  accessionNumber: string;
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

export async function getExhibitBySlug(
  slug: string,
): Promise<(ExhibitListItem & { content: ReactElement }) | null> {
  try {
    const source = await readExhibitFile(slug);
    const { content, frontmatter } = await compileMDX<ExhibitFrontmatter>({
      source,
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

