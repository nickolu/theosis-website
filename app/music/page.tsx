import type { Metadata } from "next";
import Image from "next/image";
import DefaultPage from "@/components/templates/page/default";
import PageSection from "@/components/ui/page-section";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Music & Discography",
  description: "Listen to THEOSIS music on Spotify, Apple Music, YouTube Music, and Bandcamp. Stream our latest album 'Overture of the Damned' now.",
  alternates: {
    canonical: `${siteConfig.url}/music`,
  },
  openGraph: {
    title: "Music & Discography - THEOSIS",
    description: "Stream THEOSIS on all platforms - Spotify, Apple Music, YouTube Music, and Bandcamp",
    url: `${siteConfig.url}/music`,
    images: [
      {
        url: `${siteConfig.url}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: "THEOSIS Music",
      },
    ],
  },
};

const streamingLinks = [
  { name: "Spotify", url: "https://open.spotify.com/artist/0dLaSYhBMWeeHBe0ANAyvc?si=bGN0V0s_TYmV8EZI6lUvrg", icon: "web.png" },
  { name: "Apple Music", url: "https://music.apple.com/us/artist/theosis/1811099121", icon: "tree-and-moon.png" },
  { name: "Bandcamp", url: "https://theosis.bandcamp.com/", icon: "chalice.png" },
  { name: "YouTube Music", url: "https://music.youtube.com/channel/UCW7v4lqhyLAAofSHNqHghmg?si=Ql-O_SMqIcOsWN7p", icon: "video-play.png" },
  { name: "Amazon Music", url: "https://music.amazon.com/artists/B00MMMNZ0Q/theosis", icon: "headphones.png" },
];

const tracks = [
  { name: "Overture of the Damned", duration: "05:47" },
  { name: "Deadlights", duration: "06:18" },
  { name: "Carrion Eyes", duration: "05:56" },
  { name: "The Insatiably Wretched", duration: "05:15" },
  { name: "Tyrants of Salvation", duration: "06:11" },
  { name: "Strings of Torment", duration: "04:29" },
  { name: "Sever the Bloodline", duration: "03:30" },
  { name: "Architects of Sapience: Pt 1", duration: "08:43" },
  { name: "Interludio de fuego", duration: "01:50", instrumental: true },
  { name: "Architects of Sapience: Pt 2", duration: "06:59" },
];

export default function MusicPage() {
  return (
    <DefaultPage>
      {/* Hero Section */}
      <PageSection>
        {/* Background monster artwork */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
          <Image
            src="/images/demon.png"
            alt=""
            width={1200}
            height={1200}
            className="object-contain w-full h-full"
          />
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl text-gold fire-glow mb-6">
            DISCOGRAPHY
          </h1>
          <p className="font-heading text-xl md:text-2xl text-bone/90">
            The sonic chronicles of darkness and destruction
          </p>
          <div className="section-divider" />
        </div>
      </PageSection>

      {/* Featured Album Section */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center card p-8 md:p-12">
            {/* Album Art Placeholder */}
            <div className="relative aspect-square gothic-border overflow-hidden bg-gradient-to-br from-moss via-crimson/20 to-abyss">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/demon.png"
                  alt="Overture of the Damned"
                  width={500}
                  height={500}
                  className="object-contain opacity-60"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h2 className="font-display text-4xl text-gold fire-glow">
                  Overture
                </h2>
                <p className="font-heading text-2xl text-brass">of the Damned</p>
              </div>
            </div>

            {/* Album Details */}
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-3xl text-gold mb-2">
                  Overture of the Damned
                </h3>
                <p className="text-bone/70 font-heading uppercase tracking-wider">
                  Full-Length Album • May 2022
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-bone/90 font-body">
                  <strong className="text-brass">Recorded at:</strong> Clarity Recordings
                </p>
                <p className="text-bone/90 font-body">
                  <strong className="text-brass">Mixed & Mastered by:</strong> Sean Tolle
                </p>
              </div>

              <p className="text-bone/80 font-body leading-relaxed">
                The second soul shattering record from THEOSIS&apos;s. A unique melodic death metal inspired by classic metal music. 
              </p>

              {/* Track List */}
              <div className="space-y-3">
                <h4 className="font-heading text-xl text-brass uppercase tracking-wider">
                  Track Listing
                </h4>
                <div className="space-y-2">
                  {tracks.map((track, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-bone/80 hover:text-parchment transition-colors group"
                    >
                      <span className="font-heading text-brass group-hover:text-parchment w-8">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-body flex-1">{track.name}</span>
                      {track.instrumental && (
                        <span className="text-bone/50 text-sm italic">instrumental</span>
                      )}
                      <span className="font-heading text-bone/60 text-sm">{track.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Streaming Links Section */}
      <PageSection>
        <div className="max-w-4xl mx-auto text-center">
          <div className="section-divider" />
          <h2 className="font-display text-5xl text-gold fire-glow mb-8">
            STREAM NOW
          </h2>
          <p className="font-heading text-xl text-bone/80 mb-12">
            Available on all major streaming platforms
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {streamingLinks.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform flex justify-center">
                  <Image
                    src={`/images/icons/64/${platform.icon}`}
                    alt="Stream"
                    width={48}
                    height={48}
                    className="opacity-80"
                  />
                </div>
                <h3 className="font-heading text-xl text-brass group-hover:text-parchment transition-colors">
                  {platform.name}
                </h3>
              </a>
            ))}
          </div>

          <p className="text-bone/50 text-sm font-body mt-8">
            Links can be updated with actual streaming URLs
          </p>
        </div>
      </PageSection>

      {/* Singles Section */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <div className="section-divider" />
          <h2 className="font-display text-5xl text-center text-gold fire-glow mb-12">
            SINGLES
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bury Your Dead Single */}
            <div className="card p-8 space-y-4">
              <div className="aspect-square bg-gradient-to-br from-crimson/20 to-abyss gothic-border flex items-center justify-center mb-4">
                <Image
                  src="/images/zombies-xl.png"
                  alt="Bury Your Dead"
                  width={300}
                  height={300}
                  className="object-contain opacity-70"
                />
              </div>
              <h3 className="font-heading text-2xl text-brass">Bury Your Dead</h3>
              <p className="text-bone/70 font-heading uppercase tracking-wider text-sm">
                Single • December 2013
              </p>
              <p className="text-bone/80 font-body">
                An early glimpse into the dark world of THEOSIS, showcasing the band&apos;s
                raw energy and technical prowess.
              </p>
            </div>

            {/* Placeholder for future releases */}
            <div className="card p-8 space-y-4 border-dashed">
              <div className="aspect-square bg-gradient-to-br from-moss/20 to-abyss gothic-border flex items-center justify-center mb-4">
                <div className="text-center space-y-4">
                  <p className="font-display text-4xl text-brass opacity-50">?</p>
                  <p className="font-heading text-bone/50">More coming soon...</p>
                </div>
              </div>
              <h3 className="font-heading text-2xl text-bone/50">Future Releases</h3>
              <p className="text-bone/50 font-body">
                The ritual continues. Stay tuned for new material from the infernal cathedral.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Call to Action */}
      <PageSection>
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-display text-5xl text-gold fire-glow">
            EXPERIENCE LIVE
          </h2>
          <p className="font-heading text-xl text-bone/80">
            Witness the power of THEOSIS in person
          </p>
          <a href="/shows" className="btn-primary inline-block">
            View Tour Dates
          </a>
        </div>
      </PageSection>
    </DefaultPage>
  );
}
