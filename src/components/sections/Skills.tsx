import { SectionHeader } from '../atoms/SectionHeader';
import { Reveal } from '../atoms/Reveal';
import { SKILLS } from '../../data/content';

export function Skills() {
  return (
    <section className="frame" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="§ 02 · Stack"
          title="Tools for the <em>journey</em>."
          kicker="A working list of the things I reach for, ordered roughly by how often my hands type them in a given week."
        />

        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <Reveal key={s.group} className="skill-card" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="skill-card-head">
                <span className="mono skill-num">0{i + 1}</span>
                <h3 className="skill-group">{s.group}</h3>
              </div>
              <ul className="skill-list">
                {s.items.map((item) => (
                  <li key={item} className="skill-item">
                    <span className="skill-bullet">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
