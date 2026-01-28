import Link from "next/link";
import Image from "next/image";
import { GameEntry } from "@/lib/gamedev";

interface GameCardProps {
    game: GameEntry;
}

export default function GameCard({ game }: GameCardProps) {
    const { slug, metadata } = game;

    return (
        <Link
            href={`/gamedev/${slug}`}
            className="block group rounded-lg overflow-hidden border border-neutral-200 bg-white hover:shadow-md transition-shadow"
        >
            {metadata.thumbnail && (
                <div className="relative aspect-video bg-neutral-100">
                    <Image
                        src={metadata.thumbnail}
                        alt={metadata.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div className="p-4">
                <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                    {metadata.title}
                </h3>
                <p className="text-sm text-neutral-600 mt-1 line-clamp-2">
                    {metadata.description}
                </p>
                {metadata.tags && metadata.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                        {metadata.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
}
