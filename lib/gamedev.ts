import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export type GameCategory = "games" | "prototypes" | "game-jams";

export interface GameMetadata {
    title: string;
    description: string;
    thumbnail?: string;
    hero?: string;
    screenshots?: string[];
    date: string;
    tags?: string[];
    links?: {
        itch?: string;
        steam?: string;
        github?: string;
        play?: string;
    };
}

export interface GameEntry {
    slug: string;
    category: GameCategory;
    metadata: GameMetadata;
    content: string;
    htmlContent: string;
}

const CONTENT_DIR = "content/gamedev";

function getCategoryDir(category: GameCategory): string {
    return path.join(CONTENT_DIR, category);
}

export function getGamesByCategory(category: GameCategory): GameEntry[] {
    const categoryDir = getCategoryDir(category);

    if (!fs.existsSync(categoryDir)) {
        return [];
    }

    const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith(".md"));

    const entries = files
        .filter((filename) => filename !== "example-game.md")
        .map((filename) => {
        const slug = filename.replace(".md", "");
        const filePath = path.join(categoryDir, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const parsed = matter(fileContent);
        const htmlContent = marked.parse(parsed.content) as string;

            return {
            slug,
            category,
            metadata: parsed.data as GameMetadata,
            content: parsed.content,
            htmlContent,
            };
        });

    return entries.sort(
        (a, b) =>
            new Date(b.metadata.date).getTime() -
            new Date(a.metadata.date).getTime()
    );
}

export function getAllGames(): GameEntry[] {
    const categories: GameCategory[] = ["games", "prototypes", "game-jams"];
    return categories.flatMap((category) => getGamesByCategory(category));
}

export function getGameBySlug(slug: string): GameEntry | null {
    const categories: GameCategory[] = ["games", "prototypes", "game-jams"];

    for (const category of categories) {
        const categoryDir = getCategoryDir(category);

        if (!fs.existsSync(categoryDir)) {
            continue;
        }

        const filePath = path.join(categoryDir, `${slug}.md`);

        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const parsed = matter(fileContent);
            const htmlContent = marked.parse(parsed.content) as string;

            return {
                slug,
                category,
                metadata: parsed.data as GameMetadata,
                content: parsed.content,
                htmlContent,
            };
        }
    }

    return null;
}

export function generateGameParams(): { slug: string }[] {
    return getAllGames().map((game) => ({ slug: game.slug }));
}
