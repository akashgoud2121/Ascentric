import { useLenis } from "../animations/SmoothScroll";
import { Zap } from "lucide-react";

export default function Footer() {
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

  return (
    <footer className="py-20 border-t border-border bg-background overflow-hidden relative">
      {/* Background Highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl font-black mb-4 tracking-tighter italic text-primary lowercase">
          ascentric
        </h2>
        <p className="text-foreground/40 max-w-sm mb-12 text-sm font-medium">
          Transforming businesses from Google Maps to global brand ecosystems.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-xs font-black text-foreground/30 mb-12 uppercase tracking-[0.2em]">
          <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-primary transition-colors">Services</a>
          <a href="#workflow" onClick={(e) => handleNavClick(e, "#workflow")} className="hover:text-primary transition-colors">Workflow</a>
          <a href="#strategy" onClick={(e) => handleNavClick(e, "#strategy")} className="hover:text-primary transition-colors">Strategy</a>
          <a href="#portfolio" onClick={(e) => handleNavClick(e, "#portfolio")} className="hover:text-primary transition-colors">Projects</a>
          <a href="#advantage" onClick={(e) => handleNavClick(e, "#advantage")} className="hover:text-primary transition-colors">Why Us</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="hover:text-primary transition-colors text-primary/60">Hire Us</a>
        </div>

        <div className="w-full h-px bg-border max-w-4xl mb-12" />

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 text-[10px] font-black uppercase tracking-widest text-foreground/20">
          <p>© 2026 ascentric. all rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
