import type { Metadata } from "next";
import { Lato, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { getSiteContent } from "@/content";

import "./globals.css";

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { settings } = await getSiteContent();
  return {
    title: settings.siteTitle,
    description: settings.siteDescription,
    // Falls back to app/favicon.ico when no favicon is set in the Studio.
    ...(settings.favicon && { icons: { icon: settings.favicon.src } }),
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      className={`${lato.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        {children}
      </body>
    </html>
  );
}
