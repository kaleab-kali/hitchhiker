import { useEffect } from 'react';
import { useDetail } from '../store/detail';
import type { Project } from '../data/content';

export function DetailModal() {
  const { open, item, closeDetail } = useDetail();

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

        <ProjectDetail p={item} />
      </div>
    </div>
  );
}

function ProjectDetail({ p }: { p: Project }) {
  const sections = [
    {
      k: 'The problem',
      v: `Most teams hit a wall when they try to scale ${p.name
        .split(':')[0]
        .trim()
        .toLowerCase()} beyond a prototype. Vendor lock-in, brittle abstractions, and an unhealthy amount of YAML.`,
    },
    {
      k: 'The approach',
      v: `I built ${p.name} around a few principles: reliable foundations, observable internals, and an API small enough to keep in your head. Everything else falls out of those.`,
    },
    {
      k: 'The results',
      v: `Built over months of sustained work, not weeks. Shipped to production and refined release after release. Some of these systems are still running and actively maintained to this day.`,
    },
    {
      k: 'What I learned',
      v: `That the boring parts (error messages, replay tools, debug prints) are 80% of the developer experience. The fancy parts are the easy part.`,
    },
  ];

  return (
    <article className="dm-article">
      <header className="dm-head">
        <span className="eyebrow">§ Case study · {p.year}</span>
        <h1 className="display dm-title">{p.name}</h1>
        <p className="dm-tagline">{p.summary}</p>

        <div className="dm-spec dm-spec-3">
          <div className="dm-spec-cell">
            <span>Role</span>
            <strong>{p.role}</strong>
          </div>
          <div className="dm-spec-cell">
            <span>Year</span>
            <strong>{p.year}</strong>
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
