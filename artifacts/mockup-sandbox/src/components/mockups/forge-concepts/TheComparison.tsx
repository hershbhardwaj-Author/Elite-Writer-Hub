import { useState } from "react";
import { X, Check, ArrowRight, Zap } from "lucide-react";

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
      heading: "Your knowledge exists only in people's memories",
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

export default function TheComparison() {
  const [activeDim, setActiveDim] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const dim = dimensions[activeDim];

  return (
    <div className="min-h-screen bg-white text-black font-['Space_Grotesk'] flex flex-col border-[10px] border-black">
      {/* NAV */}
      <nav className="border-b-8 border-black p-4 sm:p-6 flex justify-between items-center">
        <div className="font-['Bebas_Neue'] text-2xl sm:text-4xl uppercase tracking-tight">The Author's Forge</div>
        <div className="text-xs font-bold uppercase tracking-widest bg-black text-white px-3 py-1">
          The Before / After
        </div>
      </nav>

      {/* INTRO */}
      <div className="bg-black text-white border-b-8 border-black p-6 sm:p-10 text-center">
        <div className="font-['Bebas_Neue'] text-[8vw] sm:text-6xl leading-none uppercase mb-2">
          The Decision Is Simple.
        </div>
        <p className="font-bold text-white/70 text-lg max-w-xl mx-auto">
          Pick a dimension. See exactly what changes when you publish your book through The Forge.
        </p>
      </div>

      {/* DIMENSION TABS */}
      <div className="grid grid-cols-4 border-b-8 border-black">
        {dimensions.map((d, i) => (
          <button
            key={i}
            onClick={() => { setActiveDim(i); setRevealed(false); }}
            className={`py-5 font-['Bebas_Neue'] text-2xl sm:text-3xl uppercase tracking-wide border-r-4 last:border-r-0 border-black transition-all cursor-pointer ${
              activeDim === i
                ? "bg-[#00E676] text-black"
                : "bg-white text-black hover:bg-black/5"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* COMPARISON PANES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 flex-1 min-h-0">
        {/* BEFORE */}
        <div className="border-b-8 sm:border-b-0 sm:border-r-8 border-black p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 border-4 border-black flex items-center justify-center bg-black/10">
              <X size={22} strokeWidth={3} />
            </div>
            <div className="font-bold uppercase tracking-widest text-sm text-black/60">Without a Book</div>
          </div>

          <div className="font-['Bebas_Neue'] text-3xl sm:text-4xl leading-tight uppercase mb-6 border-l-8 border-black pl-4">
            {dim.before.heading}
          </div>

          <ul className="space-y-4 flex-1">
            {dim.before.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <X size={18} strokeWidth={3} className="text-black/40 mt-1 shrink-0" />
                <span className="text-base font-medium text-black/70">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AFTER */}
        <div className={`p-8 flex flex-col transition-all duration-500 ${revealed ? "bg-[#00E676]" : "bg-black/5"}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-10 h-10 border-4 border-black flex items-center justify-center transition-colors ${revealed ? "bg-black text-[#00E676]" : "bg-black/10"}`}>
              <Check size={22} strokeWidth={3} />
            </div>
            <div className="font-bold uppercase tracking-widest text-sm">
              {revealed ? "The Author's Forge Result" : "With The Author's Forge"}
            </div>
          </div>

          {!revealed ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              <div className="font-['Bebas_Neue'] text-5xl text-center uppercase text-black/30">
                Click to reveal
              </div>
              <button
                onClick={() => setRevealed(true)}
                className="flex items-center gap-3 bg-black text-[#00E676] px-8 py-5 font-bold uppercase tracking-widest border-4 border-black shadow-[8px_8px_0_0_rgba(0,230,118,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer"
              >
                Reveal the After <Zap size={20} />
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
                    <Check size={18} strokeWidth={3} className="text-black mt-1 shrink-0" />
                    <span className="text-base font-bold">{p}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      {/* NEXT DIMENSION or CTA */}
      <div className="border-t-8 border-black p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
        {activeDim < dimensions.length - 1 ? (
          <button
            onClick={() => { setActiveDim(a => a + 1); setRevealed(false); }}
            className="flex items-center gap-3 font-bold uppercase tracking-widest border-4 border-black px-6 py-4 hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            See {dimensions[activeDim + 1].label} <ArrowRight size={20} />
          </button>
        ) : (
          <div className="font-['Bebas_Neue'] text-3xl uppercase">You've seen all four dimensions.</div>
        )}

        <button className="flex items-center gap-3 bg-[#0066FF] text-white px-8 py-4 font-bold uppercase tracking-widest border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer whitespace-nowrap">
          Apply Now <Zap size={20} />
        </button>
      </div>
    </div>
  );
}
