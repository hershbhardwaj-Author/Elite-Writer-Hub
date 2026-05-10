import React from "react";
import { ArrowRight, Flame, Zap, Layers, Globe, Star, Users, Calendar, Video, Phone, CheckCircle2, ChevronRight } from "lucide-react";

export function ElectricRebellion() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#00E676] selection:text-black font-['Space_Grotesk'] overflow-x-hidden border-[16px] sm:border-[24px] border-black">
      
      {/* NAVIGATION - Brutalist */}
      <nav className="flex justify-between items-center p-4 sm:p-8 border-b-8 border-black bg-white">
        <div className="font-['Bebas_Neue'] text-3xl sm:text-5xl tracking-tight leading-none uppercase">
          The Author's Forge
        </div>
        <button className="hidden sm:flex items-center gap-2 bg-[#0066FF] text-white px-6 py-3 font-bold uppercase tracking-wider hover:bg-black transition-colors border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
          Apply Now <Zap size={18} />
        </button>
      </nav>

      {/* HERO - Maximum Impact */}
      <header className="relative w-full border-b-8 border-black bg-[#00E676] overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute w-[200%] h-[20px] bg-black rotate-45 top-1/4 -left-1/4"></div>
          <div className="absolute w-[200%] h-[20px] bg-black rotate-45 top-2/4 -left-1/4"></div>
          <div className="absolute w-[200%] h-[20px] bg-black rotate-45 top-3/4 -left-1/4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-w-[1600px] mx-auto relative z-10">
          <div className="lg:col-span-8 p-6 sm:p-12 lg:p-20 border-b-8 lg:border-b-0 lg:border-r-8 border-black flex flex-col justify-center">
            <div className="inline-block bg-black text-white font-['Space_Grotesk'] font-bold uppercase tracking-widest px-4 py-2 mb-8 self-start text-sm sm:text-base border-2 border-black rotate-[-2deg]">
              Premium Publishing Incubator
            </div>
            
            <h1 className="font-['Bebas_Neue'] text-[15vw] lg:text-[10vw] leading-[0.8] tracking-[-0.02em] uppercase text-black mb-6 drop-shadow-[4px_4px_0_rgba(0,102,255,1)]">
              From Idea to <br/>
              <span className="text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">Published Book</span><br/>
              in 5 Months.
            </h1>
            
            <p className="font-['Space_Grotesk'] text-xl sm:text-3xl font-bold max-w-2xl leading-tight mt-6 bg-white p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,102,255,1)]">
              A premium publishing incubator that builds, publishes, and positions your book. For coaches who refuse to be quiet.
            </p>
          </div>
          
          <div className="lg:col-span-4 bg-white flex flex-col">
            <div className="flex-1 p-8 border-b-8 border-black flex flex-col justify-center items-center bg-[#0066FF] text-white relative overflow-hidden group hover:bg-black transition-colors">
              <Zap className="absolute opacity-10 w-[150%] h-[150%] -top-1/4 -right-1/4 group-hover:scale-110 transition-transform duration-700" />
              <div className="font-['Bebas_Neue'] text-9xl leading-none">5</div>
              <div className="font-bold text-2xl uppercase tracking-widest">Months</div>
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center items-center bg-black text-[#00E676] hover:bg-white hover:text-black transition-colors cursor-pointer group">
              <div className="font-bold text-3xl uppercase text-center mb-4 group-hover:scale-110 transition-transform">Start Your Engine</div>
              <ArrowRight size={48} className="group-hover:translate-x-4 transition-transform" />
            </div>
          </div>
        </div>
      </header>

      {/* STATS TICKER - Kinetic */}
      <div className="w-full bg-black text-white py-4 overflow-hidden border-b-8 border-black flex whitespace-nowrap">
        <div className="animate-[spin_30s_linear_infinite] inline-block font-['Bebas_Neue'] text-4xl uppercase tracking-widest flex items-center gap-8">
          <span>20 Weeks</span> <Star className="text-[#00E676]" fill="currentColor" />
          <span>10-12 Authors Max</span> <Star className="text-[#00E676]" fill="currentColor" />
          <span>Weekly Live Masterclass</span> <Star className="text-[#00E676]" fill="currentColor" />
          <span>1:1 Monthly Strategy Call</span> <Star className="text-[#00E676]" fill="currentColor" />
          <span>The Author's Portal</span> <Star className="text-[#00E676]" fill="currentColor" />
          <span>20 Weeks</span> <Star className="text-[#00E676]" fill="currentColor" />
          <span>10-12 Authors Max</span> <Star className="text-[#00E676]" fill="currentColor" />
          <span>Weekly Live Masterclass</span> <Star className="text-[#00E676]" fill="currentColor" />
        </div>
      </div>

      {/* THE JOURNEY - Stacked & Loud */}
      <section className="bg-white py-20 px-4 sm:px-8 border-b-8 border-black relative">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="font-['Bebas_Neue'] text-[12vw] sm:text-[8vw] leading-none mb-16 text-center uppercase">
            The 5-Month <span className="text-[#0066FF]">Journey</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="bg-[#00E676] border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="font-['Bebas_Neue'] text-7xl mb-4 border-b-4 border-black pb-4">01</div>
              <h3 className="font-bold text-3xl uppercase mb-2">The Architecture</h3>
              <p className="font-bold bg-black text-white inline-block px-3 py-1 mb-4">Month 1</p>
              <p className="text-xl font-medium">Blueprint the foundation. We tear down your ideas and rebuild them into an unshakable structure.</p>
            </div>
            
            {/* Phase 2 */}
            <div className="bg-white border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,102,255,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,102,255,1)] transition-all md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col">
              <div className="font-['Bebas_Neue'] text-7xl mb-4 border-b-4 border-black pb-4 text-[#0066FF]">02</div>
              <h3 className="font-bold text-4xl uppercase mb-2 text-[#0066FF]">The Writing Forge</h3>
              <p className="font-bold bg-[#0066FF] text-white inline-block px-3 py-1 mb-6 self-start">Months 2 & 3</p>
              <p className="text-2xl font-bold leading-tight flex-1">This is where the fire gets hot. Intensive, relentless writing with direct editorial feedback.</p>
              <Flame size={64} className="text-[#0066FF] mt-8 self-end" />
            </div>

            {/* Phase 3 */}
            <div className="bg-[#0066FF] text-white border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="font-['Bebas_Neue'] text-7xl mb-4 border-b-4 border-black pb-4">03</div>
              <h3 className="font-bold text-3xl uppercase mb-2">Publishing Mechanics</h3>
              <p className="font-bold bg-white text-black inline-block px-3 py-1 mb-4">Month 4</p>
              <p className="text-xl font-medium">We handle the technical execution. Typesetting, cover design, legal framework.</p>
            </div>

            {/* Phase 4 */}
            <div className="bg-black text-[#00E676] border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,230,118,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,230,118,1)] transition-all">
              <div className="font-['Bebas_Neue'] text-7xl mb-4 border-b-4 border-[#00E676] pb-4">04</div>
              <h3 className="font-bold text-3xl uppercase mb-2 text-white">The Publicity Engine</h3>
              <p className="font-bold bg-[#00E676] text-black inline-block px-3 py-1 mb-4">Month 5</p>
              <p className="text-xl font-medium">Launch preparation. We don't just release a book, we detonate it in your market.</p>
            </div>

            {/* Phase 5 */}
            <div className="bg-white border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all md:col-span-2">
              <div className="font-['Bebas_Neue'] text-7xl mb-4 border-b-4 border-black pb-4">05</div>
              <h3 className="font-bold text-3xl uppercase mb-2">Beyond the Book</h3>
              <p className="font-bold bg-black text-white inline-block px-3 py-1 mb-4">Ongoing</p>
              <p className="text-xl font-medium">Your book is a weapon. We teach you how to wield it to dominate your industry long-term.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES - Asymmetric & High Contrast */}
      <section className="bg-[#0066FF] py-20 px-4 sm:px-8 border-b-8 border-black text-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-['Bebas_Neue'] text-[10vw] lg:text-[7vw] leading-[0.85] mb-8 uppercase drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
              The<br/>Arsenal
            </h2>
            <p className="text-2xl font-bold bg-black p-4 inline-block mb-12 transform -rotate-1">
              What you walk away with:
            </p>
            
            <ul className="space-y-6">
              {[
                "Finished Manuscript",
                "Publishing Contract",
                "Marketing Blueprint",
                "Lasting Authority"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-6 group">
                  <div className="bg-[#00E676] text-black w-12 h-12 flex items-center justify-center font-bold text-2xl border-4 border-black group-hover:scale-110 transition-transform flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="font-['Bebas_Neue'] text-5xl sm:text-6xl uppercase tracking-wide group-hover:text-[#00E676] transition-colors line-clamp-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative h-full min-h-[500px] border-8 border-black bg-white p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] text-black flex flex-col justify-center items-center text-center transform rotate-2">
            <Globe size={120} strokeWidth={1} className="text-[#0066FF] mb-8 animate-pulse" />
            <h3 className="font-['Bebas_Neue'] text-6xl uppercase mb-6">World-Class Execution</h3>
            <p className="font-bold text-2xl max-w-md">No vanity publishing. No templates. Pure, unfiltered market dominance.</p>
          </div>
        </div>
      </section>

      {/* CTA - Urgent */}
      <section className="bg-white py-32 px-4 sm:px-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Background noise/pattern could go here */}
        
        <h2 className="font-['Bebas_Neue'] text-[8vw] lg:text-[6vw] leading-none mb-8 max-w-[1200px] uppercase">
          You don't just write a book.<br/>
          <span className="bg-black text-[#00E676] px-4 py-2 mt-4 inline-block transform -rotate-2 border-4 border-[#00E676]">
            You become the kind of author
          </span><br/>
          the world pays attention to.
        </h2>
        
        <button className="mt-12 group relative inline-flex items-center justify-center px-12 py-6 font-bold text-white uppercase tracking-widest text-2xl overflow-hidden bg-[#0066FF] border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,230,118,1)] hover:shadow-none hover:translate-x-[12px] hover:translate-y-[12px] transition-all">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-full group-hover:h-56"></span>
          <span className="relative flex items-center gap-4">
            Apply for the Next Cohort <Zap size={28} className="text-[#00E676]" />
          </span>
        </button>
      </section>
      
      {/* FOOTER */}
      <footer className="bg-black text-white p-8 border-t-8 border-[#00E676] flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-['Bebas_Neue'] text-4xl uppercase tracking-widest text-[#00E676]">
          The Author's Forge
        </div>
        <div className="font-bold uppercase tracking-wider text-sm">
          © {new Date().getFullYear()} No Apologies.
        </div>
      </footer>
    </div>
  );
}
