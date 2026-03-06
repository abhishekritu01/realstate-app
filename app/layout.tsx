import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display, Inter } from 'next/font/google';
import { i } from "framer-motion/client";

const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
import Navbar from "./components/Navbar";
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horizonte Village",
  description: "Experience the pinnacle of luxury living at Horizonte Village, where opulence meets tranquility in the heart of Dubai. Discover our exquisite residences, world-class amenities, and prime location that redefine urban sophistication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${serif.variable} ${sans.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Navbar />
        {children}
      </body>
    </html>
  );
}
