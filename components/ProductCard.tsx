import Image from "next/image";
import type { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white border border-line rounded-[10px] overflow-hidden flex flex-col">
      <div className="bg-teal-deep text-teal-pale font-mono text-[11px] tracking-wide px-5 py-3 flex justify-between">
        <span>SKU {product.sku}</span>
        <span>{product.inStock ? "IN STOCK" : "OUT OF STOCK"}</span>
      </div>
      <div className="relative aspect-square bg-[#f6f4ee] border-b border-line">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-4"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="font-mono text-[11px] text-teal tracking-wide mb-2.5 uppercase">
          {product.category}
        </div>
        <h3 className="font-display text-lg font-semibold mb-6 leading-snug">
          {product.name}
        </h3>
        <div className="mt-auto flex justify-between items-center border-t border-line pt-4">
          {product.price ? (
            <span className="font-mono text-lg font-bold text-teal-deep">
              Rs. {product.price.toLocaleString()}
            </span>
          ) : (
            <span className="font-mono text-xs text-muted italic">
              Price on request
            </span>
          )}
          {product.price ? (
            <button
              disabled={!product.inStock}
              className="bg-amber text-teal-deep font-bold text-xs px-4 py-2.5 rounded-md disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-95 transition"
            >
              {product.inStock ? "Order Now" : "Notify Me"}
            </button>
          ) : (
            <a
              href="/contact"
              className="bg-amber text-teal-deep font-bold text-xs px-4 py-2.5 rounded-md hover:brightness-95 transition"
            >
              Ask for Price
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
