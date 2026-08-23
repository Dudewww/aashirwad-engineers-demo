export type ProductCategory =
  | "all"
  | "heating"
  | "cutting"
  | "mixing"
  | "baling";

export type Product = {
  slug: string;
  name: string;
  short: string;
  description: string;
  category: Exclude<ProductCategory, "all">;
  tier: 1 | 2;
  featuredKey?: "A" | "B" | "C" | "D" | "E";
  images: string[];
  singleImage?: boolean;
  specs: Record<string, string>;
};

export const products: Product[] = [
  {
    slug: "automatic-cutting-stitching-machine",
    name: "Automatic Cutting & Stitching Machine",
    short: "High-output converting for woven sack lines.",
    description: "The Automatic Cutting & Stitching Machine is a high-throughput converting solution designed for woven sack and bag production lines. It combines precision cutting with synchronized stitching in a single continuous operation, eliminating the need for separate processing stations and reducing floor space requirements. The machine handles PP and HDPE woven fabric rolls up to 800 mm width, automatically measuring, cutting to programmed bag lengths, and stitching the bottom seam at speeds up to 20 bags per minute. The servo-driven feed system ensures consistent bag dimensions with minimal material waste. A PLC control panel with touchscreen HMI provides real-time monitoring of production counts, speed settings, and fault diagnostics. The stitching head uses heavy-duty industrial thread suitable for cement bags, fertilizer sacks, grain packaging, and industrial material handling bags. Key applications include woven sack manufacturing plants producing PP and HDPE bags for agriculture, construction, chemicals, and food grain packaging. The machine is engineered for continuous-duty operation across multiple shifts with heavy-gauge steel construction, hardened cutting blades, and accessible maintenance points for quick thread changes and blade replacement.",
    category: "cutting",
    tier: 1,
    featuredKey: "A",
    images: ["/products/automatic-cutting-stitching-machine-v2.png"],
    specs: {
      "Production Speed": "35–45 bags/min",
      "Bag Width": "300 – 800 mm",
      "Bag Length": "500 – 1200 mm",
      "Power Load": "5.5 kW",
      "Control System": "PLC with Touch Screen HMI",
    },
  },
  {
    slug: "hot-air-oven",
    name: "Hot Air Oven",
    short: "Uniform heated-air performance across tape width.",
    description: "The Hot Air Oven is an industrial heating system engineered for uniform temperature distribution across the full tape width during the stretching and annealing stages of raffia tape and HDPE tape production lines. The oven uses a High-Velocity Air Circulation System to circulate heated air through a 3000-8000 mm heating zone, maintaining temperature uniformity within ±1°C through digital PID control. This precision is critical for consistent tape tensile strength, elongation properties, and denier uniformity across the entire production width. The oven accommodates power loads from 18 to 72 kW depending on production requirements, with maximum operating temperatures up to 250°C. The insulated chamber construction minimizes heat loss and reduces energy consumption during continuous operation. Hot Air Ovens from Aashirwad Engineers are used in raffia tape extrusion lines, HDPE flat tape lines, strapping band production, and monofilament stretching applications. The machines serve manufacturers in the raffia tape, HDPE tape, woven sack, and plastic processing industries across India and export markets. Each oven is assembled and tested in-house before dispatch, with thermal uniformity verification and control system calibration completed as part of pre-delivery quality checks.",
    category: "heating",
    tier: 1,
    featuredKey: "B",
    images: ["/products/hot-air-oven-v2.png"],
    specs: {
      "Heating Zone": "3000–8000 mm Length (Customizable on Request)",
      "Max Temperature": "250 °C",
      "Air Circulation": "High-Velocity Air Circulation System",
      "Power Load": "18 – 72 kW",
      "Accuracy": "± 1 °C Digital PID Control",
    },
  },
  {
    slug: "combined-hot-air-oven-hot-plate",
    name: "Combined Hot Air Oven + Hot Plate",
    short: "Dual-stage heating for demanding line setups.",
    description: "The Combined Hot Air Oven + Hot Plate is a dual-stage heating system that integrates convection-based hot air treatment with contact-based hot plate processing in a single machine frame. This combination allows raffia tape and HDPE tape production lines to perform both stretching (oven stage) and annealing or surface treatment (plate stage) without requiring separate equipment or additional floor space. The hot air oven section features a 2500 mm heating zone with high-velocity air circulation, while the hot plate section provides a 1200 × 600 mm chrome-plated contact surface. Both sections operate with independent PID temperature controllers, enabling precise thermal profiles for each processing stage. Total power consumption is 32 kW, with insulated construction to minimize heat dissipation. This machine is particularly suited for production lines that require both hot air stretching and contact annealing in sequence, such as high-tenacity raffia tape lines, slit-film tape production, and HDPE flat tape manufacturing. The combined design reduces tape transit distance between heating stages, improving temperature consistency and reducing energy costs compared to operating two separate heating units. Each machine is fabricated, assembled, and tested at the Aashirwad Engineers facility in Mumbai.",
    category: "heating",
    tier: 1,
    featuredKey: "C",
    images: ["/products/combined-hot-air-oven-hot-plate-v2.png"],
    specs: {
      "Oven Length": "2500 mm",
      "Plate Dimension": "1200 × 600 mm",
      "Dual Control": "Independent PID for Oven & Plate",
      "Material": "Chrome plated surface / Insulated oven",
      "Power": "32 kW total",
    },
  },
  {
    slug: "roll-to-roll-center-gusset-machine",
    name: "Roll To Roll Center Gusset Machine",
    short: "Controlled gusseting for continuous roll processing.",
    description: "The Roll To Roll Center Gusset Machine performs continuous inline gusseting of tubular woven fabric, creating center-fold gussets that transform flat tubular rolls into gusseted fabric suitable for box-type bag production. The machine processes HDPE and PP woven fabric at speeds up to 80 meters per minute with adjustable gusset depths from 25 to 100 mm, accommodating fabric widths up to 1200 mm. The AC frequency variable drive system provides precise speed synchronization with upstream and downstream equipment in the production line. The gusseting mechanism uses precision-ground forming plates that create clean, consistent folds without fabric damage or crease irregularities. Tension control systems maintain uniform fabric handling from unwind to rewind, preventing wrinkles and tracking errors during high-speed operation. This machine is essential for woven sack manufacturers producing gusseted bags for cement, chemicals, fertilizers, and food products where flat-bottom or block-bottom bag construction is required. The roll-to-roll design enables continuous operation without stopping for batch changes, maximizing production throughput. Key industries served include woven sack conversion, PP bag manufacturing, and industrial packaging production. Each machine is built with heavy-gauge steel frames and industrial-grade bearings for multi-shift continuous operation.",
    category: "cutting",
    tier: 1,
    featuredKey: "D",
    images: ["/products/roll-to-roll-center-gusset-machine-v2.png"],
    specs: {
      "Processing Width": "Up to 1200 mm",
      "Gusset Depth": "25 – 100 mm",
      "Line Speed": "80 m/min",
      "Drive System": "AC Frequency Variable Drive",
      "Material Type": "HDPE/PP Woven Fabric",
    },
  },
  {
    slug: "hydraulic-bale-press-machine",
    name: "Hydraulic Bale Press Machine",
    short: "Heavy compaction for industrial packaging workflows.",
    description: "The Hydraulic Bale Press Machine provides high-tonnage compaction for industrial packaging, waste management, and material handling operations. Available in 50-ton and 100-ton configurations, the press produces compressed bales sized 900 × 600 × 600 mm with a 45-second cycle time, enabling efficient handling, storage, and transportation of loose materials. The double-stage vane pump hydraulic system delivers smooth, consistent pressing force throughout the compression stroke. The heavy-duty channel and plate construction provides structural rigidity for sustained high-pressure operation across multiple shifts. This bale press is used across multiple industries: woven sack manufacturers compress fabric waste and edge trimmings, plastic processors bale recycled materials, packaging companies compress finished bags for shipping, and waste management facilities process textile and plastic waste streams. The machine handles PP woven fabric scraps, HDPE film waste, cotton waste, paper, and other compressible industrial materials. Control options include manual operation and semi-automatic cycling with adjustable pressure settings. The hydraulic system includes pressure relief valves and flow control for safe, repeatable operation. Each machine is manufactured at the Aashirwad Engineers Mumbai facility with in-house hydraulic assembly and pressure testing before dispatch.",
    category: "baling",
    tier: 1,
    featuredKey: "E",
    images: ["/products/hydraulic-bale-press-machine-v2.png"],
    specs: {
      "Press Capacity": "50 – 100 Tons",
      "Bale Size": "900 × 600 × 600 mm",
      "Cycle Time": "45 seconds",
      "Hydraulic Pump": "Double Stage Vane Pump",
      "Structure": "Heavy Duty Channel & Plate",
    },
  },
  {
    slug: "hot-plate",
    name: "Hot Plate",
    short: "Precision contact heating for line integration.",
    description: "The Hot Plate is a precision contact-heating unit designed for direct surface contact with tapes, films, and fabric during processing in raffia tape and HDPE tape production lines. The 3000–8000 mm Length (Custom Built to Order) heating surface uses embedded strip heaters to deliver uniform contact temperatures up to 200°C, with optional hard chrome or Teflon surface finishes depending on the material being processed. Chrome-plated surfaces provide durability and scratch resistance for abrasive materials, while Teflon coating prevents material adhesion during processing of sticky or heat-sensitive polymers. The Hot Plate is primarily used for tape annealing, surface smoothing, and controlled cooling in slit-film tape and monofilament production lines. It integrates inline with existing extrusion and stretching equipment, connecting between the oven stage and the winding section. Temperature control is provided through a digital PID controller maintaining ±2°C accuracy across the plate surface. The compact footprint makes it suitable for retrofitting into existing production lines where additional heating stages are required without major layout changes. Industries served include raffia tape manufacturing, HDPE tape extrusion, strapping band production, and plastic film processing.",
    category: "heating",
    tier: 2,
    singleImage: true,
    images: ["/products/hot-plate-v2.png"],
    specs: {
      "Surface Size": "3000–8000 mm Length (Custom Built to Order)",
      "Heating Media": "Strip Heaters",
      "Surface Finish": "Hard Chrome",
      "Max Temp": "200 °C",
    },
  },
  {
    slug: "turbo-mixer",
    name: "Turbo Mixer",
    short: "Intensive mixing for granule preparation.",
    description: "The Turbo Mixer is a high-shear mixing machine designed for intensive blending of plastic granules, masterbatch, additives, and recycled materials before extrusion processing. Available in 100 kg to 500 kg batch capacities with 15 HP and 30 HP motor options, the mixer delivers complete batch homogenization in 5 to 8 minutes. The high-shear segmented blade design creates a turbulent mixing action that ensures uniform distribution of color masterbatch, UV stabilizers, calcium carbonate fillers, and other additives throughout the polymer granule blend. This uniform pre-mixing is critical for consistent tape color, mechanical properties, and processability in downstream extrusion lines. The Turbo Mixer serves raffia tape manufacturers, HDPE tape producers, plastic compounders, and recycling operations where pre-blended granule preparation is required before feeding into extruders. The mixing chamber is constructed from wear-resistant materials to handle abrasive filler compounds without excessive wear. Discharge is through a bottom gate valve for rapid batch changeover. Safety features include a locking lid mechanism and motor overload protection. Each mixer is assembled and dynamically balanced at the Aashirwad Engineers facility, with vibration testing completed before delivery to ensure smooth operation under loaded conditions.",
    category: "mixing",
    tier: 2,
    singleImage: true,
    images: ["/products/turbo-mixer-v2.png"],
    specs: {
      "Batch Capacity": "100 – 500 kg",
      "Mixing Time": "5–8 mins",
      "Blade Type": "High-shear segmented",
      "Motor": "15 HP / 30 HP options",
    },
  },
  {
    slug: "trim-cutter",
    name: "Trim Cutter",
    short: "Reliable trimming for continuous web runs.",
    description: "The Trim Cutter is an inline trimming device for continuous removal of edge waste from woven fabric, PP tape, HDPE film, and other web materials during production. It offers rotary and razor blade options to suit different material types and cutting requirements, with adjustable trim widths from 5 to 50 mm. The universal mounting bracket enables installation on virtually any production line without modification to existing equipment frames. An optional venturi suction system automatically removes cut trim waste from the cutting zone, preventing accumulation that could interfere with downstream processing. The Trim Cutter is essential for producing clean, consistent fabric edges in woven sack manufacturing, lamination lines, and tape slitting operations. Precise edge trimming improves downstream converting performance by eliminating uneven edges that cause feeding problems in cutting and stitching machines. The device is designed for maintenance-free continuous operation with quick blade replacement when needed. Industries using this equipment include woven sack conversion, PP fabric manufacturing, laminated fabric production, and industrial packaging operations. The compact design and universal mounting make it suitable for both new installations and retrofitting into existing production lines where edge quality improvement is needed.",
    category: "baling",
    tier: 2,
    singleImage: true,
    images: ["/products/trim-cutter.jpg"],
    specs: {
      "Blade Type": "Rotary / Razor options",
      "Trim Width": "5 – 50 mm",
      "Mounting": "Universal bracket",
      "Suction": "Optional venturi system",
    },
  },
  {
    slug: "twist-centre-gusset-device-machine",
    name: "Twist/Centre Gusset Device Machine",
    short: "Specialized gusset forming for configured lines.",
    description: "The Twist/Centre Gusset Device Machine is a specialized inline attachment that creates center gusset folds in tubular woven fabric directly on circular looms and converting lines. Unlike standalone gusset machines, this device integrates as an add-on to existing equipment, enabling gusset formation without requiring a separate processing station. The manual hand-wheel adjustment system allows operators to set precise gusset depths during production, accommodating different bag specifications without stopping the line. The forming plates are manufactured from Stainless Steel 304 for corrosion resistance and smooth fabric contact, preventing snags and surface damage to the woven material. The device is compatible with standard raffia looms and converting equipment commonly used in Indian woven sack manufacturing plants. This machine serves manufacturers who need to add gusseting capability to their existing production lines without investing in a full roll-to-roll gusset machine. It is particularly cost-effective for facilities producing moderate volumes of gusseted bags alongside standard flat bags. Industries served include woven sack manufacturing, PP bag production, and industrial packaging. Each device is precision-assembled at the Aashirwad Engineers facility with dimensional checks on forming plate alignment before dispatch.",
    category: "cutting",
    tier: 2,
    images: ["/products/twist-centre-gusset-device-machine-v2.png"],
    specs: {
      "Device Type": "Inline Add-on",
      "Adjustment": "Manual hand-wheel",
      "Forming Plates": "Stainless Steel 304",
      "Compatibility": "Standard Raffia Looms",
    },
  },
  {
    slug: "cutting-machine",
    name: "Cutting Machine",
    short: "Industrial cutting for woven materials.",
    description: "The Cutting Machine is a semi-automatic industrial cutting system for PP and HDPE woven fabrics, designed for reliable production environments where consistent cut quality and operator safety are priorities. The machine handles fabric widths up to 1000 mm with heat-treated steel blades that maintain cutting edge sharpness through extended production runs. A dual-hand trigger safety system prevents accidental operation, requiring both operator hands to be positioned on the control triggers before the cutting cycle initiates. This machine is used in woven sack manufacturing plants where tubular or flat woven fabric needs to be cut to specific bag lengths before stitching. It serves as a standalone cutting station or integrates into semi-automated bag production lines where the cutting operation is decoupled from the stitching process. The semi-automatic operation provides a balance between production speed and operator control, making it suitable for facilities producing multiple bag sizes with frequent changeovers. The heat-treated blade construction provides long service life with consistent cut quality across PP, HDPE, and blended woven materials. Industries served include woven sack conversion, flexible packaging, agricultural bag production, and industrial material handling. Each machine is built with a robust steel frame and precision blade guides at the Aashirwad Engineers manufacturing facility.",
    category: "cutting",
    tier: 2,
    singleImage: true,
    images: ["/products/cutting-machine-v2.png"],
    specs: {
      "Operation": "Semi-automatic",
      "Cutting Width": "Up to 1000 mm",
      "Blade": "Heat-treated steel",
      "Safety": "Dual-hand trigger",
    },
  },
  {
    slug: "fabric-opener-machine",
    name: "Fabric Opener Machine",
    short: "Controlled fabric handling for downstream stages.",
    description: "The Fabric Opener Machine is an unwinding and fabric preparation system that converts folded or rolled tubular woven fabric into flat, open-width material ready for downstream processing stages such as lamination, printing, cutting, and coating. The machine handles fabric rolls up to 1500 mm width at unwinding speeds up to 60 meters per minute, with a pneumatic friction brake system providing controlled tension throughout the unwinding process. Optional automatic tension control maintains consistent fabric feed regardless of roll diameter changes as the material is consumed. The Fabric Opener is a critical upstream machine in woven sack conversion lines where tubular fabric from circular looms must be opened and flattened before further processing. Without proper opening and tension control, downstream operations experience wrinkles, tracking errors, and uneven coating or lamination. The machine handles PP and HDPE woven fabrics, non-woven materials, and laminated composites. Key applications include woven sack lamination lines, fabric printing stations, and coating operations where flat, tensioned fabric presentation is required. Industries served include woven sack manufacturing, flexible packaging, industrial textile processing, and laminated fabric production. Each Fabric Opener Machine is manufactured with precision-machined rollers and pneumatic components at the Aashirwad Engineers facility.",
    category: "baling",
    tier: 2,
    singleImage: true,
    images: ["/products/fabric-opener-machine-v2.png"],
    specs: {
      "Max Roll Width": "1500 mm",
      "Unwinding Speed": "60 m/min",
      "Brake System": "Pneumatic friction",
      "Tension Control": "Manual / Automatic optional",
    },
  },
];

