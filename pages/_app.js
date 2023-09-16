import '../public/styles.css';
import Head from "next/head";
//import { B612 } from "next/font/google";
//
//const b612 = B612({
//    subsets: ["latin"],
//    variable: "--font-b612",
//    display: "swap",
//    weight: "400"
//});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=B612&display=swap" rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
