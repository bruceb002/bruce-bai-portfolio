"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
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
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-white dark:bg-[#050505] overflow-hidden w-screen h-screen flex items-center justify-center transition-colors duration-500"
        >
          {/* Fullscreen Grid Layout */}
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 items-center justify-items-center relative overflow-hidden">
            
            {/* LEFT VINE */}
            <div className="absolute inset-y-0 left-0 w-1/2 md:relative md:w-full h-full flex items-center justify-start pointer-events-none opacity-25 dark:opacity-85 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="relative w-full h-full [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_50%,transparent_100%)]"
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

            {/* CENTRAL BRANDING */}
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
                className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none bg-gradient-to-r from-[#8B6508] via-[#DAA520] to-[#8B6508] bg-clip-text text-transparent whitespace-nowrap drop-shadow-sm dark:drop-shadow-none"
              >
                Bruce Bai
              </motion.span>
            </div>

            {/* RIGHT VINE */}
            <div className="absolute inset-y-0 right-0 w-1/2 md:relative md:w-full h-full flex items-center justify-end pointer-events-none opacity-25 dark:opacity-85 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="relative w-full h-full [mask-image:linear-gradient(to_left,black_50%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_left,black_50%,transparent_100%)]"
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