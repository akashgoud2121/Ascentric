import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

const DOMAINS = [
  {
    id: "01",
    name: "Health & Wellness",
    mastery: "Establishing Patient Trust & Digital Credibility",
    projects: ["Dentist", "Physiotherapy Clinic", "Skin Clinic"],
    score: 100,
    color: "from-blue-500/20 to-cyan-500/10"
  },
  {
    id: "02",
    name: "Lifestyle & Grooming",
    mastery: "Driving Client Loyalty & Visual Excellence",
    projects: ["Gym", "Spa", "Salon"],
    score: 100,
    color: "from-purple-500/20 to-pink-500/10"
  },
  {
    id: "03",
    name: "Hospitality Hub",
    mastery: "Optimizing Local Reach & Customer Engagement",
    projects: ["Cafe", "Restaurant"],
    score: 100,
    color: "from-orange-500/20 to-red-500/10"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-8 border-primary/20 text-[10px] font-black uppercase tracking-[0.3em] text-primary"
            >
              Strategic Portfolio
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]"
            >
              DOMAIN <br />
              <span className="text-primary italic uppercase">MASTERY.</span>
            </motion.h2>
            
            <p className="text-lg md:text-xl text-foreground/40 font-medium leading-relaxed max-w-2xl">
              We've successfully delivered 10+ end-to-end digital experiences 
              with **utmost precision** across these three strategic sectors.
            </p>
          </div>
          
          <div className="hidden lg:block text-right">
             <div className="text-[10rem] font-black leading-none text-foreground/[0.03] select-none pointer-events-none italic">10+</div>
          </div>
        </div>

        {/* Domain Mastery Bars */}
        <div className="space-y-6">
          {DOMAINS.map((domain, index) => (
            <DomainBar key={domain.id} domain={domain} index={index} />
          ))}
        </div>

        {/* Footer Statistics */}
        <div className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-10 opacity-60">
           <div className="flex gap-12">
             <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Total Delivery</span>
                <span className="text-2xl font-black">10+ Projects</span>
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Precision Rate</span>
                <span className="text-2xl font-black">100% End-to-End</span>
             </div>
           </div>
           <div className="h-px flex-1 bg-border hidden md:block" />
           <span className="text-[10px] font-black uppercase tracking-[0.4em]">Strategic Success Since Launch</span>
        </div>
      </div>
    </section>
  );
}

function DomainBar({ domain, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="group relative"
    >
      <div className={cn(
        "w-full glass p-8 md:p-12 rounded-[3.5rem] border-border bg-foreground/[0.01] hover:bg-foreground/[0.04] hover:border-primary/20 transition-all duration-700 flex flex-col md:flex-row md:items-center justify-between gap-12 overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700",
        domain.color.replace("from-", "before:from-").replace("to-", "before:to-")
      )}>
        
        {/* Domain Index & Name */}
        <div className="relative z-10 flex items-center gap-10 flex-1">
           <div className="relative shrink-0 w-20 h-20 flex items-center justify-center">
              {/* Animated Mastery Gauge */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                 <circle 
                   cx="40" cy="40" r="38" 
                   fill="none" stroke="currentColor" strokeWidth="1"
                   className="text-foreground/10"
                 />
                 <motion.circle 
                   cx="40" cy="40" r="38" 
                   fill="none" stroke="currentColor" strokeWidth="2"
                   strokeDasharray="239"
                   initial={{ strokeDashoffset: 239 }}
                   whileInView={{ strokeDashoffset: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                   className="text-primary"
                 />
              </svg>
              <span className="text-3xl font-black text-foreground relative z-10 font-[serif] italic">
                {domain.id}
              </span>
           </div>

           <div>
              <h3 className="text-3xl md:text-5xl font-black mb-2 tracking-tight group-hover:translate-x-2 transition-transform">
                {domain.name}
              </h3>
              <p className="text-sm font-bold text-primary group-hover:text-primary transition-colors uppercase tracking-widest">
                {domain.mastery}
              </p>
           </div>
        </div>

        {/* Industry Expansion */}
        <div className="relative z-10 flex flex-wrap gap-2 max-w-sm justify-end">
           {domain.projects.map((project, pIdx) => (
             <div 
               key={pIdx}
               className="px-6 py-3 rounded-full glass bg-background/50 border-border text-[10px] font-black uppercase tracking-widest text-foreground/60 group-hover:text-foreground group-hover:border-primary/30 transition-all duration-500 flex items-center gap-2"
             >
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                {project}
             </div>
           ))}
           <div className="w-12 h-12 rounded-full glass border-border flex items-center justify-center text-primary/30 group-hover:text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
              <ArrowRight className="w-5 h-5" />
           </div>
        </div>
      </div>
    </motion.div>
  );
}
