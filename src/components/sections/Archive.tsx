import { SectionHeader } from '../atoms/SectionHeader';
import { Reveal } from '../atoms/Reveal';
import { ARCHIVE_PROJECTS } from '../../data/content';

export function Archive() {
  return (
    <section className="frame archive-section" id="archive">
      <div className="container">
        <SectionHeader
          eyebrow="§ 05 · Archive"
          title="The <em>back catalog</em>."
          kicker="Older experiments, weekend hacks, and projects that didn't quite reach orbit. Listed for honesty."
        />
        <Reveal className="archive-table">
          <div className="archive-head">
            <span>Year</span>
            <span>Project</span>
            <span>Stack</span>
            <span>Note</span>
          </div>
          {ARCHIVE_PROJECTS.map((p, i) => (
            <div key={i} className="archive-row" data-hover>
              <span className="archive-year mono">{p.year}</span>
              <span className="archive-name">{p.name}</span>
              <span className="archive-tags">
                {p.tags.map((t) => (
                  <span key={t} className="archive-tag">
                    {t}
                  </span>
                ))}
              </span>
              <span className="archive-note">{p.note}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
