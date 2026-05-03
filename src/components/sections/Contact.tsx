import { Reveal } from '../atoms/Reveal';
import { ME, SOCIALS } from '../../data/content';

export function Contact() {
  return (
    <section className="frame contact-section" id="contact">
      <Reveal className="container contact-inner">
        <div className="contact-stars" aria-hidden="true">
          ✦ &nbsp;·&nbsp; ✧ &nbsp;·&nbsp; ✦
        </div>
        <span className="eyebrow">§ 15 · Final Transmission</span>
        <h2 className="display contact-title">
          Let's <em>build</em>
          <br />
          something <em>strange</em>.
        </h2>
        <p className="contact-kicker">
          Open to interesting roles, contract gigs, and odd collaborations. Especially: AI infra,
          developer tools, and small teams shipping at high quality.
        </p>
        <a href={`mailto:${ME.email}`} className="contact-email" data-hover>
          {ME.email} <span className="contact-arrow">↗</span>
        </a>
        <div className="contact-socials">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.url} className="contact-social" data-hover>
              <span className="contact-social-label mono">{s.label}</span>
              <span className="contact-social-handle">{s.handle}</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
