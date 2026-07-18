import React from 'react';

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-200/60 bg-white/35 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        
        {/* Logo and branding */}
        <div className="flex items-center gap-2">
          <span className="font-bold font-display text-lg text-slate-800">SN.</span>
          <span className="text-slate-400 font-mono text-xs">| Personal Portfolio</span>
        </div>

        {/* Copyright notice */}
        <div className="text-slate-400 font-mono text-xs text-center md:text-left">
          &copy; {new Date().getFullYear()} Srivarshitha Narla. All rights reserved.
        </div>

        {/* Back to top CTA */}
        <a 
          href="#home" 
          onClick={handleScrollToTop}
          className="text-slate-500 hover:text-purple-600 font-mono text-xs transition-colors cursor-pointer"
        >
          Back To Top &uarr;
        </a>

      </div>
    </footer>
  );
}
