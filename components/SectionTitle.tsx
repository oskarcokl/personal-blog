export default function SectionTitle({title}: {title: string|undefined}) {
    return (
        <h1 className="text-2xl text-sky-600">{title}</h1>
    )
}