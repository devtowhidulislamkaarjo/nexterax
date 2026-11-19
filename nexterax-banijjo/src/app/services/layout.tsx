import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nexterax-digital.com";

export const metadata: Metadata = {
  title:
    "কাস্টম ওয়েবসাইট, পোর্টফোলিও, CRM ও ERP ডেভেলপমেন্ট সার্ভিস — NexteraX Digital",
  description:
    "ব্যবসা বা প্রতিষ্ঠানের জন্য ওয়েবসাইট বানাতে চান? NexteraX Digital তৈরি করছে কাস্টম ওয়েবসাইট, পার্সোনাল পোর্টফোলিও, অর্গানাইজেশনাল পোর্টফোলিও, বিজনেস সিস্টেম, ইন্টারনাল অফিস CRM এবং ERP সফটওয়্যার।",
  keywords: [
    "ওয়েবসাইট ডেভেলপমেন্ট বাংলাদেশ",
    "ওয়েবসাইট বানাতে চাই",
    "পোর্টফোলিও ওয়েবসাইট তৈরি",
    "কর্পোরেট ওয়েবসাইট ডেভেলপমেন্ট",
    "কাস্টম ওয়েবসাইট ডেভেলপমেন্ট ঢাকা",
    "CRM সফটওয়্যার বাংলাদেশ",
    "ERP সফটওয়্যার ডেভেলপমেন্ট বাংলাদেশ",
    "custom software company Bangladesh",
    "portfolio website development Bangladesh",
    "NexteraX Digital services",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/`,
  },
  openGraph: {
    title:
      "কাস্টম ওয়েবসাইট, পোর্টফোলিও, CRM ও ERP ডেভেলপমেন্ট — NexteraX Digital",
    description:
      "আপনার প্রতিষ্ঠান ও কাজের ধরন অনুযায়ী পরিচ্ছন্ন কাস্টম ওয়েবসাইট, পোর্টফোলিও, ইন্টারনাল সিআরএম ও ইআরপি সিস্টেম ডেভেলপমেন্ট।",
    url: `${SITE_URL}/services/`,
    type: "website",
    images: [
      {
        url: "/banijjo-social-preview.jpg",
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "NexteraX Digital Custom Websites, CRM & ERP Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Websites, CRM & ERP Engineering — NexteraX Digital",
    description:
      "Bespoke websites, organizational portfolios, internal office CRMs, and ERP platforms built by NexteraX Digital.",
    images: ["/banijjo-social-preview.jpg"],
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Website, Portfolio, CRM & ERP Development",
  provider: {
    "@type": "Organization",
    name: "NexteraX Digital",
    url: `${SITE_URL}/`,
    telephone: "+8801878601610",
  },
  areaServed: "BD",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Custom Engineering Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development (ওয়েবসাইট ডেভেলপমেন্ট)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Personal Portfolio Website Development (পার্সোনাল পোর্টফোলিও ডেভেলপমেন্ট)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Organizational Portfolio Website Development (অর্গানাইজেশনাল পোর্টফোলিও ডেভেলপমেন্ট)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Website Build (কাস্টম ওয়েবসাইট বিল্ড)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom System Build (সিস্টেম বিল্ড)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Internal Office CRM Build (ইন্টারনাল অফিস সিআরএম বিল্ড)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP Software Build (ইআরপি বিল্ড)" } },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {children}
    </>
  );
}
