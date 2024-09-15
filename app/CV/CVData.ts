export interface CVData {
    pfpAlt:         string;
    dateOfBirth:    DateOfBirth;
    nationality:    Nationality;
    contact:        string;
    summary:        Skills;
    skills:         Skills;
    workExperience: WorkExperience;
    download:       string;
}

export interface DateOfBirth {
    text: string;
    date: string;
}

export interface Nationality {
    text:        string;
    nationality: string;
}

export interface Skills {
    title: string;
    text:  string;
}

export interface WorkExperience {
    title: string;
    jobs:  Job[];
}

export interface Job {
    period:              string;
    position:            string;
    company:             string;
    description:         string[];
    individualProjects?: IndividualProjects;
}

export interface IndividualProjects {
    title:    string;
    projects: Project[];
}

export interface Project {
    name:        string;
    description: string;
}
