"use client";

import { useState } from "react";

export default function FaqAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-line">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between text-left py-5 gap-6"
              aria-expanded={isOpen}
            >
              <span className="font-display text-[17px] font-medium">
                {item.q}
              </span>
              <span
                className={`font-mono text-lg text-teal shrink-0 transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="text-muted text-sm leading-relaxed pb-6 pr-8 reveal">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
