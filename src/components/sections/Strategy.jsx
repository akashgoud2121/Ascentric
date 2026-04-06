import { motion } from "framer-motion";
import { Target, Cpu, Layers, ShieldCheck } from "lucide-react";

const STRATEGIES = [
  {
    title: "Local Search Dominance",
    desc: "We don't just 'list' your business. We engineer your Google Maps presence to dominate local proximity searches and attract high-intent customers.",
    icon: <Target className="w-8 h-8" />,
    label: "01 / Visibility",
  },
  {
    title: "Velocity Engineering",
    desc: "Average sites are slow. Our React-powered ecosystems are built for speed, ensuring customers don't bounce before your page even loads.",
    icon: <Cpu className="w-8 h-8" />,
    label: "02 / Performance",
  },
  {
    title: "Data-Centric Design",
    desc: "Every pixel has a purpose. We use behavioral data to design interfaces that guide your customers toward the 'Purchase' or 'Call' button.",
    icon: <Layers className="w-8 h-8" />,
    label: "03 / Conversion",
  },
  {
    title: "Automated Extraction",
    desc: "Stop manually chasing leads. We build internal automation that captures, sorts, and delivers your customer data for immediate follow-up.",
    icon: <ShieldCheck className="w-8 h-8" />,
    label: "04 / Automation",
  },
];

export default function Strategy() {
  return (
    <section id="strategy" className="section-padding bg-accent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row items-end justify-between gap-10">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6 tracking-tighter"
            >
              THE <span className="text-primary italic">ascentric</span> <br />
              ADVANTAGE
            </motion.h2>
            <p className="text-foreground/50 text-lg">
              We replace guesswork with engineering precision. Our methodology is 
              designed to move your business from local visibility to global scale.
            </p>
          </div>
          <div className="hidden lg:block h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent mb-6 mr-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {STRATEGIES.map((item, index) => (
            <StrategyCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StrategyCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass p-6 md:p-10 rounded-[2.5rem] group border-foreground/5 relative overflow-hidden transition-all duration-500 hover:bg-primary/[0.03]"
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-10 flex items-center justify-between">
          <div className="w-16 h-16 rounded-2xl glass border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-[0_0_20px_rgba(20,15,12,0.05)]">
            {item.icon}
          </div>
          <span className="text-xs font-black tracking-widest text-primary/40 uppercase">
            {item.label}
          </span>
        </div>

        <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-foreground/50 leading-relaxed group-hover:text-foreground/70 transition-colors">
          {item.desc}
        </p>
      </div>

      <div className="absolute top-0 right-0 p-8 text-8xl font-black text-foreground/[0.08] -z-10 group-hover:text-primary/[0.12] transition-colors">
        {index + 1}
      </div>
    </motion.div>
  );
}
