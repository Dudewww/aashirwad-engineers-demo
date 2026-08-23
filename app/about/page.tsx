import type { Metadata } from "next";
import Link from "next/link";
import { Tier2CatalogCard } from "@/components/products/Tier2CatalogCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "About Us | Aashirwad Engineers | Machinery Manufacturer",
  description:
    "Aashirwad Engineers manufactures specialized machinery for raffia tape, HDPE tape, and woven sack conversion. Founded in 2003, 200+ machines delivered, in-house engineering from Mumbai.",
  alternates: { canonical: "/about" },
  openGraph: {
    siteName: "Aashirwad Engineers",
    locale: "en_IN",
    type: "website",
    title: "About Aashirwad Engineers | Mumbai-based Machinery Manufacturer",
    description:
      "Aashirwad Engineers manufactures specialized machinery for raffia tape, HDPE tape, and woven sack conversion. Founded in 2003, 200+ machines delivered, in-house engineering from Mumbai.",
    url: "/about",
    images: [{ url: "/products/hot-air-oven-v2-cropped-10.png", alt: "Aashirwad Engineers — About our engineering team" }],
  },
};

const BASE_URL = "https://aashirwad-engineers-web3.vercel.app";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "About" },
  ],
};

const companyFaqs = [
  {
    question: "When was Aashirwad Engineers founded?",
    answer: "Aashirwad Engineers was founded in 2003 in Mumbai, Maharashtra. The company has over two decades of experience manufacturing industrial machinery for raffia tape, HDPE tape, woven sack, and plastic processing industries.",
  },
  {
    question: "Where is Aashirwad Engineers located?",
    answer: "Aashirwad Engineers is located at B1/201, Manek Apartment, Near Vidyamandir School, Chatrapati Shivaji Marg, Dahisar East, Mumbai-400068, Maharashtra, India. The facility handles engineering, assembly, and pre-dispatch testing.",
  },
  {
    question: "How many machines has Aashirwad Engineers delivered?",
    answer: "Aashirwad Engineers has delivered over 200 machines to date across domestic and export markets, serving raffia tape manufacturers, HDPE tape producers, woven sack converters, plastic processors, and industrial packaging companies.",
  },
  {
    question: "Does Aashirwad Engineers manufacture custom machines?",
    answer: "Yes. Aashirwad Engineers offers application-driven configurations including custom widths, optional PLC and HMI control panels, and machine specifications aligned to your production line constraints, downstream handling requirements, and material types.",
  },
  {
    question: "What industries does Aashirwad Engineers serve?",
    answer: "Aashirwad Engineers serves five primary industries: raffia tape manufacturing, HDPE tape extrusion, woven sack conversion, plastic processing, and industrial packaging. Machinery is engineered for continuous-duty plant operation across all five sectors.",
  },
  {
    question: "What products does Aashirwad Engineers manufacture?",
    answer: "Aashirwad Engineers manufactures 11 industrial machines: Hot Air Oven, Hot Plate, Combined Hot Air Oven + Hot Plate, Automatic Cutting & Stitching Machine, Roll To Roll Center Gusset Machine, Twist/Centre Gusset Device Machine, Cutting Machine, Turbo Mixer, Trim Cutter, Hydraulic Bale Press Machine, and Fabric Opener Machine.",
  },
  {
    question: "Does Aashirwad Engineers provide after-sales support?",
    answer: "Yes. Aashirwad Engineers provides commissioning support, operator training, and responsive after-sales technical assistance. Pre-delivery testing (thermal, mechanical, and control checks) is completed at the facility before dispatch.",
  },
  {
    question: "Does Aashirwad Engineers handle export orders?",
    answer: "Yes. Aashirwad Engineers handles export-ready dispatch with packaging and documentation aligned to both domestic and international delivery requirements. Contact the sales team for export inquiry details.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: companyFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const highlights = [
  {
    label: "Foundation & Experience",
    detail: "Established in 2003 in Mumbai, Maharashtra. Over two decades of continuous machinery manufacturing for India's raffia tape and woven sack industries.",
  },
  {
    label: "Track Record",
    detail: "200+ machines delivered across domestic and export markets. Five industry verticals served with 11 machine types in active production.",
  },
  {
    label: "Engineering",
    detail: "Conservative mechanical design with production-grade PLC, HMI, and PID controls. Every machine built for continuous 24/7 industrial duty cycles.",
  },
  {
    label: "Accountability",
    detail: "In-house fabrication, assembly, and pre-dispatch testing. Thermal, mechanical, and control checks completed before every shipment.",
  },
];

export default function AboutPage() {
  const featured = products.filter((p) => p.tier === 1).slice(0, 3);

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
            / <span className="text-navy-900">About</span>
          </nav>
          <h1 className="mt-5 max-w-[14ch] font-heading text-[clamp(2rem,8vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em] text-navy-900 sm:max-w-[18ch]">
            Engineering Industrial Machinery Since 2003
          </h1>
          <p className="ae-desc-dark mt-5 max-w-[72ch]">
            Aashirwad Engineers is a Mumbai-based industrial machinery manufacturer founded in 2003. We design,
            engineer, and assemble specialized equipment for the raffia tape, HDPE tape, woven sack, and plastic
            processing industries. With over 200 machines delivered to domestic and export markets, we focus on thermal
            consistency, mechanical durability, and predictable output on the plant floor.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <div className="ae-container ae-section-y-sub">
        <dl className="grid gap-4 md:grid-cols-2">
          {highlights.map((h) => (
            <div key={h.label} className="border border-steel-200 bg-white p-6 shadow-el1">
              <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">{h.label}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-steel-600">{h.detail}</dd>
            </div>
          ))}
        </dl>

        {/* Manufacturing Expertise */}
        <div className="mt-12 border border-steel-200 bg-section-light p-6 shadow-el1 sm:p-8">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
            Manufacturing Expertise
          </p>
          <div className="mt-6 grid gap-6 text-sm leading-relaxed text-steel-600 md:grid-cols-2">
            <div>
              <p className="font-semibold text-navy-900">In-House Engineering & Assembly</p>
              <p className="mt-2">
                Every machine is engineered, fabricated, and integrated at our Umbergaon facility under direct production
                supervision. We control the full manufacturing chain: mechanical layout, electrical panel build, thermal
                system integration, and final assembly. This ensures consistent fabrication standards and accountability
                from design through delivery.
              </p>
            </div>
            <div>
              <p className="font-semibold text-navy-900">Quality Verification & Dispatch</p>
              <p className="mt-2">
                Before dispatch, every machine undergoes in-house quality checks covering temperature uniformity,
                mechanical operation, control response, and safety interlocks. Packaging and documentation are prepared
                for both domestic delivery and export shipments, with coordinated logistics, installation support,
                operator orientation, and ongoing after-sales technical contact.
              </p>
            </div>
          </div>
        </div>

        {/* Industries Summary */}
        <div className="mt-8 border border-steel-200 bg-white p-6 shadow-el1 sm:p-8">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
            Industries We Serve
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-steel-600 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Raffia Tape Manufacturing",
              "HDPE Tape Extrusion",
              "Woven Sack Conversion",
              "Plastic Processing",
              "Industrial Packaging",
            ].map((ind) => (
              <li key={ind} className="flex gap-2">
                <span className="font-mono text-brand-red" aria-hidden>–</span>
                {ind}
              </li>
            ))}
          </ul>
        </div>

        {/* Company FAQ */}
        <div className="mt-14 border-t border-steel-200 pt-12">
          <p className="ae-eyebrow-dark">Frequently Asked Questions</p>
          <h2 className="ae-h2 mt-5 max-w-[30ch] text-navy-900">About Aashirwad Engineers</h2>
          <div className="mt-8 space-y-4">
            {companyFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-steel-200 bg-white shadow-el1"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-sm font-semibold text-navy-900 sm:p-6 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="shrink-0 font-mono text-brand-red transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-steel-200 px-5 pb-5 pt-4 text-sm leading-relaxed text-steel-600 sm:px-6 sm:pb-6">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Representative Machines */}
        <div className="mt-14 border-t border-steel-200 pt-12">
          <p className="ae-eyebrow-dark">Representative machines</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <Tier2CatalogCard key={p.slug} product={p} featured />
            ))}
          </div>
          <Link
            href="/products"
            className="ae-focus mt-10 inline-flex text-sm font-semibold text-navy-900 transition-colors hover:text-brand-red"
          >
            View full catalog →
          </Link>
        </div>
      </div>
    </div>
  );
}
