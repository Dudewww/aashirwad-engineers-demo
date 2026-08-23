const proof = [
  {
    label: "Machines delivered",
    value: "200+",
    note: "Installed across raffia tape, woven sack, and packaging lines",
  },
  {
    label: "Product range",
    value: "11",
    note: "Heating, cutting, gusset, mixing, and fabric handling systems",
  },
  {
    label: "Manufacturing",
    value: "In-house",
    note: "Engineering, fabrication, assembly, and pre-dispatch testing",
  },
  {
    label: "Export inquiries",
    value: "Open",
    note: "Documentation and dispatch coordination for domestic and export orders",
  },
];

const process = [
  "Technical consultation and line assessment",
  "Machine engineering and in-house fabrication",
  "Pre-delivery thermal, mechanical, and control checks",
  "Dispatch, commissioning support, and operator training",
];

export function OperationalProof() {
  return (
    <section className="border-t border-steel-200 bg-white">
      <div className="ae-container ae-section-y-sub">
        <p className="ae-eyebrow-dark">Operations &amp; delivery</p>
        <h2 className="ae-h2 mt-5 max-w-[36ch] text-navy-900">Documented Build &amp; Dispatch Discipline</h2>

        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((item) => (
            <div key={item.label} className="border border-steel-200 bg-white p-5 shadow-el1 md:p-6">
              <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
                {item.label}
              </dt>
              <dd className="mt-3 font-heading text-[28px] font-bold leading-none text-navy-900">{item.value}</dd>
              <dd className="mt-3 text-sm leading-relaxed text-steel-600">{item.note}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 border border-steel-200 bg-section-light p-6 md:p-8">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
            Typical delivery path
          </p>
          <ol className="mt-6 space-y-3">
            {process.map((step, i) => (
              <li key={step} className="flex gap-4 text-sm text-steel-600">
                <span className="shrink-0 font-mono text-[12px] font-semibold text-brand-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
