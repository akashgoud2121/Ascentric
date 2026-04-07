import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import { cn } from "../../lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Strategy", href: "#strategy" },
  { name: "Workflow", href: "#workflow" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-4 md:px-8",
        isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/[0.05]" : "py-8"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative h-12">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-10 text-2xl font-black tracking-tighter"
        >
          <span className="text-primary italic">as</span>
          <span className="text-foreground/80 lowercase">centric</span>
        </motion.a>

        {/* Desktop Links - Perfectly Centered */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-10 glass rounded-full px-10 py-3 border border-white/[0.05] bg-white/[0.02] shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05, y: -1 }}
                className="text-xs font-black hover:text-primary transition-all duration-300 uppercase tracking-[0.15em]"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>

        {/* CTA & Theme */}
        <div className="relative z-10 flex items-center gap-4">
          <ThemeToggle />
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:block"
          >
            <Button variant="primary" size="sm" className="flex items-center gap-2 group h-12 px-6 text-xs uppercase tracking-widest font-black">
              <Mail className="w-4 h-4 group-hover:animate-bounce" />
              Get in Touch
            </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden glass p-3 rounded-full text-foreground hover:bg-foreground/5 transition-all active:scale-90"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(32px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[55] bg-background/95 flex flex-col items-center justify-center gap-8 md:hidden"
          >
             <button 
               onClick={() => setMobileMenuOpen(false)}
               className="absolute top-10 right-10 p-4 rounded-full glass"
            >
               <X className="w-8 h-8" />
            </button>

            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black tracking-tight hover:text-primary transition-colors hover:italic"
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full px-12 mt-8 max-w-sm text-center"
            >
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full h-20 text-xl font-black uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hire Us
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
