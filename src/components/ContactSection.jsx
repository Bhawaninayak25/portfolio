import React from 'react';

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:bhawaninayak1111@gmail.com',
    description: 'Best for hiring conversations and project discussion',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',
    description: 'Professional profile and networking',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/bhawaninayak25',
    description: 'Code samples and project repositories',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/917073692001',
    description: 'Fast replies for direct communication',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="contact section">
      <div className="contact-banner">
        <div>
          <p className="eyebrow">Let&apos;s build something useful</p>
          <h2>Available for internships, freelance work, and developer roles.</h2>
          <p className="contact-description">
            If you&apos;re hiring or want to collaborate on a product, I&apos;d be
            happy to connect and discuss how I can contribute.
          </p>
        </div>

        <a href="mailto:bhawaninayak1111@gmail.com" className="button button-primary">
          Start a Conversation
        </a>
      </div>

      <div className="contact-grid">
        {contactLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="contact-card"
          >
            <span>{item.label}</span>
            <strong>{item.description}</strong>
          </a>
        ))}
      </div>

      <footer className="site-footer">
        <p>Designed and developed by Bhawani Shankar.</p>
      </footer>
    </section>
  );
};

export default ContactSection;
