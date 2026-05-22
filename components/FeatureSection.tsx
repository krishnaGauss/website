import Image from "next/image";

const features = [
  {
    icon: "/assets/wallet.png",
    alt: "Wallet icon",
    title: "Competitive Pricing",
    description:
      "Optimized operations that help businesses reduce logistics costs without compromising reliability.",
  },
  {
    icon: "/assets/handshake.png",
    alt: "Handshake icon",
    title: "30+ Years of Client Relationships",
    description:
      "Strong long-term partnerships built through consistency, accountability, and dependable service.",
  },
  {
    icon: "/assets/headphone.png",
    alt: "Headphone icon",
    title: "Transparent Operations",
    description:
      "Clear communication, real-time coordination, and complete operational visibility at every stage.",
  },
  {
    icon: "/assets/board.png",
    alt: "Board icon",
    title: "Accountability-Driven Approach",
    description:
      "We prioritize timely execution, proactive support, and ownership across every shipment.",
  },
  {
    icon: "/assets/globe.png",
    alt: "Globe Icon",
    title: "Nationwide Reach",
    description:
      "Efficient logistics networks connecting businesses across key commercial routes in India.",
  },
  {
    icon: "/assets/team.png",
    alt: "Team icon",
    title: "Experienced Operations Team",
    description:
      "Skilled professionals managing transportation workflows with precision and responsiveness.",
  },
];

export default function FeatureSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background image — desktop only */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/assets/feature_bg.png"
          alt=""
          fill
          sizes="(max-width: 767px) 1px, 100vw"
          loading="eager"
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Dark navy overlay at 70% opacity */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10, 18, 35, 0.94)" }}
          aria-hidden="true"
        />
      </div>

      {/* Mobile: solid dark navy background */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ background: "#0a1223" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">

          {/* Left: heading block */}
          <div className="flex flex-col gap-4 lg:w-[320px] shrink-0">
            <span className="text-[#E8521A] text-4xl lg:text-5xl font-bold uppercase leading-tight">
              Why Choose Us
            </span>
            <h2 className="text-lg lg:text-xl font-medium text-white leading-snug">
              Built On Trust, Transparency &amp; Long-Term Relationships
            </h2>
          </div>

          {/* Right: feature grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-2">
                {/* Fixed-size container gives fill a real CSS height, ensuring all icons align */}
                <div className="relative w-24 h-24 lg:w-44 lg:h-44 self-center -mb-8">
                  <Image
                    src={feature.icon}
                    alt={feature.alt}
                    fill
                    sizes="(max-width: 1023px) 96px, 176px"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2 text-center">
                  <h3 className="text-white font-semibold text-base lg:text-lg leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
