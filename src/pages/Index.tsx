import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  const [isDark, setIsDark] = useState(true); // Set dark mode as default
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-primary">
              &lt;/&gt; Neeraj Shekhawat
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
                Contact
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-foreground hover:text-primary"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
