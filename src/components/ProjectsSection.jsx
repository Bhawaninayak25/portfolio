import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A modern personal portfolio built in React with a stronger visual system, recruiter-focused messaging, and mobile-first responsive design.',
    stack: ['React', 'CSS', 'Responsive Design'],
    outcome: 'Sharper personal brand and stronger recruiter-first presentation.',
    liveLink: 'https://portfoliobhawani.vercel.app/',
    repoLink: 'https://github.com/Bhawaninayak25/portfolio.git',
  },
  {
    title: 'Task Manager App',
    description:
      'A full stack productivity application where users can create, organize, and track tasks through a clean interface and API-backed workflow.',
    stack: ['MERN', 'Authentication', 'CRUD APIs'],
    outcome: 'Shows CRUD logic, auth flows, and practical dashboard thinking.',
    liveLink: '',
    repoLink: 'https://github.com/yourusername/task-manager',
  },
  {
    title: 'E-commerce Website',
    description:
      'An online shopping experience focused on product listing, user flows, and scalable architecture for typical commerce features.',
    stack: ['React', 'Node.js', 'MongoDB'],
    outcome: 'Demonstrates product pages, structured data flow, and user journeys.',
    liveLink: '',
    repoLink: 'https://github.com/yourusername/task-manager',
  },
  {
    title: 'WhatsApp Web Clone',
    description:
      'A messaging-inspired interface demonstrating component composition, realtime-style layouts, and modern application structure.',
    stack: ['React', 'UI Architecture', 'Frontend Engineering'],
    outcome: 'Highlights interface cloning skill and reusable component execution.',
    liveLink: '',
    repoLink: 'https://github.com/yourusername/task-manager',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects section">
      <div className="section-heading">
        <p className="eyebrow">Featured work</p>
        <h2>Projects that demonstrate development depth and execution.</h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={project.title} className={`project-card project-card--${(index % 2) + 1}`}>
            <div className="project-card__top">
              <p className="project-label">Case Study</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-outcome">
              <span>Why it matters</span>
              <strong>{project.outcome}</strong>
            </div>

            <div className="project-tags">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-links">
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn live"
                >
                  Live Demo
                </a>
              ) : (
                <span className="btn btn-disabled">Demo Soon</span>
              )}
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn github"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
