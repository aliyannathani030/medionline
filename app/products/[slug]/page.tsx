import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, products } from "@/lib/data";

const SITE = "https://1medionline.com";

const pagesWithDetails = () => products.filter((p) => p.slug && p.details);

export function generateStaticParams() {
  return pagesWithDetails().map((p) => ({ slug: p.slug! }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = pagesWithDetails().find((p) => p.slug === slug);
  if (!product || !product.details) return {};
  return {
    title: product.details.seoTitle,
    description: product.details.seoDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.details.seoTitle,
      description: product.details.seoDescription,
      url: `${SITE}/products/${product.slug}`,
      images: [{ url: product.image }],
      type: "website",
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = pagesWithDetails().find((p) => p.slug === slug);
  if (!product || !product.details) notFound();

  const d = product.details;
  const category = categories.find((c) => c.name === product.category);
  const related = products
    .filter((p) => p.category === product.category && p.sku !== product.sku)
    .slice(0, 4);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      image: `${SITE}${product.image}`,
      description: d.seoDescription,
      category: product.category,
      sku: product.sku,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Products", item: `${SITE}/products` },
        {
          "@type": "ListItem",
          position: 3,
          name: product.name,
          item: `${SITE}/products/${product.slug}`,
        },
      ],
    },
  ];

  return (
    <section className="px-6 sm:px-16 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="font-mono text-xs text-muted mb-8">
        <Link href="/" className="hover:text-teal-deep">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-teal-deep">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="relative aspect-square bg-white border border-line rounded-[10px] overflow-hidden">
          <Image
            src={product.image}
            alt={`${product.name} — available in bulk at medionline`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-6"
          />
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link
              href={`/products?category=${category?.slug ?? ""}`}
              className="font-mono text-[11px] text-teal tracking-wide uppercase hover:underline"
            >
              {product.category}
            </Link>
            {product.bulk && (
              <span className="font-mono text-[11px] tracking-wide bg-amber text-teal-deep font-bold px-2.5 py-1 rounded">
                BULK AVAILABLE
              </span>
            )}
          </div>

          <h1 className="font-display text-[32px] sm:text-[40px] font-medium leading-tight mb-5">
            {product.name}
          </h1>
          <p className="text-muted leading-relaxed mb-8">{d.intro}</p>

          <div className="flex flex-wrap gap-3.5 mb-10">
            <Link
              href="/contact"
              className="bg-teal-deep text-white font-semibold px-7 py-4 rounded-md text-sm hover:bg-teal transition-colors"
            >
              Ask for Bulk Price →
            </Link>
            <a
              href="tel:03368526999"
              className="border border-ink font-semibold px-7 py-4 rounded-md text-sm hover:bg-white transition-colors"
            >
              Call 0336-8526999
            </a>
          </div>

          <h2 className="font-display text-xl font-semibold mb-4">Key features</h2>
          <ul className="space-y-2.5 mb-10">
            {d.features.map((f) => (
              <li key={f} className="flex gap-3 text-[15px]">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <h2 className="font-display text-xl font-semibold mb-4">Specifications</h2>
          <dl className="border-t border-line mb-10">
            {d.specs.map((s) => (
              <div key={s.label} className="flex justify-between gap-6 py-3 border-b border-line text-sm">
                <dt className="font-mono text-xs uppercase tracking-wide text-muted">{s.label}</dt>
                <dd className="text-right">{s.value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="font-display text-xl font-semibold mb-4">Commonly used for</h2>
          <div className="flex flex-wrap gap-2.5">
            {d.uses.map((u) => (
              <span key={u} className="border border-line bg-white rounded-full px-4 py-2 text-sm">
                {u}
              </span>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-2xl font-medium mb-6">
            More in {product.category}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((r) => (
              <Link
                key={r.sku}
                href={r.slug ? `/products/${r.slug}` : `/products?category=${category?.slug ?? ""}`}
                className="bg-white border border-line rounded-[10px] overflow-hidden hover:-translate-y-0.5 transition-transform"
              >
                <div className="relative aspect-square bg-[#f6f4ee] border-b border-line">
                  <Image src={r.image} alt={r.name} fill sizes="25vw" className="object-contain p-4" />
                </div>
                <div className="p-4 font-display font-semibold leading-snug">{r.name}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
