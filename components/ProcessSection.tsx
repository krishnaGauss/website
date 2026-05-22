import { Fragment } from "react";
import Image from "next/image";

const steps = [
  {
    icon: "/assets/checklist.png",
    alt: "Checklist icon",
    number: "1",
    title: "Request a Quote",
    description: "Share your shipment details with our team.",
  },
  {
    icon: "/assets/package.png",
    alt: "Package icon",
    number: "2",
    title: "Shipment Planning",
    description: "We plan the most efficient and cost-effective route.",
  },
  {
    icon: "/assets/protruck.png",
    alt: "Transport icon",
    number: "3",
    title: "Transportation & Tracking",
    description: "Real-time tracking and updates throughout the journey.",
  },
  {
    icon: "/assets/ok.png",
    alt: "Delivery icon",
    number: "4",
    title: "Timely Delivery",
    description: "Safe and on-time delivery, every time.",
  },
];

function HorizontalArrow({ id }: { id: number }) {
  return (
    <svg
      width="80"
      height="24"
      viewBox="0 0 80 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`harrow-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
      </defs>
      <path
        d="M0 12 H70 M62 4 L70 12 L62 20"
        stroke={`url(#harrow-${id})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProcessSection() {
  return (
    <section className="bg-white pt-8 pb-16 md:py-0 md:h-[70vh] md:flex md:flex-col md:justify-center px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Title */}
      <div className="text-center mb-12 md:mb-10">
        <span className="text-[#E8521A] text-4xl lg:text-5xl font-bold uppercase leading-tight">
          Our Process
        </span>
      </div>

      {/* Desktop: full-width row, steps share space equally, arrows between */}
      <div className="hidden md:flex items-start w-full">
        {steps.map((step, index) => (
          <Fragment key={step.number}>
            {/* Step card — flex-1 so all 4 share the viewport width equally */}
            <div className="flex-1 min-w-0 flex flex-col items-center text-center px-2">
              {/* Circle: 112px at md, 160px at lg (3× the original 40px icon) */}
              <div className="w-28 h-28 lg:w-40 lg:h-40 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center mb-3 shrink-0">
                <div className="relative w-26 h-26 lg:w-39 lg:h-39">
                  <Image
                    src={step.icon}
                    alt={step.alt}
                    fill
                    sizes="(min-width: 1024px) 156px, 104px"
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="text-2xl font-bold text-[#0a1223] mb-1">
                {step.number}
              </span>
              <h3 className="text-base font-semibold text-[#0a1223] mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>

            {index < steps.length - 1 && (
              /* pt centers the arrow vertically with the circle:
                 md  → (112px circle − 24px svg) / 2 = 44px = pt-11
                 lg  → (160px circle − 24px svg) / 2 = 68px          */
              <div className="pt-11 lg:pt-17 shrink-0 self-start">
                <HorizontalArrow id={index} />
              </div>
            )}
          </Fragment>
        ))}
      </div>

      {/* Mobile: vertical stack with dashed connecting lines */}
      <div className="md:hidden max-w-xs mx-auto">
        {steps.map((step, index) => (
          <div key={step.number} className="flex gap-5">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shrink-0">
                <div className="relative w-14 h-14">
                  <Image
                    src={step.icon}
                    alt={step.alt}
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 min-h-12 border-l-2 border-dashed border-gray-300 my-1" />
              )}
            </div>

            <div className={`pt-3 ${index < steps.length - 1 ? "pb-6" : ""}`}>
              <span className="block text-xl font-bold text-[#0a1223] mb-0.5">
                {step.number}
              </span>
              <h3 className="text-base font-semibold text-[#0a1223] mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
