/** Not mounted on homepage until verified badge assets exist (Sprint 4+). */
import { Reveal } from "@/components/ui/Reveal";
import { revealStagger } from "@/lib/motion-presets";

export function Certifications() {
  return (
    <section className="bg-white">
      <div className="ae-container ae-section-y">
        <Reveal>
          <p className="ae-eyebrow-light">Credentials</p>
          <h2 className="ae-h2 mt-4 text-navy-900">Industry Credentials</h2>
          <p className="mt-6 max-w-[62ch] text-sm leading-relaxed text-steel-600 md:text-[15px]">
            Certification badges and registrations ship here when verified. Visual treatment stays restrained—grayscale by
            default, full color on hover—so credibility reads serious, not decorative.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {["Made in India", "MSME", "ISO", "Industry Association"].map((label, idx) => (
            <Reveal key={label} delay={revealStagger(idx)}>
              <div className="flex min-h-[92px] cursor-default items-center justify-center border border-steel-600/25 bg-section-light px-4 py-6 text-center transition-[filter] duration-300 hover:grayscale-0 grayscale">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-steel-600">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
