"use client";

import { useEffect, useState } from "react";

export function useRotatingIndex(length: number, intervalMs = 5000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [length, intervalMs]);

  return [index, setIndex] as const;
}
