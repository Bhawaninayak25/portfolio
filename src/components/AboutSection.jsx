import React from 'react';
import profileImage from '../assets/acc.jpg';

const strengths = [
  ['Product UI', 'Modern layouts with hierarchy, spacing, and mobile-first responsiveness.'],
  ['Full Stack', 'React frontends connected with Node, Nest, SQL, and MongoDB systems.'],
  ['Delivery', 'GitHub, Docker, Postman, and cloud-friendly release habits.'],
];

const AboutSection = () => {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">About me</p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Design-aware engineering for ambitious product goals.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              I&apos;m <strong className="text-zinc-950 dark:text-white">Bhawani Shankar</strong>, a full stack developer based in Bikaner and a BCA graduate from Engineering College Bikaner. I build responsive web apps with MERN, SQL databases, and practical DevOps tooling.
            </p>
            <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              My sweet spot is where product design and engineering meet: premium interfaces, simple APIs, and deployments that are ready for real users.
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {strengths.map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-black/10 bg-white/65 p-5 dark:border-white/10 dark:bg-white/5">
                  <strong className="font-display text-xl">{title}</strong>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{text}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 p-3 shadow-premium dark:border-white/10 dark:bg-white/5">
            <img src={profileImage} alt="Bhawani Shankar workspace portrait" className="h-full min-h-[380px] w-full rounded-[1.35rem] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
