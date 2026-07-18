import React from 'react';
import profileImage from '../assets/profile.jpg';

const highlights = [
  { icon: '🚀', title: 'Modern UI', description: 'Polished SaaS-style interfaces designed for conversion.' },
  { icon: '⚙️', title: 'Reliable engineering', description: 'React and Node systems built for speed and scale.' },
  { icon: '💡', title: 'Product thinking', description: 'UX-first pages that prioritize clarity and trust.' },
];

const stats = [
  { value: '8+', label: 'Projects Built' },
  { value: '15+', label: 'Technologies' },
  { value: '3+', label: 'Years Experience' },
  { value: '40+', label: 'GitHub Stars' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Bhawaninayak25' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Email', href: 'mailto:example@example.com' },
];

const HomeSection = () => {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pb-32 lg:pt-28">
      <div
        className="pointer-events-none absolute left-0 top-0 h-[640px] w-full bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_20%_30%,rgba(236,72,153,0.16),transparent_12%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div className="relative z-10 animate-slide-right">
            <p className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200 shadow-[0_0_0_1px_rgba(56,189,248,0.08)]">
              <span className="animate-pulse">•</span> Full Stack Developer
            </p>

            <h1 className="mt-8 max-w-4xl font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-cyan-300">Bhawani Shankar</span>
            </h1>
            <p className="mt-4 text-2xl font-semibold text-cyan-200">Software Engineer (MERN)</p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Full Stack Developer from Bikaner. I build modern SaaS-style applications with polished front-ends and dependable backend workflows.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:border-cyan-300 hover:bg-white/10"
              >
                Contact me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="font-semibold text-white">Follow me:</span>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <article key={stat.label} className="space-y-3 rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl transition duration-500 hover:-translate-y-1">
                  <strong className="block text-4xl font-bold">{stat.value}</strong>
                  <span className="text-slate-400">{stat.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="relative z-10 animate-slide-left">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_40px_120px_rgba(8,145,178,0.14)] backdrop-blur-xl sm:p-5">
              <img src={profileImage} alt="Bhawani Shankar" className="h-[420px] w-full rounded-[1.6rem] object-cover transition duration-700 hover:scale-105" />
              <div className="mt-6 rounded-[1.75rem] bg-slate-950/90 p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.45)]">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Software Engineer</p>
                <h2 className="mt-3 text-3xl font-semibold">Bhawani Shankar</h2>
                <p className="mt-4 leading-7 text-slate-300">
                  Driven by design-led development, with experience in SaaS landing pages, full-stack builds, and production deployment.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/5 p-4 text-sm text-slate-300">
                    <span className="block text-sm uppercase tracking-[0.22em] text-cyan-300">Role</span>
                    <strong className="mt-2 block text-lg text-white">Software Engineer</strong>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-4 text-sm text-slate-300">
                    <span className="block text-sm uppercase tracking-[0.22em] text-cyan-300">Location</span>
                    <strong className="mt-2 block text-lg text-white">Bikaner, Rajasthan</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 text-white shadow-[0_24px_80px_rgba(8,145,178,0.12)] backdrop-blur-xl transition duration-500 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-white">{item.icon} {item.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
