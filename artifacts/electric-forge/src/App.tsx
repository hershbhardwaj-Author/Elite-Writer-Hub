import { useEffect, useState } from "react";
import {
  ArrowRight, Flame, Zap, Globe, Star, Users, Calendar, Video, Phone,
  Library, AlertTriangle, X, Check, BookOpen, FileText, Megaphone,
  ChevronLeft, CheckCircle, ArrowUpRight,
} from "lucide-react";

/* ─────────────────────────── DATA ─────────────────────────── */

const phases = [
  {
    num: "01", title: "The Architecture", month: "Month 1",
    desc: "Blueprint the foundation. We tear down your ideas and rebuild them into an unshakable structure.",
    bg: "bg-[#00E676]", border: "border-black",
    shadow: "shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]",
    hoverShadow: "hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]",
    numColor: "", titleColor: "", monthBg: "bg-black text-white",
  },
  {
    num: "02", title: "The Writing Forge", month: "Months 2 & 3",
    desc: "This is where the fire gets hot. Intensive, relentless writing with direct editorial feedback.",
    bg: "bg-white", border: "border-black",
    shadow: "shadow-[12px_12px_0px_0px_rgba(0,102,255,1)]",
    hoverShadow: "hover:shadow-[16px_16px_0px_0px_rgba(0,102,255,1)]",
    numColor: "text-[#0066FF]", titleColor: "text-[#0066FF]",
    monthBg: "bg-[#0066FF] text-white",
    icon: <Flame size={64} className="text-[#0066FF] mt-8 self-end" />,
    span: "md:col-span-2 lg:col-span-1",
  },
  {
    num: "03", title: "Publishing Mechanics", month: "Month 4",
    desc: "We handle the technical execution. Typesetting, cover design, legal framework.",
    bg: "bg-[#0066FF]", border: "border-black",
    shadow: "shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]",
    hoverShadow: "hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]",
    numColor: "", titleColor: "text-white",
    monthBg: "bg-white text-black", textColor: "text-white",
  },
  {
    num: "04", title: "The Publicity Engine", month: "Month 5",
    desc: "Launch preparation. We don't just release a book, we detonate it in your market.",
    bg: "bg-black", border: "border-black",
    shadow: "shadow-[12px_12px_0px_0px_rgba(0,230,118,1)]",
    hoverShadow: "hover:shadow-[16px_16px_0px_0px_rgba(0,230,118,1)]",
    numColor: "text-[#00E676]", titleColor: "text-white",
    monthBg: "bg-[#00E676] text-black", textColor: "text-[#00E676]",
  },
  {
    num: "05", title: "Beyond the Book", month: "Ongoing",
    desc: "Your book is a weapon. We teach you how to wield it to dominate your industry long-term.",
    bg: "bg-white", border: "border-black",
    shadow: "shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]",
    hoverShadow: "hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]",
    numColor: "", titleColor: "", monthBg: "bg-black text-white", span: "md:col-span-2",
  },
];

const stats = [
  { icon: Calendar, label: "Duration",    value: "20 Weeks", sub: "5 Months" },
  { icon: Users,    label: "Cohort Size", value: "10–12",    sub: "Authors Max" },
  { icon: Video,    label: "Touchpoints", value: "Weekly",   sub: "Live Masterclass" },
  { icon: Phone,    label: "Support",     value: "Monthly",  sub: "1:1 Strategy Call" },
  { icon: Library,  label: "Resources",   value: "Portal",   sub: "Templates & Guides" },
];

const tickerItems = [
  "20 Weeks", "10–12 Authors Max", "Weekly Live Masterclass",
  "1:1 Monthly Strategy Call", "The Author's Portal",
  "Guaranteed Publishing", "Marketing Blueprint", "World-Class Execution",
];

const SPOTS_TOTAL = 12;
const SPOTS_TAKEN = 8;
const DEADLINE = new Date(Date.now() + 1000 * 60 * 60 * 24 * 18 + 1000 * 60 * 60 * 14);

