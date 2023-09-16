import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {marked} from "marked";
import Head from "next/head";
import Link from "next/link";
import styles from "./[slug].module.css";


interface postParams {
    contents: string,
    data: {
        title: string
    }
}

function Post({contents, data}: postParams) {
    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>
            <div>
                <h1>{data.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: contents }} />
            </div>
            <Link href="/" className={styles.homeButton}>
                Back home
            </Link>
        </>
    );
};

export async function getStaticPaths() {
    const files = fs.readdirSync("posts");
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", ""),
        }
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}: {[key:string]: {[key:string]: string}}) {
    const contents = fs.readFileSync(path.join("posts", slug + ".md")).toString();
    const parsedContents = matter(contents);

    const htmlString = marked.parse(parsedContents.content);

    return {
        props: {
            contents: htmlString,
            data: parsedContents.data
        }
    }
}

export default Post;
