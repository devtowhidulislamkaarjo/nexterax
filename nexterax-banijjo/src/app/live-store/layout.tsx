import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nexterax-digital.com";

export const metadata: Metadata = {
  title:
    "লাইভ ই-কমার্স ডেমো স্টোর — ফুড, ফ্যাশন, বিউটি, আইটি ও সুপার শপ থিম | Banijjo Studio",
  description:
    "Banijjo Studio-র ৬টি লাইভ ই-কমার্স ওয়েবসাইট থিম (অর্গানিক ফুড, ফ্যাশন ও বুটিক, বিউটি স্টুডিও, আইটি ও গ্যাজেট শপ, সুপার শপ এবং হোম অ্যাপ্লায়েন্স) ও ১৫-সেকেন্ড COD চেকআউট সরাসরি চালিয়ে দেখুন।",
  keywords: [
    "live ecommerce demo Bangladesh",
    "ই-কমার্স ওয়েবসাইট ডেমো",
    "সুপার শপ ওয়েবসাইট ডেমো",
    "আইটি ও গ্যাজেট শপ ওয়েবসাইট",
    "ফ্যাশন ও বুটিক ওয়েবসাইট ডেমো",
    "অর্গানিক ফুড ওয়েবসাইট ডেমো",
    "Banijjo Studio live store",
  ],
  alternates: {
    canonical: `${SITE_URL}/live-store/`,
  },
  openGraph: {
    title:
      "লাইভ ডেমো স্টোর টেস্ট করুন — Banijjo Studio (৬টি রেডি ই-কমার্স থিম)",
    description:
      "অর্গানিক ফুড, ফ্যাশন, বিউটি, আইটি ও গ্যাজেট এবং সুপার শপ থিমে ১-স্টেপ ক্যাশ অন ডেলিভারি অর্ডার সরাসরি চালিয়ে দেখুন।",
    url: `${SITE_URL}/live-store/`,
    type: "website",
    images: [
      {
        url: "/banijjo-social-preview.jpg",
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "Banijjo Studio Live Demo Storefronts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Demo Storefronts — Banijjo Studio",
    description:
      "Test-drive 6 live Next.js 15 storefronts (Food, Fashion, Beauty, IT & Gadgets, Super Shop & Home) with 15-second COD checkout.",
    images: ["/banijjo-social-preview.jpg"],
  },
};

export default function LiveStoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
