import {
  Ruler,
  Buildings,
  SlidersHorizontal,
  Cpu,
  ShieldCheck,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { revealStagger } from "@/lib/motion-presets";

const pillars = [
  {
    title: "Engineering Precision",
    body: "Production consistency—uniform temperature distribution, precise cutting, repeatable output across continuous shifts.",
    Icon: Ruler,
  },
  {
    title: "Heavy-Duty Construction",
    body: "Industrial loads demand industrial frames—heavy-gauge steel, robust electrical systems, insulation rated for 24/7 operation.",
    Icon: Buildings,
  },
  {
    title: "Custom Configuration",
    body: "Adjustable widths, optional devices, and bespoke specifications aligned to your exact manufacturing requirements.",
    Icon: SlidersHorizontal,
  },
  {
    title: "PLC & Digital Control",
    body: "Modern control systems—PLC panels, touchscreen HMI, digital temperature controllers, servo precision where required.",
    Icon: Cpu,
  },
  {
    title: "Proven Application",
    body: "Installed and running across woven sack plants, raffia tape lines, and industrial packaging environments.",
    Icon: ShieldCheck,
  },
  {
    title: "After-Sales Support",
    body: "Commissioning, operator training, and responsive technical assistance—delivery is the start of the relationship.",
    Icon: Wrench,
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-navy-900">
      <div className="texture-steel absolute inset-0 opacity-[0.03]" />
      <div className="relative ae-container ae-section-y">
        <Reveal>
          <p className="ae-eyebrow-dark">Why Us</p>
          <h2 className="ae-h2 mt-4 max-w-[40ch] text-white">
            Why Manufacturing Plants Choose Aashirwad Engineers
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.Icon;
            return (
              <Reveal key={p.title} delay={revealStagger(i)}>
                <article className="h-full border border-steel-600 bg-navy-800 p-8 transition-[border-color,box-shadow] duration-300 hover:border-white/[0.14] hover:shadow-el1">
                  <Icon className="h-8 w-8 text-brand-red" weight="thin" />
                  <h3 className="mt-6 font-heading text-h4 font-semibold tracking-[-0.02em] text-white">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-steel-200 md:text-[15px]">{p.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
