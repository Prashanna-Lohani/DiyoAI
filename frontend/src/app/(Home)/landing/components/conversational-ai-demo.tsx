"use client";

import { useState } from "react";
import { FiMessageSquare, FiMic, FiVolume2 } from "react-icons/fi";

import type { PageContent } from "@/content";
import { cn } from "@/lib/utils";

type Content = PageContent["solutions"]["conversational"];

const BARS = [30, 55, 80, 45, 95, 65, 40, 75, 50, 28, 60, 85, 42, 70, 35];

function ChatView({ content }: { content: Content }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="max-w-[80%] self-end rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
        {content.chatUserMessage}
      </div>
      <div className="max-w-[80%] self-start rounded-2xl rounded-bl-sm border border-border bg-white px-4 py-2.5 text-sm text-foreground">
        {content.chatBotMessage}
      </div>
      <div className="mt-1 flex items-center gap-2 self-start rounded-full border border-border bg-white px-3 py-1.5 text-xs text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {content.chatHint}
      </div>
    </div>
  );
}

function VoiceView({ content }: { content: Content }) {
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
        {content.voiceTranscript}
      </div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <FiVolume2 aria-hidden="true" className="size-4 text-primary" />
        {content.voiceHint}
      </div>
    </div>
  );
}

export function ConversationalAIDemo({ content }: { content: Content }) {
  const MODES = [
    { id: "chat", label: content.chatLabel, icon: FiMessageSquare, detail: content.chatDetail },
    { id: "voice", label: content.voiceLabel, icon: FiMic, detail: content.voiceDetail },
  ] as const;
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
        {mode === "chat" ? (
          <ChatView content={content} />
        ) : (
          <VoiceView content={content} />
        )}
      </div>

      <p className="mt-4 text-sm text-muted-foreground">{active.detail}</p>

      <div className="mt-5 flex items-start gap-3 border-t border-primary/15 pt-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <FiVolume2 aria-hidden="true" className="size-4" />
        </span>
        <div>
          <span className="block text-[0.65rem] font-bold tracking-widest text-primary uppercase">
            {content.voiceEyebrow}
          </span>
          <h4 className="mt-1 text-h3 text-foreground">
            {content.voiceTitle}
          </h4>
          <p className="mt-1 text-sm text-muted-foreground">
            {content.voiceText}
          </p>
        </div>
      </div>
    </div>
  );
}
