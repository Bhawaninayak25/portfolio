import React from 'react';
import profileImage from '../assets/acc.jpg';

const strengths = [
  ['Modern UI', 'Clean compositions, crisp typography, and interface polish built for product trust.'],
  ['Secure APIs', 'Backend systems designed to scale with Node, Express, and modern database workflows.'],
  ['Fast Delivery', 'Optimized development flows with deployments ready for launch.'],
];

const AboutSection = () => {
  return (
    <section id="about" className="animate-fade-up px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-300">About me</p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Profile, skills, and product-focused engineering.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_80px_rgba(8,145,178,0.12)] sm:p-8">
            <p className="text-lg leading-8 text-slate-300">
              I&apos;m <strong className="text-white">Bhawani Shankar</strong>, a Full Stack Developer from Bikaner with a BCA from Engineering College Bikaner. I build responsive web apps, product landing pages, and deploy-ready full-stack systems.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              This portfolio uses your photo and a clean SaaS-inspired visual language to showcase work, value, and personal branding in a professional manner.
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {strengths.map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <strong className="font-display text-xl text-white">{title}</strong>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_24px_80px_rgba(8,145,178,0.12)]">
            <img src={profileImage} alt="Bhawani Shankar portrait" className="h-full min-h-[380px] w-full rounded-[1.35rem] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
