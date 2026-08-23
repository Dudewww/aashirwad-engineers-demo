import type { Metadata } from "next";
import Link from "next/link";
import { Tier2CatalogCard } from "@/components/products/Tier2CatalogCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Industrial Machinery Catalog — 11 Machines | Aashirwad Engineers",
  description:
    "Browse 11 industrial machines: hot air ovens, cutting & stitching machines, gusset systems, turbo mixers, bale presses, and fabric openers. Engineered for raffia tape and woven sack production.",
  alternates: { canonical: "/products" },
  openGraph: {
    siteName: "Aashirwad Engineers",
    locale: "en_IN",
    type: "website",
    title: "Industrial Machinery Catalog — 11 Machines | Aashirwad Engineers",
    description:
      "Browse 11 industrial machines: hot air ovens, cutting & stitching machines, gusset systems, turbo mixers, bale presses, and fabric openers. Engineered for raffia tape and woven sack production.",
    url: "/products",
    images: [{ url: "/products/hot-air-oven-v2-cropped-10.png", alt: "Aashirwad Engineers — Industrial machinery catalog" }],
  },
};

export default function ProductsListingPage() {
  return (
    <div className="bg-white pb-24">
      <section className="border-b border-steel-200 pt-24 sm:pt-28 lg:pt-32">
        <div className="ae-container pb-10">
          <nav className="font-mono text-[12px] text-steel-400">
            <Link className="ae-focus rounded-sm transition-colors hover:text-brand-red" href="/">
              Home
            </Link>{" "}
            / <span className="text-navy-900">Products</span>
          </nav>
          <h1 className="mt-5 max-w-[14ch] font-heading text-[clamp(2rem,8vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em] text-navy-900 sm:max-w-[18ch]">
            Industrial Machinery Catalog
          </h1>
          <p className="ae-desc-dark mt-5 max-w-[72ch]">
            Eleven machines for heating, cutting, gusseting, mixing, and fabric handling specifications
            listed per machine. Engineered for continuous plant operation and export delivery.
          </p>
        </div>
      </section>

      <div className="ae-container mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {products.map((p) => (
          <Tier2CatalogCard key={p.slug} product={p} featured={p.tier === 1} />
        ))}
      </div>
    </div>
  );
}
