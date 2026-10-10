import { BadgeCheck, EyeOff, Flag, KeyRound, Lock, MapPinned, ShieldCheck, Trash2, type LucideIcon } from 'lucide-react';
import { LINKS } from '../config';
import { Heading, Reveal } from './ui';

const PRIVACY: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: EyeOff, title: 'No ads. No data selling.', body: 'There are no advertisers. Your information is only used to run the app.' },
  { icon: KeyRound, title: 'Sign in your way', body: 'Use a password, or a one-time 6-digit code sent to your email — no password needed.' },
  { icon: Lock, title: 'Private by default', body: 'Your email and verification details are never shown to anyone.' },
  { icon: MapPinned, title: 'Your location, your call', body: 'Used on your device to show what’s near you. Shared only when you choose.' },
  { icon: ShieldCheck, title: 'Locked-down database', body: 'Encrypted connections and strict access rules on every single table.' },
  { icon: Trash2, title: 'Leave anytime', body: 'Download your data or delete your account and everything you posted.' },
];

const MODERATION = [
  { icon: Flag, title: 'Report anything', body: 'Every post has a report button. Three reports from established accounts hide it automatically.' },
  { icon: BadgeCheck, title: 'Verified badges', body: 'Businesses and service providers verify with their CNIC, checked by our moderators.' },
  { icon: ShieldCheck, title: 'Real moderators', body: 'A moderation team reviews reports, suspends abusers and keeps a permanent audit trail.' },
];

export function Trust() {
  return (
    <section id="safety" className="relative py-24 sm:py-32">
      <div className="wrap">
        <Heading
          kicker="Safety & privacy"
          title={
            <>
              Built to be <span className="accent grad-text">trusted</span> by the whole neighbourhood.
            </>
          }
          lead="A local app only works when people feel safe using it. So privacy and moderation were designed in from day one — not added later."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {MODERATION.map((m, i) => (
            <Reveal key={m.title} delay={i * 90} className="relative overflow-hidden rounded-[28px] border border-radar-400/20 bg-gradient-to-b from-radar-400/[0.07] to-transparent p-7">
              <m.icon className="h-7 w-7 text-radar-300" />
              <h3 className="mt-6 text-xl font-bold tracking-[-0.02em]">{m.title}</h3>
              <p className="mt-2 leading-relaxed text-white/55">{m.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-px overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {PRIVACY.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 80} className="bg-night p-7 transition hover:bg-night-1">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/85">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-bold">{p.title}</h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/50">{p.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-white/50">
          <span>Read the details:</span>
          <a href={LINKS.privacy} target="_blank" rel="noopener" className="text-white/80 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-radar-400">
            Privacy Policy
          </a>
          <a href={LINKS.terms} target="_blank" rel="noopener" className="text-white/80 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-radar-400">
            Terms of Use
          </a>
        </Reveal>
      </div>
    </section>
  );
}
