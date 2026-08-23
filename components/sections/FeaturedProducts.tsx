"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ProductCategory } from "@/lib/products";
import { products } from "@/lib/products";
import { Tier2CatalogCard } from "@/components/products/Tier2CatalogCard";
import { CategoryPills } from "@/components/sections/CategoryPills";

export function FeaturedProducts() {
  const [cat, setCat] = useState<ProductCategory>("all");

  const filteredProducts = useMemo(() => {
    if (cat === "all") return products;
    return products.filter((p) => p.category === cat);
  }, [cat]);

  return (
    <section id="products" className="border-t border-steel-200 bg-white">
      <div className="ae-container ae-section-y">
        <p className="ae-eyebrow-dark">Product Range</p>
        <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="ae-h2 max-w-[22ch] text-navy-900">Our Industrial Machinery</h2>
          <p className="ae-desc-dark max-w-[56ch]">
            Engineered for continuous production across raffia tape, woven sack, and plastic processing industries.
          </p>
        </div>

        <div className="mt-12">
          <CategoryPills active={cat} onChange={setCat} />
        </div>

        <p className="ae-kicker-mono mt-14">Complete Product Range</p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {filteredProducts.map((p) => (
            <div key={p.slug} className="h-full">
              <Tier2CatalogCard product={p} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/products"
            className="ae-focus inline-flex cursor-pointer items-center gap-2 rounded-sm text-sm font-semibold text-navy-900 transition-colors hover:text-brand-red"
          >
            View All 11 Products <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

