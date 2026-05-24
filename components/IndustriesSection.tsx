import Image from "next/image";

const industries = [
  { src: "/assets/industries/aerospace.png", alt: "Aerospace", label: "Aerospace", large: true },
  { src: "/assets/industries/automobile.png", alt: "Automobile", label: "Automotive" },
  { src: "/assets/industries/electronic.png", alt: "Electronics", label: "Electronics" },
  { src: "/assets/industries/fmcg.png", alt: "FMCG", label: "FMCG" },
  { src: "/assets/industries/retail.png", alt: "Retail", label: "Retail" },
  { src: "/assets/industries/pharma.png", alt: "Pharmaceuticals", label: "Pharmaceuticals", large: true },
  { src: "/assets/industries/manufacturing.png", alt: "Manufacturing", label: "Manufacturing" },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-white px-4 sm:px-6 lg:px-16 py-12 md:py-0 md:h-[40vh] flex items-center">
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-12 items-start lg:items-center">

        {/* Left: heading block */}
        <div className="flex flex-col gap-3 lg:w-64 shrink-0">
          <span className="text-[#E8521A] text-4xl lg:text-5xl font-bold uppercase leading-tight">
            Industries We Serve
          </span>
          <h2 className="text-sm md:text-[1rem] font-semibold text-gray-500 tracking-wide leading-snug">
            Empowering Businesses Across Diverse Industries
          </h2>
        </div>

        {/* Right: industry cards */}
        <div className="flex-1 w-full">
          {/* Desktop: single scrollable row, right-aligned */}
          <div className="hidden md:flex items-center gap-10 overflow-x-auto pb-1 justify-end">
            {industries.map((industry) => (
              <IndustryCard key={industry.label} {...industry} />
            ))}
          </div>

          {/* Mobile: 2-column grid */}
          <div className="grid grid-cols-2 gap-6 md:hidden">
            {industries.map((industry) => (
              <IndustryCard key={industry.label} {...industry} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function IndustryCard({
  src,
  alt,
  label,
  large,
}: {
  src: string;
  alt: string;
  label: string;
  large?: boolean;
}) {
  const padding = large ? "p-2.5" : "p-4";

  return (
    <div className="flex flex-col items-center gap-3 shrink-0">
      <div className={`w-20 h-20 md:w-22 md:h-22 rounded-2xl bg-[#FFF3EE] flex items-center justify-center ${padding}`}>
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="88px"
            className="object-contain"
          />
        </div>
      </div>
      <span className="text-gray-700 text-sm font-medium text-center leading-tight">
        {label}
      </span>
    </div>
  );
}
