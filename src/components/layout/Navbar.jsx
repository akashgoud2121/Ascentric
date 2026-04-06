import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import { cn } from "../../lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Strategy", href: "#strategy" },
  { name: "Portfolio", href: "#portfolio" },
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
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-10">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-[60] text-2xl font-black tracking-tighter"
        >
          <span className="text-primary italic">as</span>
          <span className="text-foreground/80 lowercase">centric</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-10 glass rounded-full px-8 py-3 max-w-fit mx-auto border-foreground/[0.05] bg-background/20 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              className="text-sm font-bold hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* CTA & Theme */}
        <div className="relative z-[60] flex items-center gap-4">
          <ThemeToggle />
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block"
          >
            <Button variant="primary" size="sm" className="flex items-center gap-2 group h-12">
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
              className="w-full px-12 mt-8"
            >
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full h-20 text-xl font-black uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
