import fs from "fs";
import Link from "next/link";

export default function Home() {
    const slugs = fs.readdirSync("posts").map(filename => filename.replace(".md", ""));
    

    return (
        <div className="flex flex-col gap-y-20">
            <div>
                <h1 className="text-center text-6xl">Oskars Website</h1>
                <h3 className="text-center text-2xl mt-1">
                    A web programmer sharing his passions with the world.  
                </h3>
                <h4 className="text-center">contact: <a href="mailto: oskar.cokl@gmail.com">oskar.cokl@gmail.com</a></h4>
            </div>
            <div>
            <h2 className="text-4xl">Blog</h2>
            <div>
                {slugs.map((slug: string) => {
                    return (
                        <div key={slug} className="capitalize text-lg">
                            <Link href={"/blog/" + slug}>
                                {slug}
                            </Link>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}
