import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";
import { productEnquiry, whatsappLink } from "@/lib/contact";

export default function ProductCard({ product }: { product: Product }) {
  const href = product.slug ? `/products/${product.slug}` : "/products";
  return (
    <div className="bg-white border border-line rounded-[10px] overflow-hidden flex flex-col">
      <div className="bg-teal-deep text-teal-pale font-mono text-[11px] tracking-wide px-5 py-3 flex justify-between">
        <span>SKU {product.sku}</span>
        <span>{product.inStock ? "IN STOCK" : "OUT OF STOCK"}</span>
      </div>
      <Link
        href={href}
        className="relative block aspect-square bg-white border-b border-line"
        aria-label={product.name}
      >
        {product.bulk && (
          <span className="absolute top-3 left-3 z-10 font-mono text-[10px] tracking-wide bg-amber text-teal-deep font-bold px-2 py-1 rounded">
            BULK AVAILABLE
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-4"
        />
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <div className="font-mono text-[11px] text-teal tracking-wide mb-2.5 uppercase">
          {product.category}
        </div>
        <h3 className="font-display text-lg font-semibold mb-6 leading-snug">
          <Link href={href} className="hover:text-teal">
            {product.name}
          </Link>
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
          <a
            href={whatsappLink(productEnquiry(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber text-teal-deep font-bold text-xs px-4 py-2.5 rounded-md hover:brightness-95 transition"
          >
            {product.price ? "Order on WhatsApp" : "Ask for Price"}
          </a>
        </div>
      </div>
    </div>
  );
}
