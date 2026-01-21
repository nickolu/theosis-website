"use client";

import Image from "next/image";
import { useState } from "react";
import YouTubePlayer from "@/components/YouTubePlayer";
import PageSection from "@/components/ui/page-section";
import DefaultPage from "@/components/templates/page/default";

// Placeholder gallery images using available monster artwork
const galleryImages = [
  { src: "/images/demon.png", alt: "Demon Performance", category: "live" },
  { src: "/images/organist.png", alt: "The Organist", category: "promo" },
  { src: "/images/bug-monster.png", alt: "Bug Monster", category: "promo" },
  { src: "/images/lizardman.png", alt: "Lizardman", category: "promo" },
  { src: "/images/zombies.png", alt: "Zombies", category: "promo" },
  { src: "/images/logo.png", alt: "Theosis Logo", category: "promo" },
];

// Placeholder video data
const videos = [
  // https://www.youtube.com/watch?v=LfKgzXIBC_U
  { id: "LfKgzXIBC_U", title: "Overture of the Damned", description: "Official music video" },
  // https://www.youtube.com/watch?v=Kyzgbmz3TG0
  { id: "Kyzgbmz3TG0", title: "Deadlights", description: "Official lyric video" },
];

type Category = "all" | "live" | "promo" | "behind";

export default function MediaPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <DefaultPage>
      {/* Hero Section */}
      <PageSection>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-heat rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl text-heat fire-glow mb-6">
            MEDIA
          </h1>
          <p className="font-heading text-xl md:text-2xl text-white/80">
            Visual chronicles from the infernal cathedral
          </p>
          <div className="section-divider" />
        </div>
      </PageSection>

      {/* Videos Section */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl text-crimson fire-glow mb-12 text-center">
            VIDEOS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="card p-4 space-y-4">
                <div className="aspect-video">
                  <YouTubePlayer videoId={video.id} title={video.title} />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-heat mb-2">
                    {video.title}
                  </h3>
                  <p className="text-white/60 font-body text-sm">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </PageSection>

      {/* Photo Gallery Section */}
      <PageSection>
        <div className="max-w-7xl mx-auto">
          <div className="section-divider" />
          <h2 className="font-display text-5xl text-crimson fire-glow mb-8 text-center">
            PHOTO GALLERY
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "live", "promo", "behind"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as Category)}
                className={`px-6 py-3 font-heading uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-heat text-darkness"
                    : "border-2 border-ooze text-white hover:border-crimson hover:text-crimson"
                }`}
              >
                {category === "all" ? "All Photos" : category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer group overflow-hidden gothic-border bg-darkness"
                onClick={() => setLightboxImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkness via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-heading text-heat">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Social Media Section */}
      <PageSection>
        <div className="max-w-4xl mx-auto text-center">
          <div className="section-divider" />
          <h2 className="font-display text-5xl text-crimson fire-glow mb-8">
            FOLLOW US
          </h2>
          <p className="font-heading text-xl text-white/70 mb-12">
            Stay connected and join the congregation
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Facebook", icon: "like.png", url: "https://www.facebook.com/theosis.offical.usa/" },
              { name: "Instagram", icon: "chalice.png", url: "https://www.instagram.com/theosis_official_usa/" },
              { name: "YouTube", icon: "video-play.png", url: "https://www.youtube.com/channel/UCPe3ZiJqIy6d13NjizamsJQ" },
              { name: "Bandcamp", icon: "headphones.png", url: "https://theosis.bandcamp.com/" },
              { name: "Spotify", icon: "web.png", url: "https://open.spotify.com/artist/0dLaSYhBMWeeHBe0ANAyvc?si=bGN0V0s_TYmV8EZI6lUvrg" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card px-8 py-6 hover:scale-110 transition-all duration-300 group"
              >
                <div className="mb-2 group-hover:scale-110 transition-transform flex justify-center">
                  <Image
                    src={`/images/icons/64/${social.icon}`}
                    alt={social.name}
                    width={40}
                    height={40}
                    className="opacity-80"
                  />
                </div>
                <p className="font-heading text-heat group-hover:text-crimson transition-colors">
                  {social.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-darkness/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-crimson text-4xl transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image
              src={lightboxImage}
              alt="Gallery Image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </DefaultPage>
  );
}
