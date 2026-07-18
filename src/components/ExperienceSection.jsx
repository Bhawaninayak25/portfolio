import React from 'react';

const timeline = [
  {
    period: 'April 2026 - Present',
    role: 'Software Engineer',
    company: 'Mysathi Tech Pvt Ltd',
    description: 'Working on enterprise-grade React frontends, Node backend services, and production-ready deployments.',
  },
  {
    period: 'Sep 2025 - Mar 2026',
    role: 'Training',
    company: 'Axixa Technologies',
    description: 'Completed hands-on software training focused on web development, APIs, and practical engineering workflows.',
  },
  {
    period: '2024 - 2025',
    role: 'Full Stack Developer',
    company: 'Independent Projects',
    description: 'Built React interfaces, Node/Nest APIs, database-backed applications, and deployment-ready workflows.',
  },
  {
    period: '2023 - 2024',
    role: 'Frontend Developer',
    company: 'Portfolio and Product Builds',
    description: 'Created responsive websites, refined UI systems, and practiced recruiter-focused product storytelling.',
  },
  {
    period: 'Education',
    role: 'Bachelor of Computer Applications',
    company: 'Engineering College Bikaner',
    description: 'Built a foundation in programming, databases, web development, and software problem solving.',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="animate-fade-up px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-300">Experience</p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            A clean timeline from fundamentals to full stack delivery.
          </h2>
        </div>

        <div className="relative mt-10 grid gap-4 before:absolute before:left-4 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-white/10 sm:before:block">
          {timeline.map((item, index) => (
            <article key={`${item.period}-${item.role}`} className="animate-fade-up relative grid gap-4 sm:grid-cols-[2rem_1fr]">
              <span className="relative z-10 mt-6 hidden h-8 w-8 rounded-full border-4 border-slate-950 bg-cyan-300 shadow-[0_0_0_8px_rgba(34,211,238,0.16)] sm:block" />
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-[0_24px_80px_rgba(8,145,178,0.14)] sm:p-8">
                <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-cyan-300">{item.period}</span>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">{item.role}</h3>
                <strong className="mt-1 block text-cyan-200">{item.company}</strong>
                <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
