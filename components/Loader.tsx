"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Add a small delay before hiding loader
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Minimum loading time of 2 seconds for dramatic effect
    const minLoadTime = setTimeout(() => {
      setProgress(100);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(minLoadTime);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-darkness"
        >
          {/* Animated background effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-crimson rounded-full blur-[150px]"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-heat rounded-full blur-[150px]"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center space-y-8 px-4">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                animate={{
                  filter: [
                    "drop-shadow(0 0 20px rgba(182, 52, 78, 0.8))",
                    "drop-shadow(0 0 40px rgba(221, 141, 82, 0.8))",
                    "drop-shadow(0 0 20px rgba(182, 52, 78, 0.8))",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Theosis"
                  width={500}
                  height={166}
                  className="mx-auto max-w-full h-auto"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="font-display text-3xl text-crimson fire-glow-weak">
                ENTERING THE CATHEDRAL
              </p>

              {/* Progress bar */}
              <div className="w-80 max-w-full mx-auto">
                <div className="h-1 bg-ooze/30 rounded-full overflow-hidden gothic-border">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-crimson via-heat to-crimson"
                    style={{
                      boxShadow: "0 0 20px rgba(221, 141, 82, 0.6)",
                    }}
                  />
                </div>
                <motion.p
                  className="font-heading text-heat text-sm mt-2 tracking-wider"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {progress}%
                </motion.p>
              </div>

              {/* Animated dots */}
              <motion.div
                className="flex justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-crimson rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Ritual symbol animation */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 0.6, rotate: 360 }}
              transition={{
                opacity: { delay: 0.8, duration: 1 },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
            >
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full opacity-20"
                style={{ filter: "drop-shadow(0 0 10px rgba(182, 52, 78, 0.5))" }}
              >
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-crimson"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-heat"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-ooze"
                />
                {/* Pentagram-like lines */}
                <path
                  d="M 100 20 L 120 80 L 180 80 L 130 120 L 150 180 L 100 140 L 50 180 L 70 120 L 20 80 L 80 80 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-crimson"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
