# PROJECT IMAGE SPECIFICATION SYSTEM

## Aashirwad Engineers - Industrial Machinery Platform

This document provides a comprehensive, production-ready specification for the image ecosystem of the **Aashirwad Engineers** web platform. It establishes a rigorous standard for visual assets, ensuring consistency, performance, and industrial realism across all devices.

---

### 1. Executive Summary

The Aashirwad Engineers digital experience is built on a foundation of **Industrial Cinematic Realism**. Visual assets are not merely decorative; they serve as technical documentation and trust signals. The system transition from placeholder Unsplash imagery to high-fidelity, proprietary industrial photography is the primary objective of this specification.

**Key Visual Principles:**

- **Authenticity:** Avoid "stock" looks. Prioritize documentary-style factory shots.
- **Precision:** Product renders must be geometrically accurate and isolated with surgical precision.
- **Scale:** Use environmental background images to communicate the physical scale of the machinery.

---

### 2. Master Image Inventory Table

| ID         | Section            | Page          | Image Purpose                         | Status                 | Format | Priority      |
| :--------- | :----------------- | :------------ | :------------------------------------ | :--------------------- | :----- | :------------ |
| **IMG-01** | Hero               | Home          | Establishing industrial scale         | Existing (Placeholder) | WEBP   | L1 (Critical) |
| **IMG-02** | About Main         | Home          | Factory/Engineering capability        | Existing (Placeholder) | WEBP   | L2 (High)     |
| **IMG-03** | About Float        | Home          | Detailed machining precision          | Existing (Placeholder) | WEBP   | L3 (Med)      |
| **IMG-04** | Product Showcase   | Home          | Tier 1 Primary Visuals (5 Machines)   | Existing (Local PNG)   | PNG    | L1 (Critical) |
| **IMG-05** | Product Alternate  | Home          | Tier 1 Alternate Angles (5 Machines)  | **MISSING**            | PNG    | L2 (High)     |
| **IMG-06** | Catalog Cards      | Products      | Tier 2 Product Visuals (6 Machines)   | Existing (Local PNG)   | PNG    | L2 (High)     |
| **IMG-07** | Industry Cards     | Home          | Industry context (5 Industries)       | Existing (Placeholder) | WEBP   | L2 (High)     |
| **IMG-08** | Manufacturing Hero | Manufacturing | Facility Overview (Parallax)          | Existing (Placeholder) | WEBP   | L2 (High)     |
| **IMG-09** | Manufacturing Shot | Manufacturing | Facility, Assembly, Quality (3 Shots) | Existing (Placeholder) | WEBP   | L3 (Med)      |
| **IMG-10** | Certification      | Home          | Quality, ISO, MSME Logos               | **MISSING**            | SVG    | L3 (Med)      |

---

### 3. Responsive Dimension Tables

#### A. Full-Width Hero & Backgrounds (Parallax)

| Breakpoint           | Width (px) | Height (px) | Aspect Ratio | Scaling Behavior                   |
| :------------------- | :--------- | :---------- | :----------- | :--------------------------------- |
| **Mobile (390px)**   | 800        | 1200        | 2:3          | `object-cover`, focus center-right |
| **Tablet (768px)**   | 1600       | 1200        | 4:3          | `object-cover`, focus center       |
| **Desktop (1440px)** | 2560       | 1440        | 16:9         | `object-cover`, focal point shift  |

#### B. Industrial Product Renders (Isolated PNGs)

| Component          | Desktop (Retina 2x) | Tablet (Retina 2x) | Mobile (Retina 2x) | Object-Fit |
| :----------------- | :------------------ | :----------------- | :----------------- | :--------- |
| **Tier 1 Card**    | 1200 x 900          | 800 x 600          | 600 x 450          | `cover`    |
| **Tier 2 Card**    | 800 x 600           | 600 x 450          | 400 x 300          | `contain`  |
| **Product Detail** | 1600 x 1200         | 1200 x 900         | 800 x 600          | `contain`  |

---

### 4. Section-wise Image Specifications

#### **[SEC-01] Home Hero Section**

