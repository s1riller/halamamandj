import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import "./globals.css";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Туры на Байкал",
    description: "Поиск и бронирование туров на Байкал",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 `}
            >

                <Navbar />

                <main>

                    {children}

                </main>
                <Footer />
            </body>
        </html>
    );
}
