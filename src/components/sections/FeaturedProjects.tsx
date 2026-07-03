import { useState } from 'react';
import { SectionHeader } from '../atoms/SectionHeader';
import { Reveal } from '../atoms/Reveal';
import { FEATURED_PROJECTS } from '../../data/content';
import { useDetail } from '../../store/detail';

export function FeaturedProjects() {
  const [active, setActive] = useState<number | null>(null);
  const { openDetail } = useDetail();

  return (
    <section className="frame projects-section" id="work">
      <div className="container">
        <SectionHeader
          eyebrow="§ 04 · Featured Work"
          title="Strange <em>new planets</em>."
          kicker="A selection of recent projects. Each one taught me a new way to be wrong, which is the only way I know to get better."
        />

        <Reveal className="projects-list">
          {FEATURED_PROJECTS.map((p, i) => (
            <a
              key={p.id}
              href={p.url}
              className={'project-row ' + (active === p.id ? 'active' : '')}
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
              onClick={(e) => {
                e.preventDefault();
                openDetail(p);
              }}
              data-hover
            >
              <div className="project-num mono">{String(i + 1).padStart(2, '0')}</div>
              <div className="project-name">
                <h3>{p.name}</h3>
                <p className="project-summary">{p.summary}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-meta">
                <span className="project-year">{p.year}</span>
                <span className="project-role">{p.role}</span>
              </div>
              <div className="project-arrow">↗</div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
