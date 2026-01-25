import "./globals.css"
import '../public/styles.css';
import { Noto_Serif_Georgian, Lora } from "next/font/google"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navigation from "@/components/Navigation";

config.autoAddCss = false;

const georgian = Noto_Serif_Georgian({
    subsets: ['latin'],
    weight: ['400', '700']
})

const lora = Lora({
    subsets: ['latin'],
    weight: ['400', '700'],
})

export const metadata = {
    title: "Oskar's Website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={'print:m-0 print:p-0 mx-auto min-h-screen bg-stone-50 ' + lora.className + ' ' + georgian.className}>
                <Navigation />
                <hr className="max-w-prose my-3 mx-auto h-0.5 border-t-0 bg-neutral-200 dark:bg-white/10 no-print" />
                <main className="print:m-0 print:p-0">{children}</main>
                <footer className="no-print">
                    <h4 className="text-center text-gray-400">
                        contact: <a href="mailto: oskar.cokl@gmail.com">oskar.cokl@gmail.com</a>
                    </h4>
                </footer>
            </body>
        </html>
    );
}
