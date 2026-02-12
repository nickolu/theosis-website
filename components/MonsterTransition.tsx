"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

// Map specific monsters to specific routes
const monsterMap: Record<string, { src: string; alt: string; width: number; height: number }> = {
  "/": { src: "/images/conductor.png", alt: "The Conductor", width: 500, height: 500 },
  "/band": { src: "/images/bug-monster.png", alt: "Bug Monster", width: 400, height: 500 },
  "/music": { src: "/images/demon.png", alt: "Demon", width: 400, height: 500 },
  "/shows": { src: "/images/zombies-xl.png", alt: "Zombies", width: 500, height: 500 },
  "/media": { src: "/images/lizardman.png", alt: "Lizardman", width: 350, height: 500 },
  "/contact": { src: "/images/organist.png", alt: "The Organist", width: 500, height: 500 },
};

interface MonsterTransitionProps {
  children: React.ReactNode;
}

export default function MonsterTransition({ children }: MonsterTransitionProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Trigger transition on route change
    setIsTransitioning(true);

    // Reset transition after animation completes
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Get monster for current route, fallback to organist
  const monster = monsterMap[pathname] || monsterMap["/"];

  return (
    <>
      {/* Monster transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <>
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-abyss z-40"
            />

            {/* Monster animation - slides across screen */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(201, 164, 107, 0.8))",
                }}
              >
                <Image
                  src={monster.src}
                  alt={monster.alt}
                  width={monster.width}
                  height={monster.height}
                  className="max-w-full max-h-screen object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Page content with fade transition */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        className="page-container"
      >
        {children}
      </motion.div>
    </>
  );
}
