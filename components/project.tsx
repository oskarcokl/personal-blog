import type { Project } from "@/app/CV/CVData";

export default function Project({ name, description }: Project) {
    return (
        <div className="mt-3">
            <h3 className="text-lg"><b>{name}</b></h3>
            <p>{description}</p>
        </div>
    );
}