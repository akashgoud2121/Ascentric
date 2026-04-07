import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import { useLenis } from "../animations/SmoothScroll";

export default function Hero() {
  const { scrollY } = useScroll();
  const lenis = useLenis();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(href, {
        duration: 2.2,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        lock: true
      });
    }
  };

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden bg-background">
      {/* ⚡ 60 FPS Optimized Aurora Mesh Gradients */}
      <div className="absolute inset-0 -z-10 bg-background overflow-hidden pointer-events-none">
        <motion.div
// ... (lines 15-49)
          className="mesh-blob-gradient top-[40%] left-[30%] w-[40%] h-[40%]"
        />
      </div>

      <div className="max-w-7xl mx-auto container-padding text-center">


        {/* Foreground Headline */}
        <div className="relative z-10 w-full mb-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.9] mb-8 uppercase"
          >
            FOCUSED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary/80 to-foreground/20">
              ON GROWTH
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ opacity }}
            className="max-w-xl mx-auto text-sm md:text-base text-foreground/50 mb-10 font-medium leading-relaxed tracking-wide flex flex-wrap items-center justify-center gap-1"
          >
            We are a growth-first agency dedicated to elevating your digital presence. 
            <span className="inline-flex items-center gap-1 mx-1 text-foreground font-black group cursor-default">
              Ascent + Centric 
              <ArrowUpRight className="w-3.5 h-3.5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            our mission is your unmatched success.
          </motion.p>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Button 
            as="a"
            href="#contact"
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto h-16 group px-10 relative overflow-hidden shimmer font-black uppercase tracking-widest"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            <span className="relative z-10 flex items-center gap-2">
               Get in Touch
               <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
          
          <Button 
            variant="glass" 
            size="lg" 
            className="w-full sm:w-auto h-16 px-10 group bg-white/[0.02] border-white/10 hover:bg-white/[0.05]"
          >
             <span className="flex items-center gap-2">
                View Case Studies
                <ChevronRight className="w-4 h-4 text-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-foreground" />
             </span>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
