import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Page header */}
      <section
        className="relative flex items-center justify-center py-20 px-4 sm:px-6 lg:px-16 overflow-hidden"
        style={{ background: "#0a1223" }}
      >
        <div className="relative z-10 text-center max-w-2xl">
          <span className="text-[#E8521A] text-4xl lg:text-6xl font-bold uppercase leading-tight block">
            About Us
          </span>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Three decades of precision logistics, built on trust.
          </p>
        </div>
      </section>

      {/* Block 1 — text left, image right */}
      <section className="px-4 sm:px-6 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            <span className="text-[#E8521A] text-sm font-semibold uppercase tracking-widest">
              Who We Are
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold leading-snug"
              style={{ color: "#0a1223" }}
            >
              A Team of Dedicated Logistics Professionals
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              At Vertix Logistics, we are a team of seasoned professionals with
              over three decades of experience in managing end-to-end supply
              chains. From first-mile pickup to last-mile delivery, we
              orchestrate every link in the logistics chain with discipline,
              transparency, and care.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              Our strength lies in understanding that no two shipments are the
              same. We invest time in learning each client&apos;s business,
              crafting solutions that align with their operational rhythm and
              commercial goals — not off-the-shelf packages, but logistics that
              truly fit.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/assets/chain.png"
              alt="Interconnected logistics supply chain network"
              loading="eager"
              width={480}
              height={480}
              className="w-full max-w-md h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-4 sm:mx-6 lg:mx-16 border-t border-gray-100" />

      {/* Block 2 — image left, text right */}
      <section className="px-4 sm:px-6 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/assets/container.png"
              alt="Shipping containers for cargo logistics"
              width={560}
              height={420}
              className="w-full max-w-md h-auto object-contain drop-shadow-xl"
              loading="eager"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            <span className="text-[#E8521A] text-sm font-semibold uppercase tracking-widest">
              What We Do
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold leading-snug"
              style={{ color: "#0a1223" }}
            >
              Personalised Services for Every Commodity
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              We handle a wide range of commodities — from bulk industrial goods
              and perishables to high-value cargo — with services that span FCL
              and LCL container shipping, full truck load transport, express
              cargo, warehousing, and integrated supply chain management.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              Every engagement is backed by real-time coordination, proactive
              communication, and a single point of accountability. Our clients
              don&apos;t just receive a delivery — they receive a partnership
              committed to their operational success, long after the last mile.
            </p>

            {/* Stat strip */}
            <div className="flex gap-10 pt-2">
              <div>
                <p
                  className="text-3xl font-bold"
                  style={{ color: "#E8521A" }}
                >
                  30+
                </p>
                <p className="text-gray-400 text-sm mt-1">Years of Service</p>
              </div>
              <div>
                <p
                  className="text-3xl font-bold"
                  style={{ color: "#E8521A" }}
                >
                  500+
                </p>
                <p className="text-gray-400 text-sm mt-1">Clients Served</p>
              </div>
              <div>
                <p
                  className="text-3xl font-bold"
                  style={{ color: "#E8521A" }}
                >
                  PAN India
                </p>
                <p className="text-gray-400 text-sm mt-1">Network Reach</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
