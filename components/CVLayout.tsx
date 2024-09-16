import { ReactNode } from "react";


export default function CVLayout({children}: {children: ReactNode}) {
    return (
        <div className="mx-auto max-w-3xl">{children}</div>
    )
}