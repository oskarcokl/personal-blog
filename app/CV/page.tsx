'use client'

import Image from 'next/image'
import { B612 } from '@next/font/google'
import pfp from './pfp.png'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Project from '@/components/project'
import WorkTitle from '@/components/workTitle'
import WorkDescription from '@/components/workDescription'



    const b612 = B612({
        subsets: ['latin'],
        weight: ['400', '700'],
    });

export default function CV() {
    return (
        <div className={b612.className}>
            <div>
                <div className="bg-sky-50 pt-4">
                    {/* About me part */}
                    <Image
                        src={pfp}
                        alt="Oskars picture"
                        width={150}
                        className="rounded-full border-4 border-blue-900 mx-auto"></Image>
                    <h1 className="text-center text-2xl my-4">Oskar Čokl</h1>
                    <p>
                        <b>Date of birth:</b> 21. 5. 1997
                    </p>
                    <p>
                        <b>Nationality:</b> Slovenian
                    </p>
                    <h1 className="text-2xl mt-4 uppercase">Contact</h1>
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
                    <h1 className="text-2xl mt-4">Summary</h1>
                    <p>
                        I am a web developer with a passion for web technologies. I love solving
                        peoples problems with software solutions. I'm always willing to learn,
                        highly motivated, self driven and persistent. I have solid analytical,
                        communicational, leadership and problem solving skills that I have developed
                        through my work experience and college education.
                    </p>
                    <h1 className="text-2xl mt-4">Skills</h1>
                    <p>
                        Skilled with javascript, typescript and python, proficient in vue, node.js,
                        HTML5, css. Good knowledge of SQL, PowerBI, design patterns. Adapt at
                        Next.js, Go and PHP.
                    </p>
                </div>
                <div className="mt-4">
                    <h1 className="text-2xl uppercase">Work experience</h1>
                    <div>
                        <WorkTitle
                            period="1. 10. 2021 - current"
                            position="Software developer"
                            company="iPROM d.o.o."
                        />
                        <WorkDescription
                            descriptions={[
                                'Extensive frontend work on infrastructure for serving ads, working on features for AdTech platform. Data visualisation using PowerBI, data analysis, extensive debugging through the entire stack and support work for coworkers and clients, worked with and created API endpoints, cookies, javascript/vue.',
                                'Version control (gitlab/git), setting up CI/CD pipelines, project management, maintenance and collaboration with different departments',
                                'Onboarding coworkers, mentoring work, public speaking on internal meetings, collaborating with clients to integrate software solutions and alleviate any issues.',
                            ]}
                        />
                        <h2 className="text-xl mt-3">
                            <b>Individual projects</b>
                        </h2>
                        <Project
                            name="Debugger"
                            description="Took ownership of internal tool used for debugging the serving of ads. Gave the product new life and added highly request features."
                        />
                        <Project
                            name="OpenRTB interstitial ad serving"
                            description="
                            Serving interstitials ads according to OpenRTB specification. Was a
                            technical challenge because the specification is sparse and publishers
                            don't adhere to it.
                            "
                        />
                        <Project
                            name="Managing extensive infrastructure upgrade"
                            description="
                            Managing the transition from old software that was no longer being
                            maintained to newer software solutions that were actively being worked
                            on.
                            "
                        />
                        <Project
                            name="Prebid wrapper for GAM"
                            description="
                            Developed a custom solution to integrate Prebid with Google Ad Manager
                            (GAM).
                            "
                        />
                        <Project
                            name="Integrating ad data with CRM"
                            description="
                            Developed infrastructure to send customer data gathered from ads to
                            clients CRM system.
                            "
                        />
                        <Project
                            name="User Targeting with Machine Learning"
                            description="
                            Developed a model for user targeting. Set up the entire architecture for
                            data acquisition, processing and model training.
                            "
                        />
                    </div>
                    <div>
                        <WorkTitle
                            period="1. 10. 2020 - 15. 10. 2020"
                            position="Technical Support"
                            company="University of Ljubljana, Faculty of Arts"
                        />
                        <WorkDescription
                            descriptions={[
                                'Technical assistance with remote computer use.',
                                'Technical support for classroom computer use.',
                                'Technical assistance with audio and other equipment in the lecture hall.',
                            ]}
                        />
                    </div>
                    <div>
                        <WorkTitle
                            period="13. 2. 2020 - 14. 2. 2020"
                            position="Event Organization Assistance"
                            company="University of Ljubljana, Faculty of Computer and Information Science"
                        />
                        <WorkDescription
                            descriptions={[
                                'Presentation of Microsoft HoloLens glasses to visitors on the information day.',
                                'General assistance during the information day.',
                            ]}
                        />
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
        </div>
    );
}

function downloadPDF() {
    window.print();
}