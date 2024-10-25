export default function WorkDescription({descriptions}: {descriptions: string[]}) {
    return (
        <div>
            <ul className="list-disc list-inside mt-1">
                {descriptions.map(description =>
                    <li key={description}>
                        {description}
                    </li>
                )}
            </ul>
        </div>
    )
}