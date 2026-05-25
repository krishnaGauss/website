"use client";

import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const bullets = ["Quick Response", "Custom Solutions", "Reliable Support"];

type FormState = {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactBlock() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.fullName,
          company_name: form.companyName,
          phone: form.phone,
          reply_to: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setForm({ fullName: "", companyName: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#E8521A] transition-colors w-full bg-white";

  return (
    /* Outer shell — orange gradient fills the entire block */
    <div
      className="w-full h-full flex flex-col md:flex-row rounded-2xl shadow-xl overflow-hidden"
      style={{
        background:
          "linear-gradient(140deg, #bf3e0e 0%, #E8521A 42%, #f97c36 100%)",
        border: "3px solid #E8521A",
      }}
    >
      {/* Radial highlight — spans entire block */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse at 12% 15%, rgba(255,255,255,0.13) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* ── Left: text + image directly on gradient ── */}
      <div className="relative flex flex-col md:w-[46%]">

        {/* Top: eyebrow + heading + description */}
        <div className="relative z-10 flex flex-col gap-2 p-8 md:p-10 pb-0">
          <span className="text-orange-200 text-sm font-semibold uppercase tracking-[0.18em]">
            Let&apos;s Move Your
          </span>
          <h2 className="text-white text-3xl md:text-[2.1rem] font-bold leading-tight">
            Business Forward
          </h2>
          <p className="text-orange-100/90 text-base leading-relaxed max-w-65 mt-4">
            Connect with our team for transportation solutions tailored to your
            operational requirements.
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom row: bullets left, image right */}
        <div className="relative z-10 flex items-end justify-between px-8 md:px-10 min-h-45 md:min-h-0 mt-8 md:mt-0">
          <ul className="flex flex-col gap-2.5 pb-6 md:pb-8">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-white text-sm md:text-base font-medium whitespace-nowrap"
              >
                <span className="flex items-center justify-center w-4.5 h-4.5 rounded-full bg-white/25 shrink-0">
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path
                      d="M1 3.5L3.2 5.8L8 1"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="relative w-55 h-45 md:w-98 md:h-80.5 md:left-10 shrink-0">
            <Image
              src="/assets/boxes.png"
              alt="Logistics boxes with Vertix branding"
              fill
              sizes="(max-width: 768px) 220px, 392px"
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>

      {/* ── Right: white card floating inside the orange gradient ── */}
      <div className="flex-1 flex items-stretch p-4 md:p-5">
        <div className="flex-1 bg-white rounded-xl flex flex-col justify-center px-7 md:px-8 py-7 md:py-8">

          {/* Mobile-only heading */}
          <div className="md:hidden mb-5">
            <h3 className="text-xl font-bold text-gray-900">
              Get a <span className="text-[#E8521A]">Free Quote</span>
            </h3>
          </div>

          {status === "success" && (
            <div className="mb-4 rounded-md bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700 font-medium">
              Message sent! We&apos;ll be in touch shortly.
            </div>
          )}
          {status === "error" && (
            <div className="mb-4 rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 font-medium">
              Something went wrong. Please try again or email us directly.
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Row 1: Full Name + Company Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-xs font-medium">Full Name</label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-xs font-medium">Company Name</label>
                <input
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 2: Phone + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-xs font-medium">Phone Number</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  type="tel"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-xs font-medium">Email Address</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  type="email"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 3: Message — full width */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-500 text-xs font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit */}
            <div className="mt-1 md:flex md:justify-end">
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#E8521A] hover:bg-[#c94615] active:bg-[#a83a12] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-7 py-3 rounded-md text-sm transition-colors"
              >
                {status === "loading" ? (
                  "Sending…"
                ) : (
                  <>
                    <span className="hidden md:inline">Get a Free Quote</span>
                    <span className="md:hidden">Submit Request</span>
                    {" "}&#8594;
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
