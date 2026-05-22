import React from "react";
import Image from "next/image";

const items = [
  {
    icon: "/assets/reward.png",
    alt: "30+ Years Experience",
    title: "30+",
    subtitle: "Years Experience",
  },
  {
    icon: "/assets/location.png",
    alt: "Pan-India Operations",
    title: "Pan-India",
    subtitle: "Operations",
  },
  {
    icon: "/assets/board.png",
    alt: "Transparent Pricing",
    title: "Transparent",
    subtitle: "Pricing",
  },
  {
    icon: "/assets/headphone.png",
    alt: "Dedicated Client Support",
    title: "Dedicated",
    subtitle: "Client Support",
  },
  {
    icon: "/assets/stopwatch.png",
    alt: "On-Time Deliveries",
    title: "On-Time",
    subtitle: "Deliveries",
  },
  {
    icon: "/assets/handshake.png",
    alt: "Trusted Business Relationships",
    title: "Trusted Business",
    subtitle: "Relationships",
  },
];

export default function HeroBlock() {
  return (
    <div className="hidden md:flex bg-white rounded-2xl shadow-lg px-6 py-6 items-center w-full">
      {items.map((item) => (
        <React.Fragment key={item.title}>
          <div className="flex-1 flex justify-start -pl-6 items-center gap-3">
            <div className="relative w-20 h-20 shrink-0">
              <Image
                src={item.icon}
                alt={item.alt}
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-snug">
              <span className="font-semibold text-gray-900 text-sm whitespace-nowrap">
                {item.title}
              </span>
              <span className="text-gray-500 text-xs whitespace-nowrap">
                {item.subtitle}
              </span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
