import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Industries } from "@/components/sections/Industries";
import { EngineeringStandards } from "@/components/sections/EngineeringStandards";
import { Workflow } from "@/components/sections/Workflow";
import { InquiryCTA } from "@/components/sections/InquiryCTA";
import ProductVerticalSlider from "@/components/products/ProductVerticalSlider";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Aashirwad Engineers",
    locale: "en_IN",
    type: "website",
    title: "Industrial Machinery Manufacturer | Aashirwad Engineers",
    description:
      "11 products for raffia tape, woven sack, HDPE tape manufacturing. Hot air ovens, cutting machines, gusset machines, bale presses. Request a quote.",
    url: "/",
    images: [
      {
        url: "/products/hot-air-oven-v2-cropped-10.png",
        alt: "Aashirwad Engineers — Industrial machinery for raffia tape and woven sack manufacturing",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <section className="bg-white">
        <div className="ae-container pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-10 sm:pb-12 md:pb-16">
          <ProductVerticalSlider />
        </div>
      </section>
      <FeaturedProducts />
      <Industries />
      <EngineeringStandards />
      <Workflow />
      <InquiryCTA />
    </>
  );
}
