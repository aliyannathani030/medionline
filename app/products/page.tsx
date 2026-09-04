import Link from "next/link";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop Medical Supplies | medionline",
  description:
    "Browse hospital disposables, pharmacy packaging, and hygiene products from medionline — genuine medical supplies delivered across Karachi.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const { category, q } = await searchParams;
  const activeCategory = categories.find((c) => c.slug === category);
  const query = q?.trim().toLowerCase();

  let filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory.name)
    : products;

  if (query) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
  }

  const heading = query
    ? `Results for "${q}"`
    : activeCategory
    ? activeCategory.name
    : "All products";

  return (
    <section className="px-6 sm:px-16 py-16 sm:py-20">
      <div className="font-mono text-xs tracking-[0.12em] uppercase text-teal flex items-center gap-2.5 mb-5">
        <span className="w-6 h-px bg-teal" />
        Catalogue
      </div>
      <h1 className="font-display text-[34px] sm:text-[42px] font-medium mb-8">
        {heading}
      </h1>

      <div className="flex flex-wrap gap-2.5 mb-12">
        <Link
          href="/products"
          className={`px-4 py-2 rounded-full text-sm border transition-colors ${
            !activeCategory && !query
              ? "bg-teal-deep text-white border-teal-deep"
              : "border-line text-muted hover:border-teal"
          }`}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/products?category=${c.slug}`}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${
              activeCategory?.slug === c.slug
                ? "bg-teal-deep text-white border-teal-deep"
                : "border-line text-muted hover:border-teal"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <ProductCard key={p.sku} product={p} />
          ))}
        </div>
      ) : (
        <p className="text-muted text-sm">
          No products found{query ? ` for "${q}"` : ""}.
        </p>
      )}
    </section>
  );
}
