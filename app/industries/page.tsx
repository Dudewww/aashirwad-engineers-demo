import type { Metadata } from "next";
import { Industries } from "@/components/sections/Industries";

export const metadata: Metadata = {
  title: "Industries We Serve — Raffia, HDPE, Woven Sack | Aashirwad Engineers",
  description:
    "Industrial machinery solutions for raffia tape manufacturing, HDPE tape extrusion, woven sack conversion, plastic processing, and industrial packaging lines.",
  alternates: { canonical: "/industries" },
  openGraph: {
    siteName: "Aashirwad Engineers",
    locale: "en_IN",
    type: "website",
    title: "Industries We Serve — Raffia, HDPE, Woven Sack | Aashirwad Engineers",
    description:
      "Industrial machinery solutions for raffia tape manufacturing, HDPE tape extrusion, woven sack conversion, plastic processing, and industrial packaging lines.",
    url: "/industries",
    images: [{ url: "/products/hot-air-oven-v2-cropped-10.png", alt: "Aashirwad Engineers — Industries we serve" }],
  },
};

export default function IndustriesPage() {
  return (
    <div className="bg-white pt-20 lg:pt-24">
      <Industries />
    </div>
  );
}
