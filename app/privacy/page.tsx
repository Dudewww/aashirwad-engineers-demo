import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Aashirwad Engineers",
  description:
    "Privacy policy for Aashirwad Engineers. Learn how we handle inquiry data, contact information, and website usage.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    siteName: "Aashirwad Engineers",
    locale: "en_IN",
    type: "website",
    title: "Privacy Policy | Aashirwad Engineers",
    description:
      "Privacy policy for Aashirwad Engineers. Learn how we handle inquiry data, contact information, and website usage.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white">
      <div className="ae-container ae-section-y">
        <h1 className="font-heading text-[32px] font-bold tracking-[-0.02em] text-navy-900 md:text-h2">Privacy Policy</h1>
        <div className="mt-8 max-w-readable space-y-5 text-sm leading-relaxed text-steel-600">
          <p>
            Aashirwad Engineers uses this website to respond to business inquiries, provide product information,
            and support prospective customers evaluating industrial machinery.
          </p>
          <p>
            Information submitted through inquiry forms or direct email may be used to respond to your request,
            prepare quotations, and continue pre-sales or after-sales communication relevant to your inquiry.
          </p>
          <p>
            This page is a general informational privacy notice and should be reviewed against your final legal,
            compliance, and regional data-handling requirements before launch.
          </p>
        </div>
      </div>
    </section>
  );
}
