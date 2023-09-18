import fs from "fs";
import matter from "gray-matter";
import {marked} from "marked";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import styles from "./blog.module.css";


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
            <Head>
                <title>{parsedContents.data.title}</title>
            </Head>
            <div>
                <h1>{parsedContents.data.title}</h1>
                <div dangerouslySetInnerHTML={markup} />
            </div>
            <Link href="/" className={styles.homeButton}>
                Back home
            </Link>
        </>
    );
}
