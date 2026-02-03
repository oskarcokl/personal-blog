import DefaultLayout from "@/components/DefaultLayout";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

export default function BlogIndex() {
    const posts = fs
        .readdirSync("posts")
        .filter((filename) => filename.endsWith(".md"))
        .map((filename) => {
            const slug = filename.replace(".md", "");
            const fileContent = fs.readFileSync(`posts/${filename}`, "utf-8");
            const parsed = matter(fileContent);

            return {
                slug,
                title: (parsed.data?.title as string) ?? slug,
            };
        });

    return (
        <DefaultLayout>
            <div className="flex flex-col gap-y-6">
                <div>
                    <h1 className="text-center text-4xl">Blog</h1>
                </div>
                <div className="flex flex-col gap-y-2">
                    {posts.map((post) => (
                        <div key={post.slug} className="text-lg">
                            <Link href={"/blog/" + post.slug}>{post.title}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </DefaultLayout>
    );
}
