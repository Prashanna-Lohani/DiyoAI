"use client";

import { motion } from "framer-motion";

const HEIGHTS = [30, 55, 80, 45, 95, 65, 40, 75, 50, 28];

export function VoiceBars() {
  return (
    <span
      aria-hidden="true"
      className="mb-4 flex h-10 items-center gap-[5px]"
    >
      {HEIGHTS.map((h, i) => (
        <motion.span
          key={i}
          className="block w-[5px] rounded-full bg-gradient-to-t from-primary to-[#86bcff]"
          initial={{ height: `${h}%` }}
          animate={{ height: [`${h}%`, `${Math.max(22, 100 - h)}%`, `${h}%`] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.12,
          }}
        />
      ))}
    </span>
  );
}
