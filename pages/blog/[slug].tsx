import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {marked} from "marked";
import Head from "next/head";

function Post({contents, data}: {[key:string]: string}) {
    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>
            <div>
                <h1>{data.title}</h1>
                Contents bellow
                <div dangerouslySetInnerHTML={{ __html: contents }} />
            </div>
        </>
    );
};

export async function getStaticPaths() {
    const files = fs.readdirSync("posts");
    console.log("Files:", files);
     
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", ""),
        }
    }));

    console.log("Paths:", paths);

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}: {[key:string]: {[key:string]: string}}) {
    const contents = fs.readFileSync(path.join("posts", slug + ".md")).toString();

    const parsedContents = matter(contents);

    console.log("Contents", contents);
    console.log("Parsed contents", parsedContents );

    const htmlString = marked.parse(parsedContents.content);

    return {
        props: {
            contents: htmlString,
            data: parsedContents.data
        }
    }
}

export default Post;
