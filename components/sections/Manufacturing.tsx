import Link from "next/link";

const capabilities = [
  {
    label: "In-house assembly",
    detail: "Machines engineered, fabricated, and integrated at our facility under production supervision.",
  },
  {
    label: "Pre-delivery testing",
    detail: "Thermal, mechanical, and control checks completed before dispatch to your plant.",
  },
  {
    label: "Export-ready dispatch",
    detail: "Packaging and documentation aligned to domestic and export delivery requirements.",
  },
];

const processDetail = [
  {
    step: "01",
    title: "Technical consultation",
    body: "Application review, line constraints, and machine selection or custom configuration scope.",
  },
  {
    step: "02",
    title: "Engineering & fabrication",
    body: "Mechanical layout, electrical panel build, and assembly against approved specifications.",
  },
  {
    step: "03",
    title: "Quality verification",
    body: "In-house checks on temperature uniformity, mechanical operation, and control response before release.",
  },
  {
    step: "04",
    title: "Dispatch & commissioning",
    body: "Coordinated logistics, installation support, operator orientation, and after-sales technical contact.",
  },
];


export function Manufacturing({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className={detailed ? "bg-white pt-20 sm:pt-24 lg:pt-28" : "border-t border-steel-200 bg-section-light"}>
      <div className={`ae-container ${detailed ? "pb-16 sm:pb-20" : "ae-section-y-sub"}`}>
        {detailed ? (
          <nav className="font-mono text-[12px] text-steel-400">
            <Link className="ae-focus rounded-sm transition-colors hover:text-brand-red" href="/">
              Home
            </Link>{" "}
            / <span className="text-navy-900">Manufacturing</span>
          </nav>
        ) : null}

        <p className={`ae-eyebrow-dark ${detailed ? "mt-6 sm:mt-8" : ""}`}>Manufacturing</p>
        <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className={`${detailed ? "ae-h2" : "ae-h2 max-w-[30ch]"} text-navy-900`}>
            In-House Engineering &amp; Assembly
          </h2>
          {!detailed ? (
            <Link
              href="/manufacturing"
              className="ae-focus shrink-0 text-sm font-semibold text-navy-900 transition-colors hover:text-brand-red"
            >
              View manufacturing capability →
            </Link>
          ) : null}
        </div>
        <p className="ae-desc-dark mt-6 max-w-[62ch]">
          Every machine is built and quality-checked in our facility consistent fabrication standards,
          controlled turnaround from order to delivery, and technical accountability through commissioning.
        </p>

        <dl className="mt-10 grid gap-4 md:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.label} className="border border-steel-200 bg-white p-6 shadow-el1">
              <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
                {c.label}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-steel-600">{c.detail}</dd>
            </div>
          ))}
        </dl>

        {detailed ? (
          <>
            <div className="mt-12 border border-steel-200 bg-white p-6 shadow-el1 md:p-8">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
                Production process
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {processDetail.map((p) => (
                  <div key={p.step} className="border-t border-steel-200 pt-5">
                    <p className="font-mono text-[12px] font-semibold text-brand-red">{p.step}</p>
                    <p className="mt-3 font-heading text-[18px] font-semibold text-navy-900">{p.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-steel-600">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
