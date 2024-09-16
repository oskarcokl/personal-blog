export interface CVData {
    pfpAlt:         string;
    dateOfBirth:    DateOfBirth;
    nationality:    Nationality;
    contact:        string;
    summary:        Summary;
    workExperience: WorkExperience;
    education:      Education;
    skills:         Skills;
    languageSkills: LanguageSkills;
    download:       string;
}

export interface DateOfBirth {
    text: string;
    date: string;
}

export interface Education {
    title:      string;
    degree:     string;
    school:     string;
    university: string;
    location:   string;
    from:       string;
    to:         string;
}

export interface LanguageSkills {
    title:     string;
    languages: Language[];
}

export interface Language {
    language: string;
    level:    string;
}

export interface Nationality {
    text:        string;
    nationality: string;
}

export interface Skills {
    title:        string;
    expert:       Beginner;
    intermediate: Beginner;
    beginner:     Beginner;
}

export interface Beginner {
    title:  string;
    skills: string[];
}

export interface Summary {
    title: string;
    text:  string;
}

export interface WorkExperience {
    title: string;
    jobs:  Job[];
}

export interface Job {
    period:      string;
    position:    string;
    company:     string;
    description: string[];
}
