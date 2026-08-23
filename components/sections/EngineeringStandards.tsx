import Link from "next/link";

const standards = [
  {
    title: "Heavy-duty fabrication",
    body: "Steel frames, insulation, and electrical systems engineered for continuous shifts, in-house assembly, and production-grade plant loads.",
    spec: "24/7 duty / Heavy-gauge steel",
  },
  {
    title: "Control & automation",
    body: "PLC panels, touchscreen HMI, and digital PID temperature control verified against real operating conditions before dispatch.",
    spec: "PLC / HMI / PID control",
  },
  {
    title: "Custom line integration",
    body: "Widths, optional modules, and electrical specifications aligned to your production line, application constraints, and downstream handling.",
    spec: "Custom widths / Optional devices",
  },
  {
    title: "Commissioning & support",
    body: "Pre-delivery thermal, mechanical, and control checks paired with installation support, operator training, and responsive technical assistance.",
    spec: "In-house QC / After-sales support",
  },
];

export function EngineeringStandards() {
  return (
    <section className="border-t border-steel-200 bg-white">
      <div className="ae-container ae-section-y">
        <p className="ae-eyebrow-dark">Engineering &amp; build</p>
        <h2 className="ae-h2 mt-5 max-w-[34ch] text-navy-900">Built for Continuous Industrial Operation</h2>
        <p className="ae-desc-dark mt-6 max-w-[62ch]">
          Machinery engineered for raffia tape, woven sack, and plastic processing lines with specification-led
          fabrication, in-house quality checks, and controlled delivery readiness. Discover{" "}
          <Link href="/why-choose-us" className="ae-focus font-semibold text-brand-red hover:text-brand-redHover">
            why leading manufacturers choose us
          </Link>{" "}
          for their production lines.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {standards.map((item) => (
            <article key={item.title} className="border border-steel-200 bg-white p-6 shadow-el1 md:p-8">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
                {item.spec}
              </p>
              <h3 className="mt-4 font-heading text-[20px] font-semibold leading-snug tracking-[-0.02em] text-navy-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-600">{item.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-steel-600">
          Need a non-standard configuration?{" "}
          <Link href="/contact#inquiry-form" className="ae-focus font-semibold text-navy-900 hover:text-brand-red">
            Request a custom machine specification →
          </Link>
        </p>
      </div>
    </section>
  );
}
