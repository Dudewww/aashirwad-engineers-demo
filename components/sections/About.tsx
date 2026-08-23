import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { REVEAL_COLUMN_OFFSET } from "@/lib/motion-presets";
import { GearSix, Wrench, Cpu, Factory } from "@phosphor-icons/react/dist/ssr";

const IMG = "/products/hot-air-oven-v2.png";

const bullets = [
  {
    icon: GearSix,
    text: "Precision-engineered machinery for continuous 24/7 industrial operation.",
  },
  {
    icon: Wrench,
    text: "Custom configurations for specific production line requirements.",
  },
  {
    icon: Cpu,
    text: "Digital temperature control and PLC automation across the product range.",
  },
  {
    icon: Factory,
    text: "Manufactured and assembled at our dedicated engineering facility.",
  },
];

export function About() {
  return (
    <section className="bg-section-light text-navy-900">
      <div className="ae-container ae-section-y grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-[8px] shadow-el2">
            <div className="relative aspect-[4/5] w-full md:aspect-[3/4] lg:h-full lg:min-h-[560px] lg:aspect-auto">
              <Image
                src={IMG}
                alt="Factory assembly and precision machinery — Aashirwad Engineers"
                fill
                className="object-cover object-center"
                sizes="(max-width:1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={REVEAL_COLUMN_OFFSET} className="flex flex-col justify-center">
          <p className="ae-eyebrow-light">About Aashirwad Engineers</p>
          <h2 className="ae-h2 mt-4 max-w-[22ch] text-navy-900">
            Engineering Machinery Built for Demanding Industrial Production Environments
          </h2>
          <p className="ae-desc-on-light mt-6">
            Our ovens maintain tight temperature uniformity across the full tape width—because inconsistent heat
            means wasted tape and production downtime. We build heavy-duty systems for continuous loads, with controls
            and mechanical layouts aligned to real plant constraints—not brochure promises.
          </p>

          <ul className="mt-10 space-y-5">
            {bullets.map((b) => (
              <li key={b.text} className="flex gap-4">
                <b.icon className="mt-0.5 h-7 w-7 shrink-0 text-steel-600" weight="thin" />
                <p className="text-sm leading-relaxed text-navy-900 md:text-[15px]">{b.text}</p>
              </li>
            ))}
          </ul>

          <Link
            href="/products"
            className="ae-focus mt-10 inline-flex cursor-pointer items-center gap-2 rounded-sm text-sm font-semibold text-navy-900 transition-colors hover:text-brand-red"
          >
            Explore Our Products <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
