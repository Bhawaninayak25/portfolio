import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Home from './components/HomeSection';
import About from './components/AboutSection';
import Skills from './components/SkillsSection';
import Projects from './components/ProjectsSection';
import Experience from './components/ExperienceSection';
import Testimonials from './components/TestimonialsSection';
import Contact from './components/ContactSection';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#020916] text-white selection:bg-cyan-300/30">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.16),transparent_18%)] opacity-90"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_18%),linear-gradient(90deg,rgba(255,255,255,0.03),transparent_12%)]"
        aria-hidden="true"
      />
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
