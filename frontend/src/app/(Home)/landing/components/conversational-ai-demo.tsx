"use client";

import { useState } from "react";
import { FiMessageSquare, FiMic, FiVolume2 } from "react-icons/fi";

import { cn } from "@/lib/utils";

const MODES = [
  {
    id: "chat",
    label: "Chatbots",
    icon: FiMessageSquare,
    detail:
      "Text conversations for customer support, citizen information and everyday digital services.",
  },
  {
    id: "voice",
    label: "Voice Bots",
    icon: FiMic,
    detail:
      "Spoken conversations that let people ask questions and interact naturally through speech.",
  },
] as const;

const BARS = [30, 55, 80, 45, 95, 65, 40, 75, 50, 28, 60, 85, 42, 70, 35];

function ChatView() {
  return (
    <div className="flex flex-col gap-3">
      <div className="max-w-[80%] self-end rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
        नमस्ते, मलाई सहयोग चाहियो
      </div>
      <div className="max-w-[80%] self-start rounded-2xl rounded-bl-sm border border-border bg-white px-4 py-2.5 text-sm text-foreground">
        अवश्य, म सहयोग गर्छु। तपाईंलाई के जानकारी चाहिएको हो?
      </div>
      <div className="mt-1 flex items-center gap-2 self-start rounded-full border border-border bg-white px-3 py-1.5 text-xs text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        Typing in Nepali, English and more
      </div>
    </div>
  );
}

function VoiceView() {
  return (
    <div className="flex flex-col items-center gap-4 py-2">
      <span className="flex h-14 items-center gap-[5px]" aria-hidden="true">
        {BARS.map((h, i) => (
          <span
            key={i}
            className="block w-[5px] rounded-full bg-gradient-to-t from-primary to-[#86bcff]"
            style={{ height: `${h}%` }}
          />
        ))}
      </span>
      <div className="w-full rounded-xl border border-border bg-white px-4 py-3 text-center text-sm text-foreground">
        “नमस्ते, मलाई सहयोग चाहियो”
      </div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <FiVolume2 aria-hidden="true" className="size-4 text-primary" />
        Replies back in natural Nepali speech
      </div>
    </div>
  );
}

export function ConversationalAIDemo() {
  const [mode, setMode] = useState<(typeof MODES)[number]["id"]>("chat");
  const active = MODES.find((m) => m.id === mode)!;

  return (
    <div className="rounded-2xl border border-primary/15 bg-[#e8f1fc] p-5 sm:p-6">
      <div
        role="tablist"
        aria-label="Conversation type"
        className="grid grid-cols-2 gap-1 rounded-full bg-white/70 p-1"
      >
        {MODES.map((m) => {
          const Icon = m.icon;
          return (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={mode === m.id}
              onClick={() => setMode(m.id)}
              className={cn(
                "flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                mode === m.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon aria-hidden="true" className="size-4" />
              {m.label}
            </button>
          );
        })}
      </div>

      <div className="mt-5 min-h-44 rounded-xl bg-white/60 p-4">
        {mode === "chat" ? <ChatView /> : <VoiceView />}
      </div>

      <p className="mt-4 text-sm text-muted-foreground">{active.detail}</p>

      <div className="mt-5 flex items-start gap-3 border-t border-primary/15 pt-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <FiVolume2 aria-hidden="true" className="size-4" />
        </span>
        <div>
          <span className="block text-[0.65rem] font-bold tracking-widest text-primary uppercase">
            The voice capability within Conversational AI
          </span>
          <h4 className="mt-1 text-h3 text-foreground">Voice AI</h4>
          <p className="mt-1 text-sm text-muted-foreground">
            Speech-based interaction brings local-language conversations to
            voice-enabled experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
