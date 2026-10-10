import {
  BarChart3,
  Briefcase,
  CalendarDays,
  Car,
  Construction,
  Droplet,
  GraduationCap,
  Home,
  MessagesSquare,
  Phone,
  Share2,
  ShoppingBag,
  Siren,
  Sparkles,
  Tag,
  UserRoundCheck,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { Heading, Reveal, cn } from './ui';

type Cat = { icon: LucideIcon; name: string; line: string; rgb: string; urgent?: boolean };

const CATS: Cat[] = [
  { icon: Droplet, name: 'Blood Need', line: 'Group, hospital, bags needed', rgb: '255 77 85', urgent: true },
  { icon: Zap, name: 'Outages', line: 'Power, gas and water', rgb: '255 165 26', urgent: true },
  { icon: Construction, name: 'Traffic & Roads', line: 'Blockades, jams, accidents', rgb: '255 122 69', urgent: true },
  { icon: MessagesSquare, name: 'Community', line: 'News, questions, lost & found', rgb: '79 116 255' },
  { icon: BarChart3, name: 'Polls', line: 'Ask your neighbours', rgb: '139 123 255' },
  { icon: CalendarDays, name: 'Events', line: 'Meetups, drives, matches', rgb: '236 98 210' },
  { icon: Briefcase, name: 'Jobs', line: 'Full-time, part-time, gigs', rgb: '79 116 255' },
  { icon: Wrench, name: 'Home Services', line: 'Electricians, plumbers, AC', rgb: '255 190 61' },
  { icon: GraduationCap, name: 'Tutors', line: 'Home tuition and coaching', rgb: '74 222 155' },
  { icon: UserRoundCheck, name: 'Domestic Help', line: 'Maids, cooks, drivers', rgb: '46 230 197' },
  { icon: Home, name: 'Rentals', line: 'Flats, portions, shops', rgb: '74 222 155' },
  { icon: ShoppingBag, name: 'Buy & Sell', line: 'Phones, furniture, more', rgb: '124 155 255' },
  { icon: Tag, name: 'Deals', line: 'Today’s local discounts', rgb: '255 107 112' },
  { icon: Car, name: 'Carpool', line: 'Shared rides, women-only', rgb: '46 230 197' },
];

export function Categories() {
  return (
    <section id="categories" className="relative py-24 sm:py-32">
      <div className="wrap">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <Heading
            kicker="Everything local, one app"
            title={
              <>
                Fourteen ways your <span className="accent grad-text">neighbourhood</span> talks.
              </>
            }
          />
          <Reveal className="max-w-sm text-lg leading-relaxed text-white/60 lg:pb-2">
            From emergencies to everyday life. Each category has its own smart fields and expires on its own — so the feed stays fresh.
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {CATS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 7) * 50}>
              <div
                className="group relative h-full overflow-hidden rounded-[22px] border border-white/[0.07] bg-white/[0.025] p-4 transition duration-500 hover:-translate-y-1 hover:border-white/15 sm:p-5"
                style={{ ['--c' as string]: c.rgb }}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" style={{ background: `rgb(${c.rgb} / 0.35)` }} />
                <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: `rgb(${c.rgb} / 0.14)`, color: `rgb(${c.rgb})` }}>
                  <c.icon className="h-5 w-5" />
                </span>
                <p className="relative mt-5 font-bold tracking-[-0.01em]">{c.name}</p>
                <p className="relative mt-1 text-[13px] leading-snug text-white/45">{c.line}</p>
                {c.urgent && <span className="relative mt-3 inline-block rounded-full bg-alert-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-alert-300">Urgent</span>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const NUMBERS = [
  ['1122', 'Rescue'],
  ['15', 'Police'],
  ['115', 'Edhi'],
  ['16', 'Fire'],
];

export function EmergencySpotlight() {
  return (
    <section className="relative py-10 sm:py-16" aria-label="Emergency">
      <div className="wrap">
        <Reveal className="relative overflow-hidden rounded-[40px] border border-alert-500/25 bg-[radial-gradient(120%_120%_at_0%_0%,rgb(255_77_85/0.28),transparent_55%),linear-gradient(180deg,#140a10,#0b0710)] p-7 sm:p-12 lg:p-16">
          <div className="bg-dots pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_80%_50%,black,transparent_70%)]" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="kicker border-alert-500/30 bg-alert-500/10 text-alert-300">
                <Siren className="h-3.5 w-3.5" /> Emergency
              </span>
              <h2 className="mt-6 text-balance text-title font-bold">
                When seconds matter, <span className="accent text-alert-300">it’s one tap.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
                Every emergency number in one place, your trusted contacts, and your current GPS location ready to send — exactly where you are, not a guess.
              </p>
              <ul className="mt-8 grid gap-3 text-[15px] font-medium text-white/80 sm:grid-cols-2">
                {[
                  [Phone, 'Call 1122, 15, 115 or 16 instantly'],
                  [Share2, 'Share your location on WhatsApp'],
                  [UserRoundCheck, 'Your trusted contacts, saved'],
                  [Sparkles, 'Urgent alerts within 5 km'],
                ].map(([I, t]) => {
                  const Icon = I as LucideIcon;
                  return (
                    <li key={t as string} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-alert-500/15 text-alert-300">
                        <Icon className="h-4 w-4" />
                      </span>
                      {t as string}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative mx-auto flex w-full max-w-sm flex-col items-center">
              <div className="relative flex h-56 w-56 items-center justify-center">
                <span className="absolute inset-0 animate-ripple rounded-full border-2 border-alert-400/50" />
                <span className="absolute inset-0 animate-ripple rounded-full border-2 border-alert-400/40 [animation-delay:1.3s]" />
                <span className="absolute inset-0 animate-ripple rounded-full border-2 border-alert-400/30 [animation-delay:2.6s]" />
                <span className="flex h-40 w-40 flex-col items-center justify-center rounded-full bg-gradient-to-b from-alert-400 to-alert-600 shadow-[0_30px_80px_-10px_rgb(255_77_85/0.7),inset_0_2px_0_rgb(255_255_255/0.3)]">
                  <Siren className="h-10 w-10" />
                  <span className="mt-1 text-2xl font-extrabold tracking-tight">SOS</span>
                </span>
              </div>
              <div className="mt-10 grid w-full grid-cols-4 gap-2">
                {NUMBERS.map(([n, l]) => (
                  <div key={n} className={cn('rounded-2xl border border-white/10 bg-white/[0.04] py-3 text-center')}>
                    <div className="text-lg font-extrabold tracking-tight">{n}</div>
                    <div className="text-[11px] font-semibold text-white/45">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
