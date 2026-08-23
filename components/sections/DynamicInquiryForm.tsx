"use client";

import React, { useState, useTransition, Suspense, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSearchParams, usePathname } from "next/navigation";
import { products } from "@/lib/products";
import { siteContact } from "@/lib/site";

// Optional: If you want to connect to Supabase later, import the client:
// import { supabase } from "@/lib/supabaseClient";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  reason: "" | "general" | "quote";
  message: string;
  productInterest: string;
  timeline: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  phone?: string;
  reason?: string;
  message?: string;
  productInterest?: string;
  timeline?: string;
}

const generateWhatsAppMessage = (
  formData: FormData,
  pathname: string,
  searchParams: URLSearchParams
): string => {
  const lines: string[] = ["\u{1F3ED} *NEW MACHINE INQUIRY*", ""];

  if (formData.fullName.trim()) {
    lines.push(`• *Full Name:* ${formData.fullName.trim()}`, "");
  }
  if (formData.email.trim()) {
    lines.push(`• *Email Address:* ${formData.email.trim()}`, "");
  }
  if (formData.company.trim()) {
    lines.push(`• *Company / Plant:* ${formData.company.trim()}`, "");
  }
  if (formData.phone.trim()) {
    lines.push(`• *Phone Number:* ${formData.phone.trim()}`, "");
  }
  
  if (formData.reason) {
    const reasonLabel = formData.reason === "quote" ? "Request a Quote" : "General Inquiry";
    lines.push(`• *Reason For Contact:* ${reasonLabel}`, "");
  }

  if (formData.reason === "quote") {
    if (formData.productInterest) {
      const matchedProduct = products.find(p => p.slug === formData.productInterest);
      const prodName = matchedProduct ? matchedProduct.name : (formData.productInterest === "other" ? "Other / Custom Engineering" : formData.productInterest);
      lines.push(`• *Product Interest:* ${prodName}`, "");
    }
    if (formData.timeline) {
      let timelineText = formData.timeline;
      if (formData.timeline === "immediate") timelineText = "Immediate (1 - 3 months)";
      else if (formData.timeline === "mid_term") timelineText = "Mid-term (3 - 6 months)";
      else if (formData.timeline === "planning") timelineText = "Planning phase (> 6 months)";
      lines.push(`• *Estimated Timeline:* ${timelineText}`, "");
    }
  }

  if (formData.message.trim()) {
    lines.push(`• *Message:* ${formData.message.trim()}`, "");
  }

  // Source field
  const productSlug = searchParams.get("product");
  let sourceText = "";
  if (productSlug) {
    sourceText = "Product Page Inquiry";
  } else if (pathname === "/") {
    sourceText = "Homepage Inquiry Form";
  } else if (pathname === "/contact") {
    sourceText = "Contact Page Inquiry Form";
  } else {
    sourceText = "Website Inquiry Form";
  }
  lines.push(`• *Source:* ${sourceText}`, "");

  // Product URL if from product page
  if (productSlug) {
    const prodUrl = `${window.location.origin}/products/${productSlug}`;
    lines.push(`• *Product URL:* ${prodUrl}`, "");
  }

  // Submitted At
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
  lines.push(`• *Submitted At:* ${dateStr}, ${timeStr}`, "");

  // Divider and footer
  lines.push("━━━━━━━━━━━━━━━", "");
  lines.push("Please contact me regarding this requirement.");

  return lines.join("\n").trim();
};

