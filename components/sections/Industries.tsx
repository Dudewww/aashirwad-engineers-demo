"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { industries } from "@/lib/industries";

export function Industries() {
  return (
    <section className="bg-section-light">
      <div className="ae-container ae-section-y">
        <p className="ae-eyebrow-dark">Applications</p>
        <h2 className="ae-h2 mt-5 max-w-[28ch] text-navy-900">Industries We Serve</h2>
        <p className="ae-desc-dark mt-6 max-w-[62ch]">
          Machines applied across raffia tape, HDPE tape, woven sack, plastic processing, and industrial
          packaging production lines.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 2xl:grid-cols-5">
          {industries.map((ind) => (
            <IndustryCard key={ind.fileName} industry={ind} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry }: { industry: (typeof industries)[number] }) {
  const [src, setSrc] = useState(`/industries/${industry.fileName}`);
  const [isFallback, setIsFallback] = useState(false);

  const handleImageError = () => {
    if (!isFallback) {
      setSrc(industry.productFallback);
      setIsFallback(true);
    } else {
      setSrc("");
    }
  };

  return (
    <Link
      href="/industries"
      className="ae-focus group relative isolate block h-[320px] sm:h-[350px] md:h-[360px] w-full cursor-pointer overflow-hidden border border-steel-200 bg-white shadow-el1 transition-[border-color,box-shadow] duration-200 hover:border-brand-red hover:shadow-el2"
    >
      {src ? (
        <Image
          src={src}
          alt={`${industry.title} application reference`}
          fill
          className="object-cover object-center opacity-100 transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 20vw"
          onError={handleImageError}
        />
      ) : (
        <div className="absolute inset-0 flex items-end p-4 sm:p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-red">Application documentation pending</p>
        </div>
      )}

      <div className="industry-scrim pointer-events-none absolute inset-0" />

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h3 className="break-words font-heading text-[15px] font-semibold leading-snug tracking-[-0.01em] text-white sm:text-[17px] md:text-[18px]">
          {industry.title}
        </h3>
        <p className="mt-2 text-[12px] leading-relaxed text-white/85 sm:mt-2.5 sm:text-[13px]">{industry.description}</p>
      </div>
    </Link>
  );
}
