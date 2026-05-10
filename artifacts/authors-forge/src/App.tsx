import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, BookOpen, PenTool, Globe, Target, Shield, Clock, Users, Video, Phone, Library } from "lucide-react";
import { Button } from "@/components/ui/button";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground font-sans noise-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 mix-blend-difference">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-serif text-2xl tracking-widest text-primary">TAF.</div>
          <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 rounded-none tracking-widest uppercase text-xs h-12 px-8">
            Apply
          </Button>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
          <motion.div style={{ y }} className="w-full h-full opacity-30 blur-[2px]">
            {/* Subtle background texture/gradient */}
            <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px]" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <FadeIn>
            <div className="uppercase tracking-[0.3em] text-primary mb-6 font-semibold text-[24px]">The Author's Forge</div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 max-w-4xl mx-auto">
              From Idea to <span className="italic text-primary/90">Published Book</span> in 5 Months.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              A premium publishing incubator that builds, publishes, and positions your book. Not a writing class—a transformation into a recognized authority.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-16 px-12 text-sm uppercase tracking-widest transition-all duration-500 hover:scale-105 group">
              Apply for the Next Cohort
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </FadeIn>
        </div>
      </section>
      {/* The 5-Month Journey */}
      <section className="py-32 px-6 relative bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-[1px] w-12 bg-primary/50" />
              <h2 className="text-sm uppercase tracking-[0.3em] text-primary">The Process</h2>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h3 className="text-4xl md:text-5xl font-serif mb-24 max-w-2xl">The 5-Month Journey to Authorship</h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
            <div className="hidden md:block absolute left-[15px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-primary/10 to-transparent" />
            
            {[
              { num: "01", title: "The Architecture", month: "Month 1", desc: "Define the market thesis, reader, structure, and your unique voice." },
              { num: "02", title: "The Writing Forge", month: "Months 2 & 3", desc: "Write with clarity and momentum. Structured sprints, real-time feedback, and story analysis." },
              { num: "03", title: "Publishing Mechanics", month: "Month 4", desc: "Polish, design, contract, and prepare your book for the world." },
              { num: "04", title: "The Publicity Engine", month: "Month 5", desc: "Build your author brand and launch strategy that creates real visibility." },
              { num: "05", title: "Beyond the Book", month: "Ongoing", desc: "Turn your book into opportunities, authority, and long-term impact." }
            ].map((phase, i) => (
              <div key={i} className="col-span-12 md:col-span-10 md:col-start-3 relative">
                <FadeIn delay={i * 0.1}>
                  <div className="flex flex-col md:flex-row gap-8 items-start group">
                    <div className="hidden md:flex absolute -left-[calc(16.666%-16px)] items-center justify-center w-8 h-8 rounded-full bg-background border border-primary/50 text-primary text-xs font-mono mt-2 z-10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                      {phase.num}
                    </div>
                    <div className="md:hidden text-primary font-mono text-sm tracking-widest">{phase.num}</div>
                    
                    <div className="flex-1 pb-16">
                      <div className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{phase.month}</div>
                      <h4 className="text-2xl md:text-3xl font-serif mb-4 text-foreground group-hover:text-primary transition-colors duration-500">{phase.title}</h4>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{phase.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* What You Walk Away With */}
      <section className="py-32 px-6 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif mb-24 text-center max-w-3xl mx-auto leading-tight">
              What You <span className="italic text-primary">Walk Away</span> With
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {[
              { icon: BookOpen, title: "Finished Manuscript", desc: "Professionally edited, polished, and ready to be published to the world." },
              { icon: Shield, title: "Publishing Contract", desc: "Guaranteed publishing pathway for both physical and digital distribution." },
              { icon: Target, title: "Marketing Blueprint", desc: "A customized book marketing plan tailored to your niche and audience." },
              { icon: Globe, title: "Lasting Authority", desc: "A powerful intellectual asset that builds trust, opportunities, and long-term impact." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-10 border border-white/5 bg-zinc-950/50 hover:bg-zinc-900 transition-colors duration-500 h-full flex flex-col items-start group">
                  <div className="mb-6 p-4 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
                    <item.icon strokeWidth={1} size={32} />
                  </div>
                  <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* Program at a Glance */}
      <section className="py-32 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-primary/50" />
                  <h2 className="text-sm uppercase tracking-[0.3em] text-primary">The Details</h2>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif">Program at a Glance</h3>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Clock, label: "Duration", value: "20 Weeks", sub: "(5 Months)" },
              { icon: Users, label: "Cohort Size", value: "10-12", sub: "Authors Max" },
              { icon: Video, label: "Touchpoints", value: "Weekly", sub: "Live Masterclass" },
              { icon: Phone, label: "Support", value: "Monthly", sub: "1:1 Strategy Call" },
              { icon: Library, label: "Resources", value: "Portal", sub: "Templates & Guides" }
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border-t border-primary/20 pt-6 group hover:border-primary transition-colors duration-500">
                  <stat.icon className="w-6 h-6 text-primary mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">{stat.label}</div>
                  <div className="text-2xl font-serif mb-1">{stat.value}</div>
                  <div className="text-xs text-primary/70 font-medium">{stat.sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-40 px-6 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1]">
              You don't just write a book. <br/>
              <span className="italic text-primary">You become the kind of author</span> <br/>
              the world pays attention to.
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
              Join a curated group of high-achieving experts. Spots are strictly limited to ensure personal attention and guaranteed results.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-16 px-12 text-sm uppercase tracking-widest transition-all duration-500 hover:scale-105 group">
              Apply for the Next Cohort
              <ChevronRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="mt-6 text-sm text-muted-foreground tracking-widest uppercase">
              Applications reviewed within 48 hours
            </div>
          </FadeIn>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center md:text-left bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-xl tracking-widest text-primary">TAF.</div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} The Author's Forge. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
