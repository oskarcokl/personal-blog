export default function WorkTitle({ period, position, company }: { period: string, position: string, company: string }) {
    return (
        <div className="">
            <h1 className="text-base">
                <b>{position}</b> {company}
            </h1>
            <h3 className="text-sm">{period}</h3>
        </div>
    );
}