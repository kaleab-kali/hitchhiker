import { useEffect, useState } from 'react';
import { DetailProvider } from './store/detail';
import { usePersistentState } from './hooks/usePersistentState';
import { useStarfield } from './hooks/useStarfield';
import { useCustomCursor } from './hooks/useCustomCursor';
import { ARTICLES } from './data/content';

import { Nav } from './components/sections/Nav';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { Archive } from './components/sections/Archive';
import { Writing } from './components/sections/Writing';
import { Opinions } from './components/sections/Opinions';
// import { Talks } from './components/sections/Talks'; // hidden for now, uncomment to show
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
import { ArticlePage } from './components/ArticlePage';

type Mode = 'dark' | 'light';

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return hash;
}

export function App() {
  const [mode, setMode] = usePersistentState<Mode>('hitchhiker:mode', 'dark');
  const hash = useHashRoute();

  useStarfield();
  useCustomCursor();

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);

  useEffect(() => {
    const id = window.setTimeout(() => document.body.classList.remove('preload'), 50);
    return () => window.clearTimeout(id);
  }, []);

  const blogMatch = hash.match(/^#\/blog\/(\d+)$/);
  const article = blogMatch
    ? ARTICLES.find((a) => a.id === Number(blogMatch[1])) ?? null
    : null;

  // When returning from a blog page to an in-page anchor (e.g. #writing),
  // the target section isn't mounted yet at hashchange time, so scroll manually.
  useEffect(() => {
    if (article || !hash || hash.startsWith('#/')) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView();
  }, [hash, article]);

  return (
    <DetailProvider>
      <Nav mode={mode} setMode={setMode} />
      {article ? (
        <ArticlePage article={article} />
      ) : (
        <main>
          <Hero />
          <About />
          <Skills />
          <FeaturedProjects />
          <Archive />
          <Writing />
          <Opinions />
          {/* <Talks /> hidden for now, uncomment to show */}
          <OpenSource />
          <Now />
          <Bookshelf />
          <Uses />
          <Terminal />
          <Newsletter />
          <Guestbook />
          <Contact />
        </main>
      )}
      <Footer />
      <DetailModal />
    </DetailProvider>
  );
}
