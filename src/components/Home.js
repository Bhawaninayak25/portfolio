import React from 'react';
import profileImage from '../assets/profile.jpg';
import resumePDF from '../assets/resume.pdf'; // Add your resume file here

const Home = () => {
  return (
    <section id="home" className="home section">
      <div className="home-content">
        <div className="home-text fade-in-left">
          <h1>Hello, I'm <span className="highlight">Bhawani Shankar</span></h1>
          <p className='highlight'>Full Stack Developer | BCA Graduate from Engineering College Bikaner</p>

          <div className="home-buttons">
            <a href="#projects" className="cta-button">🚀 View My Work</a>
            <a href={resumePDF} className="cta-button secondary" download>
              📄 Download Resume
            </a>
          </div>
        </div>

        <div className="home-image fade-in-right">
          <img src={profileImage} alt="Bhawani Shankar" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;