const dimensions = [
  {
    label: "Authority",
    before: {
      heading: "You're the best-kept secret in your industry",
      points: [
        "You explain your expertise on every call",
        "Prospects compare you on price",
        "You're one of hundreds of coaches",
        "No third-party validation",
      ],
    },
    after: {
      heading: "Your book does the talking before you walk in",
      points: [
        "Clients arrive pre-sold on your methodology",
        "You compete on value, not price",
        "You're in a category of one",
        "A published book as your credential",
      ],
    },
  },
  {
    label: "Income",
    before: {
      heading: "Revenue tied to hours you can sell",
      points: [
        "Income ceiling = your available hours",
        "Constant client acquisition grind",
        "No passive revenue streams",
        "Feast-or-famine cycles",
      ],
    },
    after: {
      heading: "Your book works while you sleep",
      points: [
        "Royalties + speaking + premium clients",
        "Inbound inquiries from book readers",
        "Licensing, courses, keynotes",
        "Predictable, compounding revenue",
      ],
    },
  },
  {
    label: "Speaking",
    before: {
      heading: "You pitch conference organizers cold",
      points: [
        "Low fees or free \"for exposure\"",
        "Generic speaker — hard to book",
        "Hours of application writing",
        "Competing with thousands of pitches",
      ],
    },
    after: {
      heading: "Organizers call you with a fee in mind",
      points: [
        "Published authors command $5k–$25k fees",
        "Instantly differentiated on your topic",
        "Book = automatic speaking credential",
        "Keynote inquiries come to you",
      ],
    },
  },
  {
    label: "Legacy",
    before: {
      heading: "Your knowledge lives only in people's memories",
      points: [
        "Wisdom lost when you step back",
        "No scalable way to share your framework",
        "Limited reach beyond your network",
        "Nothing permanent to show for decades of work",
      ],
    },
    after: {
      heading: "Your thinking outlives your active career",
      points: [
        "Framework documented and owned permanently",
        "Reach thousands of readers simultaneously",
        "Global distribution through all major channels",
        "A tangible legacy that compounds",
      ],
    },
  },
];

const portfolioItems = [
  {
    id: "manuscript", tag: "Deliverable 01", title: "Finished Manuscript",
    subtitle: "70,000–90,000 Words", icon: FileText,
    color: "bg-white", accentHex: "#0066FF",
    stats: [
      { label: "Avg. Word Count", value: "84,000" },
      { label: "Chapters", value: "12–18" },
      { label: "Completion Rate", value: "100%" },
    ],
    preview: {
      label: "Chapter Structure",
      lines: [
        "01  The Problem Nobody Names",
        "02  Why Expertise Alone Isn't Enough",
        "03  The Framework That Changes Everything",
        "04  Case Study: From Invisible to Inevitable",
        "—   [8 more chapters]",
      ],
    },
    description: "A professionally edited, publication-ready manuscript. Not a rough draft. Not \"good enough.\" A finished book that earns placement in major distribution channels.",
  },
  {
    id: "book", tag: "Deliverable 02", title: "Published Book",
    subtitle: "Print + Digital", icon: BookOpen,
    color: "bg-[#00E676]", accentHex: "#000000",
    stats: [
      { label: "Formats", value: "3" },
      { label: "Distribution", value: "Global" },
      { label: "ISBN Registered", value: "Yes" },
    ],
    preview: {
      label: "Format Output",
      lines: [
        "Hardcover — Premium print production",
        "Paperback — Widely distributed",
        "eBook — Kindle, Apple Books, Kobo",
        "Audiobook — Production optional",
        "ISBN + Library of Congress registered",
      ],
    },
    description: "A real, published book with full distribution across Amazon, Barnes & Noble, and 40,000+ independent retailers worldwide. Not a PDF. A book people can hold.",
  },
  {
    id: "marketing", tag: "Deliverable 03", title: "Marketing Blueprint",
    subtitle: "Launch Strategy", icon: Megaphone,
    color: "bg-black", accentHex: "#00E676",
    stats: [
      { label: "Platform Plans", value: "5" },
      { label: "Media Targets", value: "30+" },
      { label: "Launch Window", value: "90 Days" },
    ],
    preview: {
      label: "Blueprint Contents",
      lines: [
        "Pre-launch audience warm-up sequence",
        "Podcast pitch list (matched to topic)",
        "PR strategy + media contact list",
        "Social content calendar: 90 days",
        "Amazon launch rank strategy",
      ],
    },
    description: "A bespoke launch playbook built around your book, your audience, and your business goals. You won't have to guess how to promote it — the strategy is ready before launch day.",
  },
  {
    id: "authority", tag: "Deliverable 04", title: "Lasting Authority",
    subtitle: "Market Position", icon: Globe,
    color: "bg-[#0066FF]", accentHex: "#00E676",
    stats: [
      { label: "Speaking Avg Lift", value: "3–5×" },
      { label: "Fee Increase", value: "$5k–$25k" },
      { label: "Inbound Inquiries", value: "Ongoing" },
    ],
    preview: {
      label: "What Opens Up",
      lines: [
        "Conference keynote invitations",
        "Podcast guest bookings (inbound)",
        "Media interview requests",
        "Premium consulting inquiries",
        "Corporate licensing opportunities",
      ],
    },
    description: "The compound effect of a published book on your consulting, coaching, and speaking pipeline. Numbers from our last 3 cohorts — not projections, reported outcomes.",
  },
];

