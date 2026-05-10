import { ArrowRight, Flame, Zap, Globe, Star, Users, Calendar, Video, Phone, Library } from "lucide-react";

const phases = [
  {
    num: "01",
    title: "The Architecture",
    month: "Month 1",
    desc: "Blueprint the foundation. We tear down your ideas and rebuild them into an unshakable structure.",
    bg: "bg-[#00E676]",
    border: "border-black",
    shadow: "shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]",
    hoverShadow: "hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]",
    numColor: "",
    titleColor: "",
    monthBg: "bg-black text-white",
  },
  {
    num: "02",
    title: "The Writing Forge",
    month: "Months 2 & 3",
    desc: "This is where the fire gets hot. Intensive, relentless writing with direct editorial feedback.",
    bg: "bg-white",
    border: "border-black",
    shadow: "shadow-[12px_12px_0px_0px_rgba(0,102,255,1)]",
    hoverShadow: "hover:shadow-[16px_16px_0px_0px_rgba(0,102,255,1)]",
    numColor: "text-[#0066FF]",
    titleColor: "text-[#0066FF]",
    monthBg: "bg-[#0066FF] text-white",
    icon: <Flame size={64} className="text-[#0066FF] mt-8 self-end" />,
    span: "md:col-span-2 lg:col-span-1",
  },
  {
    num: "03",
    title: "Publishing Mechanics",
    month: "Month 4",
    desc: "We handle the technical execution. Typesetting, cover design, legal framework.",
    bg: "bg-[#0066FF]",
    border: "border-black",
    shadow: "shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]",
    hoverShadow: "hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]",
    numColor: "",
    titleColor: "text-white",
    monthBg: "bg-white text-black",
    textColor: "text-white",
  },
  {
    num: "04",
    title: "The Publicity Engine",
    month: "Month 5",
    desc: "Launch preparation. We don't just release a book, we detonate it in your market.",
    bg: "bg-black",
    border: "border-black",
    shadow: "shadow-[12px_12px_0px_0px_rgba(0,230,118,1)]",
    hoverShadow: "hover:shadow-[16px_16px_0px_0px_rgba(0,230,118,1)]",
    numColor: "text-[#00E676]",
    titleColor: "text-white",
    monthBg: "bg-[#00E676] text-black",
    textColor: "text-[#00E676]",
  },
  {
    num: "05",
    title: "Beyond the Book",
    month: "Ongoing",
    desc: "Your book is a weapon. We teach you how to wield it to dominate your industry long-term.",
    bg: "bg-white",
    border: "border-black",
    shadow: "shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]",
    hoverShadow: "hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]",
    numColor: "",
    titleColor: "",
    monthBg: "bg-black text-white",
    span: "md:col-span-2",
  },
];

const deliverables = [
  "Finished Manuscript",
  "Publishing Contract",
  "Marketing Blueprint",
  "Lasting Authority",
];

const stats = [
  { icon: Calendar, label: "Duration", value: "20 Weeks", sub: "5 Months" },
  { icon: Users, label: "Cohort Size", value: "10–12", sub: "Authors Max" },
  { icon: Video, label: "Touchpoints", value: "Weekly", sub: "Live Masterclass" },
  { icon: Phone, label: "Support", value: "Monthly", sub: "1:1 Strategy Call" },
  { icon: Library, label: "Resources", value: "Portal", sub: "Templates & Guides" },
];

const tickerItems = [
  "20 Weeks",
  "10–12 Authors Max",
  "Weekly Live Masterclass",
  "1:1 Monthly Strategy Call",
  "The Author's Portal",
  "Guaranteed Publishing",
  "Marketing Blueprint",
  "World-Class Execution",
];

function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div className="w-full bg-black text-white py-4 overflow-hidden border-b-8 border-black">
      <div className="animate-marquee flex items-center gap-12">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 shrink-0">
            <span className="font-['Bebas_Neue'] text-3xl sm:text-4xl uppercase tracking-widest whitespace-nowrap">
              {item}
            </span>
            <Star className="text-[#00E676] w-5 h-5 shrink-0" fill="currentColor" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen bg-white text-black selection:bg-[#00E676] selection:text-black font-['Space_Grotesk'] overflow-x-hidden border-[16px] border-black"
      data-testid="page-root"
    >
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center p-4 sm:p-8 border-b-8 border-black bg-white" data-testid="nav">
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

      {/* HERO */}
      <header className="relative w-full border-b-8 border-black bg-[#00E676] overflow-hidden" data-testid="hero">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute w-[200%] h-[20px] bg-black rotate-45 top-1/4 -left-1/4" />
          <div className="absolute w-[200%] h-[20px] bg-black rotate-45 top-2/4 -left-1/4" />
          <div className="absolute w-[200%] h-[20px] bg-black rotate-45 top-3/4 -left-1/4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-w-[1600px] mx-auto relative z-10">
          <div className="lg:col-span-8 p-6 sm:p-12 lg:p-20 border-b-8 lg:border-b-0 lg:border-r-8 border-black flex flex-col justify-center">
            <div className="inline-block bg-black text-white font-bold uppercase tracking-widest px-4 py-2 mb-8 self-start text-sm sm:text-base border-2 border-black rotate-[-2deg]">
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

      {/* TICKER */}
      <Ticker />

      {/* 5-MONTH JOURNEY */}
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

      {/* DELIVERABLES / THE ARSENAL */}
      <section className="bg-[#0066FF] py-20 px-4 sm:px-8 border-b-8 border-black text-white" data-testid="section-deliverables">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-['Bebas_Neue'] text-[10vw] lg:text-[7vw] leading-[0.85] mb-8 uppercase drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
              The<br />Arsenal
            </h2>
            <p className="text-2xl font-bold bg-black p-4 inline-block mb-12 transform -rotate-1">
              What you walk away with:
            </p>
            <ul className="space-y-6">
              {deliverables.map((item, i) => (
                <li key={i} className="flex items-center gap-6 group" data-testid={`text-deliverable-${i + 1}`}>
                  <div className="bg-[#00E676] text-black w-12 h-12 flex items-center justify-center font-bold text-2xl border-4 border-black group-hover:scale-110 transition-transform shrink-0">
                    {i + 1}
                  </div>
                  <span className="font-['Bebas_Neue'] text-4xl sm:text-5xl uppercase tracking-wide group-hover:text-[#00E676] transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative border-8 border-black bg-white p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] text-black flex flex-col justify-center items-center text-center transform rotate-1 min-h-[400px]">
            <Globe size={100} strokeWidth={1} className="text-[#0066FF] mb-8 animate-pulse" />
            <h3 className="font-['Bebas_Neue'] text-5xl uppercase mb-4">World-Class Execution</h3>
            <p className="font-bold text-xl max-w-sm">
              No vanity publishing. No templates. Pure, unfiltered market dominance.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAM AT A GLANCE */}
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

      {/* CTA */}
      <section className="bg-white py-32 px-4 sm:px-8 flex flex-col items-center justify-center text-center relative overflow-hidden" data-testid="section-cta">
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

      {/* FOOTER */}
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
