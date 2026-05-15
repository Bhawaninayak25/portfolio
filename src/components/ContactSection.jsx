import React, { useState } from 'react';
import { chatSuggestions, getChatReply } from '../data/chatResponses';

const ContactSection = () => {
  const [chatInput, setChatInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'assistant',
      text: 'Chat like a friend. Neeche suggestions se start kar sakte ho.',
    },
  ]);

  const sendChatMessage = (text) => {
    const message = text.trim();
    if (!message) return;

    setIsChatOpen(true);
    setChatMessages((current) => [
      ...current,
      { type: 'user', text: message },
      { type: 'assistant', text: getChatReply(message) },
    ]);
    setChatInput('');
  };

  const handleChatSubmit = (event) => {
    event.preventDefault();
    sendChatMessage(chatInput);
  };

  return (
    <section id="contact" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">Chat</p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Chat like a friend
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-600 dark:text-zinc-300">
            Casual Hinglish questions try karo. Suggestions click karo ya apna message type karo.
          </p>
        </div>

        {isChatOpen ? (
          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-[1.35rem] border border-black/10 bg-white/85 shadow-premium backdrop-blur transition dark:border-white/10 dark:bg-zinc-950/70 sm:mt-10 sm:rounded-[2rem]">
            <div className="flex items-center justify-between gap-4 border-b border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5 sm:p-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">Online</span>
                <h3 className="mt-1 font-display text-xl font-bold sm:text-2xl">Bhawani Chat</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_7px_rgba(52,211,153,0.16)]"></span>
                <button
                  type="button"
                  onClick={() => setIsChatOpen(false)}
                  className="rounded-full border border-black/10 bg-white/80 px-3 py-2 text-xs font-extrabold text-zinc-700 transition hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-zinc-200"
                >
                  Hide
                </button>
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto border-b border-black/10 p-4 dark:border-white/10 sm:flex-wrap sm:p-5">
              {chatSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => sendChatMessage(suggestion)}
                  className="shrink-0 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-extrabold text-zinc-700 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-zinc-200 dark:hover:bg-white/15"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <div className="flex min-h-[260px] max-h-[52vh] flex-col gap-3 overflow-y-auto p-4 sm:min-h-[340px] sm:p-6 lg:max-h-[500px]">
              {chatMessages.map((message, index) => (
                <div key={`${message.type}-${index}`} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <span
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm font-semibold leading-6 sm:max-w-[82%] sm:text-base ${
                      message.type === 'user'
                        ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950'
                        : 'border border-black/10 bg-white/85 text-zinc-700 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200'
                    }`}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleChatSubmit} className="grid gap-3 border-t border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5 sm:grid-cols-[1fr_auto] sm:p-5">
              <input
                type="text"
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                placeholder="Type: Khana kha liya?"
                aria-label="Chat message"
                className="min-h-14 rounded-2xl border border-black/10 bg-white/85 px-4 font-semibold text-zinc-950 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-300/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
              <button type="submit" className="min-h-14 rounded-2xl bg-gradient-to-r from-amber-300 to-yellow-100 px-6 font-extrabold text-zinc-950 shadow-lg shadow-amber-400/20 transition hover:-translate-y-0.5">
                Send
              </button>
            </form>
          </div>
        ) : (
          <div className="mx-auto mt-8 flex max-w-3xl justify-center sm:mt-10">
            <button
              type="button"
              onClick={() => setIsChatOpen(true)}
              className="group inline-flex items-center gap-3 rounded-full border border-black/10 bg-zinc-950 px-5 py-4 font-extrabold text-white shadow-premium transition hover:-translate-y-1 dark:border-white/10 dark:bg-white dark:text-zinc-950 sm:px-7"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-amber-300 text-zinc-950 transition group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                  <path d="M21 12a8 8 0 01-8 8H7l-4 3 1.5-5A8 8 0 1121 12z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Open chat
            </button>
          </div>
        )}

        <footer className="mt-10 text-center text-sm font-semibold text-zinc-500 dark:text-zinc-400">
          Copyright 2026 Bhawani Shankar. Designed and developed with React + Tailwind CSS.
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
