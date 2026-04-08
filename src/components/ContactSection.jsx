import React, { useEffect, useMemo, useState } from 'react';

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:bhawaninayak1111@gmail.com',
    description: 'Best for hiring conversations and project discussion',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/bhawani_nyk05',
    description: 'Primary social DM channel for direct conversation',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/bhawaninayak25',
    description: 'Code samples and project repositories',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',
    description: 'Professional profile and networking',
  },
];

const quickReplies = [
  'I want to hire you',
  'Need a React developer',
  'Let us discuss a project',
];

const API_URL = process.env.REACT_APP_CHAT_API_URL || 'http://localhost:8787';
const CONVERSATION_ID = 'website-default';

const ContactSection = () => {
  const initialMessages = useMemo(
    () => [
      {
        id: 1,
        sender: 'assistant',
        text: 'Hi, send a message here and I can route the conversation into the live chat system. Instagram sync needs a professional account plus Meta webhook setup.',
      },
    ],
    []
  );

  const [chatOpen, setChatOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState(initialMessages);
  const [status, setStatus] = useState('Website chat is ready.');
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (!chatOpen) {
      return undefined;
    }

    const loadMessages = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/chat/messages?conversation=${CONVERSATION_ID}`
        );
        const data = await response.json();

        if (response.ok && Array.isArray(data.messages)) {
          setMessages((current) =>
            data.messages.length > 0
              ? data.messages.map((message) => ({
                  id: message.id,
                  sender: message.sender === 'owner' ? 'assistant' : 'user',
                  text: message.text,
                }))
              : current
          );
        }
      } catch (error) {
        setStatus(
          'Live sync needs the chat server running. Website messages can be stored there and Instagram webhooks can push synced replies back here.'
        );
      }
    };

    loadMessages();
    const intervalId = setInterval(loadMessages, 4000);
    return () => clearInterval(intervalId);
  }, [chatOpen]);

  const sendMessage = async (text) => {
    const value = text.trim();

    if (!value) {
      return;
    }

    const optimisticMessage = {
      id: Date.now(),
      sender: 'user',
      text: value,
    };

    setMessages((current) => [...current, optimisticMessage]);
    setDraft('');
    setChatOpen(true);
    setIsSending(true);

    try {
      const response = await fetch(`${API_URL}/api/chat/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conversationId: CONVERSATION_ID,
          sender: 'visitor',
          source: 'website',
          text: value,
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to send');
      }

      setStatus(
        'Message sent. For real website + Instagram sync, connect this server to Meta Instagram messaging webhooks.'
      );
    } catch (error) {
      setStatus(
        'Chat server not connected yet. Start the local server or deploy the backend to make this chat live.'
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(draft);
  };

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

        <button
          type="button"
          className="button button-primary"
          onClick={() => setChatOpen((current) => !current)}
        >
          Start a Conversation
        </button>
      </div>

      {chatOpen && (
        <div className="chat-shell">
          <div className="chat-panel">
            <div className="chat-panel__header">
              <div>
                <p className="chat-title">Live Chat</p>
                <span className="chat-subtitle">{status}</span>
              </div>
              <button
                type="button"
                className="chat-close"
                onClick={() => setChatOpen(false)}
                aria-label="Close chat"
              >
                Close
              </button>
            </div>

            <div className="chat-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`chat-bubble chat-bubble--${message.sender}`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="chat-quick-replies">
              {quickReplies.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="chat-chip"
                  onClick={() => sendMessage(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <form className="chat-form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Type your message..."
                className="chat-input"
              />
              <button
                type="submit"
                className="button button-primary"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send'}
              </button>
            </form>

            <div className="chat-actions">
              <a
                href="https://ig.me/m/bhawani_nyk05"
                target="_blank"
                rel="noopener noreferrer"
                className="btn github"
              >
                Open Instagram
              </a>
              <a
                href="https://instagram.com/bhawani_nyk05"
                target="_blank"
                rel="noopener noreferrer"
                className="btn github"
              >
                Instagram Profile
              </a>
              <a href="mailto:bhawaninayak1111@gmail.com" className="btn live">
                Email Backup
              </a>
            </div>
          </div>
        </div>
      )}

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
