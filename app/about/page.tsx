import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | medionline",
  description:
    "medionline sources genuine medical supplies from licensed distributors in Pakistan, serving patients, families, and clinics across Karachi.",
};

const values = [
  {
    title: "Verified sourcing",
    body: "Every supplier on our platform is DRAP-registered and vetted before their products reach the catalogue.",
  },
  {
    title: "Cold-chain aware",
    body: "Temperature-sensitive items are packed and dispatched following proper cold-chain handling standards.",
  },
  {
    title: "Built for clinics too",
    body: "Beyond individual customers, we support pharmacies and clinics with recurring bulk supply arrangements.",
  },
];

export default function AboutPage() {
  return (
    <section className="px-6 sm:px-16 py-16 sm:py-20">
      <div className="font-mono text-xs tracking-[0.12em] uppercase text-teal flex items-center gap-2.5 mb-5">
        <span className="w-6 h-px bg-teal" />
        About Us
      </div>
      <h1 className="font-display text-[34px] sm:text-[46px] font-medium leading-tight max-w-2xl mb-6">
        Built to make genuine healthcare supplies easy to find in Pakistan.
      </h1>
      <p className="text-[16px] text-muted leading-relaxed max-w-xl mb-16">
        medionline started with a simple problem: finding genuine, correctly
        stored medicines and medical supplies online in Pakistan was harder
        than it should be. We work directly with licensed distributors so
        that patients, families, and clinics can order with confidence and
        get it delivered fast.
      </p>

      <div className="grid sm:grid-cols-3 gap-6">
        {values.map((v) => (
          <div
            key={v.title}
            className="bg-white border border-line rounded-[10px] p-7"
          >
            <h3 className="font-display text-lg font-semibold mb-3">
              {v.title}
            </h3>
            <p className="text-[14px] text-muted leading-relaxed">{v.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
