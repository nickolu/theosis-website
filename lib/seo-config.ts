export const siteConfig = {
  name: "THEOSIS",
  title: "THEOSIS - San Diego Death Metal",
  description: "Theosis - Melodic death metal band from San Diego. Combining speed, melodic, and thrash metal with powerful vocals and harmonized guitar riffs.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.theosisband.com",
  ogImage: "/images/logo.png",
  links: {
    spotify: "https://open.spotify.com/artist/0dLaSYhBMWeeHBe0ANAyvc",
    appleMusic: "https://music.apple.com/us/artist/theosis/1624085463",
    youtube: "https://www.youtube.com/@theosisband",
    bandcamp: "https://theosisband.bandcamp.com",
    instagram: "https://www.instagram.com/theosisband",
    facebook: "https://www.facebook.com/theosisband",
  },
  social: {
    twitter: "@theosisband",
  },
  location: {
    city: "San Diego",
    state: "California",
    country: "United States",
  },
  foundingDate: "2012",
  genre: ["Melodic Death Metal", "Death Metal", "Thrash Metal", "Speed Metal"],
};

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Theosis",
    "death metal",
    "melodic death metal",
    "San Diego",
    "metal band",
    "Overture of the Damned",
    "thrash metal",
    "speed metal",
    "San Diego metal",
  ],
  authors: [{ name: "THEOSIS" }],
  creator: "THEOSIS",
  publisher: "THEOSIS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "THEOSIS - San Diego Death Metal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.social.twitter,
    site: siteConfig.social.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};
