"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { GENERAL_ENQUIRY, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/contact";

type Tile = { href: string; image: string; label: string };
type Slide = {
  eyebrow: string;
  title: string;
  text: string;
  tiles?: Tile[];
  contactCard?: boolean;
  primary: { label: string; href: string; external?: boolean };
};

const slides: Slide[] = [
  {
    eyebrow: "medionline · Karachi, Pakistan",
    title: "Healthcare essentials, delivered to your door.",
    text: "Medical disposables, procedure packs and hygiene products for hospitals, clinics and pharmacies.",
    tiles: [
      { href: "/products?category=hospital-disposables", image: "/products/ear-plugs.jpg", label: "Hospital Disposables" },
      { href: "/products?category=surgical-procedure-packs", image: "/products/catheterization-pack.jpg", label: "Procedure Packs" },
      { href: "/products?category=hygiene-personal-care", image: "/products/hand-sanitizer-bottle.jpg", label: "Hygiene & Care" },
    ],
    primary: { label: "Shop Now →", href: "/products" },
  },
  {
    eyebrow: "In stock in bulk",
    title: "Gauze swabs, PE gloves and disposable underwear.",
    text: "Ready in bulk quantity. Message us on WhatsApp for bulk pricing.",
    tiles: [
      { href: "/products/sterile-gauze-swabs", image: "/products/gauze-swab.jpg", label: "Sterile Gauze Swabs" },
      { href: "/products/disposable-pe-gloves", image: "/products/pe-gloves.jpg", label: "PE Gloves" },
      { href: "/products/disposable-underwear", image: "/products/disposable-underwear.jpg", label: "Disposable Underwear" },
    ],
    primary: {
      label: "Ask for Bulk Price",
      href: whatsappLink("Hello medionline, I would like bulk prices for gauze swabs, PE gloves and disposable underwear."),
      external: true,
    },
  },
  {
    eyebrow: "Sterile · Single use",
    title: "Procedure packs for common procedures.",
    text: "CVP, spinal-epidural, caudal block and catheterization packs.",
    tiles: [
      { href: "/products/cvp-insertion-pack", image: "/products/cvp-insertion-pack.jpg", label: "CVP Insertion Pack" },
      { href: "/products/spinal-epidural-pack", image: "/products/spinal-epidural-pack.jpg", label: "Spinal-Epidural Pack" },
      { href: "/products/catheterization-pack", image: "/products/catheterization-pack.jpg", label: "Catheterization Pack" },
    ],
    primary: { label: "View Procedure Packs", href: "/products?category=surgical-procedure-packs" },
  },
  {
    eyebrow: "Order on WhatsApp",
    title: "Free delivery across Karachi on orders over Rs. 15,000.",
    text: "Send us the product name and quantity, and we will reply with the price.",
    contactCard: true,
    primary: { label: "Message us on WhatsApp", href: whatsappLink(GENERAL_ENQUIRY), external: true },
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, [paused, reduceMotion]);

  const slide = slides[index];

  return (
    <section
      className="bg-teal-deep text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="medionline highlights"
    >
      <div className="px-6 sm:px-16 pt-12 sm:pt-16 pb-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-9 h-9 rounded-full bg-white text-teal-deep flex items-center justify-center font-mono text-sm font-bold">
            Rx
          </span>
          <span className="font-display font-semibold text-2xl tracking-tight">
            medionline<span className="text-amber">.</span>
          </span>
        </div>

        <div
          key={index}
          className="reveal grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center min-h-[300px]"
          aria-live={paused ? "polite" : "off"}
        >
          <div>
            <div className="font-mono text-xs tracking-[0.12em] uppercase text-teal-pale flex items-center gap-2.5 mb-5">
              <span className="w-6 h-px bg-teal-pale" />
              {slide.eyebrow}
            </div>
            <h1 className="font-display font-medium text-[34px] sm:text-[48px] leading-[1.08] tracking-tight mb-5">
              {slide.title}
            </h1>
            <p className="text-teal-pale text-[16px] leading-relaxed max-w-lg mb-8">{slide.text}</p>
            {slide.primary.external ? (
              <a
                href={slide.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber text-teal-deep font-bold px-7 py-4 rounded-md text-sm hover:brightness-95 transition"
              >
                {slide.primary.label}
              </a>
            ) : (
              <Link
                href={slide.primary.href}
                className="inline-block bg-amber text-teal-deep font-bold px-7 py-4 rounded-md text-sm hover:brightness-95 transition"
              >
                {slide.primary.label}
              </Link>
            )}
          </div>

          {slide.contactCard && (
            <div className="bg-white text-ink rounded-[10px] p-8 max-w-md lg:ml-auto w-full">
              <div className="font-mono text-[11px] tracking-wide uppercase text-teal mb-3">
                Call or WhatsApp
              </div>
              <a href={PHONE_TEL} className="block font-mono text-3xl sm:text-4xl font-bold text-teal-deep mb-4 hover:text-teal transition-colors">
                {PHONE_DISPLAY}
              </a>
              <p className="text-muted text-sm mb-6">Mon–Sat, 9AM–9PM</p>
              <a
                href={whatsappLink(GENERAL_ENQUIRY)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-white font-semibold px-6 py-3 rounded-md text-sm hover:brightness-95 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          )}

          {slide.tiles && (
            <div className="grid grid-cols-3 gap-3">
              {slide.tiles.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="bg-white rounded-[10px] overflow-hidden text-ink hover:-translate-y-0.5 transition-transform"
                >
                  <div className="relative aspect-square">
                    <Image src={t.image} alt={t.label} fill sizes="(max-width: 1024px) 30vw, 14vw" className="object-contain p-2" />
                  </div>
                  <div className="px-2 py-2 text-[11px] sm:text-xs font-semibold leading-tight text-center border-t border-line">
                    {t.label}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Contact number stays visible on every slide */}
      <div className="border-t border-white/15 px-6 sm:px-16 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <span className="font-mono text-[11px] tracking-wide uppercase text-teal-pale">Call / WhatsApp</span>
          <a href={PHONE_TEL} className="font-mono text-lg font-bold hover:text-amber transition-colors">
            {PHONE_DISPLAY}
          </a>
        </div>
        <div className="flex items-center gap-2" role="group" aria-label="Slides">
          <button onClick={() => go(index - 1)} aria-label="Previous slide"
            className="w-9 h-9 rounded-full border border-white/30 hover:bg-white/10 transition-colors">←</button>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all ${i === index ? "w-7 bg-amber" : "w-2.5 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
          <button onClick={() => go(index + 1)} aria-label="Next slide"
            className="w-9 h-9 rounded-full border border-white/30 hover:bg-white/10 transition-colors">→</button>
        </div>
      </div>
    </section>
  );
}
