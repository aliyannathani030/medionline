import Link from "next/link";
import Blister from "./Blister";
import type { Category } from "@/lib/data";

export default function CategoryCard({ category }: { category: Category }) {
  const featured = category.featured;
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className={`relative rounded-[10px] border border-line p-6 block transition-transform hover:-translate-y-0.5 ${
        featured ? "bg-teal-deep text-white" : "bg-white"
      }`}
    >
      <div className="absolute top-6 right-6">
        <Blister count={4} filledEvery={featured ? 1 : 99} size="sm" />
      </div>
      <div
        className={`font-mono text-[11px] mb-10 ${
          featured ? "text-teal-pale" : "text-muted"
        }`}
      >
        {category.index}
      </div>
      <h4 className="font-display text-[19px] font-semibold mb-1.5">
        {category.name}
      </h4>
      <p className={`text-[12.5px] ${featured ? "text-teal-pale" : "text-muted"}`}>
        {category.tagline}
      </p>
    </Link>
  );
}
