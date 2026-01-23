import { siteConfig } from "./seo-config";

export function generateMusicGroupSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "THEOSIS",
    genre: siteConfig.genre,
    foundingDate: siteConfig.foundingDate,
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.state,
        addressCountry: siteConfig.location.country,
      },
    },
    url: siteConfig.url,
    sameAs: [
      siteConfig.links.spotify,
      siteConfig.links.appleMusic,
      siteConfig.links.youtube,
      siteConfig.links.bandcamp,
      siteConfig.links.instagram,
      siteConfig.links.facebook,
    ],
    image: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    member: [
      { "@type": "Person", name: "John Haskin", roleName: "Vocals" },
      { "@type": "Person", name: "Dana Roselli", roleName: "Guitar" },
      { "@type": "Person", name: "Lee Burgos", roleName: "Guitar" },
      { "@type": "Person", name: "Zach Herriot", roleName: "Bass" },
      { "@type": "Person", name: "Nick Mafi", roleName: "Drums" },
    ],
  };
}

export function generateMusicAlbumSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    name: "Overture of the Damned",
    albumReleaseType: "AlbumRelease",
    datePublished: "2022-05",
    byArtist: {
      "@type": "MusicGroup",
      name: "THEOSIS",
    },
    recordLabel: {
      "@type": "Organization",
      name: "Clarity Recordings",
    },
    genre: ["Melodic Death Metal", "Death Metal"],
    url: `${siteConfig.url}/music`,
  };
}

export function generateEventSchema(show: {
  date: string;
  venue: string;
  location: string;
  ticketLink?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: `THEOSIS at ${show.venue}`,
    startDate: show.date,
    location: {
      "@type": "Place",
      name: show.venue,
      address: show.location,
    },
    performer: {
      "@type": "MusicGroup",
      name: "THEOSIS",
    },
    offers: show.ticketLink
      ? {
          "@type": "Offer",
          url: show.ticketLink,
          availability: "https://schema.org/InStock",
        }
      : undefined,
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "MusicGroup",
      name: "THEOSIS",
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
