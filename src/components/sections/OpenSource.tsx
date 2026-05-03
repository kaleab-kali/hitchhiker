import { SectionHeader } from '../atoms/SectionHeader';
import { Reveal } from '../atoms/Reveal';
import { OSS } from '../../data/content';

export function OpenSource() {
  return (
    <section className="frame" id="oss">
      <div className="container">
        <SectionHeader
          eyebrow="§ 09 · Open Source"
          title="<em>Public</em> garden, public weeds."
          kicker="Repositories I maintain or contribute to. Most of my best work lives here, including the embarrassing parts."
        />
        <Reveal className="oss-grid">
          {OSS.map((o, i) => (
            <a key={i} className="oss-card" href="#" data-hover>
              <div className="oss-card-head">
                <span className="oss-lang">{o.lang}</span>
                <span className="oss-stars">★ {o.stars}</span>
              </div>
              <h3 className="oss-name">{o.name}</h3>
              <span className="oss-role mono">{o.role}</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
