import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { LINKS } from '../config';
import { LogoMark, Wordmark, cn } from './ui';

const ITEMS = [
  { id: 'why', label: 'Why Be Alert' },
  { id: 'tour', label: 'Tour' },
  { id: 'categories', label: 'Categories' },
  { id: 'safety', label: 'Safety' },
  { id: 'faq', label: 'FAQ' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY < window.innerHeight * 0.8) setActive('');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ITEMS.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Main"
        className={cn(
          'mx-auto flex h-[60px] max-w-[1200px] items-center justify-between rounded-full border pl-4 pr-2 transition-all duration-500',
          scrolled || open ? 'border-white/10 bg-night-1/75 shadow-[0_20px_50px_-20px_rgb(0_0_0/0.8)] backdrop-blur-xl' : 'border-transparent bg-transparent'
        )}
      >
        <a href="#top" className="flex items-center gap-2.5" aria-label="Be Alert — back to top">
          <LogoMark size={32} />
          <Wordmark />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {ITEMS.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className={cn('relative rounded-full px-4 py-2 text-[14px] font-semibold transition', active === i.id ? 'text-white' : 'text-white/55 hover:text-white')}
            >
              {active === i.id && <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]" />}
              {i.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-1.5 lg:flex">
          {LINKS.launched && <a href={LINKS.webApp} target="_blank" rel="noopener" className="rounded-full px-4 py-2 text-[14px] font-semibold text-white/70 transition hover:text-white">
            Web app
          </a>}
          <a href={LINKS.launched ? LINKS.android : LINKS.instagram} {...(LINKS.launched ? {} : { target: '_blank', rel: 'noopener' })} className="group inline-flex h-11 items-center gap-2 rounded-full bg-white pl-5 pr-4 text-[14px] font-bold text-night transition hover:shadow-[0_10px_30px_-8px_rgb(255_255_255/0.5)]">
            {LINKS.launched ? 'Get the app' : 'Coming soon · Follow'} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-x-3 top-[84px] origin-top rounded-[28px] border border-white/10 bg-night-1/95 p-3 shadow-phone backdrop-blur-xl transition duration-300 lg:hidden',
          open ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
        )}
      >
        {ITEMS.map((i) => (
          <a key={i.id} href={`#${i.id}`} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[17px] font-semibold text-white/85 hover:bg-white/5">
            {i.label} <ArrowRight className="h-4 w-4 text-white/30" />
          </a>
        ))}
        <div className="mt-2 grid gap-2 border-t border-white/10 pt-3">
          {LINKS.launched ? (
            <>
              <a href={LINKS.android} className="btn-white">Get the Android app</a>
              <a href={LINKS.webApp} target="_blank" rel="noopener" className="btn-glass">Open the web app</a>
            </>
          ) : (
            <>
              <a href={LINKS.instagram} target="_blank" rel="noopener" className="btn-white">Launching soon · Follow us</a>
              <a href={LINKS.notify} target="_blank" rel="noopener" className="btn-glass">Notify me on WhatsApp</a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
