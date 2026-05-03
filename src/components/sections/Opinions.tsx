import { SectionHeader } from '../atoms/SectionHeader';
import { Reveal } from '../atoms/Reveal';

const OPINIONS = [
  {
    quote:
      "Most ‘AI agents’ are just brittle scripts wearing a frock coat. The boring abstractions will win.",
    src: 'On Agents (2026)',
  },
  {
    quote:
      "Type safety is a negotiation, not a religion. The best codebases I've seen know which battles to lose.",
    src: 'On Types (2026)',
  },
  {
    quote: 'Every senior engineer I admire reads more than they tweet. Something to think about.',
    src: 'On Reading (2025)',
  },
  {
    quote:
      "Junior engineers don't need a faster horse. They need permission to be wrong out loud.",
    src: 'On Mentorship (2025)',
  },
];

export function Opinions() {
  return (
    <section className="frame opinions-section" id="opinions">
      <div className="container">
        <SectionHeader
          eyebrow="§ 07 · Opinions, loosely held"
          title="Things I'll <em>defend</em>, until I learn better."
        />
        <Reveal className="opinions-grid">
          {OPINIONS.map((o, i) => (
            <figure key={i} className="opinion">
              <span className="opinion-mark">“</span>
              <blockquote>{o.quote}</blockquote>
              <figcaption>
                — <span className="mono">{o.src}</span>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
