import fs from 'fs';
import Link from 'next/link';

export default function Home() {
    const slugs = fs.readdirSync('posts').map((filename) => filename.replace('.md', ''));

    return (
        <div className="flex flex-col gap-y-20">
            <div>
                <h1 className="text-center text-5xl">Oskars Website</h1>
                <h3 className="text-center text-1xl mt-1">
                    My small little corner of the internet.
                </h3>
            </div>
            <div>
                <h2 className="text-4xl">Blog</h2>
                <div>
                    {slugs.map((slug: string) => {
                        return (
                            <div key={slug} className="capitalize text-lg">
                                <Link href={'/blog/' + slug}>{slug}</Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
