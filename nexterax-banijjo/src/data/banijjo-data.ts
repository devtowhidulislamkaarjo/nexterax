export type Lang = "en" | "bn";

export const WHATSAPP_NUMBER = "8801878601610";
export const PHONE_DISPLAY = "+880 1878-601610";
export const EMAIL_ADDRESS = "info@nexterax-digital.com";

/**
 * ============================================================================
 * LIVE DEMO / TEST LINKS CONFIGURATION
 * ============================================================================
 */
export const LIVE_DEMO_CONFIG = {
  storefrontUrl: "",
  adminPanelUrl: "",
  foodPresetUrl: "",
  fashionPresetUrl: "",
  cosmeticsPresetUrl: "",
  demoOwnerEmail: "owner@banijjostore.com",
  demoOwnerPassword: "Available on WhatsApp Request",
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface FeaturePillar {
  id: string;
  badge: { en: string; bn: string };
  title: { en: string; bn: string };
  subtitle: { en: string; bn: string };
  highlights: { en: string[]; bn: string[] };
  metrics: { label: { en: string; bn: string }; value: string }[];
  mockupType:
    | "builder"
    | "storefront"
    | "categories"
    | "inventory"
    | "admin"
    | "security"
    | "seo"
    | "ownership";
}

export const FEATURE_PILLARS: FeaturePillar[] = [
  {
    id: "visual-builder",
    badge: { en: "No-Code Brand Studio", bn: "নো-কোড ব্র্যান্ড স্টুডিও" },
    title: {
      en: "Launch Campaigns & Redesign Pages in Minutes — Zero Developers Needed",
      bn: "ডেভেলপারের অপেক্ষায় থাকা ভুলে যান — নিজের ব্র্যান্ড সাজান নিজের হাতেই",
    },
    subtitle: {
      en: "Drop a new Eid collection at midnight or launch a flash sale in 5 minutes. Rearrange 12+ conversion-tested sections, preview live across mobile & desktop, and roll back anytime with one click.",
      bn: "রাত ১২টায় নতুন ঈদ ড্রপ হোক বা আকস্মিক ফ্ল্যাশ সেল — ১২+ রেডি সেকশন দিয়ে মাত্র ৫ মিনিটে হোমপেজ ও ক্যাম্পেইন পেজ লাইভ করুন। পছন্দ না হলে ১-ক্লিকেই আগের ডিজাইনে ফিরে যান।",
    },
    highlights: {
      en: [
        "12+ High-Converting Blocks: Hero Sliders, Drop Timers, Lookbook Grids, Combo Banners & Social Proof",
        "Safe Draft → Live Mobile Preview → Instant Publish → 1-Click Design Rollback",
        "Rolling back a layout never touches your live orders, inventory, or customer database",
        "Global Brand Identity Controls: Custom colors, typography, button geometry & 5 product card styles",
        "Smart Collection Picker: Spotlight bestsellers or new arrivals dynamically without editing code",
      ],
      bn: [
        "১২+ হাই-কনভার্টিং সেকশন: হিরো স্লাইডার, ফ্ল্যাশ-সেল ব্যানার, বেস্টসেলার গ্রিড, ভিডিও ও রিভিউ ব্লক",
        "ড্রাফট সেভ → মোবাইল প্রিভিউ → ইনস্ট্যান্ট পাবলিশ → ১-ক্লিক সেফ রোলব্যাক সুবিধা",
        "ডিজাইন রোলব্যাক করলেও আপনার লাইভ অর্ডার, স্টক বা কাস্টমার ডেটা শতভাগ অক্ষত থাকে",
        "গ্লোবাল ব্র্যান্ড কন্ট্রোল: লোগো, ব্র্যান্ড কালার, ফন্ট ও ৫ ধরনের প্রিমিয়াম প্রোডাক্ট কার্ড স্টাইল",
        "স্মার্ট কালেকশন পিকার: যেকোনো ক্যাটাগরি বা হট-সেলিং পণ্য এক ক্লিকেই হোমপেজে হাইলাইট করুন",
      ],
    },
    metrics: [
      { label: { en: "Ready Blocks", bn: "রেডি ব্লক" }, value: "12+" },
      { label: { en: "Niche Themes", bn: "প্রো থিম" }, value: "6 Presets" },
      { label: { en: "Design Restore", bn: "নিরাপদ রোলব্যাক" }, value: "1-Click" },
    ],
    mockupType: "builder",
  },
  {
    id: "storefront-checkout",
    badge: { en: "Sub-Second COD Engine", bn: "১৫-সেকেন্ড COD চেকআউট" },
    title: {
      en: "Turn Paid Ad Clicks into Confirmed COD Orders in Under 15 Seconds",
      bn: "অ্যাডে ক্লিক করা ক্রেতাকে মাত্র ১৫ সেকেন্ডে কনফার্মড অর্ডারে বদলে দিন",
    },
    subtitle: {
      en: "Every extra second of page load kills your Facebook & TikTok ROAS. Engineered on Next.js 15, your store opens almost instantly and lets shoppers order via Cash on Delivery without forced signups.",
      bn: "স্লো সাইটের কারণে অ্যাডের ক্লিক যেন বাউন্স না করে! Next.js 15 প্রযুক্তিতে তৈরি আপনার স্টোর চোখের পলকে ওপেন হয় এবং পাসওয়ার্ড বা লগইনের ঝামেলা ছাড়াই ক্রেতারা সরাসরি অর্ডার কনফার্ম করেন।",
    },
    highlights: {
      en: [
        "1-Tap 'Buy Now' & Slide-Out Cart built around real Bangladeshi mobile shopping behavior",
        "Smart 11-digit BD phone validation + automatic Inside/Suburb/Outside Dhaka shipping calculation",
        "Rich Multi-Variant Selector (Size, Weight, Shade, Combo Pack) with live stock scarcity badges",
        "Seamless Bangla & English experience with BDT (৳) pricing and free-shipping thresholds",
        "Token-protected Order Tracking links so customers check parcel status without messaging your page",
      ],
      bn: [
        "ওয়ান-ট্যাপ ‘Buy Now’ এবং স্লাইড-আউট কার্ট — মোবাইল ক্রেতাদের সর্বোচ্চ কনভার্সনের জন্য তৈরি",
        "অটোমেটিক ১১-ডিজিট মোবাইল নম্বর যাচাই এবং ঢাকা/সাব-এরিয়া/সারাদেশের ডেলিভারি চার্জ হিসাব",
        "সাইজ, ওজন, শেড বা কম্বো প্যাক ভ্যারিয়েন্ট সিলেক্টর এবং লাইভ স্টক স্ট্যাটাস ব্যাজ",
        "ফ্রি ডেলিভারি টার্গেট বার (যেমন ১৫০০+ টাকায় ফ্রি ডেলিভারি) যা গড় অর্ডার ভ্যালু (AOV) বাড়িয়ে দেয়",
        "সিকিউর অর্ডার ট্র্যাকিং লিংক — ক্রেতারা মেসেজে নক না করেই পার্সেলের আপডেট দেখতে পান",
      ],
    },
    metrics: [
      { label: { en: "Order Flow", bn: "চেকআউট সময়" }, value: "< 15 Sec" },
      { label: { en: "Mobile Load", bn: "পেজ লোড স্পিড" }, value: "< 0.8s" },
      { label: { en: "Guest COD", bn: "লগইন ছাড়া অর্ডার" }, value: "100% Native" },
    ],
    mockupType: "storefront",
  },
  {
    id: "categories-menus",
    badge: { en: "Smart Catalog & Menus", bn: "স্মার্ট ক্যাটালগ ও মেগা মেনু" },
    title: {
      en: "Scale from 10 Hero Products to 10,000 SKUs Without Losing Structure",
      bn: "১০টি পণ্য হোক বা ১০,০০০ — আপনার পুরো ক্যাটালগ থাকুক নিখুঁতভাবে গোছানো",
    },
    subtitle: {
      en: "Give shoppers an effortless browsing experience with unlimited nested categories, custom desktop Mega Menus, mobile app-style drawers, and automatic SEO link protection.",
      bn: "বড় ব্র্যান্ডের মতো আনলিমিটেড প্যারেন্ট-চাইল্ড ক্যাটাগরি, আকর্ষণীয় মেগা মেনু এবং মোবাইল ড্রয়ার সাজান। লিংক বদলালেও অটো-রিডাইরেক্ট আপনার অ্যাড ও SEO লিংক কখনোই ভাঙতে দেয় না।",
    },
    highlights: {
      en: [
        "Drag-and-drop nested category tree with custom cover banners, icons & circular thumbnails",
        "Auto 308 SEO Redirects whenever you rename or move a category — zero dead campaign links",
        "Safe catalog editing: Deleting or reorganizing categories never wipes out your products",
        "Independent Header Mega Menu, Footer & Mobile Drawer builders for campaign-ready navigation",
        "Assign products to multiple collections (e.g. 'Eid Edit' + 'Panjabi') with clean breadcrumbs",
      ],
      bn: [
        "ড্র্যাগ-অ্যান্ড-ড্রপ ক্যাটাগরি ট্রি, সাব-ক্যাটাগরি, কভার ব্যানার ও থাম্বনেইল কন্ট্রোল",
        "ক্যাটাগরির লিংক বদলালে অটোমেটিক ৩০৮ রিডাইরেক্ট — রানিং অ্যাডের লিংক কখনোই নষ্ট হবে না",
        "নিরাপদ ক্যাটালগ সিস্টেম: ক্যাটাগরি ডিলিট বা পরিবর্তন করলেও পণ্যের ডেটা কখনো মুছে যায় না",
        "ডেস্কটপ মেগা মেনু, ফুটার এবং মোবাইল মেনু আলাদাভাবে সাজানোর পূর্ণ স্বাধীনতা",
        "একই পণ্য একাধিক ক্যাম্পেইন কালেকশনে (যেমন ‘Festive Drop’ ও ‘Best Sellers’) রাখার সুবিধা",
      ],
    },
    metrics: [
      { label: { en: "Hierarchy", bn: "ক্যাটাগরি লেভেল" }, value: "Unlimited" },
      { label: { en: "Ad Link Safety", bn: "অটো রিডাইরেক্ট" }, value: "308 Safe" },
      { label: { en: "Menu Zones", bn: "মেনু কন্ট্রোল" }, value: "3 Zones" },
    ],
    mockupType: "categories",
  },
  {
    id: "commerce-integrity",
    badge: { en: "Flash-Sale Armor", bn: "জিরো-ওভারসেল ও ফ্রড গার্ড" },
    title: {
      en: "Built for Viral Drops: Zero Overselling, Zero Duplicate Orders",
      bn: "ভাইরাল ক্যাম্পেইন বা ফ্ল্যাশ সেলেও জিরো ওভারসেলিং, জিরো ডুপ্লিকেট অর্ডার",
    },
    subtitle: {
      en: "Powered by PostgreSQL 17 ACID locks and server-verified math. Even if 100 buyers tap 'Order' on your last piece at the exact same second, only one succeeds — and double-taps never create duplicate parcels.",
      bn: "স্লো নেটে ক্রেতা বারবার বাটনে চাপ দিলেও ডুপ্লিকেট অর্ডার তৈরি হবে না! আর শেষ ১টি পণ্যে ১০০ জন একসাথে ক্লিক করলেও PostgreSQL অ্যাটমিক লক ওভারসেলিং শতভাগ প্রতিরোধ করে।",
    },
    highlights: {
      en: [
        "Idempotency Order Guard: Eliminates accidental double/triple orders on unstable mobile networks",
        "Row-Level Atomic Stock Lock: Never apologize to a customer for selling an out-of-stock size again",
        "100% Server-Side Price Verification: Blocks browser price tampering and coupon abuse",
        "Smart Single-Restock Guarantee: Cancelled or returned parcels restore stock accurately once",
        "Immutable Invoice Snapshots: Editing future product prices never distorts past order records",
      ],
      bn: [
        "ডাবল-ক্লিক প্রোটেকশন: মোবাইল নেটওয়ার্কে বারবার ট্যাপ করলেও কখনো দুটি ডুপ্লিকেট অর্ডার পড়বে না",
        "অ্যাটমিক স্টক লক: স্টকের শেষ পিসটি বিক্রি হওয়ামাত্র লক হয়ে যায়—কাস্টমারকে আর ‘স্টক নেই’ বলতে হবে না",
        "সার্ভার-ভেরিফাইড প্রাইসিং: ব্রাউজার থেকে কেউ দাম, কুপন বা ডেলিভারি চার্জ ম্যানিপুলেট করতে পারবে না",
        "স্মার্ট অটো-রিস্টক: অর্ডার ক্যানসেল বা রিটার্ন হলে ইনভেন্টরিতে নিখুঁতভাবে ১ বারই স্টক ফেরত যোগ হয়",
        "অপরিবর্তনীয় ইনভয়েস রেকর্ড: পরে পণ্যের দাম বা নাম বদলালেও পুরনো অর্ডারের হিসাব বদলায় না",
      ],
    },
    metrics: [
      { label: { en: "Oversell Rate", bn: "ওভারসেল ঝুঁকি" }, value: "0%" },
      { label: { en: "Duplicate Guard", bn: "ডাবল অর্ডার" }, value: "Blocked" },
      { label: { en: "Engine", bn: "ডাটাবেজ ইঞ্জিন" }, value: "Postgres 17" },
    ],
    mockupType: "inventory",
  },
  {
    id: "admin-analytics",
    badge: { en: "Real COD Cashflow", bn: "রিয়েল COD ক্যাশফ্লো ট্র্যাকার" },
    title: {
      en: "Stop Confusing ‘Placed Orders’ With Cash in the Bank",
      bn: "অর্ডার প্লেস হওয়া মানেই প্রফিট নয় — দেখুন আপনার আসল ক্যাশফ্লো",
    },
    subtitle: {
      en: "Generic platforms celebrate uncollected orders as revenue. Banijjo’s Merchant Workspace separates Placed Value, Delivered Sales, Actual Collected Cash, Pending Courier COD, and Returns at a glance.",
      bn: "সাধারণ সাইটে সব অর্ডারকে একসাথে রেভিনিউ দেখায়, ফলে মাসের শেষে হিসাব মেলে না। বাণিজ্য স্টুডিওতে প্লেসড অর্ডার, ডেলিভারড সেলস, হাতে পাওয়া ক্যাশ (Paid) এবং কুরিয়ারে বকেয়া COD এক নজরে আলাদা দেখুন।",
    },
    highlights: {
      en: [
        "True Cashflow Clarity: Placed Value vs. Delivered Sales vs. Collected Cash vs. Pending COD",
        "5-Stage Actionable Order Pipeline: Pending → Confirmed → Processing → Shipped → Delivered",
        "Built-in Customer CRM: Spot VIP repeat buyers, lifetime spend, and order history instantly",
        "High-Impact Promo Engine: Percentage/fixed codes, minimum cart rules, usage caps & expiry timers",
        "Auto-Optimized Media Studio: Converts heavy product photos into fast, crisp web assets automatically",
      ],
      bn: [
        "স্বচ্ছ ফিন্যান্স ড্যাশবোর্ড: মোট অর্ডার, ডেলিভারি হওয়া সেলস, সংগৃহীত ক্যাশ ও কুরিয়ারে বকেয়া COD আলাদা হিসাব",
        "৫-ধাপের অর্ডার পাইপলাইন: Pending → Confirmed → Processing → Shipped → Delivered (+ Return)",
        "কাস্টমার CRM প্রোফাইল: কে কতবার অর্ডার করেছে ও আপনার টপ রিপিট ক্রেতা কারা তা এক ক্লিকে দেখুন",
        "পাওয়ারফুল কুপন ইঞ্জিন: পার্সেন্টেজ বা ফিক্সড ছাড়, মিনিমাম অর্ডার শর্ত এবং ক্যাম্পেইন এক্সপায়ারি টাইমার",
        "অটো ইমেজ অপ্টিমাইজার: বড় সাইজের প্রোডাক্ট ছবি আপলোড করলেও সাইট থাকে সুপার-ফাস্ট",
      ],
    },
    metrics: [
      { label: { en: "COD Visibility", bn: "ক্যাশফ্লো হিসাব" }, value: "100% Clear" },
      { label: { en: "Order Workflow", bn: "অর্ডার পাইপলাইন" }, value: "5 Stages" },
      { label: { en: "Back-Office", bn: "ম্যানেজমেন্ট টুলস" }, value: "22+ Modules" },
    ],
    mockupType: "admin",
  },
  {
    id: "enterprise-security",
    badge: { en: "Team & Vault Security", bn: "টিম রোল ও ভল্ট সিকিউরিটি" },
    title: {
      en: "Delegate Daily Orders to Your Team Without Risking Your Business",
      bn: "পুরো টিমকে নিরাপদে কাজ বুঝিয়ে দিন — ব্যবসা থাকুক আপনার পূর্ণ নিয়ন্ত্রণে",
    },
    subtitle: {
      en: "Scaling beyond solo operations? Give moderators and dispatch staff dedicated logins so they confirm and ship parcels fast — without ever seeing your profit settings or API keys.",
      bn: "অর্ডার বাড়লে একা সব সামলানো অসম্ভব। মডারেটর বা ডিসপ্যাচ টিমকে আলাদা স্টাফ পারমিশন দিন—তারা দ্রুত অর্ডার কনফার্ম ও শিপ করবে, কিন্তু আপনার মূল সেটিংস বা পেমেন্ট কী-তে হাত দিতে পারবে না।",
    },
    highlights: {
      en: [
        "4 Precision Roles: Shop Owner, Store Manager, Order Operator & Content Designer",
        "Order Operators confirm & dispatch parcels without access to store settings or revenue vaults",
        "Argon2id password defense + RS256 session tokens + instant device session revocation",
        "Google Authenticator 2FA (MFA) protection for Owner sensitive actions + recovery codes",
        "AES-256-GCM Encrypted Vault for bKash/SSLCommerz/Courier keys + full staff activity audit log",
      ],
      bn: [
        "৪টি নির্দিষ্ট টিম রোল: Shop Owner, Store Manager, Order Operator এবং Content Editor",
        "মডারেটর শুধু অর্ডার প্রসেস করতে পারবে — থিম, প্রাইসিং বা ফিন্যান্সিয়াল রিপোর্ট বদলাতে পারবে না",
        "স্টোর ওনারের নিরাপত্তায় Google Authenticator टू-ফ্যাক্টর (2FA) এবং ডিভাইস সেশন কন্ট্রোল",
        "কুরিয়ার ও পেমেন্ট API Key সুরক্ষিত রাখতে ব্যাংক-গ্রেড AES-256-GCM এনক্রিপ্টেড ভল্ট",
        "কমপ্লিট অডিট লগ: কোন স্টাফ কখন কোন অর্ডার বা প্রোডাক্ট আপডেট করেছে তার নিখুঁত রেকর্ড",
      ],
    },
    metrics: [
      { label: { en: "Team Roles", bn: "টিম রোল" }, value: "4 Roles" },
      { label: { en: "Key Encryption", bn: "ভল্ট এনক্রিপশন" }, value: "AES-256" },
      { label: { en: "Owner Shield", bn: "অ্যাকাউন্ট সুরক্ষা" }, value: "2FA + Audit" },
    ],
    mockupType: "security",
  },
  {
    id: "seo-aeo",
    badge: { en: "Organic & AI Discovery", bn: "Google ও AI সার্চ রেডি" },
    title: {
      en: "Win Free Traffic From Google, ChatGPT & Social Link Previews",
      bn: "শুধু পেইড অ্যাড নয় — Google এবং AI সার্চ থেকেও অর্গানিক ক্রেতা আনুন",
    },
    subtitle: {
      en: "Paid ads stop the moment your budget pauses; organic rankings compound forever. Every product page outputs rich Google Schema, clean OpenGraph cards, and AI-ready structured specs.",
      bn: "পেইড অ্যাডের পাশাপাশি আপনার ব্র্যান্ডকে গুগল এবং AI সার্চ ইঞ্জিনে (ChatGPT, Google AI) র‍্যাঙ্ক করান—যাতে ক্রেতারা পণ্য লিখে সার্চ করলেই সবার আগে আপনার স্টোর খুঁজে পান।",
    },
    highlights: {
      en: [
        "Custom Meta Title, Slug, Canonical URL & high-converting WhatsApp/Facebook link previews",
        "Automatic XML Sitemap, Robots.txt & clean category breadcrumb trails",
        "Live JSON-LD Rich Results showing real-time BDT price and stock status right on Google",
        "Built-in AEO Blocks: Structured product specs, care/usage guides, and verified buyer FAQs",
        "Strict draft isolation so unreleased drops never leak to search engines prematurely",
      ],
      bn: [
        "হোয়াটসঅ্যাপ বা ফেসবুকে লিংক শেয়ার করলেই প্রিমিয়াম ছবি ও দামসহ আকর্ষণীয় প্রিভিউ কার্ড",
        "অটোমেটিক XML Sitemap, Robots.txt এবং SEO-ফ্রেন্ডলি ক্যাটাগরি ব্রেডক্রাম্ব",
        "গুগল সার্চে সরাসরি পণ্যের লাইভ দাম ও ‘In Stock’ ব্যাজ দেখানোর অটো JSON-LD স্কিমা",
        "AI সার্চ (AEO) অপ্টিমাইজড প্রোডাক্ট স্পেসিফিকেশন, ব্যবহারবিধি ও প্রশ্নোত্তর সেকশন",
        "আনপাবলিশড বা আপকামিং কালেকশন পাবলিক হওয়ার আগে কখনোই সার্চে ফাঁস হয় না",
      ],
    },
    metrics: [
      { label: { en: "Architecture", bn: "রেন্ডারিং" }, value: "SSR / ISR" },
      { label: { en: "Rich Snippets", bn: "অটো স্কিমা" }, value: "JSON-LD" },
      { label: { en: "AI Search", bn: "AI ডিসকভারি" }, value: "AEO Ready" },
    ],
    mockupType: "seo",
  },
  {
    id: "whitelabel-ownership",
    badge: { en: "100% Brand Equity", bn: "১০০% নিজস্ব ব্র্যান্ড অ্যাসেট" },
    title: {
      en: "Stop Paying Monthly Rent on Your Own Hard-Earned Growth",
      bn: "নিজের পরিশ্রমে গড়া সেলসের ওপর আজীবন মাসিক ভাড়া বা কমিশন কেন দেবেন?",
    },
    subtitle: {
      en: "Rented SaaS platforms tax your success in USD every single month. Banijjo Studio deploys on your own domain with an isolated database — 100% owned by your brand, with 0% commission forever.",
      bn: "শেয়ার্ড প্ল্যাটফর্ম বা মাসিক ডলারের সাবস্ক্রিপশন নয়—বাণিজ্য স্টুডিও চলে আপনার নিজস্ব ডোমেইন ও সম্পূর্ণ আলাদা ডাটাবেজে। আপনার কাস্টমার ডেটা ও প্রফিটের ১০০% মালিক একমাত্র আপনি।",
    },
    highlights: {
      en: [
        "Dedicated Single-Brand Deployment: Your custom domain, isolated database & private customer list",
        "Guided Launch Wizard: Set store branding, delivery zones & BDT preferences effortlessly",
        "Modern Two-Service Stack: Next.js 15 Frontend + Express/TypeScript/PostgreSQL 17 API",
        "Plug-and-Play Bangladesh Adapters: Steadfast, Pathao, RedX, bKash & SSLCommerz ready",
        "Production Docker, Nginx reverse proxy & automated database backup architecture included",
      ],
      bn: [
        "সম্পূর্ণ স্বাধীন সিঙ্গেল-ব্র্যান্ড আর্কিটেকচার: নিজস্ব ডোমেইন, নিজস্ব ডাটাবেজ ও ১০০% কাস্টমার ডেটা মালিকানা",
        "সহজ সেটআপ উইজার্ড: ব্র্যান্ড লোগো, থিম কালার ও ডেলিভারি জোন কয়েক মিনিটেই কনফিগার করুন",
        "মডার্ন টেক স্ট্যাক: Next.js 15 ফ্রন্টএন্ড + Express ও PostgreSQL 17 এন্টারপ্রাইজ ব্যাকএন্ড",
        "দেশীয় ইন্টিগ্রেশন রেডি: Steadfast, Pathao, RedX কুরিয়ার এবং bKash ও SSLCommerz পেমেন্ট গেটওয়ে",
        "ক্লাউড ডকার ডেপ্লয়মেন্ট ও অটোমেটিক ডাটাবেজ ব্যাকআপ সিস্টেম — যাতে আপনার বিজনেস কখনো থেমে না থাকে",
      ],
    },
    metrics: [
      { label: { en: "Ownership", bn: "ব্র্যান্ড মালিকানা" }, value: "100% Yours" },
      { label: { en: "Sales Tax/Fee", bn: "মাসিক কমিশন" }, value: "0% Forever" },
      { label: { en: "Go-Live", bn: "রেডি ডেলিভারি" }, value: "3–5 Days" },
    ],
    mockupType: "ownership",
  },
];

export interface IndustryPreset {
  id: string;
  name: { en: string; bn: string };
  tagline: { en: string; bn: string };
  accentColor: string;
  badgeText: string;
  sampleCategories: string[];
  sampleProducts: {
    name: string;
    weight: string;
    price: string;
    oldPrice: string;
    tag: string;
    image: string;
  }[];
  bestFor: { en: string; bn: string };
}

export const INDUSTRY_PRESETS: IndustryPreset[] = [
  {
    id: "food",
    name: { en: "Organic Food & Agro", bn: "অর্গানিক ফুড ও এগ্রো ব্র্যান্ড" },
    tagline: {
      en: "High-trust farm-to-table aesthetic built for fast repeat grocery & sunnah food orders.",
      bn: "প্রথম দেখাতেই বিশুদ্ধতার আস্থা তৈরি করে — হাই-ভলিউম অর্গানিক ও গ্রোসারি ব্র্যান্ডের জন্য।",
    },
    accentColor: "from-emerald-600 to-teal-700",
    badgeText: "High-Repeat D2C Preset",
    sampleCategories: [
      "Sundarban Honey",
      "Artisan Ghee",
      "Cold-Pressed Oils",
      "Premium Dates & Nuts",
      "Combo Value Packs",
    ],
    sampleProducts: [
      {
        name: "Sundarban Khalisha Flower Honey",
        weight: "1 kg Glass Jar",
        price: "৳ 1,250",
        oldPrice: "৳ 1,450",
        tag: "Top Seller",
        image: "/images/store/sundarban-honey-hero.jpg",
      },
      {
        name: "Pabna Pure Danadar Cow Ghee",
        weight: "500 gm",
        price: "৳ 980",
        oldPrice: "৳ 1,100",
        tag: "Lab Verified",
        image: "/images/store/pabna-ghee.jpg",
      },
      {
        name: "Wood-Pressed Mustard Oil",
        weight: "5 Liter Family Pack",
        price: "৳ 1,420",
        oldPrice: "৳ 1,600",
        tag: "Value Combo",
        image: "/images/store/mustard-oil.jpg",
      },
      {
        name: "VIP Medjool & Ajwa Dates",
        weight: "1 kg Gift Box",
        price: "৳ 1,650",
        oldPrice: "৳ 1,850",
        tag: "Fresh Harvest",
        image: "/images/store/madinah-dates.jpg",
      },
    ],
    bestFor: {
      en: "Built for scaling organic food brands, honey/ghee labels, gourmet coffee/tea sellers, and cloud grocery founders.",
      bn: "অর্গানিক ফুড ব্র্যান্ড, মধু-ঘি-তেল সেলার, প্রিমিয়াম ড্রাই-ফ্রুটস এবং ডেইলি গ্রোসারি D2C ব্র্যান্ডের দ্রুত সেলস বাড়ানোর জন্য তৈরি।",
    },
  },
  {
    id: "fashion",
    name: { en: "Fashion, Panjabi & Label", bn: "ফ্যাশন, পাঞ্জাবি ও ক্লোদিং লেবেল" },
    tagline: {
      en: "Editorial lookbooks, crisp size pickers, and drop-ready layouts that elevate perceived brand value.",
      bn: "প্রিমিয়াম লুকবুক, সাইজ ভ্যারিয়েন্ট ও ফেস্টিভ ড্রপ লেআউট — যা আপনার পোশাককে দেয় ফ্ল্যাগশিপ ব্র্যান্ডের মর্যাদা।",
    },
    accentColor: "from-indigo-600 to-violet-700",
    badgeText: "Editorial Drop Preset",
    sampleCategories: [
      "Signature Panjabi",
      "Artisan Jamdani",
      "Modest Abaya Edit",
      "Mens Smart Casual",
      "Leather & Footwear",
    ],
    sampleProducts: [
      {
        name: "Royal Embroidered Cotton Panjabi",
        weight: "Sizes: M, L, XL, XXL",
        price: "৳ 2,490",
        oldPrice: "৳ 2,990",
        tag: "Eid Drop",
        image: "/images/store/mens-panjabi.jpg",
      },
      {
        name: "Handloom Muslin Jamdani Sharee",
        weight: "Signature Weave",
        price: "৳ 6,800",
        oldPrice: "৳ 7,500",
        tag: "Limited Piece",
        image: "/images/store/jamdani-saree.jpg",
      },
      {
        name: "Dubai Nidha Pearl Abaya Set",
        weight: "Sizes: 52, 54, 56",
        price: "৳ 3,200",
        oldPrice: "৳ 3,800",
        tag: "Bestseller",
        image: "/images/store/organza-kurti.jpg",
      },
      {
        name: "Tailored Oxford Formal Shirt",
        weight: "Slim Fit (S–XXL)",
        price: "৳ 1,450",
        oldPrice: "৳ 1,750",
        tag: "Bundle Offer",
        image: "/images/store/mens-shirts-folded.jpg",
      },
    ],
    bestFor: {
      en: "Ideal for modern clothing labels, Panjabi houses, modest fashion boutiques, sneaker stores & leather accessories.",
      bn: "নেক্সট-জেন ক্লোদিং ব্র্যান্ড, পাঞ্জাবি ও মেনসওয়্যার লেবেল, মডেস্ট আবায়া/বুটিক হাউজ এবং ফুটওয়্যার ব্র্যান্ডের জন্য পারফেক্ট।",
    },
  },
  {
    id: "cosmetics",
    name: { en: "Skincare & Beauty Studio", bn: "স্কিনকেয়ার ও বিউটি স্টুডিও" },
    tagline: {
      en: "Clean clinical authority with shade selectors, routine builders, and authenticity storytelling.",
      bn: "ক্লিন ও আধুনিক বিউটি স্টোরফ্রন্ট — শেড সিলেক্টর, স্কিনকেয়ার রুটিন গাইড ও অথেনটিসিটি প্রুফসহ।",
    },
    accentColor: "from-rose-600 to-pink-700",
    badgeText: "Clean Beauty Preset",
    sampleCategories: [
      "Active Serums",
      "Invisible SPF 50+",
      "K-Beauty Favorites",
      "Botanical Hair Care",
      "Lip & Cheek Tints",
    ],
    sampleProducts: [
      {
        name: "Niacinamide 10% + Zinc Glow Serum",
        weight: "30 ml Dropper",
        price: "৳ 890",
        oldPrice: "৳ 1,050",
        tag: "Viral Glow",
        image: "/images/store/serum-dropper.jpg",
      },
      {
        name: "Invisible Gel Sunscreen SPF 50+",
        weight: "50 ml Tube",
        price: "৳ 1,150",
        oldPrice: "৳ 1,350",
        tag: "Zero White Cast",
        image: "/images/store/skincare-sunscreen-tube.jpg",
      },
      {
        name: "Rosemary & Biotin Hair Elixir",
        weight: "100 ml Bottle",
        price: "৳ 780",
        oldPrice: "৳ 950",
        tag: "Botanical",
        image: "/images/store/skincare-lotion-white.jpg",
      },
      {
        name: "Velvet Matte Lip & Cheek Tint",
        weight: "5 Curated Shades",
        price: "৳ 650",
        oldPrice: "৳ 800",
        tag: "Top Rated",
        image: "/images/store/velvet-lip-tint.jpg",
      },
    ],
    bestFor: {
      en: "Crafted for K-beauty & authentic skincare retailers, cosmetics brands, fragrances, and wellness labels.",
      bn: "অথেনটিক স্কিনকেয়ার শপ, কে-বিউটি ইমপোর্টার, কসমেটিকস ব্র্যান্ড এবং পারফিউম ও ওয়েলনেস সেলারদের জন্য আদর্শ।",
    },
  },
  {
    id: "tech",
    name: { en: "IT, Tech & Gadgets", bn: "আইটি, টেক ও গ্যাজেট শপ" },
    tagline: {
      en: "Spec-driven product cards, official warranty callouts, and high-trust gadget layouts built for tech buyers.",
      bn: "অফিসিয়াল ওয়ারেন্টি ব্যাজ, টেকনিক্যাল স্পেক টেবিল ও প্রো গ্যাজেট লেআউট — আইটি ও গ্যাজেট শপের দ্রুত কনভার্সনের জন্য।",
    },
    accentColor: "from-blue-600 to-slate-800",
    badgeText: "Official Tech & IT Preset",
    sampleCategories: [
      "ANC Wireless Audio",
      "AMOLED Smartwatches",
      "Mechanical Keyboards",
      "GaN Chargers & Power",
      "PC & Gaming Gear",
    ],
    sampleProducts: [
      {
        name: "SonicPro 48dB Hybrid ANC Earbuds",
        weight: "1 Year Official Warranty",
        price: "৳ 2,490",
        oldPrice: "৳ 3,200",
        tag: "Hot Gadget",
        image: "/images/store/tech-earbuds.jpg",
      },
      {
        name: "ApexFit Ultra 2.0\" AMOLED Watch",
        weight: "Bluetooth Calling • IP68",
        price: "৳ 3,450",
        oldPrice: "৳ 4,290",
        tag: "60Hz AMOLED",
        image: "/images/store/tech-smartwatch.jpg",
      },
      {
        name: "KeyCraft K75 Gasket Keyboard",
        weight: "Tri-Mode Wireless RGB",
        price: "৳ 4,690",
        oldPrice: "৳ 5,500",
        tag: "Creator Pick",
        image: "/images/store/tech-keyboard.jpg",
      },
      {
        name: "VoltMax 20,000mAh 65W Power Bank",
        weight: "MacBook & Fast PD Support",
        price: "৳ 2,890",
        oldPrice: "৳ 3,490",
        tag: "65W Output",
        image: "/images/store/tech-powerbank.jpg",
      },
    ],
    bestFor: {
      en: "Engineered for smart gadget stores, computer & IT retailers, mobile accessory brands, and gaming gear shops.",
      bn: "স্মার্ট গ্যাজেট স্টোর, কম্পিউটার ও আইটি শপ, মোবাইল ডিভাইস রিটেইলার এবং পিসি ও গেমিং গিয়ার সেলারদের জন্য তৈরি।",
    },
  },
  {
    id: "supershop",
    name: { en: "Super Shop & Daily Mart", bn: "সুপার শপ ও ডেইলি মার্ট" },
    tagline: {
      en: "Rapid multi-item cart building, aisle categories, and family saver bundles designed for large grocery baskets.",
      bn: "দ্রুত মাল্টি-আইটেম কার্ট, ডিপার্টমেন্ট মেনু ও ফ্যামিলি বাজার কম্বো — অনলাইন সুপার শপ ও মেগা গ্রোসারির জন্য।",
    },
    accentColor: "from-orange-600 to-amber-600",
    badgeText: "60-Min Super Mart Preset",
    sampleCategories: [
      "Monthly Bazar Combos",
      "Fresh Fruits & Produce",
      "Dairy & Breakfast",
      "Coffee, Tea & Snacks",
      "Cleaning & Baby Care",
    ],
    sampleProducts: [
      {
        name: "Monthly Family Bazar Mega Pack",
        weight: "8 Full-Size Essentials",
        price: "৳ 2,650",
        oldPrice: "৳ 3,100",
        tag: "Save ৳450",
        image: "/images/store/supershop-basket.jpg",
      },
      {
        name: "Farm-Fresh Vitamin Fruit Basket",
        weight: "4 kg Assorted Grade-A",
        price: "৳ 1,380",
        oldPrice: "৳ 1,620",
        tag: "Picked Today",
        image: "/images/store/supershop-fruits.jpg",
      },
      {
        name: "Colombian 100% Arabica Gold Coffee",
        weight: "200 gm Glass Jar",
        price: "৳ 850",
        oldPrice: "৳ 1,020",
        tag: "Imported Hit",
        image: "/images/store/supershop-beverages.jpg",
      },
      {
        name: "SparkleHome Complete Cleaning Pack",
        weight: "4 Full-Size Bottles",
        price: "৳ 920",
        oldPrice: "৳ 1,150",
        tag: "20% Off",
        image: "/images/store/supershop-care.jpg",
      },
    ],
    bestFor: {
      en: "Built for local & citywide super shops, express cloud marts, department stores, and wholesale family grocers.",
      bn: "অনলাইন সুপার শপ, ডিপার্টমেন্টাল স্টোর, ৬০-মিনিট ক্লাউড মার্ট এবং মাসিক ফ্যামিলি বাজার সাপ্লায়ারদের জন্য সেরা সমাধান।",
    },
  },
  {
    id: "electronics",
    name: { en: "Home & Kitchen Appliances", bn: "হোম ও কিচেন অ্যাপ্লায়েন্স" },
    tagline: {
      en: "Clean architectural showcase for high-ticket kitchen gear, home electronics, and warranty-backed appliances.",
      bn: "হাই-টিকেট কিচেন গিয়ার, হোম ইলেকট্রনিক্স ও ওয়ারেন্টি-যুক্ত মডার্ন অ্যাপ্লায়েন্স ব্র্যান্ডের জন্য প্রিমিয়াম থিম।",
    },
    accentColor: "from-teal-700 to-slate-800",
    badgeText: "Smart Home & Living Preset",
    sampleCategories: [
      "Espresso & Coffee Gear",
      "Copper Motor Blenders",
      "Smart Electric Kettles",
      "Nordic Home Lighting",
      "Kitchen Saver Combos",
    ],
    sampleProducts: [
      {
        name: "BaristaPro 20-Bar Espresso Maker",
        weight: "2 Years Official Warranty",
        price: "৳ 11,900",
        oldPrice: "৳ 13,800",
        tag: "Save ৳1,900",
        image: "/images/store/appliance-coffee.jpg",
      },
      {
        name: "NutriBlend 1200W Copper Grinder",
        weight: "3 Heavy Stainless Jars",
        price: "৳ 4,290",
        oldPrice: "৳ 5,100",
        tag: "Top Rated",
        image: "/images/store/appliance-blender.jpg",
      },
      {
        name: "ThermoSafe 1.8L Cool-Touch Kettle",
        weight: "304 Food-Grade Steel",
        price: "৳ 1,690",
        oldPrice: "৳ 2,150",
        tag: "Auto Shut-Off",
        image: "/images/store/appliance-kettle.jpg",
      },
      {
        name: "Nordic Studio Dimmable Desk Lamp",
        weight: "3-Tone Eye-Care LED",
        price: "৳ 2,190",
        oldPrice: "৳ 2,700",
        tag: "Aesthetic Pick",
        image: "/images/store/appliance-lamp.jpg",
      },
    ],
    bestFor: {
      en: "Tailored for kitchen appliance brands, home electronics showrooms, interior lighting stores, and lifestyle retailers.",
      bn: "কিচেন ও হোম অ্যাপ্লায়েন্স শোরুম, ইলেকট্রনিক্স ইমপোর্টার, মডার্ন লাইটিং এবং হোম লাইফস্টাইল ব্র্যান্ডের জন্য পারফেক্ট।",
    },
  },
];

export const ALL_20_MODULES = [
  { name: "Auth, JWT (RS256) & Session Rotation", category: "Security" },
  { name: "TOTP 2FA (MFA) & Recovery Codes", category: "Security" },
  { name: "4-Role Staff RBAC & Permission Matrix", category: "Security" },
  { name: "AES-256-GCM Encrypted Integration Vault", category: "Security" },
  { name: "Simple & Multi-Variant Products + SKUs", category: "Catalog" },
  { name: "WordPress-Style Nested Category Tree", category: "Catalog" },
  { name: "Auto 308 Slug Redirect Engine", category: "SEO" },
  { name: "Collections & Brand Management", category: "Catalog" },
  { name: "Header, Footer & Mobile Mega Menus", category: "Builder" },
  { name: "12-Section Visual Website Builder", category: "Builder" },
  { name: "Draft, Preview, Publish & Rollback Engine", category: "Builder" },
  { name: "6 Niche Theme Presets (Food, Fashion, Beauty, IT, Super Shop & Home)", category: "Builder" },
  { name: "Slide-Out Cart & 1-Step Guest COD Checkout", category: "Commerce" },
  { name: "Atomic Stock Reservation & Anti-Oversell", category: "Commerce" },
  { name: "Idempotency Key Anti-Duplicate Order Guard", category: "Commerce" },
  { name: "Inside/Outside Dhaka Delivery Zone Rules", category: "Commerce" },
  { name: "Coupon & Promo Code Redemption Engine", category: "Commerce" },
  { name: "Secure Tokenized Order Tracking", category: "Commerce" },
  { name: "COD vs Collected Sales Financial Analytics", category: "Admin" },
  { name: "JSON-LD Schema, XML Sitemap & AEO Blocks", category: "SEO" },
  { name: "Sharp Image Optimizer & Media Library", category: "Admin" },
  { name: "1-Click Seller Setup Wizard & Audit Logs", category: "Operations" },
];

export interface PricingTier {
  id: string;
  name: { en: string; bn: string };
  badge?: { en: string; bn: string };
  price: { en: string; bn: string };
  deliveryTime: { en: string; bn: string };
  description: { en: string; bn: string };
  features: { en: string[]; bn: string[] };
  popular?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: { en: "Starter Launchpad", bn: "স্টার্টার লঞ্চপ্যাড" },
    price: { en: "BDT 25,000", bn: "৳ ২৫,০০০" },
    deliveryTime: { en: "Live in 3–5 Days", bn: "৩–৫ দিনেই লাইভ স্টোর" },
    description: {
      en: "Move beyond inbox chaos with a fast, brand-owned Next.js store, visual builder, and 1-step COD checkout.",
      bn: "ফেসবুক পেজ থেকে নিজের নামে প্রফেশনাল D2C ব্র্যান্ড শুরু করার কমপ্লিট ও দ্রুতগতির ফাউন্ডেশন।",
    },
    features: {
      en: [
        "Dedicated Next.js 15 Storefront + Express/PostgreSQL 17 Engine",
        "1 Conversion-Tested Niche Theme (IT, Super Shop, Food, Fashion, Beauty or Home)",
        "No-Code Visual Studio with 12+ Drag & Drop Sections",
        "Unlimited Nested Categories & Custom Mega Menus",
        "15-Second Guest COD Checkout & Dhaka/Nationwide Zones",
        "Merchant Workspace, Order Pipeline & Promo Code Engine",
        "1-on-1 Live Onboarding & Team Walkthrough",
      ],
      bn: [
        "নিজস্ব ডোমেইনে সুপার-ফাস্ট Next.js 15 স্টোরফ্রন্ট ও PostgreSQL ব্যাকএন্ড",
        "যেকোনো ১টি প্রিমিয়াম নিশ থিম (আইটি, সুপার শপ, ফুড, ফ্যাশন, বিউটি বা হোম)",
        "১২+ সেকশনসহ নো-কোড ভিজ্যুয়াল স্টোর বিল্ডার",
        "আনলিমিটেড ক্যাটাগরি ট্রি ও কাস্টম মেগা মেনু",
        "১৫-সেকেন্ড গেস্ট COD চেকআউট ও ডেলিভারি জোন রুলস",
        "অর্ডার ও ক্যাশফ্লো ড্যাশবোর্ড এবং প্রোমো কুপন ইঞ্জিন",
        "ফ্রি ইনিশিয়াল সেটআপ ও ১-টু-১ লাইভ ট্রেনিং সেশন",
      ],
    },
  },
  {
    id: "growth",
    name: { en: "Business Pro Scaler", bn: "বিজনেস প্রো স্কেলার" },
    badge: { en: "Top Seller Choice", bn: "টপ সেলারদের পছন্দ" },
    price: { en: "BDT 45,000", bn: "৳ ৪৫,০০০" },
    deliveryTime: { en: "5–7 Days Turnkey Setup", bn: "৫–৭ দিনে ফুল রেডি লঞ্চ" },
    description: {
      en: "Our most popular turnkey setup for brands running paid Meta/TikTok ads who want automated couriers, payments & catalog launch.",
      bn: "যারা নিয়মিত অ্যাড চালান এবং কুরিয়ার, পেমেন্ট, Meta Pixel ও প্রোডাক্টসহ সম্পূর্ণ রেডি ফ্ল্যাগশিপ স্টোর চান—তাদের জন্য সেরা প্ল্যান।",
    },
    popular: true,
    features: {
      en: [
        "Everything in Starter Launchpad",
        "All 6 Niche Themes Unlocked + Tailored Brand Palette & Styling",
        "Courier Integration (Steadfast / Pathao / RedX) + bKash / SSLCommerz",
        "4 Staff Roles (Owner, Manager, Moderator, Designer) + 2FA Security",
        "Ad-Ready Meta Pixel, Server-Side CAPI, Google Schema & Sitemap",
        "Done-For-You Upload of First 30 Products & Category Structure",
        "90 Days Priority Engineering Support & Automated Cloud Backups",
      ],
      bn: [
        "স্টার্টার লঞ্চপ্যাডের সকল ফিচার অন্তর্ভুক্ত",
        "৬টি প্রো থিম আনলক + আপনার ব্র্যান্ড গাইডলাইন অনুযায়ী কাস্টম স্টাইলিং",
        "Steadfast / Pathao / RedX কুরিয়ার ও bKash / SSLCommerz গেটওয়ে ইন্টিগ্রেশন",
        "মডারেটর ও টিমের জন্য ৪টি আলাদা রোল + ওনার 2FA সিকিউরিটি",
        "অ্যাড ROAS বাড়াতে Facebook Pixel, Server CAPI ও Google SEO সেটআপ",
        "আমাদের টিমের হাতে প্রথম ৩০টি প্রোডাক্ট ও ক্যাটাগরি প্রফেশনাল সেটআপ",
        "৯০ দিনের প্রায়োরিটি ইঞ্জিনিয়ারিং সাপোর্ট ও অটোমেটিক ক্লাউড ব্যাকআপ",
      ],
    },
  },
  {
    id: "enterprise",
    name: { en: "Enterprise Flagship", bn: "এন্টারপ্রাইজ ফ্ল্যাগশিপ" },
    price: { en: "BDT 85,000+", bn: "৳ ৮৫,০০০+" },
    deliveryTime: { en: "Custom Architecture & SLA", bn: "কাস্টম স্কেল ও SLA" },
    description: {
      en: "Engineered for established retail houses, flash-sale powerhouses, and brands needing ERP/POS sync or custom workflows.",
      bn: "হাই-ভলিউম রিটেইল ব্র্যান্ড, মেগা ফ্ল্যাশ-সেল এবং কাস্টম ERP/POS ইন্টিগ্রেশনের জন্য ডেডিকেটেড আর্কিটেকচার।",
    },
    features: {
      en: [
        "Everything in Business Pro + Bespoke Storefront Components",
        "High-Concurrency Cloud VPS Cluster & Redis Edge Caching",
        "Custom POS / ERP / Multi-Warehouse Inventory Sync",
        "Zero-Downtime Migration from WooCommerce or Shopify",
        "Dedicated Load Testing, Security Hardening & Restore Drills",
        "1 Full Year VIP Engineering SLA & Priority Feature Channel",
      ],
      bn: [
        "বিজনেস প্রো-এর সবকিছু + বিসপোক কাস্টম UI ও ফিচার ডেভেলপমেন্ট",
        "হাই-ট্রাফিক Docker/VPS ক্লাউড আর্কিটেকচার ও Redis ক্যাশিং",
        "শোরুম POS / ERP বা মাল্টি-ওয়্যারহাউজ ইনভেন্টরি সিঙ্ক",
        "পুরনো WooCommerce বা Shopify থেকে জিরো-ডাউনটাইম ফুল ডেটা মাইগ্রেশন",
        "লোড টেস্টিং, সিকিউরিটি অডিট এবং ১ বছরের VIP ইঞ্জিনিয়ারিং SLA",
        "মাল্টি-ব্র্যান্ড বা হোয়াইট-লেবেল এন্টারপ্রাইজ লাইসেন্স সুবিধা",
      ],
    },
  },
];

