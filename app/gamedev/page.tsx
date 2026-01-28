import DefaultLayout from "@/components/DefaultLayout";
import GameCard from "@/components/GameCard";
import { getGamesByCategory, GameCategory } from "@/lib/gamedev";

interface SectionProps {
    title: string;
    category: GameCategory;
}

function Section({ title, category }: SectionProps) {
    const games = getGamesByCategory(category);

    if (games.length === 0) {
        return null;
    }

    return (
        <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {games.map((game) => (
                    <GameCard key={game.slug} game={game} />
                ))}
            </div>
        </section>
    );
}

export default function GameDevPage() {
    const games = getGamesByCategory("games");
    const prototypes = getGamesByCategory("prototypes");
    const gameJams = getGamesByCategory("game-jams");

    const hasContent =
        games.length > 0 || prototypes.length > 0 || gameJams.length > 0;

    return (
        <DefaultLayout>
            <h1 className="text-center text-4xl">Game Development</h1>

            {!hasContent && (
                <p className="text-center text-neutral-500 mt-8">
                    No games yet. Check back soon!
                </p>
            )}

            <Section title="Games" category="games" />
            <Section title="Prototypes" category="prototypes" />
            <Section title="Game Jams" category="game-jams" />
        </DefaultLayout>
    );
}
