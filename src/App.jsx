import SmoothScroll from "./components/animations/SmoothScroll";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Strategy from "./components/sections/Strategy";
import Process from "./components/sections/Process";
import Portfolio from "./components/sections/Portfolio";
import Comparison from "./components/sections/Comparison";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
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

          <Footer />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
