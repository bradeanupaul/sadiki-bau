import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import Script from "next/script";

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
      <head>
        <Script
          id="voiceflow-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '6829e93909bde9328a6077bf' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    voice: {
                      url: "https://runtime-api.voiceflow.com"
                    }
                  });

                  // Auto-open chat după ce s-a încărcat
                  setTimeout(() => {
                    if (window.voiceflow && window.voiceflow.chat) {
                      window.voiceflow.chat.open();
                    }
                  }, 500);
                };
                v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
                v.type = "text/javascript";
                s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `,
          }}
        />
      </head>
      <body>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
