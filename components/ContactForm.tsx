"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/contact";

export default function ContactForm() {
  const [link, setLink] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  function update(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = [
      "Hello medionline,",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Message: ${form.message}`,
    ].join("\n");
    const url = whatsappLink(text);
    setLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const input =
    "w-full border border-line rounded-md px-4 py-3 text-sm outline-none focus:border-teal transition-colors";
  const label = "block text-xs font-mono uppercase tracking-wide text-muted mb-2";

  if (link) {
    return (
      <div className="bg-white border border-line rounded-[10px] p-10 flex flex-col items-start justify-center">
        <div className="w-10 h-10 rounded-full bg-teal-pale text-teal-deep flex items-center justify-center font-bold mb-5">
          ✓
        </div>
        <h3 className="font-display text-xl font-semibold mb-2">Opening WhatsApp…</h3>
        <p className="text-muted text-sm mb-5">
          Your message is ready — just press send in WhatsApp. If it did not open,
          use the button below.
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-deep text-white font-semibold px-6 py-3 rounded-md text-sm hover:bg-teal transition-colors"
        >
          Open WhatsApp
        </a>
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
          <label className={label}>Full name</label>
          <input required type="text" className={input} placeholder="Ali Ahmed"
            value={form.name} onChange={(e) => update("name", e.target.value)} />
        </div>
        <div>
          <label className={label}>Phone</label>
          <input required type="tel" className={input} placeholder="03XX-XXXXXXX"
            value={form.phone} onChange={(e) => update("phone", e.target.value)} />
        </div>
      </div>
      <div>
        <label className={label}>Email (optional)</label>
        <input type="email" className={input} placeholder="you@example.com"
          value={form.email} onChange={(e) => update("email", e.target.value)} />
      </div>
      <div>
        <label className={label}>Message</label>
        <textarea required rows={5} className={`${input} resize-none`} placeholder="How can we help?"
          value={form.message} onChange={(e) => update("message", e.target.value)} />
      </div>
      <button
        type="submit"
        className="bg-teal-deep text-white font-semibold px-7 py-3.5 rounded-md text-sm hover:bg-teal transition-colors"
      >
        Send on WhatsApp
      </button>
    </form>
  );
}
