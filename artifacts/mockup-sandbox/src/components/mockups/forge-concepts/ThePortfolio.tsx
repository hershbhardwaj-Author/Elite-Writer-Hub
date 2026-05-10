import { useState } from "react";
import { Zap, BookOpen, FileText, Megaphone, Globe, ArrowUpRight } from "lucide-react";

const artifacts = [
  {
    id: "manuscript",
    tag: "Deliverable 01",
    title: "Finished Manuscript",
    subtitle: "70,000–90,000 Words",
    icon: FileText,
    color: "bg-white",
    borderColor: "border-black",
    accent: "#0066FF",
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
    id: "cover",
    tag: "Deliverable 02",
    title: "Published Book",
    subtitle: "Print + Digital",
    icon: BookOpen,
    color: "bg-[#00E676]",
    borderColor: "border-black",
    accent: "#000000",
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
    id: "marketing",
    tag: "Deliverable 03",
    title: "Marketing Blueprint",
    subtitle: "Launch Strategy",
    icon: Megaphone,
    color: "bg-black",
    borderColor: "border-[#00E676]",
    accent: "#00E676",
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
    id: "authority",
    tag: "Deliverable 04",
    title: "Lasting Authority",
    subtitle: "Market Position",
    icon: Globe,
    color: "bg-[#0066FF]",
    borderColor: "border-black",
    accent: "#00E676",
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

export default function ThePortfolio() {
  const [active, setActive] = useState<string | null>(null);

  const activeArtifact = artifacts.find(a => a.id === active);

  return (
    <div className="min-h-screen bg-white text-black font-['Space_Grotesk'] flex flex-col border-[10px] border-black">
      {/* NAV */}
      <nav className="border-b-8 border-black p-4 sm:p-6 flex justify-between items-center">
        <div className="font-['Bebas_Neue'] text-2xl sm:text-4xl uppercase tracking-tight">The Author's Forge</div>
        <button className="flex items-center gap-2 bg-[#0066FF] text-white px-4 sm:px-6 py-2 sm:py-3 font-bold uppercase tracking-wider border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer text-sm sm:text-base">
          Apply Now <Zap size={16} />
        </button>
      </nav>

      {/* HERO — PROOF FIRST */}
      <div className="bg-black text-white border-b-8 border-black p-6 sm:p-10">
        <div className="font-['Bebas_Neue'] text-[10vw] sm:text-7xl leading-none uppercase mb-4 drop-shadow-[4px_4px_0_rgba(0,230,118,1)]">
          Here's What<br />
          <span className="text-[#00E676]">Gets Built.</span>
        </div>
        <p className="text-xl font-bold text-white/70 max-w-xl">
          We don't describe deliverables. We show you exactly what every author walks away with after 5 months in The Forge.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border-b-8 border-black">
        {artifacts.map((a, i) => (
          <button
            key={a.id}
            onClick={() => setActive(active === a.id ? null : a.id)}
            className={`${a.color} ${a.borderColor} border-r-8 last:border-r-0 border-b-8 sm:border-b-0 p-5 sm:p-6 flex flex-col gap-3 text-left cursor-pointer transition-all group relative overflow-hidden ${
              active === a.id ? "border-b-0" : ""
            }`}
          >
            <div className={`text-xs font-bold uppercase tracking-[0.2em] ${a.color === "bg-black" ? "text-[#00E676]/60" : "text-black/50"}`}>
              {a.tag}
            </div>
            <a.icon
              size={32}
              strokeWidth={2}
              style={{ color: a.accent }}
              className="group-hover:scale-110 transition-transform"
            />
            <div className={`font-['Bebas_Neue'] text-2xl sm:text-3xl uppercase leading-tight ${a.color === "bg-black" || a.color === "bg-[#0066FF]" ? "text-white" : "text-black"}`}>
              {a.title}
            </div>
            <div className={`text-xs font-bold uppercase tracking-widest ${a.color === "bg-black" || a.color === "bg-[#0066FF]" ? "text-white/50" : "text-black/50"}`}>
              {a.subtitle}
            </div>
            <ArrowUpRight
              size={20}
              style={{ color: a.accent }}
              className={`absolute top-4 right-4 transition-transform ${active === a.id ? "rotate-90" : "group-hover:rotate-45"}`}
            />
          </button>
        ))}
      </div>

      {/* EXPANDED DETAIL */}
      {activeArtifact && (
        <div className={`border-b-8 border-black ${activeArtifact.color}`}>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {/* STATS */}
            <div className={`border-b-8 sm:border-b-0 sm:border-r-8 border-black p-8 flex flex-col justify-between gap-6`}>
              {activeArtifact.stats.map((s, i) => (
                <div key={i}>
                  <div
                    className="font-['Bebas_Neue'] text-5xl leading-none"
                    style={{ color: activeArtifact.accent }}
                  >
                    {s.value}
                  </div>
                  <div className={`font-bold uppercase tracking-widest text-sm ${
                    activeArtifact.color === "bg-black" || activeArtifact.color === "bg-[#0066FF]"
                      ? "text-white/60"
                      : "text-black/60"
                  }`}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* PREVIEW */}
            <div className={`border-b-8 sm:border-b-0 sm:border-r-8 border-black p-8`}>
              <div className={`font-bold uppercase tracking-widest text-xs mb-4 ${
                activeArtifact.color === "bg-black" || activeArtifact.color === "bg-[#0066FF]"
                  ? "text-white/50"
                  : "text-black/50"
              }`}>
                {activeArtifact.preview.label}
              </div>
              <ul className="space-y-3">
                {activeArtifact.preview.lines.map((line, i) => (
                  <li
                    key={i}
                    className={`font-mono text-sm border-l-4 pl-3 transition-opacity ${i === activeArtifact.preview.lines.length - 1 ? "opacity-40" : ""}`}
                    style={{ borderColor: activeArtifact.accent }}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            {/* DESCRIPTION */}
            <div className="p-8 flex flex-col justify-between">
              <p className={`text-lg font-medium leading-snug ${
                activeArtifact.color === "bg-black" || activeArtifact.color === "bg-[#0066FF]"
                  ? "text-white/80"
                  : "text-black/70"
              }`}>
                {activeArtifact.description}
              </p>
              <button
                className="mt-6 flex items-center gap-3 px-6 py-4 font-bold uppercase tracking-widest border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all cursor-pointer"
                style={{ backgroundColor: activeArtifact.accent, color: activeArtifact.color === "bg-black" || activeArtifact.color === "bg-[#0066FF]" ? "white" : "black" }}
              >
                Apply to Get This <Zap size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DEFAULT PROMPT */}
      {!activeArtifact && (
        <div className="p-8 text-center text-black/40 border-b-8 border-black bg-black/5">
          <div className="font-['Bebas_Neue'] text-4xl uppercase">Select a Deliverable Above to Inspect It</div>
        </div>
      )}

      {/* FOOTER CTA */}
      <div className="mt-auto p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t-8 border-black bg-[#00E676]">
        <div>
          <div className="font-['Bebas_Neue'] text-4xl uppercase leading-tight">All of this. In 5 Months.</div>
          <div className="font-bold text-black/60 text-sm uppercase tracking-widest">10–12 authors per cohort</div>
        </div>
        <button className="flex items-center gap-3 bg-black text-[#00E676] px-10 py-5 font-bold uppercase tracking-widest text-lg border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer whitespace-nowrap">
          Apply for the Next Cohort <Zap size={22} />
        </button>
      </div>
    </div>
  );
}
