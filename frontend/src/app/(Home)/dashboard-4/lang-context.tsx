"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

import type { Lang } from "./data/content";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function DashboardFourLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useDashboardFourLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error(
      "useDashboardFourLang must be used within DashboardFourLangProvider",
    );
  }
  return ctx;
}
