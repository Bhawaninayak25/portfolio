import React from 'react';

const testimonials = [
  ['Project Collaborator', 'Bhawani brings a rare mix of UI taste and implementation focus. The work feels considered from the first screen.'],
  ['Recruiter Perspective', 'The portfolio quickly communicates full stack capability, practical delivery skills, and strong attention to user experience.'],
  ['Product Feedback', 'Clean layouts, responsive thinking, and a clear development process make the work easy to trust.'],
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="animate-fade-up px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">Trust signals</p>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Built to make technical depth easy to understand.
            </h2>
          </div>
          <a href="#contact" className="rounded-2xl border border-black/10 bg-white/70 px-6 py-4 text-center font-extrabold text-zinc-950 transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:text-white">
            Start Chat
          </a>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map(([name, quote]) => (
            <article key={name} className="flex min-h-64 flex-col justify-between rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
              <p className="text-lg font-semibold leading-8">&quot;{quote}&quot;</p>
              <strong className="mt-8 block text-zinc-600 dark:text-zinc-300">{name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
