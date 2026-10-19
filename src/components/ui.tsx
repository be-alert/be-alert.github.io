import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';
import QRCode from 'qrcode';
import { LINKS } from '../config';
import { Icon } from './Social';

export function cn(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(' ');
}

/** The Be Alert radar mark (same as the app icon). */
export function LogoMark({ size = 34, className }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4f74ff" />
          <stop offset="1" stopColor="#2a45d6" />
        </linearGradient>
        <linearGradient id={`s${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2ee6c5" stopOpacity="0" />
          <stop offset="1" stopColor="#2ee6c5" stopOpacity=".95" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="17" fill={`url(#g${id})`} />
      <circle cx="32" cy="32" r="20" fill="none" stroke="#fff" strokeOpacity=".26" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="11" fill="none" stroke="#fff" strokeOpacity=".45" strokeWidth="2.5" />
      <path d="M32 32 L32 12 A20 20 0 0 1 50.5 24.5 Z" fill={`url(#s${id})`} />
      <circle cx="32" cy="32" r="3.5" fill="#fff" />
      <circle cx="44" cy="21" r="3" fill="#2ee6c5" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('text-[19px] font-extrabold tracking-[-0.03em] text-white', className)}>
      Be<span className="text-radar-400"> Alert</span>
    </span>
  );
}

/**
 * Photo-real phone frame around an app screenshot. A status bar sits above the screenshot so
 * the camera island never covers the app's own header.
 */
export function Phone({ src, alt, className, priority, style }: { src: string; alt: string; className?: string; priority?: boolean; style?: CSSProperties }) {
  return (
    <div className={cn('relative rounded-[3rem] bg-gradient-to-b from-[#2a3048] via-[#141a2c] to-[#0b0f1c] p-[3px] shadow-phone', className)} style={style}>
      <div className="rounded-[2.85rem] bg-[#04060c] p-[9px]">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-[#080b13]">
          <div className="relative z-10 flex h-[34px] items-center justify-between px-7 text-[11px] font-semibold text-white" aria-hidden="true">
            <span>9:41</span>
            <span className="absolute left-1/2 top-[9px] h-[22px] w-[30%] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/5" />
            <span className="flex items-center gap-1.5">
              <span className="flex items-end gap-[2px]">
                {[4, 6, 8, 10].map((h) => (
                  <span key={h} className="w-[3px] rounded-[1px] bg-white" style={{ height: h }} />
                ))}
              </span>
              <span className="h-[10px] w-[21px] rounded-[3px] border border-white/80 p-[1.5px]">
                <span className="block h-full w-[70%] rounded-[1px] bg-white" />
              </span>
            </span>
          </div>
          <img src={src} alt={alt} width={600} height={1299} loading={priority ? 'eager' : 'lazy'} decoding="async" className="block h-auto w-full" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent" />
        </div>
      </div>
      {/* side buttons */}
      <span className="absolute -left-[2px] top-[22%] h-12 w-[3px] rounded-l bg-[#2a3048]" />
      <span className="absolute -left-[2px] top-[32%] h-16 w-[3px] rounded-l bg-[#2a3048]" />
      <span className="absolute -right-[2px] top-[28%] h-20 w-[3px] rounded-r bg-[#2a3048]" />
    </div>
  );
}

/** Desktop browser window around a web-app screenshot. */
export function BrowserFrame({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn('overflow-hidden rounded-[22px] border border-white/10 bg-night-2 shadow-phone', className)}>
      <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="mx-auto flex items-center gap-1.5 rounded-full bg-white/[0.05] px-4 py-1 text-[11px] font-medium text-white/45">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-400" /> Be Alert — web app
        </span>
        <span className="w-[52px]" />
      </div>
      <img src={src} alt={alt} width={1280} height={800} loading="lazy" decoding="async" className="block h-auto w-full" />
    </div>
  );
}

