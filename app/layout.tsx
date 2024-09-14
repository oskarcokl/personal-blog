'use client'

import "./globals.css"
import '../public/styles.css';
import Link from "next/link"
import Head from "next/head";
import { usePathname } from "next/navigation"
import { Playfair_Display} from "@next/font/google"

    const playfiar = Playfair_Display({
        subsets: ['latin-ext'],
        weight: ['400', '700'],
    });

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
            <body className={"max-w-prose mx-auto mt-5 h-screen bg-stone-50 " + playfiar.className}>
                <nav className="flex gap-3 justify-center">
                    <Link className={pathname === '/' ? 'text-black' : ''} href="/">
                        Home
                    </Link>
                    <Link className={pathname === '/now' ? 'text-black' : ''} href="/now">
                        Now
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
                <hr className="my-3 h-0.5 border-t-0 bg-neutral-200 dark:bg-white/10" />
                <div className="content h-5/6">{children}</div>
                <footer>
                    <h4 className="text-center text-gray-400">
                        contact: <a href="mailto: oskar.cokl@gmail.com">oskar.cokl@gmail.com</a>
                    </h4>
                </footer>
            </body>
        </html>
    );
}
