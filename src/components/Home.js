import React from 'react';

import profileImage from '../assets/profile.jpg'; // Ensure this image exists

const Home = () => {
  return (
    <section id="home" className="home section">
      <div className="home-content">
        <div className="home-text fade-in-left">
          <h1>Hello, I'm <span className="highlight">Bhawani Shankar</span></h1>
          <p>Full Stack Developer | BCA Graduate from Engineering College Bikaner</p>
          <a href="#projects" className="cta-button">🚀 View My Work</a>
        </div>
        <div className="home-image fade-in-right">
          <img src={profileImage} alt="Bhawani Shankar" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;