/** Fades/slides children in once they scroll into view. */
export function Reveal({ children, className, delay = 0, as: Tag = 'div' }: { children: ReactNode; className?: string; delay?: number; as?: 'div' | 'li' | 'article' }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) return void el.classList.add('is-visible');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        }),
      { rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={cn('reveal', className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

/** Section heading: kicker + title + optional lead paragraph. */
export function Heading({ kicker, title, lead, center, className }: { kicker: string; title: ReactNode; lead?: ReactNode; center?: boolean; className?: string }) {
  return (
    <Reveal className={cn(center && 'mx-auto text-center', 'max-w-3xl', className)}>
      <span className="kicker">
        <span className="h-1.5 w-1.5 rounded-full bg-radar-400" /> {kicker}
      </span>
      <h2 className="mt-6 text-balance text-title font-bold">{title}</h2>
      {lead && <p className={cn('mt-6 text-lg leading-relaxed text-white/60', center && 'mx-auto max-w-2xl')}>{lead}</p>}
    </Reveal>
  );
}

/** Small Android robot-free phone glyph for the download button. */
function AndroidGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M7.2 3.1 6.4 1.6a.4.4 0 0 1 .7-.4l.8 1.6A8.6 8.6 0 0 1 12 2a8.6 8.6 0 0 1 4.1.8l.8-1.6a.4.4 0 1 1 .7.4l-.8 1.5A7 7 0 0 1 20.6 9H3.4a7 7 0 0 1 3.8-5.9ZM8.5 6.6a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Zm7 0a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8ZM3.4 10h17.2v8.2c0 1-.8 1.8-1.8 1.8h-1.3v2.6a1.4 1.4 0 0 1-2.8 0V20h-5.4v2.6a1.4 1.4 0 0 1-2.8 0V20H5.2c-1 0-1.8-.8-1.8-1.8V10Z" />
    </svg>
  );
}

/** The two primary actions used across the site. */
export function GetButtons({ className, center }: { className?: string; center?: boolean }) {
  if (!LINKS.launched) return <SoonButtons className={className} center={center} />;
  return (
    <div className={cn('flex flex-col gap-3 sm:flex-row', center && 'items-center justify-center', className)}>
      <a href={LINKS.android} className="btn-white w-full sm:w-auto" rel="noopener">
        <AndroidGlyph className="h-5 w-5 text-[#2a45d6]" />
        <span className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-night/55">{LINKS.androidOnPlay ? 'Get it on' : 'Download for'}</span>
          <span className="mt-0.5 text-[15px]">{LINKS.androidOnPlay ? 'Google Play' : 'Android'}</span>
        </span>
      </a>
      <a href={LINKS.webApp} target="_blank" rel="noopener" className="btn-glass group w-full sm:w-auto">
        <Globe className="h-[18px] w-[18px] text-radar-300" />
        Open the web app
        <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
      </a>
    </div>
  );
}

/** QR code (generated in the browser from the configured Android link). */
/** Pre-launch call to action: follow on Instagram + get a WhatsApp message at launch. */
export function SoonButtons({ className, center }: { className?: string; center?: boolean }) {
  return (
    <div className={cn('flex flex-col gap-3 sm:flex-row', center && 'items-center justify-center', className)}>
      <a href={LINKS.instagram} target="_blank" rel="noopener" className="btn-white w-full sm:w-auto">
        <Icon name="instagram" className="h-5 w-5 text-[#2a45d6]" />
        <span className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-night/55">Launching soon</span>
          <span className="mt-0.5 text-[15px]">Follow for updates</span>
        </span>
      </a>
      <a href={LINKS.notify} target="_blank" rel="noopener" className="btn-glass group w-full sm:w-auto">
        <Icon name="whatsapp" className="h-[18px] w-[18px] text-[#25D366]" />
        Notify me on WhatsApp
        <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
      </a>
    </div>
  );
}

export function QrCode({ value, size = 132 }: { value: string; size?: number }) {
  const [svg, setSvg] = useState('');
  useEffect(() => {
    QRCode.toString(value, { type: 'svg', margin: 0, errorCorrectionLevel: 'M', color: { dark: '#05070f', light: '#ffffff' } })
      .then(setSvg)
      .catch(() => setSvg(''));
  }, [value]);
  return <div className="rounded-2xl bg-white p-3" style={{ width: size + 24, height: size + 24 }} aria-label="QR code to download the Android app" role="img" dangerouslySetInnerHTML={{ __html: svg }} />;
}

/** Concentric radar rings with a rotating sweep (decorative). */
export function RadarRings({ className, sweep = true }: { className?: string; sweep?: boolean }) {
  return (
    <div className={cn('pointer-events-none absolute', className)} aria-hidden="true">
      {[0, 16, 32, 46].map((inset) => (
        <div key={inset} className="absolute rounded-full border border-white/[0.07]" style={{ inset: `${inset}%` }} />
      ))}
      <div className="absolute inset-0 animate-ripple rounded-full border border-radar-400/40" />
      <div className="absolute inset-0 animate-ripple rounded-full border border-brand-400/40 [animation-delay:2s]" />
      {sweep && (
        <div className="absolute inset-0 animate-sweep rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_290deg,rgb(46_230_197/0.18)_360deg)] [mask-image:radial-gradient(circle,black_25%,transparent_70%)]" />
      )}
    </div>
  );
}
