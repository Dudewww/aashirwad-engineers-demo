import Image from "next/image";
import { products } from "@/lib/products";

const productImages = products.flatMap((product) => product.images);
const sliderColumns = productImages.reduce<string[][]>(
  (columns, src, index) => {
    columns[index % columns.length].push(src);
    return columns;
  },
  [[], [], []],
);

function TickerColumn({
  images,
  direction,
}: {
  images: string[];
  direction: "up" | "down";
}) {
  const animationClass = direction === "down" ? "animate-scroll-down" : "animate-scroll-up";
  const loopedImages = [...images, ...images];

  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={`flex will-change-transform flex-col gap-1.5 sm:gap-2 md:gap-3 ${animationClass} hover:[animation-play-state:paused] active:[animation-play-state:paused]`}
      >
        {loopedImages.map((src, index) => (
          <div
            key={`${direction}-${src}-${index}`}
            className="ae-machine-media-frame relative h-24 border border-steel-200 bg-white shadow-el1 sm:h-36 md:h-48 lg:h-64"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 639px) 33vw, (max-width: 1023px) 30vw, 22vw"
              className="ae-machine-media-image pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductVerticalSlider() {
  return (
    <div className="relative isolate overflow-hidden border border-steel-200 bg-section-light select-none">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-section-light via-section-light/70 to-transparent sm:h-20 md:h-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-section-light via-section-light/70 to-transparent sm:h-20 md:h-24"
        aria-hidden
      />

      <div className="grid h-[320px] grid-cols-3 gap-1.5 overflow-hidden sm:h-[450px] sm:gap-2 md:h-[550px] md:gap-3 lg:h-[650px]">
        <TickerColumn images={sliderColumns[0]} direction="up" />
        <TickerColumn images={sliderColumns[1]} direction="down" />
        <TickerColumn images={sliderColumns[2]} direction="up" />
      </div>
    </div>
  );
}
