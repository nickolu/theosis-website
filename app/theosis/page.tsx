import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import DefaultPage from "@/components/templates/page/default";
import PageSection from "@/components/ui/page-section";
import { siteConfig } from "@/lib/seo-config";
import { generateArticleSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Theosis: The Meaning Behind the Name",
  description: "Discover the meaning of Theosis - the Eastern Orthodox Christian concept of deification and union with God that inspired our band name. Learn about this ancient theological tradition.",
  keywords: [
    "Theosis",
    "deification",
    "Eastern Orthodox theology",
    "divinization",
    "union with God",
    "divine energies",
    "Athanasius",
    "Patristic theology",
    "Gregory Palamas",
    "hesychasm",
  ],
  alternates: {
    canonical: `${siteConfig.url}/theosis`,
  },
  openGraph: {
    title: "Theosis: The Meaning Behind the Name - THEOSIS",
    description: "Discover the Eastern Orthodox Christian concept of deification that inspired our band name.",
    url: `${siteConfig.url}/theosis`,
    type: "article",
  },
};

export default function TheosisPage() {
  // Generate Article Schema for SEO
  const articleSchema = generateArticleSchema({
    headline: "Theosis: The Meaning Behind the Name",
    description: "Discover the meaning of Theosis - the Eastern Orthodox Christian concept of deification and union with God that inspired our band name.",
    url: `${siteConfig.url}/theosis`,
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString(),
    image: `${siteConfig.url}/images/conductor.png`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <DefaultPage>
        {/* Hero Section */}
        <PageSection>
          <div className="absolute inset-0 opacity-15">
            <Image
              src="/images/conductor.png"
              alt="Theosis concept art"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-[120px]" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-gold fire-glow mb-6">
              THEOSIS
            </h1>
            <p className="font-heading text-xl md:text-3xl text-brass mb-4">
              θέωσις
            </p>
            <p className="font-heading text-lg md:text-2xl text-bone/90 max-w-3xl mx-auto">
              The ancient path of deification, transformation, and union with the divine
            </p>
            <div className="section-divider" />
          </div>
        </PageSection>

        {/* Definition Section */}
        <PageSection>
          <div className="max-w-5xl mx-auto">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-brass rounded-full blur-[100px]" />
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl text-gold fire-glow mb-8">
                WHAT IS THEOSIS?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-6">
                  <p className="font-body text-lg text-bone/90 leading-relaxed">
                    <strong className="text-gold">Theosis</strong> (θέωσις) is the central concept in Eastern Orthodox Christian theology referring to the process of <strong className="text-brass">deification</strong> or <strong className="text-brass">divinization</strong>—the transformative journey through which human beings participate in the divine nature.
                  </p>
                  <p className="font-body text-lg text-bone/90 leading-relaxed">
                    The term comes from the Greek word <em className="text-brass">theopoiesis</em>, meaning "to make divine" or "to deify." This is not a literal transformation into God, but rather a mystical union with God's energies while His essence remains transcendent and unknowable.
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="font-body text-lg text-bone/90 leading-relaxed">
                    Rooted in Scripture—particularly 2 Peter 1:4, which speaks of becoming "partakers of the divine nature"—<strong className="text-gold">Theosis</strong> represents the ultimate purpose of human existence in Orthodox thought: to achieve perfect communion with God through grace.
                  </p>
                  <p className="font-body text-lg text-bone/90 leading-relaxed">
                    This profound theological concept emphasizes transformation, transcendence, and the cooperative synergy between human will and divine grace—a journey from darkness into light, from mortality toward immortality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageSection>

        {/* Historical Context Section */}
        <PageSection>
          <div className="max-w-6xl mx-auto">
            <div className="section-divider" />
            <h2 className="font-display text-4xl md:text-6xl text-gold fire-glow mb-12">
              HISTORICAL FOUNDATION
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Athanasius Card */}
              <div className="card p-6 text-left group hover:scale-105 transition-all duration-500">
                <h3 className="font-heading text-2xl text-brass mb-4">
                  Athanasius of Alexandria
                </h3>
                <p className="font-body text-bone/80 leading-relaxed mb-4">
                  The 4th-century Church Father famously articulated the concept of <strong className="text-gold">Theosis</strong> with the powerful statement:
                </p>
                <blockquote className="border-l-2 border-gold pl-4 italic text-bone/90 mb-4">
                  "God became man so that man might become god."
                </blockquote>
                <p className="font-body text-bone/80 leading-relaxed">
                  Athanasius established the theological foundation that humanity's salvation involves actual participation in divine life, not merely moral improvement or legal justification.
                </p>
              </div>

              {/* Patristic Tradition Card */}
              <div className="card p-6 text-left group hover:scale-105 transition-all duration-500">
                <h3 className="font-heading text-2xl text-brass mb-4">
                  Patristic Theology
                </h3>
                <p className="font-body text-bone/80 leading-relaxed mb-4">
                  The early Church Fathers—including Irenaeus, Clement of Alexandria, Origen, and Basil the Great—developed the doctrine of <strong className="text-gold">deification</strong> as central to Christian soteriology.
                </p>
                <p className="font-body text-bone/80 leading-relaxed">
                  These theologians emphasized that salvation is not simply escaping punishment, but being transformed and elevated to share in God's own life—a radical vision of human destiny that distinguishes Eastern Orthodox thought from much of Western Christianity.
                </p>
              </div>

              {/* Gregory Palamas Card */}
              <div className="card p-6 text-left group hover:scale-105 transition-all duration-500">
                <h3 className="font-heading text-2xl text-brass mb-4">
                  Gregory Palamas & Hesychasm
                </h3>
                <p className="font-body text-bone/80 leading-relaxed mb-4">
                  In the 14th century, Gregory Palamas defended the hesychast tradition and articulated the crucial distinction between God's essence and His energies—the theological foundation that makes <strong className="text-gold">Theosis</strong> possible.
                </p>
                <p className="font-body text-bone/80 leading-relaxed">
                  Palamas taught that while God's essence remains utterly transcendent and inaccessible, humans can genuinely participate in God's uncreated divine energies through prayer, ascetic practice, and grace.
                </p>
              </div>
            </div>
          </div>
        </PageSection>

        {/* The Process Section */}
        <PageSection>
          <div className="max-w-6xl mx-auto">
            <div className="section-divider" />
            <h2 className="font-display text-4xl md:text-6xl text-gold fire-glow mb-12">
              THE THREEFOLD PATH
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Catharsis */}
              <div className="card p-8 text-left relative overflow-hidden group hover:scale-105 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="font-display text-5xl text-gold mb-4">I</div>
                  <h3 className="font-heading text-3xl text-brass mb-6 uppercase tracking-wider">
                    Catharsis
                  </h3>
                  <p className="font-body text-sm text-brass/70 uppercase tracking-widest mb-4">
                    Purification
                  </p>
                  <p className="font-body text-bone/90 leading-relaxed mb-4">
                    The first stage of <strong className="text-gold">Theosis</strong> involves cleansing the soul from passions, vices, and sinful attachments. Through repentance, prayer, fasting, and ascetic discipline, the believer begins to purify the heart.
                  </p>
                  <p className="font-body text-bone/80 leading-relaxed">
                    This purgation creates the inner stillness necessary for communion with God—a death to the old self and liberation from the tyranny of disordered desires.
                  </p>
                </div>
              </div>

              {/* Theoria */}
              <div className="card p-8 text-left relative overflow-hidden group hover:scale-105 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brass/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="font-display text-5xl text-gold mb-4">II</div>
                  <h3 className="font-heading text-3xl text-brass mb-6 uppercase tracking-wider">
                    Theoria
                  </h3>
                  <p className="font-body text-sm text-brass/70 uppercase tracking-widest mb-4">
                    Illumination
                  </p>
                  <p className="font-body text-bone/90 leading-relaxed mb-4">
                    Having purified the soul, the believer enters the stage of illumination—experiencing the uncreated light of God. This is not merely intellectual knowledge, but direct mystical vision and contemplation.
                  </p>
                  <p className="font-body text-bone/80 leading-relaxed">
                    <strong className="text-brass">Theoria</strong> represents the opening of spiritual eyes, the experience of divine energies, and the beginning of genuine communion with the divine presence.
                  </p>
                </div>
              </div>

              {/* Union */}
              <div className="card p-8 text-left relative overflow-hidden group hover:scale-105 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/30 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="font-display text-5xl text-gold mb-4">III</div>
                  <h3 className="font-heading text-3xl text-brass mb-6 uppercase tracking-wider">
                    Union
                  </h3>
                  <p className="font-body text-sm text-brass/70 uppercase tracking-widest mb-4">
                    Theosis Proper
                  </p>
                  <p className="font-body text-bone/90 leading-relaxed mb-4">
                    The culmination of the spiritual journey: full participation in the divine energies through grace. The believer achieves profound union with God while maintaining their distinct personhood.
                  </p>
                  <p className="font-body text-bone/80 leading-relaxed">
                    This is <strong className="text-gold">Theosis</strong> in its fullness—becoming by grace what God is by nature, radiating divine light, and dwelling in perfect love and communion with the eternal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageSection>

        {/* Essence vs Energies Section */}
        <PageSection>
          <div className="max-w-4xl mx-auto text-left">
            <div className="section-divider" />
            <h2 className="font-display text-4xl md:text-6xl text-gold fire-glow mb-8 text-center">
              ESSENCE & ENERGIES
            </h2>
            <div className="card p-8 gothic-border">
              <p className="font-body text-lg text-bone/90 leading-relaxed mb-6">
                A critical theological distinction makes <strong className="text-gold">Theosis</strong> coherent: the difference between God's <strong className="text-brass">essence</strong> (ousia) and His <strong className="text-brass">energies</strong> (energeia).
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="font-heading text-2xl text-brass mb-4">Divine Essence</h3>
                  <p className="font-body text-bone/80 leading-relaxed">
                    God's essence remains absolutely transcendent, unknowable, and inaccessible. No creature can comprehend or participate in what God is in His innermost being. This preserves the infinite distinction between Creator and creation.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-brass mb-4">Divine Energies</h3>
                  <p className="font-body text-bone/80 leading-relaxed">
                    God's energies are His activities, operations, and manifestations in the world—how He reveals Himself and acts. These energies are fully divine, uncreated, and eternal. Through grace, humans can participate in these divine energies.
                  </p>
                </div>
              </div>
              <p className="font-body text-lg text-bone/90 leading-relaxed">
                This theological framework, articulated definitively by Gregory Palamas, explains how humans can genuinely experience union with God without violating His transcendence—participating in divine life without becoming divine in essence.
              </p>
            </div>
          </div>
        </PageSection>

        {/* Band Connection Section */}
        <PageSection>
          <div className="max-w-6xl mx-auto">
            <div className="section-divider" />
            <h2 className="font-display text-4xl md:text-6xl text-gold fire-glow mb-12">
              THE NAME, THE MUSIC, THE VISION
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 order-2 md:order-1">
                <Image
                  src="/images/demon.png"
                  alt="THEOSIS band artwork"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-transparent" />
              </div>
              <div className="text-left space-y-6 order-1 md:order-2">
                <p className="font-body text-lg text-bone/90 leading-relaxed">
                  When we chose the name <strong className="text-gold">THEOSIS</strong>, we embraced more than an ancient theological term—we adopted a philosophy of transformation, transcendence, and the journey from darkness into light.
                </p>
                <p className="font-body text-lg text-bone/90 leading-relaxed">
                  Our music embodies this concept: the brutal and the beautiful, the infernal and the transcendent, darkness meeting divinity. Like the threefold path of <strong className="text-brass">catharsis, theoria, and union</strong>, our sound moves through purging intensity, illuminated melody, and ultimate fusion.
                </p>
                <p className="font-body text-lg text-bone/90 leading-relaxed">
                  The "Infernal Cathedral" aesthetic—our signature blend of gothic grandeur and metal brutality—mirrors the paradox of <strong className="text-gold">Theosis</strong> itself: achieving union with the divine through struggle, suffering, and transformation. We are architects of a sonic cathedral where darkness and transcendence collide.
                </p>
                <p className="font-body text-lg text-bone/90 leading-relaxed">
                  Every riff, every growl, every harmonized passage is a musical meditation on transformation—the death of the old self and the ascent toward something greater. This is our <strong className="text-brass">deification through sound</strong>.
                </p>
              </div>
            </div>
          </div>
        </PageSection>

        {/* CTA Section */}
        <PageSection className="mt-12 pb-12">
          <div className="section-divider" />
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-display text-5xl text-gold fire-glow">
              EXPERIENCE THE TRANSFORMATION
            </h2>
            <p className="font-heading text-xl text-bone/80">
              Discover the music that embodies this ancient concept of transcendence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/music" className="btn-primary">
                Listen Now
              </Link>
              <Link
                href="/band"
                className="px-8 py-3 border-2 border-brass text-brass hover:bg-parchment hover:text-abyss transition-all duration-300 font-heading uppercase tracking-wider"
              >
                About the Band
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-stone text-stone hover:bg-stone hover:text-abyss transition-all duration-300 font-heading uppercase tracking-wider"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </PageSection>
      </DefaultPage>
    </>
  );
}
