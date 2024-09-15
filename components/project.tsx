export default function Project({ name, description }: { name: string; description: string }) {
    return (
        <div className="mt-3">
            <h3 className="text-lg"><b>{name}</b></h3>
            <p>{description}</p>
        </div>
    );
}