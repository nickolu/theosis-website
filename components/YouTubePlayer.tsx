"use client";

import { useState } from "react";

interface YouTubePlayerProps {
  videoId?: string;
  title?: string;
}

export default function YouTubePlayer({
  videoId = "LfKgzXIBC_U", // Placeholder - can be replaced with actual video ID
  title = "Theosis Video",
}: YouTubePlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-video bg-ooze/20 rounded-lg overflow-hidden gothic-border">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-heat border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-white/60 font-heading">Loading video...</p>
          </div>
        </div>
      )}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?color=white&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
