'use client';

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WorkTitle from '@/components/WorkTitle';
import WorkDescription from '@/components/WorkDescription';
import { useEffect, useState } from 'react';
import { CVData, Job } from './CVData';
import CVLayout from '@/components/CVLayout';
import SectionTitle from '@/components/SectionTitle';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './print.css';
import { data } from '@/public/locales/CV/en';

export default function CV() {
    const [language, setLanguage] = useState('en');
    const [cvData, setCvData] = useState<typeof data>(data);

    const switchLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
    };

    // useEffect(() => {
    //     fetchCVData();
    // }, [language]);

    // const fetchCVData = async () => {
    //     const response = await fetch(`/locales/CV/${language}.json`);
    //     const data: typeof cvData = await response.json();
    //     setCvData(data);
    // };

    return (
        <CVLayout>
            <div className="print:w-full print:m-0">
                <div>
                    <div className=''>
                        <h1 className="text-3xl mt-2">Oskar Čokl</h1>
                    </div>
                    <Contact />
                    <section className="mt-4">
                        <Summary title={cvData?.summary.title || ''} text={cvData?.summary.text || ''} />
                        <Skills title={cvData.skills.title || ''} mainSkills={cvData.skills.mainSkills} otherRelevantSkills={cvData.skills.otherRelevantSkills} workFlowSkills={cvData.skills.workFlowSkills} />
                        <WorkExperience title={cvData?.workExperience.title || ''} jobs={cvData?.workExperience.jobs || []} />
                        <Education title={cvData?.education.title || ''} degree={cvData?.education.degree || ''} school={cvData?.education.school || ''} university={cvData?.education.university || ''} location={cvData?.education.location || ''} from={cvData?.education.from || ''} to={cvData?.education.to || ''} />
                        <LanguageSkills title={cvData?.languageSkills.title || ''} languages={cvData?.languageSkills.languages || []} />
                    </section>
                </div>
            </div>
            <div className="flex justify-end mt-2">
                <button
                    onClick={downloadPDF}
                    className={
                        'no-print bg-sky-500 text-white px-3 py-1 right-0 uppercase rounded-md'
                    }>
                    Download
                </button>
            </div>
        </CVLayout>
    );
}

function downloadPDF() {
    window.print();
}


function Summary(props: { title: string, text: string }) {
    return (
        <section>
            <SectionTitle title={props.title} />
            <p>{props.text}</p>
        </section>
    )
}

function Contact() {
    return (
        <section className="flex flex-row flex-wrap gap-1 mt-3">
            <div className='flex gap-3'>
                <span>
                    <FontAwesomeIcon icon={faEnvelope} />{' '}
                    <a href={'mailto: oskar.cokl@gmail.com'}>oskar.cokl@gmail.com</a>
                </span>
                <span className='no-print'>
                    <FontAwesomeIcon icon={faGithub} />{' '}
                    <a href={'https://github.com/oskarcokl'} target="_blank">
                        GitHub
                    </a>
                </span>
                <span className='no-print'>
                    <FontAwesomeIcon icon={faLinkedin} />{' '}
                    <a
                        href={'https://www.linkedin.com/in/oskar-%C4%8Dokl-994b9613b/'}
                        target="_blank">
                        Linkedin
                    </a>
                </span>
            </div>
        </section>
    )
}

function WorkExperience(props: { title: string, jobs: Job[] }) {
    return (
        <section>
            <SectionTitle title={props.title} />
            {props.jobs.map((job) => {
                return (
                    <>
                        <WorkTitle
                            period={job.period}
                            position={job.position}
                            company={job.company}
                        />
                        <WorkDescription descriptions={job.description} />
                    </>
                );
            })}
        </section>
    )
}

function Education(props: { title: string, degree: string, school: string, university: string, location: string, from: string, to: string }) {
    return (
        <section>
            <SectionTitle title={props.title} />
            <p>
                <b>{props.degree}</b> {props.school},{' '}
                {props.university}
            </p>
            <p>
                {props.location} {props.from}-
                {props.to}
            </p>
        </section>
    )
}

function Skills(props: typeof data.skills) {
    return (
        <section>
            <SectionTitle title={props.title} />
            <div>
                <p>
                    <h3>{props.mainSkills.title}:</h3>{' '}
                    <div>
                        {props.mainSkills.skills.map((skill) => {
                            return (
                                <>{skill.name}</>
                            )
                        })}
                    </div>

                </p>
            </div>
            <div>
                <p>
                    <h3>{props.otherRelevantSkills.title}:</h3>{' '}
                    {/* {props.intermediate.skills.join(', ')} */}
                </p>
            </div>
            <div>
                <p>
                    <h3>{props.workFlowSkills.title}:</h3>{' '}
                    {/* {props.beginner.skills.join(', ')} */}
                </p>
            </div>
        </section>
    )
}

function LanguageSkills(props: { title: string, languages: { language: string, level: string }[] }) {
    return (
        <section>
            <SectionTitle title={props.title} />
            {props.languages.map((language) => {
                return (
                    <p>
                        <b>{language.language}:</b> {language.level}
                    </p>
                );
            })}
        </section>
    )
}