import fs from "fs";
import Link from "next/link";

function Home({ slugs }: {[key:string]: string[]}) {
    return <div>
        slugs:
        {slugs.map((slug: string) => {
            return (
                <div key={slug}>
                    <Link href={"/blog/" + slug}>
                        {"/blog/" + slug}
                    </Link>
                </div>
            )
        })}
    </div>
}

export async function  getStaticProps() {
    const files = fs.readdirSync("posts");
    console.log("Files:", files);

    const slugs = files.map(filename => filename.replace(".md", ""));
    console.log("Slugs:", slugs);

    return {
        props: {
            slugs
        }
    }
}


export default Home;
