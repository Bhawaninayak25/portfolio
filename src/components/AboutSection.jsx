import React from 'react';
import profileImage from '../assets/acc.jpg';

const strengths = [
  'Strong foundation in MERN stack application development',
  'Focus on clean layouts, maintainable components, and API-driven features',
  'Comfortable turning ideas into responsive products with business-oriented thinking',
];

const AboutSection = () => {
  return (
    <section id="about" className="about section">
      <div className="section-heading">
        <p className="eyebrow">About me</p>
        <h2>Developer mindset with a product-focused approach.</h2>
      </div>

      <div className="about-grid">
        <div className="about-panel about-panel--text">
          <p>
            I&apos;m <strong>Bhawani Shankar</strong>, a full stack developer with a
            BCA degree from Engineering College Bikaner. I enjoy building web
            applications that are not only functional, but also intuitive,
            responsive, and ready to present professionally.
          </p>
          <p>
            My work is centered around React, JavaScript, Node.js, Express, and
            MongoDB. I like solving real problems through practical interfaces,
            reusable components, and thoughtful user flows.
          </p>

          <div className="strength-list">
            {strengths.map((item) => (
              <div key={item} className="strength-card">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="about-panel about-panel--visual">
          <img src={profileImage} alt="Workspace portrait of Bhawani Shankar" />
          <div className="about-badge">
            <span>Currently seeking</span>
            <strong>Frontend / Full Stack opportunities</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