const quizSteps = [
  {
    id: "expertise",
    question: "What's your primary area of expertise?",
    options: [
      { label: "Executive Leadership", score: 4 },
      { label: "Business Strategy", score: 4 },
      { label: "Health & Wellness Coaching", score: 3 },
      { label: "Sales & Marketing", score: 3 },
      { label: "Personal Development", score: 3 },
      { label: "Other Expert Field", score: 2 },
    ],
  },
  {
    id: "stage",
    question: "Where are you in the writing process?",
    options: [
      { label: "I have a complete outline", score: 5 },
      { label: "I have rough notes and ideas", score: 4 },
      { label: "I know my topic but nothing written", score: 3 },
      { label: "I have a vague concept", score: 2 },
      { label: "I don't know where to start", score: 1 },
    ],
  },
  {
    id: "obstacle",
    question: "What's your biggest obstacle right now?",
    options: [
      { label: "No time to write consistently", score: 4 },
      { label: "Don't know how to structure it", score: 5 },
      { label: "Fear it won't be good enough", score: 4 },
      { label: "Don't know how publishing works", score: 5 },
      { label: "Not sure it's worth my time", score: 3 },
    ],
  },
];

const quizResults = [
  {
    range: [0, 9],  label: "Emerging Expert",
    verdict: "You're in the right place at the right time.",
    detail: "We've guided first-draft beginners to publishing contracts. The Forge was built for your exact starting point.",
  },
  {
    range: [10, 13], label: "Ready to Build",
    verdict: "You have the raw material. You need the architecture.",
    detail: "Your expertise is proven. What you need is a structured system to transform it into a book that commands attention.",
  },
  {
    range: [14, 100], label: "Prime for Launch",
    verdict: "You're not waiting for permission. Neither are we.",
    detail: "You know your topic, you have momentum — The Forge will take that energy and turn it into a published, market-ready book.",
  },
];

/* ─────────────────────────── COMPONENTS ─────────────────────────── */

function useCountdown(target: Date) {
  const [t, setT] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  useEffect(() => {
    function tick() {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) { setT({ days: 0, hours: 0, mins: 0, secs: 0 }); return; }
      setT({
        days:  Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins:  Math.floor((diff % 3600000) / 60000),
        secs:  Math.floor((diff % 60000) / 1000),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div className="w-full bg-black text-white py-3 overflow-hidden border-b-4 border-black">
      <div className="animate-marquee flex items-center gap-12">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 shrink-0">
            <span className="font-['Bebas_Neue'] text-2xl sm:text-3xl uppercase tracking-widest whitespace-nowrap">
              {item}
            </span>
            <Star className="text-[#00E676] w-4 h-4 shrink-0" fill="currentColor" />
          </span>
        ))}
      </div>
    </div>
  );
}

function TimerBlock({ value, label, accent }: { value: number; label: string; accent?: boolean }) {
  return (
    <div className={`flex flex-col items-center border-8 border-black p-3 sm:p-6 ${accent ? "bg-[#00E676]" : "bg-white"}`}>
      <div className="font-['Bebas_Neue'] text-[12vw] sm:text-7xl lg:text-8xl leading-none tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <div className="font-bold uppercase tracking-widest text-xs sm:text-sm mt-1">{label}</div>
    </div>
  );
}

/* ─────────────────────────── SECTIONS ─────────────────────────── */

