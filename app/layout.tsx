import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vertixlogistics.com"),
  title: "Vertix Logistics Pvt. Ltd. | Precision & Trust in Logistics Solutions",
  description: "End-to-end transportation and logistics solutions designed for speed, transparency, and long-term business partnerships. Trusted by clients for over three decades across industries and supply chains.",
  keywords: [
    "logistics company India",
    "freight forwarding India",
    "FCL LCL shipping",
    "warehousing and distribution India",
    "supply chain solutions",
    "express cargo services",
    "3PL logistics India",
    "cargo shipping India",
    "international freight forwarding",
    "pharmaceutical logistics",
    "automotive logistics",
    "aerospace logistics",
    "FMCG logistics",
    "retail logistics",
    "electronics logistics",
    "manufacturing logistics",
    "Vertix Logistics",
    "end-to-end logistics solutions",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
