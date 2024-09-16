import fs from "fs";
import matter from "gray-matter";
import {marked} from "marked";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import DefaultLayout from "@/components/DefaultLayout";


export async function generateStaticParams() {
    const posts = fs.readdirSync("posts").map((postName) => ({
        slug: postName.replace(".md", ""),
    }));

    return posts
}


export default function Page({params} : {params: {slug: string}}) {
    const post = fs.readFileSync(path.join("posts", params.slug + ".md"));
    const parsedContents = matter(post);
    const html = marked.parse(parsedContents.content);

    const markup = { __html: html };

    return (
        <>
            <DefaultLayout>
                <div>
                    <h1 className="text-center text-4xl">{parsedContents.data.title}</h1>
                    <div className="mt-5" dangerouslySetInnerHTML={markup} />
                </div>
                <div className="flex flex-row justify-between mt-10">
                    <div>
                        <Link href="/">Back home</Link>
                    </div>
                    <div>
                        <Link href="mailto: oskar.cokl@gmail.com">oskar.cokl@gmail.com</Link>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}