function SectionCountdown() {
  const { days, hours, mins, secs } = useCountdown(DEADLINE);
  const spotsLeft = SPOTS_TOTAL - SPOTS_TAKEN;
  const fillPct = (SPOTS_TAKEN / SPOTS_TOTAL) * 100;

  return (
    <section className="bg-black border-b-8 border-[#00E676]" data-testid="section-countdown">
      {/* Urgency banner */}
      <div className="bg-[#00E676] text-black border-b-4 border-black p-3 flex items-center justify-center gap-3">
        <AlertTriangle size={16} strokeWidth={3} />
        <span className="font-bold uppercase tracking-widest text-xs sm:text-sm">
          Applications close when the cohort is full — {spotsLeft} of {SPOTS_TOTAL} spots remaining
        </span>
        <AlertTriangle size={16} strokeWidth={3} />
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Countdown */}
        <div className="p-6 sm:p-12 border-b-8 lg:border-b-0 lg:border-r-8 border-[#00E676] flex flex-col justify-center">
          <div className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-[#00E676]/60 uppercase mb-6 leading-none">
            Next Cohort<br />Applications Close In
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            <TimerBlock value={days}  label="Days"  accent />
            <TimerBlock value={hours} label="Hours" />
            <TimerBlock value={mins}  label="Mins"  />
            <TimerBlock value={secs}  label="Secs"  accent />
          </div>
        </div>

        {/* Capacity */}
        <div className="p-6 sm:p-12 flex flex-col justify-center">
          <div className="flex justify-between items-end mb-4">
            <div className="flex items-center gap-3">
              <Users size={20} className="text-[#00E676]" />
              <span className="font-bold uppercase tracking-widest text-sm text-[#00E676]">Cohort Capacity</span>
            </div>
            <div className="font-['Bebas_Neue'] text-5xl text-[#00E676]">{SPOTS_TAKEN}/{SPOTS_TOTAL}</div>
          </div>
          <div className="h-10 border-4 border-[#00E676] relative overflow-hidden mb-3">
            <div className="h-full bg-[#00E676] transition-all duration-1000" style={{ width: `${fillPct}%` }} />
            <div className="absolute inset-0 flex items-center justify-center font-bold uppercase tracking-widest text-xs mix-blend-difference text-white">
              {spotsLeft} spots remain
            </div>
          </div>
          <div className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${SPOTS_TOTAL}, 1fr)` }}>
            {Array.from({ length: SPOTS_TOTAL }).map((_, i) => (
              <div key={i} className={`h-4 border-2 border-[#00E676] ${i < SPOTS_TAKEN ? "bg-[#00E676]" : ""}`} />
            ))}
          </div>
          <p className="text-white/50 text-sm font-bold mt-6 uppercase tracking-widest">
            We do not waitlist. When the cohort fills, applications close.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionComparison() {
  const [activeDim, setActiveDim] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const dim = dimensions[activeDim];

  function pickDim(i: number) {
    setActiveDim(i);
    setRevealed(false);
  }

  return (
    <section className="bg-white border-b-8 border-black" data-testid="section-comparison">
      {/* Header */}
      <div className="bg-black text-white p-6 sm:p-10 border-b-8 border-black text-center">
        <div className="font-['Bebas_Neue'] text-[8vw] sm:text-6xl leading-none uppercase mb-2">
          The Decision Is Simple.
        </div>
        <p className="font-bold text-white/60 text-lg max-w-xl mx-auto">
          Pick a dimension. See exactly what changes when you publish your book through The Forge.
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-4 border-b-8 border-black">
        {dimensions.map((d, i) => (
          <button
            key={i}
            onClick={() => pickDim(i)}
            className={`py-5 sm:py-6 font-['Bebas_Neue'] text-xl sm:text-3xl uppercase tracking-wide border-r-4 last:border-r-0 border-black transition-all cursor-pointer ${
              activeDim === i ? "bg-[#00E676] text-black" : "bg-white text-black hover:bg-black/5"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Panes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[480px]">
        {/* Before */}
        <div className="border-b-8 sm:border-b-0 sm:border-r-8 border-black p-8 lg:p-12 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 border-4 border-black bg-black/10 flex items-center justify-center">
              <X size={20} strokeWidth={3} />
            </div>
            <span className="font-bold uppercase tracking-widest text-sm text-black/50">Without a Book</span>
          </div>
          <div className="font-['Bebas_Neue'] text-3xl sm:text-4xl leading-tight uppercase mb-6 border-l-8 border-black pl-4">
            {dim.before.heading}
          </div>
          <ul className="space-y-4 flex-1">
            {dim.before.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <X size={16} strokeWidth={3} className="text-black/30 mt-1 shrink-0" />
                <span className="text-base font-medium text-black/60">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className={`p-8 lg:p-12 flex flex-col transition-colors duration-500 ${revealed ? "bg-[#00E676]" : "bg-black/5"}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-10 h-10 border-4 border-black flex items-center justify-center transition-colors ${revealed ? "bg-black text-[#00E676]" : "bg-black/10"}`}>
              <Check size={20} strokeWidth={3} />
            </div>
            <span className="font-bold uppercase tracking-widest text-sm">
              {revealed ? "The Author's Forge Result" : "With The Author's Forge"}
            </span>
          </div>

          {!revealed ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              <div className="font-['Bebas_Neue'] text-5xl text-center uppercase text-black/20">Reveal the After</div>
              <button
                onClick={() => setRevealed(true)}
                className="flex items-center gap-3 bg-black text-[#00E676] px-8 py-5 font-bold uppercase tracking-widest border-4 border-black shadow-[8px_8px_0_0_rgba(0,230,118,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer"
              >
                Reveal <Zap size={20} />
              </button>
            </div>
          ) : (
            <>
              <div className="font-['Bebas_Neue'] text-3xl sm:text-4xl leading-tight uppercase mb-6 border-l-8 border-black pl-4">
                {dim.after.heading}
              </div>
              <ul className="space-y-4 flex-1">
                {dim.after.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} strokeWidth={3} className="text-black mt-1 shrink-0" />
                    <span className="text-base font-bold">{p}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      {/* Nav row */}
      <div className="border-t-8 border-black p-6 flex items-center justify-between bg-white">
        {activeDim < dimensions.length - 1 ? (
          <button
            onClick={() => pickDim(activeDim + 1)}
            className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm border-4 border-black px-5 py-3 hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            Next: {dimensions[activeDim + 1].label} <ArrowRight size={16} />
          </button>
        ) : (
          <span className="font-['Bebas_Neue'] text-2xl uppercase text-black/40">All four dimensions reviewed.</span>
        )}
        <div className="flex gap-2">
          {dimensions.map((_, i) => (
            <button
              key={i}
              onClick={() => pickDim(i)}
              className={`w-3 h-3 border-2 border-black cursor-pointer transition-colors ${activeDim === i ? "bg-black" : "bg-white hover:bg-black/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionPortfolio() {
  const [active, setActive] = useState<string | null>(null);
  const item = portfolioItems.find(a => a.id === active);
  const isDark = item?.color === "bg-black" || item?.color === "bg-[#0066FF]";

  return (
    <section className="bg-black border-b-8 border-[#00E676]" data-testid="section-portfolio">
      {/* Header */}
      <div className="p-6 sm:p-10 border-b-8 border-[#00E676]">
        <div className="font-['Bebas_Neue'] text-[10vw] sm:text-7xl leading-none uppercase mb-4 drop-shadow-[4px_4px_0_rgba(0,230,118,1)] text-white">
          Here's What<br /><span className="text-[#00E676]">Gets Built.</span>
        </div>
        <p className="text-xl font-bold text-white/60 max-w-xl">
          We don't describe deliverables. We show you exactly what every author walks away with after 5 months.
        </p>
      </div>

      {/* Cards row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border-b-8 border-[#00E676]">
        {portfolioItems.map((a, i) => (
          <button
            key={a.id}
            onClick={() => setActive(active === a.id ? null : a.id)}
            className={`${a.color} border-r-8 last:border-r-0 border-[#00E676] p-5 sm:p-6 flex flex-col gap-3 text-left cursor-pointer group relative overflow-hidden transition-all`}
          >
            <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">{a.tag}</div>
            <a.icon size={28} strokeWidth={2} style={{ color: a.accentHex }} className="group-hover:scale-110 transition-transform" />
            <div className={`font-['Bebas_Neue'] text-2xl sm:text-3xl uppercase leading-tight ${a.color === "bg-black" || a.color === "bg-[#0066FF]" ? "text-white" : "text-black"}`}>
              {a.title}
            </div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-50">{a.subtitle}</div>
            <ArrowUpRight
              size={18}
              style={{ color: a.accentHex }}
              className={`absolute top-4 right-4 transition-transform ${active === a.id ? "rotate-90" : "group-hover:rotate-45"}`}
            />
          </button>
        ))}
      </div>

      {/* Expanded detail */}
      {item && (
        <div className={`border-b-8 border-[#00E676] ${item.color}`}>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {/* Stats */}
            <div className="border-b-8 sm:border-b-0 sm:border-r-8 border-[#00E676] p-8 flex flex-col justify-between gap-6">
              {item.stats.map((s, i) => (
                <div key={i}>
                  <div className="font-['Bebas_Neue'] text-5xl leading-none" style={{ color: item.accentHex }}>{s.value}</div>
                  <div className={`font-bold uppercase tracking-widest text-sm ${isDark ? "text-white/50" : "text-black/50"}`}>{s.label}</div>
                </div>
              ))}
            </div>
            {/* Preview */}
            <div className="border-b-8 sm:border-b-0 sm:border-r-8 border-[#00E676] p-8">
              <div className={`font-bold uppercase tracking-widest text-xs mb-4 ${isDark ? "text-white/40" : "text-black/40"}`}>
                {item.preview.label}
              </div>
              <ul className="space-y-3">
                {item.preview.lines.map((line, i) => (
                  <li key={i} className={`font-mono text-sm border-l-4 pl-3 ${i === item.preview.lines.length - 1 ? "opacity-30" : ""}`}
                      style={{ borderColor: item.accentHex }}>
                    <span className={isDark ? "text-white" : "text-black"}>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Description */}
            <div className="p-8 flex flex-col justify-between gap-6">
              <p className={`text-lg font-medium leading-snug ${isDark ? "text-white/70" : "text-black/70"}`}>
                {item.description}
              </p>
              <button
                className="flex items-center gap-3 px-6 py-4 font-bold uppercase tracking-widest border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all cursor-pointer"
                style={{ backgroundColor: item.accentHex, color: isDark ? "white" : "black" }}
              >
                Apply to Get This <Zap size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {!item && (
        <div className="p-8 text-center text-[#00E676]/30 border-b-8 border-[#00E676]">
          <div className="font-['Bebas_Neue'] text-3xl uppercase">Select a Deliverable to Inspect It</div>
        </div>
      )}
    </section>
  );
}

function SectionDiagnostic() {
  const [step, setStep] = useState<"idle" | number | "result">("idle");
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const result = quizResults.find(r => totalScore >= r.range[0] && totalScore <= r.range[1]) ?? quizResults[2];

  function startQuiz() { setStep(0); setAnswers([]); setSelected(null); }

  function next() {
    if (selected === null) return;
    const score = quizSteps[step as number].options[selected].score;
    const next = answers.concat(score);
    setAnswers(next);
    setSelected(null);
    setStep(typeof step === "number" && step < quizSteps.length - 1 ? step + 1 : "result");
  }

  function back() {
    if (step === 0) { setStep("idle"); setAnswers([]); }
    else if (typeof step === "number") { setStep(step - 1); setAnswers(a => a.slice(0, -1)); }
    setSelected(null);
  }

  return (
    <section className="bg-white border-b-8 border-black" data-testid="section-diagnostic">
      {step === "idle" && (
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#00E676] border-b-8 lg:border-b-0 lg:border-r-8 border-black p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="inline-block bg-black text-white font-bold uppercase tracking-widest px-4 py-2 self-start mb-8 text-sm">
              Author Readiness Check
            </div>
            <div className="font-['Bebas_Neue'] text-[12vw] lg:text-[7vw] leading-[0.85] uppercase mb-8">
              Are You<br />
              <span className="[-webkit-text-stroke:3px_black] text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">Ready</span>
              <br />to Write?
            </div>
            <p className="font-bold text-xl leading-tight max-w-lg">
              3 questions. 60 seconds. Find out exactly where you stand — and whether The Forge is the right move for you right now.
            </p>
          </div>
          <div className="bg-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="space-y-6 mb-10">
              {[
                { n: "01", label: "Identify your expertise area", sub: "What you know deeply" },
                { n: "02", label: "Know your current progress", sub: "Where you are right now" },
                { n: "03", label: "Pinpoint your key obstacle", sub: "What's blocking you today" },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-black text-white font-['Bebas_Neue'] text-2xl flex items-center justify-center border-4 border-black shrink-0">
                    {step.n}
                  </div>
                  <div>
                    <div className="font-bold uppercase tracking-wider">{step.label}</div>
                    <div className="text-sm text-black/50 mt-1">{step.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={startQuiz}
              className="flex items-center justify-between bg-black text-[#00E676] p-6 font-bold uppercase tracking-widest text-lg border-4 border-black shadow-[8px_8px_0_0_rgba(0,230,118,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer"
            >
              Start the Assessment <ArrowRight size={24} />
            </button>
          </div>
        </div>
      )}

      {typeof step === "number" && (() => {
        const current = quizSteps[step];
        const progress = (step / quizSteps.length) * 100;
        return (
          <div className="max-w-3xl mx-auto p-8 sm:p-12">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold uppercase tracking-widest text-sm text-black/50">
                Question {step + 1} of {quizSteps.length}
              </span>
              <span className="font-['Bebas_Neue'] text-2xl">{Math.round(progress + 33)}%</span>
            </div>
            <div className="h-3 bg-black/10 border-2 border-black mb-10 relative overflow-hidden">
              <div className="h-full bg-[#00E676] border-r-2 border-black transition-all duration-500" style={{ width: `${progress + 33}%` }} />
            </div>
            <div className="font-['Bebas_Neue'] text-4xl sm:text-5xl uppercase leading-tight mb-8">{current.question}</div>
            <div className="space-y-3 mb-10">
              {current.options.map((opt, i) => (
                <button
                  key={i} onClick={() => setSelected(i)}
                  className={`w-full text-left p-5 border-4 border-black font-bold text-lg uppercase tracking-wide transition-all cursor-pointer ${
                    selected === i
                      ? "bg-[#00E676] shadow-none translate-x-1 translate-y-1"
                      : "bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={back} className="flex items-center gap-2 px-6 py-4 border-4 border-black font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors cursor-pointer">
                <ChevronLeft size={18} /> Back
              </button>
              <button
                onClick={next} disabled={selected === null}
                className={`flex-1 flex items-center justify-center gap-3 p-5 font-bold uppercase tracking-widest text-lg border-4 border-black transition-all ${
                  selected !== null
                    ? "bg-black text-[#00E676] shadow-[8px_8px_0_0_rgba(0,230,118,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 cursor-pointer"
                    : "bg-black/20 text-black/30 cursor-not-allowed"
                }`}
              >
                {step < quizSteps.length - 1 ? "Next Question" : "Get My Score"} <ArrowRight size={20} />
              </button>
            </div>
          </div>
        );
      })()}

      {step === "result" && (
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-black text-[#00E676] border-b-8 lg:border-b-0 lg:border-r-8 border-black p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <CheckCircle size={56} strokeWidth={2} className="mb-6" />
            <div className="text-sm font-bold uppercase tracking-[0.2em] mb-2 opacity-50">Author Readiness Score</div>
            <div className="font-['Bebas_Neue'] text-[18vw] lg:text-[10vw] leading-none mb-4">{totalScore}</div>
            <div className="font-['Bebas_Neue'] text-4xl sm:text-5xl uppercase mb-6">{result.label}</div>
            <div className="font-bold text-2xl mb-4 text-[#00E676]/80">{result.verdict}</div>
            <p className="text-lg text-[#00E676]/60">{result.detail}</p>
          </div>
          <div className="bg-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="font-['Bebas_Neue'] text-4xl sm:text-5xl uppercase mb-8 leading-tight">
              The Forge Was Built<br />for Experts Like You.
            </div>
            <p className="text-xl font-bold text-black/70 mb-8 leading-snug">
              Whatever your starting point, our 5-month system takes you from where you are today to a published, market-ready book.
            </p>
            <button
              data-testid="button-apply-diagnostic"
              className="flex items-center justify-between bg-[#0066FF] text-white p-6 font-bold uppercase tracking-widest text-lg border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer mb-4"
            >
              Apply for the Next Cohort <Zap size={22} className="text-[#00E676]" />
            </button>
            <button onClick={startQuiz} className="text-sm font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors cursor-pointer text-center mt-2">
              Retake the Assessment
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function App() {
  return (
    <div
      className="min-h-screen bg-white text-black selection:bg-[#00E676] selection:text-black font-['Space_Grotesk'] overflow-x-hidden border-[16px] border-black"
      data-testid="page-root"
    >
      {/* ── NAV ── */}
      <nav className="flex justify-between items-center p-4 sm:p-8 border-b-8 border-black bg-white sticky top-0 z-50" data-testid="nav">
        <div className="font-['Bebas_Neue'] text-3xl sm:text-5xl tracking-tight leading-none uppercase" data-testid="nav-logo">
          The Author's Forge
        </div>
        <button
          data-testid="button-apply-nav"
          className="hidden sm:flex items-center gap-2 bg-[#0066FF] text-white px-6 py-3 font-bold uppercase tracking-wider hover:bg-black transition-colors border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] cursor-pointer"
        >
          Apply Now <Zap size={18} />
        </button>
      </nav>

      {/* ── HERO ── */}
      <header className="relative w-full border-b-8 border-black bg-[#00E676] overflow-hidden" data-testid="hero">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute w-[200%] h-[20px] bg-black rotate-45 top-1/4 -left-1/4" />
          <div className="absolute w-[200%] h-[20px] bg-black rotate-45 top-2/4 -left-1/4" />
          <div className="absolute w-[200%] h-[20px] bg-black rotate-45 top-3/4 -left-1/4" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 max-w-[1600px] mx-auto relative z-10">
          <div className="lg:col-span-8 p-6 sm:p-12 lg:p-20 border-b-8 lg:border-b-0 lg:border-r-8 border-black flex flex-col justify-center">
            <div className="inline-block bg-black text-white font-bold uppercase tracking-widest px-4 py-2 mb-8 self-start text-sm border-2 border-black rotate-[-2deg]">
              Premium Publishing Incubator
            </div>
            <h1
              data-testid="text-hero-headline"
              className="font-['Bebas_Neue'] text-[15vw] lg:text-[10vw] leading-[0.85] tracking-[-0.02em] uppercase text-black mb-6 drop-shadow-[4px_4px_0_rgba(0,102,255,1)]"
            >
              From Idea to<br />
              <span className="text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">
                Published Book
              </span>
              <br />
              in 5 Months.
            </h1>
            <p className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold max-w-2xl leading-tight mt-4 bg-white p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,102,255,1)]">
              A premium publishing incubator that builds, publishes, and positions your book. For coaches who refuse to be quiet.
            </p>
          </div>
          <div className="lg:col-span-4 bg-white flex flex-col">
            <div className="flex-1 p-8 border-b-8 border-black flex flex-col justify-center items-center bg-[#0066FF] text-white relative overflow-hidden group hover:bg-black transition-colors">
              <Zap className="absolute opacity-10 w-[150%] h-[150%] -top-1/4 -right-1/4 group-hover:scale-110 transition-transform duration-700" />
              <div className="font-['Bebas_Neue'] text-9xl leading-none" data-testid="text-months-number">5</div>
              <div className="font-bold text-2xl uppercase tracking-widest">Months</div>
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center items-center bg-black text-[#00E676] hover:bg-[#00E676] hover:text-black transition-colors cursor-pointer group">
              <div className="font-bold text-3xl uppercase text-center mb-4 group-hover:scale-110 transition-transform">
                Start Your Engine
              </div>
              <ArrowRight size={48} className="group-hover:translate-x-4 transition-transform" />
            </div>
          </div>
        </div>
      </header>

      {/* ── TICKER ── */}
      <Ticker />

      {/* ── COUNTDOWN (Why Now) ── */}
      <SectionCountdown />

      {/* ── JOURNEY (How It Works) ── */}
      <section className="bg-white py-20 px-4 sm:px-8 border-b-8 border-black" data-testid="section-journey">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="font-['Bebas_Neue'] text-[12vw] sm:text-[8vw] leading-none mb-16 text-center uppercase">
            The 5-Month <span className="text-[#0066FF]">Journey</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phases.map((phase, i) => (
              <div
                key={i}
                data-testid={`card-phase-${i + 1}`}
                className={`${phase.bg} ${phase.span ?? ""} border-8 ${phase.border} p-8 ${phase.shadow} ${phase.hoverShadow} hover:-translate-y-2 transition-all flex flex-col`}
              >
                <div className={`font-['Bebas_Neue'] text-7xl mb-4 border-b-4 border-black pb-4 ${phase.numColor}`}>
                  {phase.num}
                </div>
                <h3 className={`font-bold text-3xl uppercase mb-2 ${phase.titleColor}`}>{phase.title}</h3>
                <p className={`font-bold inline-block px-3 py-1 mb-4 self-start text-sm ${phase.monthBg}`}>
                  {phase.month}
                </p>
                <p className={`text-xl font-medium leading-snug flex-1 ${phase.textColor ?? ""}`}>{phase.desc}</p>
                {phase.icon ?? null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON (Why It Matters) ── */}
      <SectionComparison />

      {/* ── PORTFOLIO (What You Get) ── */}
      <SectionPortfolio />

      {/* ── PROGRAM AT A GLANCE ── */}
      <section className="bg-black py-20 px-4 sm:px-8 border-b-8 border-[#00E676]" data-testid="section-program">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="font-['Bebas_Neue'] text-[10vw] sm:text-[7vw] leading-none mb-16 text-[#00E676] uppercase">
            Program at a Glance
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0">
            {stats.map((stat, i) => (
              <div
                key={i}
                data-testid={`card-stat-${i + 1}`}
                className="border-4 border-[#00E676] p-6 group hover:bg-[#00E676] hover:text-black transition-colors"
              >
                <stat.icon className="w-8 h-8 text-[#00E676] group-hover:text-black mb-4 transition-colors" />
                <div className="text-xs font-bold uppercase tracking-widest text-[#00E676]/60 group-hover:text-black/60 mb-2 transition-colors">
                  {stat.label}
                </div>
                <div className="font-['Bebas_Neue'] text-4xl text-white group-hover:text-black mb-1 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-[#00E676]/80 group-hover:text-black/70 uppercase tracking-wide transition-colors">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIAGNOSTIC (Is It Right for You?) ── */}
      <SectionDiagnostic />

      {/* ── CTA ── */}
      <section className="bg-white py-32 px-4 sm:px-8 flex flex-col items-center justify-center text-center" data-testid="section-cta">
        <h2 className="font-['Bebas_Neue'] text-[8vw] lg:text-[6vw] leading-none mb-8 max-w-[1200px] uppercase" data-testid="text-cta-headline">
          You don't just write a book.<br />
          <span className="bg-black text-[#00E676] px-4 py-2 mt-4 inline-block transform -rotate-2 border-4 border-[#00E676]">
            You become the kind of author
          </span>
          <br />
          the world pays attention to.
        </h2>
        <p className="text-xl font-bold max-w-xl text-black/70 mb-4 border-l-8 border-[#0066FF] pl-4 text-left">
          Join a curated group of high-achieving experts. Spots are strictly limited to 10–12 authors per cohort.
        </p>
        <button
          data-testid="button-apply-cta"
          className="mt-8 group relative inline-flex items-center justify-center px-12 py-6 font-bold text-white uppercase tracking-widest text-xl overflow-hidden bg-[#0066FF] border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,230,118,1)] hover:shadow-none hover:translate-x-[12px] hover:translate-y-[12px] transition-all cursor-pointer"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-full group-hover:h-56" />
          <span className="relative flex items-center gap-4">
            Apply for the Next Cohort <Zap size={24} className="text-[#00E676]" />
          </span>
        </button>
        <div className="mt-6 text-sm font-bold uppercase tracking-widest text-black/50">
          Applications reviewed within 48 hours
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black text-white p-8 border-t-8 border-[#00E676] flex flex-col sm:flex-row justify-between items-center gap-4" data-testid="footer">
        <div className="font-['Bebas_Neue'] text-3xl sm:text-4xl uppercase tracking-widest text-[#00E676]" data-testid="footer-logo">
          The Author's Forge
        </div>
        <div className="font-bold uppercase tracking-wider text-sm text-white/60">
          &copy; {new Date().getFullYear()} No Apologies.
        </div>
      </footer>
    </div>
  );
}
