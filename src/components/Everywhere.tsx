import { Globe, RefreshCw, Smartphone, UserRound } from 'lucide-react';
import { BrowserFrame, Heading, Phone, Reveal } from './ui';

const POINTS = [
  { icon: UserRound, title: 'One account', body: 'Sign in with the same email — your profile, posts and saved items are identical everywhere.' },
  { icon: RefreshCw, title: 'Always in sync', body: 'Post from your phone and it’s on the web app instantly. And the other way round.' },
  { icon: Smartphone, title: 'Built for your phone', body: 'The Android app uses your GPS and opens straight to your area.' },
  { icon: Globe, title: 'Nothing to install on a laptop', body: 'Open the web app in Chrome, Edge, Safari or Firefox.' },
];

export function Everywhere() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[44rem] w-[44rem] translate-x-1/3 rounded-full bg-[radial-gradient(closest-side,rgb(124_155_255/0.18),transparent)]" />
      <div className="wrap relative">
        <Heading
          center
          kicker="Android + Web"
          title={
            <>
              On your phone. On your laptop. <span className="accent grad-text">Always in sync.</span>
            </>
          }
          lead="Use the Android app on the go and the web app at your desk. One account, one live feed — wherever you open it."
        />

        <Reveal className="relative mx-auto mt-20 max-w-5xl pb-16 sm:pb-24">
          <BrowserFrame src="./screens/desktop-feed-dark.webp" alt="Be Alert web app on a desktop browser" />
          <div className="absolute -bottom-2 right-3 w-[30%] max-w-[230px] sm:-bottom-4 sm:right-[-2%]">
            <Phone src="./screens/map-dark.webp" alt="Be Alert Android app showing the live map" />
          </div>
          <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-night-2/90 px-4 py-2 text-[13px] font-semibold shadow-phone backdrop-blur md:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-mint-400" />
              <span className="relative h-2 w-2 rounded-full bg-mint-400" />
            </span>
            Synced just now
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="panel p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-bold">{p.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-white/55">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
