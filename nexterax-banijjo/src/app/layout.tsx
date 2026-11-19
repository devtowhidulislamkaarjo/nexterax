import type { Metadata } from "next";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nexterax-digital.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "ওয়েবসাইট বানাতে চান? Banijjo Studio (বাণিজ্য স্টুডিও) — Best E-Commerce & Website Development in Bangladesh | NexteraX Digital",
  description:
    "ওয়েবসাইট বা ই-কমার্স ওয়েবসাইট বানাতে চান? NexteraX Digital ও Banijjo Studio দিচ্ছে ০.৮ সেকেন্ডের Next.js 15 ই-কমার্স স্টোর (ফুড, ফ্যাশন, বিউটি, আইটি, সুপার শপ ও হোম থিম), ১৫-সেকেন্ড COD চেকআউট, কাস্টম ওয়েবসাইট, পোর্টফোলিও, অফিস CRM ও ERP ডেভেলপমেন্ট — আজীবন ০% কমিশনে।",
  keywords: [
    "ওয়েবসাইট বানাতে চাই",
    "ওয়েবসাইট তৈরি করতে চাই",
    "ই-কমার্স ওয়েবসাইট বানাতে চাই",
    "ওয়েবসাইট বানানোর খরচ কত",
    "বাংলাদেশে সেরা ওয়েবসাইট ডেভেলপমেন্ট কোম্পানি",
    "website banate chai",
    "ecommerce website banate chai",
    "website toiri korte koto taka lage",
    "website development company in Bangladesh",
    "best web development company Dhaka",
    "buy ecommerce website Bangladesh",
    "ready made ecommerce website Bangladesh",
    "Banijjo Studio",
    "বাণিজ্য স্টুডিও",
    "NexteraX Digital",
    "Next.js ecommerce website Bangladesh",
    "super shop website Bangladesh",
    "IT gadget shop website Bangladesh",
    "fashion boutique website Bangladesh",
    "organic food ecommerce website Bangladesh",
    "personal portfolio website Bangladesh",
    "corporate website development Bangladesh",
    "custom CRM software Bangladesh",
    "ERP software development Bangladesh",
  ],
  authors: [{ name: "NexteraX Digital", url: SITE_URL }],
  creator: "NexteraX Digital",
  publisher: "NexteraX Digital",
  category: "Web Development, E-Commerce Platform & Custom Software",
  icons: {
    icon: "/banijjo-favicon.png",
    shortcut: "/banijjo-favicon.png",
    apple: "/banijjo-favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      "bn-BD": `${SITE_URL}/`,
      "en-US": `${SITE_URL}/`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    title:
      "ওয়েবসাইট বানাতে চান? Banijjo Studio — ই-কমার্স, পোর্টফোলিও ও কাস্টম ওয়েবসাইট ডেভেলপমেন্ট",
    description:
      "০.৮ সেকেন্ডের Next.js 15 স্টোরফ্রন্ট, ১৫-সেকেন্ড ওয়ান-ট্যাপ COD চেকআউট, ৬টি প্রো থিম (ফুড, ফ্যাশন, বিউটি, আইটি ও সুপার শপ), কাস্টম ওয়েবসাইট, CRM ও ERP — আজীবন ০% কমিশনে।",
    type: "website",
    locale: "bn_BD",
    alternateLocale: ["en_US"],
    url: `${SITE_URL}/`,
    siteName: "Banijjo Studio • NexteraX Digital",
    images: [
      {
        url: "/banijjo-social-preview.jpg",
        secureUrl: `${SITE_URL}/banijjo-social-preview.jpg`,
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "Banijjo Studio by NexteraX Digital — E-Commerce, Custom Website, Portfolio & CRM Development in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Banijjo Studio (বাণিজ্য স্টুডিও) — E-Commerce & Custom Website Development in Bangladesh",
    description:
      "Launch a 0.8s Next.js 15 online store (Food, Fashion, Beauty, IT, Super Shop & Home) or build custom websites, portfolios, CRMs & ERPs with NexteraX Digital.",
    images: [
      {
        url: "/banijjo-social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Banijjo Studio Homepage Preview",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Banijjo Studio (বাণিজ্য স্টুডিও) — NexteraX Digital",
      alternateName: [
        "Banijjo Studio",
        "বাণিজ্য স্টুডিও",
        "NexteraX Digital",
        "NexteraX Website Development Bangladesh",
      ],
      inLanguage: ["bn-BD", "en-US"],
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": `${SITE_URL}/#organization`,
      name: "NexteraX Digital",
      alternateName: "Banijjo Studio by NexteraX Digital",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/banijjo-logo-horizontal.png`,
      image: `${SITE_URL}/banijjo-social-preview.jpg`,
      telephone: "+8801878601610",
      email: "info@nexterax-digital.com",
      priceRange: "৳25,000 - ৳85,000+",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      areaServed: [
        { "@type": "Country", name: "Bangladesh" },
        { "@type": "Place", name: "Worldwide" },
      ],
      founder: {
        "@type": "Person",
        name: "Towhidul Islam",
        jobTitle: "Founder & CEO",
      },
      knowsAbout: [
        "Website Development in Bangladesh",
        "E-Commerce Website Development",
        "Next.js 15 Web Applications",
        "Personal Portfolio Website Development",
        "Organizational & Corporate Website Development",
        "Custom Internal Office CRM Software",
        "Enterprise ERP Software Development",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+8801878601610",
        contactType: "sales",
        areaServed: ["BD", "Worldwide"],
        availableLanguage: ["Bengali", "English"],
      },
    },
    {
      "@type": ["SoftwareApplication", "Product"],
      "@id": `${SITE_URL}/#banijjo-studio`,
      name: "Banijjo Studio (বাণিজ্য স্টুডিও) — White-Label E-Commerce Website Platform",
      alternateName: [
        "Banijjo Studio",
        "বাণিজ্য স্টুডিও",
        "রেডি ই-কমার্স ওয়েবসাইট বাংলাদেশ",
      ],
      applicationCategory: "BusinessApplication, EcommercePlatform",
      operatingSystem: "Web, Cloud, Docker, Linux",
      image: `${SITE_URL}/banijjo-social-preview.jpg`,
      brand: {
        "@id": `${SITE_URL}/#organization`,
      },
      description:
        "Banijjo Studio by NexteraX Digital is a sub-second white-label e-commerce website platform built with Next.js 15 and PostgreSQL 17. Includes a 12-section No-Code Visual Website Builder, 6 ready industry themes (Organic Food, Fashion & Boutique, Skincare & Beauty, IT & Gadgets, Super Shop & Daily Mart, and Home Appliances), 15-second Bangladeshi Guest Cash-on-Delivery (COD) Checkout, Steadfast/Pathao/RedX/eCourier/Paperfly & bKash/Nagad/SSLCommerz integrations, Meta Pixel + Server CAPI, and 0% monthly sales commission.",
      featureList: [
        "No-Code Visual Brand Studio with 12+ Conversion Blocks & 1-Click Rollback",
        "15-Second Bangladeshi Guest COD Checkout with 11-Digit Phone Validation",
        "6 Ready Industry Themes: Organic Food, Fashion, Beauty, IT & Gadgets, Super Shop, Home Appliances",
        "Unlimited Nested Categories, Mega Menus & Auto 308 SEO Redirects",
        "Zero-Overselling PostgreSQL 17 Atomic Stock Lock & Duplicate Order Guard",
        "Real COD Cashflow Dashboard (Placed vs Delivered vs Paid vs Pending Courier COD)",
        "4 Staff RBAC Roles, Owner 2FA & AES-256-GCM Encrypted API Key Vault",
        "Built-in Google JSON-LD Schema, XML Sitemap, OpenGraph & AI Search (AEO) Optimization",
      ],
      offers: [
        {
          "@type": "Offer",
          name: "Starter Launchpad (স্টার্টার লঞ্চপ্যাড)",
          price: "25000",
          priceCurrency: "BDT",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#pricing`,
        },
        {
          "@type": "Offer",
          name: "Business Pro Scaler (বিজনেস প্রো স্কেলার)",
          price: "45000",
          priceCurrency: "BDT",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#pricing`,
        },
        {
          "@type": "Offer",
          name: "Enterprise Flagship (এন্টারপ্রাইজ ফ্ল্যাগশিপ)",
          price: "85000",
          priceCurrency: "BDT",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#pricing`,
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "64",
        bestRating: "5",
      },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#all-services-list`,
      name: "Website, E-Commerce, Portfolio, CRM & ERP Development Services in Bangladesh",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "E-Commerce Website Development (ই-কমার্স ওয়েবসাইট — ফুড, ফ্যাশন, বিউটি, আইটি ও সুপার শপ)",
          url: `${SITE_URL}/#presets`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Business & Corporate Website Development (ওয়েবসাইট ডেভেলপমেন্ট)",
          url: `${SITE_URL}/services/#website-development`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Personal Portfolio Website Development (পার্সোনাল পোর্টফোলিও ওয়েবসাইট)",
          url: `${SITE_URL}/services/#personal-portfolio`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Organizational Portfolio Website Development (অর্গানাইজেশনাল পোর্টফোলিও ওয়েবসাইট)",
          url: `${SITE_URL}/services/#organizational-portfolio`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Custom Website & Web Application Build (কাস্টম ওয়েবসাইট ও সিস্টেম বিল্ড)",
          url: `${SITE_URL}/services/#custom-website`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Internal Office & Sales CRM Build (ইন্টারনাল অফিস সিআরএম সফটওয়্যার)",
          url: `${SITE_URL}/services/#internal-crm`,
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Custom ERP Software Development (কাস্টম ইআরপি বিল্ড)",
          url: `${SITE_URL}/services/#erp-build`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq-schema`,
      mainEntity: [
        {
          "@type": "Question",
          name: "আমি ওয়েবসাইট বানাতে চাই — কোথায় এবং কীভাবে প্রফেশনাল ওয়েবসাইট বানাবো? (Where can I build a professional website in Bangladesh?)",
          acceptedAnswer: {
            "@type": "Answer",
            text: "আপনি ই-কমার্স ওয়েবসাইট, বিজনেস ওয়েবসাইট, পার্সোনাল বা অর্গানাইজেশনাল পোর্টফোলিও, কাস্টম ওয়েব সিস্টেম, ইন্টারনাল অফিস CRM কিংবা ERP সফটওয়্যার বানাতে চাইলে NexteraX Digital (nexterax-digital.com) আপনার সেরা পার্টনার। সরাসরি +880 1878-601610 নাম্বারে WhatsApp বা কল করে ৩–৭ দিনের মধ্যেই আপনার নিজস্ব ডোমেইনে সুপার-ফাস্ট ওয়েবসাইট লাইভ করতে পারবেন।",
          },
        },
        {
          "@type": "Question",
          name: "বাংলাদেশে ই-কমার্স ওয়েবসাইট বা ওয়েবসাইট বানানোর খরচ কত? (What is the cost of building a website in Bangladesh?)",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NexteraX Digital-এর 'Banijjo Studio (বাণিজ্য স্টুডিও)' Next.js 15 ই-কমার্স ওয়েবসাইটের স্টার্টার প্যাকেজ এককালীন ২৫,০০০ টাকা, কুরিয়ার ও বিকাশ ইন্টিগ্রেশনসহ বিজনেস প্রো প্যাকেজ ৪৫,০০০ টাকা এবং এন্টারপ্রাইজ ফ্ল্যাগশিপ ৮৫,০০০+ টাকা—আজীবন ০% সেলস কমিশনে। এছাড়া কাস্টম কর্পোরেট ওয়েবসাইট, পোর্টফোলিও ও CRM প্রজেক্টের বাজেট কাজের পরিধি অনুযায়ী নির্ধারণ করা হয়।",
          },
        },
        {
          "@type": "Question",
          name: "কোন কোন ব্যবসার জন্য রেডি ই-কমার্স থিম ও লাইভ ডেমো পাওয়া যাবে?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Banijjo Studio-তে ৬টি কনভার্সন-টেস্টেড রেডি থিম রয়েছে: (১) অর্গানিক ফুড ও গ্রোসারি, (২) ফ্যাশন, পাঞ্জাবি ও বুটিক লেবেল, (৩) স্কিনকেয়ার ও বিউটি স্টুডিও, (৪) আইটি, কম্পিউটার ও স্মার্ট গ্যাজেট শপ, (৫) সুপার শপ ও ডেইলি মার্ট, এবং (৬) হোম ও কিচেন অ্যাপ্লায়েন্স। প্রতিটি থিম আমাদের ওয়েবসাইট থেকেই লাইভ টেস্ট করা যায়।",
          },
        },
        {
          "@type": "Question",
          name: "Why is Banijjo Studio better than WordPress WooCommerce or Shopify for Bangladeshi brands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike slow 5-second WordPress sites that waste Meta/TikTok ad spend or Shopify stores that charge recurring USD fees, Banijjo Studio opens in under 0.8 seconds on Next.js 15, includes a 15-second Bangladeshi guest Cash-on-Delivery (COD) checkout, integrates Steadfast/Pathao/RedX/bKash/SSLCommerz, tracks real paid vs pending courier COD cashflow, and charges 0% monthly commission forever.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className="overflow-x-hidden scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Hind+Siliguri:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/banijjo-favicon.png" />
        <noscript>
          <style>{`.seo-reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FBF6EC] text-[#241C21] antialiased selection:bg-[#650039] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
