'use client';

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function CVLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [lang, setLang] = useState("en");

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    if (selectedLanguage === "en") {
      localStorage.setItem("lang", "en");
      router.push("/CV/en");
      setLang("en");
    } else if (selectedLanguage === "sl") {
      localStorage.setItem("lang", "sl");
      router.push("/CV/sl");
      setLang("sl");
    }
  }

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      setLang(lang);
    }
  }, []);

  return (
    <div className="text-sm mx-auto max-w-3xl print:m-0 print:max-w-none">
      <div className="flex justify-end mb-4 no-print">
        <select className="bg-transparent border-none" onChange={onSelectChange} value={lang}>
          <option value="en">English</option>
          <option value="sl">Slovenian</option>
        </select>
      </div>
      {children}
    </div>
  )
}