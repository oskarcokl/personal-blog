import fs from "fs";
import Link from "next/link";
import styles from "./index.module.css";

export default function Home() {
    const slugs = fs.readdirSync("posts").map(filename => filename.replace(".md", ""));
    

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
