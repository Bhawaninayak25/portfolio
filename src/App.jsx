import React from 'react';
import './App.css';
import './portfolio-theme.css';
import Header from './components/header';
import Home from './components/HomeSection';
import About from './components/AboutSection';
import Skills from './components/SkillsSection';
import Projects from './components/ProjectsSection';
import Contact from './components/ContactSection';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
