export default function SectionTitle({ title }: { title: string | undefined }) {
    return (
        <h2 className="text-lg text-sky-600">{title}</h2>
    )
}