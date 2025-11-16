import Image from "next/image";
import DefaultPage from "@/components/templates/page/default";
import PageSection from "@/components/ui/page-section";


const streamingLinks = [
  { name: "Spotify", url: "https://open.spotify.com/artist/[artist-id]", icon: "🎵" },
  { name: "Apple Music", url: "https://music.apple.com/artist/[artist-id]", icon: "🎵" },
  { name: "Bandcamp", url: "https://theosis.bandcamp.com/", icon: "🎵" },
  { name: "YouTube Music", url: "https://music.youtube.com/channel/[channel-id]", icon: "🎵" },
  { name: "Amazon Music", url: "https://music.amazon.com/artists/[artist-id]", icon: "🎵" },
];

const tracks = [
  "Track 1",
  "Track 2",
  "Track 3",
  "Track 4",
  "Track 5",
  "Track 6",
  "Track 7",
  "Track 8",
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
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-heat rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl text-heat fire-glow mb-6">
            DISCOGRAPHY
          </h1>
          <p className="font-heading text-xl md:text-2xl text-white/80">
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
            <div className="relative aspect-square gothic-border overflow-hidden bg-gradient-to-br from-ooze via-crimson/20 to-darkness">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/demon.png"
                  alt="The Plague and the Heretic"
                  width={500}
                  height={500}
                  className="object-contain opacity-60"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-darkness via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h2 className="font-display text-4xl text-crimson fire-glow">
                  THE PLAGUE
                </h2>
                <p className="font-heading text-2xl text-heat">& THE HERETIC</p>
              </div>
            </div>

            {/* Album Details */}
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-3xl text-heat mb-2">
                  The Plague and the Heretic
                </h3>
                <p className="text-white/60 font-heading uppercase tracking-wider">
                  Full-Length Album • October 2016
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-white/80 font-body">
                  <strong className="text-crimson">Label:</strong> Dead Sea Records
                </p>
                <p className="text-white/80 font-body">
                  <strong className="text-crimson">Recorded at:</strong> Rarefied Records, San Diego
                </p>
                <p className="text-white/80 font-body">
                  <strong className="text-crimson">Mixed & Mastered by:</strong> Matt Van Alan
                </p>
              </div>

              <p className="text-white/70 font-body leading-relaxed">
                A devastating debut that showcases THEOSIS&apos;s mastery of melodic death metal.
                Combining speed, melody, and thrash with powerful vocals and harmonized guitar riffs,
                this album is a journey through the infernal cathedral.
              </p>

              {/* Track List */}
              <div className="space-y-3">
                <h4 className="font-heading text-xl text-heat uppercase tracking-wider">
                  Track Listing
                </h4>
                <div className="space-y-2">
                  {tracks.map((track, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-white/70 hover:text-crimson transition-colors group"
                    >
                      <span className="font-heading text-heat group-hover:text-crimson w-8">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-body">{track}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/40 text-sm font-body italic mt-4">
                  Track names can be updated with actual album track listing
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Streaming Links Section */}
      <PageSection>
        <div className="max-w-4xl mx-auto text-center">
          <div className="section-divider" />
          <h2 className="font-display text-5xl text-crimson fire-glow mb-8">
            STREAM NOW
          </h2>
          <p className="font-heading text-xl text-white/70 mb-12">
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
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {platform.icon}
                </div>
                <h3 className="font-heading text-xl text-heat group-hover:text-crimson transition-colors">
                  {platform.name}
                </h3>
              </a>
            ))}
          </div>

          <p className="text-white/40 text-sm font-body mt-8">
            Links can be updated with actual streaming URLs
          </p>
        </div>
      </PageSection>

      {/* Singles Section */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <div className="section-divider" />
          <h2 className="font-display text-5xl text-center text-heat fire-glow mb-12">
            SINGLES
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bury Your Dead Single */}
            <div className="card p-8 space-y-4">
              <div className="aspect-square bg-gradient-to-br from-crimson/20 to-darkness gothic-border flex items-center justify-center mb-4">
                <Image
                  src="/images/zombies.png"
                  alt="Bury Your Dead"
                  width={300}
                  height={300}
                  className="object-contain opacity-70"
                />
              </div>
              <h3 className="font-heading text-2xl text-crimson">Bury Your Dead</h3>
              <p className="text-white/60 font-heading uppercase tracking-wider text-sm">
                Single • December 2013
              </p>
              <p className="text-white/70 font-body">
                An early glimpse into the dark world of THEOSIS, showcasing the band&apos;s
                raw energy and technical prowess.
              </p>
            </div>

            {/* Placeholder for future releases */}
            <div className="card p-8 space-y-4 border-dashed">
              <div className="aspect-square bg-gradient-to-br from-ooze/20 to-darkness gothic-border flex items-center justify-center mb-4">
                <div className="text-center space-y-4">
                  <p className="font-display text-4xl text-heat opacity-50">?</p>
                  <p className="font-heading text-white/40">More coming soon...</p>
                </div>
              </div>
              <h3 className="font-heading text-2xl text-white/40">Future Releases</h3>
              <p className="text-white/40 font-body">
                The ritual continues. Stay tuned for new material from the infernal cathedral.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Call to Action */}
      <PageSection>
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-display text-5xl text-crimson fire-glow">
            EXPERIENCE LIVE
          </h2>
          <p className="font-heading text-xl text-white/70">
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
