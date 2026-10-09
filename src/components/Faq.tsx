import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Heading, Reveal, cn } from './ui';

const FAQ: [string, string][] = [
  ['Is Be Alert free?', 'Yes — free to download and use, with no ads.'],
  ['Where does it work?', 'Anywhere. Be Alert opens on your current location, so it works in any city — Karachi, Lahore, Islamabad and beyond, and abroad too. You can also pick any city or country by hand.'],
  ['Do I need an account just to look around?', 'No. You can see what’s happening nearby without signing in. An account is only needed to post, comment, vote or report.'],
  ['How do I sign in?', 'With your Gmail or any email address. We send a one-time sign-in link — there’s no password to create or remember.'],
  ['Are the Android app and the web app connected?', 'Yes. They share one account and one live database, so anything you do on one shows up on the other automatically.'],
  ['Is there an iPhone app?', 'Not yet. iPhone users can use the full web app in Safari — same features, same account.'],
  ['How are fake posts and scams handled?', 'Anyone can report a post. Posts reported by several established accounts are hidden automatically, moderators review every report, and accounts that break the rules are suspended.'],
  ['What does the verified badge mean?', 'Businesses and service providers can verify their identity with their CNIC. A moderator checks it before the badge appears.'],
  ['Is Be Alert an emergency service?', 'No. In an emergency always call 1122, 15 or your local emergency number first. Be Alert helps you reach them faster and alert the people around you.'],
];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Heading
            kicker="FAQ"
            title={
              <>
                Questions, <span className="accent grad-text">answered.</span>
              </>
            }
            lead="Can’t find what you’re looking for? Ask in the app’s community feed — neighbours and our moderators are there."
          />
        </div>
        <Reveal className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {FAQ.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="faq-item" data-open={isOpen}>
                <h3>
                  <button
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-[17px] font-semibold tracking-[-0.01em] transition hover:text-white sm:text-lg"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className={cn(isOpen ? 'text-white' : 'text-white/80')}>{q}</span>
                    <span className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition duration-500', isOpen ? 'rotate-45 border-radar-400/50 bg-radar-400/10 text-radar-300' : 'border-white/15 text-white/60')}>
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" className="faq-body">
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pr-12 leading-relaxed text-white/55">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
