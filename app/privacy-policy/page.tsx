import Link from "next/link"

const sections = [
  {
    id: "01",
    title: "Information We Collect",
    body: [
      "We collect information you provide directly — your name, company name, contact details, shipment origin and destination, cargo specifications, and any trade documentation required to process your logistics request.",
      "We may also collect technical data (IP address, browser type, pages visited) when you interact with our website, solely for operational and security purposes.",
    ],
  },
  {
    id: "02",
    title: "How Your Information Is Used",
    body: [
      "Your data is used exclusively to plan, coordinate, and execute your logistics operations — including freight bookings, customs documentation, route planning, and delivery coordination.",
      "We do not sell, rent, or share your information with third parties for marketing purposes. Data shared with service partners (freight forwarders, shipping lines, transporters) is limited strictly to what is operationally necessary.",
    ],
  },
  {
    id: "03",
    title: "Confidentiality & NDA",
    body: [
      "All client engagements at Vertix Logistics are conducted under a strict confidentiality framework. We treat your shipment details, trade routes, supplier relationships, pricing structures, and commercial terms as proprietary information.",
      "Where required, we execute formal Non-Disclosure Agreements (NDAs) before any sensitive operational data is exchanged. Our staff are bound by internal confidentiality obligations as a condition of employment.",
    ],
  },
  {
    id: "04",
    title: "KYC — Know Your Client",
    body: [
      "As part of our onboarding process, we conduct a Know Your Client (KYC) verification for all new business relationships. This includes collection and verification of GST registration, company incorporation documents, PAN details, and authorised signatory identification.",
      "KYC is performed in compliance with applicable Indian trade and financial regulations and is conducted solely to validate the legitimacy of the business relationship before we accept and move cargo on your behalf.",
    ],
  },
  {
    id: "05",
    title: "Freight Forwarders & Service Partners",
    body: [
      "To execute multi-modal and international logistics, we work with a network of licensed freight forwarders, customs house agents (CHAs), last-mile transporters, and port handling agencies.",
      "Only the minimum information required to process your shipment is shared with these partners. All partners operating on your cargo are contractually obligated to handle your data with the same standard of confidentiality we uphold internally.",
    ],
  },
  {
    id: "06",
    title: "Shipping Line Bookings",
    body: [
      "For ocean freight, we place container bookings directly with major shipping lines on your behalf. This requires sharing your shipper and consignee details, commodity descriptions, and cargo weights as mandated by the carrier and international shipping regulations (including SOLAS VGM compliance).",
      "Booking references, Bill of Lading numbers, and container tracking data related to your shipment are retained in our systems for the duration of the engagement and for a period thereafter to support any post-delivery disputes or audits.",
    ],
  },
  {
    id: "07",
    title: "Data Retention",
    body: [
      "We retain your operational records — including shipping documents, invoices, KYC files, and correspondence — for a minimum of seven years in accordance with Indian statutory requirements under the Companies Act and GST regulations.",
      "After the applicable retention period, data is securely deleted or anonymised. You may request a copy of your data or raise a deletion request (subject to legal retention obligations) by contacting us directly.",
    ],
  },
  {
    id: "08",
    title: "Your Rights & Contact",
    body: [
      "You have the right to access, correct, or request deletion of your personal data held by us, subject to our legal and contractual obligations. To exercise these rights or raise any privacy concern, contact our team at info@vertixlogistics.com or call 0120-6618102.",
      "This policy is governed by the laws of India. Vertix Logistics Pvt Ltd reserves the right to update this policy; material changes will be communicated via our website.",
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* Page header */}
      <section
        className="relative flex items-center justify-center py-20 px-4 sm:px-6 lg:px-16 overflow-hidden"
        style={{ background: "#0a1223" }}
      >
        <div className="relative z-10 text-center max-w-2xl">
          <span className="text-[#E8521A] text-4xl lg:text-6xl font-bold uppercase leading-tight block">
            Privacy Policy
          </span>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            How we handle your data, protect your information, and operate with
            complete confidentiality.
          </p>
          <p className="mt-3 text-slate-500 text-sm">
            Effective date: May 2026 &nbsp;·&nbsp; Vertix Logistics Pvt Ltd
          </p>
        </div>
      </section>

      {/* Intro strip */}
      <section className="px-4 sm:px-6 lg:px-16 py-14 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-500 text-base leading-relaxed">
            At Vertix Logistics, discretion is not optional, it is foundational.
            This policy sets out plainly what information we collect, why we
            collect it, who we share it with, and how we keep it safe. We
            believe you deserve clarity, not legalese.
          </p>
        </div>
      </section>

      {/* Policy sections */}
      <section className="px-4 sm:px-6 lg:px-16 py-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-14">
          {sections.map((s) => (
            <div key={s.id} className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              {/* Section number */}
              <div className="shrink-0">
                <span
                  className="text-4xl font-bold tabular-nums leading-none"
                  style={{ color: "#E8521A", opacity: 0.25 }}
                >
                  {s.id}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h2
                  className="text-xl font-bold leading-snug"
                  style={{ color: "#0a1223" }}
                >
                  {s.title}
                </h2>
                {s.body.map((para, i) => (
                  <p key={i} className="text-gray-500 text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA footer strip */}
      <section className="px-4 sm:px-6 lg:px-16 py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
          <span className="text-[#E8521A] text-sm font-semibold uppercase tracking-widest">
            Questions About This Policy?
          </span>
          <h3
            className="text-2xl lg:text-3xl font-bold leading-snug"
            style={{ color: "#0a1223" }}
          >
            We&apos;re Happy to Clarify
          </h3>
          <p className="text-gray-400 text-base">
            Reach out to our team and we will respond within one business day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
            <Link
              href="/#contact"
              className="inline-block rounded-lg px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "#E8521A" }}
            >
              Contact Us
            </Link>
            <a
              href="mailto:info@vertixlogistics.com"
              className="text-sm font-medium text-gray-500 hover:text-[#E8521A] transition-colors"
            >
              info@vertixlogistics.com
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
