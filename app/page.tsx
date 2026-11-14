import CategoryCard from "@/components/CategoryCard";
import HeroSlider from "@/components/HeroSlider";
import { categories } from "@/lib/data";

const stats = [
  { num: "4,200+", label: "Orders Delivered" },
  { num: "180+", label: "Verified Suppliers" },
  { num: "24h", label: "Karachi Dispatch" },
  { num: "4.8★", label: "Customer Rating" },
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Categories */}
      <section className="px-6 sm:px-16 py-20 sm:py-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
          <h2 className="font-display text-[28px] sm:text-[34px] font-medium">
            Shop by category
          </h2>
          <p className="text-muted text-sm max-w-xs sm:text-right">
            From everyday first-aid to clinical-grade equipment for
            practices and hospitals.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-teal-deep text-white px-6 sm:px-16 py-12 sm:py-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="border-l border-white/20 pl-5">
            <div className="font-display text-3xl sm:text-4xl mb-1.5">{s.num}</div>
            <div className="font-mono text-[11px] tracking-wide uppercase text-teal-pale">
              {s.label}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
