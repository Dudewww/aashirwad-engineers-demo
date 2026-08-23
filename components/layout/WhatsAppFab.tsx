"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteContact } from "@/lib/site";

export function WhatsAppFab() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const isProductDetail = /^\/products\/[^/]+$/.test(pathname ?? "");

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? y / max : 0;
      setVisible(y > 420 || ratio > 0.15);
    };

    const apply = () => {
      if (!mq.matches) {
        setVisible(true);
        return;
      }
      onScroll();
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", apply);

    // Auto-reveal tooltip on desktop after 3.5s to capture attention
    const showTimer = setTimeout(() => {
      if (mq.matches) {
        setShowTooltip(true);
      }
    }, 3500);

    // Auto-hide after 5s of visibility
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8500);

    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", apply);
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const whatsappUrl = siteContact.whatsapp
    ? `https://wa.me/${siteContact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
        siteContact.whatsappMessage,
      )}`
    : `mailto:${siteContact.email}?subject=${encodeURIComponent(
        "Industrial machinery inquiry",
      )}&body=${encodeURIComponent(siteContact.whatsappMessage)}`;

  const ariaLabel = siteContact.whatsapp ? "Chat on WhatsApp" : "Email sales";

  return (
    <div
      className={`fixed z-[450] right-4 bottom-4 sm:right-6 sm:bottom-6 ${
        isProductDetail ? "hidden lg:block" : "block"
      } ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-300 group`}
      style={{ marginBottom: "max(0px, env(safe-area-inset-bottom))" }}
    >
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] opacity-20 blur-md transition-all duration-300 group-hover:opacity-45 group-hover:scale-110" />

      {/* Slide-out tooltip (Desktop only) */}
      <div
        className={`absolute right-full mr-3.5 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2.5 rounded-full border border-steel-200/50 bg-white/95 px-4.5 py-2.5 shadow-el3 backdrop-blur-md transition-all duration-300 origin-right ${
          showTooltip
            ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-x-4 scale-95 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 group-hover:pointer-events-auto"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
        </span>
        <span className="text-navy-900 font-semibold text-xs uppercase tracking-[0.08em] whitespace-nowrap">
          {siteContact.whatsapp ? "Chat with Sales" : "Email Sales"}
        </span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target={siteContact.whatsapp ? "_blank" : undefined}
        rel={siteContact.whatsapp ? "noopener noreferrer" : undefined}
        className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] border border-white/20 text-white shadow-[0_8px_30px_rgba(37,211,102,0.3)] transition-all duration-300 ease-industrial hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 h-12 w-12 sm:h-14 sm:w-14"
        aria-label={ariaLabel}
      >
        <svg
          viewBox="0 0 16 16"
          className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"
          aria-hidden
        >
          <defs>
            <mask id="whatsapp-mask">
              <rect width="16" height="16" fill="white" />
              <path
                fill="black"
                d="M11.609 9.587c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              />
            </mask>
          </defs>
          <path
            fill="white"
            mask="url(#whatsapp-mask)"
            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z"
          />
        </svg>
      </a>
    </div>
  );
}

