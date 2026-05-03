import { Reveal } from '../atoms/Reveal';
import { NOW } from '../../data/content';

export function Now() {
  return (
    <section className="frame now-section" id="now">
      <div className="container now-grid">
        <Reveal className="now-side">
          <span className="eyebrow">§ 03 · Now</span>
          <h2 className="display now-title">
            What I'm doing<br />
            <em>this orbit</em>.
          </h2>
          <p className="mono now-meta">
            last updated ·{' '}
            {new Date().toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </p>
          <p className="now-explainer">
            A{' '}
            <a href="https://nownownow.com" className="inline-link" data-hover>
              now page
            </a>
            : short, honest, regularly stale by design.
          </p>
        </Reveal>
        <Reveal as="ul" className="now-list">
          {NOW.map((item, i) => (
            <li key={i} className="now-item">
              <span className="now-marker">{String(i + 1).padStart(2, '0')}</span>
              <span className="now-text">{item}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