- **Purpose:** Instant establishment of manufacturing authority and scale.
- **Dimensions:** 2560 x 1440 (Desktop), 1600 x 1200 (Tablet), 800 x 1200 (Mobile).
- **Type:** Lifestyle / Industrial Environment Image.
- **Composition:** Wide angle, shallow depth of field on foreground machinery elements.
- **Cropping Safety:** Keep 40% left area clear for H1 typography. Focal point at 60% horizontal.
- **Visual Support:** Supports parallax (0.4x scroll ratio).
- **CSS:** `object-cover`, `object-[70%_center]` (Mobile).

#### **[SEC-02] Product Showcase (Tier 1 Cards)**

- **Purpose:** Hero product visibility with interactive angle shift.
- **Image Pairs:** Every Tier 1 machine requires **two** images: (1) Primary Front 3/4 View, (2) Detailed Component/Action View.
- **Type:** Banner composition / Lifestyle integration.
- **Dimensions:** 1200 x 900.
- **Background:** High-contrast industrial floor or clean studio grey.
- **Hover Animation:** On hover, Image 1 fades to Image 2 with 1.04x scale transition.
- **Transparency:** Not needed (Full background images).

#### **[SEC-03] Product Catalog (Tier 2 & Detail)**

- **Purpose:** Technical clarity and product identification.
- **Type:** Isolated Product Render (Cutout PNG).
- **Background:** Transparent. UI provides `#0A121E` background.
- **Aspect Ratio:** 4:3 (Strict).
- **Safe Padding:** 10% margin on all sides to prevent "hitting the edge" during hover scaling.
- **Lighting:** Industrial top-down key light, subtle rim light for edge definition.
- **CSS:** `object-contain`, `p-8` (on Detail page).

---

### 5. Industrial Product Image Rules (The "Aashirwad Standard")

To maintain the "Industrial Cinematic Realism" aesthetic, all product photography must adhere to these rules:

- **Camera Angle:** Eye-level or slightly low-angle (Heroic stance). Avoid high-angle "toy" looks.
- **Framing:** The machine must occupy 80-85% of the frame. Never crop the main chassis.
- **Industrial Realism:** Do not over-saturate. Maintain the natural "Steel & Navy" palette. Metallic surfaces must show realistic reflections, not matte grey fills.
- **Cutout Spacing:** Minimum 40px transparent margin in the source file to allow for CSS shadows and hover transforms.
- **Anti-Distortion:** Use 50mm+ equivalent focal length to avoid wide-angle "fisheye" distortion on mechanical frames.

---

### 6. Performance & Export Guidelines

#### **Export Settings (Photoshop/Figma)**

- **Format:** Export as **WEBP** for backgrounds, **PNG** (lossless) for cutouts.
- **Compression:** WEBP (Quality 82), PNG (TinyPNG optimized).
- **Resolution:** 72 DPI (web standard), but exported at 2x dimensions for Retina displays.
- **Naming Convention:** `[category]-[product-slug]-[angle]-[version].webp`
  - _Example:_ `heating-hot-air-oven-front-v1.webp`

#### **Optimization System**

- **Lazy Loading:** Enabled for all images below the fold (Industries, Manufacturing, Tier 2).
- **Priority Loading:** Hero Image (IMG-01) and first Tier 1 machine (IMG-04) must use `priority` and `fetchPriority="high"`.
- **Max File Sizes:**
  - Full Backgrounds: < 350 KB
  - Product Cutouts: < 200 KB
  - Thumbnails/Icons: < 15 KB

---

### 7. Responsive Scaling Behavior Logic

The project uses a **Dynamic Object-Fit** system:

1.  **Environmentals (Hero/About):** Always `object-cover`. Behavior: Scale-to-fill, cropping edges to maintain container aspect.
2.  **Product Renders (Cards/Detail):** Always `object-contain`. Behavior: Full visibility mandatory. Image will scale down to fit container without ever being cropped.
3.  **Industry Cards:** `object-cover` with `scale-[1.08]` hover interaction.

---

### 8. Final Master Recommendations

1.  **Immediate Task:** Replace all Unsplash URLs in `lib/industries.ts` and `components/sections/About.tsx` with local assets.
2.  **Missing Assets:** Commission/Render "Alternate Angle" shots for all 5 Tier 1 products to enable the hover-flip feature.
3.  **Consistency Check:** Ensure all 11 product PNGs share the same lighting direction (Top-Left) to prevent visual jarring in the grid.
4.  **Logo Assets:** Create high-quality SVG versions of MSME, ISO, and Quality certification badges for the `Certifications` trust strip.
