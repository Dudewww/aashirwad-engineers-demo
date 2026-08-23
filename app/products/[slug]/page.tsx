import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/products/ProductDetail";
import { getProduct, getRelated, products, categoryLabels } from "@/lib/products";
import { productFaqs } from "@/lib/product-faqs";

const BASE_URL = "https://aashirwad-engineers-web3.vercel.app";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const cat = categoryLabels[product.category];
  const specSummary = Object.entries(product.specs)
    .slice(0, 3)
    .map(([k, v]) => `${k}: ${v}`)
    .join(". ");

  const description = `${product.short} ${specSummary}. Factory-direct pricing from Aashirwad Engineers, Mumbai.`;

  return {
    title: `${product.name} — Specifications & Inquiry | Aashirwad Engineers`,
    description,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      siteName: "Aashirwad Engineers",
      locale: "en_IN",
      type: "website",
      title: `${product.name} — Specifications & Inquiry | Aashirwad Engineers`,
      description,
      url: `/products/${slug}`,
      images: [
        {
          url: product.images[0],
          alt: `${product.name} — industrial machinery by Aashirwad Engineers`,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getRelated(product.slug, 3);

  const cat = categoryLabels[product.category];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description || product.short,
    image: `${BASE_URL}${product.images[0]}`,
    brand: { "@type": "Brand", name: "Aashirwad Engineers" },
    manufacturer: {
      "@type": "Organization",
      name: "Aashirwad Engineers",
      url: BASE_URL,
    },
    category: cat,
    additionalProperty: Object.entries(product.specs).map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${BASE_URL}/products` },
      { "@type": "ListItem", position: 3, name: product.name },
    ],
  };

  const faqs = productFaqs[product.slug] || [];

  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <ProductDetail
        product={product}
        related={related.length ? related : products.filter((p) => p.slug !== product.slug).slice(0, 3)}
        faqs={faqs}
      />
    </>
  );
}
