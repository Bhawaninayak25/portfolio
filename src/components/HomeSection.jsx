import React from 'react';
import profileImage from '../assets/profile.jpg';
import TechIcon from './TechIcon';

const highlights = [
  { icon: 'react', text: 'React interfaces with clean responsive UI' },
  { icon: 'server', text: 'Node, Express, Nest.js APIs and databases' },
  { icon: 'workflow', text: 'Docker, GitHub, Postman and deploy-ready workflow' },
];

const stats = [
  { value: '2+', label: 'Years experience' },
  { value: '8+', label: 'Projects shipped' },
  { value: '15+', label: 'Tools in workflow' },
];

const HomeSection = () => {
  return (
    <section id="home" className="px-4 pb-14 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-bold text-zinc-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.16)]"></span>
            Available for full stack roles
          </div>

          <h1 className="max-w-5xl font-display text-4xl font-bold leading-[0.98] tracking-tight text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Premium web products with sharp UI and reliable code.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            I&apos;m <strong className="text-zinc-950 dark:text-white">Bhawani Shankar</strong>, a full stack developer building polished React experiences, practical backend systems, and deployment-ready web apps.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="rounded-2xl bg-zinc-950 px-6 py-4 text-center font-extrabold text-white shadow-premium transition hover:-translate-y-1 dark:bg-white dark:text-zinc-950">
              View Projects
            </a>
            <a href="#contact" className="rounded-2xl border border-black/10 bg-white/75 px-6 py-4 text-center font-extrabold text-zinc-950 transition hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
              Chat Like Friend
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.text} className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white/65 p-4 text-sm font-semibold leading-6 text-zinc-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-amber-200 text-zinc-950 dark:bg-amber-300">
                  <TechIcon type={item.icon} className="h-5 w-5" />
                </span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up xl:justify-self-end">
          <div className="absolute -left-5 top-10 hidden rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-700 shadow-premium dark:border-white/10 dark:bg-zinc-950/80 dark:text-zinc-200 sm:block">
            React / Node / Docker
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 p-3 shadow-premium dark:border-white/10 dark:bg-white/5">
            <img src={profileImage} alt="Bhawani Shankar" className="h-[360px] w-full rounded-[1.35rem] object-cover sm:h-[500px] xl:h-[540px] xl:w-[430px]" />
            <div className="p-5">
              <p className="font-display text-2xl font-bold">Frontend polish, backend clarity.</p>
              <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-300">
                A recruiter-ready snapshot of product thinking, clean implementation, and shipping mindset.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl gap-3 sm:grid-cols-3">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <strong className="block font-display text-4xl font-bold">{stat.value}</strong>
            <span className="mt-2 block text-zinc-600 dark:text-zinc-300">{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;
