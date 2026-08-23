"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { REVEAL_COLUMN_OFFSET } from "@/lib/motion-presets";
import { siteContact } from "@/lib/site";

export function CustomSolutions() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    productInterest: "General Inquiry",
    requirements: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company / Plant name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Generate WhatsApp Message
    const lines = [
      "\u{1F3ED} *NEW CUSTOM SOLUTION REQUEST*",
      "",
      `• *Name:* ${formData.name.trim()}`,
      "",
      `• *Company / Plant Name:* ${formData.company.trim()}`,
      "",
      `• *Phone Number:* ${formData.phone.trim()}`,
      "",
      `• *Product Interest:* ${formData.productInterest}`,
      "",
    ];

    if (formData.requirements.trim()) {
      lines.push(`• *Requirements:* ${formData.requirements.trim()}`, "");
    }

    lines.push(`• *Source:* Custom Solutions Form`, "");

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

    const messageText = lines.join("\n").trim();
    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${siteContact.whatsappRaw}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsSuccess(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      phone: "",
      productInterest: "General Inquiry",
      requirements: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <section className="bg-section-mid">
        <div className="ae-container ae-section-y grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Reveal>
            <p className="ae-eyebrow-light">Engineered to Your Specification</p>
            <h2 className="ae-h2 mt-4 max-w-[28ch] text-navy-900">
              Custom Machine Configurations for Your Production Line
            </h2>
            <p className="ae-desc-on-light mt-6">
              Not every production line is identical. We engineer configurations—dimensions, optional modules, electrical
              specifications—around your manufacturing reality.
            </p>
          </Reveal>

          <Reveal delay={REVEAL_COLUMN_OFFSET}>
            <div className="rounded-[8px] border border-steel-600 bg-navy-800 p-8 shadow-el2 flex flex-col items-center justify-center text-center min-h-[400px]">
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
              <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
                Request Submitted
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-400 max-w-[40ch]">
                Thank you for submitting your custom solutions request. You have been redirected to WhatsApp to send this inquiry directly to our engineering team.
              </p>
              <button
                onClick={handleReset}
                className="ae-focus mt-8 cursor-pointer rounded-[4px] bg-brand-red hover:bg-brand-redHover text-white px-6 py-3 text-sm font-semibold transition-all"
              >
                Send Another Request
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-section-mid">
      <div className="ae-container ae-section-y grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <Reveal>
          <p className="ae-eyebrow-light">Engineered to Your Specification</p>
          <h2 className="ae-h2 mt-4 max-w-[28ch] text-navy-900">
            Custom Machine Configurations for Your Production Line
          </h2>
          <p className="ae-desc-on-light mt-6">
            Not every production line is identical. We engineer configurations—dimensions, optional modules, electrical
            specifications—around your manufacturing reality.
          </p>

          <ul className="mt-10 space-y-4 text-sm leading-relaxed text-navy-900 md:text-[15px]">
            <li className="flex gap-3">
              <span className="mt-1 text-brand-red" aria-hidden>
                ✓
              </span>
              Width adjustments for non-standard tape or fabric sizes
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand-red" aria-hidden>
                ✓
              </span>
              Optional device additions (gusset, perforation, punch units)
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand-red" aria-hidden>
                ✓
              </span>
              Electrical specification modifications (voltage, phase)
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand-red" aria-hidden>
                ✓
              </span>
              Custom height or ergonomic frame configurations
            </li>
          </ul>
        </Reveal>

        <Reveal delay={REVEAL_COLUMN_OFFSET}>
          <form onSubmit={handleSubmit} className="rounded-[8px] border border-steel-600 bg-navy-800 p-8 shadow-el2" noValidate>
            <h3 className="font-heading text-[22px] font-semibold tracking-[-0.02em] text-white">
              Request a Custom Configuration
            </h3>
            <div className="mt-8 space-y-4">
              
              {/* Name field */}
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wide text-steel-400">Name *</span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`ae-focus mt-2 w-full rounded-[4px] border ${
                    errors.name ? "border-brand-red bg-brand-red/5" : "border-steel-600 bg-navy-900"
                  } px-4 py-3 text-[16px] text-white outline-none focus:border-silver-100 focus:shadow-[0_0_0_3px_rgba(196,43,43,0.2)]`}
                />
                {errors.name && <p className="mt-1 text-xs text-brand-red">{errors.name}</p>}
              </label>

              {/* Company field */}
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wide text-steel-400">Company / Plant Name *</span>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={`ae-focus mt-2 w-full rounded-[4px] border ${
                    errors.company ? "border-brand-red bg-brand-red/5" : "border-steel-600 bg-navy-900"
                  } px-4 py-3 text-[16px] text-white outline-none focus:border-silver-100 focus:shadow-[0_0_0_3px_rgba(196,43,43,0.2)]`}
                />
                {errors.company && <p className="mt-1 text-xs text-brand-red">{errors.company}</p>}
              </label>

              {/* Phone field */}
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wide text-steel-400">Phone *</span>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`ae-focus mt-2 w-full rounded-[4px] border ${
                    errors.phone ? "border-brand-red bg-brand-red/5" : "border-steel-600 bg-navy-900"
                  } px-4 py-3 text-[16px] text-white outline-none focus:border-silver-100 focus:shadow-[0_0_0_3px_rgba(196,43,43,0.2)]`}
                />
                {errors.phone && <p className="mt-1 text-xs text-brand-red">{errors.phone}</p>}
              </label>

              {/* Product Interest field */}
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wide text-steel-400">Product Interest</span>
                <select
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleInputChange}
                  className="ae-focus mt-2 w-full cursor-pointer rounded-[4px] border border-steel-600 bg-navy-900 px-4 py-3 text-[16px] text-white outline-none focus:border-silver-100 focus:shadow-[0_0_0_3px_rgba(196,43,43,0.2)]"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Hot Air Oven">Hot Air Oven</option>
                  <option value="Automatic Cutting & Stitching Machine">Automatic Cutting & Stitching Machine</option>
                  <option value="Hydraulic Bale Press Machine">Hydraulic Bale Press Machine</option>
                </select>
              </label>

              {/* Requirements field */}
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wide text-steel-400">Requirements</span>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows={4}
                  className="ae-focus mt-2 w-full resize-none rounded-[4px] border border-steel-600 bg-navy-900 px-4 py-3 text-[16px] text-white outline-none focus:border-silver-100 focus:shadow-[0_0_0_3px_rgba(196,43,43,0.2)]"
                />
              </label>
            </div>
            
            <button
              type="submit"
              className="ae-focus mt-8 w-full cursor-pointer rounded-[4px] bg-brand-red py-4 text-sm font-semibold tracking-[0.08em] text-white transition-colors hover:bg-brand-redHover"
            >
              REQUEST CUSTOM SOLUTION →
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
