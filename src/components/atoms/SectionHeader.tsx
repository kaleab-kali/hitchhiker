import { Reveal } from './Reveal';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  kicker?: string;
}

export function SectionHeader({ eyebrow, title, kicker }: SectionHeaderProps) {
  return (
    <Reveal className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="display section-title" dangerouslySetInnerHTML={{ __html: title }} />
      {kicker && <p className="section-kicker">{kicker}</p>}
    </Reveal>
  );
}
