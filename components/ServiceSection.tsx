import ServiceCard from "@/components/ui/service_card";

const services = [
  {
    imageSrc: "/assets/container.png",
    imageAlt: "Container Shipping",
    title: "FCL/LCL Shipping",
    description:
      "Global container transport solutions for efficient and secure cargo movement.",
  },
  {
    imageSrc: "/assets/truck_fcl.png",
    imageAlt: "Full Truck Load",
    title: "Full Truck Load (FTL)",
    description:
      "Efficient large-scale transportation solutions for bulk shipments across major routes.",
  },
  {
    imageSrc: "/assets/warehouse.png",
    imageAlt: "Warehousing and Distribution",
    title: "Warehousing & Distribution",
    description:
      "Secure storage and streamlined distribution operations designed for supply chain efficiency.",
  },
  {
    imageSrc: "/assets/air_cargo.png",
    imageAlt: "Express Cargo Services",
    title: "Express Cargo Services",
    description:
      "Fast and dependable movement for time-sensitive deliveries.",
  },
  {
    imageSrc: "/assets/chain.png",
    imageAlt: "Supply Chain Solutions",
    title: "Supply Chain Solutions",
    description:
      "Integrated logistics planning and execution for operational scalability.",
  },
];

export default function ServiceSection() {
  return (
    <section id="services" className="relative bg-white flex flex-col justify-center px-4 sm:px-6 lg:px-16 pb-12 pt-20 md:pt-28 md:h-[80vh] overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, transparent, white)" }}
        aria-hidden="true"
      />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center flex-1">
        <div className="flex flex-col gap-4 lg:w-72 shrink-0">
          <span className="text-[#E8521A] text-4xl lg:text-5xl font-bold uppercase leading-tight">
            What We Offer
          </span>
          <p className="text-gray-500 text-sm sm:text-base font-semibold leading-relaxed max-w-xs sm:max-w-sm">
            Tailored services built to meet your unique business needs with
            efficiency and reliability.
          </p>
        </div>

        <div className="flex-1 min-w-0">
          <div className="overflow-x-auto lg:-mr-12">
            <div className="flex gap-5 pb-2 px-2 min-w-max pl-8">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
