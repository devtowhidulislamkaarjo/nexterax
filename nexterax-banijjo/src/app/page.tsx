"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Code2,
  Cpu,
  ExternalLink,
  Home,
  Layers,
  Menu,
  MessageCircle,
  MonitorPlay,
  Phone,
  Quote,
  Server,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Sprout,
  Star,
  X,
  Zap,
} from "lucide-react";
import {
  ALL_20_MODULES,
  buildWhatsAppUrl,
  COMPARISON_ROWS,
  EMAIL_ADDRESS,
  FAQ_ITEMS,
  FEATURE_PILLARS,
  INDUSTRY_PRESETS,
  LIVE_DEMO_CONFIG,
  PHONE_DISPLAY,
  PRICING_TIERS,
  WHATSAPP_NUMBER,
  type Lang,
} from "@/data/banijjo-data";
import { FeatureMockup } from "@/components/FeatureMockup";
import { WhatsAppOrderConfigurator } from "@/components/WhatsAppOrderConfigurator";
import { BanijjoRealUiShowcase } from "@/components/BanijjoRealUiShowcase";
import { LiveStorefrontExperience } from "@/components/LiveStorefrontExperience";
import {
  LIVE_STORE_PRESETS,
  type PresetCode,
} from "@/data/live-store-presets";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ShopOwnerAdvisorBot } from "@/components/ShopOwnerAdvisorBot";
import { BrandThreeDots } from "@/components/BrandThreeDots";
import { IntegrationPartnerStrip } from "@/components/IntegrationPartnerStrip";
import { OtherServicesSection } from "@/components/OtherServicesSection";
import { SelectedWorkSection } from "@/components/SelectedWorkSection";

type ModuleFilter =
  | "All"
  | "Commerce"
  | "Builder"
  | "Catalog"
  | "Security"
  | "Admin & SEO";

const HERO_PRESET_SHOWCASE: Record<
  PresetCode,
  {
    tabBn: string;
    tabEn: string;
    storeNameBn: string;
    storeNameEn: string;
    announcementBn: string;
    announcementEn: string;
    bannerImage: string;
    bannerBadgeBn: string;
    bannerBadgeEn: string;
    bannerTitleBn: string;
    bannerTitleEn: string;
    bannerSubBn: string;
    bannerSubEn: string;
    cartText: string;
    products: { name: string; price: string; img: string }[];
  }
> = {
  food: {
    tabBn: "অর্গানিক ফুড",
    tabEn: "Organic Food",
    storeNameBn: "বাণিজ্য অর্গানিক ফুড",
    storeNameEn: "Banijjo Organic Food",
    announcementBn: "সারাদেশে ক্যাশ অন ডেলিভারি • ১৫০০+ টাকায় ফ্রি ডেলিভারি",
    announcementEn: "Nationwide Cash on Delivery • Free Delivery over BDT 1,500",
    bannerImage: "/images/store/organic-grocery-banner.jpg",
    bannerBadgeBn: "১০০% খাঁটি ও প্রাকৃতিক",
    bannerBadgeEn: "100% Pure & Natural",
    bannerTitleBn: "সুন্দরবনের খলিশা মধু, আজওয়া খেজুর ও দেশি ঘি",
    bannerTitleEn: "Raw Sundarban Honey, Ajwa Dates & Pure Ghee",
    bannerSubBn: "সরাসরি মৌয়াল ও বিশ্বস্ত খামার থেকে সংগৃহীত",
    bannerSubEn: "Sourced directly from trusted local farms",
    cartText: "৳ ১,৪৭০",
    products: [
      {
        name: "সুন্দরবনের খলিশা মধু",
        price: "৳ ৫৯০",
        img: "/images/store/sundarban-honey-hero.jpg",
      },
      {
        name: "মদিনার আজওয়া খেজুর",
        price: "৳ ৮৮০",
        img: "/images/store/madinah-dates.jpg",
      },
      {
        name: "পাবনার খাঁটি গাওয়া ঘি",
        price: "৳ ৭৬০",
        img: "/images/store/pabna-ghee.jpg",
      },
    ],
  },
  fashion: {
    tabBn: "ফ্যাশন লেবেল",
    tabEn: "Fashion Label",
    storeNameBn: "বাণিজ্য অ্যাটায়ার",
    storeNameEn: "Banijjo Attire",
    announcementBn: "নতুন ঈদ ও ফেস্টিভ কালেকশন • ৭ দিনে সহজ সাইজ পরিবর্তন",
    announcementEn: "New Festive Collection • Easy Doorstep Size Exchange",
    bannerImage: "/images/store/fashion-boutique-banner.jpg",
    bannerBadgeBn: "ফেস্টিভ কালেকশন",
    bannerBadgeEn: "Festive Drop",
    bannerTitleBn: "হ্যান্ডলুম মসলিন জামদানি ও এমব্রয়ডারি পাঞ্জাবি",
    bannerTitleEn: "Artisan Jamdani & Tailored Festive Panjabis",
    bannerSubBn: "সকল সাইজে রেডি স্টক (S–XXL) ও দ্রুত হোম ডেলিভারি",
    bannerSubEn: "Clear size selection & nationwide COD",
    cartText: "৳ ২,৪৯০",
    products: [
      {
        name: "এমব্রয়ডারি কটন পাঞ্জাবি",
        price: "৳ ২,৪৯০",
        img: "/images/store/mens-panjabi.jpg",
      },
      {
        name: "হ্যান্ডলুম মসলিন জামদানি",
        price: "৳ ৬,৮০০",
        img: "/images/store/jamdani-saree.jpg",
      },
      {
        name: "অর্গানজা ফেস্টিভ কুর্তি",
        price: "৳ ৩,২০০",
        img: "/images/store/organza-kurti.jpg",
      },
    ],
  },
  cosmetics: {
    tabBn: "বিউটি স্টুডিও",
    tabEn: "Beauty Studio",
    storeNameBn: "বাণিজ্য গ্লো স্টুডিও",
    storeNameEn: "Banijjo Glow Studio",
    announcementBn: "অথেনটিক স্কিনকেয়ার • কুপন WELCOME10-এ ১০% ছাড়",
    announcementEn: "Authentic Skincare • Save 10% with WELCOME10",
    bannerImage: "/images/store/cosmetics-banner.jpg",
    bannerBadgeBn: "ডার্মাটোলজিস্ট টেস্টেড",
    bannerBadgeEn: "Authentic Care",
    bannerTitleBn: "কোরিয়ান সিরাম, সানস্ক্রিন ও ডেইলি স্কিন রুটিন",
    bannerTitleEn: "Clinical Serums, Invisible SPF & Daily Care",
    bannerSubBn: "উপাদান ও ব্যবহারের নিয়মসহ ভেরিফাইড পণ্য",
    bannerSubEn: "Show every shade, size, and usage note clearly",
    cartText: "৳ ২,০৪০",
    products: [
      {
        name: "Niacinamide 10% Serum",
        price: "৳ ৮৯০",
        img: "/images/store/serum-dropper.jpg",
      },
      {
        name: "Invisible Gel SPF 50+",
        price: "৳ ১,১৫০",
        img: "/images/store/skincare-sunscreen-tube.jpg",
      },
      {
        name: "Velvet Matte Lip Tint",
        price: "৳ ৬৫০",
        img: "/images/store/velvet-lip-tint.jpg",
      },
    ],
  },
  tech: {
    tabBn: "আইটি ও গ্যাজেট",
    tabEn: "IT & Gadgets",
    storeNameBn: "বাণিজ্য টেক গিয়ার",
    storeNameEn: "Banijjo Tech Gear",
    announcementBn: "১০০% অফিসিয়াল ওয়ারেন্টি • ৩০০০+ টাকায় ফ্রি ডেলিভারি",
    announcementEn: "100% Official Warranty • Free Delivery over BDT 3,000",
    bannerImage: "/images/store/tech-gadgets-banner.jpg",
    bannerBadgeBn: "অফিসিয়াল ওয়ারেন্টি",
    bannerBadgeEn: "Official Gear",
    bannerTitleBn: "ANC ইয়ারবাডস, স্মার্টওয়াচ ও মেকানিক্যাল কীবোর্ড",
    bannerTitleEn: "ANC Earbuds, AMOLED Watches & Pro Keyboards",
    bannerSubBn: "ইনট্যাক্ট সিলড বক্স ও ৬–১২ মাসের রিপ্লেসমেন্ট ওয়ারেন্টি",
    bannerSubEn: "Factory-sealed devices with verified warranty",
    cartText: "৳ ৫,৯৪০",
    products: [
      {
        name: "SonicPro 48dB ANC বাডস",
        price: "৳ ২,৪৯০",
        img: "/images/store/tech-earbuds.jpg",
      },
      {
        name: "ApexFit AMOLED ওয়াচ",
        price: "৳ ৩,৪৫০",
        img: "/images/store/tech-smartwatch.jpg",
      },
      {
        name: "K75 মেকানিক্যাল কীবোর্ড",
        price: "৳ ৪,৬৯০",
        img: "/images/store/tech-keyboard.jpg",
      },
    ],
  },
  supershop: {
    tabBn: "সুপার শপ",
    tabEn: "Super Shop",
    storeNameBn: "বাণিজ্য সুপার মার্ট",
    storeNameEn: "Banijjo Super Mart",
    announcementBn: "৬০ মিনিটে হোম ডেলিভারি • ১৫০০+ টাকায় ডেলিভারি ফ্রি",
    announcementEn: "60-Min Rapid Delivery • Free Shipping over BDT 1,500",
    bannerImage: "/images/store/supershop-banner.jpg",
    bannerBadgeBn: "৬০ মিনিটে ডেলিভারি",
    bannerBadgeEn: "60-Min Express",
    bannerTitleBn: "মাসের পুরো বাজার, তাজা ফলমূল ও প্রতিদিনের পণ্য",
    bannerTitleEn: "Monthly Bazar, Fresh Produce & Daily Essentials",
    bannerSubBn: "খুচরা বাজারের চেয়েও কম দামে সরাসরি আপনার দরজায়",
    bannerSubEn: "Below-MRP family bundles delivered to your kitchen",
    cartText: "৳ ২,৬৫০",
    products: [
      {
        name: "মাসিক ফ্যামিলি বাজার বক্স",
        price: "৳ ২,৬৫০",
        img: "/images/store/supershop-basket.jpg",
      },
      {
        name: "তাজা ফ্রুট বাস্কেট (৪ কেজি)",
        price: "৳ ১,৩৮০",
        img: "/images/store/supershop-fruits.jpg",
      },
      {
        name: "কলম্বিয়ান অ্যারাবিকা কফি",
        price: "৳ ৮৫০",
        img: "/images/store/supershop-beverages.jpg",
      },
    ],
  },
  electronics: {
    tabBn: "হোম গিয়ার",
    tabEn: "Appliances",
    storeNameBn: "বাণিজ্য হোম অ্যান্ড লিভিং",
    storeNameEn: "Banijjo Home & Living",
    announcementBn: "২ বছরের অফিসিয়াল সার্ভিস ওয়ারেন্টি • সারাদেশে COD",
    announcementEn: "2-Year Official Warranty • Safe Nationwide COD",
    bannerImage: "/images/store/home-appliances-banner.jpg",
    bannerBadgeBn: "স্মার্ট হোম গিয়ার",
    bannerBadgeEn: "2-Year Warranty",
    bannerTitleBn: "বারিস্তা এসপ্রেসো মেকার, কপার ব্লেন্ডার ও হোম লাইটিং",
    bannerTitleEn: "Espresso Machines, Copper Blenders & Home Gear",
    bannerSubBn: "ফুড-গ্রেড স্টেইনলেস বডি ও ডাবল-বক্স নিরাপদ ডেলিভারি",
    bannerSubEn: "Food-grade 304 steel & foam-armored courier safety",
    cartText: "৳ ৪,২৯০",
    products: [
      {
        name: "২০-বার এসপ্রেসো মেকার",
        price: "৳ ১১,৯০০",
        img: "/images/store/appliance-coffee.jpg",
      },
      {
        name: "1200W কপার ব্লেন্ডার",
        price: "৳ ৪,২৯০",
        img: "/images/store/appliance-blender.jpg",
      },
      {
        name: "ডাবল-ওয়াল স্মার্ট কেটলি",
        price: "৳ ১,৬৯০",
        img: "/images/store/appliance-kettle.jpg",
      },
    ],
  },
};

