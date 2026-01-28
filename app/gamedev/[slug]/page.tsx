import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import DefaultLayout from "@/components/DefaultLayout";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import { getGameBySlug, generateGameParams } from "@/lib/gamedev";

export async function generateStaticParams() {
    return generateGameParams();
}

export default async function GameDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const game = getGameBySlug(slug);

    if (!game) {
        notFound();
    }

    const { metadata, htmlContent } = game;

    return (
        <>
            {metadata.hero && (
                <div className="relative w-full h-64 md:h-80 mb-6">
                    <Image
                        src={metadata.hero}
                        alt={metadata.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <DefaultLayout>
                <div className="mb-6">
                    <Link
                        href="/gamedev"
                        className="text-blue-600 hover:underline"
                    >
                        &larr; Back to GameDev
                    </Link>
                </div>

                <h1 className="text-4xl font-bold">{metadata.title}</h1>

                {metadata.tags && metadata.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {metadata.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-sm px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {metadata.links && Object.keys(metadata.links).length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                        {metadata.links.itch && (
                            <a
                                href={metadata.links.itch}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm px-4 py-2 bg-[#fa5c5c] text-white! rounded hover:bg-[#e04545] transition-colors no-underline"
                            >
                                itch.io
                            </a>
                        )}
                        {metadata.links.steam && (
                            <a
                                href={metadata.links.steam}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm px-4 py-2 bg-[#1b2838] text-white! rounded hover:bg-[#2a475e] transition-colors no-underline"
                            >
                                Steam
                            </a>
                        )}
                        {metadata.links.github && (
                            <a
                                href={metadata.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm px-4 py-2 bg-[#24292e] text-white! rounded hover:bg-[#3a3f44] transition-colors no-underline"
                            >
                                GitHub
                            </a>
                        )}
                        {metadata.links.play && (
                            <a
                                href={metadata.links.play}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm px-4 py-2 bg-green-600 text-white! rounded hover:bg-green-700 transition-colors no-underline"
                            >
                                Play Now
                            </a>
                        )}
                    </div>
                )}

                <article
                    className="mt-8 prose prose-neutral max-w-none"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />

                {metadata.screenshots && metadata.screenshots.length > 0 && (
                    <section className="mt-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            Screenshots
                        </h2>
                        <ScreenshotGallery
                            screenshots={metadata.screenshots}
                            title={metadata.title}
                        />
                    </section>
                )}
            </DefaultLayout>
        </>
    );
}
