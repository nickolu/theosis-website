import Image from "next/image";
import type { Metadata } from "next";
import DefaultPage from "@/components/templates/page/default";
import PageSection from "@/components/ui/page-section";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Band Members",
  description: "Meet the members of THEOSIS - John Haskin (vocals), Dana Roselli (guitar), Lee Burgos (guitar), Zach Herriot (bass), and Nick Mafi (drums). San Diego melodic death metal.",
  alternates: {
    canonical: `${siteConfig.url}/band`,
  },
  openGraph: {
    title: "Band Members - THEOSIS",
    description: "Meet the architects of darkness - the members of THEOSIS",
    url: `${siteConfig.url}/band`,
  },
};

const bandMembers = [
  {
    name: "John Haskin",
    role: "Vocals",
    image: "/images/demon.png",
    bio: "Delivering powerful, commanding vocals that channel the fury and darkness of the infernal cathedral. John's voice is the thunderous proclamation from the depths.",
  },
  {
    name: "Dana Roselli",
    role: "Guitar",
    image: "/images/organist.png",
    bio: "Founding member and guitarist, Dana forged Theosis in 2012 with a vision of melodic brutality. His harmonized riffs are the architectural foundation of our sonic cathedral.",
  },
  {
    name: "Lee Burgos",
    role: "Guitar",
    image: "/images/bug-monster.png",
    bio: "Weaving intricate melodic passages and devastating harmonies, Lee's guitar work brings both beauty and destruction to the Theosis sound.",
  },
  {
    name: "Zach Herriot",
    role: "Bass",
    image: "/images/lizardman.png",
    bio: "Anchoring the low end with crushing precision, Zach's bass lines form the rumbling foundation upon which our cathedral of sound is built.",
  },
  {
    name: "Nick Mafi",
    role: "Drums",
    image: "/images/zombies.png",
    bio: "The relentless heartbeat of Theosis. Omar's hard-hitting double bass and technical prowess drive the band's unstoppable energy and speed.",
  },
];

export default function BandPage() {
  return (
    <DefaultPage>
      {/* Hero Section */}
      <PageSection>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-crimson rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl text-crimson fire-glow mb-6">
            THE BAND
          </h1>
          <p className="font-heading text-xl md:text-2xl text-white/80">
            The architects of darkness. The congregation of the infernal.
          </p>
          <div className="section-divider" />
        </div>
      </PageSection>

      {/* Band Members Grid */}
      <PageSection>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bandMembers.map((member, index) => (
              <div
                key={member.name}
                className="card p-6 group hover:scale-105 transition-all duration-500"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Monster Image */}
                <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-lg bg-darkness">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkness via-transparent to-transparent" />
                </div>

                {/* Member Info */}
                <div className="space-y-3">
                  <h3 className="font-heading text-3xl text-heat group-hover:text-crimson transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-heading text-lg text-crimson uppercase tracking-wider">
                    {member.role}
                  </p>
                  <div className="h-px bg-gradient-to-r from-ooze via-crimson to-ooze" />
                  <p className="font-body text-white/70 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Band Story Section */}
      <PageSection>
        <div className="max-w-4xl mx-auto text-left">
          <div className="section-divider" />
          <h2 className="font-display text-5xl text-center text-heat fire-glow mb-12 text-center">
            OUR STORY
          </h2>
          <div className="space-y-6 text-white/80 font-body leading-relaxed">
            <p className="text-lg">
              <strong className="text-crimson">THEOSIS</strong> was born in 2012 from the vision of guitarist Dana Roselli,
              who sought to create a sound that merged the technical precision of melodic death metal
              with the raw aggression of speed and thrash.
            </p>
            <p className="text-lg">
              Assembling a lineup of dedicated musicians—John Haskin on vocals, Lee Burgos on guitar,
              Zach Herriot on bass, and Nick Mafi on drums—the band quickly established themselves
              as a force in the San Diego metal scene.
            </p>
            <p className="text-lg">
              In October 2016, THEOSIS unleashed their debut album{" "}
              <strong className="text-heat">&quot;The Plague and the Heretic&quot;</strong> via their own
              label, Dead Sea Records. Recorded at Rarefied Records by Matt Van Alan, the album
              showcased the band&apos;s signature blend of harmonized guitar riffs, powerful vocals,
              and relentless double bass drumming.
            </p>
            <p className="text-lg">
              In May 2022, THEOSIS unleashed their second album{" "}
              <strong className="text-heat">&quot;Overture of the Damned&quot;</strong> via Clarity Recordings. Recorded at Clarity Recordings by Sean Tolle, the album
              showcased the band&apos;s signature blend of harmonized guitar riffs, powerful vocals,
              and relentless double bass drumming.
            </p>
            <p className="text-lg">
              Drawing inspiration from the darkest corners of human experience and mythology,
              THEOSIS creates a sound that is both brutal and beautiful—a sonic representation
              of the &quot;Infernal Cathedral,&quot; where darkness and grandeur collide.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Call to Action */}
      <PageSection className="mt-12 pb-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-display text-5xl text-crimson fire-glow">
            WITNESS THE RITUAL
          </h2>
          <p className="font-heading text-xl text-white/70">
            Experience THEOSIS live and become part of the congregation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/shows" className="btn-primary">
              View Shows
            </a>
            <a
              href="/media"
              className="px-8 py-3 border-2 border-heat text-heat hover:bg-heat hover:text-darkness transition-all duration-300 font-heading uppercase tracking-wider"
            >
              Photos & Videos
            </a>
          </div>
        </div>
      </PageSection>
    </DefaultPage>
  );
}
