import { useEffect } from 'react';
import { useDetail } from '../store/detail';
import type { Article, Project } from '../data/content';

export function DetailModal() {
  const { open, kind, item, closeDetail } = useDetail();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDetail();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, closeDetail]);

  if (!open || !item) return null;

  return (
    <div className="dm-overlay" onClick={closeDetail}>
      <div className="dm-sheet" onClick={(e) => e.stopPropagation()}>
        <button className="dm-close" onClick={closeDetail} data-hover aria-label="close">
          <span className="dm-close-mark">✕</span>
          <span className="dm-close-label mono">esc</span>
        </button>

        {kind === 'project' && <ProjectDetail p={item as Project} />}
        {kind === 'article' && <ArticleDetail a={item as Article} />}
      </div>
    </div>
  );
}

function ProjectDetail({ p }: { p: Project }) {
  const sections = [
    {
      k: 'The problem',
      v: `Most teams hit a wall when they try to scale ${p.name
        .split('—')[0]
        .trim()
        .toLowerCase()} beyond a prototype. Vendor lock-in, brittle abstractions, and an unhealthy amount of YAML.`,
    },
    {
      k: 'The approach',
      v: `I built ${p.name} around three principles: deterministic replay, observable internals, and an API small enough to keep in your head. Everything else falls out of those.`,
    },
    {
      k: 'The results',
      v: `Shipped to production in eight weeks. ${p.metric}. Adopted internally across four teams within the first quarter. Two upstream contributions accepted into the ecosystem.`,
    },
    {
      k: 'What I learned',
      v: `That the boring parts — error messages, replay tools, debug prints — are 80% of the developer experience. The fancy parts are the easy part.`,
    },
  ];

  return (
    <article className="dm-article">
      <header className="dm-head">
        <span className="eyebrow">§ Case study · {p.year}</span>
        <h1 className="display dm-title">{p.name}</h1>
        <p className="dm-tagline">{p.summary}</p>

        <div className="dm-spec">
          <div className="dm-spec-cell">
            <span>Role</span>
            <strong>{p.role}</strong>
          </div>
          <div className="dm-spec-cell">
            <span>Year</span>
            <strong>{p.year}</strong>
          </div>
          <div className="dm-spec-cell">
            <span>Outcome</span>
            <strong style={{ color: p.color }}>{p.metric}</strong>
          </div>
          <div className="dm-spec-cell">
            <span>Stack</span>
            <strong>{p.tags.join(' · ')}</strong>
          </div>
        </div>
      </header>

      <div
        className="dm-hero"
        style={{ background: `linear-gradient(135deg, ${p.color}15, transparent 60%)` }}
      >
        <div className="dm-hero-grid">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="dm-hero-dot"
              style={{ animationDelay: `${i * 80}ms`, color: p.color }}
            >
              ✦
            </span>
          ))}
        </div>
        <span className="dm-hero-label mono">[ project visual — replace with screenshots ]</span>
      </div>

      <div className="dm-body">
        {sections.map((s, i) => (
          <section key={i} className="dm-section">
            <span className="dm-section-num mono">{String(i + 1).padStart(2, '0')}</span>
            <div className="dm-section-content">
              <h2 className="dm-section-key">{s.k}</h2>
              <p className="dm-section-text">{s.v}</p>
            </div>
          </section>
        ))}

        <div className="dm-pull">
          <span className="dm-pull-mark">“</span>
          <blockquote>
            The fanciest abstraction in the world cannot save a project from a bad error message.{' '}
            <em>Boring tools win.</em>
          </blockquote>
        </div>

        <div className="dm-links">
          <a className="btn primary" href={p.url} data-hover>
            Live site ↗
          </a>
          <a className="btn ghost" href={p.url} data-hover>
            Source code ↗
          </a>
          <a className="btn ghost" href={p.url} data-hover>
            Read post-mortem ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function ArticleDetail({ a }: { a: Article }) {
  return (
    <article className="dm-article">
      <header className="dm-head">
        <span className="eyebrow">§ Essay · {a.tags[0]}</span>
        <h1 className="display dm-title dm-title-essay">{a.title}</h1>
        <div className="dm-byline">
          <span>
            By <em>Kaleab Girma</em>
          </span>
          <span className="mono">{a.date}</span>
          <span className="mono">{a.read} min read</span>
          <span className="mono">{a.views} views</span>
        </div>
      </header>

      <div className="dm-essay">
        <p className="dm-lede">{a.excerpt}</p>

        <p>
          There is a particular kind of late-night clarity that comes from re-reading code you wrote
          three months ago and not understanding what your past self was thinking. I have come to
          believe this clarity is the single most underrated tool in software engineering, and that
          most of us spend our careers running from it.
        </p>
        <p>
          What I want to argue here is that <em>the boring abstractions win</em>. Not because they
          are uninteresting, but because they have absorbed the right amount of pain — the kind that
          only emerges from years of people building real things on top of them, breaking them, and
          fixing them slightly better.
        </p>

        <h2 className="dm-h2">A small confession</h2>
        <p>
          I used to be the kind of engineer who reached for the newest shiny thing every time a
          problem appeared. Some of that was curiosity. Most of it, in retrospect, was a way of
          avoiding the harder work: understanding what was already there.
        </p>
        <p>
          The codebases I admire most are not the ones with the most clever code. They are the ones
          where every choice feels like it was made by a person who had the time to think.
        </p>

        <blockquote className="dm-essay-quote">
          “Most software problems are not solved by writing more software. They are solved by
          writing slightly less.”
        </blockquote>

        <h2 className="dm-h2">What I do now</h2>
        <p>
          When I'm starting something new, I try to write the smallest possible version of it first
          — small enough that I could throw it away without grief. Then I let it sit. If it survives
          a week of poking, I keep it. If it doesn't, I learned something cheap.
        </p>
        <p>
          This is not original advice. The thing nobody tells you is how much patience it takes to
          actually do it. Most of the time we are not stuck because we lack tools — we are stuck
          because we are tired of waiting.
        </p>

        <div className="dm-essay-foot">
          <div>
            <span className="mono dm-essay-foot-label">Tagged</span>
            <div className="dm-essay-tags">
              {a.tags.map((t) => (
                <span key={t} className="article-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="dm-essay-share">
            <span className="mono dm-essay-foot-label">Share</span>
            <div className="dm-share-row">
              <a href="#" data-hover>
                Twitter
              </a>
              <span>·</span>
              <a href="#" data-hover>
                LinkedIn
              </a>
              <span>·</span>
              <a href="#" data-hover>
                Copy link
              </a>
            </div>
          </div>
        </div>

        <div className="dm-essay-author">
          <div className="dm-essay-author-mark">★</div>
          <div>
            <h4>Kaleab Girma Zeleke</h4>
            <p>
              Optimistic and curious engineer. Writes about systems, AI infra, and the unglamorous
              craft of shipping things that last.{' '}
              <a href="#newsletter" className="inline-link">
                Get the monthly letter
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
