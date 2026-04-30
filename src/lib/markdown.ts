import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "src/content");

export async function getMarkdownData(directory: string, slug: string): Promise<{ slug: string; contentHtml: string; [key: string]: any }> {
  const fullPath = path.join(contentDirectory, directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    ...(matterResult.data as Record<string, any>),
  };
}

export function getAllMarkdownSlugs(directory: string) {
  const dirPath = path.join(contentDirectory, directory);
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  const fileNames = fs.readdirSync(dirPath);

  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ""),
    };
  });
}

export function getSortedMarkdownData(directory: string): Array<{ slug: string; [key: string]: any }> {
  const dirPath = path.join(contentDirectory, directory);
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  const fileNames = fs.readdirSync(dirPath);
  const allData = fileNames.map((fileName): { slug: string; [key: string]: any } => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(dirPath, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      slug,
      ...(matterResult.data as Record<string, any>),
    };
  });

  // Sort by date
  return allData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
