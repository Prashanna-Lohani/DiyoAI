"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

import type { Lang } from "./data/shared-content";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function DashboardFiveLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useDashboardFiveLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error(
      "useDashboardFiveLang must be used within DashboardFiveLangProvider",
    );
  }
  return ctx;
}
