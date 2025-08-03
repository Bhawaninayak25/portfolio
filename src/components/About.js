import React from 'react';
 
import profileImage from '../assets/acc.jpg'; // Replace with your actual image

const About = () => {
  return (
    <section id="about" className="about section">
      <h2 className="section-title">About <span className="highlight">Me</span></h2>
      <div className="about-content">
        <div className="about-text">
          <p className="fade-in">
            Hello! I'm <strong>Bhawani Shankar</strong>, a passionate and dedicated <span className="highlight">Full Stack Developer</span> based in Bikaner.
            I have completed my <strong>Bachelor of Computer Applications (BCA)</strong> from Engineering College Bikaner.
          </p>
          <p className="fade-in delay-1">
            I enjoy building dynamic and responsive web applications using the <span className="highlight">MERN stack</span>.
            I am always eager to learn new technologies and solve challenging problems in creative ways.
          </p>
        </div>
        <div className="about-image slide-in-right">
          <img src={profileImage} alt="Bhawani Shankar" />
        </div>
      </div>
    </section>
  );
};

export default About;
