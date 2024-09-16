import { ReactNode } from "react";


export default function CVLayout({children}: {children: ReactNode}) {
    return (
        <div className="mx-10">{children}</div>
    )
}