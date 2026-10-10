import { ArrowRight, BellOff, CheckCheck, Construction, Droplet, MapPin, ShieldCheck, Users, Zap } from 'lucide-react';
import { Heading, Reveal, cn } from './ui';

const FACTS = [
  ['1–50 km', 'Radius you control'],
  ['14', 'Local categories'],
  ['0', 'Ads. Ever.'],
  ['1', 'Account for Android & web'],
];

export function Facts() {
  return (
    <section aria-label="Be Alert in numbers" className="relative">
      <div className="wrap">
        <div className="grid grid-cols-2 border-y border-white/[0.07] lg:grid-cols-4">
          {FACTS.map(([n, l], i) => (
            <Reveal key={l} delay={i * 80} className={cn('px-4 py-9 text-center sm:py-11', i % 2 === 1 && 'border-l border-white/[0.07]', i >= 2 && 'border-t border-white/[0.07] lg:border-t-0', i === 2 && 'lg:border-l')}>
              <div className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">{n}</div>
              <div className="mt-2 text-sm font-medium text-white/50">{l}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const CHAT = [
  { who: 'Imran', text: 'Light kab aayegi?? 😩', time: '9:02' },
  { who: 'Forwarded', text: '🌸 Good morning! Share with 10 people for good luck 🌸', time: '9:03', fwd: true },
  { who: 'Ayesha', text: 'Anyone selling a used fridge?', time: '9:05' },
  { who: 'Bilal', text: 'Is the road near the chowk open or not???', time: '9:06' },
  { who: 'Unknown', text: 'URGENT blood needed!! (from 2021?)', time: '9:06', warn: true },
  { who: 'Sana', text: '?', time: '9:07' },
];

const CARDS = [
  { icon: Droplet, tone: 'bg-alert-500', label: 'Blood need · O−', title: 'O− blood needed for surgery', meta: '1.9 km · 12 confirmed' },
  { icon: Zap, tone: 'bg-amber-500', label: 'Outage', title: 'No electricity in Block 4', meta: '1.1 km · 18 confirmed' },
  { icon: Construction, tone: 'bg-brand-500', label: 'Traffic', title: 'Road closed at market chowk', meta: '720 m · 5 confirmed' },
];

export function Why() {
  return (
    <section id="why" className="relative py-16 sm:py-24 lg:py-32">
      <div className="wrap">
        <Heading
          center
          kicker="Why Be Alert"
          title={
            <>
              Your area’s news is buried in <span className="accent text-white/50">group chats.</span> We fixed that.
            </>
          }
          lead="Forwards, old messages and guesswork. Be Alert turns the noise into a clean, verified feed of what’s actually happening near you — sorted by distance and urgency."
        />

        <div className="mt-20 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* Before */}
          <Reveal className="panel relative overflow-hidden p-5 opacity-90 sm:p-6">
            <div className="flex items-center gap-3 border-b border-white/[0.07] pb-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/60">
                <Users className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-bold">Mohalla Group 🏘️</p>
                <p className="text-xs text-white/60">247 members · 999+ unread</p>
              </div>
              <BellOff className="h-5 w-5 text-white/30" />
            </div>
            <ul className="mt-4 space-y-2.5">
              {CHAT.map((m, i) => (
                <li key={i} className={cn('max-w-[88%] rounded-2xl rounded-tl-md bg-white/[0.06] px-3.5 py-2.5', i % 3 === 1 && 'ml-auto rounded-tl-2xl rounded-tr-md', i >= 4 && 'hidden sm:block')}>
                  <p className={cn('text-[11px] font-bold', m.warn ? 'text-alert-300' : 'text-radar-300/80')}>{m.fwd ? '↪ Forwarded many times' : m.who}</p>
                  <p className="text-[14px] text-white/75">{m.text}</p>
                  <p className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-white/30">
                    {m.time} <CheckCheck className="h-3 w-3" />
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2 text-[12px] font-semibold">
              {['No location', 'Not verified', 'Out of date', 'Buried in noise'].map((t) => (
                <span key={t} className="rounded-full bg-alert-500/10 px-3 py-1 text-alert-300">✕ {t}</span>
              ))}
            </div>
          </Reveal>

          <div className="flex justify-center" aria-hidden="true">
            <span className="flex h-14 w-14 rotate-90 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-radar-300 lg:rotate-0">
              <ArrowRight className="h-6 w-6" />
            </span>
          </div>

          {/* After */}
          <Reveal delay={120} className="relative overflow-hidden rounded-[28px] border border-radar-400/25 bg-gradient-to-b from-radar-400/[0.08] to-brand-500/[0.04] p-5 shadow-[0_30px_80px_-40px_rgb(46_230_197/0.45)] sm:p-6">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-radar-300">Be Alert · near you</p>
                <p className="mt-1 font-bold">3 urgent within 3 km</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/70">
                <MapPin className="h-3.5 w-3.5 text-radar-300" /> Your location
              </span>
            </div>
            <ul className="mt-4 space-y-3">
              {CARDS.map((c) => (
                <li key={c.title} className="flex items-center gap-3.5 rounded-2xl border border-white/[0.07] bg-night-2/70 p-3.5">
                  <span className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white', c.tone)}>
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-bold uppercase tracking-wide text-white/45">{c.label}</span>
                    <span className="block truncate font-bold">{c.title}</span>
                  </span>
                  <span className="shrink-0 text-right text-[11.5px] font-semibold text-white/50">{c.meta.split(' · ').map((x) => <span key={x} className="block">{x}</span>)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2 text-[12px] font-semibold">
              {['Exact distance', 'Real people', 'Neighbours confirm', 'Expires automatically'].map((t) => (
                <span key={t} className="flex items-center gap-1 rounded-full bg-radar-400/10 px-3 py-1 text-radar-200">
                  <ShieldCheck className="h-3.5 w-3.5" /> {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
