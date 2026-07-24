import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
export const metadata: Metadata = { title: { default: "Kompeni Sayur | Eat Wisely, Live Healthy", template: "%s | Kompeni Sayur" }, description: "Sayuran hidroponik premium segar dari Tangerang, Indonesia.", metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"), openGraph: { type: "website", locale: "id_ID", siteName: "Kompeni Sayur" }, twitter: { card: "summary_large_image" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="id"><body><LanguageProvider>{children}</LanguageProvider></body></html>; }
