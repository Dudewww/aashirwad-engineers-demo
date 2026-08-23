import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Choose Us | Machinery Manufacturers in Mumbai | Aashirwad Engineers",
  description:
    "Why choose Aashirwad Engineers for industrial machinery: in-house engineering, 200+ machines delivered, custom configurations, pre-dispatch testing, and after-sales support from Mumbai since 2003.",
  alternates: { canonical: "/why-choose-us" },
  openGraph: {
    siteName: "Aashirwad Engineers",
    locale: "en_IN",
    type: "website",
    title: "Why Choose Aashirwad Engineers | Industrial Machinery Experts",
    description:
      "Why choose Aashirwad Engineers for industrial machinery: in-house engineering, 200+ machines delivered, custom configurations, pre-dispatch testing, and after-sales support from Mumbai since 2003.",
    url: "/why-choose-us",
    images: [{ url: "/products/hot-air-oven-v2-cropped-10.png", alt: "Aashirwad Engineers — Why choose us" }],
  },
};

const BASE_URL = "https://aashirwad-engineers-web3.vercel.app";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Why Choose Us" },
  ],
};

const differentiators = [
  {
    label: "In-House Engineering",
    title: "Full manufacturing control from design to dispatch",
    body: "Every machine is engineered, fabricated, and assembled at our Mumbai facility under direct production supervision. We control the complete manufacturing chain — mechanical layout, electrical panel build, thermal system integration, and final assembly. This means consistent build quality, faster issue resolution, and direct accountability for every machine that leaves our facility. There are no outsourced assemblies or third-party black boxes in our machines.",
  },
  {
    label: "200+ Machines Delivered",
    title: "Proven track record across domestic and export markets",
    body: "Since 2003, we have delivered over 200 machines to raffia tape manufacturers, HDPE tape producers, woven sack converters, plastic processors, and industrial packaging companies. Our machines are running on production floors across India and in export markets, validated by years of continuous industrial duty. This installation base means proven reliability — not prototype performance.",
  },
  {
    label: "Custom Configurations",
    title: "Application-driven machines, not one-size-fits-all",
    body: "We configure machines for your specific production line requirements. Custom widths, optional PLC and HMI control panels, specific electrical specifications, optional modules, and integration with your existing upstream and downstream equipment. Every configuration is validated against your application constraints before manufacturing begins, ensuring the machine works with your production reality from day one.",
  },
  {
    label: "Pre-Dispatch Testing",
    title: "Every machine tested before it reaches your plant",
    body: "Before dispatch, every machine undergoes comprehensive in-house quality verification: temperature uniformity testing for ovens and hot plates, mechanical operation checks for cutting and gusset machines, hydraulic pressure testing for bale presses, control system calibration, and safety interlock validation. You receive a tested machine — not a prototype that needs commissioning debugging.",
  },
  {
    label: "After-Sales Support",
    title: "Commissioning, training, and ongoing technical assistance",
    body: "Our relationship does not end at dispatch. We provide coordinated logistics and installation support, operator orientation and training, and responsive after-sales technical assistance. When a production issue arises, you speak directly to the engineers who built your machine — not a call center. This direct technical contact means faster resolution and fewer production interruptions.",
  },
  {
    label: "Industry Expertise",
    title: "Deep knowledge of raffia tape, woven sack, and HDPE tape processing",
    body: "We do not manufacture general-purpose equipment. Our entire product range is purpose-built for five specific industries: raffia tape manufacturing, HDPE tape extrusion, woven sack conversion, plastic processing, and industrial packaging. This specialization means we understand the real production constraints, material behaviours, and plant-floor realities that general machinery companies overlook.",
  },
];

