import { useEffect } from 'react';
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

            <p>
              There is a particular kind of late-night clarity that comes from re-reading code you
              wrote three months ago and not understanding what your past self was thinking. I have
              come to believe this clarity is the single most underrated tool in software
              engineering, and that most of us spend our careers running from it.
            </p>
            <p>
              What I want to argue here is that <em>the boring abstractions win</em>. Not because
              they are uninteresting, but because they have absorbed the right amount of pain: the
              kind that only emerges from years of people building real things on top of them,
              breaking them, and fixing them slightly better.
            </p>

            <h2 className="dm-h2">A small confession</h2>
            <p>
              I used to be the kind of engineer who reached for the newest shiny thing every time a
              problem appeared. Some of that was curiosity. Most of it, in retrospect, was a way of
              avoiding the harder work: understanding what was already there.
            </p>
            <p>
              The codebases I admire most are not the ones with the most clever code. They are the
              ones where every choice feels like it was made by a person who had the time to think.
            </p>

            <blockquote className="dm-essay-quote">
              “Most software problems are not solved by writing more software. They are solved by
              writing slightly less.”
            </blockquote>

            <h2 className="dm-h2">What I do now</h2>
            <p>
              When I'm starting something new, I try to write the smallest possible version of it
              first, small enough that I could throw it away without grief. Then I let it sit. If it
              survives a week of poking, I keep it. If it doesn't, I learned something cheap.
            </p>
            <p>
              This is not original advice. The thing nobody tells you is how much patience it takes
              to actually do it. Most of the time we are not stuck because we lack tools. We are
              stuck because we are tired of waiting.
            </p>

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
