import SmoothScroll from "./components/animations/SmoothScroll";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Strategy from "./components/sections/Strategy";
import Process from "./components/sections/Process";
import Portfolio from "./components/sections/Portfolio";
import Comparison from "./components/sections/Comparison";
import Contact from "./components/sections/Contact";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500">
          <div className="noise-overlay" />
          <Navbar />
          
          <main>
            <Hero />
            <Services />
            <Strategy />
            <Process />
            <Portfolio />
            <Comparison />
            <Contact />
          </main>

          <footer className="py-20 border-t border-border bg-background overflow-hidden relative">
            {/* Background Highlight */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
              <h2 className="text-3xl font-black mb-4 tracking-tighter italic text-primary lowercase">
                ascentric
              </h2>
              <p className="text-foreground/40 max-w-sm mb-12">
                Transforming businesses from Google Maps to global brand ecosystems.
              </p>
              
              <div className="flex gap-10 text-sm font-bold text-foreground/20 mb-12">
                <a href="#services" className="hover:text-primary transition-colors">Services</a>
                <a href="#workflow" className="hover:text-primary transition-colors">Workflow</a>
                <a href="#strategy" className="hover:text-primary transition-colors">Strategy</a>
                <a href="#portfolio" className="hover:text-primary transition-colors">Projects</a>
                <a href="#advantage" className="hover:text-primary transition-colors">Why Us</a>
                <a href="#contact" className="hover:text-primary transition-colors">Hire Us</a>
              </div>

              <div className="w-full h-px bg-white/5 mb-12" />

              <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 text-xs font-medium text-foreground/40">
                <p>© 2026 ascentric. All rights reserved.</p>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-foreground">Privacy Policy</a>
                  <a href="#" className="hover:text-foreground">Terms of Service</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
