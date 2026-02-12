'use client';

import { useEffect, useState } from 'react';

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Base layer - slowest movement */}
      <div
        className="absolute inset-0 bg-abyss"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        {/* Deep background gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse at 50% 0%, rgba(111, 124, 87, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 0% 100%, rgba(107, 31, 43, 0.2) 0%, transparent 50%)
            `,
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        />
      </div>

      {/* Middle layer - medium movement */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brass/10 rounded-full blur-[120px]" />
      </div>

      {/* Top layer - faster movement */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(111, 124, 87, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 80%, rgba(107, 31, 43, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-necrotic/10 rounded-full blur-[100px]" />
      </div>

      {/* Foreground layer - fastest movement */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-crimson/5 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gold/5 rounded-full blur-[80px]" />
      </div>
    </div>
  );
}
