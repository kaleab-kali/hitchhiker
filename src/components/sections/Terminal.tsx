import { useEffect, useRef, useState, type FormEvent } from 'react';
import { SectionHeader } from '../atoms/SectionHeader';
import { Reveal } from '../atoms/Reveal';
import { FEATURED_PROJECTS, ME, SOCIALS } from '../../data/content';

type LineKind = 'sys' | 'in' | 'out' | 'err';
interface Line {
  kind: LineKind;
  text: string;
}

const COMMANDS: Record<string, () => string[] | '__clear__'> = {
  help: () => [
    'available transmissions:',
    '  about       — who is this guy',
    '  skills      — primary stack',
    '  projects    — list featured projects',
    '  socials     — find me elsewhere',
    '  contact     — say hello',
    '  whoami      — existential answer',
    '  42          — the answer',
    '  panic       — i told you not to',
    '  clear       — wipe terminal',
  ],
  about: () => [
    'kaleab girma zeleke — engineer, writer, hitchhiker.',
    'currently in low earth orbit.',
  ],
  skills: () => ['rust · typescript · dart/flutter · python · postgres · aws · llms'],
  projects: () =>
    FEATURED_PROJECTS.slice(0, 5).map((p) => `  ${p.year}  ${p.name}  — ${p.role}`),
  socials: () => SOCIALS.map((s) => `  ${s.label.padEnd(10)} ${s.handle}`),
  contact: () => [`mailto:${ME.email}`, 'or grab the form below ↓'],
  whoami: () => ['a mostly-harmless engineer.'],
  '42': () => ['the answer to life, the universe, and everything.'],
  panic: () => ["DON'T PANIC. (in large friendly letters.)"],
  clear: () => '__clear__',
};

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLines([
      { kind: 'sys', text: 'hitchhiker.dev v2.6 · ssh transmission established' },
      { kind: 'sys', text: "type 'help' for available commands. type 'panic' if you must." },
      { kind: 'sys', text: '' },
    ]);
  }, []);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const next: Line[] = [...lines, { kind: 'in', text: input }];
    if (!cmd) {
      setLines(next);
      return;
    }
    const fn = COMMANDS[cmd];
    if (!fn) {
      next.push({ kind: 'err', text: `unknown command: ${cmd}. try 'help'.` });
    } else {
      const out = fn();
      if (out === '__clear__') {
        setLines([]);
        setInput('');
        return;
      }
      out.forEach((t) => next.push({ kind: 'out', text: t }));
    }
    next.push({ kind: 'out', text: '' });
    setLines(next);
    setInput('');
    setTimeout(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }, 10);
  };

  return (
    <section className="frame terminal-section" id="terminal">
      <div className="container">
        <SectionHeader
          eyebrow="§ 12 · Live Transmission"
          title="A <em>terminal</em>, in case you prefer text."
        />
        <Reveal className="terminal">
          <div onClick={() => inputRef.current?.focus()} data-hover>
            <div className="terminal-bar">
              <span className="terminal-dot" style={{ background: '#ff5f56' }}></span>
              <span className="terminal-dot" style={{ background: '#ffbd2e' }}></span>
              <span className="terminal-dot" style={{ background: '#27c93f' }}></span>
              <span className="terminal-title mono">~/hitchhiker — zsh</span>
            </div>
            <div className="terminal-body" ref={bodyRef}>
              {lines.map((l, i) => (
                <div key={i} className={'term-line term-' + l.kind}>
                  {l.kind === 'in' && <span className="term-prompt">hitchhiker ❯ </span>}
                  {l.kind === 'err' && <span className="term-prompt err">! </span>}
                  <span>{l.text || ' '}</span>
                </div>
              ))}
              <form onSubmit={submit} className="term-line">
                <span className="term-prompt">hitchhiker ❯ </span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="type 'help'…"
                />
                <span className="term-cursor">▊</span>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
