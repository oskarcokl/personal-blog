import { IndividualProjects } from "../app/CV/CVData"
import  Project  from "./project"
import React from "react";

export default function Projects({ projects }: { projects: IndividualProjects | undefined }) {
    if (projects) {
        return projects.projects.map((project) => {
            return <Project name={project.name} description={project.description} />
        });
    } else {
        return <></>
    }
}