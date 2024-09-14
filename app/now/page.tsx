
import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>Now</title>
            </Head>
            <div className="flex flex-col gap-3">
                <div>
                    <h1 className="text-3xl">What I'm doing</h1>
                    <p>
                        Currently I'm thinking about starting an online marketplace where people can
                        sell and buy used clothes.
                        <br />
                        Also I'm working on my personal website. Adding some mor content and adding a CV.
                    </p>
                </div>
                <div>
                    <h1 className="text-3xl">What I'm reading</h1>
                    <p>I'm mostly focusing on technical and learning books right now</p>
                    <ul className="list-disc list-inside">
                        <li>Let's Go</li>
                        <li>Zero to Sold: How to Start, Run and Sell a Bootstrapped business</li>
                        <li>Start With Why</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-3xl">What I'm learning</h1>
                    <p>
                        Currently learning about Go on the backend and React and Next.js on the
                        frontend
                    </p>
                </div>
            </div>
        </>
    );
}