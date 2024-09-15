'use client'

import Image from 'next/image'
import { B612 } from '@next/font/google'
import pfp from './pfp.png'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Projects from '@/components/projects'
import WorkTitle from '@/components/workTitle'
import WorkDescription from '@/components/workDescription'
import { useEffect, useState } from 'react'
import { CVData } from './CVData'

const b612 = B612({
    subsets: ['latin'],
    weight: ['400', '700'],
});


export default function CV() {
    const [language, setLanguage] = useState('en')
    const [cvData, setCvData] = useState<CVData|null>(null)

    const switchLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
    }

    useEffect(() => {
        fetchCVData()
    }, [language])

    const fetchCVData = async () => {
        const response = await fetch(`/locales/CV/${language}.json`)
        const data: CVData = await response.json()
        setCvData(data)
    }


    return (
        <div className={b612.className}>
            {/* TODO: Style this */}
            {/* <label htmlFor="language">Select language</label>
            <select name="language" value={language} onChange={switchLanguage}>
                <option value="en">English</option>
                <option value="si">Slovenščina</option>
            </select> */}
            <div>
                <div className="bg-sky-50 pt-4">
                    {/* About me part */}
                    <Image
                        src={pfp}
                        alt={cvData?.pfpAlt || ''}
                        width={150}
                        className="rounded-full border-4 border-blue-900 mx-auto"></Image>
                    <h1 className="text-center text-2xl my-4">Oskar Čokl</h1>
                    <p>
                        <b>{cvData?.dateOfBirth.text}:</b> {cvData?.dateOfBirth.date}
                    </p>
                    <p>
                        <b>{cvData?.nationality.text}:</b> {cvData?.nationality.nationality}
                    </p>
                    <h1 className="text-2xl mt-4 uppercase">{cvData?.contact}</h1>
                    <div className="mt-2">
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} />{' '}
                            <a href={'mailto: oskar.cokl@gmail.com'}>oskar.cokl@gmail.com</a>
                        </p>
                        <p className="mt-1">
                            <FontAwesomeIcon icon={faPhone} />{' '}
                            <a href={'tel:+38640981375'}>(+386) 40981375</a>
                        </p>
                    </div>
                    <h1 className="text-2xl mt-4">{cvData?.summary.title}</h1>
                    <p>
                        {cvData?.summary.text}
                    </p>
                    <h1 className="text-2xl mt-4">{cvData?.skills.title}</h1>
                    <p>
                        {cvData?.skills.text}
                    </p>
                </div>
                <div className="mt-4">
                    <h1 className="text-2xl uppercase">{cvData?.workExperience.title}</h1>
                    {
                        cvData?.workExperience.jobs.map(job => {
                            return (<>
                                <WorkTitle
                                    period={job.period}
                                    position={job.position}
                                    company={job.company}
                                />
                                <WorkDescription
                                    descriptions={job.description}
                                />
                                <Projects projects={job?.individualProjects}/>
                            </>)
                        })
                    }
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
        </div>
    );
}

function downloadPDF() {
    window.print();
}