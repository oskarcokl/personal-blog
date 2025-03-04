"use client";

import { ReactNode, useEffect } from "react";
import CVLayout from "./layout";
import { useRouter } from "next/navigation";


export default function CV(props: { children: ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            router.replace(`/CV/${lang}`);
        } else {
            router.replace("/CV/en");
        }
    }, []);

    return (
        <div>Loading CV...</div>
    );
}