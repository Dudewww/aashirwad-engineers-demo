"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tier2CatalogCard } from "@/components/products/Tier2CatalogCard";
import { SpecChips } from "@/components/products/SpecChips";
import type { Product } from "@/lib/products";
import { categoryLabels, getSpecChips } from "@/lib/products";
import { siteContact } from "@/lib/site";
import type { ProductFAQ } from "@/lib/product-faqs";

export function ProductDetail({
  product,
  related,
  faqs,
}: {
  product: Product;
  related: Product[];
  faqs?: ProductFAQ[];
}) {
  const multi = product.images.length > 1;
  const [idx, setIdx] = useState(0);
  const active = product.images[idx] ?? product.images[0];
  const specs = Object.entries(product.specs);

  return (
    <div className="bg-white pb-28 lg:pb-24">
      <section className="ae-container pt-24 sm:pt-28 lg:pt-32">
        <nav aria-label="Breadcrumb" className="hide-scrollbar flex items-center gap-1.5 overflow-x-auto whitespace-nowrap font-mono text-[12px] text-steel-400">
          <Link className="ae-focus shrink-0 rounded-sm hover:text-brand-red" href="/">
            Home
          </Link>
          <span className="select-none">/</span>
          <Link className="ae-focus shrink-0 rounded-sm hover:text-brand-red" href="/products">
            Products
          </Link>
          <span className="select-none">/</span>
          <span className="truncate text-navy-900">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="ae-machine-media-frame hero-product-stage relative border border-steel-200 shadow-el1">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  key={active}
                  src={active}
                  alt={`${product.name} product photography`}
                  fill
                  priority
                  className="ae-machine-media-image"
                  sizes="(max-width:1024px) 100vw, 58vw"
                />
              </div>
            </div>

            {multi ? (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none]">
                {product.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setIdx(i)}
                    className={`relative h-[72px] w-[96px] shrink-0 overflow-hidden border bg-white transition-colors ${
                      i === idx ? "border-brand-red" : "border-steel-200 hover:border-brand-red"
                    }`}
                  >
                    <Image src={src} alt="" fill className="ae-machine-media-image" sizes="96px" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-[112px]">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
                {categoryLabels[product.category].toUpperCase()}
              </p>
              <h1 className="mt-4 break-words font-heading text-[clamp(2rem,8vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em] text-navy-900">
                {product.name}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-steel-600">{product.short}</p>

              <SpecChips chips={getSpecChips(product, 4)} />

              <ul className="mt-6 space-y-2.5 text-sm text-steel-600">
                <li className="flex gap-2">
                  <span className="font-mono text-brand-red" aria-hidden>
                    -
                  </span>
                  Built for continuous industrial duty cycles
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-brand-red" aria-hidden>
                    -
                  </span>
                  Application-driven configurations available
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-brand-red" aria-hidden>
                    -
                  </span>
                  Technical documentation on inquiry
                </li>
              </ul>

              <div className="mt-8 border border-steel-200 bg-section-light p-5 sm:mt-10 sm:p-6">
                <p className="text-sm font-semibold text-navy-900">Request a Quote</p>
                <p className="mt-2 text-sm text-steel-600">For this machine</p>
                <div className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">
                  <Link
                    href={`/contact?reason=quote&product=${product.slug}#inquiry-form`}
                    className="ae-focus inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-ae-md bg-brand-red px-5 text-sm font-semibold text-white hover:bg-brand-redHover sm:min-h-[48px]"
                  >
                    Request a quote
                  </Link>
                  <a
                    href={`mailto:${siteContact.email}?subject=${encodeURIComponent(`${product.name} inquiry`)}`}
                    className="ae-focus inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-[2px] border border-steel-200 bg-white px-5 text-sm font-semibold text-navy-900 hover:border-brand-red hover:text-brand-red sm:min-h-[48px]"
                  >
                    Email sales
                  </a>
                </div>
                <a
                  className="ae-focus mt-3 inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center rounded-[2px] bg-[#25D366] px-5 text-sm font-semibold text-white sm:mt-4 sm:min-h-[48px]"
                  href={`https://wa.me/${siteContact.whatsappRaw}?text=${encodeURIComponent(
                    `Hello Aashirwad Engineers, I would like to inquire about ${product.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="ae-container mt-12 sm:mt-16">
        <div className="overflow-hidden border border-steel-200">
          <div className="bg-section-light px-4 py-4 sm:px-6">
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-red">
              Technical Specifications
            </p>
          </div>
          <div className="divide-y divide-steel-200">
            {specs.map(([k, v], index) => (
              <div
                key={k}
                className={`grid gap-2 px-4 py-4 sm:px-6 md:grid-cols-2 ${index % 2 === 0 ? "bg-white" : "bg-section-light"}`}
              >
                <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-steel-400">{k}</div>
                <div className="break-words font-mono text-sm text-navy-900">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form description */}
      <section className="ae-container mt-12 sm:mt-16">
        <div className="border border-steel-200 bg-white p-6 shadow-el1 sm:p-8">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
            About This Machine
          </p>
          <p className="mt-4 text-sm leading-relaxed text-steel-600">
            {product.description}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs && faqs.length > 0 ? (
        <section className="ae-container mt-12 sm:mt-16">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
            Frequently Asked Questions
          </p>
          <h2 className="mt-4 font-heading text-[20px] font-semibold leading-snug tracking-[-0.02em] text-navy-900 sm:text-[24px]">
            {product.name} — Common Questions
          </h2>
          <div className="mt-6 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-steel-200 bg-white shadow-el1"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-sm font-semibold text-navy-900 sm:p-6 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="shrink-0 font-mono text-brand-red transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-steel-200 px-5 pb-5 pt-4 text-sm leading-relaxed text-steel-600 sm:px-6 sm:pb-6">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      <section className="ae-container mt-12 sm:mt-16">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
          You may also be interested in
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <Tier2CatalogCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-[420] grid h-[52px] grid-cols-3 gap-px border-t border-steel-200 bg-white pb-[env(safe-area-inset-bottom)] lg:hidden">
        <a className="ae-focus flex cursor-pointer items-center justify-center bg-white text-[11px] font-semibold text-navy-900" href={`mailto:${siteContact.email}`}>
          EMAIL
        </a>
        <Link className="ae-focus flex cursor-pointer items-center justify-center bg-brand-red text-[11px] font-semibold text-white" href={`/contact?reason=quote&product=${product.slug}#inquiry-form`}>
          QUOTE
        </Link>
        <a
          className="ae-focus flex cursor-pointer items-center justify-center bg-[#25D366] text-[11px] font-semibold text-white"
          href={`https://wa.me/${siteContact.whatsappRaw}?text=${encodeURIComponent(
            `Hello Aashirwad Engineers, I would like to inquire about ${product.name}.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WHATSAPP
        </a>
      </div>
    </div>
  );
}
