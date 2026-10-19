import { LINKS } from '../config';
import { cn } from './ui';

// Brand glyphs (simple single-path icons), drawn in currentColor.
const ICONS = {
  whatsapp:
    'M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.42 1.31-1.95 1.36-.5.05-.97.23-3.28-.68-2.78-1.1-4.54-3.94-4.68-4.12-.13-.18-1.12-1.49-1.12-2.84s.71-2.01.96-2.29c.25-.27.55-.34.73-.34l.53.01c.17 0 .4-.06.62.48.24.56.8 1.94.87 2.08.07.14.12.3.02.48-.09.18-.14.3-.27.46l-.41.48c-.14.14-.28.29-.12.57.16.27.71 1.17 1.52 1.9 1.05.93 1.93 1.22 2.2 1.36.28.14.44.12.6-.07.16-.18.69-.8.87-1.08.18-.27.37-.23.62-.14.25.09 1.6.76 1.87.9.28.13.46.2.53.32.07.11.07.66-.17 1.34Z',
  facebook:
    'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94Z',
  instagram:
    'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 4.7a5.14 5.14 0 1 0 0 10.28 5.14 5.14 0 0 0 0-10.28Zm0 8.47a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66Zm5.34-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z',
};

export function Icon({ name, className }: { name: keyof typeof ICONS; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d={ICONS[name]} />
    </svg>
  );
}

const SOCIAL: [keyof typeof ICONS, string, string][] = [
  ['whatsapp', LINKS.whatsapp, 'Chat with Be Alert on WhatsApp'],
  ['facebook', LINKS.facebook, 'Be Alert on Facebook'],
  ['instagram', LINKS.instagram, 'Be Alert on Instagram'],
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn('flex gap-3', className)}>
      {SOCIAL.map(([name, href, label]) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener"
            aria-label={label}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white/70 transition hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
          >
            <Icon name={name} className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Floating "chat on WhatsApp" button, bottom right on every screen size. */
export function WhatsAppButton() {
  return (
    <a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Chat with Be Alert on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_10px_30px_-8px_rgb(37_211_102/0.7)] transition hover:-translate-y-0.5 sm:bottom-7 sm:right-7 sm:px-5"
    >
      <Icon name="whatsapp" className="h-6 w-6" />
      <span className="hidden text-[15px] font-bold sm:inline">Chat with us</span>
    </a>
  );
}
