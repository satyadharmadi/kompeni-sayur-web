"use client";
import { Languages } from "lucide-react";
import { useLanguage } from "./language-provider";
export function LanguageSwitcher() { const { language, setLanguage } = useLanguage(); return <div className="flex items-center rounded-full border border-stone-200 bg-white p-1 text-xs font-semibold"><Languages size={14} className="ml-2 mr-1 text-forest"/><button onClick={() => setLanguage("id")} className={`rounded-full px-2 py-1 ${language === "id" ? "bg-forest text-white" : "text-stone-500"}`}>ID</button><button onClick={() => setLanguage("en")} className={`rounded-full px-2 py-1 ${language === "en" ? "bg-forest text-white" : "text-stone-500"}`}>EN</button></div>; }
