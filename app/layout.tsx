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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
          }}
        />
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
