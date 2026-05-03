export interface Me {
  name: string;
  alias: string;
  tagline: string;
  longTagline: string;
  location: string;
  status: string;
  email: string;
}

export interface Social {
  label: string;
  handle: string;
  url: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Project {
  id: number;
  name: string;
  year: string;
  role: string;
  summary: string;
  tags: string[];
  metric: string;
  url: string;
  color: string;
}

export interface ArchiveProject {
  year: string;
  name: string;
  tags: string[];
  note: string;
}

export interface Article {
  id: number;
  title: string;
  date: string;
  read: number;
  views: string;
  tags: string[];
  excerpt: string;
}

export interface Talk {
  year: string;
  title: string;
  venue: string;
  city: string;
  url: string;
}

export interface OssRepo {
  name: string;
  role: string;
  stars: string;
  lang: string;
}

export interface Book {
  title: string;
  author: string;
  status: 'current' | 're-reading' | 'reference' | 'shelf';
}

export interface UsesGroup {
  group: string;
  items: string[];
}

export const ME: Me = {
  name: "Kaleab Girma Zeleke",
  alias: "Hitchhiker Dev",
  tagline: "Optimistic and curious engineer",
  longTagline: "Optimistic and curious engineer wandering through codebases, building tools that make the universe slightly less indifferent.",
  location: "Earth, Sol-3",
  status: "Available for interesting orbits",
  email: "kaleab@hitchhikerdev.io",
};

export const SOCIALS: Social[] = [
  { label: "GitHub",   handle: "@hitchhikerdev",     url: "https://github.com/hitchhikerdev" },
  { label: "Twitter",  handle: "@hitchhikerdev",     url: "https://twitter.com/hitchhikerdev" },
  { label: "LinkedIn", handle: "kaleab-girma",       url: "https://linkedin.com/in/kaleab-girma" },
  { label: "Substack", handle: "hitchhiker.sub",     url: "https://hitchhiker.substack.com" },
  { label: "YouTube",  handle: "@hitchhikerdev",     url: "https://youtube.com/@hitchhikerdev" },
  { label: "Email",    handle: "kaleab@hitchhikerdev.io", url: "mailto:kaleab@hitchhikerdev.io" },
];

export const SKILLS: SkillGroup[] = [
  { group: "Languages",    items: ["TypeScript", "Rust", "Python", "Dart", "Go", "SQL"] },
  { group: "Frontend",     items: ["React", "Next.js", "Tailwind", "Flutter", "SwiftUI", "Jetpack Compose"] },
  { group: "Backend",      items: ["Node.js", "Express", "FastAPI", "Django", "tRPC", "GraphQL"] },
  { group: "Data & AI",    items: ["LLM agents", "RAG pipelines", "PostgreSQL", "Redis", "Vector DBs", "AI automation"] },
  { group: "Infra & Cloud",items: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Cloudflare"] },
  { group: "Mobile",       items: ["Flutter / Dart", "React Native", "iOS", "Android"] },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 1,
    name: "Vogon — LLM Orchestration",
    year: "2025",
    role: "Solo / Lead",
    summary: "A Rust-based agent runtime that turns brittle prompt chains into deterministic, replayable workflows with first-class observability.",
    tags: ["Rust", "LLM", "Distributed"],
    metric: "12k stars",
    url: "#",
    color: "#d4a574",
  },
  {
    id: 2,
    name: "Babel Fish",
    year: "2025",
    role: "Co-founder",
    summary: "Real-time speech translation for Flutter — sub-200ms latency across 41 languages using on-device whisper variants.",
    tags: ["Flutter", "ML", "Mobile"],
    metric: "180k MAU",
    url: "#",
    color: "#a78bfa",
  },
  {
    id: 3,
    name: "Magrathea",
    year: "2024",
    role: "Lead Engineer",
    summary: "A planet-scale infra-as-code platform for spinning up bespoke developer environments. Terraform under the hood, joy on the surface.",
    tags: ["TypeScript", "AWS", "DX"],
    metric: "Series A",
    url: "#",
    color: "#7dd3a0",
  },
  {
    id: 4,
    name: "Pan-Galactic Postgres",
    year: "2024",
    role: "Contributor",
    summary: "Open-source Postgres extension for vector-aware time-series. Powers analytics across 4 acquired startups.",
    tags: ["Rust", "PostgreSQL", "Open Source"],
    metric: "OSS",
    url: "#",
    color: "#f97316",
  },
  {
    id: 5,
    name: "Heart of Gold",
    year: "2024",
    role: "Solo",
    summary: "An improbability-driven testing harness for AI agents. Fuzzes prompts, traces failures, generates regression suites automatically.",
    tags: ["Python", "AI", "Testing"],
    metric: "Internal",
    url: "#",
    color: "#d4a574",
  },
  {
    id: 6,
    name: "Sub-Etha",
    year: "2023",
    role: "Founding Eng",
    summary: "A peer-to-peer mesh networking SDK for low-bandwidth regions. Deployed across three sub-Saharan field studies.",
    tags: ["Rust", "P2P", "Mobile"],
    metric: "Field deployed",
    url: "#",
    color: "#7dd3a0",
  },
  {
    id: 7,
    name: "Deep Thought",
    year: "2023",
    role: "Lead",
    summary: "An internal LLM evaluation pipeline computing answers to questions you didn't know to ask. Surprisingly often: 42.",
    tags: ["AI", "Python", "Eval"],
    metric: "Acquired",
    url: "#",
    color: "#a78bfa",
  },
  {
    id: 8,
    name: "Improbability Drive",
    year: "2023",
    role: "Hackathon",
    summary: "A WebGL playground that visualizes high-dimensional embeddings as navigable 3D nebulae. Won SF AI Hack '23.",
    tags: ["WebGL", "AI", "Viz"],
    metric: "🏆 1st place",
    url: "#",
    color: "#f97316",
  },
  {
    id: 9,
    name: "Marvin",
    year: "2022",
    role: "Solo",
    summary: "A pessimistic but accurate cost monitor for cloud infra. Roasts your AWS bill with citations.",
    tags: ["Go", "AWS", "DevOps"],
    metric: "3.2k users",
    url: "#",
    color: "#d4a574",
  },
  {
    id: 10,
    name: "Trillian Search",
    year: "2022",
    role: "Co-founder",
    summary: "Semantic search-as-a-service for indie product teams. Replaces 90% of Algolia tickets with one endpoint.",
    tags: ["TypeScript", "Vector", "SaaS"],
    metric: "Bootstrapped",
    url: "#",
    color: "#a78bfa",
  },
];

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  { year: "2022", name: "Zaphod CLI",            tags: ["Rust", "CLI"],         note: "Two-headed git workflow tool" },
  { year: "2022", name: "Slartibartfast Maps",   tags: ["WebGL", "Geo"],        note: "Procedural coastline generator" },
  { year: "2021", name: "Jeltz",                 tags: ["Go", "Email"],         note: "Bureaucratic email auto-responder" },
  { year: "2021", name: "Eddie",                 tags: ["TS", "Voice"],         note: "Cheerful onboard voice assistant" },
  { year: "2020", name: "Bowl of Petunias",      tags: ["React", "Therapy"],    note: "Mood journal w/ probabilistic tags" },
  { year: "2020", name: "42 — A REPL",           tags: ["Python", "Edu"],       note: "Teaches kids regex through poetry" },
  { year: "2019", name: "Hyperspace Bypass",     tags: ["K8s", "Infra"],        note: "Zero-downtime DB migration tool" },
  { year: "2019", name: "Towel.txt",             tags: ["Static", "Docs"],      note: "Markdown -> printable doc generator" },
  { year: "2018", name: "Vogon Constructor",     tags: ["Rust", "Compiler"],    note: "Toy parser combinator library" },
  { year: "2018", name: "Galaxy Atlas",          tags: ["D3", "Viz"],           note: "Personal reading visualizer" },
];

