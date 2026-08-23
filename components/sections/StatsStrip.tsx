export function StatsStrip() {
  return (
    <section className="border-b border-steel-200 bg-section-light" aria-label="Company metrics">
      <div className="ae-container flex flex-col items-center py-10 md:py-12">
        <div className="grid w-full grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0">
          <StatCell value="23+" label="Years in production" />
          <StatCell value="11" label="Machines in range" />
          <StatCell value="5" label="Industry applications" />
          <StatCell value="200+" label="Machines delivered" />
        </div>
        <p className="mt-10 text-center text-sm text-steel-600">
          Learn more about our manufacturing history and capabilities on our{" "}
          <a href="/about" className="ae-focus font-semibold text-navy-900 hover:text-brand-red">
            About Us
          </a>{" "}
          page.
        </p>
      </div>
    </section>
  );
}

function StatCell({ value, label }: { value: string; label: string }) {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 text-center sm:px-6">
      <span className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-steel-200 md:block last:hidden" />
      <span className="font-heading text-[32px] font-bold leading-none text-navy-900 sm:text-[40px] md:text-[52px]">{value}</span>
      <span className="mt-3 block max-w-[14ch] font-mono text-[10px] font-semibold uppercase leading-snug tracking-[0.22em] text-brand-red sm:max-w-none sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}
