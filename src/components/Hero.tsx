import { useMemo } from 'react';
import { CalendarHeart, Construction, Droplet, Wrench, Zap, type LucideIcon } from 'lucide-react';
import { GetButtons, Phone, RadarRings, cn } from './ui';

type Ping = { icon: LucideIcon; color: string; ring: string; title: string; meta: string; x: number; y: number; side: 'left' | 'right'; delay: number; mobile?: boolean };

// Illustrative examples of what neighbours post (positions in % of the stage).
const PINGS: Ping[] = [
  { icon: Droplet, color: 'bg-alert-500', ring: 'bg-alert-500', title: 'O− blood needed', meta: 'City Cardiac Hospital · 1.9 km', x: 13, y: 17, side: 'right', delay: 300, mobile: true },
  { icon: Zap, color: 'bg-amber-500', ring: 'bg-amber-400', title: 'Power cut in Block 4', meta: '18 neighbours confirmed', x: 86, y: 27, side: 'left', delay: 900, mobile: true },
  { icon: Construction, color: 'bg-brand-500', ring: 'bg-brand-400', title: 'Road closed', meta: 'Market chowk · 720 m', x: 9, y: 47, side: 'right', delay: 1500 },
  { icon: Wrench, color: 'bg-mint-500', ring: 'bg-mint-400', title: 'AC technician nearby', meta: 'Verified · 1.2 km', x: 90, y: 56, side: 'left', delay: 2100 },
  { icon: CalendarHeart, color: 'bg-violet-500', ring: 'bg-violet-400', title: 'Clean-up drive, Sunday', meta: 'Community · 2.4 km', x: 19, y: 70, side: 'right', delay: 2700 },
];

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden pt-32 sm:pt-36">
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-18rem] h-[44rem] w-[72rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(79_116_255/0.32),transparent)]" />
        <div className="absolute right-[-12rem] top-[18rem] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(closest-side,rgb(46_230_197/0.16),transparent)]" />
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="wrap relative text-center">
        <div className="animate-pop">
          <span className="kicker">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-radar-400" />
              <span className="relative h-2 w-2 rounded-full bg-radar-400" />
            </span>
            Live on Android & the web · Free
          </span>
        </div>

        <h1 className="mx-auto mt-7 max-w-6xl animate-pop text-balance text-display font-bold [animation-delay:80ms]">
          Know what’s happening <span className="accent grad-text animate-shine pr-1">around you.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl animate-pop text-pretty text-[17px] leading-relaxed text-white/60 [animation-delay:160ms] sm:text-lg">
          The moment it happens. Be Alert is your neighbourhood’s live radar — urgent alerts, blood requests, outages, traffic, jobs, rentals and trusted local services, all within{' '}
          <span className="font-semibold text-white">1 to 50 km</span> of wherever you are.
        </p>

        <GetButtons center className="mt-9 animate-pop [animation-delay:240ms]" />

        <p className="mt-6 animate-pop text-sm text-white/40 [animation-delay:320ms]">
          <span lang="ur" dir="rtl" className="font-urdu text-[15px] text-white/60">
            اپنے آس پاس کی ہر خبر
          </span>
          <span className="mx-2.5">·</span>every update from around you
        </p>
      </div>

      <RadarStage />
    </section>
  );
}

