import type { Metadata } from "next";
import { UnifrakturCook, Grenze_Gotisch, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import AtmosphericParticles from "@/components/AtmosphericParticles";
import Loader from "@/components/Loader";
import ParallaxBackground from "@/components/ParallaxBackground";

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

export const metadata: Metadata = {
  title: "THEOSIS - San Diego Death Metal",
  description: "Theosis - Melodic death metal band from San Diego. Combining speed, melodic, and thrash metal with powerful vocals and harmonized guitar riffs.",
  keywords: ["Theosis", "death metal", "San Diego", "metal band", "Overture of the Damned"],
  openGraph: {
    title: "THEOSIS - San Diego Death Metal",
    description: "Melodic death metal from the depths of San Diego",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${unifraktur.variable} ${grenze.variable} ${roboto.variable}`}>
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