const FOUNDER_STORIES = [
  {
    avatar: "/images/store/avatar-male-1.jpg",
    nameBn: "মাহমুদুল হাসান",
    nameEn: "Mahmudul Hasan",
    roleBn: "ফাউন্ডার, অর্গানিক ফুড D2C ব্র্যান্ড • ঢাকা",
    roleEn: "Founder, Organic Food D2C Brand • Dhaka",
    quoteBn:
      "আগে ফেসবুক অ্যাডে হাজার টাকা খরচ করেও স্লো ওয়ার্ডপ্রেস সাইটের কারণে অর্ধেক ক্রেতাই ফিরে যেতেন। বাণিজ্য স্টুডিওতে সুইচ করার পর সাইট ০.৮ সেকেন্ডে ওপেন হয় এবং ১৫-সেকেন্ডের COD ফ্লোতে আমাদের ডেইলি কনফার্মড অর্ডার ২.৩ গুণ বেড়েছে!",
    quoteEn:
      "Sluggish WordPress pages were burning half our Meta ad budget. Moving to Banijjo Studio dropped load times under 0.8s and lifted our daily confirmed COD orders by 2.3x within the first month.",
    metricBn: "২.৩x অ্যাড কনভার্সন গ্রোথ",
    metricEn: "2.3x Ad Conversion Lift",
  },
  {
    avatar: "/images/store/avatar-female-1.jpg",
    nameBn: "তাসনিম তাবাসসুম",
    nameEn: "Tasnim Tabassum",
    roleBn: "ক্রিয়েটিভ ডিরেক্টর, ক্লোদিং ও পাঞ্জাবি লেবেল",
    roleEn: "Creative Director, Apparel & Modest Label",
    quoteBn:
      "ঈদের মেগা ড্রপে আগে সাইজ ওভারসেল হয়ে কাস্টমারদের কাছে সরি বলতে হতো। এখন শেষ পিস বিক্রি হওয়ামাত্র অটো-লক হয়ে যায়, আর কোনো ডেভেলপার ছাড়াই আমি নিজেই রাত ১২টায় নতুন কালেকশন লাইভ করে দিতে পারি!",
    quoteEn:
      "Festive drops used to mean chaotic size oversells. Now our final piece locks automatically at checkout, and I launch midnight collection drops myself without waiting on developers.",
    metricBn: "০% ফ্ল্যাশ-সেল ওভারসেল",
    metricEn: "0% Drop Oversells",
  },
  {
    avatar: "/images/store/avatar-female-3.jpg",
    nameBn: "নুসরাত জাহান",
    nameEn: "Nusrat Jahan",
    roleBn: "কো-ফাউন্ডার, স্কিনকেয়ার স্টুডিও • চট্টগ্রাম",
    roleEn: "Co-Founder, Skincare Studio • Chattogram",
    quoteBn:
      "মাসে শত শত পার্সেল কুরিয়ারে যাওয়ার পর আসল প্রফিট মিলাতে হিমশিম খেতাম। বাণিজ্য স্টুডিওর ড্যাশবোর্ডে হাতে আসা Paid ক্যাশ আর কুরিয়ারে বকেয়া COD একদম আলাদা দেখায়—যা আমাদের পুরো বিজনেস স্কেলিং সহজ করে দিয়েছে।",
    quoteEn:
      "Reconciling hundreds of weekly Steadfast parcels used to be a blind spot. Seeing Paid Cash vs. Pending Courier COD side-by-side gave us total financial control to scale faster.",
    metricBn: "১০০% কুরিয়ার ক্যাশফ্লো ক্লিয়ারিটি",
    metricEn: "100% COD Cash Clarity",
  },
];

