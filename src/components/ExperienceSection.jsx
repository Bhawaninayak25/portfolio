import React from 'react';

const timeline = [
  {
    period: '2024 - Present',
    role: 'Full Stack Developer',
    company: 'Independent Projects',
    description: 'Building React interfaces, Node/Nest APIs, database-backed applications, and deployment-ready workflows.',
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
    <section id="experience" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">Experience</p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            A clean timeline from fundamentals to full stack delivery.
          </h2>
        </div>

        <div className="relative mt-10 grid gap-4 before:absolute before:left-4 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-black/10 dark:before:bg-white/10 sm:before:block">
          {timeline.map((item) => (
            <article key={`${item.period}-${item.role}`} className="relative grid gap-4 sm:grid-cols-[2rem_1fr]">
              <span className="relative z-10 mt-6 hidden h-8 w-8 rounded-full border-4 border-[#f5f0e8] bg-amber-400 shadow-[0_0_0_8px_rgba(251,191,36,0.16)] dark:border-[#07080d] sm:block"></span>
              <div className="rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
                <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">{item.period}</span>
                <h3 className="mt-3 font-display text-2xl font-bold">{item.role}</h3>
                <strong className="mt-1 block text-cyan-700 dark:text-cyan-300">{item.company}</strong>
                <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
