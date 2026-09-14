"use client";

import { useEffect, useRef, useState } from "react";
import { FiCheck, FiChevronDown, FiLayout } from "react-icons/fi";

import { cn } from "@/lib/utils";
import { TEMPLATES, useTemplate } from "@/lib/template-context";

export function TemplateSwitcher({ dark = false }: { dark?: boolean }) {
  const { template, setTemplate } = useTemplate();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const activeLabel = TEMPLATES.find((t) => t.id === template)?.label;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          "flex cursor-pointer items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
          dark
            ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
            : "border-border bg-white text-foreground hover:bg-muted",
        )}
      >
        <FiLayout size={14} />
        {activeLabel}
        <FiChevronDown
          size={14}
          className={cn("transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-white p-1 text-foreground shadow-lg"
        >
          {TEMPLATES.map((t) => (
            <li key={t.id}>
              <button
                type="button"
                role="option"
                aria-selected={t.id === template}
                onClick={() => {
                  setTemplate(t.id);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full cursor-pointer items-center justify-between rounded-lg px-2.5 py-2 text-left text-sm transition-colors hover:bg-muted",
                  t.id === template && "font-semibold",
                )}
              >
                {t.label}
                {t.id === template && <FiCheck size={14} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
