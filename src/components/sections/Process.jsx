import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const STEPS = [
  {
    title: "Research & Audit",
    desc: "We analyze your current presence on Google Maps and search results using real data and research.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Strategic Design",
    desc: "We craft a bespoke design system and user experience tailored to your unique business goals.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Swift Execution",
    desc: "Development and build process using modern tech stacks like React, Vite, and Supabase for high performance.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Launch & Growth",
    desc: "Deploying your new digital ecosystem and optimizing it for continuous lead generation and conversion.",
    icon: <Rocket className="w-6 h-6" />,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tighter"
          >
            OUR <span className="text-primary italic">WORKFLOW</span>
          </motion.h2>
          <p className="max-w-xl text-foreground/50">
            A transparent and efficient 4-step process designed to take your
            business from idea to execution seamlessly.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 w-px h-full bg-gradient-to-b from-primary/30 to-background/0" />
          
          <div className="space-y-16">
            {STEPS.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="relative flex items-start gap-12 group"
    >
      {/* Icon Node */}
      <div className="relative z-10 flex-shrink-0 w-16 h-16 glass rounded-2xl flex items-center justify-center border-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-[0_0_20px_rgba(20,15,12,0.08)]">
        {step.icon}
      </div>

      <div className="pt-2">
        <span className="text-xs font-black tracking-widest text-primary/50 uppercase mb-2 block">
          Phase 0{index + 1}
        </span>
        <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors">
          {step.title}
        </h3>
        <p className="text-foreground/50 leading-relaxed max-w-lg group-hover:text-foreground/70 transition-colors">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}
