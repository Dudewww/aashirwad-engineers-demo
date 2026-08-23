import DynamicInquiryForm from "./DynamicInquiryForm";

export function InquiryCTA() {
  return (
    <section className="border-t border-steel-200 bg-section-light">
      <div className="ae-container ae-section-y grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <p className="ae-eyebrow-dark">REQUEST A QUOTE</p>
          <h2 className="ae-h2 mt-5 max-w-[18ch] text-navy-900 sm:max-w-[22ch]">
            Tell Us Your Production Requirements
          </h2>
          <p className="ae-desc-dark mt-6">
            Share your application, production targets, and machine requirements.
            Our engineering team will review your needs and provide technical guidance, suitable machine recommendations,
            and a detailed quotation tailored to your operation.
          </p>

          <div className="mt-8 space-y-6 sm:mt-10">
            <div className="flex gap-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red font-mono text-[11px] font-bold" aria-hidden="true">
                ✓
              </span>
              <div>
                <h3 className="font-semibold text-navy-900 text-[15px]">Technical Consultation</h3>
                <p className="mt-1 text-sm text-steel-600 leading-relaxed">
                  Collaborate directly with our engineering team to plan your production line layout, capacity requirements, and factory footprint.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red font-mono text-[11px] font-bold" aria-hidden="true">
                ✓
              </span>
              <div>
                <h3 className="font-semibold text-navy-900 text-[15px]">Machine Selection Guidance</h3>
                <p className="mt-1 text-sm text-steel-600 leading-relaxed">
                  Get application-specific recommendations based on your material processing specifications, target outputs, and polymer profiles (PP/HDPE).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red font-mono text-[11px] font-bold" aria-hidden="true">
                ✓
              </span>
              <div>
                <h3 className="font-semibold text-navy-900 text-[15px]">Custom-Built Configurations</h3>
                <p className="mt-1 text-sm text-steel-600 leading-relaxed">
                  Configure specific line setups, custom machine widths, PLC &amp; HMI options, and integrated components engineered for your plant.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red font-mono text-[11px] font-bold" aria-hidden="true">
                ✓
              </span>
              <div>
                <h3 className="font-semibold text-navy-900 text-[15px]">Fast Quotation Process</h3>
                <p className="mt-1 text-sm text-steel-600 leading-relaxed">
                  Receive a clear, detailed line-item technical quote outlining machine details, utility loads, lead times, and shipping logistics.
                </p>
              </div>
            </div>
          </div>
        </div>

        <DynamicInquiryForm />
      </div>
    </section>
  );
}

