import { useEffect, useState } from "react";
import { Zap, Users, AlertTriangle } from "lucide-react";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    function tick() {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

const deadline = new Date(Date.now() + 1000 * 60 * 60 * 24 * 18 + 1000 * 60 * 60 * 14);

const spotsTotal = 12;
const spotsTaken = 8;
const spotsLeft = spotsTotal - spotsTaken;

const TimerUnit = ({ value, label, accent }: { value: number; label: string; accent?: boolean }) => (
  <div className={`flex flex-col items-center border-8 border-black p-4 sm:p-6 ${accent ? "bg-[#00E676]" : "bg-white"}`}>
    <div
      className={`font-['Bebas_Neue'] text-[14vw] sm:text-8xl leading-none tabular-nums ${accent ? "text-black" : "text-black"}`}
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      {String(value).padStart(2, "0")}
    </div>
    <div className="font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mt-1">{label}</div>
  </div>
);

const testimonials = [
  { name: "Marcus T.", industry: "Sales Coaching", quote: "I applied on day 18. The spot was still open. Don't wait like I almost did." },
  { name: "Dr. Aisha K.", industry: "Executive Coaching", quote: "My book launched 4 months after I joined. Six figures in new consulting revenue." },
  { name: "Lena R.", industry: "Leadership Consulting", quote: "The cohort filled. I joined the next one. I still think about that 3-month delay." },
];

export default function TheCountdown() {
  const { days, hours, mins, secs } = useCountdown(deadline);
  const [hovered, setHovered] = useState<number | null>(null);

  const fillPct = (spotsTaken / spotsTotal) * 100;

  return (
    <div className="min-h-screen bg-black text-white font-['Space_Grotesk'] flex flex-col border-[10px] border-[#00E676] overflow-x-hidden">
      {/* URGENT HEADER BAR */}
      <div className="bg-[#00E676] text-black border-b-8 border-black p-3 flex items-center justify-center gap-3">
        <AlertTriangle size={18} strokeWidth={3} />
        <span className="font-bold uppercase tracking-widest text-sm">
          Applications close when the cohort is full — {spotsLeft} spots remaining
        </span>
        <AlertTriangle size={18} strokeWidth={3} />
      </div>

      {/* NAV */}
      <div className="border-b-8 border-[#00E676] p-4 sm:p-6 flex justify-between items-center">
        <div className="font-['Bebas_Neue'] text-2xl sm:text-4xl uppercase tracking-tight text-[#00E676]">
          The Author's Forge
        </div>
        <button className="flex items-center gap-2 bg-[#0066FF] text-white px-4 sm:px-6 py-2 sm:py-3 font-bold uppercase tracking-wider border-4 border-[#00E676] shadow-[4px_4px_0_0_rgba(0,230,118,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer text-sm sm:text-base">
          Apply Now <Zap size={16} />
        </button>
      </div>

      {/* MAIN — COUNTDOWN */}
      <div className="border-b-8 border-[#00E676] p-6 sm:p-10 flex flex-col items-center">
        <div className="font-['Bebas_Neue'] text-4xl sm:text-6xl uppercase tracking-wide text-center mb-2 text-white/70">
          Next Cohort Applications Close In
        </div>
        <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full max-w-3xl mt-4">
          <TimerUnit value={days} label="Days" accent />
          <TimerUnit value={hours} label="Hours" />
          <TimerUnit value={mins} label="Mins" />
          <TimerUnit value={secs} label="Secs" accent />
        </div>
      </div>

      {/* CAPACITY BAR */}
      <div className="border-b-8 border-[#00E676] p-6 sm:p-10">
        <div className="flex justify-between items-end mb-3">
          <div className="flex items-center gap-3">
            <Users size={24} className="text-[#00E676]" />
            <span className="font-bold uppercase tracking-widest text-sm">Cohort Capacity</span>
          </div>
          <div className="font-['Bebas_Neue'] text-4xl text-[#00E676]">
            {spotsTaken}/{spotsTotal}
          </div>
        </div>
        <div className="h-10 border-4 border-[#00E676] relative overflow-hidden">
          <div
            className="h-full bg-[#00E676] transition-all duration-1000"
            style={{ width: `${fillPct}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center font-bold uppercase tracking-widest text-sm mix-blend-difference text-white">
            {spotsLeft} of {spotsTotal} spots remain
          </div>
        </div>
        <div className="grid grid-cols-12 gap-[2px] mt-2">
          {Array.from({ length: spotsTotal }).map((_, i) => (
            <div
              key={i}
              className={`h-4 border-2 border-[#00E676] ${i < spotsTaken ? "bg-[#00E676]" : "bg-transparent"}`}
            />
          ))}
        </div>
      </div>

      {/* WHAT IS IT — DENSE */}
      <div className="border-b-8 border-[#00E676] grid grid-cols-1 sm:grid-cols-3">
        {[
          { num: "5", label: "Month incubator", detail: "Idea → Published book" },
          { num: "12", label: "Authors max", detail: "Strictly curated" },
          { num: "100%", label: "Publishing rate", detail: "No dropouts. No excuses." },
        ].map((item, i) => (
          <div
            key={i}
            className={`p-8 border-b-8 sm:border-b-0 ${i < 2 ? "sm:border-r-8" : ""} border-[#00E676] text-center hover:bg-[#00E676] hover:text-black transition-colors group cursor-default`}
          >
            <div className="font-['Bebas_Neue'] text-7xl text-[#00E676] group-hover:text-black transition-colors">{item.num}</div>
            <div className="font-bold uppercase tracking-widest text-sm">{item.label}</div>
            <div className="text-white/60 group-hover:text-black/60 text-sm mt-1 transition-colors">{item.detail}</div>
          </div>
        ))}
      </div>

      {/* SOCIAL PROOF */}
      <div className="p-6 sm:p-10">
        <div className="font-['Bebas_Neue'] text-4xl text-[#00E676] mb-6 uppercase">From the Last Cohort</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`p-6 border-4 transition-all cursor-default ${
                hovered === i
                  ? "border-[#00E676] bg-[#00E676] text-black shadow-[8px_8px_0_0_rgba(0,102,255,1)]"
                  : "border-[#00E676]/40 bg-white/5"
              }`}
            >
              <p className="font-bold text-base leading-snug mb-4">"{t.quote}"</p>
              <div className="font-bold uppercase tracking-widest text-sm opacity-70">{t.name}</div>
              <div className="text-xs opacity-50 uppercase tracking-wider">{t.industry}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER CTA */}
      <div className="mt-auto border-t-8 border-[#00E676] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#0066FF]">
        <div>
          <div className="font-['Bebas_Neue'] text-4xl uppercase leading-tight">Don't miss the cohort.</div>
          <div className="font-bold text-white/80 text-sm uppercase tracking-widest">{spotsLeft} spots left</div>
        </div>
        <button className="flex items-center gap-4 bg-[#00E676] text-black px-10 py-5 font-bold uppercase tracking-widest text-lg border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer whitespace-nowrap">
          Secure My Spot <Zap size={22} />
        </button>
      </div>
    </div>
  );
}
