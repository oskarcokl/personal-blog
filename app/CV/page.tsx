'use client';

import Image from 'next/image';
import pfp from './pfp.png';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WorkTitle from '@/components/WorkTitle';
import WorkDescription from '@/components/WorkDescription';
import { useEffect, useState } from 'react';
import { CVData } from './CVData';
import CVLayout from '@/components/CVLayout';
import SectionTitle from '@/components/SectionTitle';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function CV() {
    const [language, setLanguage] = useState('en');
    const [cvData, setCvData] = useState<CVData | null>(null);

    const switchLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
    };

    useEffect(() => {
        fetchCVData();
    }, [language]);

    const fetchCVData = async () => {
        const response = await fetch(`/locales/CV/${language}.json`);
        const data: CVData = await response.json();
        setCvData(data);
    };

    return (
        <CVLayout>
            {/* TODO: Style this */}
            {/* <label htmlFor="language">Select language</label>
            <select name="language" value={language} onChange={switchLanguage}>
                <option value="en">English</option>
                <option value="si">Slovenščina</option>
            </select> */}
            <div>
                <div className="flex flex-row justify-evenly items-center flex-wrap">
                    {/* About me part */}
                    <div>
                        <Image
                            src={pfp}
                            alt={cvData?.pfpAlt || ''}
                            width={100}
                            className="rounded-full border-4 border-sky-700 mx-auto"></Image>
                        <h1 className="text-center text-2xl mt-2">Oskar Čokl</h1>
                    </div>
                    <div>
                        <p>
                            <b>{cvData?.dateOfBirth.text}:</b> {cvData?.dateOfBirth.date}
                        </p>
                        <p>
                            <b>{cvData?.nationality.text}:</b> {cvData?.nationality.nationality}
                        </p>
                    </div>
                    <div>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} />{' '}
                            <a href={'mailto: oskar.cokl@gmail.com'}>oskar.cokl@gmail.com</a>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhone} />{' '}
                            <a href={'tel:+38640981375'}>(+386) 40981375</a>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faGithub} />{' '}
                            <a href={'https://github.com/oskarcokl'} target="_blank">
                                GitHub
                            </a>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faLinkedin} />{' '}
                            <a
                                href={'https://www.linkedin.com/in/oskar-%C4%8Dokl-994b9613b/'}
                                target="_blank">
                                Linkedin
                            </a>
                        </p>
                    </div>
                </div>
                <div className="mt-4">
                    <div>
                        <SectionTitle title={cvData?.summary.title} />
                        <p>{cvData?.summary.text}</p>
                    </div>

                    <div>
                        <SectionTitle title={cvData?.workExperience.title} />
                        {cvData?.workExperience.jobs.map((job) => {
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
                    </div>

                    <div>
                        <SectionTitle title={cvData?.education.title} />
                        <p>
                            <b>{cvData?.education.degree}</b> {cvData?.education.school},{' '}
                            {cvData?.education.university}
                        </p>
                        <p>
                            {cvData?.education.location} {cvData?.education.from}-
                            {cvData?.education.from}
                        </p>
                    </div>

                    <div>
                        <SectionTitle title={cvData?.skills.title} />
                        <div>
                            <p>
                                <b>{cvData?.skills.expert.title}:</b>{' '}
                                {cvData?.skills.expert.skills.join(', ')}
                            </p>
                        </div>
                        <div>
                            <p>
                                <b>{cvData?.skills.intermediate.title}:</b>{' '}
                                {cvData?.skills.intermediate.skills.join(', ')}
                            </p>
                        </div>
                        <div>
                            <p>
                                <b>{cvData?.skills.beginner.title}:</b>{' '}
                                {cvData?.skills.beginner.skills.join(', ')}
                            </p>
                        </div>
                    </div>

                    <div>
                        <SectionTitle title={cvData?.languageSkills.title} />
                        {cvData?.languageSkills.languages.map((language) => {
                            return (
                                <p>
                                    <b>{language.language}:</b> {language.level}
                                </p>
                            );
                        })}
                    </div>
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
