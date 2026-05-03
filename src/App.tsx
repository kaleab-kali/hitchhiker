import { useEffect } from 'react';
import { DetailProvider } from './store/detail';
import { usePersistentState } from './hooks/usePersistentState';
import { useStarfield } from './hooks/useStarfield';
import { useCustomCursor } from './hooks/useCustomCursor';

import { Nav } from './components/sections/Nav';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Marquee } from './components/atoms/Marquee';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { Archive } from './components/sections/Archive';
import { Writing } from './components/sections/Writing';
import { Opinions } from './components/sections/Opinions';
import { Talks } from './components/sections/Talks';
import { OpenSource } from './components/sections/OpenSource';
import { Now } from './components/sections/Now';
import { Bookshelf } from './components/sections/Bookshelf';
import { Uses } from './components/sections/Uses';
import { Terminal } from './components/sections/Terminal';
import { Newsletter } from './components/sections/Newsletter';
import { Guestbook } from './components/sections/Guestbook';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { DetailModal } from './components/DetailModal';

const MARQUEE_ITEMS = [
  'Rust',
  'TypeScript',
  'Flutter',
  'Postgres',
  'AI Infra',
  'Open Source',
  "Don't Panic",
  '42',
];

type Mode = 'dark' | 'light';

export function App() {
  const [mode, setMode] = usePersistentState<Mode>('hitchhiker:mode', 'dark');

  useStarfield();
  useCustomCursor();

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);

  useEffect(() => {
    const id = window.setTimeout(() => document.body.classList.remove('preload'), 50);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <DetailProvider>
      <Nav mode={mode} setMode={setMode} />
      <Hero />
      <About />
      <Skills />
      <Marquee items={MARQUEE_ITEMS} />
      <FeaturedProjects />
      <Archive />
      <Writing />
      <Opinions />
      <Talks />
      <OpenSource />
      <Now />
      <Bookshelf />
      <Uses />
      <Terminal />
      <Newsletter />
      <Guestbook />
      <Contact />
      <Footer />
      <DetailModal />
    </DetailProvider>
  );
}
