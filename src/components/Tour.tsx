import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { Heading, Phone, cn } from './ui';

const STEPS = [
  {
    tag: 'Your feed',
    title: 'Opens right where you are.',
    body: 'No setup, no default city. Be Alert reads your current location and shows a live count of what’s happening around you — urgent alerts first.',
    points: ['Pick 1, 3, 5, 10, 25 or 50 km', 'Sort by nearest, newest or top', 'Light and dark mode'],
    src: './screens/feed-dark.webp',
  },
  {
    tag: 'Live map',
    title: 'Every alert, on the map.',
    body: 'Each post is a coloured pin. Filter by category, zoom into your street or widen the radius to the whole city.',
    points: ['Blood, outages, traffic, jobs & more', 'Distance to every pin', 'Directions in one tap'],
    src: './screens/map-dark.webp',
  },
  {
    tag: 'Help, fast',
    title: 'Help that arrives in minutes.',
    body: 'Blood requests show the group, hospital and bags needed — with a one-tap call. Neighbours confirm it’s still needed, so nothing goes stale.',
    points: ['Call or WhatsApp directly', '“Still happening” confirmations', 'Auto-expires when resolved'],
    src: './screens/post-dark.webp',
  },
  {
    tag: 'Emergency',
    title: 'Emergency, without searching.',
    body: 'Rescue 1122, Police 15, Edhi 115 and Fire 16 are one tap away. Send your current GPS location to the people you trust.',
    points: ['Works even before you sign in', 'Share your location by WhatsApp or SMS', 'Urgent alerts within 5 km'],
    src: './screens/emergency-dark.webp',
  },
  {
    tag: 'Post',
    title: 'Post in under a minute.',
    body: 'Choose a category, add details and photos. Your post lands on the map and reaches neighbours within a minute — on Android and the web.',
    points: ['14 local categories', 'Photos and smart fields', 'Edit, close or delete anytime'],
    src: './screens/create-dark.webp',
  },
];

export function Tour() {
  const [active, setActive] = useState(0);
  const [slide, setSlide] = useState(0); // phones: which card of the swipe carousel is showing
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const track = useRef<HTMLDivElement>(null);

  function onSwipe() {
    const el = track.current;
    const first = refs.current[0];
    if (!el || !first) return;
    setSlide(Math.min(STEPS.length - 1, Math.round(el.scrollLeft / (first.offsetWidth + 16))));
  }

  function goTo(i: number) {
    const el = refs.current[i];
    track.current?.scrollTo({ left: el ? el.offsetLeft - (track.current.offsetWidth - el.offsetWidth) / 2 : 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset.i))), {
      rootMargin: '-45% 0px -45% 0px',
    });
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="tour" className="relative py-16 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(79_116_255/0.18),transparent)]" />
      <div className="wrap relative">
        <Heading
          kicker="A quick tour"
          title={
            <>
              Designed to be <span className="accent grad-text">fast, clear</span> and calm.
            </>
          }
          lead="Real screens from the Be Alert app — the five things you’ll use every day."
        />

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          {/* Sticky phone (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-[12vh] flex h-[76vh] items-center justify-center">
              <div className="relative w-[310px]">
                <div className="absolute -inset-16 rounded-full bg-[radial-gradient(closest-side,rgb(46_230_197/0.14),transparent)]" />
                {STEPS.map((s, i) => (
                  <div
                    key={s.tag}
                    className={cn(
                      'transition-all duration-700 ease-out',
                      i === 0 ? 'relative' : 'absolute inset-0',
                      i === active ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
                    )}
                  >
                    <Phone src={s.src} alt={s.title} />
                  </div>
                ))}
                {/* progress rail */}
                <div className="absolute -right-12 top-1/2 flex -translate-y-1/2 flex-col gap-2">
                  {STEPS.map((s, i) => (
                    <span key={s.tag} className={cn('w-1 rounded-full transition-all duration-500', i === active ? 'h-8 bg-radar-400' : 'h-2 bg-white/15')} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Steps: a swipe carousel on phones and tablets, a scrolling story beside the sticky phone on desktop */}
          {/* min-w-0: a grid item otherwise grows to fit the wide swipe track and the page scrolls sideways */}
          <div className="min-w-0">
            <div
              ref={track}
              onScroll={onSwipe}
              className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:block lg:overflow-visible lg:px-0 lg:pb-0"
            >
              {STEPS.map((s, i) => (
                <div
                  key={s.tag}
                  data-i={i}
                  ref={(el) => (refs.current[i] = el)}
                  aria-label={`${i + 1} of ${STEPS.length}: ${s.tag}`}
                  className={cn(
                    'flex w-[84%] max-w-[420px] shrink-0 snap-center flex-col rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6 transition-opacity duration-500',
                    'lg:w-auto lg:max-w-none lg:min-h-[76vh] lg:justify-center lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0',
                    active === i ? 'lg:opacity-100' : 'lg:opacity-[0.78]',
                  )}
                >
                  <div className="mx-auto mb-7 w-[190px] lg:hidden">
                    <Phone src={s.src} alt={s.title} />
                  </div>
                  <p className="flex items-center gap-3 text-sm font-bold text-radar-300">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-radar-400/40 text-xs">{i + 1}</span>
                    {s.tag}
                  </p>
                  <h3 className="mt-4 text-balance text-[1.7rem] font-bold leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:mt-5 lg:text-5xl">{s.title}</h3>
                  <p className="mt-4 max-w-lg leading-relaxed text-white/60 lg:mt-5 lg:text-lg">{s.body}</p>
                  <ul className="mt-5 space-y-3 lg:mt-7">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-[15px] font-medium text-white/80">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-radar-400/15 text-radar-300">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* carousel position */}
            <div className="mt-6 flex items-center justify-center gap-2 lg:hidden">
              {STEPS.map((s, i) => (
                <button
                  key={s.tag}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show ${s.tag}`}
                  aria-current={slide === i}
                  className="flex h-8 w-8 items-center justify-center"
                >
                  <span className={cn('h-2 rounded-full transition-all duration-300', slide === i ? 'w-6 bg-radar-400' : 'w-2 bg-white/20')} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
