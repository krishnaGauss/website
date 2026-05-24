"use client"

import Image from "next/image"
import Link from "next/link"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/#contact" },
]

const resources = [
  { label: "FAQs", href: "/faqs" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
]

const services = [
  { label: "LCL/FCL Services", href: "/#services" },
  { label: "Warehousing & Distribution", href: "/#services" },
  { label: "Express Cargo Services", href: "/#services" },
  { label: "Supply Chain Solutions", href: "/#services" },
  { label: "Dedicated Fleet Services", href: "/#services" },
  { label: "Consolidation Services", href: "/#services" },
  { label: "Customs Clearance", href: "/#services" },
]

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B1628] text-white">
      <div className="flex flex-col">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr_1.4fr]">

            {/* Column 1 — Brand */}
            <div className="flex flex-col items-start gap-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/assets/footer_logo.png"
                  alt="Vertix Logistics Pvt Ltd"
                  width={312}
                  height={140}
                  style={{ height: "auto" }}
                  className="w-70 object-contain -ml-11"
                />
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed max-w-55">
                Delivering logistics with precision, transparency, and trust for over three decades.
              </p>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h3 className="text-[#E8521A] text-xs font-bold uppercase tracking-widest mb-5">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-3">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Resources */}
            <div>
              <h3 className="text-[#E8521A] text-xs font-bold uppercase tracking-widest mb-5">
                Resources
              </h3>
              <ul className="flex flex-col gap-3">
                {resources.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Services */}
            <div>
              <h3 className="text-[#E8521A] text-xs font-bold uppercase tracking-widest mb-5">
                Services
              </h3>
              <ul className="flex flex-col gap-3">
                {services.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5 — Contact Us */}
            <div>
              <h3 className="text-[#E8521A] text-xs font-bold uppercase tracking-widest mb-5">
                Contact Us
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-[#E8521A]">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <a
                    href="tel:01206618102"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    0120-6618102
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-[#E8521A]">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <a
                    href="mailto:info@vertixlogistics.com"
                    className="text-sm text-gray-400 hover:text-white transition-colors break-all"
                  >
                    info@vertixlogistics.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-[#E8521A]">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <address className="not-italic text-sm text-gray-400 leading-relaxed">
                    Unit No-411, Tower-C,<br />
                    The I-thum Tower,<br />
                    Sector-62, Noida,<br />
                    Uttar Pradesh – 201309
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-500 text-center sm:text-left">
                © {new Date().getFullYear()} Vertix Logistics Pvt Ltd. All Rights Reserved.
              </p>
            </div>
            <p className="text-sm text-white">
                GSTIN: 09AAHCV6846M1ZH &nbsp;|&nbsp; CIN: U63030UP2020PTC136766
              </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
