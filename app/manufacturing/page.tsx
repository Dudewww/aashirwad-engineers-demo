import type { Metadata } from "next";
import { Manufacturing } from "@/components/sections/Manufacturing";

export const metadata: Metadata = {
  title: "Manufacturing Process — In-House Engineering | Aashirwad Engineers",
  description:
    "In-house fabrication, CNC machining, assembly, and pre-dispatch testing. Learn how Aashirwad Engineers manufactures industrial machinery for continuous plant operation.",
  alternates: { canonical: "/manufacturing" },
  openGraph: {
    siteName: "Aashirwad Engineers",
    locale: "en_IN",
    type: "website",
    title: "Manufacturing Process — In-House Engineering | Aashirwad Engineers",
    description:
      "In-house fabrication, CNC machining, assembly, and pre-dispatch testing. Learn how Aashirwad Engineers manufactures industrial machinery for continuous plant operation.",
    url: "/manufacturing",
    images: [{ url: "/products/hot-air-oven-v2-cropped-10.png", alt: "Aashirwad Engineers — Manufacturing process" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://aashirwad-engineers-web3.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Manufacturing" },
  ],
};

export default function ManufacturingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Manufacturing detailed />
    </>
  );
}
