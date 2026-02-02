import type { Metadata } from "next";
import { UnifrakturCook, Grenze_Gotisch, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import AtmosphericParticles from "@/components/AtmosphericParticles";
import Loader from "@/components/Loader";
import ParallaxBackground from "@/components/ParallaxBackground";
import { defaultMetadata } from "@/lib/seo-config";
import { generateWebsiteSchema } from "@/lib/structured-data";

// Font configurations
const unifraktur = UnifrakturCook({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-unifraktur",
  display: "swap",
});

const grenze = Grenze_Gotisch({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-grenze",
  display: "swap",
});

const roboto = Roboto_Serif({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${unifraktur.variable} ${grenze.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Theosis" />
        <link rel="manifest" href="/favicon.ico/site.webmanifest" />
        <meta name="google-site-verification" content="67rHj0EaJX7OOkLoeDxYmhJnaBqtA4aS5QjRyugPfz8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
          }}
        />
      </head>
      <body>
        <Loader />
        <ParallaxBackground />
        <AtmosphericParticles />
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
