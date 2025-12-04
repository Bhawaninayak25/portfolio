import React from 'react';
 

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, fully responsive portfolio site built with React, showcasing my personal projects and resume.',
    liveLink: 'https://portfoliobhawani.vercel.app/',
    repoLink: 'https://github.com/Bhawaninayak25/portfolio.git',
  },
  {
    title: 'Task Manager App',
    description: 'A full-stack MERN task manager allowing users to create, track, and delete tasks in real-time.',
    liveLink: '',
    repoLink: 'https://github.com/yourusername/task-manager',
  },
    {
    title: 'e-commerce website',
    description: 'A full-stack MERN task manager allowing users to create, track, and delete tasks in real-time.',
    liveLink: '',
    repoLink: 'https://github.com/yourusername/task-manager',
  },
    {
    title: 'watsapp-web-clone',
    description: 'A full-stack MERN task manager allowing users to create, track, and delete tasks in real-time.',
    liveLink: '',
    repoLink: 'https://github.com/yourusername/task-manager',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <h2 className="section-title">My <span className="highlight">Projects</span></h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn live">Live Demo</a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn github">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
