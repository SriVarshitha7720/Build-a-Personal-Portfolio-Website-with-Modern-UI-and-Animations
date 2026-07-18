import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#f0a202] selection:text-slate-950 transition-colors duration-300">
      {/* Floating Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer Wrapper */}
      <Footer />
    </div>
  );
}

export default App;
