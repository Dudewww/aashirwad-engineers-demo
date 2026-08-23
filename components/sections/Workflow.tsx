const steps = [
  { title: "INQUIRY", body: "Submit inquiry or call directly." },
  { title: "CONSULTATION", body: "Technical consultation with applications focus." },
  { title: "ENGINEERING", body: "Machine design and manufacturing execution." },
  { title: "QUALITY CHECK", body: "In-house thermal, mechanical, and control checks before dispatch." },
  { title: "DELIVERY", body: "Delivery to facility with coordinated logistics." },
  { title: "SUPPORT", body: "Commissioning, training, and after-sales assistance." },
];

export function Workflow() {
  return (
    <section className="bg-section-light text-navy-900">
      <div className="ae-container ae-section-y">
        <p className="ae-eyebrow-light">Process</p>
        <h2 className="ae-h2 mt-4 text-navy-900">From Inquiry to Installation</h2>

        <div className="mt-12 space-y-8 sm:hidden">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-4">
              <div className="flex w-10 shrink-0 flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-steel-600 bg-section-light font-mono text-sm font-semibold text-navy-900">
                  {String(i + 1).padStart(2, "0")}
                </div>
                {i < steps.length - 1 ? (
                  <div className="mt-3 h-full w-[1.5px] grow bg-steel-600/60" aria-hidden />
                ) : null}
              </div>
              <div className="pb-2">
                <p className="text-[13px] font-semibold uppercase tracking-wide text-navy-900">{s.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-steel-600">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-12 hidden sm:block">
          <div className="absolute left-0 right-0 top-[22px] hidden h-[1.5px] bg-steel-600/70 xl:block" aria-hidden />
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative pt-2">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-steel-600 bg-section-light font-mono text-sm font-semibold text-navy-900">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-6 text-[12px] font-semibold uppercase tracking-wide text-navy-900 lg:text-[13px]">
                  {s.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-steel-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
