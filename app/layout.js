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
  title: "MMS-Gronau – Umzüge & Reinigungen in Münsterland",
  description: "Professionelle Umzüge & Reinigungen deutschlandweit; lokal im Münsterland – zuverlässig und kompetent.",
  keywords: "Umzüge, Reinigungsservice, Gronau, Münsterland, PV-Reinigung, Fensterreinigung, Entrümpelung",
};

import ThemeProviderWrapper from './components/ThemeProviderWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
