import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import YouTubePlayer from "@/components/YouTubePlayer";
import { siteConfig } from "@/lib/seo-config";
import { generateMusicGroupSchema, generateMusicAlbumSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "THEOSIS - San Diego Death Metal",
  description: "Theosis - Melodic death metal band from San Diego. Stream our latest album 'Overture of the Damned' and catch us live.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateMusicGroupSchema(),
            generateMusicAlbumSchema(),
          ]),
        }}
      />
      {/* Hero Section with Video Above the Fold */}
      <section className="relative py-12 md:py-20 px-2 overflow-hidden">
        {/* Background monster artwork */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15">
          <Image
            src="/images/conductor.png"
            alt=""
            width={1200}
            height={1200}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Background accent */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-crimson rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Logo and Header */}
          <div className="text-center space-y-6 mb-12">
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Theosis Logo"
                width={500}
                height={166}
                className="mx-auto fire-glow max-w-full h-auto"
                priority
              />
            </div>

            <h1 className="font-display text-3xl md:text-5xl text-gold fire-glow">
              Overture of the Damned
            </h1>
            <p className="font-heading text-lg md:text-xl text-bone max-w-2xl mx-auto">
              Listen on <a href="https://open.spotify.com/artist/0dLaSYhBMWeeHBe0ANAyvc?si=bGN0V0s_TYmV8EZI6lUvrg" className="text-brass hover:text-parchment transition-colors">Spotify</a> and <Link href="/music" className="text-brass hover:text-parchment transition-colors">other streaming platforms</Link>
              
            </p>
          </div>

          {/* Featured Video - Above the Fold */}
          <div className="mb-12">
            <YouTubePlayer />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/music" className="btn-primary">
              Listen Now
            </Link>
            <Link
              href="/shows"
              className="px-8 py-3 border-2 border-brass text-brass hover:bg-parchment hover:text-abyss transition-all duration-300 font-heading uppercase tracking-wider"
            >
              Upcoming Shows
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="section-divider" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-5xl text-gold fire-glow">
                Overture
              </h2>
              <h3 className="font-heading text-2xl text-brass">of the Damned</h3>
              <p className="text-bone/90 leading-relaxed font-body">
                Forged in the fires of San Diego in 2022, <strong className="text-gold">THEOSIS</strong> combines
                the brutal precision of melodic death metal with the relentless energy of speed and thrash.
              </p>
              <p className="text-bone/90 leading-relaxed font-body">
                Powerful vocals collide with hard-hitting double bass and harmonized guitar riffs,
                creating a sonic cathedral of darkness and destruction.
              </p>
              <Link href="/band" className="btn-primary inline-block">
                Meet The Band
              </Link>
            </div>

            <div className="relative">
              <div className="gothic-border p-8 bg-charcoal backdrop-blur-sm">
                <Image
                  src="/images/organist.png"
                  alt="The Organist"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section className="py-20 px-4 bg-charcoal/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="section-divider" />
          <h2 className="font-display text-5xl text-gold fire-glow mb-8">
            LATEST RELEASE
          </h2>
          <div className="max-w-2xl mx-auto card p-8 space-y-6">
            <h3 className="font-heading text-3xl text-brass">
              Overture of the Damned
            </h3>
            <p className="text-bone/80 font-body">
              Released May 2022 via Clarity Recordings
            </p>
            <p className="text-bone/90 font-body leading-relaxed">
              Recorded at Clarity Recordings in San Diego by Sean Tolle.
              A unique melodic death metal inspired by classic metal music.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link href="/music" className="btn-primary">
                Streaming Links
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="font-display text-6xl text-gold fire-glow">
            ENTER THE CATHEDRAL
          </h2>
          <p className="font-heading text-xl text-bone/90">
            Join us in the darkness. Follow our journey into the abyss.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
