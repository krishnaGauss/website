"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/logo.png"
            alt="Vertix Logistics Pvt Ltd Logo"
            width={220}
            height={50}
            style={{ height: "auto" }}
            className="w-24 md:w-35 object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-16">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative text-md font-medium text-gray-700 hover:text-[#E8521A] transition-colors group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E8521A] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-[#E8521A] hover:bg-[#c94615] text-white font-semibold px-5 py-2 rounded-md"
          >
            <Link href="/#contact">Get a Quote &rarr;</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded text-gray-700 hover:text-[#E8521A] transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="3" x2="19" y2="19" />
              <line x1="19" y1="3" x2="3" y2="19" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="6" x2="20" y2="6" />
              <line x1="2" y1="11" x2="20" y2="11" />
              <line x1="2" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium text-gray-700 hover:text-[#E8521A] transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="pt-2">
            <Button
              asChild
              className="w-full bg-[#E8521A] hover:bg-[#c94615] text-white font-semibold rounded-md"
            >
              <Link href="/#contact" onClick={() => setMobileOpen(false)}>
                Get a Quote &rarr;
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
