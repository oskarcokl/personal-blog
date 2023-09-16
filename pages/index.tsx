import fs from "fs";
import Link from "next/link";
import styles from "./index.module.css";

function Home({ slugs }: {[key:string]: string[]}) {
    return (
        <>
            <h1>Oskars Website</h1>
            <h2>Blog</h2>
            No blogs yet :)
            <div>
                {slugs.map((slug: string) => {
                    return (
                        <div key={slug} className={styles.blogListItem}>
                            <Link href={"/blog/" + slug}>
                                {slug}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export async function  getStaticProps() {
    const files = fs.readdirSync("posts");
    const slugs = files.map(filename => filename.replace(".md", ""));

    return {
        props: {
            slugs
        }
    }
}


export default Home;
