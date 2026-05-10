import React from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart, 
  Calendar, 
  Users, 
  Monitor, 
  Phone,
  BookOpen,
  Briefcase,
  TrendingUp,
  Award
} from "lucide-react";

export function BrightAuthority() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-slate-900 font-['Inter'] selection:bg-[#002F4C] selection:text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tight text-[#002F4C]">
            THE AUTHOR'S FORGE
          </div>
          <button className="text-sm font-semibold text-[#002F4C] hover:text-[#004A77] transition-colors flex items-center gap-2">
            Apply Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-24">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-600 mb-6">
              <span className="w-2 h-2 bg-[#002F4C] rounded-full"></span>
              Publishing Incubator
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              From Idea to Published Book in 5 Months.
            </h1>
            <p className="text-xl text-slate-600 font-medium max-w-2xl leading-relaxed mb-8">
              A premium publishing incubator that builds, publishes, and positions your book. We treat your manuscript as an asset class, engineered for maximum authority and ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#002F4C] text-white px-8 py-4 font-semibold hover:bg-[#001D30] transition-colors flex items-center justify-center gap-2">
                Apply for the Next Cohort <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 bg-white border border-slate-200 p-8 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-4">Program Parameters</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <Calendar className="w-5 h-5 text-[#002F4C] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">20 Weeks</div>
                  <div className="text-sm text-slate-500 mt-1">Intensive structured timeline from blank page to publication.</div>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Users className="w-5 h-5 text-[#002F4C] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">10-12 Authors Max</div>
                  <div className="text-sm text-slate-500 mt-1">Strict cohort limits ensure dedicated editorial attention.</div>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Monitor className="w-5 h-5 text-[#002F4C] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Weekly Live Masterclass</div>
                  <div className="text-sm text-slate-500 mt-1">Strategic curriculum delivery and cohort accountability.</div>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-[#002F4C] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">1:1 Monthly Strategy Call</div>
                  <div className="text-sm text-slate-500 mt-1">Direct consulting with our lead publishing strategists.</div>
                </div>
              </li>
            </ul>
          </div>
        </header>

        {/* Deliverables Data Table */}
        <section className="mb-24">
          <div className="flex items-end justify-between mb-8 border-b border-slate-900 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">Core Deliverables</h2>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">ROI Metrics</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {[
              { icon: BookOpen, title: "Finished Manuscript", desc: "A professionally edited, market-ready 40,000+ word manuscript." },
              { icon: Briefcase, title: "Publishing Contract", desc: "Guaranteed publication through our partnered hybrid imprint." },
              { icon: TrendingUp, title: "Marketing Blueprint", desc: "A 12-month post-launch strategy for platform monetization." },
              { icon: Award, title: "Lasting Authority", desc: "Positioning as the definitive expert in your specific niche." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 hover:bg-slate-50 transition-colors flex flex-col h-full">
                <item.icon className="w-6 h-6 text-[#002F4C] mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Execution Timeline (Journey) */}
        <section className="mb-24">
           <div className="flex items-end justify-between mb-8 border-b border-slate-900 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">The 5-Month Execution Timeline</h2>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Phases</div>
          </div>

          <div className="border border-slate-200 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 border-b border-slate-200 bg-slate-50 font-bold text-xs uppercase tracking-wider text-slate-500 hidden lg:grid">
              <div className="p-4 col-span-2">Timeline</div>
              <div className="p-4 col-span-3">Phase Name</div>
              <div className="p-4 col-span-7">Strategic Objective</div>
            </div>

            {[
              { time: "Month 1", name: "The Architecture", obj: "Validate market positioning, construct the detailed outline, and establish the core thesis of your intellectual property." },
              { time: "Months 2 & 3", name: "The Writing Forge", obj: "Execute the manuscript through disciplined weekly word-count targets, supported by developmental editing and cohort accountability." },
              { time: "Month 4", name: "Publishing Mechanics", obj: "Finalize copyediting, finalize cover design, and process the manuscript for multi-format distribution." },
              { time: "Month 5", name: "The Publicity Engine", obj: "Deploy the launch sequence, secure initial reviews, and activate your existing network for day-one traction." },
              { time: "Ongoing", name: "Beyond the Book", obj: "Leverage the published book as a primary lead generation tool for consulting, speaking, and high-ticket offers." }
            ].map((phase, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <div className="p-4 col-span-2 flex items-center font-semibold text-[#002F4C] lg:text-slate-900 bg-slate-50/50 lg:bg-transparent">
                  {phase.time}
                </div>
                <div className="p-4 col-span-3 flex items-center font-bold text-slate-900 text-lg lg:text-base">
                  {phase.name}
                </div>
                <div className="p-4 col-span-7 flex items-center text-slate-600 leading-relaxed text-sm md:text-base">
                  {phase.obj}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer CTA */}
      <footer className="bg-[#002F4C] text-white py-20 border-t-8 border-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            You don't just write a book.<br />
            <span className="text-slate-400">You become the kind of author the world pays attention to.</span>
          </h2>
          <button className="bg-white text-[#002F4C] px-10 py-5 font-bold text-lg hover:bg-slate-100 transition-colors inline-flex items-center gap-3">
            Apply for the Next Cohort <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
}