import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'vcniti-experience', 'about', 'experience', 'best-works', 'services', 'work', 'contact'];
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(targetId, true);
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(targetId.replace('#', ''));
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#vcniti-experience', label: 'Internship', id: 'vcniti-experience' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#experience', label: 'Career', id: 'experience' },
    { href: '#best-works', label: 'BestWorks', id: 'best-works', highlight: true },
    { href: '#services', label: 'Skills', id: 'services' },
    { href: '#work', label: 'Work', id: 'work' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className={`
          flex items-center justify-between
          px-4 md:px-3 py-2.5
          rounded-full
          transition-all duration-500
          w-full max-w-5xl
          ${isScrolled || isMenuOpen
            ? 'bg-charcoal/70 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'bg-white/[0.04] backdrop-blur-xl border border-white/[0.06]'
          }
        `}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-anton text-2xl tracking-tight text-white pl-3 shrink-0"
        >
          Gangadhara K S<span className="text-golden">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-0.5 mx-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`
                relative px-3.5 py-1.5 text-sm font-satoshi font-medium rounded-full transition-all duration-200
                ${activeSection === item.id
                  ? 'text-white'
                  : 'text-white/40 hover:text-white/80'
                }
              `}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.06]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {item.highlight ? (
                  <span className="relative inline-block">
                    <span className="relative z-10 text-charcoal font-bold">{item.label}</span>
                    <span className="absolute -inset-x-2 -inset-y-1 bg-golden -rotate-2 z-0" />
                  </span>
                ) : item.label}
              </span>
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://drive.google.com/file/d/1xDec_Z_GDbDUkpbUFcN65tkLab9PHMmY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-sm font-satoshi font-medium text-white/40 hover:text-white/80 transition-colors px-3"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 bg-golden text-charcoal text-sm font-satoshi font-bold rounded-full hover:bg-golden/90 hover:shadow-[0_0_20px_rgba(255,225,124,0.3)] transition-all duration-300"
          >
            Let's Talk
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-[72px] left-4 right-4 bg-charcoal/80 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.5)] md:hidden overflow-hidden"
          >
            <div className="p-5 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`
                    px-4 py-3 text-base font-satoshi font-medium transition-all duration-200 rounded-xl
                    ${activeSection === item.id
                      ? 'text-golden bg-white/[0.06]'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                    }
                  `}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.highlight ? (
                    <span className="relative inline-block">
                      <span className="relative z-10 text-charcoal font-bold">{item.label}</span>
                      <span className="absolute -inset-x-2 -inset-y-1 bg-golden -rotate-2 z-0" />
                    </span>
                  ) : item.label}
                </a>
              ))}
              <div className="flex gap-3 pt-4 border-t border-white/[0.06] mt-3">
                <a
                  href="https://drive.google.com/file/d/1xDec_Z_GDbDUkpbUFcN65tkLab9PHMmY/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 text-sm font-satoshi font-medium text-white/60 border border-white/10 rounded-full hover:bg-white/5 transition-colors"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex-1 text-center py-3 text-sm font-satoshi font-bold bg-golden text-charcoal rounded-full hover:bg-golden/90 transition-colors"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;