import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

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
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-6 transition-all duration-300">
      {/* Centered Green Pill Nav Container */}
      <nav 
        className={`max-w-5xl mx-auto px-6 py-3 flex items-center justify-between rounded-full border shadow-lg transition-all duration-300 ${
          scrolled 
            ? 'bg-[#264933]/95 dark:bg-[#122619]/95 border-[#2d5337] dark:border-[#223d2b] backdrop-blur-md' 
            : 'bg-[#264933] dark:bg-[#122619] border-[#2d5337] dark:border-[#223d2b]'
        }`}
        aria-label="Main Navigation"
      >
        {/* Logo with gold highlight */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="relative text-xl font-bold font-display tracking-tight text-white flex items-center gap-1 group"
          id="nav-logo"
        >
          <span className="text-white">SN.</span>
          <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full border border-white/20 bg-white/10 text-[#f0a202]">
            Narla
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`relative text-xs font-semibold uppercase tracking-wider transition-colors py-2 ${
                      isActive ? 'text-[#f0a202]' : 'text-slate-300 hover:text-white'
                    }`}
                    id={`nav-link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="w-[1px] h-5 bg-white/25"></div>

          {/* Theme Toggle Button inside navbar */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-slate-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 border border-white/10 cursor-pointer shadow-inner"
            aria-label="Toggle theme"
            id="nav-theme-toggle"
          >
            {theme === 'light' ? (
              <Moon className="w-3.5 h-3.5 text-[#f0a202]" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-[#f0a202]" />
            )}
          </motion.button>
          
          <motion.a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 px-5 py-2 text-xs font-semibold rounded-full bg-white hover:bg-slate-100 text-[#264933] transition-all cursor-pointer shadow-sm"
            id="nav-cta"
          >
            Contact Me
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme Switcher */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-slate-350 bg-white/10 rounded-full border border-white/10 cursor-pointer"
            aria-label="Toggle theme"
            id="nav-mobile-theme-toggle"
          >
            {theme === 'light' ? <Moon className="w-3.5 h-3.5 text-[#f0a202]" /> : <Sun className="w-3.5 h-3.5 text-[#f0a202]" />}
          </motion.button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none rounded-lg cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            id="nav-mobile-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Matches Green Pill backdrop) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-sm mx-auto rounded-3xl border border-[#2d5337] dark:border-[#223d2b] bg-[#264933] dark:bg-[#122619] overflow-hidden shadow-xl"
            id="nav-mobile-menu"
          >
            <ul className="px-6 py-6 space-y-4 text-left">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={`block py-2 text-sm font-semibold tracking-wide uppercase transition-colors ${
                        isActive ? 'text-[#f0a202] pl-2 border-l-2 border-[#f0a202]' : 'text-slate-300 pl-0'
                      }`}
                      id={`nav-mobile-link-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
              <li className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="flex items-center justify-center gap-1 w-full py-3 text-center text-xs font-semibold rounded-full bg-white hover:bg-slate-100 text-[#264933] transition-all cursor-pointer shadow-md"
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
