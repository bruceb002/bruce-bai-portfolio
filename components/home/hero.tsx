"use client";

import { useState, useEffect } from "react";
import type { PressEvent } from "@react-aria/interactions";

import { motion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { DATA } from "@/data";

export const HeroSection = ({
  name = DATA.home.hero.name,
  title = DATA.home.hero.title,
  subtitle = DATA.home.hero.subtitle,
}: {
  showBackground?: boolean;
  name?: string;
  title?: string;
  subtitle?: string;
}) => {
  const [mounted, setMounted] = useState(false);

  // Tells React the component has officially loaded in the browser
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToWork = (_e: PressEvent) => {
    const workSection = document.getElementById("work-section");

    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Only apply color transition after mount
    <section className={`min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden bg-background ${mounted ? "transition-colors duration-1000" : ""}`}>
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Day Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/hero-day-poster.webp"
          className={`absolute inset-0 h-full w-full object-cover object-[75%_center] md:object-[90%_center] xl:object-center opacity-80 dark:opacity-0 ${
            mounted ? "transition-opacity duration-1000 ease-in-out" : ""
          }`}
        >
          <source src="/hero-day-video.mp4" type="video/mp4" />
        </video>

        {/* Night Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/hero-night-poster.webp"
          className={`absolute inset-0 h-full w-full object-cover object-[75%_center] md:object-[90%_center] xl:object-center opacity-0 dark:opacity-80 ${
            mounted ? "transition-opacity duration-1000 ease-in-out" : ""
          }`}
        >
          <source src="/hero-night-video.mp4" type="video/mp4" />
        </video>

        {/* Dynamic Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-background dark:from-black/40 dark:via-black/20 dark:to-background ${
            mounted ? "transition-colors duration-1000" : ""
          }`} 
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto transform-gpu"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-cyan-200 dark:via-white dark:to-purple-300 bg-clip-text text-transparent drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I&apos;m {name} &mdash; I design &amp; code modern web
            experiences.
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-foreground-600 dark:text-slate-200 text-lg md:text-xl mb-8 leading-relaxed drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}: {subtitle}
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              download
              aria-label="Download Resume in PDF format"
              className="w-full sm:w-auto"
              href="/Bruce_Bai_Resume.pdf"
            >
              <Button
                fullWidth
                aria-label="Download Resume"
                color="primary"
                endContent={<Icon icon="lucide:download" />}
                size="lg"
                variant="shadow"
              >
                Download Resume
              </Button>
            </Link>
            <Button
              fullWidth
              aria-label="View Work"
              className="w-full sm:w-auto"
              color="primary"
              endContent={<Icon icon="lucide:arrow-down" />}
              size="lg"
              variant="bordered"
              onPress={scrollToWork}
            >
              View Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};