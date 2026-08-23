"use client";

import type { ProductCategory } from "@/lib/products";

const items: { id: ProductCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "heating", label: "Heating Systems" },
  { id: "cutting", label: "Cutting & Converting" },
  { id: "mixing", label: "Mixing & Processing" },
  { id: "baling", label: "Fabric & Baling" },
];

export function CategoryPills({
  active,
  onChange,
}: {
  active: ProductCategory;
  onChange: (c: ProductCategory) => void;
}) {
  return (
    <div className="relative">
      <div className="hide-scrollbar -mx-6 flex gap-2 overflow-x-auto whitespace-nowrap px-6 pb-2 pt-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 md:gap-3">
        {items.map((it) => {
          const selected = active === it.id;
          return (
            <button
              key={it.id}
              type="button"
              onClick={() => onChange(it.id)}
              className={`ae-focus shrink-0 min-h-[40px] cursor-pointer rounded-[2px] border px-4 py-2 text-[11px] font-semibold tracking-[0.12em] transition-colors duration-200 ease-industrial sm:text-[12px] md:min-h-[44px] md:px-5 md:text-[13px] ${
                selected
                  ? "border-brand-red bg-brand-red text-white"
                  : "border-steel-200 bg-white text-navy-900 hover:border-brand-red hover:text-brand-red"
              }`}
            >
              {it.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
