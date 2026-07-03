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

export interface ProjectDetail {
  problem: string;
  approach: string;
  results: string;
  learned: string;
}

export interface Project {
  id: number;
  name: string;
  year: string;
  role: string;
  summary: string;
  tags: string[];
  url: string;
  color: string;
  detail: ProjectDetail;
}

export interface ArchiveProject {
  year: string;
  name: string;
  tags: string[];
  note: string;
}

export interface ArticleSection {
  h2?: string;
  text: string;
}

export interface Article {
  id: number;
  title: string;
  date: string;
  read: number;
  views: string;
  tags: string[];
  excerpt: string;
  body: ArticleSection[];
  quote?: string;
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
  email: "kaleab.g.zeleke@gmail.com",
};

export const SOCIALS: Social[] = [
  { label: "GitHub",   handle: "@kaleab-kali",       url: "https://github.com/kaleab-kali" },
  { label: "X",        handle: "@hitch_hiker_dev",   url: "https://x.com/hitch_hiker_dev" },
  { label: "LinkedIn", handle: "kaleab-girma",       url: "https://linkedin.com/in/kaleab-girma" },
  { label: "Substack", handle: "hitchhiker.sub",     url: "https://hitchhiker.substack.com" },
  { label: "YouTube",  handle: "@hitchhikerdev",     url: "https://youtube.com/@hitchhikerdev" },
  { label: "Email",    handle: "kaleab.g.zeleke@gmail.com", url: "mailto:kaleab.g.zeleke@gmail.com" },
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
    id: 11,
    name: "Escrow Platform for Ecommerce",
    year: "2025",
    role: "Tech Lead",
    summary: "An escrow account platform for ecommerce, the first of its kind in Ethiopia. Buyer funds are held safely and released only when delivery is confirmed.",
    tags: ["Fintech", "Ecommerce", "Payments"],
    url: "#",
    color: "#d4a574",
    detail: {
      problem: "Online buyers and sellers in Ethiopia had no neutral party holding funds. Payment moved up front, trust broke down, and ecommerce stalled on both sides of every transaction.",
      approach: "Designed an escrow account flow where buyer funds land in a segregated account, the seller ships, and money releases only on confirmed delivery. Dispute states, settlement reports, and bank integrations were built in from day one.",
      results: "The first escrow platform of its kind in Ethiopia. Months of work with banking partners before the first birr moved, and the system handles live marketplace transactions today.",
      learned: "In fintech the code is the easy half. Compliance, reconciliation, and clear failure states are what make people trust software with their money.",
    },
  },
  {
    id: 12,
    name: "ESX Order Management",
    year: "2025",
    role: "Tech Lead",
    summary: "The first BBO and order management system built for the Ethiopian Securities Exchange, covering order entry, matching, and market data.",
    tags: ["Fintech", "Trading", "Capital Markets"],
    url: "#",
    color: "#a78bfa",
    detail: {
      problem: "The Ethiopian Securities Exchange launched with no local tooling for brokers: no BBO feed, no order management, nothing between a broker's phone line and the market.",
      approach: "Built the first BBO and order management system for ESX: order entry and validation, best bid and offer aggregation, execution tracking, and an audit trail designed for regulator review.",
      results: "Live for the opening chapter of Ethiopian capital markets. Handles broker order flow end to end and keeps evolving with the exchange's rulebook.",
      learned: "Market infrastructure punishes ambiguity. Every order state must be explicit, logged, and recoverable, because in trading systems 'probably fine' is an outage.",
    },
  },
  {
    id: 13,
    name: "ShareOS",
    year: "2024",
    role: "Tech Lead",
    summary: "A shareholder operations system that companies use to manage shareholder activities, records, meetings, and communication in one place.",
    tags: ["SaaS", "Fintech", "Governance"],
    url: "#",
    color: "#7dd3a0",
    detail: {
      problem: "Companies with hundreds or thousands of shareholders were managing them in spreadsheets: registries, dividends, meeting invitations, and votes, all manual and error prone.",
      approach: "Built ShareOS as a shareholder operating system: a clean registry as the single source of truth, with dividends, general assembly meetings, voting, and shareholder communication layered on top.",
      results: "Companies run shareholder operations in one place instead of five spreadsheets. Registry data that took weeks to reconcile is now live and auditable.",
      learned: "Replacing spreadsheets is not a technical problem, it is a trust migration. Import tools and side-by-side verification mattered more than any headline feature.",
    },
  },
  {
    id: 14,
    name: "Tarik",
    year: "2024",
    role: "Tech Lead",
    summary: "A digital family legacy vault, on web and mobile, for storing family history with shareable public links so the family name is remembered forever.",
    tags: ["Web", "Mobile", "Consumer"],
    url: "#",
    color: "#f97316",
    detail: {
      problem: "Family histories live in memory and fade with each generation. There was no dedicated place to preserve a family's story and pass it on.",
      approach: "Built Tarik as a digital family legacy vault on web and mobile: timelines, photos, written and spoken stories, and public share links so a family's history can be found by anyone.",
      results: "Families use it as a living archive across generations. Public links turned private records into shareable heritage, which is the whole point: the family name is remembered.",
      learned: "Products about memory have to feel permanent. Storage formats, exports, and longevity guarantees were design decisions, not infrastructure details.",
    },
  },
  {
    id: 15,
    name: "PayPerMint",
    year: "2023",
    role: "Tech Lead",
    summary: "A pay per minute platform that connects experts with entrepreneur clients for on-demand, metered consultations.",
    tags: ["Marketplace", "SaaS", "Payments"],
    url: "#",
    color: "#d4a574",
    detail: {
      problem: "Entrepreneurs needed expert advice in short bursts, but consulting was sold in retainers and full sessions. Experts had no clean way to charge for exactly the time they gave.",
      approach: "Built a pay per minute marketplace: metered calls, per-minute billing, expert profiles and availability, and payouts that settle automatically after each session.",
      results: "Experts price their knowledge by the minute and clients pay only for what they use. The metering and billing core has run reliably since the first live sessions.",
      learned: "When money maps to a running clock, billing disputes are UX problems. Showing both sides the same timer in real time removed almost all of them.",
    },
  },
  {
    id: 16,
    name: "CultureQuest",
    year: "2023",
    role: "Tech Lead",
    summary: "A mobile app that supports the tourism industry in Ethiopia by giving tourists challenges to visit places and earn incentives along the way.",
    tags: ["Mobile", "Tourism", "Gamification"],
    url: "#",
    color: "#a78bfa",
    detail: {
      problem: "Tourists in Ethiopia cluster around a few famous sites while hundreds of cultural places go unvisited, and the tourism industry had no playful way to change that.",
      approach: "Built a mobile app that turns exploring into a game: location-based challenges, points for visiting cultural sites, and incentives redeemable with local partners.",
      results: "Tourists follow challenge routes to places they would never have found, and partner sites get foot traffic the brochures never delivered.",
      learned: "Gamification only works when the reward loop is honest. Real incentives from real partners beat digital badges every time.",
    },
  },
  {
    id: 17,
    name: "Papal",
    year: "2024",
    role: "Tech Lead",
    summary: "A 3D visualizer and learning tool that renders topics in 3D so students understand real world applications, not theory alone.",
    tags: ["3D", "EdTech", "WebGL"],
    url: "#",
    color: "#7dd3a0",
    detail: {
      problem: "Students learn abstract topics from flat diagrams and memorize theory without ever seeing how a concept behaves in the real world.",
      approach: "Built Papal, a 3D visualization learning system: topics are rendered as interactive 3D scenes students can rotate, dissect, and manipulate, each tied to a real world application of the concept.",
      results: "Concepts that took a lecture to describe take minutes to see. Students explore a model, break it, and rebuild it, which is how understanding actually sticks.",
      learned: "3D for its own sake is a gimmick. Every scene had to answer one question: what does this concept do in the real world?",
    },
  },
  {
    id: 18,
    name: "Government Integration SDK",
    year: "2024",
    role: "Tech Lead",
    summary: "SDKs for integrating with Ethiopian government systems, including the Ministry of Revenue, Ministry of Trade, Fayda national ID, and others.",
    tags: ["SDK", "GovTech", "API"],
    url: "#",
    color: "#f97316",
    detail: {
      problem: "Every company integrating with Ethiopian government systems (tax, trade licensing, national ID) rebuilt the same brittle integrations from scratch, each with its own bugs.",
      approach: "Built SDKs that wrap the Ministry of Revenue, Ministry of Trade, Fayda national ID, and other government APIs behind clean, documented, versioned interfaces with sane errors and retries.",
      results: "Integration work that took teams weeks now takes days. One tested SDK absorbs the quirks of each government endpoint so product teams never have to see them.",
      learned: "An SDK is a promise. Backward compatibility, clear errors, and honest docs matter more than elegant internals, because other people's production depends on you.",
    },
  },
  {
    id: 19,
    name: "Medan",
    year: "2023",
    role: "Tech Lead",
    summary: "A medicine app that helps people find doctors based on their needs across hospitals in Addis Ababa.",
    tags: ["Mobile", "HealthTech", "Search"],
    url: "#",
    color: "#d4a574",
    detail: {
      problem: "Finding the right doctor in Addis Ababa meant calling hospitals one by one. Patients had no way to search by specialty, availability, or need across hospitals.",
      approach: "Built Medan, a medicine app that indexes doctors across hospitals in Addis Ababa and matches patients to them by specialty, need, and location.",
      results: "Patients search once instead of calling ten reception desks. The doctor directory became a map of the city's care that never existed before.",
      learned: "Health products live or die on data freshness. Keeping doctor schedules current was harder and more important than any feature in the app.",
    },
  },
  {
    id: 1,
    name: "Vogon: LLM Orchestration",
    year: "2025",
    role: "Solo / Lead",
    summary: "A Rust-based agent runtime that turns brittle prompt chains into deterministic, replayable workflows with first-class observability.",
    tags: ["Rust", "LLM", "Distributed"],
    url: "#",
    color: "#d4a574",
    detail: {
      problem: "Prompt-chain systems break in production: no replay, no observability, and failures you cannot reproduce because the same input takes a different path every run.",
      approach: "Built a Rust agent runtime around deterministic replay, observable internals, and an API small enough to keep in your head. Every side effect is recorded so any run can be replayed exactly.",
      results: "Brittle chains became replayable workflows. Debugging an agent run went from guesswork to reading a trace.",
      learned: "The boring parts, error messages and replay tools, are 80% of the developer experience. The fancy parts are the easy part.",
    },
  },
  {
    id: 2,
    name: "Babel Fish",
    year: "2025",
    role: "Tech Lead",
    summary: "Real-time speech translation for Flutter with sub-200ms latency across 41 languages using on-device whisper variants.",
    tags: ["Flutter", "ML", "Mobile"],
    url: "#",
    color: "#a78bfa",
    detail: {
      problem: "Real-time translation apps assume fast networks. In low-bandwidth regions they simply stop working, which is exactly where translation matters most.",
      approach: "Ran whisper variants entirely on device, tuned for sub-200ms latency across 41 languages, with graceful degradation on weaker hardware.",
      results: "Conversations translate live without a connection, and latency stays under a fifth of a second on midrange phones.",
      learned: "On-device ML is a memory budget negotiation. The model you benchmark is never the model you ship; the model you ship is the one that fits.",
    },
  },
  {
    id: 3,
    name: "Magrathea",
    year: "2024",
    role: "Lead Engineer",
    summary: "A planet-scale infra-as-code platform for spinning up bespoke developer environments. Terraform under the hood, joy on the surface.",
    tags: ["TypeScript", "AWS", "DX"],
    url: "#",
    color: "#7dd3a0",
    detail: {
      problem: "Spinning up a full developer environment took days of tribal knowledge and YAML archaeology, and every environment drifted from the last.",
      approach: "Wrapped Terraform in a platform that builds bespoke environments on demand: reproducible underneath, one command on the surface.",
      results: "New engineers go from laptop to a working environment in minutes instead of days, and environments stopped drifting apart.",
      learned: "Developer platforms succeed on defaults. Every knob you expose is a decision you failed to make for the user.",
    },
  },
  {
    id: 4,
    name: "Pan-Galactic Postgres",
    year: "2024",
    role: "Contributor",
    summary: "Open-source Postgres extension for vector-aware time-series. Powers analytics for several production teams.",
    tags: ["Rust", "PostgreSQL", "Open Source"],
    url: "#",
    color: "#f97316",
    detail: {
      problem: "Vector search and time-series lived in separate databases, doubling infrastructure and sync headaches for teams that needed both.",
      approach: "Built a Postgres extension that makes time-series data vector-aware, so one database answers both kinds of question in plain SQL.",
      results: "Teams dropped an entire database from their stack. Analytics run where the data already lives.",
      learned: "Extending a thirty-year-old database teaches humility. When your design disagrees with Postgres, Postgres is usually right.",
    },
  },
  {
    id: 5,
    name: "Heart of Gold",
    year: "2024",
    role: "Solo",
    summary: "An improbability-driven testing harness for AI agents. Fuzzes prompts, traces failures, generates regression suites automatically.",
    tags: ["Python", "AI", "Testing"],
    url: "#",
    color: "#d4a574",
    detail: {
      problem: "AI agents pass demos and fail in production, and nobody can say why, because the failure space is too improbable to enumerate by hand.",
      approach: "Built an improbability-driven harness: fuzz prompts and tool responses, trace every failure, and turn each one into a regression test automatically.",
      results: "Failures that used to hide in production now show up in CI with a trace attached.",
      learned: "You cannot test nondeterminism with deterministic tests alone. Embrace the fuzz.",
    },
  },
  {
    id: 6,
    name: "Sub-Etha",
    year: "2023",
    role: "Founding Eng",
    summary: "A peer-to-peer mesh networking SDK for low-bandwidth regions. Deployed across three sub-Saharan field studies.",
    tags: ["Rust", "P2P", "Mobile"],
    url: "#",
    color: "#7dd3a0",
    detail: {
      problem: "Apps assume the internet. In low-bandwidth regions the nearest peer is often closer than any server, and that proximity was going unused.",
      approach: "Built a peer-to-peer mesh networking SDK that lets nearby devices discover and talk to each other with no infrastructure at all.",
      results: "Deployed across three sub-Saharan field studies, keeping applications alive where connectivity is not.",
      learned: "Field conditions beat lab assumptions every time. Ship, observe, revise.",
    },
  },
  {
    id: 7,
    name: "Deep Thought",
    year: "2023",
    role: "Lead",
    summary: "An internal LLM evaluation pipeline computing answers to questions you didn't know to ask. Surprisingly often: 42.",
    tags: ["AI", "Python", "Eval"],
    url: "#",
    color: "#a78bfa",
    detail: {
      problem: "LLM output quality was judged by vibes. Teams shipped regressions without knowing, because nobody measured the same thing twice.",
      approach: "Built an internal evaluation pipeline that continuously scores model outputs against curated suites, with diffs between runs instead of arguments between people.",
      results: "Model changes now come with numbers attached. Surprisingly often, the answer is 42.",
      learned: "An eval you do not automate is an eval you will stop running.",
    },
  },
  {
    id: 8,
    name: "Improbability Drive",
    year: "2023",
    role: "Solo",
    summary: "A WebGL playground that visualizes high-dimensional embeddings as navigable 3D nebulae.",
    tags: ["WebGL", "AI", "Viz"],
    url: "#",
    color: "#f97316",
    detail: {
      problem: "High-dimensional embeddings are impossible to reason about as spreadsheets of floats. Structure hides in dimensions nobody can see.",
      approach: "Rendered embedding spaces as navigable 3D nebulae in WebGL, so clusters and outliers become something you can fly through instead of squint at.",
      results: "Clusters, outliers, and drift became visible at a glance, and embedding bugs started getting caught by eye.",
      learned: "Visualization is debugging for intuition. If you can see the space, you can reason about it.",
    },
  },
  {
    id: 9,
    name: "Marvin",
    year: "2022",
    role: "Solo",
    summary: "A pessimistic but accurate cost monitor for cloud infra. Roasts your AWS bill with citations.",
    tags: ["Go", "AWS", "DevOps"],
    url: "#",
    color: "#d4a574",
    detail: {
      problem: "Cloud bills grow silently until finance notices, and engineers had no tool that explained cost in their own language.",
      approach: "Built a pessimistic but accurate cost monitor that roasts your AWS bill with citations: every complaint links to the exact resources responsible.",
      results: "Waste gets named, with receipts. Teams cut spend without a single budget meeting.",
      learned: "Humor gets a tool adopted. Accuracy is what keeps it installed.",
    },
  },
  {
    id: 10,
    name: "Trillian Search",
    year: "2022",
    role: "Tech Lead",
    summary: "Semantic search-as-a-service for indie product teams. Replaces 90% of Algolia tickets with one endpoint.",
    tags: ["TypeScript", "Vector", "SaaS"],
    url: "#",
    color: "#a78bfa",
    detail: {
      problem: "Indie teams needed semantic search but not enterprise pricing or a week of relevance tuning.",
      approach: "Built search-as-a-service with one endpoint: send documents, get semantic search back, nothing to configure and nothing to tune.",
      results: "Replaces 90% of typical search tickets with a single integration that indie teams set up in an afternoon.",
      learned: "For small teams the best feature is the absence of configuration.",
    },
  },
];

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  { year: "2022", name: "Zaphod CLI",            tags: ["Rust", "CLI"],         note: "Two-headed git workflow tool" },
  { year: "2022", name: "Slartibartfast Maps",   tags: ["WebGL", "Geo"],        note: "Procedural coastline generator" },
  { year: "2021", name: "Jeltz",                 tags: ["Go", "Email"],         note: "Bureaucratic email auto-responder" },
  { year: "2021", name: "Eddie",                 tags: ["TS", "Voice"],         note: "Cheerful onboard voice assistant" },
  { year: "2020", name: "Bowl of Petunias",      tags: ["React", "Therapy"],    note: "Mood journal w/ probabilistic tags" },
  { year: "2020", name: "42: A REPL",            tags: ["Python", "Edu"],       note: "Teaches kids regex through poetry" },
  { year: "2019", name: "Hyperspace Bypass",     tags: ["K8s", "Infra"],        note: "Zero-downtime DB migration tool" },
  { year: "2019", name: "Towel.txt",             tags: ["Static", "Docs"],      note: "Markdown -> printable doc generator" },
  { year: "2018", name: "Vogon Constructor",     tags: ["Rust", "Compiler"],    note: "Toy parser combinator library" },
  { year: "2018", name: "Galaxy Atlas",          tags: ["D3", "Viz"],           note: "Personal reading visualizer" },
];


export { ARTICLES } from './articles';

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
  "Shipping v0.4 of Vogon, focused on observability and replay tooling.",
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