export const categoryLabels: Record<Exclude<ProductCategory, "all">, string> = {
  heating: "Heating Systems",
  cutting: "Cutting & Converting",
  mixing: "Mixing & Processing",
  baling: "Fabric & Baling",
};

/** Compact spec values for catalog cards — derived from product.specs */
const SPEC_CHIP_KEYS = [
  "Power Load",
  "Power",
  "Production Speed",
  "Line Speed",
  "Max Temperature",
  "Press Capacity",
  "Control System",
  "Processing Width",
  "Heating Zone",
] as const;

export function getSpecChips(product: Product, limit = 3): string[] {
  const chips: string[] = [];
  for (const key of SPEC_CHIP_KEYS) {
    const value = product.specs[key];
    if (value && !chips.includes(value)) chips.push(value);
    if (chips.length >= limit) return chips;
  }
  for (const value of Object.values(product.specs)) {
    if (chips.length >= limit) break;
    if (!chips.includes(value)) chips.push(value);
  }
  return chips.slice(0, limit);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelated(slug: string, limit = 3) {
  const p = getProduct(slug);
  if (!p) return [];
  const same = products.filter((x) => x.slug !== slug && x.category === p.category);
  const rest = products.filter((x) => x.slug !== slug && x.category !== p.category);
  return [...same, ...rest].slice(0, limit);
}
