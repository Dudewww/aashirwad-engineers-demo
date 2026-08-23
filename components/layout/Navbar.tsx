"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EnvelopeSimple, List, X } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { siteContact } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/contact", label: "Contact" },
];

const mega = [
  {
    title: "Heating Systems",
    items: [
      { href: "/products/hot-air-oven", label: "Hot Air Oven" },
      { href: "/products/hot-plate", label: "Hot Plate" },
      {
        href: "/products/combined-hot-air-oven-hot-plate",
        label: "Combined Oven + Plate",
      },
    ],
  },
  {
    title: "Cutting & Converting",
    items: [
      {
        href: "/products/automatic-cutting-stitching-machine",
        label: "Automatic C&S Machine",
      },
      {
        href: "/products/roll-to-roll-center-gusset-machine",
        label: "Roll To Roll Gusset Machine",
      },
      {
        href: "/products/twist-centre-gusset-device-machine",
        label: "Twist/Centre Gusset Machine",
      },
      { href: "/products/cutting-machine", label: "Cutting Machine" },
    ],
  },
  {
    title: "Mixing & Processing",
    items: [{ href: "/products/turbo-mixer", label: "Turbo Mixer" }],
  },
  {
    title: "Fabric & Baling",
    items: [
      { href: "/products/fabric-opener-machine", label: "Fabric Opener Machine" },
      { href: "/products/hydraulic-bale-press-machine", label: "Hydraulic Bale Press" },
      { href: "/products/trim-cutter", label: "Trim Cutter" },
    ],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const barBorder = scrolled ? "border-steel-200 shadow-[0_8px_30px_rgba(17,24,39,0.06)]" : "border-steel-200";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] border-b bg-white/95 backdrop-blur transition-[border-color,box-shadow] duration-200 ease-industrial ${barBorder}`}
      >
        <div className="ae-container flex items-center justify-between py-3 sm:py-4">
          <Link href="/" className="ae-focus flex shrink-0 items-center gap-3 rounded-sm outline-offset-4">
            <span className="font-heading text-[15px] font-bold tracking-[-0.02em] text-navy-900 sm:text-xl">
              AASHIRWAD
              <span className="block font-mono text-[8px] font-semibold tracking-[0.18em] text-brand-red sm:text-[10px]">
                ENGINEERS / MACHINERY
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {links.map((l) =>
              l.label === "Products" ? (
                <div
                  key={l.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    href={l.href}
                    className="ae-focus cursor-pointer rounded-sm text-sm font-medium tracking-[-0.01em] text-steel-600 transition-colors duration-200 hover:text-brand-red"
                  >
                    Products <span className="text-brand-red">▼</span>
                  </Link>
                  <div
                    className={`absolute left-1/2 top-full z-[200] w-[min(920px,92vw)] -translate-x-1/2 pt-3 transition-opacity duration-200 ease-enter ${
                      megaOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
                  >
                    <div className="border border-steel-200 bg-white p-6 shadow-el3">
                      <div className="grid gap-8 md:grid-cols-2">
                        {mega.map((col) => (
                          <div key={col.title}>
                            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-red">
                              {col.title}
                            </p>
                            <ul className="mt-3 space-y-2">
                              {col.items.map((it) => (
                                <li key={it.href}>
                                  <Link
                                    href={it.href}
                                    className="ae-focus cursor-pointer rounded-sm text-sm text-steel-600 transition-colors hover:text-navy-900"
                                  >
                                    {it.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 border-t border-steel-200 pt-4">
                        <Link
                          href="/products"
                          className="ae-focus cursor-pointer rounded-sm text-sm font-semibold text-navy-900 transition-colors hover:text-brand-red"
                        >
                          View all products →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className="ae-focus cursor-pointer rounded-sm text-sm font-medium tracking-[-0.01em] text-steel-600 transition-colors duration-200 hover:text-brand-red"
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={`mailto:${siteContact.email}?subject=${encodeURIComponent("Industrial machinery inquiry")}`}
              className="ae-focus inline-flex cursor-pointer items-center gap-2 rounded-sm text-sm font-medium text-steel-600 transition-colors hover:text-navy-900"
            >
              <EnvelopeSimple className="h-5 w-5 text-brand-red" weight="regular" />
              Email sales
            </a>
            <Button href="/contact#inquiry-form" variant="primary" className="!px-5 !py-2.5 text-[13px]">
              Request a quote
            </Button>
          </div>

          <button
            type="button"
            className="ae-focus inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-ae-md border border-steel-200 bg-white text-navy-900 sm:h-11 sm:w-11 lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <List className="h-6 w-6" weight="regular" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[300] transition-opacity duration-300 lg:hidden ${
          open ? "block pointer-events-auto opacity-100" : "hidden pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
          aria-label="Close menu overlay"
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[min(320px,88vw)] border-l border-steel-200 bg-white transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-steel-200 px-5 py-4">
              <span className="font-heading font-bold tracking-[-0.02em] text-navy-900">Menu</span>
              <button
                type="button"
                className="ae-focus inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-ae-md border border-steel-200 bg-white text-navy-900"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" weight="regular" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-2 py-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="ae-focus block cursor-pointer border-b border-steel-200 px-4 py-3.5 text-[15px] font-medium text-steel-600 transition-colors hover:text-brand-red"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <div className="px-4 py-4">
                <Button href="/contact#inquiry-form" variant="primary" className="w-full justify-center">
                  Request a quote
                </Button>
              </div>
            </div>
            <div className="border-t border-steel-200 px-5 py-4 text-sm text-steel-600">
              <a href={`mailto:${siteContact.email}`} className="font-mono text-navy-900">
                {siteContact.email}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
