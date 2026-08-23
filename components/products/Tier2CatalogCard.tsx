import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { categoryLabels, getSpecChips } from "@/lib/products";
import { SpecChips } from "@/components/products/SpecChips";

export function Tier2CatalogCard({
  product,
  featured,
}: {
  product: Product;
  featured?: boolean;
}) {
  const cat = categoryLabels[product.category].toUpperCase();
  const chips = getSpecChips(product);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="ae-focus group flex h-full min-h-[300px] w-full cursor-pointer flex-col overflow-hidden border border-steel-200 bg-white shadow-el1 transition-[border-color,box-shadow] duration-200 hover:border-brand-red hover:shadow-el2 md:min-h-[360px]"
    >
      <div className="ae-machine-media-frame hero-product-stage relative aspect-[4/3] w-full shrink-0">
        {featured ? (
          <span className="absolute right-3 top-3 z-10 rounded-ae-sm border border-steel-200 bg-white px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-red">
            Featured
          </span>
        ) : null}
        <Image
          src={product.images[0]}
          alt={`${product.name} catalog photography`}
          fill
          className="ae-machine-media-image"
          sizes="(max-width:768px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col border-t border-steel-200 p-5 sm:p-6">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">{cat}</p>
        <h3 className="mt-3 break-words font-heading text-[16px] font-semibold leading-snug tracking-[-0.02em] text-navy-900 sm:text-[19px]">
          {product.name}
        </h3>
        <SpecChips chips={chips} />
        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-steel-600">{product.short}</p>
        <span className="mt-auto inline-flex pt-4 text-sm font-semibold text-navy-900 transition-colors group-hover:text-brand-red">
          View machine <span className="ml-1.5" aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
