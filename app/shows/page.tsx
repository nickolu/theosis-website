import Image from "next/image";
import type { Metadata } from "next";
import PageSection from "@/components/ui/page-section";
import DefaultPage from "@/components/templates/page/default";
import { getShows } from "@/lib/google-sheets";

export const metadata: Metadata = {
  title: "Shows - THEOSIS",
  description: "Upcoming and past live performances by Theosis",
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
            src="/images/zombies.png"
            alt=""
            width={1200}
            height={1200}
            className="object-contain w-full h-full"
          />
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-crimson rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl text-crimson fire-glow mb-6">
            LIVE SHOWS
          </h1>
          <p className="font-heading text-xl md:text-2xl text-white/80">
            Witness the ritual. Experience the infernal cathedral.
          </p>
          <div className="section-divider" />
        </div>
      </PageSection>

      {/* Upcoming Shows Section */}
      <PageSection>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-5xl text-heat fire-glow mb-12 text-center">
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
                      <div className="font-heading text-heat text-lg">
                        {show.date}
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="font-heading text-xl text-white mb-1">
                          {show.venue}
                        </h3>
                        <p className="text-white/60 font-body text-sm">
                          {show.location}
                        </p>
                      </div>
                      <div className="text-white/70 font-body text-sm md:text-right">
                        {show.notes}
                      </div>
                      <div className="text-white/70 font-body text-sm md:text-right">
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
              <div className="text-6xl opacity-50">🎸</div>
              <h3 className="font-heading text-2xl text-heat">
                No Upcoming Shows Scheduled
              </h3>
              <p className="text-white/70 font-body max-w-2xl mx-auto">
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
                  className="px-8 py-3 border-2 border-heat text-heat hover:bg-heat hover:text-darkness transition-all duration-300 font-heading uppercase tracking-wider"
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
          <h2 className="font-display text-5xl text-crimson fire-glow mb-12 text-center">
            PAST PERFORMANCES
          </h2>

          {pastShows.length > 0 ? (
            <div className="space-y-4">
              {pastShows.map((show, index) => (
                <div
                  key={index}
                  className="card p-6 hover:border-crimson transition-all duration-300"
                >
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div className="font-heading text-heat text-lg">
                      {show.date}
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="font-heading text-xl text-white mb-1">
                        {show.venue}
                      </h3>
                      <p className="text-white/60 font-body text-sm">
                        {show.location}
                      </p>
                    </div>
                    <div className="text-white/70 font-body text-sm md:text-right">
                      {show.notes}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white/50 font-body">
              <p>Show history will be updated soon</p>
            </div>
          )}
        </div>
      </PageSection>

      {/* Mailing List Section */}
      <PageSection>
        <div className="max-w-3xl mx-auto">
          <div className="section-divider" />
          <div className="card p-12 text-center space-y-6">
            <h2 className="font-display text-5xl text-heat fire-glow">
              STAY UPDATED
            </h2>
            <p className="font-heading text-xl text-white/80">
              Join our mailing list to be the first to know about upcoming shows,
              new releases, and exclusive content.
            </p>

            {/* Mailing list form placeholder */}
            <div className="max-w-md mx-auto pt-6">
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-6 py-4 bg-darkness border-2 border-ooze focus:border-heat outline-none text-white font-body transition-colors"
                />
                <button className="btn-primary w-full">
                  Join the Congregation
                </button>
              </div>
              <p className="text-white/40 text-sm font-body mt-4">
                Form functionality can be integrated with your preferred email service
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Live Performance Info */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <div className="section-divider" />
          <h2 className="font-display text-5xl text-center text-crimson fire-glow mb-12">
            THE LIVE EXPERIENCE
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8 space-y-4">
              <div className="text-4xl">⚡</div>
              <h3 className="font-heading text-2xl text-heat">Raw Energy</h3>
              <p className="text-white/70 font-body leading-relaxed">
                Experience the full force of melodic death metal with hard-hitting double bass,
                harmonized guitar riffs, and powerful vocals that shake the foundations.
              </p>
            </div>

            <div className="card p-8 space-y-4">
              <div className="text-4xl">🔥</div>
              <h3 className="font-heading text-2xl text-heat">Dark Atmosphere</h3>
              <p className="text-white/70 font-body leading-relaxed">
                Enter the infernal cathedral as THEOSIS creates an immersive atmosphere
                of darkness, ritual, and overwhelming sonic grandeur.
              </p>
            </div>

            <div className="card p-8 space-y-4">
              <div className="text-4xl">🎸</div>
              <h3 className="font-heading text-2xl text-heat">Technical Precision</h3>
              <p className="text-white/70 font-body leading-relaxed">
                Witness the technical mastery as the band delivers complex arrangements
                with surgical precision and relentless intensity.
              </p>
            </div>

            <div className="card p-8 space-y-4">
              <div className="text-4xl">💀</div>
              <h3 className="font-heading text-2xl text-heat">Unforgettable</h3>
              <p className="text-white/70 font-body leading-relaxed">
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-heat rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8 mt-12">
          <h2 className="font-display text-6xl text-crimson fire-glow">
            BOOK THEOSIS
          </h2>
          <p className="font-heading text-xl text-white/80">
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
