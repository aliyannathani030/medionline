"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire this up to a backend/API route once hosting + email service is set up.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white border border-line rounded-[10px] p-10 flex flex-col items-start justify-center">
        <div className="w-10 h-10 rounded-full bg-teal-pale text-teal-deep flex items-center justify-center font-bold mb-5">
          ✓
        </div>
        <h3 className="font-display text-xl font-semibold mb-2">
          Message sent
        </h3>
        <p className="text-muted text-sm">
          Thanks for reaching out — we&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-line rounded-[10px] p-8 sm:p-10 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wide text-muted mb-2">
            Full name
          </label>
          <input
            required
            type="text"
            className="w-full border border-line rounded-md px-4 py-3 text-sm outline-none focus:border-teal transition-colors"
            placeholder="Ali Ahmed"
          />
        </div>
        <div>
          <label className="block text-xs font-mono uppercase tracking-wide text-muted mb-2">
            Phone
          </label>
          <input
            required
            type="tel"
            className="w-full border border-line rounded-md px-4 py-3 text-sm outline-none focus:border-teal transition-colors"
            placeholder="03XX-XXXXXXX"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wide text-muted mb-2">
          Email
        </label>
        <input
          required
          type="email"
          className="w-full border border-line rounded-md px-4 py-3 text-sm outline-none focus:border-teal transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wide text-muted mb-2">
          Message
        </label>
        <textarea
          required
          rows={5}
          className="w-full border border-line rounded-md px-4 py-3 text-sm outline-none focus:border-teal transition-colors resize-none"
          placeholder="How can we help?"
        />
      </div>

      <button
        type="submit"
        className="bg-teal-deep text-white font-semibold px-7 py-3.5 rounded-md text-sm hover:bg-teal transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
