import { SectionHeader } from '../atoms/SectionHeader';
import { Reveal } from '../atoms/Reveal';
import { Marquee } from '../atoms/Marquee';
import { SKILLS } from '../../data/content';

export function Skills() {
  const items = SKILLS.flatMap((g) => g.items);

  return (
    <section className="frame" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="§ 02 · Stack"
          title="Tools for the <em>journey</em>."
          kicker="A working list of the things I reach for, ordered roughly by how often my hands type them in a given week."
        />
      </div>

      <Reveal className="skills-marquees">
        <Marquee items={items} speed={60} />
      </Reveal>
    </section>
  );
}
