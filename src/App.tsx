import { Categories, EmergencySpotlight } from './components/Categories';
import { Everywhere } from './components/Everywhere';
import { Faq } from './components/Faq';
import { FinalCta, Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Tour } from './components/Tour';
import { Trust } from './components/Trust';
import { Facts, Why } from './components/Why';

export function App() {
  return (
    <>
      <a href="#why" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:font-bold focus:text-night">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Facts />
        <Why />
        <Tour />
        <Categories />
        <EmergencySpotlight />
        <Everywhere />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