export default function BanijjoMarketingPage() {
  const [lang, setLang] = useState<Lang>("bn");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [liveStoreDropdownOpen, setLiveStoreDropdownOpen] = useState(false);
  const [heroPreset, setHeroPreset] = useState<PresetCode>("food");
  const [activeLiveStorePreset, setActiveLiveStorePreset] =
    useState<PresetCode | null>(null);
  const [activePillarId, setActivePillarId] = useState<string>(
    FEATURE_PILLARS[0].id
  );
  const [activePresetId, setActivePresetId] = useState<string>(
    INDUSTRY_PRESETS[0].id
  );
  const [moduleFilter, setModuleFilter] = useState<ModuleFilter>("All");
  const [selectedPlanId, setSelectedPlanId] = useState<string>("growth");
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);
  const [demoModalTarget, setDemoModalTarget] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setLiveStoreDropdownOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLiveStoreDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const activePillar =
    FEATURE_PILLARS.find((p) => p.id === activePillarId) || FEATURE_PILLARS[0];
  const activePreset =
    INDUSTRY_PRESETS.find((p) => p.id === activePresetId) ||
    INDUSTRY_PRESETS[0];

  const filteredModules = ALL_20_MODULES.filter((mod) => {
    if (moduleFilter === "All") return true;
    if (moduleFilter === "Admin & SEO") {
      return (
        mod.category === "Admin" ||
        mod.category === "SEO" ||
        mod.category === "Operations"
      );
    }
    return mod.category === moduleFilter;
  });

  const generalWhatsAppUrl = buildWhatsAppUrl(
    "Hello Banijjo Studio! I visited your website and would like to see a walkthrough & pricing details for bringing my shop online."
  );

  const launchLiveStorePreset = (preset: PresetCode = "food") => {
    setLiveStoreDropdownOpen(false);
    setMobileMenuOpen(false);
    setActiveLiveStorePreset(preset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenLiveDemo = (
    _demoLabel: string,
    configuredUrl: string | undefined,
    fallbackPreset: PresetCode = "food"
  ) => {
    if (configuredUrl && configuredUrl.trim().length > 0) {
      window.open(configuredUrl.trim(), "_blank", "noopener,noreferrer");
      return;
    }
    launchLiveStorePreset(fallbackPreset);
  };

  if (activeLiveStorePreset) {
    return (
      <LiveStorefrontExperience
        initialPreset={activeLiveStorePreset}
        onBackToMarketing={() => setActiveLiveStorePreset(null)}
      />
    );
  }

  const currentHeroShowcase = HERO_PRESET_SHOWCASE[heroPreset];

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-[#FBF6EC] text-[#241C21]">
      {/* Brand Identity Manual p.12-15 & p.32:
          Clean White Header, Official Horizontal Signature (>=144px wide) with >=10px clear space,
          focused single-line navigation, and ONE Burgundy primary action. */}
      <header className="sticky top-0 z-50 border-b border-[#DAD1C7] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 h-[72px]">
          {/* Official Horizontal Lockup — Full Color on White */}
          <a
            href="#"
            aria-label="Banijjo Studio Home"
            className="flex items-center py-2 shrink-0"
          >
            <img
              src="/banijjo-logo-horizontal.png"
              alt="Banijjo Studio"
              className="h-9 sm:h-10 w-auto min-w-[144px] object-contain"
            />
          </a>

          {/* Single-Line Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#241C21]">
            <a
              href="#features"
              className="whitespace-nowrap hover:text-[#650039] transition-colors"
            >
              {lang === "bn" ? "ফিচারসমূহ" : "Capabilities"}
            </a>
            <a
              href="#presets"
              className="whitespace-nowrap hover:text-[#650039] transition-colors"
            >
              {lang === "bn" ? "ব্র্যান্ড থিম" : "Themes"}
            </a>

            {/* Inline Live Demo Menu */}
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setLiveStoreDropdownOpen(!liveStoreDropdownOpen)}
                className="inline-flex items-center gap-1 whitespace-nowrap hover:text-[#650039] transition-colors py-1"
              >
                <span>{lang === "bn" ? "লাইভ ডেমো" : "Live Demo"}</span>
                <ChevronDown
                  className={`h-4 w-4 text-[#665C62] transition-transform duration-200 ${
                    liveStoreDropdownOpen ? "rotate-180 text-[#650039]" : ""
                  }`}
                />
              </button>

              {liveStoreDropdownOpen && (
                <div className="absolute left-0 mt-3 w-80 rounded-[8px] border border-[#DAD1C7] bg-white p-2 shadow-soft-xl z-50 space-y-1 animate-panel-reveal">
                  {[
                    {
                      code: "food" as PresetCode,
                      icon: Sprout,
                      bn: "অর্গানিক ফুড শপ",
                      en: "Organic Food Shop",
                      subBn: "মধু, ঘি ও নিত্যপ্রয়োজনীয় পণ্য",
                      subEn: "Honey, ghee & groceries",
                    },
                    {
                      code: "fashion" as PresetCode,
                      icon: Shirt,
                      bn: "পোশাক ও বুটিক শপ",
                      en: "Clothing & Boutique",
                      subBn: "সাইজ ভ্যারিয়েন্ট ও কালেকশন",
                      subEn: "Sizes & seasonal collections",
                    },
                    {
                      code: "cosmetics" as PresetCode,
                      icon: Sparkles,
                      bn: "স্কিনকেয়ার ও বিউটি শপ",
                      en: "Skincare & Beauty",
                      subBn: "সিরাম, শেড ও কুপন অর্ডার",
                      subEn: "Shades, routines & coupons",
                    },
                    {
                      code: "tech" as PresetCode,
                      icon: Cpu,
                      bn: "আইটি ও গ্যাজেট শপ",
                      en: "IT, Tech & Gadgets",
                      subBn: "ইয়ারবাডস, ওয়াচ ও পিসি গিয়ার",
                      subEn: "Specs, variants & warranty",
                    },
                    {
                      code: "supershop" as PresetCode,
                      icon: ShoppingCart,
                      bn: "সুপার শপ ও ডেইলি মার্ট",
                      en: "Super Shop & Daily Mart",
                      subBn: "মাসের বাজার ও ৬০-মিনিট ডেলিভারি",
                      subEn: "60-min express grocery cart",
                    },
                    {
                      code: "electronics" as PresetCode,
                      icon: Home,
                      bn: "হোম ও কিচেন অ্যাপ্লায়েন্স",
                      en: "Home & Appliances",
                      subBn: "কফি মেকার, ব্লেন্ডার ও হোম গিয়ার",
                      subEn: "Smart kitchen & living gear",
                    },
                  ].map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => launchLiveStorePreset(item.code)}
                        className="w-full flex items-center justify-between rounded-[6px] px-3 py-2.5 text-left hover:bg-[#FBF6EC] transition group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#FBF6EC] border border-[#DAD1C7] text-[#650039] group-hover:bg-[#650039] group-hover:text-white group-hover:border-[#650039] transition-colors shrink-0">
                            <ItemIcon className="h-4 w-4" />
                          </span>
                          <div>
                            <div className="text-xs font-semibold text-[#241C21] whitespace-nowrap">
                              {lang === "bn" ? item.bn : item.en}
                            </div>
                            <div className="text-[11px] text-[#665C62] whitespace-nowrap">
                              {lang === "bn" ? item.subBn : item.subEn}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 text-[#665C62] group-hover:text-[#650039] transition shrink-0" />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="#our-work"
              className="whitespace-nowrap hover:text-[#650039] transition-colors"
            >
              {lang === "bn" ? "আমাদের কাজ" : "Our Work"}
            </a>
            <a
              href="#pricing"
              className="whitespace-nowrap hover:text-[#650039] transition-colors"
            >
              {lang === "bn" ? "প্রাইসিং" : "Pricing"}
            </a>
            <Link
              href="/services"
              className="whitespace-nowrap hover:text-[#650039] transition-colors"
            >
              {lang === "bn" ? "অন্যান্য সার্ভিস" : "Services"}
            </Link>
            <a
              href="#faq"
              className="whitespace-nowrap hover:text-[#650039] transition-colors"
            >
              {lang === "bn" ? "প্রশ্নোত্তর" : "FAQ"}
            </a>
          </nav>

          {/* Right Controls: Language Toggle + Single Burgundy Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="inline-flex items-center rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] p-0.5 text-xs font-semibold shrink-0">
              <button
                type="button"
                onClick={() => setLang("bn")}
                className={`rounded-[4px] px-2.5 py-1 whitespace-nowrap transition ${
                  lang === "bn"
                    ? "bg-white text-[#650039] shadow-2xs font-bold"
                    : "text-[#665C62] hover:text-[#241C21]"
                }`}
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-[4px] px-2.5 py-1 whitespace-nowrap transition ${
                  lang === "en"
                    ? "bg-white text-[#650039] shadow-2xs font-bold"
                    : "text-[#665C62] hover:text-[#241C21]"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#order-now"
              className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-4.5 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors"
            >
              <span>
                {lang === "bn" ? "ব্র্যান্ড লঞ্চ করুন" : "Launch Your Brand"}
              </span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] p-2 text-[#241C21] shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Clean Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#DAD1C7] bg-white px-4 py-5 space-y-3 text-sm font-medium shadow-soft-xl">
            <div className="rounded-[8px] bg-[#FBF6EC] border border-[#DAD1C7] p-3.5 space-y-2">
              <div className="text-xs font-semibold text-[#665C62]">
                {lang === "bn"
                  ? "লাইভ ডেমো দোকান দেখুন"
                  : "Explore a live demo shop"}
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {(
                  [
                    "food",
                    "fashion",
                    "cosmetics",
                    "tech",
                    "supershop",
                    "electronics",
                  ] as PresetCode[]
                ).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => launchLiveStorePreset(code)}
                    className="w-full flex items-center justify-between rounded-[6px] bg-white border border-[#DAD1C7] px-3 py-2 text-xs font-semibold text-[#241C21]"
                  >
                    <span className="truncate">
                      {lang === "bn"
                        ? HERO_PRESET_SHOWCASE[code].tabBn
                        : HERO_PRESET_SHOWCASE[code].tabEn}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#650039]" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              {[
                {
                  href: "#shop-owner-bot",
                  label:
                    lang === "bn"
                      ? "শপ ওনার গাইড"
                      : "Shop Partner Guide",
                },
                {
                  href: "#real-ui-preview",
                  label:
                    lang === "bn"
                      ? "দোকানের ভেতর ও বাহির"
                      : "Inside the Workspace",
                },
                {
                  href: "#features",
                  label: lang === "bn" ? "পণ্য ও সুবিধা" : "Product",
                },
                {
                  href: "#presets",
                  label: lang === "bn" ? "দোকানের থিম" : "Themes",
                },
                {
                  href: "#our-work",
                  label: lang === "bn" ? "আমাদের কাজ" : "Selected Work",
                },
                {
                  href: "#pricing",
                  label: lang === "bn" ? "প্রাইসিং" : "Pricing",
                },
                {
                  href: "/services",
                  label: lang === "bn" ? "অন্যান্য সার্ভিস" : "Other Services",
                },
                {
                  href: "#faq",
                  label: lang === "bn" ? "প্রশ্নোত্তর" : "FAQ",
                },
              ].map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-[6px] px-3 py-2.5 text-[#241C21] hover:bg-[#FBF6EC]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-[6px] px-3 py-2.5 text-[#241C21] hover:bg-[#FBF6EC]"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>

            <a
              href="#order-now"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#650039] px-4 py-3 text-xs font-semibold text-white"
            >
              <span>
                {lang === "bn" ? "দোকান শুরু করুন" : "Explore the builder"}
              </span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* 1. HERO SECTION — Balanced 2-Line Display Typography & Rich Live Storefront Preview */}
        <section className="relative overflow-hidden bg-[#FBF6EC] pt-10 pb-16 sm:pt-14 sm:pb-24 border-b border-[#DAD1C7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Copy */}
              <ScrollReveal variant="fade-up" className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#DAD1C7] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#650039] shadow-2xs">
                  <span className="h-2 w-2 rounded-full bg-[#FF6633]" />
                  <span>
                    {lang === "bn"
                      ? "টপ সেলার ও আধুনিক D2C ব্র্যান্ডের গ্রোথ ইঞ্জিন"
                      : "The Commerce Engine for Modern D2C Brands & Top Sellers"}
                  </span>
                </div>

                <h1 className="brand-display text-[26px] sm:text-[34px] lg:text-[36px] xl:text-[38px] font-bold text-[#650039]">
                  {lang === "bn" ? (
                    <>
                      <span className="block">শুধু পেজে আটকে থাকবেন না</span>
                      <span className="block text-[#241C21]">
                        গড়ুন নিজের ফ্ল্যাগশিপ ব্র্যান্ড।
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="block">Outgrow the inbox</span>
                      <span className="block text-[#241C21]">
                        Scale a flagship brand you own.
                      </span>
                    </>
                  )}
                </h1>

                <p className="text-[15px] sm:text-[17px] text-[#665C62] leading-[1.72] max-w-xl">
                  {lang === "bn"
                    ? "স্লো ওয়ার্ডপ্রেসে অ্যাডের বাজেট নষ্ট করা কিংবা প্রতি মাসে ডলারে Shopify ভাড়া দেওয়ার দিন শেষ। ‘বাণিজ্য স্টুডিও’ দিচ্ছে ০.৮ সেকেন্ডে ওপেন হওয়া স্টোরফ্রন্ট, ১৫ সেকেন্ডে দ্রুত COD চেকআউট এবং কুরিয়ার ক্যাশফ্লো ড্যাশবোর্ড, আজীবন ০% কমিশনে।"
                    : "Stop burning Meta and TikTok ad spend on sluggish WordPress plugins or recurring USD subscriptions. Banijjo Studio gives you a sub-second Next.js 15 storefront, 15-second COD checkout, and crystal-clear courier cashflow tracking with 0% commission forever."}
                </p>

                {/* Primary & Secondary Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      handleOpenLiveDemo(
                        "Banijjo Studio Live Demo",
                        LIVE_DEMO_CONFIG.storefrontUrl,
                        heroPreset
                      )
                    }
                    className="inline-flex items-center justify-center gap-2.5 rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all"
                  >
                    <MonitorPlay className="h-5 w-5" />
                    <span>
                      {lang === "bn"
                        ? "লাইভ ডেমো স্টোর দেখুন"
                        : "Explore Live Demo Store"}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center gap-2 rounded-[6px] border border-[#DAD1C7] bg-white hover:border-[#650039] px-6 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#241C21] transition-all"
                  >
                    <span>
                      {lang === "bn"
                        ? "গ্রোথ প্ল্যান ও প্রাইসিং"
                        : "Explore Growth Plans"}
                    </span>
                  </a>
                </div>

                {/* Merchant Trust Strip */}
                <div className="pt-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-t border-[#DAD1C7]">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[
                        "/images/store/avatar-female-1.jpg",
                        "/images/store/avatar-male-1.jpg",
                        "/images/store/avatar-female-2.jpg",
                        "/images/store/avatar-male-2.jpg",
                      ].map((src, idx) => (
                        <img
                          key={src}
                          src={src}
                          alt={`Founder ${idx + 1}`}
                          className="h-9 w-9 rounded-full object-cover ring-2 ring-[#FBF6EC]"
                        />
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 fill-[#FF6633] text-[#FF6633]"
                          />
                        ))}
                        <span className="ml-1 text-xs font-bold text-[#241C21] tabular-nums">
                          4.9/5
                        </span>
                      </div>
                      <p className="text-xs text-[#665C62]">
                        {lang === "bn"
                          ? "স্কেলিং ফাউন্ডার ও টপ সেলারদের প্রথম পছন্দ"
                          : "Trusted by high-growth Bangladeshi brands"}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:block h-8 w-px bg-[#DAD1C7]" />

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-semibold text-[#241C21]">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-[#146649]" />
                      {lang === "bn" ? "আজীবন ০% কমিশন" : "0% Sales Commission"}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-[#146649]" />
                      {lang === "bn"
                        ? "৭২ ঘণ্টায় লঞ্চ রেডি"
                        : "Launch Ready in 72h"}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Interactive Storefront Card */}
              <ScrollReveal
                variant="scale-up"
                delay={120}
                className="lg:col-span-5"
              >
                <div className="rounded-[12px] border border-[#DAD1C7] bg-white p-3.5 sm:p-4 shadow-soft-xl">
                  {/* 6-Preset Switcher (Clean 3x2 Compact Grid) */}
                  <div className="grid grid-cols-3 gap-1 rounded-[8px] bg-[#FBF6EC] border border-[#DAD1C7] p-1 mb-3">
                    {(
                      [
                        "food",
                        "fashion",
                        "cosmetics",
                        "tech",
                        "supershop",
                        "electronics",
                      ] as PresetCode[]
                    ).map((code) => {
                      const active = heroPreset === code;
                      return (
                        <button
                          key={code}
                          type="button"
                          onClick={() => setHeroPreset(code)}
                          className={`rounded-[6px] px-2 py-1.5 text-[11px] font-semibold truncate transition-all ${
                            active
                              ? "bg-[#650039] text-white shadow-2xs"
                              : "text-[#665C62] hover:text-[#241C21] hover:bg-white/70"
                          }`}
                        >
                          {lang === "bn"
                            ? HERO_PRESET_SHOWCASE[code].tabBn
                            : HERO_PRESET_SHOWCASE[code].tabEn}
                        </button>
                      );
                    })}
                  </div>

                  {/* Mini Storefront Preview */}
                  <div
                    key={heroPreset}
                    className="rounded-[8px] border border-[#DAD1C7] overflow-hidden bg-[#FBF6EC] animate-panel-reveal"
                  >
                    <div className="bg-[#241C21] px-3.5 py-2 flex items-center justify-between text-[11px] text-white">
                      <div className="flex items-center gap-2 truncate">
                        <BrandThreeDots size={6} color="#FF6633" />
                        <span className="font-medium truncate">
                          {lang === "bn"
                            ? currentHeroShowcase.storeNameBn
                            : currentHeroShowcase.storeNameEn}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => launchLiveStorePreset(heroPreset)}
                        className="inline-flex items-center gap-1 rounded-[4px] bg-white/15 hover:bg-[#FF6633] hover:text-[#241C21] px-2 py-0.5 text-[10px] font-semibold text-white transition shrink-0"
                      >
                        <span>
                          {lang === "bn" ? "লাইভ প্রিভিউ" : "Open Live"}
                        </span>
                        <ExternalLink className="h-2.5 w-2.5" />
                      </button>
                    </div>

                    <div className="bg-white border-b border-[#DAD1C7] px-3 py-1 text-[10px] font-medium text-[#665C62] text-center">
                      {lang === "bn"
                        ? currentHeroShowcase.announcementBn
                        : currentHeroShowcase.announcementEn}
                    </div>

                    <div className="flex items-center justify-between border-b border-[#DAD1C7] px-3.5 py-2.5 bg-white tabular-nums">
                      <div className="flex items-center gap-2">
                        <img
                          src="/banijjo-favicon.png"
                          alt="Banijjo Symbol"
                          className="h-6 w-6 rounded-[4px] object-contain border border-[#DAD1C7]"
                        />
                        <span className="text-xs font-bold text-[#241C21]">
                          {lang === "bn"
                            ? currentHeroShowcase.storeNameBn
                            : currentHeroShowcase.storeNameEn}
                        </span>
                      </div>
                      <span className="rounded-[4px] bg-[#650039] px-2.5 py-1 text-[10px] font-semibold text-white">
                        {lang === "bn" ? "কার্ট" : "Cart"} •{" "}
                        {currentHeroShowcase.cartText}
                      </span>
                    </div>

                    <div className="p-3.5 space-y-3">
                      <div className="relative rounded-[8px] overflow-hidden p-4 text-white min-h-[108px] flex flex-col justify-end">
                        <img
                          src={currentHeroShowcase.bannerImage}
                          alt={currentHeroShowcase.storeNameEn}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#241C21]/90 via-[#241C21]/70 to-[#241C21]/30" />
                        <div className="relative z-10">
                          <span className="inline-block rounded-[4px] bg-[#FF6633] px-2 py-0.5 text-[10px] font-bold text-[#241C21]">
                            {lang === "bn"
                              ? currentHeroShowcase.bannerBadgeBn
                              : currentHeroShowcase.bannerBadgeEn}
                          </span>
                          <div className="text-sm font-bold mt-1.5 leading-snug">
                            {lang === "bn"
                              ? currentHeroShowcase.bannerTitleBn
                              : currentHeroShowcase.bannerTitleEn}
                          </div>
                          <div className="text-[11px] text-white/85 mt-0.5">
                            {lang === "bn"
                              ? currentHeroShowcase.bannerSubBn
                              : currentHeroShowcase.bannerSubEn}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2.5 tabular-nums">
                        {currentHeroShowcase.products.map((p) => (
                          <div
                            key={p.name}
                            onClick={() => launchLiveStorePreset(heroPreset)}
                            className="cursor-pointer group rounded-[6px] border border-[#DAD1C7] bg-white overflow-hidden transition hover:border-[#650039]"
                          >
                            <div className="h-20 w-full overflow-hidden bg-[#FBF6EC]">
                              <img
                                src={p.img}
                                alt={p.name}
                                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                              />
                            </div>
                            <div className="p-2">
                              <div className="text-[10px] font-semibold text-[#241C21] line-clamp-1">
                                {p.name}
                              </div>
                              <div className="flex items-center justify-between mt-1">
                                <span className="text-[11px] font-bold text-[#650039]">
                                  {p.price}
                                </span>
                                <span className="text-[9px] font-semibold text-[#665C62] group-hover:text-[#650039]">
                                  অর্ডার →
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => launchLiveStorePreset(heroPreset)}
                    className="mt-3 w-full inline-flex items-center justify-between rounded-[6px] bg-[#FBF6EC] hover:bg-[#F6EBF1] border border-[#DAD1C7] hover:border-[#650039] px-4 py-3 text-xs font-semibold text-[#241C21] hover:text-[#650039] transition"
                  >
                    <span>
                      {lang === "bn"
                        ? `লাইভ “${currentHeroShowcase.tabBn}” স্টোরে অর্ডার টেস্ট করুন`
                        : `Launch live ${currentHeroShowcase.tabEn} demo store`}
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#650039] shrink-0" />
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 2. BANGLADESH COURIER, PAYMENT & AD INTEGRATIONS SHOWCASE */}
        <IntegrationPartnerStrip lang={lang} />

        {/* 3. HOW IT WORKS — 3 CLEAR MERCHANT STEPS */}
        <section className="py-20 sm:py-24 bg-[#FBF6EC] border-b border-[#DAD1C7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal
              variant="fade-up"
              className="max-w-2xl mx-auto text-center mb-14"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#650039]">
                {lang === "bn"
                  ? "জিরো টেক-হেডেক লঞ্চ"
                  : "Zero-Friction Turnkey Launch"}
              </p>
              <h2 className="brand-title mt-3 text-2xl sm:text-[40px] sm:leading-[48px] font-bold text-[#241C21]">
                {lang === "bn"
                  ? "মাত্র ৭২ ঘণ্টায় সাধারণ পেজ থেকে ফ্ল্যাগশিপ ব্র্যান্ড"
                  : "From social page to flagship D2C brand in 72 hours"}
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  titleBn: "আপনার নিশের উইনিং থিম বেছে নিন",
                  titleEn: "Pick your winning niche preset",
                  descBn:
                    "আইটি ও গ্যাজেট, সুপার শপ, অর্গানিক ফুড, ফ্যাশন কিংবা স্কিনকেয়ার—কনভার্সন-টেস্টেড ৬টি প্রিমিয়াম স্টোরফ্রন্ট থেকে আপনার ব্র্যান্ডের স্টাইলটি সিলেক্ট করুন।",
                  descEn:
                    "Choose from 6 high-converting storefronts — IT & Gadgets, Super Shop, Organic Food, Apparel, Clean Beauty, or Home Appliances.",
                },
                {
                  step: "02",
                  titleBn: "কুরিয়ার, পেমেন্ট ও CAPI অটো-সেটআপ",
                  titleEn: "Plug in couriers, payments & CAPI",
                  descBn:
                    "আপনার কাস্টম ডোমেইন, ব্র্যান্ড কালার, Steadfast/Pathao কুরিয়ার, bKash/SSLCommerz এবং Meta Server CAPI আমরাই রেডি করে দেই।",
                  descEn:
                    "Our engineering team connects your custom domain, courier APIs, payment gateways, and Meta Server CAPI so every ad click tracks cleanly.",
                },
                {
                  step: "03",
                  titleBn: "অ্যাড চালান, স্কেল করুন — ১০০% প্রফিট রাখুন",
                  titleEn: "Scale orders & keep 100% of every sale",
                  descBn:
                    "হাজারো অর্ডার অটো-পাইলটে রিসিভ করুন, কুরিয়ার ক্যাশফ্লো ট্র্যাক করুন এবং ডেভেলপার ছাড়াই নতুন ক্যাম্পেইন লাইভ করুন—০% কমিশনে।",
                  descEn:
                    "Capture orders 24/7, monitor real collected COD cash, and drop new campaigns anytime without paying a single taka in monthly commissions.",
                },
              ].map((item, idx) => (
                <ScrollReveal
                  key={item.step}
                  variant="fade-up"
                  delay={idx * 100}
                  className="rounded-[12px] border border-[#DAD1C7] bg-white p-7 sm:p-8 shadow-soft-md flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-[6px] bg-[#650039] text-xs font-bold text-white tabular-nums">
                      {item.step}
                    </span>
                    <h3 className="mt-5 text-lg sm:text-xl font-bold text-[#241C21]">
                      {lang === "bn" ? item.titleBn : item.titleEn}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#665C62] leading-relaxed">
                      {lang === "bn" ? item.descBn : item.descEn}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SHOP PARTNER ASSISTANT BOT SECTION */}
        

        {/* 5. INSIDE BANIJJO STUDIO — 4-SCREEN WORKSPACE & STOREFRONT TOUR */}
        <BanijjoRealUiShowcase
          lang={lang}
          onOpenLiveTest={(label) =>
            handleOpenLiveDemo(
              label,
              LIVE_DEMO_CONFIG.storefrontUrl,
              heroPreset
            )
          }
        />

        {/* 6. 8 CORE CAPABILITIES — WHITE SURFACE + BURGUNDY ACTIVE TASK */}
        <section
          id="features"
          className="py-20 sm:py-28 bg-white border-b border-[#DAD1C7]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal
              variant="fade-up"
              className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#650039]">
                {lang === "bn" ? "৮টি পাওয়ারহাউজ মডিউল" : "8 Powerhouse Capabilities"}
              </p>
              <h2 className="brand-title mt-3 text-2xl sm:text-[40px] sm:leading-[48px] font-bold text-[#241C21]">
                {lang === "bn"
                  ? "টপ ১% ব্র্যান্ডের মতো স্কেল করার কমপ্লিট ইঞ্জিন"
                  : "Engineered to outperform ordinary online stores"}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#665C62] leading-relaxed">
                {lang === "bn"
                  ? "ডেইলি ২০টি অর্ডার থেকে ২,০০০ অর্ডারে যাওয়ার পথে যেসব টেকনিক্যাল বাধার মুখে সেলাররা পড়েন—তার প্রতিটি সমাধান ভেতরে বিল্ট-ইন।"
                  : "Explore how every layer of Banijjo Studio protects your ad spend, locks stock during viral drops, and clarifies your daily cashflow."}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left Rail */}
              <ScrollReveal
                variant="fade-up"
                delay={80}
                className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0"
              >
                {FEATURE_PILLARS.map((pillar, idx) => {
                  const isActive = pillar.id === activePillar.id;
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      onClick={() => setActivePillarId(pillar.id)}
                      className={`shrink-0 lg:w-full text-left rounded-[8px] px-4 py-3.5 transition-all border flex items-center justify-between gap-3 ${
                        isActive
                          ? "bg-[#650039] border-[#650039] text-white shadow-sm"
                          : "bg-[#FBF6EC] border-[#DAD1C7] text-[#241C21] hover:bg-white hover:border-[#650039]"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`text-xs font-bold shrink-0 tabular-nums ${
                            isActive ? "text-[#FF6633]" : "text-[#665C62]"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold truncate">
                          {pillar.badge[lang]}
                        </span>
                      </div>
                      <ArrowRight
                        className={`hidden lg:block h-4 w-4 shrink-0 transition-transform ${
                          isActive
                            ? "text-white translate-x-0.5"
                            : "text-[#665C62]"
                        }`}
                      />
                    </button>
                  );
                })}
              </ScrollReveal>

              {/* Right All 8 Capability Panels (DOM-Rendered for Full SEO Indexing) */}
              <ScrollReveal
                variant="scale-up"
                delay={140}
                className="lg:col-span-8"
              >
                {FEATURE_PILLARS.map((pillar) => {
                  const isCurrent = pillar.id === activePillar.id;
                  return (
                    <article
                      key={pillar.id}
                      id={`capability-${pillar.id}`}
                      role="tabpanel"
                      className={`rounded-[12px] border border-[#DAD1C7] bg-[#FBF6EC] p-6 sm:p-10 space-y-7 ${
                        isCurrent ? "block animate-panel-reveal" : "hidden"
                      }`}
                    >
                      <div>
                        <span className="inline-block rounded-[4px] bg-[#FF6633] px-2.5 py-1 text-xs font-bold text-[#241C21]">
                          {pillar.badge[lang]}
                        </span>
                        <h3 className="mt-3 text-xl sm:text-3xl font-bold text-[#241C21] leading-tight">
                          {pillar.title[lang]}
                        </h3>
                        <p className="mt-2.5 text-sm sm:text-base text-[#665C62] leading-relaxed">
                          {pillar.subtitle[lang]}
                        </p>
                      </div>

                      {isCurrent && (
                        <FeatureMockup type={pillar.mockupType} lang={lang} />
                      )}

                      <div className="grid grid-cols-3 gap-3 tabular-nums">
                        {pillar.metrics.map((m) => (
                          <div
                            key={m.value}
                            className="rounded-[8px] bg-white border border-[#DAD1C7] p-3.5 text-center"
                          >
                            <div className="text-base sm:text-lg font-bold text-[#650039]">
                              {m.value}
                            </div>
                            <div className="text-[11px] font-medium text-[#665C62] mt-0.5">
                              {m.label[lang]}
                            </div>
                          </div>
                        ))}
                      </div>

                      <ul className="grid grid-cols-1 gap-2.5 pt-2 border-t border-[#DAD1C7]">
                        {pillar.highlights[lang].map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#241C21]"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#146649] shrink-0 mt-1" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 7. 6 STOREFRONT THEMES */}
        <section
          id="presets"
          className="py-20 sm:py-28 bg-[#FBF6EC] border-b border-[#DAD1C7]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal variant="fade-up" className="space-y-7 mb-10">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#650039]">
                  {lang === "bn"
                    ? "কনভার্সন-টেস্টেড ৬টি ইন্ডাস্ট্রি থিম"
                    : "6 Conversion-Tested Industry Themes"}
                </p>
                <h2 className="brand-title mt-3 text-2xl sm:text-[40px] sm:leading-[48px] font-bold text-[#241C21]">
                  {lang === "bn"
                    ? "দেখলেই ফ্ল্যাগশিপ ব্র্যান্ড মনে হয় — প্রথম ভিজিটেই ক্রেতার আস্থা"
                    : "Storefronts that make first-time visitors trust and buy"}
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5 rounded-[10px] border border-[#DAD1C7] bg-white p-1.5">
                {INDUSTRY_PRESETS.map((preset) => {
                  const active = preset.id === activePreset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setActivePresetId(preset.id)}
                      className={`rounded-[6px] px-3 py-2.5 text-xs font-semibold text-center transition-all ${
                        active
                          ? "bg-[#650039] text-white shadow-2xs"
                          : "text-[#665C62] hover:text-[#241C21] hover:bg-[#FBF6EC]"
                      }`}
                    >
                      {preset.name[lang]}
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100}>
              {INDUSTRY_PRESETS.map((presetItem) => {
                const isCurrentPreset = presetItem.id === activePreset.id;
                const livePreset =
                  LIVE_STORE_PRESETS[presetItem.id as PresetCode] ||
                  LIVE_STORE_PRESETS.food;
                const heroBanner = livePreset.heroSlides[0];

                return (
                  <article
                    key={presetItem.id}
                    id={`theme-${presetItem.id}`}
                    role="tabpanel"
                    className={
                      isCurrentPreset
                        ? "space-y-6 animate-panel-reveal"
                        : "hidden"
                    }
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                      <div className="lg:col-span-8 relative min-h-[300px] sm:min-h-[340px] rounded-[12px] overflow-hidden border border-[#DAD1C7] flex items-end p-6 sm:p-10 text-white shadow-soft-md">
                        <img
                          src={heroBanner.imageUrl}
                          alt={heroBanner.title[lang]}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#241C21]/90 via-[#241C21]/45 to-transparent" />
                        <div className="relative z-10 max-w-xl space-y-3">
                          <span className="inline-block rounded-[4px] bg-[#FF6633] px-3 py-1 text-xs font-bold text-[#241C21]">
                            {presetItem.badgeText}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                            {heroBanner.title[lang]}
                          </h3>
                          <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                            {heroBanner.subtitle[lang]}
                          </p>
                        </div>
                      </div>

                      {/* Right Info Panel */}
                      <div className="lg:col-span-4 rounded-[12px] border border-[#DAD1C7] bg-white p-6 sm:p-8 flex flex-col justify-between">
                        <div className="space-y-4">
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#650039]">
                            {lang === "bn" ? "যাদের জন্য তৈরি" : "Built For"}
                          </span>
                          <h4 className="text-xl font-bold text-[#241C21]">
                            {presetItem.name[lang]}
                          </h4>
                          <p className="text-sm text-[#665C62] leading-relaxed">
                            {presetItem.bestFor[lang]}
                          </p>
                          <div className="pt-2">
                            <div className="text-xs font-semibold text-[#665C62] mb-2">
                              {lang === "bn"
                                ? "প্রস্তুত ক্যাটাগরি:"
                                : "Sample Categories:"}
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {presetItem.sampleCategories.map((cat) => (
                                <span
                                  key={cat}
                                  className="rounded-[4px] bg-[#FBF6EC] border border-[#DAD1C7] px-2.5 py-1 text-[11px] font-medium text-[#241C21]"
                                >
                                  {cat}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="pt-6 space-y-2.5">
                          <Link
                            href={`/live-store/?preset=${presetItem.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              launchLiveStorePreset(
                                presetItem.id as PresetCode
                              );
                            }}
                            className="w-full inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-5 py-3.5 text-xs sm:text-sm font-semibold text-white transition"
                          >
                            <MonitorPlay className="h-4 w-4" />
                            <span>
                              {lang === "bn"
                                ? "এই দোকানটি চালিয়ে দেখুন"
                                : "Preview this theme live"}
                            </span>
                          </Link>
                          <a
                            href="#order-now"
                            className="w-full inline-flex items-center justify-center gap-1.5 rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] hover:border-[#650039] px-5 py-3 text-xs sm:text-sm font-semibold text-[#241C21] transition"
                          >
                            <span>
                              {lang === "bn"
                                ? "এই থিমে দোকান নিন"
                                : "Start with this theme"}
                            </span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* 4 Product Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 tabular-nums">
                      {presetItem.sampleProducts.map((prod) => (
                        <div
                          key={prod.name}
                          onClick={() =>
                            launchLiveStorePreset(presetItem.id as PresetCode)
                          }
                          className="cursor-pointer group rounded-[8px] border border-[#DAD1C7] bg-white overflow-hidden transition hover:border-[#650039] flex flex-col justify-between"
                        >
                          <div>
                            <div className="relative h-36 sm:h-48 w-full bg-[#FBF6EC] overflow-hidden">
                              <img
                                src={prod.image}
                                alt={prod.name}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                              />
                              <span className="absolute top-3 left-3 rounded-[4px] bg-white px-2.5 py-1 text-[10px] font-semibold text-[#241C21] shadow-2xs">
                                {prod.tag}
                              </span>
                            </div>
                            <div className="p-4 pb-2">
                              <h4 className="text-xs sm:text-sm font-semibold text-[#241C21] line-clamp-2">
                                {prod.name}
                              </h4>
                              <p className="text-[11px] text-[#665C62] mt-1">
                                {prod.weight}
                              </p>
                            </div>
                          </div>
                          <div className="px-4 pb-4 pt-2 flex items-center justify-between border-t border-[#DAD1C7]/60 mt-2">
                            <div>
                              <span className="text-sm sm:text-base font-bold text-[#650039]">
                                {prod.price}
                              </span>
                              <span className="ml-2 text-xs text-[#665C62] line-through">
                                {prod.oldPrice}
                              </span>
                            </div>
                            <span className="text-xs font-semibold text-[#650039] inline-flex items-center gap-1">
                              <span>{lang === "bn" ? "দেখুন" : "View"}</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </ScrollReveal>
          </div>
        </section>

        {/* 8. MERCHANT STORIES */}
        <section className="py-20 sm:py-28 bg-white border-b border-[#DAD1C7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal
              variant="fade-up"
              className="max-w-2xl mx-auto text-center mb-14"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#650039]">
                {lang === "bn" ? "টপ সেলারদের বাস্তব অভিজ্ঞতা" : "Proven by Scaling Founders"}
              </p>
              <h2 className="brand-title mt-3 text-2xl sm:text-[40px] sm:leading-[48px] font-bold text-[#241C21]">
                {lang === "bn"
                  ? "সাধারণ পেজ থেকে আজ যারা স্বয়ংসম্পূর্ণ D2C ব্র্যান্ড"
                  : "Why ambitious Bangladeshi sellers made the switch"}
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FOUNDER_STORIES.map((story, idx) => (
                <ScrollReveal
                  key={story.nameEn}
                  variant="fade-up"
                  delay={idx * 100}
                  className="rounded-[12px] border border-[#DAD1C7] bg-[#FBF6EC] p-7 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <Quote className="h-6 w-6 text-[#650039]/40" />
                      <span className="rounded-[4px] bg-[#EAF4F0] px-2.5 py-1 text-[11px] font-semibold text-[#146649]">
                        {lang === "bn" ? story.metricBn : story.metricEn}
                      </span>
                    </div>
                    <p className="text-sm text-[#241C21] leading-relaxed">
                      “{lang === "bn" ? story.quoteBn : story.quoteEn}”
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#DAD1C7] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={story.avatar}
                        alt={story.nameEn}
                        loading="lazy"
                        decoding="async"
                        className="h-11 w-11 rounded-full object-cover border border-[#DAD1C7]"
                      />
                      <div>
                        <div className="text-sm font-bold text-[#241C21]">
                          {lang === "bn" ? story.nameBn : story.nameEn}
                        </div>
                        <div className="text-xs text-[#665C62]">
                          {lang === "bn" ? story.roleBn : story.roleEn}
                        </div>
                      </div>
                    </div>
                    <BrandThreeDots size={5} color="#FF6633" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 9. HONEST COMPARISON & 22+ MODULES */}
        <section
          id="comparison"
          className="py-20 sm:py-28 bg-[#FBF6EC] border-b border-[#DAD1C7]"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-20">
            <div>
              <ScrollReveal
                variant="fade-up"
                className="max-w-3xl mx-auto text-center mb-12"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#650039]">
                  {lang === "bn" ? "স্মার্ট ফাউন্ডারদের হিসাব" : "The Smart Founder’s Math"}
                </p>
                <h2 className="brand-title mt-3 text-2xl sm:text-[40px] sm:leading-[48px] font-bold text-[#241C21]">
                  {lang === "bn"
                    ? "কেন টপ সেলাররা স্লো WooCommerce ও ব্যয়বহুল Shopify ছাড়ছেন?"
                    : "Why high-growth sellers outgrow WooCommerce & Shopify"}
                </h2>
              </ScrollReveal>

              <ScrollReveal
                variant="scale-up"
                delay={100}
                className="overflow-x-auto rounded-[12px] border border-[#DAD1C7] bg-white shadow-soft-md"
              >
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="border-b border-[#DAD1C7] bg-[#FBF6EC] text-xs sm:text-sm">
                      <th className="py-4 px-6 font-semibold text-[#665C62]">
                        {lang === "bn" ? "বিষয়" : "Criteria"}
                      </th>
                      <th className="py-4 px-6 font-bold text-[#650039] bg-[#F6EBF1] border-x border-[#DAD1C7]">
                        <span className="inline-flex items-center gap-1.5">
                          <Award className="h-4 w-4 text-[#650039]" />
                          <span>Banijjo Studio</span>
                        </span>
                      </th>
                      <th className="py-4 px-6 font-semibold text-[#665C62]">
                        WordPress / WooCommerce
                      </th>
                      <th className="py-4 px-6 font-semibold text-[#665C62]">
                        Shopify (Monthly USD)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DAD1C7] text-xs sm:text-sm">
                    {COMPARISON_ROWS.map((row) => (
                      <tr
                        key={row.feature.en}
                        className="hover:bg-[#FBF6EC]/60 transition-colors"
                      >
                        <td className="py-4 px-6 font-semibold text-[#241C21]">
                          {row.feature[lang]}
                        </td>
                        <td className="py-4 px-6 font-semibold text-[#241C21] bg-[#F6EBF1]/40 border-x border-[#DAD1C7]">
                          <span className="inline-flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#146649] shrink-0 mt-0.5" />
                            <span>{row.banijjo[lang]}</span>
                          </span>
                        </td>
                        <td className="py-4 px-6 text-[#665C62]">
                          {row.woocommerce[lang]}
                        </td>
                        <td className="py-4 px-6 text-[#665C62]">
                          {row.shopify[lang]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ScrollReveal>
            </div>

            {/* Filterable 22+ Modules */}
            <ScrollReveal variant="fade-up" className="pt-4">
              <div id="modules">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                  <div className="max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#650039]">
                      {lang === "bn"
                        ? "নির্ভরযোগ্য প্রযুক্তি"
                        : "Dependable Architecture"}
                    </p>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-[#241C21]">
                      {lang === "bn"
                        ? "২২+ ফুল-স্ট্যাক মডিউল ভেতরে অন্তর্ভুক্ত"
                        : "22+ modules built into every shop"}
                    </h3>
                    <p className="mt-2 text-sm text-[#665C62]">
                      {lang === "bn"
                        ? "আলাদা কোনো পেইড প্লাগইন কেনার প্রয়োজন নেই — Next.js 15 ফ্রন্টএন্ড এবং PostgreSQL 17 ব্যাকএন্ড একসাথে কাজ করে।"
                        : "Clean two-project foundation: Next.js 15 storefront + Express, Prisma & PostgreSQL 17 API server."}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {(
                      [
                        "All",
                        "Commerce",
                        "Builder",
                        "Catalog",
                        "Security",
                        "Admin & SEO",
                      ] as ModuleFilter[]
                    ).map((cat) => {
                      const active = moduleFilter === cat;
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setModuleFilter(cat)}
                          className={`rounded-[6px] px-3.5 py-2 text-xs font-semibold transition ${
                            active
                              ? "bg-[#650039] text-white"
                              : "bg-white border border-[#DAD1C7] text-[#665C62] hover:text-[#241C21]"
                          }`}
                        >
                          {cat === "All"
                            ? lang === "bn"
                              ? "সবগুলো (২২)"
                              : "All (22)"
                            : cat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <div className="rounded-[8px] border border-[#DAD1C7] bg-white p-4 flex items-start gap-3.5">
                    <div className="rounded-[6px] bg-[#FBF6EC] border border-[#DAD1C7] p-2.5 text-[#650039] shrink-0">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#241C21]">
                        Frontend — Next.js 15, React 19, Tailwind CSS
                      </div>
                      <p className="text-xs text-[#665C62] mt-1">
                        {lang === "bn"
                          ? "দ্রুতগতির SSR/ISR স্টোরফ্রন্ট, ভিজ্যুয়াল স্টোর বিল্ডার এবং মার্চেন্ট ওয়ার্কস্পেস।"
                          : "Fast SSR/ISR storefront, visual builder, and responsive merchant workspace."}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-[8px] border border-[#DAD1C7] bg-white p-4 flex items-start gap-3.5">
                    <div className="rounded-[6px] bg-[#FBF6EC] border border-[#DAD1C7] p-2.5 text-[#241C21] shrink-0">
                      <Server className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#241C21]">
                        Backend — Node.js 22, Express, Prisma & PostgreSQL 17
                      </div>
                      <p className="text-xs text-[#665C62] mt-1">
                        {lang === "bn"
                          ? "সঠিক টাকার হিসাব, Argon2id ও 2FA নিরাপত্তা, এনক্রিপ্টেড ভল্ট এবং অটোমেটিক স্টক লক।"
                          : "ACID transactions, Argon2id + 2FA security, encrypted secret vault, and stock locking."}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  key={moduleFilter}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 animate-panel-reveal"
                >
                  {filteredModules.map((mod) => (
                    <div
                      key={mod.name}
                      className="flex items-center justify-between rounded-[8px] border border-[#DAD1C7] bg-white px-4 py-3 text-xs"
                    >
                      <div className="flex items-center gap-2.5 font-medium text-[#241C21] min-w-0">
                        <Check className="h-4 w-4 text-[#146649] shrink-0" />
                        <span className="truncate">{mod.name}</span>
                      </div>
                      <span className="rounded-[4px] bg-[#FBF6EC] border border-[#DAD1C7] px-2 py-0.5 text-[10px] font-semibold text-[#665C62] shrink-0 ml-2">
                        {mod.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 10. PRICING PLANS — Brand Identity Manual p.16, p.19 & p.32
             "Show currency, billing period and included limits together."
             Burgundy 25% share showcased on the featured plan, Warm Coral callout with Charcoal text (5.70:1 AA). */}
        <section
          id="pricing"
          className="py-20 sm:py-28 bg-white border-b border-[#DAD1C7]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal
              variant="fade-up"
              className="max-w-3xl mx-auto text-center mb-14"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#650039]">
                {lang === "bn"
                  ? "ওয়ান-টাইম ব্র্যান্ড ইনভেস্টমেন্ট"
                  : "One-Time Brand Investment"}
              </p>
              <h2 className="brand-title mt-3 text-2xl sm:text-[40px] sm:leading-[48px] font-bold text-[#241C21]">
                {lang === "bn"
                  ? "মাসিক ভাড়া নয়, নিজের অ্যাসেট গড়ুন — আজীবন ০% কমিশনে"
                  : "Stop renting your storefront. Own the asset forever."}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#665C62]">
                {lang === "bn"
                  ? "মাত্র একবার ইনভেস্ট করুন — আপনার প্রতি মাসের লাখ টাকার সেলসের পুরোটাই থাকুক আপনার নিজের পকেটে।"
                  : "Invest once in a flagship platform and keep 100% of every order your brand generates."}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
              {PRICING_TIERS.map((tier, idx) => {
                const isPopular = Boolean(tier.popular);
                const whatsappDirectUrl = buildWhatsAppUrl(
                  `Hello Banijjo Studio! I want to discuss the *${tier.name.en}* (${tier.price.en}) package.`
                );

                return (
                  <ScrollReveal
                    key={tier.id}
                    variant="fade-up"
                    delay={idx * 100}
                    className={`rounded-[12px] p-7 sm:p-9 flex flex-col justify-between transition-all relative ${
                      isPopular
                        ? "surface-dark bg-[#650039] text-white shadow-soft-xl lg:-translate-y-2"
                        : "border border-[#DAD1C7] bg-[#FBF6EC] text-[#241C21]"
                    }`}
                  >
                    {/* Coral Callout with Charcoal #241C21 text (5.70:1 AA contrast per Manual p.19) */}
                    {tier.badge && (
                      <div className="absolute -top-3.5 left-7 rounded-[4px] bg-[#FF6633] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#241C21] shadow-2xs">
                        {tier.badge[lang]}
                      </div>
                    )}

                    <div>
                      <h3
                        className={`text-lg sm:text-xl font-bold ${
                          isPopular ? "text-white" : "text-[#241C21]"
                        }`}
                      >
                        {tier.name[lang]}
                      </h3>

                      <div className="mt-4 flex flex-wrap items-baseline gap-2 tabular-nums">
                        <span
                          className={`text-3xl sm:text-4xl font-bold ${
                            isPopular ? "text-white" : "text-[#650039]"
                          }`}
                        >
                          {tier.price[lang]}
                        </span>
                        <span
                          className={`text-xs font-medium ${
                            isPopular ? "text-white/80" : "text-[#665C62]"
                          }`}
                        >
                          {lang === "bn" ? "/ এককালীন" : "/ one-time"}
                        </span>
                      </div>

                      <div
                        className={`mt-2 inline-flex items-center gap-1.5 text-xs font-semibold ${
                          isPopular ? "text-[#FF6633]" : "text-[#650039]"
                        }`}
                      >
                        <Clock className="h-3.5 w-3.5" />
                        <span>{tier.deliveryTime[lang]}</span>
                      </div>

                      <p
                        className={`mt-4 text-xs sm:text-sm leading-relaxed ${
                          isPopular ? "text-white/85" : "text-[#665C62]"
                        }`}
                      >
                        {tier.description[lang]}
                      </p>

                      <hr
                        className={`my-6 ${
                          isPopular ? "border-white/20" : "border-[#DAD1C7]"
                        }`}
                      />

                      <ul
                        className={`space-y-3 text-xs sm:text-sm ${
                          isPopular ? "text-white/95" : "text-[#241C21]"
                        }`}
                      >
                        {tier.features[lang].map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5">
                            <CheckCircle2
                              className={`h-4 w-4 shrink-0 mt-0.5 ${
                                isPopular
                                  ? "text-[#FF6633]"
                                  : "text-[#146649]"
                              }`}
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 space-y-2.5 pt-4">
                      <a
                        href={whatsappDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-2 rounded-[6px] px-5 py-3.5 text-sm font-semibold transition-all ${
                          isPopular
                            ? "bg-white hover:bg-[#FBF6EC] text-[#650039] font-bold"
                            : "bg-[#650039] hover:bg-[#4D002B] text-white"
                        }`}
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>
                          {lang === "bn"
                            ? "এই প্যাকেজটি নিন"
                            : "Choose this plan"}
                        </span>
                      </a>

                      <a
                        href="#order-now"
                        onClick={() => setSelectedPlanId(tier.id)}
                        className={`w-full inline-flex items-center justify-center gap-1.5 rounded-[6px] px-4 py-2.5 text-xs font-semibold transition-colors ${
                          isPopular
                            ? "border border-white/25 bg-white/10 hover:bg-white/15 text-white"
                            : "border border-[#DAD1C7] bg-white hover:border-[#650039] text-[#241C21]"
                        }`}
                      >
                        <span>
                          {lang === "bn"
                            ? "নিচে অ্যাড-অন যোগ করুন"
                            : "Customize below"}
                        </span>
                        <ArrowDown className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 11. INTERACTIVE STORE PROPOSAL CONFIGURATOR */}
        <WhatsAppOrderConfigurator
          lang={lang}
          selectedPlanId={selectedPlanId}
          onSelectPlan={setSelectedPlanId}
        />

        {/* 11.5 MINIMAL OTHER CUSTOM ENGINEERING SERVICES SECTION */}
        <OtherServicesSection lang={lang} />

        {/* 11.6 SELECTED LIVE WORK & PORTFOLIO SECTION */}
        <SelectedWorkSection lang={lang} />

        {/* 12. FAQ SECTION */}
        <section
          id="faq"
          className="py-20 sm:py-28 bg-white border-t border-[#DAD1C7]"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal variant="fade-up" className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#650039]">
                {lang === "bn" ? "ফাউন্ডারদের সাধারণ প্রশ্ন" : "Founder FAQs"}
              </p>
              <h2 className="brand-title mt-3 text-2xl sm:text-[40px] sm:leading-[48px] font-bold text-[#241C21]">
                {lang === "bn"
                  ? "স্কেল করার আগে যে প্রশ্নগুলো আপনার মনে ঘুরছে"
                  : "Straight answers before you make the move"}
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={80} className="space-y-3">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={item.q.en}
                    className={`rounded-[8px] border transition-colors overflow-hidden ${
                      isOpen
                        ? "border-[#650039] bg-[#FBF6EC]"
                        : "border-[#DAD1C7] bg-white hover:border-[#650039]/60"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-sm sm:text-base font-semibold text-[#241C21]"
                    >
                      <span>{item.q[lang]}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-[#665C62] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#650039]" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={
                        isOpen
                          ? "px-6 pb-5 text-xs sm:text-sm text-[#665C62] leading-relaxed animate-panel-reveal"
                          : "hidden"
                      }
                    >
                      {item.a[lang]}
                    </div>
                  </div>
                );
              })}
            </ScrollReveal>

            {/* Crawlable Merchant & Website Development Summary Hub */}
            <ScrollReveal
              variant="fade-in"
              delay={120}
              className="mt-14 pt-10 border-t border-[#DAD1C7] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#665C62] leading-relaxed"
            >
              <div id="buy-ecommerce-website-bangladesh">
                <h3 className="font-bold text-[#241C21] mb-1.5 flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-[#650039]" />
                  <span>
                    {lang === "bn"
                      ? "ওয়েবসাইট বা ই-কমার্স স্টোর বানাতে চান?"
                      : "Build Your Website or E-Commerce Store"}
                  </span>
                </h3>
                <p>
                  {lang === "bn"
                    ? "বাংলাদেশে দ্রুতগতির ই-কমার্স ওয়েবসাইট (ফুড, ফ্যাশন, বিউটি, আইটি ও সুপার শপ), কর্পোরেট ওয়েবসাইট, পোর্টফোলিও এবং কাস্টম সফটওয়্যার তৈরির নির্ভরযোগ্য ঠিকানা NexteraX Digital।"
                    : "NexteraX Digital builds sub-second Next.js 15 online stores, business websites, personal & corporate portfolios, CRMs, and ERP platforms across Bangladesh."}
                </p>
                <div className="mt-2 flex flex-wrap gap-3 font-semibold text-[#650039]">
                  <Link href="/live-store/" className="hover:underline">
                    {lang === "bn" ? "লাইভ ডেমো স্টোর →" : "Live Demo Store →"}
                  </Link>
                  <Link href="/services/" className="hover:underline">
                    {lang === "bn" ? "কাস্টম ওয়েবসাইট ও CRM →" : "Custom Web & CRM →"}
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#241C21] mb-1.5 flex items-center gap-1.5">
                  <ShoppingBag className="h-3.5 w-3.5 text-[#650039]" />
                  <span>
                    {lang === "bn"
                      ? "দেশীয় কুরিয়ার, বিকাশ ও ১৫-সেকেন্ড COD"
                      : "BD Couriers, bKash & 15-Sec COD"}
                  </span>
                </h3>
                <p>
                  {lang === "bn"
                    ? "Steadfast, Pathao, RedX, eCourier, Paperfly কুরিয়ার এবং bKash, Nagad, SSLCommerz ও Facebook Server CAPI সরাসরি যুক্ত করার সুবিধা।"
                    : "Native Bangladeshi Cash-on-Delivery, Steadfast/Pathao/RedX courier APIs, bKash/Nagad/SSLCommerz, and Meta Server CAPI built in."}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#241C21] mb-1.5 flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-[#650039]" />
                  <span>
                    {lang === "bn"
                      ? "১০০% নিজস্ব ডোমেইন ও ০% কমিশন"
                      : "100% Owned Domain & 0% Commission"}
                  </span>
                </h3>
                <p>
                  {lang === "bn"
                    ? "মাসিক ডলার ভাড়া বা সেলস কমিশন ছাড়াই এককালীন ইনভেস্টমেন্টে আপনার নিজস্ব ডোমেইন ও আলাদা PostgreSQL 17 ডাটাবেজে পূর্ণ মালিকানা।"
                    : "Own your custom domain and isolated PostgreSQL 17 database outright with 0% monthly sales commission forever."}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
<ShopOwnerAdvisorBot
          lang={lang}
          onLaunchPreset={launchLiveStorePreset}
        />
        {/* 13. BURGUNDY CLOSING CAMPAIGN & FOUNDER PANEL — Brand Manual p.15, p.24, p.31, p.35 */}
        <section className="py-16 sm:py-24 bg-[#FBF6EC] border-t border-[#DAD1C7]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal
              variant="scale-up"
              className="surface-dark rounded-[12px] bg-[#650039] text-white p-7 sm:p-12 shadow-soft-xl relative overflow-hidden"
            >
              {/* Solid White Reverse Signature + Three Coral Dots */}
              <div className="flex items-center justify-between border-b border-white/20 pb-6 mb-8">
                <img
                  src="/banijjo-logo-horizontal-white.png"
                  alt="Banijjo Studio"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
                <BrandThreeDots size={8} color="#FF6633" />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                  <img
                    src="/towhidul-islam-founder.png"
                    alt="Towhidul Islam — Founder & CEO, NexteraX Digital"
                    loading="lazy"
                    decoding="async"
                    className="h-20 w-20 rounded-[8px] object-cover border-2 border-white/30 shrink-0"
                  />
                  <div className="space-y-2">
                    <span className="inline-block rounded-[4px] bg-[#FF6633] px-2.5 py-0.5 text-[11px] font-bold text-[#241C21]">
                      {lang === "bn"
                        ? "ফাউন্ডার টু ফাউন্ডার"
                        : "Founder to Founder"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {lang === "bn"
                        ? "আপনার পরবর্তী ১০,০০০ অর্ডারের ফ্ল্যাগশিপ স্টোরটি আজই শুরু করুন"
                        : "Ready to build a brand that scales past 10,000 orders?"}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-xl">
                      {lang === "bn"
                        ? "কোনো জেনেরিক সেলস কল নয় — আমি Towhidul Islam (Founder & CEO, NexteraX Digital) এবং আমাদের কোর ইঞ্জিনিয়ারিং টিম সরাসরি আপনার বর্তমান অ্যাড ফানেল ও ব্র্যান্ড গোল বুঝে লাইভ ডেমো দেখাব।"
                        : "Skip generic sales reps. Speak directly with Towhidul Islam (Founder & CEO, NexteraX Digital) and our core engineers for a live 1-on-1 store & admin walkthrough."}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full sm:w-auto tabular-nums">
                  <a
                    href={generalWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-white hover:bg-[#FBF6EC] px-6 py-3.5 text-sm font-bold text-[#650039] transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp: {PHONE_DISPLAY}</span>
                  </a>
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="inline-flex items-center justify-center gap-2 rounded-[6px] border border-white/30 bg-white/10 hover:bg-white/20 px-5 py-3.5 text-sm font-semibold text-white transition"
                  >
                    <Phone className="h-4 w-4 text-[#FF6633]" />
                    <span>
                      {lang === "bn" ? "ফোন করুন" : "Call Directly"}
                    </span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Clean Brand Footer on White */}
      <footer className="border-t border-[#DAD1C7] bg-white pt-14 pb-10 text-xs text-[#665C62]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#DAD1C7]">
            <div className="md:col-span-5 space-y-3.5">
              <img
                src="/banijjo-logo-horizontal.png"
                alt="Banijjo Studio"
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <p className="text-xs text-[#665C62] leading-relaxed max-w-sm">
                {lang === "bn"
                  ? "নতুন প্রজন্মের D2C ব্র্যান্ড ও টপ সেলারদের জন্য তৈরি হাই-পারফরম্যান্স ই-কমার্স ইঞ্জিন। শুধু পেজ নয়, নিজের ব্র্যান্ড গড়ুন।"
                  : "High-performance white-label commerce platform engineered for next-gen D2C brands & top sellers by NexteraX Digital."}
              </p>
              <BrandThreeDots size={6} color="#FF6633" />
            </div>

            <div className="md:col-span-2 space-y-2">
              <div className="font-bold text-[#241C21]">
                {lang === "bn" ? "প্ল্যাটফর্ম" : "Platform"}
              </div>
              <ul className="space-y-1.5">
                <li>
                  <a href="#real-ui-preview" className="hover:text-[#650039]">
                    {lang === "bn" ? "দোকান ও ওয়ার্কস্পেস" : "Workspace"}
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-[#650039]">
                    {lang === "bn" ? "পণ্য ও সুবিধা" : "Product"}
                  </a>
                </li>
                <li>
                  <a href="#presets" className="hover:text-[#650039]">
                    {lang === "bn" ? "দোকানের থিম" : "Themes"}
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-[#650039]">
                    {lang === "bn" ? "প্রাইসিং" : "Pricing"}
                  </a>
                </li>
                <li>
                  <a href="#our-work" className="hover:text-[#650039]">
                    {lang === "bn" ? "আমাদের কাজ" : "Selected Work"}
                  </a>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#650039]">
                    {lang === "bn" ? "অন্যান্য সার্ভিস" : "Other Services"}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-2">
              <div className="font-bold text-[#241C21]">
                {lang === "bn" ? "লাইভ দোকান" : "Live Demos"}
              </div>
              <ul className="space-y-1.5">
                {[
                  {
                    code: "food" as PresetCode,
                    bn: "অর্গানিক ফুড শপ",
                    en: "Organic Food Shop",
                  },
                  {
                    code: "fashion" as PresetCode,
                    bn: "পোশাক ও বুটিক শপ",
                    en: "Clothing & Boutique",
                  },
                  {
                    code: "cosmetics" as PresetCode,
                    bn: "স্কিনকেয়ার ও বিউটি",
                    en: "Skincare & Beauty",
                  },
                  {
                    code: "tech" as PresetCode,
                    bn: "আইটি ও গ্যাজেট শপ",
                    en: "IT & Gadgets Shop",
                  },
                  {
                    code: "supershop" as PresetCode,
                    bn: "সুপার শপ ও মার্ট",
                    en: "Super Shop & Mart",
                  },
                  {
                    code: "electronics" as PresetCode,
                    bn: "হোম অ্যাপ্লায়েন্স",
                    en: "Home Appliances",
                  },
                ].map((item) => (
                  <li key={item.code}>
                    <button
                      type="button"
                      onClick={() => launchLiveStorePreset(item.code)}
                      className="hover:text-[#650039] text-left"
                    >
                      {lang === "bn" ? item.bn : item.en}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 space-y-2 tabular-nums">
              <div className="font-bold text-[#241C21]">
                {lang === "bn" ? "যোগাযোগ" : "Contact"}
              </div>
              <p>
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#650039] hover:underline"
                >
                  WhatsApp: {PHONE_DISPLAY}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="hover:text-[#241C21]"
                >
                  {EMAIL_ADDRESS}
                </a>
              </p>
              <p className="text-[#665C62]">
                NexteraX Digital • Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#665C62]">
            <span>
              © {new Date().getFullYear()} Banijjo Studio — A NexteraX Digital
              Product.
            </span>
            <span>Merchant commerce / Bangladesh</span>
          </div>
        </div>
      </footer>

      {/* Clean Burgundy Floating Action */}
      <a
        href={generalWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="surface-dark fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-4 sm:px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-soft-xl transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="h-4 w-4 text-[#FF6633]" />
        <span className="hidden sm:inline">
          {lang === "bn" ? "WhatsApp-এ কথা বলুন" : "Chat on WhatsApp"}
        </span>
      </a>

      {/* Optional Demo Modal */}
      {demoModalTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#241C21]/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-[12px] border border-[#DAD1C7] bg-white p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setDemoModalTarget(null)}
              className="absolute top-4 right-4 rounded-[6px] bg-[#FBF6EC] hover:bg-[#DAD1C7]/50 p-2 text-[#241C21]"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="inline-flex items-center gap-2 rounded-[4px] bg-[#FF6633] px-3 py-1 text-xs font-bold text-[#241C21]">
              <MonitorPlay className="h-3.5 w-3.5" />
              <span>{demoModalTarget}</span>
            </span>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#241C21]">
              {lang === "bn"
                ? "লাইভ ওয়ার্কস্পেস লিংক নিন"
                : "Get Live Workspace Access"}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#665C62] leading-relaxed">
              {lang === "bn"
                ? "WhatsApp-এ মেসেজ দিলে আমরা সাথে সাথে আপনাকে লাইভ লিংক ও লগইন তথ্য পাঠিয়ে দেব।"
                : "Message us on WhatsApp and we will share the live workspace link and login details right away."}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={buildWhatsAppUrl(
                  `Hello Banijjo Studio! Please share the *Live Demo & Login* for: ${demoModalTarget}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setDemoModalTarget(null)}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-5 py-3.5 text-xs sm:text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                <span>
                  {lang === "bn"
                    ? "WhatsApp-এ ডেমো লিংক নিন"
                    : "Request Access on WhatsApp"}
                </span>
              </a>
              <button
                type="button"
                onClick={() => setDemoModalTarget(null)}
                className="rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#241C21]"
              >
                {lang === "bn" ? "বন্ধ করুন" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
