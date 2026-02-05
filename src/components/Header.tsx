import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'vcniti-experience', 'about', 'experience', 'services', 'work', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Me', id: 'home' },
    { href: '#vcniti-experience', label: 'Internship', id: 'vcniti-experience' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#experience', label: 'CV', id: 'experience' },
    { href: '#services', label: 'Skills', id: 'services' },
    { href: '#work', label: 'Work', id: 'work' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-0 flex justify-center`}>
      <nav
        className={`
          flex items-center justify-between 
          md:px-2 md:py-2 pl-4 pr-2 py-2
          rounded-full 
          transition-all duration-300
          ${isScrolled || isMenuOpen ? 'bg-background/80 backdrop-blur-md border border-white/10 shadow-lg w-full md:w-auto md:min-w-[320px]' : 'bg-transparent border-transparent w-full md:w-auto'}
        `}
      >
        {/* Mobile Logo / Text */}
        <div
          className="text-lg font-bold font-display tracking-tight md:hidden mr-4 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          GK
        </div>

        {/* Desktop Navigation pills */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`
                relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200
                ${activeSection === item.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}
              `}
              onClick={() => setActiveSection(item.id)}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-primary/10 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">

          <a href="https://drive.google.com/file/d/1nR4CiBHpFhhQk5sPqsinCNcN7TAxlGDz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hidden md:block ml-2">
            <Button variant="ghost" size="sm" className="rounded-full text-xs font-medium border border-border hover:bg-secondary">
              Resume
            </Button>
          </a>
          <div className="scale-75 origin-right">
            <ModeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full h-8 w-8 ml-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-4 right-4 p-4 rounded-xl glass-panel md:hidden flex flex-col space-y-2 border shadow-2xl origin-top"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`
                   px-4 py-3 rounded-lg text-sm font-medium transition-colors
                   ${activeSection === item.id ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-secondary/50'}
                `}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <a href="https://drive.google.com/file/d/1nR4CiBHpFhhQk5sPqsinCNcN7TAxlGDz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full mt-2 rounded-lg" size="sm">
                View Resume
              </Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;