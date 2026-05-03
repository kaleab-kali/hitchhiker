import { useScrolled } from '../../hooks/useScrolled';

interface NavProps {
  mode: 'dark' | 'light';
  setMode: (m: 'dark' | 'light') => void;
}

const LINKS: Array<[string, string]> = [
  ['work', 'Work'],
  ['writing', 'Writing'],
  ['talks', 'Talks'],
  ['now', 'Now'],
  ['uses', 'Uses'],
  ['contact', 'Contact'],
];

export function Nav({ mode, setMode }: NavProps) {
  const scrolled = useScrolled(40);
  return (
    <nav className={'nav ' + (scrolled ? 'scrolled' : '')}>
      <div className="container nav-row">
        <a href="#top" className="nav-brand" data-hover>
          <span className="nav-brand-mark">★</span>
          <span className="nav-brand-name">
            Hitchhiker<span className="nav-brand-dim">.dev</span>
          </span>
        </a>
        <div className="nav-links">
          {LINKS.map(([id, label]) => (
            <a key={id} href={'#' + id} data-hover>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="nav-mode"
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            aria-label="toggle theme"
            data-hover
          >
            {mode === 'dark' ? '☾' : '☀'}
          </button>
        </div>
      </div>
    </nav>
  );
}
