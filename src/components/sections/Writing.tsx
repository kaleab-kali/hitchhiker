import { useMemo, useState } from 'react';
import { SectionHeader } from '../atoms/SectionHeader';
import { Reveal } from '../atoms/Reveal';
import { Tag } from '../atoms/Tag';
import { ARTICLES } from '../../data/content';
import { useDetail } from '../../store/detail';

export function Writing() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const { openDetail } = useDetail();

  const allTags = useMemo(() => {
    const s = new Set<string>(['All']);
    ARTICLES.forEach((a) => a.tags.forEach((t) => s.add(t)));
    return Array.from(s);
  }, []);

  const filtered = ARTICLES.filter((a) => {
    const tagOk = filter === 'All' || a.tags.includes(filter);
    const q = query.trim().toLowerCase();
    const qOk =
      !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
    return tagOk && qOk;
  });

  return (
    <section className="frame writing-section" id="writing">
      <div className="container">
        <SectionHeader
          eyebrow="§ 06 · Writing"
          title="Notes from the <em>journey</em>."
          kicker="Essays, field reports, and the occasional opinion I'll probably outgrow. Updated when I have something honest to say."
        />

        <Reveal className="writing-controls">
          <div className="writing-filters">
            {allTags.map((t) => (
              <Tag key={t} active={filter === t} onClick={() => setFilter(t)}>
                {t}
              </Tag>
            ))}
          </div>
          <div className="writing-search">
            <span className="search-icon">⌕</span>
            <input
              type="text"
              placeholder="search the archive…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </Reveal>

        <Reveal className="writing-grid">
          {filtered.map((a) => (
            <article
              key={a.id}
              className="article-card"
              data-hover
              onClick={() => openDetail('article', a)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') openDetail('article', a);
              }}
            >
              <div className="article-meta">
                <span className="mono article-date">{a.date}</span>
                <span className="article-dot">·</span>
                <span className="mono article-read">{a.read} min</span>
                <span className="article-dot">·</span>
                <span className="mono article-views">{a.views} views</span>
              </div>
              <h3 className="article-title">{a.title}</h3>
              <p className="article-excerpt">{a.excerpt}</p>
              <div className="article-foot">
                <div className="article-tags">
                  {a.tags.map((t) => (
                    <span key={t} className="article-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="article-cta">read →</span>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="writing-empty mono">// no transmissions match that filter.</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
