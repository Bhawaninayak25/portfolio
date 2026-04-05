import React from 'react';
import profileImage from '../assets/profile.jpg';
import resumePDF from '../assets/resume.pdf';

const highlights = [
  'Responsive frontend architecture with React',
  'REST API integration and backend fundamentals',
  'Production-minded UI polish and performance focus',
];

const stats = [
  { value: '10+', label: 'Stack skills used across projects' },
  { value: '4', label: 'Portfolio-ready projects showcased' },
  { value: '100%', label: 'Mobile responsive layouts' },
];

const HomeSection = () => {
  return (
    <section id="home" className="hero section">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Open to full-time developer roles</p>
          <h1>
            Building polished web experiences with
            <span> modern full stack development.</span>
          </h1>
          <p className="hero-lead">
            I&apos;m Bhawani Shankar, a BCA graduate and full stack developer from
            Bikaner focused on React, Node.js, and clean user experiences that
            feel reliable in production.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View Projects
            </a>
            <a href={resumePDF} className="button button-secondary" download>
              Download Resume
            </a>
          </div>

          <ul className="hero-highlights" aria-label="Professional highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="profile-card">
            <div className="profile-card__glow"></div>
            <img src={profileImage} alt="Bhawani Shankar" className="profile-img" />
            <div className="profile-card__content">
              <p className="profile-card__title">Full Stack Developer</p>
              <p className="profile-card__text">
                Creating responsive interfaces, scalable features, and polished
                portfolio-grade products.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;
