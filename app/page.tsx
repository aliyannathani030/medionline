import Link from "next/link";
import Blister from "@/components/Blister";
import CategoryCard from "@/components/CategoryCard";
import { categories, products } from "@/lib/data";

const stats = [
  { num: "4,200+", label: "Orders Delivered" },
  { num: "180+", label: "Verified Suppliers" },
  { num: "24h", label: "Karachi Dispatch" },
  { num: "4.8★", label: "Customer Rating" },
];

export default function Home() {
  const featuredProduct =
    products.find((p) => p.sku === "05") ?? products[0];

  return (
    <>
      {/* Hero */}
      <section className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 px-6 sm:px-16 pt-16 sm:pt-20 items-center">
        <div>
          <div className="font-mono text-xs tracking-[0.12em] uppercase text-teal flex items-center gap-2.5 mb-6">
            <span className="w-6 h-px bg-teal" />
            Trusted Medical Supplies, Pakistan
          </div>
          <h1 className="font-display font-medium text-[42px] sm:text-[58px] leading-[1.05] tracking-tight mb-6">
            Healthcare essentials,{" "}
            <em className="italic text-teal">delivered</em> to your door.
          </h1>
          <p className="text-[16.5px] text-muted leading-relaxed max-w-md mb-8">
            Genuine medicines, devices, and disposables sourced directly from
            licensed distributors — ordered online, delivered same-day
            across Karachi.
          </p>
          <div className="flex flex-wrap gap-3.5 mb-9">
            <Link
              href="/products"
              className="bg-teal-deep text-white font-semibold px-7 py-4 rounded-md text-sm hover:bg-teal transition-colors"
            >
              Shop Now →
            </Link>
            <Link
              href="/contact"
              className="border border-ink font-semibold px-7 py-4 rounded-md text-sm hover:bg-white transition-colors"
            >
              Talk to a Pharmacist
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 sm:gap-8">
            {["DRAP Registered", "Cash on Delivery", "Same-Day Dispatch"].map(
              (t) => (
                <div key={t} className="flex items-center gap-2 text-[12.5px] text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                  {t}
                </div>
              )
            )}
          </div>
        </div>

        <div className="bg-white border border-line rounded-[10px] shadow-[0_30px_60px_-25px_rgba(14,59,55,0.25)] overflow-hidden">
          <div className="bg-teal-deep text-teal-pale font-mono text-[11px] tracking-wide px-6 py-3 flex justify-between">
            <span>FEATURED · SKU {featuredProduct.sku}</span>
            <span>IN STOCK</span>
          </div>
          <div className="p-7">
            <div className="font-mono text-[11px] text-teal tracking-wide mb-2.5 uppercase">
              {featuredProduct.category}
            </div>
            <h3 className="font-display text-[22px] font-semibold mb-3.5">
              {featuredProduct.name}
            </h3>
            <div className="mt-4 mb-5">
              <Blister count={12} filledEvery={3} />
            </div>
            <div className="flex justify-between items-center border-t border-dashed border-line pt-4">
              {featuredProduct.price ? (
                <span className="font-mono text-xl font-bold text-teal-deep">
                  Rs. {featuredProduct.price.toLocaleString()}
                </span>
              ) : (
                <span className="font-mono text-xs text-muted italic">
                  Price on request
                </span>
              )}
              <a
                href={featuredProduct.price ? "/products" : "/contact"}
                className="bg-amber text-teal-deep font-bold text-[13px] px-5 py-2.5 rounded-md"
              >
                {featuredProduct.price ? "Add to Cart" : "Ask for Price"}
              </a>
            </div>
          </div>
        </div>
      </section>

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
