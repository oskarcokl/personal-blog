import DefaultLayout from '@/components/DefaultLayout';
import GameCard from '@/components/GameCard';
import { getAllGames } from '@/lib/gamedev';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Home() {
    const posts = fs
        .readdirSync('posts')
        .filter((filename) => filename.endsWith('.md'))
        .map((filename) => {
            const slug = filename.replace('.md', '');
            const fileContent = fs.readFileSync(`posts/${filename}`, 'utf-8');
            const parsed = matter(fileContent);

            return {
                slug,
                title: (parsed.data?.title as string) ?? slug,
            };
        });
    const recentGames = getAllGames().slice(0, 3);

    return (
        <DefaultLayout>
            <div className="flex flex-col gap-y-20">
                <div>
                    <h1 className="text-center text-5xl">Oskar Čokl</h1>
                    <h3 className="text-center text-1xl mt-1">My little corner of the internet.</h3>
                </div>
                <div>
                    <h2 className="text-4xl">Blog</h2>
                    <div>
                        {posts.map((post) => (
                            <div key={post.slug} className="text-lg">
                                <Link href={'/blog/' + post.slug}>{post.title}</Link>
                            </div>
                        ))}
                    </div>
                </div>
                {recentGames.length > 0 && (
                    <div>
                        <div className="flex justify-between items-baseline mb-3">
                            <h2 className="text-4xl">Game Development</h2>
                            <Link href="/gamedev" className="text-blue-600 hover:underline">
                                View all
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {recentGames.map((game) => (
                                <GameCard key={game.slug} game={game} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </DefaultLayout>
    );
}
