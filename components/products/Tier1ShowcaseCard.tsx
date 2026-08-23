import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { categoryLabels, getSpecChips } from "@/lib/products";
import { SpecChips } from "@/components/products/SpecChips";

export function Tier1ShowcaseCard({ product }: { product: Product }) {
  const cat = categoryLabels[product.category].toUpperCase();
  const chips = getSpecChips(product);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="ae-focus group flex h-full min-h-[320px] cursor-pointer flex-col overflow-hidden border border-steel-200 bg-white shadow-el1 transition-[border-color,box-shadow] duration-200 hover:border-brand-red hover:shadow-el2 md:min-h-[380px]"
    >
      <div className="ae-machine-media-frame hero-product-stage relative min-h-[220px] flex-1">
        <Image
          src={product.images[0]}
          alt={`${product.name} industrial machinery`}
          fill
          className="ae-machine-media-image"
          sizes="(max-width:768px) 100vw, 66vw"
        />
      </div>

      <div className="border-t border-steel-200 p-5 sm:p-6 md:p-8">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">{cat}</p>
        <h3 className="mt-3 break-words font-heading text-[20px] font-semibold leading-snug tracking-[-0.02em] text-navy-900 sm:text-[24px] md:text-[28px]">
          {product.name}
        </h3>
        <SpecChips chips={chips} />
        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-steel-600">{product.short}</p>
        <span className="mt-4 inline-flex text-sm font-semibold text-navy-900 transition-colors group-hover:text-brand-red">
          View machine <span className="ml-1.5" aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
