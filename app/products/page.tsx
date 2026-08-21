import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/data";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = categories.find((c) => c.slug === category);
  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory.name)
    : products;

  return (
    <section className="px-6 sm:px-16 py-16 sm:py-20">
      <div className="font-mono text-xs tracking-[0.12em] uppercase text-teal flex items-center gap-2.5 mb-5">
        <span className="w-6 h-px bg-teal" />
        Catalogue
      </div>
      <h1 className="font-display text-[34px] sm:text-[42px] font-medium mb-8">
        {activeCategory ? activeCategory.name : "All products"}
      </h1>

      <div className="flex flex-wrap gap-2.5 mb-12">
        <Link
          href="/products"
          className={`px-4 py-2 rounded-full text-sm border transition-colors ${
            !activeCategory
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
        <p className="text-muted text-sm">No products in this category yet.</p>
      )}
    </section>
  );
}