function InquiryFormInner() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const initialProduct = searchParams.get("product") || "";
  const initialReason = searchParams.get("reason") || (initialProduct ? "quote" : "");

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    reason: initialReason as any,
    message: "",
    productInterest: initialProduct,
    timeline: "",
  });

  // If URL params change, we could update the form, but just reading initial is usually fine.
  useEffect(() => {
    const product = searchParams.get("product");
    const reason = searchParams.get("reason");
    if (product || reason) {
      setFormData(prev => ({
        ...prev,
        reason: (reason || (product ? "quote" : prev.reason)) as any,
        productInterest: product || prev.productInterest,
      }));
    }
  }, [searchParams]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field as the user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company / Plant name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.reason) {
      newErrors.reason = "Please select a reason for contact";
    }

    if (formData.reason === "general") {
      if (!formData.message.trim()) {
        newErrors.message = "Message is required for general inquiries";
      } else if (formData.message.trim().length < 10) {
        newErrors.message = "Message must be at least 10 characters";
      }
    }

    if (formData.reason === "quote") {
      if (!formData.productInterest) {
        newErrors.productInterest = "Please select a product of interest";
      }
      if (!formData.timeline) {
        newErrors.timeline = "Please select an estimated timeline";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    // Generate and open WhatsApp message synchronously to bypass popup blockers
    try {
      const messageText = generateWhatsAppMessage(formData, pathname, searchParams);
      const encodedText = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${siteContact.whatsappRaw}?text=${encodedText}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error("Failed to open WhatsApp window:", err);
    }

    startTransition(async () => {
      try {
        // Mock payload creation
        const payload = {
          full_name: formData.fullName.trim(),
          email: formData.email.trim(),
          company_plant: formData.company.trim(),
          phone: formData.phone.trim(),
          reason_for_contact: formData.reason,
          // Conditional fields map to columns that can accept NULL in database
          message: formData.reason === "general" ? formData.message.trim() : null,
          product_interest: formData.reason === "quote" ? formData.productInterest : null,
          estimated_timeline: formData.reason === "quote" ? formData.timeline : null,
          created_at: new Date().toISOString(),
        };

        // Log the payload for demonstration
        console.log("Submitting payload to database:", payload);

        // --- SUPABASE INTEGRATION BLUEPRINT ---
        // To wire this up to Supabase, uncomment the block below:
        /*
        const { data, error } = await supabase
          .from("inquiries") // Make sure to create this table in Supabase
          .insert([payload]);

        if (error) {
          throw new Error(error.message);
        }
        */

        // Simulate network latency (1.5 seconds)
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSuccess(true);
      } catch (err: any) {
        console.error("Form submission error:", err);
        setSubmitError(err?.message || "An error occurred. Please try again.");
      }
    });
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      company: "",
      phone: "",
      reason: "",
      message: "",
      productInterest: "",
      timeline: "",
    });
    setErrors({});
    setIsSuccess(false);
    setSubmitError(null);
  };

  if (isSuccess) {
    return (
      <div className="border border-steel-200 bg-white p-6 shadow-el2 sm:p-8 flex flex-col items-center justify-center text-center min-h-[400px] rounded-[2px] transition-all duration-300">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10 text-brand-red mb-6 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-bold text-navy-900 sm:text-2xl">
          Inquiry Submitted Successfully
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-steel-600 max-w-[40ch]">
          Thank you for contacting Aashirwad Engineers. Our technical sales team
          will review your requirements and reach out within 24 hours.
        </p>
        <button
          onClick={handleReset}
          className="ae-focus mt-8 cursor-pointer rounded-ae-md bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 text-sm font-semibold transition-all hover:shadow-el2 active:scale-[0.98]"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-steel-200 bg-white p-6 shadow-el1 sm:p-8 rounded-[2px]"
      noValidate
    >
      <h3 className="font-heading text-lg font-bold text-navy-900 mb-6">
        Submit Your Requirements
      </h3>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
              Full Name*
            </span>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g. Rajesh Kumar"
              className={`ae-focus mt-1.5 w-full rounded-[2px] border ${
                errors.fullName ? "border-brand-red bg-brand-red/5" : "border-steel-200 bg-section-light"
              } px-3.5 py-3 text-[15px] text-navy-900 placeholder-steel-400 outline-none transition-all focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(227,30,36,0.12)]`}
            />
          </label>
          {errors.fullName && (
            <p className="mt-1 text-xs font-medium text-brand-red flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
              Email Address*
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. rajesh@plantname.com"
              className={`ae-focus mt-1.5 w-full rounded-[2px] border ${
                errors.email ? "border-brand-red bg-brand-red/5" : "border-steel-200 bg-section-light"
              } px-3.5 py-3 text-[15px] text-navy-900 placeholder-steel-400 outline-none transition-all focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(227,30,36,0.12)]`}
            />
          </label>
          {errors.email && (
            <p className="mt-1 text-xs font-medium text-brand-red flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>

        {/* Company / Plant & Phone Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
                Company / Plant*
              </span>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="e.g. Apex Plastics Ltd"
                className={`ae-focus mt-1.5 w-full rounded-[2px] border ${
                  errors.company ? "border-brand-red bg-brand-red/5" : "border-steel-200 bg-section-light"
                } px-3.5 py-3 text-[15px] text-navy-900 placeholder-steel-400 outline-none transition-all focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(227,30,36,0.12)]`}
              />
            </label>
            {errors.company && (
              <p className="mt-1 text-xs font-medium text-brand-red flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                {errors.company}
              </p>
            )}
          </div>

          <div>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
                Phone Number *
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="e.g. +91 98765 43210"
                className={`ae-focus mt-1.5 w-full rounded-[2px] border ${
                  errors.phone ? "border-brand-red bg-brand-red/5" : "border-steel-200 bg-section-light"
                } px-3.5 py-3 text-[15px] text-navy-900 placeholder-steel-400 outline-none transition-all focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(227,30,36,0.12)]`}
              />
            </label>
            {errors.phone && (
              <p className="mt-1 text-xs font-medium text-brand-red flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Reason for Contact (Core Dropdown) */}
        <div>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
              Reason for Contact*
            </span>
            <div className="relative mt-1.5">
              <select
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                className={`ae-focus w-full appearance-none rounded-[2px] border ${
                  errors.reason ? "border-brand-red bg-brand-red/5" : "border-steel-200 bg-section-light"
                } px-3.5 py-3 pr-10 text-[15px] text-navy-900 outline-none transition-all focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(227,30,36,0.12)] cursor-pointer`}
              >
                <option value="" disabled>
                  Select contact reason...
                </option>
                <option value="general">General Inquiry</option>
                <option value="quote">Request a Quote</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-steel-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </label>
          {errors.reason && (
            <p className="mt-1 text-xs font-medium text-brand-red flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              {errors.reason}
            </p>
          )}
        </div>

        {/* Conditional Logic Fields */}
        <AnimatePresence initial={false} mode="wait">
          {formData.reason === "general" && (
            <motion.div
              key="general"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-2">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
                    Message*
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your inquiry in detail..."
                    className={`ae-focus mt-1.5 w-full resize-none rounded-[2px] border ${
                      errors.message ? "border-brand-red bg-brand-red/5" : "border-steel-200 bg-section-light"
                    } px-3.5 py-3 text-[15px] text-navy-900 placeholder-steel-400 outline-none transition-all focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(227,30,36,0.12)]`}
                  />
                </label>
                {errors.message && (
                  <p className="mt-1 text-xs font-medium text-brand-red flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    {errors.message}
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {formData.reason === "quote" && (
            <motion.div
              key="quote"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-4 pt-2">
                {/* Product Interest Dropdown */}
                <div>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
                      Product Interest*
                    </span>
                    <div className="relative mt-1.5">
                      <select
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleInputChange}
                        className={`ae-focus w-full appearance-none rounded-[2px] border ${
                          errors.productInterest ? "border-brand-red bg-brand-red/5" : "border-steel-200 bg-section-light"
                        } px-3.5 py-3 pr-10 text-[15px] text-navy-900 outline-none transition-all focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(227,30,36,0.12)] cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select product/system of interest...
                        </option>
                        {products.map((p) => (
                          <option key={p.slug} value={p.slug}>
                            {p.name}
                          </option>
                        ))}
                        <option value="other">Other / Custom Engineering</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-steel-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </label>
                  {errors.productInterest && (
                    <p className="mt-1 text-xs font-medium text-brand-red flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      {errors.productInterest}
                    </p>
                  )}
                </div>

                {/* Estimated Timeline */}
                <div>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
                      Estimated Timeline*
                    </span>
                    <div className="relative mt-1.5">
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className={`ae-focus w-full appearance-none rounded-[2px] border ${
                          errors.timeline ? "border-brand-red bg-brand-red/5" : "border-steel-200 bg-section-light"
                        } px-3.5 py-3 pr-10 text-[15px] text-navy-900 outline-none transition-all focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(227,30,36,0.12)] cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select procurement timeline...
                        </option>
                        <option value="immediate">Immediate (1 - 3 months)</option>
                        <option value="mid_term">Mid-term (3 - 6 months)</option>
                        <option value="planning">Planning phase (&gt; 6 months)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-steel-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </label>
                  {errors.timeline && (
                    <p className="mt-1 text-xs font-medium text-brand-red flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      {errors.timeline}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {submitError && (
        <div className="mt-6 border border-brand-red/20 bg-brand-red/5 p-4 text-xs font-semibold text-brand-red rounded-[2px] flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="ae-focus mt-8 w-full cursor-pointer rounded-ae-md bg-brand-red py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-redHover hover:shadow-el2 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Processing request...
          </>
        ) : (
          <>
            <span>Submit Inquiry</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}

export default function DynamicInquiryForm() {
  return (
    <Suspense fallback={<div className="min-h-[400px] border border-steel-200 bg-white p-6 shadow-el1 rounded-[2px] flex items-center justify-center text-steel-400 font-mono text-sm">Loading form...</div>}>
      <InquiryFormInner />
    </Suspense>
  );
}
