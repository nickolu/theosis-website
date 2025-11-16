import Image from "next/image";
import Link from "next/link";
import YouTubePlayer from "@/components/YouTubePlayer";

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Video Above the Fold */}
      <section className="relative py-12 md:py-20 px-2 overflow-hidden">
        {/* Background monster artwork */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15">
          <Image
            src="/images/organist.png"
            alt=""
            width={1200}
            height={1200}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Background accent */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-crimson rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-heat rounded-full blur-[120px]" />
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

            <h1 className="font-display text-3xl md:text-5xl text-crimson fire-glow">
              Overture of the Damned
            </h1>
            <p className="font-heading text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Listen on <a href="https://open.spotify.com/album/1234567890" className="text-heat hover:text-crimson transition-colors">Spotify</a> and <Link href="/music" className="text-heat hover:text-crimson transition-colors">other streaming platforms</Link>
              
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
              className="px-8 py-3 border-2 border-heat text-heat hover:bg-heat hover:text-darkness transition-all duration-300 font-heading uppercase tracking-wider"
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
              <h2 className="font-display text-5xl text-crimson fire-glow">
                THE PLAGUE
              </h2>
              <h3 className="font-heading text-2xl text-heat">& THE HERETIC</h3>
              <p className="text-white/80 leading-relaxed font-body">
                Forged in the fires of San Diego in 2012, <strong className="text-crimson">THEOSIS</strong> combines
                the brutal precision of melodic death metal with the relentless energy of speed and thrash.
              </p>
              <p className="text-white/80 leading-relaxed font-body">
                Powerful vocals collide with hard-hitting double bass and harmonized guitar riffs,
                creating a sonic cathedral of darkness and destruction.
              </p>
              <Link href="/band" className="btn-primary inline-block">
                Meet The Band
              </Link>
            </div>

            <div className="relative">
              <div className="gothic-border p-8 bg-ooze/10 backdrop-blur-sm">
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
      <section className="py-20 px-4 bg-ooze/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="section-divider" />
          <h2 className="font-display text-5xl text-heat fire-glow mb-8">
            LATEST RELEASE
          </h2>
          <div className="max-w-2xl mx-auto card p-8 space-y-6">
            <h3 className="font-heading text-3xl text-crimson">
              The Plague and the Heretic
            </h3>
            <p className="text-white/70 font-body">
              Released October 2016 via Dead Sea Records
            </p>
            <p className="text-white/80 font-body leading-relaxed">
              Recorded at Rarefied Records in San Diego by Matt Van Alan.
              A devastating debut album that showcases the band&apos;s mastery of melodic death metal.
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="font-display text-6xl text-heat fire-glow">
            ENTER THE CATHEDRAL
          </h2>
          <p className="font-heading text-xl text-white/80">
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
