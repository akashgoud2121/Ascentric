import { motion } from "framer-motion";
import { XCircle, CheckCircle2, TrendingUp, Zap, Hexagon, Layers } from "lucide-react";
import { cn } from "../../lib/utils";

const COMPARISON_POINTS = [
  {
    label: "Pricing",
    traditional: "High Agency Fees",
    ascentric: "Fair & Value-Driven",
    desc: "Pay for results, not for our office rent."
  },
  {
    label: "Timeline",
    traditional: "Months of Meetings",
    ascentric: "Fast & Focused",
    desc: "Direct access to the builders, zero red tape."
  },
  {
    label: "Growth",
    traditional: "One-Time Delivery",
    ascentric: "Scaling with You",
    desc: "We help you grow your client base gradually."
  },
  {
    label: "Execution",
    traditional: "Surface Design Only",
    ascentric: "End-to-End Control",
    desc: "We handle everything from design to deployment."
  }
];

export default function Comparison() {
  return (
    <section id="advantage" className="section-padding relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        
        <div className="text-center mb-24 transition-all">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-8 border-primary/20 text-[10px] font-black uppercase tracking-[0.3em] text-primary"
          >
            Why Choose Us?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]"
          >
            THE COMPETITIVE <br />
            <span className="text-primary italic uppercase">ADVANTAGE.</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-foreground/40 font-medium leading-relaxed max-w-2xl mx-auto">
             Stop paying for traditional agency bloat. Experience why being young and dynamic 
             is a superpower for your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative items-stretch">
          {/* Traditional Way */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 0.6, x: 0 }}
            viewport={{ once: true }}
            className="group p-8 md:p-12 glass rounded-[3rem] border-border bg-foreground/[0.01] transition-all duration-700 h-full flex flex-col"
          >
            <div className="flex items-center gap-4 mb-10 opacity-40">
               <div className="w-12 h-12 rounded-2xl border border-border flex items-center justify-center">
                  <Hexagon className="w-6 h-6 text-foreground/40" />
               </div>
               <h3 className="text-2xl font-black tracking-tight text-foreground/40">Traditional Way</h3>
            </div>
            
            <div className="space-y-10 flex-1">
               {COMPARISON_POINTS.map((point, index) => (
                 <div key={index} className="flex gap-4">
                    <XCircle className="w-5 h-5 text-red-500/40 shrink-0 mt-1" />
                    <div>
                       <span className="text-[10px] font-black uppercase tracking-widest text-foreground/20 block mb-1">
                          {point.label}
                       </span>
                       <p className="text-lg font-bold text-foreground/40">{point.traditional}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border opacity-20">
               <p className="text-xs font-medium">Outdated Bureaucracy Since 1999</p>
            </div>
          </motion.div>

          {/* Ascentric Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group p-8 md:p-12 glass rounded-[3rem] border-primary/20 bg-primary/[0.02] shadow-2xl shadow-primary/5 transition-all duration-700 h-full flex flex-col relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10 transition-all duration-700 group-hover:scale-150" />
            
            <div className="flex items-center gap-4 mb-10">
               <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-primary" />
               </div>
               <h3 className="text-2xl font-black tracking-tight">The Ascentric Way</h3>
            </div>
            
            <div className="space-y-10 flex-1 relative z-10">
               {COMPARISON_POINTS.map((point, index) => (
                 <div key={index} className="flex gap-4 group/point">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1 group-hover/point:scale-125 transition-transform" />
                    <div>
                       <span className="text-[10px] font-black uppercase tracking-widest text-primary/50 block mb-1">
                          {point.label}
                       </span>
                       <p className="text-lg font-bold text-foreground">{point.ascentric}</p>
                       <p className="text-xs font-medium text-foreground/40 group-hover/point:text-foreground/60 transition-colors">
                         {point.desc}
                       </p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
               <p className="text-xs font-black uppercase tracking-widest text-primary">Agile Powerhouse</p>
               <Zap className="w-4 h-4 text-primary animate-pulse" />
            </div>
          </motion.div>
        </div>

        {/* Gradual Growth Message */}
        <div className="mt-20 flex flex-col items-center">
           <div className="flex items-center gap-4 mb-6">
              <Layers className="w-6 h-6 text-primary" />
              <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-transparent" />
           </div>
           <p className="max-w-xl text-center text-xs font-semibold leading-relaxed text-foreground/30 uppercase tracking-[0.2em]">
              As young professionals, we know exactly how websites function from design to deployment. 
              We don't just ship; we strategically plan your **gradual growth**.
           </p>
        </div>

      </div>
    </section>
  );
}
