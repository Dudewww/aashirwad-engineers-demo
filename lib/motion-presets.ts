/** Shared motion tokens — opacity/transform only, GPU-friendly. */

export const easeEnter = [0, 0, 0.2, 1] as const;
export const easeStandard = [0.25, 0.1, 0.25, 1] as const;

export const transitionReveal = {
  duration: 0.48,
  ease: easeEnter,
} as const;

export const transitionTap = {
  duration: 0.2,
  ease: easeStandard,
} as const;

/** Grid / list reveal: keeps long lists from stacking excessive delays */
export const STAGGER_STEP = 0.05;
export const STAGGER_CAP = 0.28;

export function revealStagger(index: number, step = STAGGER_STEP): number {
  return Math.min(index * step, STAGGER_CAP);
}

/** Paired columns (about / CTA / custom): subtle offset, not compounded with per-item stagger */
export const REVEAL_COLUMN_OFFSET = 0.06;

/**
 * LazyMotion is intentionally not used: strict mode requires `m` instead of `motion`,
 * which would force refactors of `motion(Link)` and other `motion.*` call sites for
 * minimal bundle benefit on this mostly-static marketing surface.
 */
