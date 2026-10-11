"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Force window to top when mounted
    window.scrollTo(0, 0);

    // Triggers the fade-out right as the animation completes (at 2.8 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0); // Ensure window resets to top as splash dissolves
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // Quick, smooth dissolve out so it doesn't drag
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#050505] overflow-hidden w-screen h-screen flex items-center justify-center"
        >
          {/* Fullscreen 3-Column Layout with Controlled Height */}
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 items-center justify-items-center relative overflow-hidden">
            
            {/* COLUMN 1: LEFT VINE */}
            <div className="absolute left-0 md:relative w-full h-full flex items-center justify-start pointer-events-none opacity-40 md:opacity-85 overflow-hidden">
              <motion.div
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                // Refined, elegant 2.5s growth with smooth easing
                transition={{ duration: 2.5, ease: [0.25, 0.8, 0.25, 1], delay: 0.1 }}
                className="relative w-full h-full [mask-image:linear-gradient(to_right,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_60%,transparent_100%)]"
              >
                <Image
                  src="/gold-vines-left.png"
                  alt="Gold Vines Left"
                  fill
                  className="object-contain object-left scale-110"
                  priority
                />
              </motion.div>
            </div>

            {/* COLUMN 2: CENTRAL BRANDING */}
            <div className="flex flex-col items-center gap-6 z-10 text-center px-4">
              {/* Monogram Reveal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="relative w-24 h-24 sm:w-28 sm:h-28 overflow-visible"
              >
                <Image
                  src="/bb-monogram.png"
                  alt="BB Monogram"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Name Reveal */}
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none bg-gradient-to-r from-[#8B6508] via-[#DAA520] to-[#8B6508] bg-clip-text text-transparent whitespace-nowrap"
              >
                Bruce Bai
              </motion.span>
            </div>

            {/* COLUMN 3: RIGHT VINE */}
            <div className="absolute right-0 md:relative w-full h-full flex items-center justify-end pointer-events-none opacity-40 md:opacity-85 overflow-hidden">
              <motion.div
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                // Refined, elegant 2.5s growth with smooth easing
                transition={{ duration: 2.5, ease: [0.25, 0.8, 0.25, 1], delay: 0.1 }}
                className="relative w-full h-full [mask-image:linear-gradient(to_left,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_left,black_60%,transparent_100%)]"
              >
                <Image
                  src="/gold-vines-right.png"
                  alt="Gold Vines Right"
                  fill
                  className="object-contain object-right scale-110"
                  priority
                />
              </motion.div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}