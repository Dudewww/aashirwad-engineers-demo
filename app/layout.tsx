import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";

const heading = Inter({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const data = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-data",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aashirwad-engineers-web3.vercel.app"),
  title: "Industrial Machinery Manufacturer | Aashirwad Engineers",
  description:
    "11 products for raffia tape, woven sack, HDPE tape manufacturing. Hot air ovens, cutting machines, gusset machines, bale presses. Request a quote.",
  openGraph: {
    siteName: "Aashirwad Engineers",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const SITE_URL = "https://aashirwad-engineers-web3.vercel.app";

const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "Aashirwad Engineers",
      "url": "https://aashirwadengineers.com",
      "logo": "https://aashirwadengineers.com/icon.svg",
      "description": "Aashirwad Engineers is a Mumbai-based industrial machinery manufacturer specializing in hot air ovens, cutting and stitching machines, gusset systems, turbo mixers, bale presses, and fabric handling equipment for raffia tape, HDPE tape, woven sack, and plastic processing industries. Founded in 2003 with over 200 machines delivered.",
      "foundingDate": "2003",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 10,
        "maxValue": 50
      },
      "sameAs": [],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-91733-96386",
        "contactType": "customer service",
        "email": "rajpurarushabh@gmail.com",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      "name": "Aashirwad Engineers",
      "description": "Industrial machinery manufacturer for raffia tape, HDPE tape, woven sack, and plastic processing industries. In-house engineering, assembly, and pre-dispatch testing from Mumbai.",
      "image": `${SITE_URL}/products/hot-air-oven-v2-cropped-10.png`,
      "telephone": "+91-91733-96386",
      "email": "rajpurarushabh@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "B1/201, Manek Apartment, Near Vidyamandir School, Chatrapati Shivaji Marg, Dahisar East",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400068",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.255167,
        "longitude": 72.861500
      },
      "url": SITE_URL,
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${data.variable}`}>
      <body className="min-h-[100dvh] bg-white font-body text-navy-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[600] focus:rounded-[2px] focus:bg-white focus:px-4 focus:py-2 focus:text-navy-900 focus:shadow-el2"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
