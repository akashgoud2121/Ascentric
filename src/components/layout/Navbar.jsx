import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import { useLenis } from "../animations/SmoothScroll";
import { cn } from "../../lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Strategy", href: "#strategy" },
  { name: "Workflow", href: "#workflow" },
  { name: "Projects", href: "#portfolio" },
];

const HamburgerIcon = ({ isOpen }) => (
  <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5 relative">
    <motion.span
      animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-0.5 bg-foreground rounded-full"
    />
    <motion.span
      animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
       transition={{ duration: 0.3 }}
      className="w-full h-0.5 bg-foreground rounded-full"
    />
    <motion.span
      animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
       transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-0.5 bg-foreground rounded-full"
    />
  </div>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (!lenis) return;
    
    lenis.scrollTo(href, {
      duration: 2.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      lock: true
    });
    setMobileMenuOpen(false);
  };

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
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[10002] transition-all duration-500 py-6 px-4 md:px-8",
          isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "py-8"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative h-12">
          {/* Logo - Hide when mobile menu is open to prevent clash */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: mobileMenuOpen ? 0 : 1, 
              x: 0,
              pointerEvents: mobileMenuOpen ? "none" : "auto"
            }}
            className="relative z-[10010] text-2xl font-black tracking-tighter"
          >
            <span className="text-primary italic">as</span>
            <span className="text-foreground/80 lowercase">centric</span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-10 glass rounded-full px-10 py-3 border border-border bg-background/50 shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  whileHover={{ scale: 1.05, y: -1 }}
                  className="text-xs font-black hover:text-primary transition-all duration-300 uppercase tracking-[0.15em]"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA & Theme - Elevated Z-Index */}
          <div className="relative z-[10010] flex items-center gap-4">
            <ThemeToggle />
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden sm:block"
            >
              <Button 
                as="a"
                href="#contact"
                variant="primary" 
                size="sm" 
                className="flex items-center gap-2 group h-12 px-6 text-xs uppercase tracking-widest font-black shimmer relative overflow-hidden"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                <Mail className="w-4 h-4 transition-transform group-hover:scale-125" />
                Get in Touch
              </Button>
            </motion.div>

            {/* Unified Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden glass p-3 rounded-full text-foreground border-foreground/10 hover:bg-foreground/5 transition-all active:scale-90"
            >
              <HamburgerIcon isOpen={mobileMenuOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - BREAKOUT: Sibling to nav, not a child! */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ 
              opacity: 1, 
              clipPath: "circle(150% at top right)",
              transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
            exit={{ 
              opacity: 0, 
              clipPath: "circle(0% at top right)",
              transition: {
                duration: 0.6,
                ease: "easeInOut"
              }
            }}
            className="fixed inset-0 z-[10001] bg-background text-foreground flex flex-col items-center justify-center md:hidden backdrop-blur-3xl"
          >
            <motion.div 
               className="flex flex-col items-center gap-8"
               initial="closed"
               animate="open"
               variants={{
                 open: {
                   transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                 },
                 closed: {
                   transition: { staggerChildren: 0.05, staggerDirection: -1 }
                 }
               }}
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  variants={{
                    open: { opacity: 1, y: 0, filter: "blur(0px)" },
                    closed: { opacity: 0, y: 20, filter: "blur(10px)" }
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl font-black tracking-tighter hover:text-primary transition-all hover:italic text-foreground/80 hover:text-foreground"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                variants={{
                  open: { opacity: 1, scale: 1 },
                  closed: { opacity: 0, scale: 0.9 }
                }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-full px-12 mt-12 max-w-sm text-center"
              >
                <Button 
                  as="a"
                  href="#contact"
                  variant="primary" 
                  size="lg" 
                  className="w-full h-20 text-xl font-black uppercase tracking-widest shimmer shadow-2xl shadow-primary/20"
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
