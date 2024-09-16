import { ReactNode } from "react";

export default function DefaultLayout({children}: {children: ReactNode}) {
    return (
        <div className="max-w-prose mx-auto">
            {children}
        </div>
    )
}