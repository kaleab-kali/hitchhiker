import { Fragment, useEffect } from 'react';
import type { Article } from '../data/content';

export function ArticlePage({ article: a }: { article: Article }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${a.title} | Hitchhiker Dev`;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prev = meta?.content ?? '';
    if (meta) meta.content = a.excerpt;
    return () => {
      document.title = 'Kaleab Girma Zeleke | Software Engineer - Hitchhiker Dev';
      if (meta) meta.content = prev;
    };
  }, [a]);

  return (
    <main className="blog-page">
      <div className="blog-page-inner">
        <a href="#writing" className="blog-back mono" data-hover>
          ← back to writing
        </a>

        <article className="dm-article blog-article">
          <header className="dm-head">
            <span className="eyebrow">§ Essay · {a.tags[0]}</span>
            <h1 className="display dm-title dm-title-essay">{a.title}</h1>
            <div className="dm-byline">
              <span>
                By <em>Kaleab Girma</em>
              </span>
              <span className="mono">{a.date}</span>
              <span className="mono">{a.read} min read</span>
              <span className="mono">{a.views} views</span>
            </div>
          </header>

          <div className="dm-essay">
            <p className="dm-lede">{a.excerpt}</p>

            {a.body.map((s, i) => (
              <Fragment key={i}>
                {s.h2 && <h2 className="dm-h2">{s.h2}</h2>}
                <p>{s.text}</p>
                {i === 1 && a.quote && (
                  <blockquote className="dm-essay-quote">“{a.quote}”</blockquote>
                )}
              </Fragment>
            ))}

            <div className="dm-essay-foot">
              <div>
                <span className="mono dm-essay-foot-label">Tagged</span>
                <div className="dm-essay-tags">
                  {a.tags.map((t) => (
                    <span key={t} className="article-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="dm-essay-share">
                <span className="mono dm-essay-foot-label">Share</span>
                <div className="dm-share-row">
                  <a href="#" data-hover>
                    Twitter
                  </a>
                  <span>·</span>
                  <a href="#" data-hover>
                    LinkedIn
                  </a>
                  <span>·</span>
                  <a href="#" data-hover>
                    Copy link
                  </a>
                </div>
              </div>
            </div>

            <div className="dm-essay-author">
              <div className="dm-essay-author-mark">★</div>
              <div>
                <h4>Kaleab Girma Zeleke</h4>
                <p>
                  Optimistic and curious engineer. Writes about systems, AI infra, and the
                  unglamorous craft of shipping things that last.{' '}
                  <a href="#newsletter" className="inline-link">
                    Get the monthly letter
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
