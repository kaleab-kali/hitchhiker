import { useEffect, useState } from 'react';

export function Hero() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const t = window.setInterval(() => setTime(new Date()), 1000);
    return () => window.clearInterval(t);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="orbit-ring orbit-ring-1" aria-hidden="true"></div>
      <div className="orbit-ring orbit-ring-2" aria-hidden="true"></div>

      <div className="container hero-grid">
        <div className="hero-meta">
          <span className="eyebrow">
            Transmission · 2026.{(time.getMonth() + 1).toString().padStart(2, '0')}
          </span>
        </div>

        <div className="hero-main">
          <p className="hero-greeting">Hello, traveler.</p>
          <h1 className="hero-title display">
            I'm <em>Kaleab</em>—<br />
            they call me<br />
            the <em>Hitchhiker</em> Dev.
          </h1>
          <p className="hero-tagline">
            <span className="hero-quote">“</span>
            Optimistic and curious engineer wandering through codebases, building tools that make
            the universe slightly less indifferent.
            <span className="hero-quote">”</span>
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#work" data-hover>
              View Work →
            </a>
            <a className="btn ghost" href="resume.pdf" data-hover>
              Download CV ↓
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-stat">
            <span className="hero-stat-label">Coordinates</span>
            <span className="hero-stat-value">⌖ Earth · Sol-3</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-label">Local time</span>
            <span className="hero-stat-value mono">
              {time.toLocaleTimeString('en-GB', { hour12: false })}
            </span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-label">Status</span>
            <span className="hero-stat-value">
              <span className="pulse-dot"></span>Available for orbit
            </span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-label">Currently</span>
            <span className="hero-stat-value">Building Vogon · v0.4</span>
          </div>
        </div>

        <div className="hero-foot">
          <div className="hero-scroll">
            <span className="mono">scroll</span>
            <span className="hero-scroll-line"></span>
          </div>
          <div className="hero-panic mono">don't panic</div>
        </div>
      </div>
    </section>
  );
}
