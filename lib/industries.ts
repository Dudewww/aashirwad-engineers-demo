export type Industry = {
  title: string;
  description: string;
  fileName: string;
  /** Catalog machine image when local industry photo is unavailable — never stock photography */
  productFallback: string;
};

export const industries: Industry[] = [
  {
    title: "Raffia Tape Industry",
    description:
      "Continuous-line machinery tuned for raffia tape throughput, heat uniformity, and reliable converting.",
    fileName: "raffia-tape.jpg",
    productFallback: "/products/hot-air-oven-v2.png",
  },
  {
    title: "HDPE Tape Manufacturing",
    description:
      "Engineered systems for HDPE tape operations—precision control where material consistency defines yield.",
    fileName: "hdpe-tape.jpg",
    productFallback: "/products/combined-hot-air-oven-hot-plate-v2.png",
  },
  {
    title: "Plastic Processing",
    description:
      "Processing discipline for demanding plastics workflows—mixing, heating, and line integration built for scale.",
    fileName: "plastic-processing.jpg",
    productFallback: "/products/turbo-mixer-v2.png",
  },
  {
    title: "Woven Sack Manufacturing",
    description:
      "Heavy-duty converting paths for woven sack lines—cutting, stitching, and finishing aligned to plant reality.",
    fileName: "woven-sack.jpg",
    productFallback: "/products/automatic-cutting-stitching-machine-v2.png",
  },
  {
    title: "Industrial Packaging Applications",
    description:
      "Packaging-grade durability—equipment positioned for continuous industrial environments and export readiness.",
    fileName: "industrial-packaging.jpg",
    productFallback: "/products/hydraulic-bale-press-machine-v2.png",
  },
];
