import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Handwerk Gronau – Montage & Handwerkservice",
  description: "Professionelle Küchenmontage, Möbelmontage & Handwerksarbeiten für Gronau und Umgebung",
  keywords: "Montage, Handwerk, Küchenmontage, Möbelmontage, Reparaturen, Gronau",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
