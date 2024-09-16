'use client'

import "./globals.css"
import '../public/styles.css';
import Link from "next/link"
import Head from "next/head";
import { usePathname } from "next/navigation"
import { Noto_Serif_Georgian } from "@next/font/google"
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const georgian = Noto_Serif_Georgian({
    subsets: ['latin'],
    weight: ['400', '700']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=B612&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body
                className={'mx-auto min-h-screen bg-stone-50 ' + georgian.className}>
                <nav className="flex gap-3 justify-center no-print mt-3">
                    <Link className={pathname === '/' ? 'text-black' : ''} href="/">
                        Home
                    </Link>
                    <Link className={pathname === '/now' ? 'text-black' : ''} href="/now">
                        Now
                    </Link>
                    <Link className={pathname === '/CV' ? 'text-black' : ''} href="/CV">
                        CV
                    </Link>
                    <Link
                        className={
                            pathname.split('/')[1] === 'blog'
                                ? 'text-black'
                                : '' + ' cursor-default'
                        }
                        href="">
                        Blog
                    </Link>
                </nav>
                <hr className="max-w-prose my-3 mx-auto h-0.5 border-t-0 bg-neutral-200 dark:bg-white/10" />
                <div className="content">{children}</div>
                <footer className="no-print">
                    <h4 className="text-center text-gray-400">
                        contact: <a href="mailto: oskar.cokl@gmail.com">oskar.cokl@gmail.com</a>
                    </h4>
                </footer>
            </body>
        </html>
    );
}
