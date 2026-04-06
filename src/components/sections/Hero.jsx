import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const drift1 = useTransform(scrollY, [0, 1000], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Aurora Mesh Gradients */}
      <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="mesh-blob top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#f3e8ff]" // Lavender
        />
        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [50, -50, 50],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="mesh-blob bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#fff7ed]" // Silk/Peach
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="mesh-blob top-[30%] left-[20%] w-[30%] h-[30%] bg-accent/20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 glass px-6 py-2.5 rounded-full mb-10 text-sm font-bold tracking-tight"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-foreground/80">Available for new projects</span>
        </motion.div>

        {/* Subtle Vertical Divider */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none select-none">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-foreground/5 to-transparent" />
        </div>

        {/* Foreground Headline */}
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-12"
          >
            FOCUSED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground/70 to-primary uppercase">
              ON GROWTH
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ opacity }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/60 mb-14 font-medium leading-relaxed"
          >
            We are a growth-first agency dedicated to elevating your digital presence. 
            Ascent + Centric — our mission is your unmatched success.
          </motion.p>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto h-16 group px-10">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="glass" size="lg" className="w-full sm:w-auto h-16 px-10">
            View Case Studies
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
