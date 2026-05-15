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
    <div className="min-h-screen overflow-hidden bg-[#f5f0e8] text-zinc-950 selection:bg-amber-300/50 dark:bg-[#07080d] dark:text-white">
      <div
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(20,20,20,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,20,20,0.06)_1px,transparent_1px)] bg-[size:56px_56px] opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_78%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.075)_1px,transparent_1px)]"
        aria-hidden="true"
      ></div>
      <div
        className="pointer-events-none fixed -left-32 top-0 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl dark:bg-amber-400/10"
        aria-hidden="true"
      ></div>
      <div
        className="pointer-events-none fixed -right-36 top-72 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-400/10"
        aria-hidden="true"
      ></div>
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