export const COMPARISON_ROWS = [
  {
    feature: { en: "Ad Landing Speed & ROAS Impact", bn: "অ্যাড ল্যান্ডিং স্পিড ও কনভার্সন" },
    banijjo: { en: "Next.js 15 (< 0.8s instant open)", bn: "Next.js 15 (< ০.৮ সেকেন্ডে ইনস্ট্যান্ট লোড)" },
    woocommerce: { en: "4–8s PHP lag — wastes ad clicks", bn: "৪–৮ সেকেন্ড স্লো লোডিং — অ্যাডের ক্লিক নষ্ট হয়" },
    shopify: { en: "Fast, but heavy apps slow checkout", bn: "ফাস্ট, কিন্তু থার্ড-পার্টি অ্যাপে ধীর হয়ে যায়" },
  },
  {
    feature: { en: "Monthly USD Rent & Sales Tax", bn: "মাসিক ডলার ভাড়া ও সেলস কমিশন" },
    banijjo: { en: "0% Commission — Own It One-Time", bn: "০% কমিশন — এককালীন ইনভেস্টমেন্টে নিজস্ব অ্যাসেট" },
    woocommerce: { en: "Paid plugins + constant fix bills", bn: "পেইড প্লাগইন ও সাইট ক্র্যাশ ঠিক করার নিয়মিত খরচ" },
    shopify: { en: "$29–$299/mo in USD + per-sale fees", bn: "প্রতি মাসে ডলারে ভাড়া + প্রতিটি অর্ডারে চার্জ" },
  },
  {
    feature: { en: "No-Code Campaign & Page Studio", bn: "নো-কোড ক্যাম্পেইন ও পেজ বিল্ডার" },
    banijjo: { en: "12+ Blocks + Safe 1-Click Rollback", bn: "১২+ রেডি ব্লক ও ১-ক্লিক নিরাপদ রোলব্যাক" },
    woocommerce: { en: "Bloated Elementor (breaks updates)", bn: "ভারী Elementor (আপডেট দিলেই ডিজাইন ভেঙে যায়)" },
    shopify: { en: "Locked unless paying $300+ themes", bn: "প্রিমিয়াম থিম ও পেইড অ্যাপ ছাড়া কাস্টমাইজ সীমিত" },
  },
  {
    feature: { en: "15-Sec Bangladeshi COD Flow", bn: "বাংলাদেশি ১৫-সেকেন্ড COD ফ্লো" },
    banijjo: { en: "Native Guest COD + BD Phone Guard", bn: "বিল্ট-ইন ওয়ান-স্টেপ COD ও ১১-ডিজিট নম্বর যাচাই" },
    woocommerce: { en: "Patchwork 3rd-party checkout plugins", bn: "আলাদা প্লাগইন জোড়াতালি দিতে হয়" },
    shopify: { en: "Needs $15+/mo external COD form app", bn: "প্রতি মাসে আলাদা পেইড COD অ্যাপ কিনতে হয়" },
  },
  {
    feature: { en: "Real COD Cashflow Accounting", bn: "আসল COD ক্যাশফ্লো হিসাব (Paid vs Pending)" },
    banijjo: { en: "Separates Placed, Paid & Pending COD", bn: "প্লেসড, Paid ক্যাশ ও বকেয়া COD সম্পূর্ণ আলাদা দেখায়" },
    woocommerce: { en: "Mixes uncollected COD into revenue", bn: "বকেয়া ও আদায়কৃত টাকা একসাথে গুলিয়ে ফেলে" },
    shopify: { en: "Designed for cards, blind to BD COD", bn: "কার্ড পেমেন্টের জন্য তৈরি, দেশীয় COD হিসাব অস্পষ্ট" },
  },
  {
    feature: { en: "Flash-Sale Oversell & Double-Tap Guard", bn: "ফ্ল্যাশ-সেল ওভারসেল ও ডাবল-অর্ডার গার্ড" },
    banijjo: { en: "PostgreSQL Atomic Lock + Idempotency", bn: "অ্যাটমিক স্টক লক ও ডুপ্লিকেট অর্ডার প্রোটেকশন" },
    woocommerce: { en: "Creates duplicate orders on slow 4G", bn: "স্লো নেটে প্রায়ই ডাবল অর্ডার ও ওভারসেল হয়" },
    shopify: { en: "Reliable", bn: "নির্ভরযোগ্য" },
  },
  {
    feature: { en: "Moderator Safety & API Key Vault", bn: "মডারেটর কন্ট্রোল ও API সিকিউরিটি" },
    banijjo: { en: "4 Staff Roles + 2FA + AES-256 Vault", bn: "৪টি টিম রোল + ওনার 2FA + এনক্রিপ্টেড ভল্ট" },
    woocommerce: { en: "High risk of nulled/plugin malware", bn: "প্লাগইন ম্যালওয়্যার ও অ্যাডমিন হ্যাকের ঝুঁকি বেশি" },
    shopify: { en: "Secure, but zero database ownership", bn: "নিরাপদ, কিন্তু সোর্স ও ডাটাবেস আপনার নিয়ন্ত্রণে নেই" },
  },
];

