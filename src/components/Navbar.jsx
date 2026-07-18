import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled
      setScrolled(window.scrollY > 20);

      // Section tracker logic
      const sections = navItems.map(item => document.getElementById(item.href.replace('#', '')));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href.replace('#', ''));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(href.replace('#', ''));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" aria-label="Main Navigation">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="relative text-2xl font-bold font-display tracking-tight text-white flex items-center gap-2 group"
          id="nav-logo"
        >
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all">
            SN.
          </span>
          <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full border border-slate-700 bg-slate-900/60 text-slate-400">
            Portfolio
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`relative text-sm font-medium transition-colors hover:text-white py-2 ${
                      isActive ? 'text-white font-semibold' : 'text-slate-400'
                    }`}
                    id={`nav-link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white border border-purple-500/30 rounded-full hover:bg-purple-500/10 hover:border-purple-500/60 transition-all cursor-pointer"
            id="nav-cta"
          >
            Hire Me
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg transition-colors cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          id="nav-mobile-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-lg overflow-hidden"
            id="nav-mobile-menu"
          >
            <ul className="px-6 py-6 space-y-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={`block py-2 text-base font-medium transition-colors ${
                        isActive ? 'text-purple-400 font-semibold pl-2 border-l-2 border-purple-500' : 'text-slate-400 pl-0'
                      }`}
                      id={`nav-mobile-link-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
              <li className="pt-4 border-t border-slate-900">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all cursor-pointer"
                  id="nav-mobile-cta"
                >
                  Contact Me
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
