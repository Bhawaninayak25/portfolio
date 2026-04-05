import React from 'react';

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive UI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'MongoDB'],
  },
  {
    title: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'SQL', 'Docker', 'Deployment'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="skills section">
      <div className="section-heading">
        <p className="eyebrow">Core strengths</p>
        <h2>Technologies I use to ship reliable web experiences.</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <div className="skill-pills">
              {group.items.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
