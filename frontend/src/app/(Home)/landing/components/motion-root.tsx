"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

/** Honors the visitor's reduced-motion setting for every animation below. */
export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