/** Stylised city map with a radar sweep, live alert pins and the app in the middle. */
function RadarStage() {
  const city = useMemo(buildCity, []);
  return (
    <div className="wrap relative mt-14 sm:mt-16">
      <div className="relative h-[600px] overflow-hidden rounded-t-[40px] border border-b-0 border-white/[0.08] bg-night-1 sm:h-[680px] lg:h-[720px]">
        {/* map */}
        <svg viewBox="0 0 1200 720" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <radialGradient id="mapFade" cx="50%" cy="46%" r="65%">
              <stop offset="0.35" stopColor="#fff" stopOpacity="1" />
              <stop offset="1" stopColor="#fff" stopOpacity="0.05" />
            </radialGradient>
            <mask id="mapMask">
              <rect width="1200" height="720" fill="url(#mapFade)" />
            </mask>
          </defs>
          <g mask="url(#mapMask)">
            {city.blocks.map((b, i) => (
              <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx="5" fill={b.park ? 'rgb(52 211 153 / 0.09)' : 'rgb(255 255 255 / 0.042)'} />
            ))}
            <path d="M-20 560 C 220 520, 360 640, 620 600 S 1000 470, 1240 520 L 1240 600 C 1000 560, 840 690, 600 690 S 200 630, -20 650 Z" fill="rgb(79 116 255 / 0.09)" />
            {city.roads.map((d, i) => (
              <path key={i} d={d} stroke="rgb(124 155 255 / 0.16)" strokeWidth="9" fill="none" strokeLinecap="round" />
            ))}
            {city.roads.map((d, i) => (
              <path key={`c${i}`} d={d} stroke="rgb(255 255 255 / 0.05)" strokeWidth="1.5" strokeDasharray="10 14" fill="none" />
            ))}
          </g>
        </svg>

        {/* radar centred on the phone */}
        <RadarRings className="left-1/2 top-[44%] h-[860px] w-[860px] -translate-x-1/2 -translate-y-1/2" />

        {/* pins */}
        {PINGS.map((p) => (
          <div
            key={p.title}
            className={cn('absolute z-20 hidden animate-pop', p.mobile ? 'sm:block' : 'md:block')}
            style={{ left: `${p.x}%`, top: `${p.y}%`, animationDelay: `${p.delay}ms` }}
          >
            <span className="relative -ml-2 -mt-2 flex h-4 w-4">
              <span className={cn('absolute inset-0 animate-ping rounded-full opacity-70', p.ring)} style={{ animationDelay: `${p.delay}ms` }} />
              <span className={cn('relative h-4 w-4 rounded-full border-2 border-night-1', p.color)} />
            </span>
            <div
              className={cn(
                'absolute top-1/2 hidden w-max -translate-y-1/2 items-center gap-3 rounded-2xl border border-white/10 bg-night-2/85 py-2.5 pl-2.5 pr-4 shadow-phone backdrop-blur-xl sm:flex',
                p.side === 'right' ? 'left-5' : 'right-5'
              )}
            >
              <span className={cn('flex h-9 w-9 items-center justify-center rounded-xl text-white', p.color)}>
                <p.icon className="h-[18px] w-[18px]" />
              </span>
              <span className="text-left">
                <span className="block text-[13px] font-bold leading-tight">{p.title}</span>
                <span className="mt-0.5 block text-[11.5px] text-white/50">{p.meta}</span>
              </span>
            </div>
          </div>
        ))}

        {/* phone */}
        <div className="absolute left-1/2 top-10 z-10 w-[270px] -translate-x-1/2 sm:top-12 sm:w-[300px]">
          <div className="animate-float">
            <Phone src="./screens/feed-dark.webp" alt="Be Alert home screen: 37 things happening near you" priority />
          </div>
        </div>

        {/* fade into the page */}
        <div className="absolute inset-x-0 bottom-0 z-30 h-36 bg-gradient-to-t from-night via-night/70 to-transparent" />
      </div>
    </div>
  );
}

/** Deterministic "city": blocks on a jittered grid plus a few arterial roads. */
function buildCity() {
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const blocks: { x: number; y: number; w: number; h: number; park: boolean }[] = [];
  for (let gx = 0; gx < 1200; gx += 78) {
    for (let gy = 0; gy < 720; gy += 66) {
      if (rnd() < 0.12) continue;
      const w = 54 + rnd() * 16;
      const h = 44 + rnd() * 14;
      blocks.push({ x: gx + 8, y: gy + 8, w, h, park: rnd() < 0.08 });
    }
  }
  const roads = [
    'M -40 120 C 300 90, 520 200, 820 150 S 1100 90, 1260 140',
    'M -40 430 C 260 470, 480 380, 760 420 S 1080 480, 1260 430',
    'M 280 -40 C 300 200, 220 420, 330 760',
    'M 900 -40 C 860 230, 960 470, 880 760',
    'M -40 700 L 520 240 L 1260 -20',
  ];
  return { blocks, roads };
}
