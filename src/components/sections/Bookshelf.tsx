import { SectionHeader } from '../atoms/SectionHeader';
import { Reveal } from '../atoms/Reveal';
import { BOOKSHELF } from '../../data/content';

export function Bookshelf() {
  return (
    <section className="frame bookshelf-section" id="bookshelf">
      <div className="container">
        <SectionHeader
          eyebrow="§ 10 · Bookshelf"
          title="What I'm <em>reading</em>."
          kicker="A small, slowly-rotating library. The classics, a few new things, and the books I keep returning to."
        />
        <Reveal className="bookshelf-grid">
          {BOOKSHELF.map((b, i) => (
            <div key={i} className="book" data-hover>
              <div
                className="book-spine"
                style={{ background: `oklch(${0.3 + (i % 4) * 0.06} 0.04 ${50 + i * 30})` }}
              >
                <span className="book-spine-title">{b.title}</span>
              </div>
              <div className="book-meta">
                <span className="book-status mono" data-status={b.status}>
                  {b.status}
                </span>
                <span className="book-author">{b.author}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
