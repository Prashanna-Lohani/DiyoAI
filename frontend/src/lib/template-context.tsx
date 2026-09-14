"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type TemplateId = "1" | "2" | "3";

export const TEMPLATES: { id: TemplateId; label: string }[] = [
  { id: "1", label: "Dashboard 1" },
  { id: "2", label: "Dashboard 2" },
  { id: "3", label: "Dashboard 3" },
];

const STORAGE_KEY = "diyo-template";

type TemplateContextValue = {
  template: TemplateId;
  setTemplate: (template: TemplateId) => void;
};

const TemplateContext = createContext<TemplateContextValue | null>(null);

export function TemplateProvider({ children }: { children: ReactNode }) {
  const [template, setTemplateState] = useState<TemplateId>("1");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "1" || stored === "2" || stored === "3") {
        setTemplateState(stored);
      }
    } catch {
      // localStorage unavailable — keep default
    }
  }, []);

  const setTemplate = (next: TemplateId) => {
    setTemplateState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable — selection still applies for this session
    }
  };

  return (
    <TemplateContext.Provider value={{ template, setTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
}

export function useTemplate() {
  const ctx = useContext(TemplateContext);
  if (!ctx) {
    throw new Error("useTemplate must be used within a TemplateProvider");
  }
  return ctx;
}