export const ARTICLES: Article[] = [
  { id: 1, title: "Rust Is Not a Hammer (and Your Side Project Is Not a Nail)",
    date: "Apr 12, 2026", read: 9, views: "12.4k",
    tags: ["Rust", "Engineering"],
    excerpt: "On knowing when borrow-checker pain is worth it — and when reaching for Python is the senior move." },
  { id: 2, title: "The Quiet Religion of Type Safety",
    date: "Mar 28, 2026", read: 7, views: "8.1k",
    tags: ["TypeScript", "Opinion"],
    excerpt: "Why I converted, why I sometimes lapse, and why neither makes you a better engineer." },
  { id: 3, title: "On-Device Whisper: A Field Report",
    date: "Mar 14, 2026", read: 12, views: "21.7k",
    tags: ["AI", "Mobile", "Flutter"],
    excerpt: "Six months of shipping speech recognition to phones in places without reliable bandwidth." },
  { id: 4, title: "Postgres Is the Only Database You Need (Until It Isn't)",
    date: "Feb 22, 2026", read: 11, views: "34.2k",
    tags: ["PostgreSQL", "Backend"],
    excerpt: "A deeply biased love letter, followed by an honest list of when to reach for something else." },
  { id: 5, title: "Agentic Workflows Are Just Cron Jobs With Extra Steps",
    date: "Feb 03, 2026", read: 8, views: "15.6k",
    tags: ["AI", "Opinion"],
    excerpt: "The hype is exhausting. The boring version is genuinely useful. Here's the boring version." },
  { id: 6, title: "Flutter at Scale: Lessons From 180k Daily Users",
    date: "Jan 19, 2026", read: 14, views: "9.3k",
    tags: ["Flutter", "Mobile"],
    excerpt: "Memory budgets, isolate strategy, and the unglamorous work of keeping the framerate honest." },
  { id: 7, title: "Why I Still Read Papers (and You Probably Should Too)",
    date: "Dec 30, 2025", read: 6, views: "5.2k",
    tags: ["Career", "AI"],
    excerpt: "A lightweight system for keeping up without drowning." },
  { id: 8, title: "Don't Panic: A Junior Engineer's Survival Guide",
    date: "Dec 11, 2025", read: 10, views: "44.8k",
    tags: ["Career", "Opinion"],
    excerpt: "Things I wish someone had told me. Mostly: nobody knows what they're doing, but the good ones know how to find out." },
  { id: 9, title: "Building a Deterministic LLM Runtime in Rust",
    date: "Nov 24, 2025", read: 16, views: "18.9k",
    tags: ["Rust", "AI", "Architecture"],
    excerpt: "How Vogon trades latency for reproducibility, and why your eval harness will thank you." },
  { id: 10, title: "Tailwind Is Fine, You Are Fine, We Are All Fine",
    date: "Nov 02, 2025", read: 5, views: "7.7k",
    tags: ["Frontend", "Opinion"],
    excerpt: "A peace treaty after a decade of CSS holy wars." },
  { id: 11, title: "Kubernetes for People Who Just Wanted a Server",
    date: "Oct 18, 2025", read: 13, views: "22.1k",
    tags: ["Infra", "DevOps"],
    excerpt: "The minimum viable mental model. Skip the certifications." },
  { id: 12, title: "AI Automation Is the New Spreadsheet",
    date: "Oct 03, 2025", read: 7, views: "11.4k",
    tags: ["AI", "Opinion"],
    excerpt: "Both democratize work, both create a long tail of fragile artifacts. Here's how to ship the durable kind." },
];

