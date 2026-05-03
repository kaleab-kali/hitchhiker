import { SectionHeader } from '../atoms/SectionHeader';
import { Reveal } from '../atoms/Reveal';
import { USES } from '../../data/content';

export function Uses() {
  return (
    <section className="frame" id="uses">
      <div className="container">
        <SectionHeader
          eyebrow="§ 11 · /uses"
          title="The <em>everyday</em> kit."
          kicker="A snapshot of the tools I rely on. Inspired by the /uses tradition. Updated when something genuinely changes my workflow."
        />
        <Reveal className="uses-grid">
          {USES.map((u, i) => (
            <div key={u.group} className="uses-card">
              <div className="uses-num mono">/{String(i + 1).padStart(2, '0')}</div>
              <h3 className="uses-group">{u.group}</h3>
              <ul className="uses-list">
                {u.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
