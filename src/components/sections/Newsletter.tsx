import { useState, type FormEvent } from 'react';
import { Reveal } from '../atoms/Reveal';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="frame newsletter-section" id="newsletter">
      <div className="container">
        <Reveal className="newsletter-card">
          <div className="newsletter-stars">
            <span>✦</span>
            <span>·</span>
            <span>✧</span>
            <span>·</span>
            <span>✦</span>
          </div>
          <span className="eyebrow">§ 13 · Sub-Etha Dispatch</span>
          <h2 className="display newsletter-title">
            Get the <em>monthly</em> letter.
          </h2>
          <p className="newsletter-kicker">
            One email a month. Engineering essays, project notes, and the occasional reading list.
            No tracking, no upsells, easy unsubscribe — and genuinely no AI-generated filler.
          </p>
          {!sent ? (
            <form className="newsletter-form" onSubmit={onSubmit}>
              <input
                type="email"
                required
                placeholder="your.address@cosmos"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn primary">
                Subscribe →
              </button>
            </form>
          ) : (
            <p className="newsletter-success mono">
              // transmission received. confirmation in your inbox.
            </p>
          )}
          <div className="newsletter-meta mono">
            <span>★ 2,847 subscribers</span>
            <span>·</span>
            <span>📬 monthly</span>
            <span>·</span>
            <span>since 2022</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
