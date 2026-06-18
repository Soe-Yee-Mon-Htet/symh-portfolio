import { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { contactData } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send the form data to an API
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-surface-light/50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-2 text-center text-3xl font-bold sm:text-4xl">
          {contactData.title}
        </h2>
        <div className="mx-auto mb-4 mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        <p className="mb-10 text-center text-text-muted">
          {contactData.subtitle}
        </p>

        {submitted ? (
          <div className="rounded-2xl border border-primary/30 bg-surface p-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Send size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Message Sent!</h3>
            <p className="mt-2 text-text-muted">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-muted">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl border border-text-muted/20 bg-surface px-4 py-3 text-text placeholder:text-text-muted/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-muted">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-text-muted/20 bg-surface px-4 py-3 text-text placeholder:text-text-muted/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full resize-none rounded-xl border border-text-muted/20 bg-surface px-4 py-3 text-text placeholder:text-text-muted/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/40"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        )}

        {/* Direct email + socials */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={`mailto:${contactData.email}`}
            className="inline-flex items-center gap-2 text-text-muted transition-colors hover:text-primary"
          >
            <Mail size={18} />
            {contactData.email}
          </a>
          <div className="flex gap-4">
            {contactData.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-text-muted transition-colors hover:bg-primary/10 hover:text-primary"
                  aria-label={social.name}
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