export const TALKS: Talk[] = [
  { year: "2026", title: "The Hitchhiker's Guide to LLM Runtimes", venue: "RustConf", city: "Portland, OR", url: "#" },
  { year: "2025", title: "Shipping On-Device AI to Low-Bandwidth Worlds", venue: "Flutter Forward", city: "Nairobi, KE", url: "#" },
  { year: "2025", title: "Postgres + Vectors: A Love Story", venue: "PGCon", city: "Ottawa, CA", url: "#" },
  { year: "2024", title: "The Boring Path to Useful Agents", venue: "AI Engineer Summit", city: "San Francisco, CA", url: "#" },
  { year: "2024", title: "Type Safety as Negotiation", venue: "Strange Loop", city: "St. Louis, MO", url: "#" },
];

export const OSS: OssRepo[] = [
  { name: "vogon-runtime", role: "Maintainer",  stars: "12.4k", lang: "Rust" },
  { name: "babelfish-flutter", role: "Author",  stars: "3.8k",  lang: "Dart" },
  { name: "marvin-aws", role: "Author",         stars: "3.2k",  lang: "Go" },
  { name: "tokio", role: "Contributor",         stars: "27.1k", lang: "Rust" },
  { name: "langchain", role: "Contributor",     stars: "98.3k", lang: "Python" },
  { name: "pgvector", role: "Contributor",      stars: "11.7k", lang: "C" },
];

export const NOW: string[] = [
  "Writing chapter three of a small book on building durable AI systems.",
  "Shipping v0.4 of Vogon — focused on observability and replay tooling.",
  "Mentoring two junior engineers from the Addis Ababa tech community.",
  "Re-reading Designing Data-Intensive Applications for the third time.",
  "Learning to bake bread that doesn't end in tears.",
];

export const BOOKSHELF: Book[] = [
  { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams",   status: "re-reading" },
  { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", status: "reference" },
  { title: "The Pragmatic Programmer",              author: "Hunt & Thomas",     status: "shelf" },
  { title: "A Philosophy of Software Design",       author: "John Ousterhout",   status: "current" },
  { title: "Crafting Interpreters",                 author: "Robert Nystrom",    status: "shelf" },
  { title: "The Soul of a New Machine",             author: "Tracy Kidder",      status: "shelf" },
  { title: "Working in Public",                     author: "Nadia Eghbal",      status: "shelf" },
  { title: "Thinking in Systems",                   author: "Donella Meadows",   status: "current" },
];

export const USES: UsesGroup[] = [
  { group: "Editor",   items: ["Neovim w/ a sin-stack of plugins", "Zed for pair sessions", "VSCode when shipping React"] },
  { group: "Hardware", items: ["MacBook Pro M3 Max", "ZSA Moonlander keyboard", "Logitech MX Master 3S", "LG UltraFine 5K"] },
  { group: "Daily",    items: ["Linear for tasks", "Obsidian for thinking", "Raycast for everything", "Arc browser"] },
  { group: "Terminal", items: ["Ghostty + Zsh", "Starship prompt", "atuin for shell history", "lazygit"] },
];
