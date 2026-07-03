import { useState, type FormEvent } from 'react';
import { Reveal } from '../atoms/Reveal';

interface Entry {
  name: string;
  msg: string;
  date: string;
}

const INITIAL: Entry[] = [
  {
    name: 'ada l.',
    msg: 'your vogon piece changed how i think about agent runtimes. thank you.',
    date: '2 days ago',
  },
  {
    name: 'miguel s.',
    msg: 'saw you speak at rustconf, the bit about replay was gold.',
    date: '1 week ago',
  },
  {
    name: 'anonymous',
    msg: 'you forgot a semicolon on the about page. (jk. or am i.)',
    date: '2 weeks ago',
  },
  {
    name: 'priya k.',
    msg: 'the field report on whisper helped me ship our app. respect.',
    date: '1 month ago',
  },
];

export function Guestbook() {
  const [entries, setEntries] = useState<Entry[]>(INITIAL);
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !msg.trim()) return;
    setEntries([{ name: name.trim(), msg: msg.trim(), date: 'just now' }, ...entries]);
    setName('');
    setMsg('');
  };

  return (
    <section className="frame guestbook-section" id="guestbook">
      <div className="container guestbook-grid">
        <Reveal className="guestbook-side">
          <span className="eyebrow">§ 14 · Guestbook</span>
          <h2 className="display guestbook-title">
            Sign the <em>visitor's log</em>.
          </h2>
          <p className="guestbook-kicker">
            An old-web tradition: leave a note, say hello, disagree with one of my opinions. I read
            every entry.
          </p>
          <form className="guestbook-form" onSubmit={submit}>
            <input
              type="text"
              placeholder="name (or pseudonym)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="your message…"
              rows={4}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <button type="submit" className="btn primary">
              Sign ↗
            </button>
          </form>
        </Reveal>
        <Reveal as="ul" className="guestbook-list">
          {entries.map((e, i) => (
            <li key={i} className="guestbook-entry">
              <div className="guestbook-head">
                <span className="guestbook-name">{e.name}</span>
                <span className="guestbook-date mono">{e.date}</span>
              </div>
              <p className="guestbook-msg">{e.msg}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
