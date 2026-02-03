import fs from "fs";
import matter from "gray-matter";
import {marked} from "marked";
import path from "path";
import Link from "next/link";
import DefaultLayout from "@/components/DefaultLayout";


export async function generateStaticParams() {
    const posts = fs.readdirSync("posts").map((postName) => ({
        slug: postName.replace(".md", ""),
    }));

    return posts
}


export default async function Page({params} : {params: Promise<{slug: string}>}) {
    const { slug } = await params;
    const post = fs.readFileSync(path.join("posts", slug + ".md"));
    const parsedContents = matter(post);
    const html = marked.parse(parsedContents.content);
    const created = parsedContents.data?.created
        ? new Date(parsedContents.data.created).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : null;

    const markup = { __html: html };

    return (
        <>
            <DefaultLayout>
                <div>
                    <h1 className="text-center text-4xl">{parsedContents.data.title}</h1>
                    {created && (
                        <p className="text-center text-sm italic text-gray-500 mt-1">
                            Created {created}
                        </p>
                    )}
                    <div className="mt-5 prose prose-neutral max-w-none" dangerouslySetInnerHTML={markup} />
                </div>
                <div className="flex flex-row justify-between mt-10">
                    <div>
                        <Link href="/">Back home</Link>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}
