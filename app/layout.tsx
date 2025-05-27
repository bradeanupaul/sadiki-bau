import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import {
  Outfit,
  Roboto,
  Archivo_Black,
  Oswald,
} from "next/font/google";
import ResponsiveNav from "@/components/home/navbar/responsivenav";

// Font setups
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

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
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
      lang="de"
      className={clsx(
        roboto.variable,
        outfit.variable,
        archivo_black.variable,
        oswald.variable,
      )}
    >
      <body>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