export const FAQ_ITEMS = [
  {
    q: {
      en: "I want to build a website for my business — can you build E-Commerce, Portfolio, Custom Websites, CRM & ERP?",
      bn: "আমি আমার ব্যবসা বা প্রতিষ্ঠানের জন্য ওয়েবসাইট বানাতে চাই — ই-কমার্স ছাড়াও কি কাস্টম ওয়েবসাইট, পোর্টফোলিও বা CRM বানানো যাবে?",
    },
    a: {
      en: "Yes! NexteraX Digital builds both ready-to-launch Next.js 15 E-Commerce stores (Banijjo Studio across Food, Fashion, Beauty, IT & Gadgets, Super Shop, and Home Appliances) and custom business websites, personal & corporate portfolios, internal office CRMs, and ERP software tailored to your exact workflow.",
      bn: "অবশ্যই! আপনি ই-কমার্স ওয়েবসাইট বানাতে চান কিংবা আপনার কোম্পানি, এজেন্সি বা ব্যক্তিগত ব্র্যান্ডের জন্য কাস্টম ওয়েবসাইট, পোর্টফোলিও ওয়েবসাইট, ইন্টারনাল অফিস CRM অথবা ERP সফটওয়্যার তৈরি করতে চান—NexteraX Digital এবং Banijjo Studio একই জায়গা থেকে দ্রুতগতির, আধুনিক ও SEO-বান্ধব সমাধান তৈরি করে দেয়।",
    },
  },
  {
    q: {
      en: "Why are top Bangladeshi F-Commerce & D2C sellers switching to Banijjo Studio?",
      bn: "টপ সেলার ও নতুন প্রজন্মের ব্র্যান্ডগুলো কেন ওয়ার্ডপ্রেস/শপিফাই ছেড়ে বাণিজ্য স্টুডিও নিচ্ছে?",
    },
    a: {
      en: "When you spend thousands on Meta or TikTok ads, a 5-second WordPress delay silently kills half your conversions — while Shopify drains recurring USD fees and lacks native Bangladeshi COD cash tracking. Banijjo Studio gives you sub-second Next.js 15 speed, a 15-second guest COD checkout, Steadfast/Pathao/bKash readiness, and 0% commission forever.",
      bn: "ফেসবুক বা টিকটকে অ্যাড চালানোর পর ক্রেতা যদি ৫ সেকেন্ড স্লো ওয়ার্ডপ্রেস সাইটে আটকে যায়, তবে আপনার অ্যাড বাজেটের বড় অংশই নষ্ট হয়। আবার Shopify-তে প্রতি মাসে ডলারে ভাড়া ও অ্যাপ খরচ গুনতে হয়। বাণিজ্য স্টুডিও আপনাকে দিচ্ছে ০.৮ সেকেন্ডের Next.js 15 স্পিড, ১৫-সেকেন্ডের COD চেকআউট, কুরিয়ার/বিকাশ রেডি ড্যাশবোর্ড এবং আজীবন ০% কমিশন।",
    },
  },
  {
    q: {
      en: "Is this a shared marketplace or 100% my own brand website?",
      bn: "এটি কি কোনো শেয়ার্ড প্ল্যাটফর্ম, নাকি ১০০% আমার নিজের ব্র্যান্ডের ওয়েবসাইট হবে?",
    },
    a: {
      en: "100% your own independent flagship asset. Your store runs on your custom domain (e.g. yourbrand.com) with an isolated PostgreSQL 17 database, your own brand identity, and full ownership of your customer data.",
      bn: "শতভাগ আপনার নিজস্ব ফ্ল্যাগশিপ ব্র্যান্ড অ্যাসেট। এটি আপনার নিজের ডোমেইনে (যেমন yourbrand.com), সম্পূর্ণ আলাদা ডাটাবেজ ও নিজস্ব ব্র্যান্ডিংয়ে চলবে। আপনার কাস্টমার লিস্ট বা ডেটা অন্য কারো সাথে কখনোই শেয়ার হয় না।",
    },
  },
  {
    q: {
      en: "Can my team update banners, launch drops, and add products without a developer?",
      bn: "নতুন কালেকশন লঞ্চ বা ব্যানার বদলানোর জন্য কি বারবার ডেভেলপার ডাকতে হবে?",
    },
    a: {
      en: "Never. With the built-in No-Code Brand Studio, you or your team can rearrange 12+ homepage blocks, update campaign banners, create promo codes, organize categories, preview on mobile, and publish live in minutes.",
      bn: "একদমই না! বিল্ট-ইন নো-কোড ব্র্যান্ড স্টুডিও দিয়ে আপনি বা আপনার টিম কয়েক মিনিটেই নতুন ব্যানার, প্রোমো কুপন, ক্যাটাগরি ও ১২+ হোমপেজ সেকশন সাজিয়ে লাইভ করতে পারবেন। সাথে ১-টু-১ ট্রেনিংও আমরা দিয়ে দেই।",
    },
  },
  {
    q: {
      en: "How does Banijjo handle Steadfast/Pathao couriers, bKash, and fake/duplicate COD orders?",
      bn: "কুরিয়ার বুকিং, বিকাশ পেমেন্ট এবং ডুপ্লিকেট বা ফেক অর্ডার কীভাবে কন্ট্রোল হয়?",
    },
    a: {
      en: "Checkout validates 11-digit Bangladeshi mobile numbers, blocks accidental double-tap duplicate orders via Idempotency keys, locks final-piece stock automatically, and connects cleanly with Steadfast, Pathao, RedX, bKash, and SSLCommerz.",
      bn: "চেকআউটে ১১-ডিজিট বাংলাদেশি নম্বর ভ্যালিডেশন ও ডাবল-ট্যাপ ডুপ্লিকেট অর্ডার গার্ড বিল্ট-ইন রয়েছে। এছাড়া Steadfast, Pathao, RedX কুরিয়ার এবং bKash ও SSLCommerz পেমেন্ট গেটওয়ে সরাসরি যুক্ত করার সুবিধা থাকছে।",
    },
  },
  {
    q: {
      en: "How fast can we go live, and how do we get started?",
      bn: "অর্ডার করার কত দিনের মধ্যে আমাদের স্টোর লাইভ হবে এবং কীভাবে শুরু করব?",
    },
    a: {
      en: "Starter stores go live in 3–5 days, and full turnkey Business Pro setups (including courier, payments & 30 products uploaded for you) launch in 5–7 days. Use the blueprint configurator above or message us on WhatsApp (+880 1878-601610) for a live 1-on-1 walkthrough.",
      bn: "স্টার্টার স্টোর ৩–৫ দিনে এবং ৩০টি প্রোডাক্ট ও ফুল ইন্টিগ্রেশনসহ বিজনেস প্রো স্টোর মাত্র ৫–৭ দিনেই লাইভ হয়ে যায়। উপরের ব্লুপ্রিন্ট কনফিগারেটর থেকে অথবা সরাসরি WhatsApp বাটনে ক্লিক করে আজই আমাদের টিমের সাথে লাইভ ডেমো দেখে শুরু করুন।",
    },
  },
];
