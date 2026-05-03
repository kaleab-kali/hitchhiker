import { SectionHeader } from '../atoms/SectionHeader';
import { Reveal } from '../atoms/Reveal';
import { TALKS } from '../../data/content';

export function Talks() {
  return (
    <section className="frame" id="talks">
      <div className="container">
        <SectionHeader
          eyebrow="§ 08 · Speaking"
          title="Stages, <em>conferences</em>, occasional podcasts."
          kicker="I like talking about systems that hum and people who build them. Available for relevant invitations."
        />
        <Reveal as="ul" className="talks-list">
          {TALKS.map((t, i) => (
            <li key={i} className="talk" data-hover>
              <span className="talk-year mono">{t.year}</span>
              <div className="talk-main">
                <h3 className="talk-title">{t.title}</h3>
                <span className="talk-venue">
                  {t.venue} <span className="talk-dot">·</span> {t.city}
                </span>
              </div>
              <a href={t.url} className="talk-link mono">
                watch ↗
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
