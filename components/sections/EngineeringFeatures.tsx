import { Circuitry, Lightning, Wind, Thermometer, Cube, Fan } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { revealStagger } from "@/lib/motion-presets";

const tiles = [
  {
    title: "PLC Control System",
    body: "PLC-based electrical panels with touchscreen HMI for precision machine control.",
    Icon: Circuitry,
  },
  {
    title: "Servo Motor Precision",
    body: "Servo drive systems for accurate, repeatable cutting and positioning.",
    Icon: Lightning,
  },
  {
    title: "Pneumatic Systems",
    body: "Pneumatic lifting and operational mechanisms for smooth industrial function.",
    Icon: Wind,
  },
  {
    title: "Digital Temperature Control",
    body: "SSR/contactor-based digital controllers engineered for stable thermal performance.",
    Icon: Thermometer,
  },
  {
    title: "Heavy Gauge Steel Frame",
    body: "Steel frame construction engineered for continuous industrial loads.",
    Icon: Cube,
  },
  {
    title: "Impeller Air Circulation",
    body: "High-performance impeller fans for uniform heated air distribution across tape width.",
    Icon: Fan,
  },
];

export function EngineeringFeatures() {
  return (
    <section className="bg-navy-900">
      <div className="ae-container ae-section-y">
        <Reveal>
          <p className="ae-eyebrow-dark">Systems &amp; Build</p>
          <h2 className="ae-h2 mt-4 max-w-[34ch] text-white">Built to Industrial Standards</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tiles.map((t, i) => {
            const Icon = t.Icon;
            return (
              <Reveal key={t.title} delay={revealStagger(i)}>
                <article className="h-full border border-steel-600 bg-navy-800 p-8 transition-[border-color,box-shadow] duration-300 hover:border-white/[0.14] hover:shadow-el1">
                  <Icon className="h-8 w-8 text-brand-red" weight="thin" />
                  <h3 className="mt-6 font-heading text-h4 font-semibold tracking-[-0.02em] text-white">{t.title}</h3>
                  <p className="mt-4 text-[13px] leading-relaxed text-steel-200 md:text-sm">{t.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
