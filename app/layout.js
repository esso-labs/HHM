import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','600','700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Handwerker & Montage Hundsbuscher – Umzüge und Reinigungen",
  description: "Professionelle Umzüge und Reinigungen mit Handwerker & Montage Hundsbuscher: zuverlässig, termintreu und sauber umgesetzt.",
  keywords: "Handwerker und Montage Hundsbuscher, Umzüge, Reinigungsservice, PV-Reinigung, Fensterreinigung, Entrümpelung",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0765d4',
};

import ThemeProviderWrapper from './components/ThemeProviderWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
