"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FiCpu,
  FiFileText,
  FiMessageSquare,
  FiMic,
  FiVolume2,
} from "react-icons/fi";

import TemplesImage from "@/assets/images/Temples.png";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { HERO_COPY, VOICE_STEPS } from "../data/shared-content";
import { useDashboardFiveLang } from "../lang-context";

const STEP_ICONS: Record<(typeof VOICE_STEPS)[number]["icon"], IconType> = {
  mic: FiMic,
  transcribe: FiFileText,
  brain: FiCpu,
  response: FiMessageSquare,
  voice: FiVolume2,
};

function Waveform() {
  return (
    <div
      className='ml-auto flex h-5 shrink-0 items-center gap-[3px]'
      aria-hidden='true'
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.span
          key={i}
          className='w-[3px] rounded-full bg-primary'
          animate={{ height: "30%" }}
          transition={{ duration: 0 }}
        />
      ))}
    </div>
  );
}

const STAGGER = { show: { transition: { staggerChildren: 0.12 } } };
const RISE = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function DashboardFiveHero() {
  const { scrollY } = useScroll();
  const templesY = useTransform(scrollY, [0, 700], [0, 70]);
  const { lang } = useDashboardFiveLang();
  const copy = HERO_COPY[lang];
  const activeStep = 3;

  return (
    <section
      id='hero'
      className='relative overflow-hidden bg-gradient-to-b from-primary/8 via-background to-background py-16 lg:py-24'
    >
      <motion.div
        aria-hidden='true'
        style={{ y: templesY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className='pointer-events-none absolute inset-x-0 bottom-0'
      >
        <Image
          src={TemplesImage}
          alt=''
          priority
          className='h-44 w-full object-cover object-bottom select-none sm:h-64 lg:h-auto'
        />
      </motion.div>
      <div className='relative z-10 mx-auto grid max-w-312 grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:px-12'>
        <motion.div
          initial='hidden'
          animate='show'
          variants={STAGGER}
          className='flex flex-col items-start gap-5 text-left'
        >
          <motion.span
            variants={RISE}
            className='inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary'
          >
            <motion.span
              className='h-1.5 w-1.5 rounded-full bg-primary'
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            Speech &amp; Language AI for Nepal
          </motion.span>
          <motion.h1
            variants={RISE}
            className='text-display font-bold text-foreground'
            lang={lang === "np" ? "ne" : "en"}
          >
            {lang === "en" ? (
              <>
                AI that understands your{" "}
                <span className='text-primary'>Language</span>.
              </>
            ) : (
              copy.heading
            )}
          </motion.h1>
          <motion.p
            variants={RISE}
            className='max-w-lg text-body-lg text-muted-foreground'
          >
            {copy.sub}
          </motion.p>
          <motion.div
            variants={RISE}
            className='flex flex-col gap-3 sm:flex-row'
          >
            <Button
              size='lg'
              className='rounded-lg px-8 transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30'
              render={<a href='#services' />}
            >
              Explore Solutions
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='rounded-lg bg-white px-8 transition-transform hover:-translate-y-0.5'
              render={<a href='#demo' />}
            >
              Talk to Diyo
            </Button>
          </motion.div>
        </motion.div>

        <FadeIn
          delay={0.3}
          direction='right'
        >
          <div>
            <div
              id='demo'
              className='rounded-2xl border border-border bg-white p-5 text-left shadow-xl'
            >
              <div className='mb-4 flex items-center justify-between gap-3'>
                <h2 className='text-sm font-semibold text-muted-foreground'>
                  <FiMic
                    aria-hidden='true'
                    className='mr-1.5 inline-block size-4 align-[-3px]'
                  />
                  Try Voice AI: Nepali
                </h2>
                <span className='h-2.5 w-2.5 shrink-0 rounded-full bg-primary' />
              </div>
              <div className='flex flex-col gap-2'>
                {VOICE_STEPS.map((step, i) => {
                  const Icon = STEP_ICONS[step.icon];
                  return (
                    <div
                      key={step.label}
                      className={cn(
                        "flex items-center gap-3 rounded-xl border border-border px-3.5 py-3 transition-colors duration-300",
                        i === activeStep && "border-primary/35 bg-primary/10",
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300",
                          i === activeStep &&
                            "bg-primary text-primary-foreground",
                        )}
                      >
                        <Icon
                          aria-hidden='true'
                          size={17}
                          strokeWidth={2}
                        />
                      </span>
                      <span className='min-w-0 text-sm font-semibold text-foreground'>
                        {step.label}
                        <small className='mt-0.5 block truncate font-normal text-muted-foreground'>
                          {step.detail}
                        </small>
                      </span>
                      {i === 0 && (
                        <Waveform />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
