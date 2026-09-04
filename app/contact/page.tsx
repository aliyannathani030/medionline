import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | medionline",
  description:
    "Get in touch with medionline for order questions, bulk supply for clinics, or general support — call, email, or send a message.",
};

export default function ContactPage() {
  return (
    <section className="px-6 sm:px-16 py-16 sm:py-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
      <div>
        <div className="font-mono text-xs tracking-[0.12em] uppercase text-teal flex items-center gap-2.5 mb-5">
          <span className="w-6 h-px bg-teal" />
          Get in Touch
        </div>
        <h1 className="font-display text-[34px] sm:text-[42px] font-medium leading-tight mb-6">
          Questions about an order, or want to talk to a pharmacist?
        </h1>
        <p className="text-muted leading-relaxed max-w-sm mb-10">
          Send a message and our team will get back to you — usually within
          a few hours during working hours.
        </p>

        <div className="space-y-6 font-mono text-sm">
          <div>
            <div className="text-teal text-[11px] uppercase tracking-wide mb-1.5">
              Phone
            </div>
            <div>0336-8526999</div>
          </div>
          <div>
            <div className="text-teal text-[11px] uppercase tracking-wide mb-1.5">
              Email
            </div>
            <div>support@medionline.com</div>
          </div>
          <div>
            <div className="text-teal text-[11px] uppercase tracking-wide mb-1.5">
              Hours
            </div>
            <div>Mon–Sat, 9AM – 9PM</div>
          </div>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
