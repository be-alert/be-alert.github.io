import { LINKS } from '../config';
import { GetButtons, LogoMark, QrCode, RadarRings, Reveal, Wordmark } from './ui';

export function FinalCta() {
  return (
    <section className="relative py-16 sm:py-24" aria-label="Get Be Alert">
      <div className="wrap">
        <Reveal className="grain relative overflow-hidden rounded-[44px] border border-white/10 bg-[radial-gradient(90%_120%_at_50%_0%,rgb(79_116_255/0.45),transparent_60%),linear-gradient(180deg,#0d1430,#070a17)] px-6 py-20 sm:px-12 lg:px-16 lg:py-24">
          <RadarRings sweep={false} className="left-1/2 top-[-30%] h-[900px] w-[900px] -translate-x-1/2" />
          <div className="relative grid items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="text-center lg:text-left">
              <h2 className="text-balance text-title font-bold">
                Be the first to know. <span className="accent grad-text">Be the first to help.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65 lg:mx-0">
                Join your neighbours on Be Alert — free on Android and in your browser.
              </p>
              <GetButtons className="mt-10 justify-center lg:justify-start" />
            </div>
            <div className="mx-auto hidden flex-col items-center gap-4 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:flex">
              <QrCode value={LINKS.android} size={150} />
              <p className="max-w-[190px] text-center text-sm font-semibold text-white/70">Scan with your phone camera to get the Android app</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const COLS: [string, [string, string][]][] = [
  ['Product', [['Why Be Alert', '#why'], ['Tour', '#tour'], ['Categories', '#categories'], ['Safety', '#safety'], ['FAQ', '#faq']]],
  ['Get Be Alert', [['Android app', LINKS.android], ['Web app', LINKS.webApp], ['Owner Console', LINKS.ownerConsole]]],
  ['Legal', [['Privacy Policy', LINKS.privacy], ['Terms of Use', LINKS.terms]]],
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20">
      <div className="hairline absolute inset-x-0 top-0 h-px" />
      <div className="wrap grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <a href="#top" className="flex items-center gap-2.5" aria-label="Be Alert — back to top">
            <LogoMark size={34} />
            <Wordmark />
          </a>
          <p className="mt-5 max-w-xs leading-relaxed text-white/50">Your neighbourhood, live. Alerts, help and local life within 1–50 km of you.</p>
        </div>
        {COLS.map(([title, links]) => (
          <div key={title}>
            <p className="text-sm font-bold text-white">{title}</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              {links.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-white/50 transition hover:text-white" {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="wrap mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/[0.07] py-7 text-[13px] text-white/40 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Be Alert. Made in Pakistan.</p>
        <p>In an emergency, always call 1122 or your local emergency number first.</p>
      </div>

      {/* oversized wordmark */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <p className="wrap -mb-[0.2em] whitespace-nowrap text-center text-[22vw] font-extrabold leading-none tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.1)] lg:text-[260px]">
          Be Alert
        </p>
      </div>
      <p className="sr-only">The Android robot is reproduced or modified from work created and shared by Google and used according to terms described in the Creative Commons 3.0 Attribution License.</p>
    </footer>
  );
}
