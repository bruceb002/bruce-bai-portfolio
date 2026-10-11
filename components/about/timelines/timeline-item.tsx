'use client';
import { motion } from "framer-motion";

import { TimelineItemProps } from "@/components/about/types";

export const TimelineItem = ({
  title,
  date,
  description,
  variants,
}: TimelineItemProps) => {
  return (
    <motion.li className="mb-10 relative pl-6 transform-gpu" variants={variants}>
      <span className="absolute left-0 top-1 bg-primary-500 rounded-full w-4 h-4 border-2 border-background z-10" />
      <h4 className="text-lg font-semibold text-foreground">{title}</h4>
      <time className="block mb-1 text-sm text-primary-500">{date}</time>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.li>
  );
};