export default function WorkTitle({period, position, company}: {period: string, position: string, company: string}) {
    return (
        <div>
            <h2 className="text-xl uppercase mt-1">{period}</h2>
            <h2 className="text-xl mt-1">
                <b>{position}</b> {company}
            </h2>
        </div>
    );
}