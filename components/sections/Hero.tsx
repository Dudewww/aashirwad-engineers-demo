import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { HeroProductCarousel } from "./HeroProductCarousel";
import { products } from "@/lib/products";

export function Hero() {
  return (
    <section className="border-b border-steel-200 bg-white">
      <div className="ae-container grid gap-8 pb-14 pt-24 sm:gap-12 sm:pb-16 sm:pt-32 lg:grid-cols-12 lg:items-stretch lg:gap-16 lg:pb-24 lg:pt-36">
        <div className="min-w-0 lg:col-span-6">
          <p className="ae-eyebrow-dark">Industrial Machinery Manufacturer</p>

          <h1 className="mt-5 max-w-[11ch] font-heading text-[clamp(2rem,8vw,3.4rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-navy-900 sm:max-w-[12ch]">
            Raffia Tape &amp; Woven Sack Machinery
          </h1>

          <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-steel-600 sm:text-base lg:text-lg">
            Hot air ovens, cutting and gusset systems, mixers, and fabric handling equipment engineered
            for continuous plant operation and export delivery.
          </p>

          <p className="mt-6 flex max-w-full flex-wrap gap-x-3 gap-y-2 font-mono text-[11px] leading-relaxed text-steel-400 sm:text-[12px]">
            <span>
              <span className="text-navy-900">11</span> machines
            </span>
            <span>
              <span className="text-navy-900">PLC &amp; HMI</span> options
            </span>
            <span>
              <span className="text-navy-900">Custom widths</span>
            </span>
            <span>
              <span className="text-navy-900">23+</span> years in production
            </span>
          </p>

          <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/products" variant="primary" className="w-full min-w-0 justify-center sm:min-w-[11.5rem] sm:w-auto">
              View machine range
            </Button>
            <Button href="/contact#inquiry-form" variant="secondary" className="w-full min-w-0 justify-center sm:min-w-[11.5rem] sm:w-auto">
              Request a quote
            </Button>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-6 lg:flex lg:flex-col lg:justify-center">
          <HeroProductCarousel products={products} />
        </div>
      </div>
    </section>
  );
}
