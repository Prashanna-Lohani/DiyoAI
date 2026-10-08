import { FadeIn } from "@/components/ui/fade-in";

const AWARDS = [
  { name: "NYEF Startup Award · 2022", note: "Second Runner Up" },
  { name: "LINE Bot Awards", note: "Innovative Chatbot Award" },
] as const;

// Cubic stem bowing outward like half of a wreath.
const STEM = { p0: [36, 92], p1: [-6, 74], p2: [-8, 30], p3: [30, 4] } as const;

function stemAt(t: number) {
  const u = 1 - t;
  const { p0, p1, p2, p3 } = STEM;
  const x =
    u * u * u * p0[0] +
    3 * u * u * t * p1[0] +
    3 * u * t * t * p2[0] +
    t * t * t * p3[0];
  const y =
    u * u * u * p0[1] +
    3 * u * u * t * p1[1] +
    3 * u * t * t * p2[1] +
    t * t * t * p3[1];
  const dx =
    3 * u * u * (p1[0] - p0[0]) +
    6 * u * t * (p2[0] - p1[0]) +
    3 * t * t * (p3[0] - p2[0]);
  const dy =
    3 * u * u * (p1[1] - p0[1]) +
    6 * u * t * (p2[1] - p1[1]) +
    3 * t * t * (p3[1] - p2[1]);
  return { x, y, rot: (Math.atan2(dx, -dy) * 180) / Math.PI };
}

// Pointed leaves in pairs, growing from the stem and shrinking to the tip.
const LEAVES = Array.from({ length: 9 }, (_, i) => i / 8).flatMap((x, i) => {
  // Steps shrink toward the top so the leaves pack more densely there.
  const t = 0.08 + 0.9 * Math.pow(x, 0.85);
  const { x: px, y: py, rot } = stemAt(t);
  const len = 13 - i * 0.6;
  return [-38, 38].map((offset) => ({
    x: px,
    y: py,
    rot: rot + offset,
    len,
    half: len * 0.3,
  }));
});

function Laurel({ flip }: { flip?: boolean }) {
  const { p0, p1, p2, p3 } = STEM;
  return (
    <svg
      aria-hidden="true"
      viewBox="-14 -4 58 100"
      className={`h-20 w-11 shrink-0 text-[#b9c1cc] sm:h-24 sm:w-14 ${flip ? "-scale-x-100" : ""}`}
      fill="currentColor"
    >
      <path
        d={`M${p0[0]} ${p0[1]} C${p1[0]} ${p1[1]} ${p2[0]} ${p2[1]} ${p3[0]} ${p3[1]}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {LEAVES.map((l, i) => (
        <path
          key={i}
          d={`M0 0C${l.half} ${-l.len * 0.3} ${l.half} ${-l.len * 0.7} 0 ${-l.len}C${-l.half} ${-l.len * 0.7} ${-l.half} ${-l.len * 0.3} 0 0Z`}
          transform={`translate(${l.x} ${l.y}) rotate(${l.rot})`}
        />
      ))}
      <path d={`M${p3[0]} ${p3[1]}c1.5-3 1.5-8 0-12c-1.5 4-1.5 9 0 12z`} />
    </svg>
  );
}

export function DashboardFiveAwards() {
  return (
    <section id="awards" className="bg-background py-16 lg:py-20">
      <FadeIn className="mx-auto max-w-312 px-6 text-center md:px-8 lg:px-12">
        <h2 className="text-h1 text-foreground">Awards and recognitions</h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-20 lg:gap-32">
          {AWARDS.map((award, i) => (
            <FadeIn
              key={award.name}
              delay={0.1 + i * 0.15}
              direction="scale"
              className="flex items-center gap-3"
            >
              <Laurel />
              <div className="text-center">
                <p className="text-sm font-bold text-foreground/80 sm:text-base">
                  {award.name}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {award.note}
                </p>
              </div>
              <Laurel flip />
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
