import type { Metadata } from "next";
import React from "react";
import { siteContact } from "@/lib/site";
import DynamicInquiryForm from "@/components/sections/DynamicInquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | Aashirwad Engineers",
  description:
    "Get in touch with Aashirwad Engineers. Factory-direct technical consultation, customized quote inquiries, and machinery support.",
  alternates: { canonical: "/contact" },
  openGraph: {
    siteName: "Aashirwad Engineers",
    locale: "en_IN",
    type: "website",
    title: "Contact Us | Aashirwad Engineers",
    description:
      "Get in touch with Aashirwad Engineers. Factory-direct technical consultation, customized quote inquiries, and machinery support.",
    url: "/contact",
    images: [{ url: "/products/hot-air-oven-v2-cropped-10.png", alt: "Contact Aashirwad Engineers" }],
  },
};

export default function ContactPage() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=19.255167,72.861500`;

  const whatsappUrl = `https://wa.me/${siteContact.whatsappRaw}?text=${encodeURIComponent(
    siteContact.whatsappMessage,
  )}`;

  return (
    <div className="bg-white min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-24">
      {/* Hero Header */}
      <section className="ae-container mb-12 sm:mb-16">
        <p className="ae-eyebrow-dark">Get in Touch</p>
        <h1 className="ae-h2 mt-4 text-navy-900 max-w-[25ch]">
          Contact Our Technical Support & Sales
        </h1>
        <p className="ae-desc-dark mt-5 max-w-[64ch]">
          Have questions about our industrial ovens, cutting systems, or customized machinery configurations? Reach out direct to our Mumbai office or submit the secure form below.
        </p>
      </section>

      {/* Professional Contact Cards */}
      <section className="ae-container mb-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Office Address Card */}
          <div className="border border-steel-200 bg-section-light p-6 rounded-[2px] flex flex-col justify-between h-full shadow-el1">
            <div>
              <div className="flex items-center gap-3 text-brand-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <h3 className="font-heading font-bold text-navy-900 text-sm uppercase tracking-wide">Office Address</h3>
              </div>
              <p className="text-sm text-steel-600 leading-relaxed whitespace-pre-line font-medium mb-6">
                {siteContact.address}
              </p>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ae-focus inline-flex items-center justify-center gap-1.5 w-full bg-navy-900 hover:bg-navy-800 text-white py-2.5 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-colors mt-auto"
            >
              <span>Get Directions</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          {/* Phone Card */}
          <div className="border border-steel-200 bg-section-light p-6 rounded-[2px] flex flex-col justify-between h-full shadow-el1">
            <div>
              <div className="flex items-center gap-3 text-brand-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.122-4.1-6.924-6.924l1.293-.97a1.248 1.248 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <h3 className="font-heading font-bold text-navy-900 text-sm uppercase tracking-wide">Phone Number</h3>
              </div>
              <p className="font-mono text-[14px] text-steel-600 font-semibold mb-6">
                {siteContact.phone}
              </p>
            </div>
            <a
              href={`tel:${siteContact.phoneRaw}`}
              className="ae-focus inline-flex items-center justify-center bg-navy-900 hover:bg-navy-800 text-white py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-[2px] transition-colors mt-auto"
            >
              Call Now
            </a>
          </div>

          {/* Email Card */}
          <div className="border border-steel-200 bg-section-light p-6 rounded-[2px] flex flex-col justify-between h-full shadow-el1">
            <div>
              <div className="flex items-center gap-3 text-brand-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <h3 className="font-heading font-bold text-navy-900 text-sm uppercase tracking-wide">Email Inquiry</h3>
              </div>
              <p className="text-sm text-steel-600 font-mono font-medium mb-6 break-all">
                {siteContact.email}
              </p>
            </div>
            <a
              href={`mailto:${siteContact.email}?subject=${encodeURIComponent("Industrial machinery inquiry")}`}
              className="ae-focus inline-flex items-center justify-center bg-navy-900 hover:bg-navy-800 text-white py-2.5 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-colors mt-auto"
            >
              Email Sales
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="border border-steel-200 bg-section-light p-6 rounded-[2px] flex flex-col justify-between h-full shadow-el1">
            <div>
              <div className="flex items-center gap-3 text-[#25D366] mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.705 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <h3 className="font-heading font-bold text-navy-900 text-sm uppercase tracking-wide">WhatsApp Chat</h3>
              </div>
              <p className="text-sm text-steel-600 font-mono font-semibold mb-6">
                {siteContact.whatsapp}
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ae-focus inline-flex items-center justify-center bg-[#25D366] hover:bg-[#1ebd59] text-white py-2.5 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-colors mt-auto"
            >
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* Google Maps & Dynamic Form Section */}
      <section className="ae-container grid gap-12 lg:grid-cols-2 lg:items-start">
        
        {/* Left Column: Google Maps */}
        <div className="space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold text-navy-900">Google Maps Office Location</h2>
            <p className="text-sm text-steel-600 mt-2 leading-relaxed">
              Find us at Manek Apartment in Dahisar East. Click the map markers to view coordinates or get transit directions from your current location.
            </p>
          </div>
          
          <div className="border border-steel-200 bg-white p-2 shadow-el2 rounded-[2px]">
            <iframe
              src="https://maps.google.com/maps?q=19.255167,72.861500&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aashirwad Engineers Location Map"
              className="w-full h-[320px] sm:h-[380px] rounded-[2px]"
            ></iframe>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-steel-200 pt-4">
            <div>
              <p className="text-xs font-semibold text-navy-900 uppercase font-mono tracking-wider">Address Verification</p>
              <p className="text-xs text-steel-500 mt-1">{siteContact.addressShort}</p>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ae-focus inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-brand-red transition-colors hover:text-brand-redHover shrink-0"
            >
              <span>Open in Google Maps</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Secure Dynamic Form */}
        <div className="space-y-6 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32" id="inquiry-form">
          <div>
            <h2 className="font-heading text-xl font-bold text-navy-900">Send an Online Inquiry</h2>
            <p className="text-sm text-steel-600 mt-2 leading-relaxed">
              Use our interactive form to select your reason for contact. General inquiries and RFQs are immediately routed to our engineers.
            </p>
          </div>
          <DynamicInquiryForm />
        </div>

      </section>
    </div>
  );
}
