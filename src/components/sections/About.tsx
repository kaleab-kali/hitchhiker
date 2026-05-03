import { Reveal } from '../atoms/Reveal';

const ENTRIES = [
  {
    num: 'I',
    k: 'Origin',
    v: "Started writing code in Addis Ababa. Kept at it across three continents, a handful of timezones, and one stubborn refusal to settle.",
  },
  {
    num: 'II',
    k: 'The name',
    v: "“Hitchhiker Dev” stuck because I move around a lot — and because every codebase feels like a strange new planet worth visiting.",
  },
  {
    num: 'III',
    k: 'The work',
    v: 'LLM runtimes in Rust. Mobile experiences in Flutter. Unglamorous backend plumbing that makes the rest of it possible.',
  },
  {
    num: 'IV',
    k: 'The ethic',
    v: "I write in the open, ship things I'd be proud to maintain, and try to leave every project a little kinder than I found it.",
  },
];

export function About() {
  return (
    <section className="frame about-section" id="about">
      <div className="container">
        <Reveal className="about-head">
          <span className="eyebrow">§ 01 · About</span>
          <span className="about-coords mono">⌖ 09°00′N · 38°45′E</span>
        </Reveal>

        <Reveal as="blockquote" className="about-pull">
          <span className="about-pull-mark">“</span>
          I build software like a traveler packs a <em>towel</em> —<br />
          practically, stubbornly, and with a great deal<br />
          of <em>affection</em>.
        </Reveal>

        <Reveal className="about-meta-row">
          <div className="about-byline">
            <span className="mono">Written by</span>
            <span className="about-byline-name">K. Girma Z.</span>
          </div>
          <div className="about-meta-spec mono">
            <span>04 entries</span>
            <span>·</span>
            <span>~2 min read</span>
            <span>·</span>
            <span>last revised May 2026</span>
          </div>
        </Reveal>

        <div className="about-entries">
          {ENTRIES.map((e, i) => (
            <Reveal as="article" key={i} className="about-entry" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="about-entry-num">
                <span className="about-entry-roman">{e.num}</span>
                <span className="about-entry-line"></span>
              </div>
              <div className="about-entry-body">
                <h3 className="about-entry-key">{e.k}</h3>
                <p className="about-entry-text">{e.v}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="about-facts">
          <div className="fact">
            <span className="fact-k">Based in</span>
            <span className="fact-v">Addis Ababa ↔ Berlin</span>
          </div>
          <div className="fact">
            <span className="fact-k">Ships in</span>
            <span className="fact-v">Rust · TS · Dart · Python</span>
          </div>
          <div className="fact">
            <span className="fact-k">Years coding</span>
            <span className="fact-v">10+</span>
          </div>
          <div className="fact">
            <span className="fact-k">Coffees/day</span>
            <span className="fact-v">3 · sometimes 4</span>
          </div>
        </Reveal>

        <Reveal className="about-cta">
          <span className="mono">If any of that resonates →</span>
          <a href="#contact" className="about-cta-link">
            say hello
          </a>
        </Reveal>
      </div>
    </section>
  );
}
