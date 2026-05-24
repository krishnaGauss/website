"use client"

import { useState } from "react"
import Link from "next/link"

const faqs = [
  {
    question: "What services does Vertix Logistics offer?",
    answer:
      "Vertix Logistics provides end-to-end supply chain solutions including FCL and LCL container shipping, full truck load (FTL) transport, express cargo, warehousing, and integrated supply chain management. We handle everything from first-mile pickup to last-mile delivery across India.",
  },
  {
    question: "How do I get a shipping quote?",
    answer:
      "You can request a quote by filling out the contact form on our website or reaching out to our team directly via email or phone. Provide details such as your shipment type, origin, destination, dimensions, and preferred timeline, and we will get back to you with a tailored quote promptly.",
  },
  {
    question: "What types of cargo do you handle?",
    answer:
      "We handle a wide range of commodities including bulk industrial goods, perishables, temperature-sensitive cargo, high-value goods, hazardous materials (with proper compliance), and general freight. Our team assesses each shipment individually to ensure the right handling method is applied.",
  },
  {
    question: "Do you offer real-time shipment tracking?",
    answer:
      "Yes. Every shipment managed by Vertix Logistics comes with real-time tracking and proactive status updates. You will have a single point of contact who keeps you informed at every stage of the journey — from pickup confirmation to final delivery.",
  },
  {
    question: "Which regions does Vertix Logistics operate in?",
    answer:
      "We operate across India with a PAN India network reach. Our logistics infrastructure spans major metros and Tier-2 cities, giving us the capability to service both high-volume commercial corridors and remote delivery locations efficiently.",
  },
  {
    question: "What is the difference between FCL and LCL shipping?",
    answer:
      "FCL (Full Container Load) means your cargo occupies an entire container, which is ideal for large shipments and offers faster transit times. LCL (Less than Container Load) allows multiple shippers to share container space, making it cost-effective for smaller consignments. Our team helps you determine the best option based on your volume and budget.",
  },
  {
    question: "Do you offer warehousing and storage solutions?",
    answer:
      "Yes. We provide flexible warehousing solutions including short-term storage, bonded warehousing, and long-term inventory management. Our facilities are equipped with modern racking systems, security surveillance, and inventory tracking to keep your goods safe and organised.",
  },
  {
    question: "How does Vertix Logistics handle customs and documentation?",
    answer:
      "Our experienced team assists with all customs clearance procedures, trade compliance documentation, and regulatory filings required for import and export shipments. We ensure all paperwork is accurate and submitted on time to avoid delays at ports or checkpoints.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve a diverse range of industries including manufacturing, retail, pharmaceuticals, agriculture, automotive, FMCG, and e-commerce. Our solutions are tailored to the specific logistics demands and compliance requirements of each sector.",
  },
  {
    question: "How do I get in touch with Vertix Logistics for support?",
    answer:
      "You can reach our team through the contact form on our website, via email, or by calling our office directly. We offer dedicated account management so existing clients always have a named contact they can reach for any queries, escalations, or operational support.",
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden transition-shadow hover:shadow-md">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span
          className="text-base font-semibold leading-snug"
          style={{ color: "#0a1223" }}
        >
          {question}
        </span>
        <span
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          style={{
            background: isOpen ? "#E8521A" : "#f3f4f6",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <path
              d="M2 4.5L7 9.5L12 4.5"
              stroke={isOpen ? "#ffffff" : "#0a1223"}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "500px" : "0px" }}
      >
        <div className="px-6 pb-5 pt-1 border-t border-gray-100">
          <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <main className="bg-white">
      {/* Page header */}
      <section
        className="relative flex items-center justify-center py-20 px-4 sm:px-6 lg:px-16 overflow-hidden"
        style={{ background: "#0a1223" }}
      >
        <div className="relative z-10 text-center max-w-2xl">
          <span className="text-[#E8521A] text-4xl lg:text-6xl font-bold uppercase leading-tight block">
            FAQs
          </span>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Answers to the questions we hear most often.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="px-4 sm:px-6 lg:px-16 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <span className="text-[#E8521A] text-sm font-semibold uppercase tracking-widest">
              Got Questions?
            </span>
            <h2
              className="mt-3 text-3xl lg:text-4xl font-bold leading-snug"
              style={{ color: "#0a1223" }}
            >
              Everything You Need to Know
            </h2>
            <p className="mt-3 text-gray-400 text-base">
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link
                href="/#contact"
                className="text-[#E8521A] font-medium hover:underline"
              >
                Reach out to us directly.
              </Link>
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
