import Image from "next/image";
import type { Metadata } from "next";
import PageSection from "@/components/ui/page-section";
import DefaultPage from "@/components/templates/page/default";
import { getShows } from "@/lib/google-sheets";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Live Shows & Tour Dates",
  description: "Catch THEOSIS live in San Diego and beyond. View upcoming shows, past performances, and get tickets.",
  alternates: {
    canonical: `${siteConfig.url}/shows`,
  },
  openGraph: {
    title: "Live Shows - THEOSIS",
    description: "Witness THEOSIS live. Check out our upcoming tour dates and past performances.",
    url: `${siteConfig.url}/shows`,
  },
};

// Disable caching to fetch fresh data on every page load
export const dynamic = 'force-dynamic';

export default async function ShowsPage() {
  // Fetch shows from Google Sheets
  const { upcoming: upcomingShows, past: pastShows } = await getShows();
  console.log(upcomingShows);
  console.log(pastShows);
  return (
    <DefaultPage>
      {/* Hero Section */}
      <PageSection>
        {/* Background monster artwork */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
          <Image
            src="/images/zombies-xl.png"
            alt=""
            width={1200}
            height={1200}
            className="object-contain w-full h-full"
          />
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl text-gold fire-glow mb-6">
            LIVE SHOWS
          </h1>
          <p className="font-heading text-xl md:text-2xl text-bone/90">
            Witness the ritual. Experience the infernal cathedral.
          </p>
          <div className="section-divider" />
        </div>
      </PageSection>

      {/* Upcoming Shows Section */}
      <PageSection>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-5xl text-gold fire-glow mb-12 text-center">
            UPCOMING SHOWS
          </h2>

          {upcomingShows.length > 0 ? (
            <div className="space-y-6">
              {upcomingShows.map((show, index) => (
                <div
                  key={index}
                  className="card p-8 hover:scale-[1.02] transition-all duration-300"
                >
                    <div className="grid md:grid-cols-5 gap-4 items-center">
                      <div className="font-heading text-brass text-lg">
                        {show.date}
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="font-heading text-xl text-bone mb-1">
                          {show.venue}
                        </h3>
                        <p className="text-bone/70 font-body text-sm">
                          {show.location}
                        </p>
                      </div>
                      <div className="text-bone/80 font-body text-sm md:text-right">
                        {show.notes}
                      </div>
                      <div className="text-bone/80 font-body text-sm md:text-right">
                        {show.ticketLink && (
                          <a href={show.ticketLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                            Buy Tickets
                          </a>
                        )}
                      </div>
                    </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card p-12 text-center space-y-6">
              <div className="flex justify-center opacity-50">
                <Image
                  src="/images/icons/64/skull.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="font-heading text-2xl text-brass">
                No Upcoming Shows Scheduled
              </h3>
              <p className="text-bone/80 font-body max-w-2xl mx-auto">
                The cathedral is currently silent, but the ritual will return.
                Stay tuned for announcements of future performances.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href="/contact"
                  className="btn-primary"
                >
                  Book Us
                </a>
                <a
                  href="#mailing-list"
                  className="px-8 py-3 border-2 border-brass text-brass hover:bg-parchment hover:text-abyss transition-all duration-300 font-heading uppercase tracking-wider"
                >
                  Join Mailing List
                </a>
              </div>
            </div>
          )}
        </div>
      </PageSection>

      {/* Past Shows Section */}
      <PageSection>
        <div className="max-w-5xl mx-auto">
          <div className="section-divider" />
          <h2 className="font-display text-5xl text-gold fire-glow mb-12 text-center">
            PAST PERFORMANCES
          </h2>

          {pastShows.length > 0 ? (
            <div className="space-y-4">
              {pastShows.map((show, index) => (
                <div
                  key={index}
                  className="card p-6 hover:border-brass transition-all duration-300"
                >
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div className="font-heading text-brass text-lg">
                      {show.date}
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="font-heading text-xl text-bone mb-1">
                        {show.venue}
                      </h3>
                      <p className="text-bone/70 font-body text-sm">
                        {show.location}
                      </p>
                    </div>
                    <div className="text-bone/80 font-body text-sm md:text-right">
                      {show.notes}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-bone/60 font-body">
              <p>Show history will be updated soon</p>
            </div>
          )}
        </div>
      </PageSection>


      {/* Live Performance Info */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <div className="section-divider" />
          <h2 className="font-display text-5xl text-center text-gold fire-glow mb-12">
            THE LIVE EXPERIENCE
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8 space-y-4">
              <Image
                src="/images/icons/64/candle.png"
                alt="Raw Energy"
                width={48}
                height={48}
                className="opacity-80 mx-auto"
              />
              <h3 className="font-heading text-2xl text-brass">Raw Energy</h3>
              <p className="text-bone/80 font-body leading-relaxed">
                Experience the full force of melodic death metal with hard-hitting double bass,
                harmonized guitar riffs, and powerful vocals that shake the foundations.
              </p>
            </div>

            <div className="card p-8 space-y-4">
              <Image
                src="/images/icons/64/cathedral.png"
                alt="Dark Atmosphere"
                width={48}
                height={48}
                className="opacity-80 mx-auto"
              />
              <h3 className="font-heading text-2xl text-brass">Dark Atmosphere</h3>
              <p className="text-bone/80 font-body leading-relaxed">
                Enter the infernal cathedral as THEOSIS creates an immersive atmosphere
                of darkness, ritual, and overwhelming sonic grandeur.
              </p>
            </div>

            <div className="card p-8 space-y-4">
              <Image
                src="/images/icons/64/gear.png"
                alt="Technical Precision"
                width={48}
                height={48}
                className="opacity-80 mx-auto"
              />
              <h3 className="font-heading text-2xl text-brass">Technical Precision</h3>
              <p className="text-bone/80 font-body leading-relaxed">
                Witness the technical mastery as the band delivers complex arrangements
                with surgical precision and relentless intensity.
              </p>
            </div>

            <div className="card p-8 space-y-4">
              <Image
                src="/images/icons/64/gravestone.png"
                alt="Unforgettable"
                width={48}
                height={48}
                className="opacity-80 mx-auto"
              />
              <h3 className="font-heading text-2xl text-brass">Unforgettable</h3>
              <p className="text-bone/80 font-body leading-relaxed">
                A THEOSIS show is more than a concert—it&apos;s a ritual, a journey into darkness
                that will leave a lasting mark on your soul.
              </p>
            </div>
          </div>
        </div>
        </PageSection>

      {/* Booking CTA */}
      <PageSection>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8 mt-12">
          <h2 className="font-display text-6xl text-gold fire-glow">
            BOOK THEOSIS
          </h2>
          <p className="font-heading text-xl text-bone/90">
            Bring the infernal cathedral to your venue
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Contact for Booking
          </a>
        </div>
      </PageSection>
    </DefaultPage>
  );
}
