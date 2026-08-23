# Aashirwad Engineers — Industrial Machinery Website

A modern, responsive, and performance-optimized web platform for **Aashirwad Engineers**, an industrial machinery manufacturer. The website showcases their specialized machinery catalog for HDPE/PP woven sack manufacturing, raffia tape extrusion, plastic processing, and industrial packaging plants.

---

## 🏭 Website Overview

The platform serves as the primary digital catalog, technical specification reference, and lead generation engine for Aashirwad Engineers. It delivers an intuitive, fast, and accessible user experience for plant managers, procurement engineers, and factory operators worldwide.

### Key Highlights
- **Dynamic Product Catalog**: Detailed engineering specifications, operational capabilities, high-resolution product imagery, and downloadable-ready spec sheets.
- **Industry Solutions**: Dedicated sector breakdowns for Raffia Tape, HDPE Flat Tape, Woven Sack Conversion, Plastic Recycling, and Bulk Packaging.
- **Instant Inquiry & Lead Flow**: Interactive Request for Quotation (RFQ) forms, direct WhatsApp routing with dynamic message composition, and direct email dispatch.
- **Performance & SEO**: 100% pre-rendered static generation (SSG), automated XML sitemaps, structured schema markup (JSON-LD), and metadata optimization.

---

## ⚙️ Product Categories & Machinery

| Category | Machinery Solutions |
| :--- | :--- |
| **Heating & Thermal Processing** | Hot Air Ovens (High-velocity circulation, ±1°C PID), Hot Plates, Combined Hot Air Oven + Hot Plate Systems |
| **Cutting & Converting** | Automatic Cutting & Stitching Machines, Roll to Roll Center Gusset Machines, Fabric Openers, Cutting Machines, Twist Centre Gusset Devices |
| **Mixing & Blending** | High-Speed Turbo Mixers for polymer and masterbatch homogenizing |
| **Compaction & Baling** | Heavy-Duty Hydraulic Bale Press Machines (50–100 Ton capacity) |

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animation**: [Motion](https://motion.dev/) (Framer Motion v12)
- **Iconography**: [@phosphor-icons/react](https://phosphoricons.com/)
- **Linting & Quality**: ESLint 9 & TypeScript Compiler

---

## 📂 Project Structure

```text
├── app/                        # Next.js App Router (Pages & Metadata)
│   ├── about/                  # About company & manufacturing heritage
│   ├── contact/                # Contact channels & direct RFQ
│   ├── industries/             # Industry applications & sector analysis
│   ├── manufacturing/          # In-house manufacturing & quality standards
│   ├── products/               # Product catalog & dynamic [slug] detail pages
│   ├── why-choose-us/          # Engineering advantages & differentiators
│   ├── globals.css             # Global Tailwind stylesheets & custom tokens
│   ├── layout.tsx              # Root HTML layout with Navigation & Footer
│   ├── page.tsx                # Homepage featuring interactive machinery hero
│   ├── robots.ts               # Automated search engine robots directives
│   └── sitemap.ts              # Dynamic multi-page XML sitemap generator
├── components/                 # Reusable React components
│   ├── layout/                 # Navigation, Header, Footer, WhatsApp Floating Action Button
│   ├── products/               # Product cards, detail views, and spec tables
│   ├── sections/               # Modular landing page sections & interactive RFQ forms
│   └── ui/                     # Core atomic UI elements (Buttons, Motion Reveals)
├── design-system/              # Design guidelines & color palette tokens
├── lib/                        # Type definitions, site configurations, and product data
│   ├── industries.ts           # Industry database & metadata
│   ├── motion-presets.ts       # Centralized Motion animation curves & variants
│   ├── product-faqs.ts         # Technical FAQ dataset
│   ├── products.ts             # Machinery catalog data & technical specs
│   └── site.ts                 # Centralized contact info and business hours
├── public/                     # Static assets (images, icons, industry photos)
│   ├── industries/             # Sector application photography
│   └── products/               # High-resolution machinery renders
├── .env.example                # Safe environment configuration template
├── .gitignore                  # Git exclude rules for Next.js, IDEs, and build caches
├── audit.py                    # Industrial governance audit script
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and script definitions
├── tailwind.config.ts          # Custom color schemes, typography, and responsive breakpoints
└── tsconfig.json               # Strict TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.18.0` or later (Node 20+ recommended)
- **npm** (or `pnpm` / `yarn` / `bun`)

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/Dudewww/aashirwad-engineers-demo.git
cd aashirwad-engineers-demo
npm install
```

### 2. Run Development Server
Start the Next.js development server with Turbopack:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Run Quality & Governance Audit
Verify industrial terminology and code hygiene:
```bash
python audit.py
```

### 4. Build for Production
Generate the optimized static production bundle:
```bash
npm run build
```

To test the production build locally:
```bash
npm run start
```

---

## 🚢 Deployment

The project is configured for deployment on any standard Node.js server or static hosting platform:
- **Vercel**: Seamless one-click deployment with Next.js zero-configuration.
- **Self-Hosted / Docker / Node.js**: Run `npm run build` followed by `npm start`.

---

## 📞 Demo Contact Information

**Aashirwad Engineers (Demo Portal)**
- **Phone**: [+91 90000 00000](tel:+919000000000)
- **WhatsApp**: [+91 90000 00000](https://wa.me/919000000000)
- **Email**: [demo@example.com](mailto:demo@example.com)
- **Operating Hours**: Mon – Sat, 9:00 AM – 6:00 PM

---

## 📄 License

© 2026 — Aashirwad Engineers Demo. Portfolio and demonstration showcase.
