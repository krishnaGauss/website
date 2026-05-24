"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col bg-white overflow-x-hidden relative">

      {/* Right-side hero image — desktop only */}
      <div
        className="hidden md:block absolute right-0 top-0 bottom-0 w-[68%] pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/hero.png"
          alt=""
          fill
          className="object-cover object-top-left"
          priority
        />
        {/* Multi-stop gradient: solid white → fully transparent, covering the text-overlap zone */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #ffffff 0%, #ffffff 4%, rgba(255,255,255,0.75) 16%, rgba(255,255,255,0.4) 28%, rgba(255,255,255,0.12) 42%, transparent 56%)",
          }}
        />
      </div>

      {/* White mist — fades the bottom of the hero into the section below (desktop only) */}
      <div
        className="hidden md:block absolute bottom-0 left-0 right-0 h-[32%] pointer-events-none z-3"
        style={{ background: "linear-gradient(to bottom, transparent, white)" }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative flex-1 flex items-start md:items-center w-full px-4 sm:px-6 lg:px-16 pt-10 pb-8 md:py-8 z-10">
        <div className="flex flex-col gap-5 w-full md:w-[46%]">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-wide">
            Vertix Logistics
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-[#E8521A] leading-snug">
            Delivering Logistics With<br />Precision &amp; Trust
          </p>
          <p className="text-gray-500 text-[0.95rem] mt-20 leading-relaxed max-w-sm">
            End-to-end transportation and logistics solutions designed for speed, transparency, and long-term business partnerships.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Button
              asChild
              className="bg-[#E8521A] hover:bg-[#c94615] text-white font-semibold px-6 h-11 rounded-md text-sm"
            >
              <Link href="/#contact">Get a Quote &#8594;</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gray-800 text-gray-800 hover:bg-gray-100 font-semibold px-6 h-11 rounded-md text-sm"
            >
              <Link href="/#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile hero image — bottom of section, fades into ServiceSection */}
      <div
        className="md:hidden absolute bottom-0 left-0 right-0 h-[52%] pointer-events-none z-5"
        aria-hidden="true"
      >
        <Image
          src="/assets/hero_mobile.png"
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 0px"
          className="object-cover object-top"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, white 0%, transparent 22%, transparent 62%, white 100%)",
          }}
        />
      </div>

    </section>
  )
}
