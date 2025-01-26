export default function WorkTitle({ period, position, company }: { period: string, position: string, company: string }) {
    return (
        <div className="mt-1">
            <h1 className="text-lg">
                <b>{position}</b> {company}
            </h1>
            <h3 className="text-md">{period}</h3>
        </div>
    );
}