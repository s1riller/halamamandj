
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Основная информация
  metadataBase: new URL('https://ОльхонЭкспресс.ru'),
  title: {
    template: '%s | ОльхонЭкспресс Travel',
    default: 'ОльхонЭкспресс - Забронируй билет на автобус на Байкал',
  },
  description:
    'Онлайн бронирование билетов на автобусные рейсы до Байкала, Ольхона и Листвянки. Низкие цены, безопасная оплата, круглосуточная поддержка.',

  // Favicons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  // Canonicals (для дублей)
  alternates: {
    canonical: 'https://ОльхонЭкспресс.ru',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  // Verification
  verification: {
    google: 'verification-code-from-google', // Получи из Google Search Console
    yandex: 'verification-code-from-yandex', // Получи из Yandex Webmaster
  },
};

// Note: Metadata only works in Server Components
// This is configured in next.config.ts

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="overflow-x-hidden">
      <head>
        {/* Preconnect для улучшения производительности */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch для внешних ресурсов */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={`${geistSans.className} antialiased bg-gray-50 text-gray-900 overflow-x-hidden`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}