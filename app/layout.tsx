import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Outfit, Roboto, Archivo_Black } from "next/font/google";
import ResponsiveNav from "@/components/home/navbar/responsivenav";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const archivo_black = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo-black-regular",
  display: "swap",
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sadiki Bau",
  description: "Präzise bauen. Mit Leidenschaft renovieren.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(
        roboto.variable,
        outfit.variable,
        archivo_black.variable
      )}
    >
      <body>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
