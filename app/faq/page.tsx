import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/lib/data";

export default function FaqPage() {
  return (
    <section className="px-6 sm:px-16 py-16 sm:py-20">
      <div className="font-mono text-xs tracking-[0.12em] uppercase text-teal flex items-center gap-2.5 mb-5">
        <span className="w-6 h-px bg-teal" />
        Support
      </div>
      <h1 className="font-display text-[34px] sm:text-[42px] font-medium mb-4 max-w-xl">
        Frequently asked questions
      </h1>
      <p className="text-muted max-w-md mb-12">
        Can&apos;t find what you&apos;re looking for?{" "}
        <a href="/contact" className="text-teal-deep underline underline-offset-2">
          Talk to our support team
        </a>{" "}
        directly.
      </p>

      <div className="max-w-2xl">
        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}
