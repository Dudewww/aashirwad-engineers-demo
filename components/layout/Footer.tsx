import Link from "next/link";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";
import { siteContact } from "@/lib/site";

const quick = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries We Serve" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/contact", label: "Contact" },
];

const productLinks = [
  { href: "/products/hot-air-oven", label: "Hot Air Oven" },
  { href: "/products/hot-plate", label: "Hot Plate" },
  { href: "/products/combined-hot-air-oven-hot-plate", label: "Combined Hot Air Oven + Hot Plate" },
  { href: "/products/turbo-mixer", label: "Turbo Mixer" },
  { href: "/products/trim-cutter", label: "Trim Cutter" },
  { href: "/products/automatic-cutting-stitching-machine", label: "Automatic C&S Machine" },
  { href: "/products/roll-to-roll-center-gusset-machine", label: "Roll To Roll Gusset Machine" },
  { href: "/products/twist-centre-gusset-device-machine", label: "Twist/Centre Gusset Device" },
  { href: "/products/cutting-machine", label: "Cutting Machine" },
  { href: "/products/fabric-opener-machine", label: "Fabric Opener Machine" },
  { href: "/products/hydraulic-bale-press-machine", label: "Hydraulic Bale Press Machine" },
];

export function Footer() {
  return (
    <footer className="border-t border-steel-200 bg-white">
      <div className="ae-container py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-xl font-bold tracking-[-0.02em] text-navy-900">AASHIRWAD ENGINEERS</p>
            <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-steel-600">
              In-house engineering, assembly, and pre-dispatch testing. Domestic delivery and export inquiries with
              coordinated documentation.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">Quick Links</p>
            <ul className="mt-5 space-y-3 text-sm text-steel-600">
              {quick.map((l) => (
                <li key={l.href}>
                  <Link className="ae-focus rounded-sm transition-colors hover:text-brand-red" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">Products</p>
            <ul className="mt-5 space-y-3 text-sm text-steel-600">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link className="ae-focus rounded-sm transition-colors hover:text-brand-red" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">Contact</p>
            <div className="mt-5 space-y-4 text-sm text-steel-600">
              <div className="flex gap-3 items-start">
                <Phone className="h-5 w-5 shrink-0 text-brand-red mt-0.5" />
                <a href={`tel:${siteContact.phoneRaw}`} className="hover:text-brand-red transition-colors font-mono">
                  {siteContact.phone}
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <EnvelopeSimple className="h-5 w-5 shrink-0 text-brand-red" />
                <a className="ae-focus break-all rounded-sm hover:text-brand-red font-mono" href={`mailto:${siteContact.email}`}>
                  {siteContact.email}
                </a>
              </div>
              <p className="mt-2 text-steel-400 font-mono text-[12px]">{siteContact.hours}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-steel-200 pt-8 text-xs text-steel-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Aashirwad Engineers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
