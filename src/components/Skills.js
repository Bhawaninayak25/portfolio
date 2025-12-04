import React from 'react';


const Skills = () => {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Node.js',
    'Express.js', 'MongoDB', 'SQL', 'Git', 'REST APIs', 'NEST.js','Docker', 'github', 'jwt', 'github',
    'PWA', 
  ];

  return (
    <section id="skills" className="skills section">
      <h2 className="section-title">My <span className="highlight">Skills</span></h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