const capabilities = [
  { value: "11", label: "Machine types in production" },
  { value: "200+", label: "Machines delivered" },
  { value: "5", label: "Industries served" },
  { value: "2003", label: "Year founded" },
  { value: "24/7", label: "Continuous duty design" },
  { value: "23+", label: "Years of production experience" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why should I choose Aashirwad Engineers over other machinery manufacturers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aashirwad Engineers offers full in-house engineering and assembly from their Mumbai facility, with over 200 machines delivered since 2003. Every machine is pre-dispatch tested, custom-configured for your production line, and backed by direct after-sales technical support from the engineers who built it. The specialization in raffia tape, HDPE tape, and woven sack industries means deep application knowledge that general-purpose machinery companies lack.",
      },
    },
    {
      "@type": "Question",
      name: "Does Aashirwad Engineers offer customized machine configurations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Aashirwad Engineers configures machines for specific production line requirements including custom widths, optional PLC and HMI control panels, specific electrical specifications, and integration with existing equipment. Each configuration is validated against application constraints before manufacturing begins.",
      },
    },
    {
      "@type": "Question",
      name: "What quality testing does Aashirwad Engineers perform before delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every machine undergoes comprehensive pre-dispatch testing at the Aashirwad Engineers facility including temperature uniformity verification, mechanical operation checks, hydraulic pressure testing, control system calibration, and safety interlock validation. Machines are shipped only after passing all quality verification stages.",
      },
    },
  ],
};

export default function WhyChooseUsPage() {
  return (
    <div className="bg-white pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-steel-200 pt-24 sm:pt-28 lg:pt-32">
        <div className="ae-container pb-10">
          <nav className="font-mono text-[12px] text-steel-400">
            <Link className="ae-focus rounded-sm transition-colors hover:text-brand-red" href="/">
              Home
            </Link>{" "}
            / <span className="text-navy-900">Why Choose Us</span>
          </nav>
          <h1 className="mt-5 max-w-[16ch] font-heading text-[clamp(2rem,8vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em] text-navy-900 sm:max-w-[22ch]">
            Why Choose Aashirwad Engineers
          </h1>
          <p className="ae-desc-dark mt-5 max-w-[72ch]">
            When you choose Aashirwad Engineers, you choose a manufacturer that builds, tests, and supports every
            machine from our own facility. No outsourced assemblies. No third-party black boxes. Direct engineering
            accountability from design through commissioning.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-steel-200 bg-section-light">
        <div className="ae-container grid grid-cols-2 gap-y-8 py-10 md:grid-cols-3 lg:grid-cols-6 md:gap-y-0 md:py-12">
          {capabilities.map((stat) => (
            <div key={stat.label} className="relative flex flex-col items-center justify-center px-4 text-center sm:px-6">
              <span className="font-heading text-[32px] font-bold leading-none text-navy-900 sm:text-[40px]">{stat.value}</span>
              <span className="mt-3 block max-w-[14ch] font-mono text-[10px] font-semibold uppercase leading-snug tracking-[0.22em] text-brand-red sm:max-w-none sm:text-[11px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <div className="ae-container ae-section-y-sub">
        <p className="ae-eyebrow-dark">What Sets Us Apart</p>
        <h2 className="ae-h2 mt-5 max-w-[30ch] text-navy-900">
          Engineering Accountability at Every Stage
        </h2>
        <p className="ae-desc-dark mt-6 max-w-[62ch]">
          From the initial technical consultation to commissioning on your plant floor, we maintain direct engineering
          accountability for every machine we manufacture.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {differentiators.map((d) => (
            <article key={d.label} className="border border-steel-200 bg-white p-6 shadow-el1 sm:p-8">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
                {d.label}
              </p>
              <h3 className="mt-4 font-heading text-[18px] font-semibold leading-snug tracking-[-0.02em] text-navy-900 sm:text-[20px]">
                {d.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-600">{d.body}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 border border-steel-200 bg-section-light p-6 shadow-el1 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-heading text-[20px] font-semibold text-navy-900 sm:text-[24px]">
                Ready to discuss your production line?
              </p>
              <p className="mt-2 text-sm text-steel-600">
                Talk directly to the engineers who will build your machine.
              </p>
            </div>
            <div className="flex min-w-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#inquiry-form"
                className="ae-focus inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-ae-md bg-brand-red px-5 text-sm font-semibold text-white hover:bg-brand-redHover sm:min-h-[48px] sm:px-7"
              >
                Request a quote
              </Link>
              <Link
                href="/products"
                className="ae-focus inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-ae-md border border-steel-200 bg-white px-5 text-sm font-semibold text-navy-900 hover:border-brand-red hover:text-brand-red sm:min-h-[48px] sm:px-7"
              >
                View machine range
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
