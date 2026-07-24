"use client";
import { createContext, useContext, useEffect, useState } from "react";
type Language = "id" | "en";
const LanguageContext = createContext<{ language: Language; setLanguage: (value: Language) => void }>({ language: "id", setLanguage: () => undefined });
export function LanguageProvider({ children }: { children: React.ReactNode }) { const [language, setLanguage] = useState<Language>("id"); useEffect(() => { const saved = localStorage.getItem("kompeni-language") as Language | null; if (saved === "en" || saved === "id") setLanguage(saved); }, []); useEffect(() => { document.documentElement.lang = language; localStorage.setItem("kompeni-language", language); }, [language]); return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>; }
export const useLanguage = () => useContext(LanguageContext);
export const useText = () => { const { language } = useLanguage(); return (id: string, en: string) => language === "id" ? id : en; };
