import React from 'react';


const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <h2>Contact <span className="highlight">Me</span></h2>
      <p className="contact-description">
        Let's connect! I'm always open to collaborations, freelance work, or just a good tech talk.
      </p>
      <div className="contact-info">
        <a href="mailto:bhawaninayak1111@gmail.com" className="contact-link email">
          📧 Email
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link linkedin">
          💼 LinkedIn
        </a>
        <a href="https://github.com/bhawaninayak25" target="_blank" rel="noopener noreferrer" className="contact-link github">
          🐙 GitHub
        </a>
        <a href="https://wa.me/917073692001" target="_blank" rel="noopener noreferrer" className="contact-link whatsapp">
          💬 WhatsApp
        </a>
        <a href="https://instagram.com/bhawani_nyk05" target="_blank" rel="noopener noreferrer" className="contact-link instagram">
          🧡 Instagram
        </a>
      </div>
    </section>
  );
};

export default Contact;
