import React from 'react';
import TechIcon from './TechIcon';

const skillGroups = [
  {
    title: 'Frontend craft',
    icon: 'code',
    summary: 'Interfaces that are responsive, accessible, and easy to scan.',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive UI', 'PWA'],
  },
  {
    title: 'Backend systems',
    icon: 'server',
    summary: 'APIs and data layers that support real product workflows.',
    items: ['Node.js', 'Express.js', 'Nest.js', 'REST APIs', 'JWT', 'MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Shipping workflow',
    icon: 'workflow',
    summary: 'Tools for collaboration, API testing, containers, and delivery.',
    items: ['Git', 'GitHub', 'Docker', 'AWS', 'Postman', 'CI/CD'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl text-center sm:text-left">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">Core stack</p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            A practical toolkit for polished, production-minded web apps.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <article key={group.title} className="rounded-[1.5rem] border border-black/10 bg-white/70 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-premium dark:border-white/10 dark:bg-white/5 sm:rounded-[2rem] sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-zinc-950 text-amber-300 dark:bg-white dark:text-zinc-950">
                    <TechIcon type={group.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-xl font-bold sm:text-2xl">{group.title}</h3>
                </div>
                <span className="rounded-full bg-amber-200 px-3 py-1 text-xs font-extrabold text-zinc-950 dark:bg-amber-300">0{index + 1}</span>
              </div>
              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">{group.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-3 py-2 text-sm font-bold text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                    <TechIcon name={skill} className="h-4 w-4 text-amber-700 dark:text-amber-300" />
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
