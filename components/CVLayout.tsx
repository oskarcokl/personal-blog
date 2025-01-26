import { ReactNode } from "react";

export default function CVLayout({ children }: { children: ReactNode }) {
    return (
        <div className="text-sm mx-auto max-w-3xl print:m-0 print:max-w-none">{children}</div>
    )
}