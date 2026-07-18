import React, { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Header = ({ theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 px-4 py-4 backdrop-blur-xl lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3 no-underline">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 font-display text-sm font-bold text-cyan-300 shadow-lg shadow-cyan-500/10">
            BS
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-tight text-white">Bhawani Shankar</span>
            <span className="hidden text-[0.68rem] uppercase tracking-[0.18em] text-slate-400 sm:block">
              Full Stack Developer
            </span>
          </span>
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
          </span>
        </button>

        <nav
          className={`absolute left-4 right-4 top-[calc(100%+10px)] rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-2xl lg:static lg:flex lg:items-center lg:gap-3 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
            menuOpen ? 'grid gap-2' : 'hidden lg:flex'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeSection === item.href.slice(1)
                  ? 'bg-cyan-300 text-slate-950'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
