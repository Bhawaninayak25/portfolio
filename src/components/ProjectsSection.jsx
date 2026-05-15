import React, { useMemo, useState } from 'react';
import TechIcon from './TechIcon';
import dashboardImage from '../assets/project-dashboard.jpg';
import teamImage from '../assets/project-team.jpg';
import commerceImage from '../assets/project-commerce.jpg';
import chatImage from '../assets/project-chat.jpg';

const projects = [
  {
    title: 'Portfolio Website',
    category: 'Frontend',
    description: 'A modern personal portfolio built with React, polished UI systems, and recruiter-first storytelling.',
    stack: ['React', 'CSS', 'Vercel', 'UI'],
    outcome: 'Sharper personal brand with fast access to skills, projects, and contact paths.',
    metric: 'Personal brand',
    image: dashboardImage,
    liveLink: 'https://portfoliobhawani.vercel.app/',
    repoLink: 'https://github.com/Bhawaninayak25/portfolio.git',
  },
  {
    title: 'Task Manager App',
    category: 'Full Stack',
    description: 'A productivity application with task flows, REST APIs, persistent data, and clean management UX.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    outcome: 'Demonstrates CRUD flows, backend integration, and practical product decisions.',
    metric: 'MERN build',
    image: teamImage,
    liveLink: '',
    repoLink: 'https://github.com/yourusername/task-manager',
  },
  {
    title: 'E-commerce Website',
    category: 'Full Stack',
    description: 'A commerce-focused interface for browsing, checkout structure, and responsive buying journeys.',
    stack: ['React', 'PostgreSQL', 'Docker'],
    outcome: 'Shows real-world product architecture, data modeling, and deployment readiness.',
    metric: 'Commerce UX',
    image: commerceImage,
    liveLink: '',
    repoLink: 'https://github.com/yourusername/ecommerce',
  },
  {
    title: 'Developer Chat Experience',
    category: 'Interaction',
    description: 'A messaging-style interface with lightweight conversation logic and polished contact interactions.',
    stack: ['React', 'JavaScript', 'UX'],
    outcome: 'Highlights interaction design, UX clarity, and playful communication patterns.',
    metric: 'Live UX',
    image: chatImage,
    liveLink: '',
    repoLink: 'https://github.com/yourusername/chat-interface',
  },
];

const filters = ['All', 'Frontend', 'Full Stack', 'Interaction'];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter]
  );

  return (
    <section id="projects" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl text-center sm:text-left">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">Featured work</p>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Case-study style projects with clear outcomes.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-start lg:justify-end">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-extrabold transition ${
                  activeFilter === filter
                    ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950'
                    : 'border border-black/10 bg-white/70 text-zinc-600 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 xl:grid-cols-2">
          {visibleProjects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/70 shadow-sm transition hover:-translate-y-1 hover:shadow-premium dark:border-white/10 dark:bg-white/5 sm:rounded-[2rem]">
              <div className="relative min-h-56 overflow-hidden bg-zinc-950 sm:min-h-72">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-56 w-full object-cover opacity-85 transition duration-500 hover:scale-105 sm:h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent"></div>
                <span className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-sm font-extrabold text-zinc-950 shadow-lg dark:bg-zinc-950/75 dark:text-white">
                  {project.metric}
                </span>
                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((item) => (
                    <span key={`${project.title}-${item}`} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-2 text-xs font-bold text-white backdrop-blur">
                      <TechIcon name={item} className="h-4 w-4 text-amber-300" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">{project.category}</p>
                <h3 className="font-display text-3xl font-bold">{project.title}</h3>
                <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">{project.description}</p>
                <div className="mt-6 rounded-2xl border-l-4 border-amber-400 bg-black/5 p-4 dark:bg-white/5">
                  <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">Impact</span>
                  <p className="mt-2 font-semibold leading-7 text-zinc-700 dark:text-zinc-300">{project.outcome}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm font-bold text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                      <TechIcon name={item} className="h-4 w-4 text-amber-700 dark:text-amber-300" />
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  {project.liveLink ? (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-zinc-950 px-5 py-3 text-center font-extrabold text-white dark:bg-white dark:text-zinc-950">
                      Live Demo
                    </a>
                  ) : (
                    <span className="rounded-2xl border border-black/10 bg-white/60 px-5 py-3 text-center font-extrabold text-zinc-500 dark:border-white/10 dark:bg-white/5">Demo Coming</span>
                  )}
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-black/10 bg-white/70 px-5 py-3 text-center font-extrabold text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-white">
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
