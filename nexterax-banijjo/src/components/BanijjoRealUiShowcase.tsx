"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CornerDownRight,
  Edit3,
  Eye,
  FolderTree,
  GripVertical,
  History,
  Home,
  LayoutDashboard,
  Lock,
  Menu as MenuIcon,
  Monitor,
  MonitorPlay,
  Package,
  Paintbrush,
  Palette,
  PhoneCall,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Store,
  TicketPercent,
  Truck,
  Users,
} from "lucide-react";
import type { Lang } from "@/data/banijjo-data";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BrandThreeDots } from "@/components/BrandThreeDots";

const REAL_SEED_PRODUCTS = [
  {
    name: "সুন্দরবনের খাঁটি খলিশা ফুলের মধু",
    enName: "Sundarban Khalisha Honey",
    unit: "500g / 1kg Jar",
    price: "৳ ৫৯০",
    oldPrice: "৳ ৬৫০",
    badge: "খলিশা মৌসুম",
    image: "/images/store/sundarban-honey-hero.jpg",
  },
  {
    name: "মদিনার প্রিমিয়াম আজওয়া খেজুর",
    enName: "Madinah Premium Ajwa Dates",
    unit: "500g / 1kg Box",
    price: "৳ ৮৮০",
    oldPrice: "৳ ৯৫০",
    badge: "Grade A",
    image: "/images/store/madinah-dates.jpg",
  },
  {
    name: "তেঁতুল কাঠের ঘানি ভাঙা সরিষার তেল",
    enName: "Wood-Pressed Mustard Oil",
    unit: "1 Liter Bottle",
    price: "৳ ৩১০",
    oldPrice: "৳ ৩৪০",
    badge: "Cold-Pressed",
    image: "/images/store/mustard-oil.jpg",
  },
  {
    name: "পাবনার খাঁটি দানাদার গাওয়া ঘি",
    enName: "Pabna Pure Desi Ghee",
    unit: "500g Glass Jar",
    price: "৳ ৭৬০",
    oldPrice: "৳ ৮২০",
    badge: "১০০% খাঁটি",
    image: "/images/store/pabna-ghee.jpg",
  },
];

const WORKSPACE_NAV_ITEMS = [
  { labelBn: "ওভারভিউ", labelEn: "Overview", icon: LayoutDashboard, active: false },
  { labelBn: "অর্ডার তালিকা", labelEn: "Orders", icon: ShoppingCart, active: true },
  { labelBn: "পণ্য ও স্টক", labelEn: "Products", icon: Package, active: false },
  { labelBn: "ক্যাটাগরি ট্রি", labelEn: "Categories", icon: FolderTree, active: false },
  { labelBn: "ক্রেতা তালিকা", labelEn: "Customers", icon: Users, active: false },
  { labelBn: "কুপন ও জোন", labelEn: "Discounts", icon: TicketPercent, active: false },
  {
    labelBn: "স্টোর বিল্ডার",
    labelEn: "Store Builder",
    icon: Paintbrush,
    active: false,
    toBuilder: true,
  },
];

const SAMPLE_ORDERS = [
  {
    ref: "#1008",
    customerBn: "মো: রাহাত ইসলাম • ধানমন্ডি",
    customerEn: "Md. Rahat Islam • Dhanmondi",
    statusBn: "পরিশোধিত (Paid)",
    statusEn: "Paid",
    statusTone: "text-[#146649] bg-[#EAF4F0]",
    total: "BDT 1,450",
  },
  {
    ref: "#1007",
    customerBn: "তাসনিম জাহান • উত্তরা",
    customerEn: "Tasnim Jahan • Uttara",
    statusBn: "অপেক্ষমাণ (Pending COD)",
    statusEn: "Pending",
    statusTone: "text-[#805100] bg-[#FDF5E6]",
    total: "BDT 890",
  },
  {
    ref: "#1006",
    customerBn: "আরিফুল হক • চট্টগ্রাম",
    customerEn: "Ariful Haque • Chattogram",
    statusBn: "পরিশোধিত (Paid)",
    statusEn: "Paid",
    statusTone: "text-[#146649] bg-[#EAF4F0]",
    total: "BDT 2,200",
  },
  {
    ref: "#1005",
    customerBn: "নুসরাত সুলতানা • সিলেট",
    customerEn: "Nusrat Sultana • Sylhet",
    statusBn: "যাচাই চলছে (In review)",
    statusEn: "In review",
    statusTone: "text-[#245C82] bg-[#EBF2F7]",
    total: "BDT 650",
  },
];

const BUILDER_SECTIONS = [
  {
    id: "hero",
    t: "1. Hero Banner Slider",
    bn: "১. হিরো ব্যানার ও শিরোনাম",
    sub: "sec-hero • Visible",
  },
  {
    id: "highlights",
    t: "2. Delivery & Return Promises",
    bn: "২. ডেলিভারি ও রিটার্ন তথ্য",
    sub: "sec-highlights • 4 Columns",
  },
  {
    id: "categories",
    t: "3. Shop Category Grid",
    bn: "৩. ক্যাটাগরি গ্রিড",
    sub: "sec-categories • 6 Selected",
  },
  {
    id: "products",
    t: "4. Featured Products",
    bn: "৪. জনপ্রিয় পণ্য তালিকা",
    sub: "sec-products • 8 Items",
  },
  {
    id: "promo",
    t: "5. Seasonal Promotion",
    bn: "৫. বিশেষ অফার কলআউট",
    sub: "sec-promo • Code: WELCOME10",
  },
];

export function BanijjoRealUiShowcase({
  lang,
  onOpenLiveTest,
}: {
  lang: Lang;
  onOpenLiveTest: (label: string) => void;
}) {
  const [activeScreen, setActiveScreen] = useState<
    "storefront" | "admin" | "builder" | "checkout"
  >("storefront");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBuilderSection, setSelectedBuilderSection] =
    useState<string>("hero");

  const tabs = [
    {
      id: "storefront" as const,
      icon: Store,
      labelBn: "ফ্ল্যাগশিপ স্টোরফ্রন্ট",
      labelEn: "Flagship Storefront",
      url: "yourbrand.com",
      captionBn:
        "০.৮ সেকেন্ডে ওপেন হওয়া প্রিমিয়াম স্টোরফ্রন্ট—যা প্রথম ভিজিটেই ক্রেতার মনে বড় ব্র্যান্ডের বিশ্বাস তৈরি করে।",
      captionEn:
        "Sub-second storefront experience designed to turn first-time ad clicks into loyal buyers.",
    },
    {
      id: "admin" as const,
      icon: LayoutDashboard,
      labelBn: "অর্ডার ও COD কমান্ড সেন্টার",
      labelEn: "COD Command Center",
      url: "yourbrand.com/admin/orders",
      captionBn:
        "প্লেসড অর্ডার, হাতে পাওয়া Paid ক্যাশ এবং কুরিয়ারে বকেয়া COD—প্রতিটি টাকার ক্রিস্টাল-ক্লিয়ার লাইভ হিসাব।",
      captionEn:
        "Track Placed Value, Paid Cash, and Pending Courier COD separately with zero guesswork.",
    },
    {
      id: "builder" as const,
      icon: Paintbrush,
      labelBn: "নো-কোড ব্র্যান্ড স্টুডিও",
      labelEn: "No-Code Studio",
      url: "yourbrand.com/admin/builder",
      captionBn:
        "ডেভেলপার ছাড়াই মাত্র ৫ মিনিটে নতুন কালেকশন বা ফ্ল্যাশ-সেল ক্যাম্পেইন সাজিয়ে লাইভ করুন।",
      captionEn:
        "Launch new drops, rearrange 12+ blocks, and preview across mobile & desktop in minutes.",
    },
    {
      id: "checkout" as const,
      icon: ShoppingBag,
      labelBn: "১৫-সেকেন্ড COD চেকআউট",
      labelEn: "15-Sec COD Flow",
      url: "yourbrand.com/checkout",
      captionBn:
        "পাসওয়ার্ড বা সাইনআপের ঝামেলা ছাড়াই নাম, মোবাইল ও ঠিকানা দিয়ে ১৫ সেকেন্ডে অর্ডার কনফার্মেশন।",
      captionEn:
        "Zero forced signups — verified BD mobile numbers, smart delivery zones, and instant confirmation.",
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeScreen) || tabs[0];

  return (
    <section
      id="real-ui-preview"
      className="py-20 sm:py-28 bg-[#FBF6EC] border-b border-[#DAD1C7]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal
          variant="fade-up"
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#650039]">
            {lang === "bn" ? "ইনসাইড দ্য কমান্ড সেন্টার" : "Inside the Command Center"}
          </p>
          <h2 className="brand-title mt-3 text-2xl sm:text-[36px] sm:leading-[46px] font-bold text-[#241C21]">
            {lang === "bn"
              ? "সামনে প্রিমিয়াম শপিং অভিজ্ঞতা, পেছনে পাওয়ারফুল বিজনেস কন্ট্রোল"
              : "Luxury storefront in front. Ruthless clarity in the back."}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#665C62] leading-relaxed">
            {lang === "bn"
              ? "ক্রেতা কীভাবে আপনার ব্র্যান্ডে শপিং করবেন এবং আপনি কীভাবে শত শত ডেইলি অর্ডার এক স্ক্রিন থেকে কন্ট্রোল করবেন—লাইভ প্রিভিউতে দেখুন।"
              : "Switch between the 4 core interfaces that power Bangladesh’s fastest-growing online brands."}
          </p>
        </ScrollReveal>

        {/* Segmented Control Tabs — Burgundy Reserved for Active Task (Manual p.16) */}
        <ScrollReveal
          variant="fade-up"
          delay={80}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center gap-1.5 rounded-[8px] border border-[#DAD1C7] bg-white p-1.5 w-full sm:w-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeScreen === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveScreen(tab.id)}
                  className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-[6px] px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    active
                      ? "bg-[#650039] text-white shadow-2xs"
                      : "text-[#665C62] hover:text-[#241C21] hover:bg-[#FBF6EC]"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      active ? "text-white" : "text-[#665C62]"
                    }`}
                  />
                  <span>{lang === "bn" ? tab.labelBn : tab.labelEn}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Browser Window Panel */}
        <ScrollReveal
          variant="scale-up"
          delay={140}
          className="rounded-[12px] border border-[#DAD1C7] bg-white shadow-soft-xl overflow-hidden"
        >
          {/* Minimal Charcoal Chrome */}
          <div className="surface-dark flex flex-wrap items-center justify-between gap-3 bg-[#241C21] px-4 sm:px-5 py-3 text-xs text-white/80">
            <div className="flex items-center gap-3 min-w-0">
              <BrandThreeDots size={7} color="#FF6633" />
              <div className="flex items-center gap-1.5 rounded-[6px] bg-white/10 px-3 py-1 text-[11px] text-white font-mono truncate">
                <ShieldCheck className="h-3.5 w-3.5 text-[#FF6633] shrink-0" />
                <span className="truncate">https://{currentTab.url}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                onOpenLiveTest("Banijjo Studio Interactive Storefront")
              }
              className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#FF6633] hover:bg-[#ff774a] px-3 py-1.5 text-[11px] font-bold text-[#241C21] transition shrink-0"
            >
              <MonitorPlay className="h-3.5 w-3.5" />
              <span>
                {lang === "bn"
                  ? "লাইভ দোকান চালিয়ে দেখুন"
                  : "Explore Live Store"}
              </span>
            </button>
          </div>

          {/* SCREEN 1: PUBLIC STOREFRONT */}
          {activeScreen === "storefront" && (
            <div
              key="storefront"
              className="bg-[#FBF6EC] text-[#241C21] animate-panel-reveal"
            >
              <div className="bg-[#650039] px-4 py-1.5 text-[11px] font-medium text-white">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
                  <p>
                    সারাদেশে ক্যাশ অন ডেলিভারি • ১৫০০+ টাকায় ঢাকা সিটিতে ফ্রি ডেলিভারি
                  </p>
                  <div className="hidden sm:flex items-center gap-4 text-white/85">
                    <span className="inline-flex items-center gap-1">
                      <Truck className="h-3.5 w-3.5" /> অর্ডার ট্র্যাক করুন
                    </span>
                    <span className="tabular-nums">01878-601610</span>
                  </div>
                </div>
              </div>

              <div className="border-b border-[#DAD1C7] bg-white px-4 sm:px-6 py-3.5">
                <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen((prev) => !prev)}
                      className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] text-[#241C21]"
                      aria-label="Toggle Mobile Category Menu"
                    >
                      <MenuIcon className="h-5 w-5" />
                    </button>
                    <img
                      src="/banijjo-favicon.png"
                      alt="Shop Emblem"
                      className="h-9 w-9 rounded-[6px] object-contain border border-[#DAD1C7]"
                    />
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#241C21]">
                        বাণিজ্য অর্গানিক ফুড
                      </div>
                      <div className="hidden sm:block text-[11px] text-[#665C62]">
                        খাঁটি ও প্রাকৃতিক পণ্যের বিশ্বস্ত দোকান
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 max-w-md hidden md:flex items-center rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] px-3.5 py-2 text-xs text-[#665C62]">
                    <Search className="h-4 w-4 text-[#650039] mr-2" />
                    <span>পণ্য খুঁজুন (খলিশা মধু, আজওয়া খেজুর, ঘি)...</span>
                  </div>

                  <div className="flex items-center gap-2 tabular-nums">
                    <div className="hidden sm:flex items-center gap-1.5 rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] px-3 py-2 text-xs font-semibold text-[#241C21]">
                      <PhoneCall className="h-3.5 w-3.5 text-[#650039]" />
                      <span>01878-601610</span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLiveTest("Banijjo Studio Live Cart")
                      }
                      className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-3.5 py-2 text-xs font-semibold text-white transition"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>কার্ট (২)</span>
                      <span className="hidden sm:inline rounded-[4px] bg-white/15 px-1.5 py-0.5 text-[10px]">
                        ৳ ১,৪৭০
                      </span>
                    </button>
                  </div>
                </div>

                <div className="hidden md:flex mx-auto max-w-6xl mt-3 pt-2.5 border-t border-[#DAD1C7]/60 flex-wrap items-center gap-6 text-xs font-semibold text-[#665C62]">
                  <span className="text-[#650039] font-bold border-b-2 border-[#650039] pb-1">
                    হোম
                  </span>
                  <span>সকল পণ্য</span>
                  <span className="inline-flex items-center gap-1 text-[#241C21]">
                    <span>খাঁটি মধু</span>
                    <ChevronDown className="h-3.5 w-3.5 text-[#665C62]" />
                  </span>
                  <span>খেজুর ও বাদাম</span>
                  <span>তেল ও দেশি ঘি</span>
                  <span>অর্গানিক মশলা</span>
                </div>

                <div className="md:hidden mt-2.5 pt-2 border-t border-[#DAD1C7]/60 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#FBF6EC] border border-[#DAD1C7] px-3 py-1.5 text-xs font-semibold text-[#241C21]"
                  >
                    <MenuIcon className="h-3.5 w-3.5" />
                    <span>ক্যাটাগরি মেনু</span>
                    {mobileMenuOpen ? (
                      <ChevronUp className="h-3.5 w-3.5" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>

                {mobileMenuOpen && (
                  <div className="md:hidden mt-3 rounded-[8px] border border-[#DAD1C7] bg-[#FBF6EC] p-3 space-y-2 text-xs">
                    <div className="inline-flex w-full items-center gap-1.5 font-semibold text-[#650039] px-2 py-1 rounded-[4px] bg-[#F6EBF1]">
                      <Home className="h-3.5 w-3.5" />
                      <span>হোম (Home)</span>
                    </div>
                    <div className="px-2 py-1 font-semibold text-[#241C21]">
                      খাঁটি মধু
                      <div className="pl-3 mt-1 space-y-1 border-l-2 border-[#DAD1C7] text-[11px] text-[#665C62]">
                        <div className="flex items-center gap-1">
                          <CornerDownRight className="h-3 w-3 text-[#650039]" />
                          <span>সুন্দরবনের খলিশা মধু</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
                <div className="rounded-[12px] bg-[#650039] p-6 sm:p-8 text-white grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 space-y-3">
                    <span className="inline-block rounded-[4px] bg-[#FF6633] px-2.5 py-1 text-[11px] font-bold text-[#241C21]">
                      ১০০% খাঁটি ও প্রাকৃতিক
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                      প্রকৃতির আসল স্বাদ এখন সরাসরি আপনার ঘরে
                    </h3>
                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-xl">
                      সুন্দরবনের প্রাকৃতিক চাকের মধু, মদিনার আজওয়া খেজুর এবং পাবনার খাঁটি গাওয়া ঘি — পণ্য হাতে পেয়ে মূল্য পরিশোধের সুবিধা।
                    </p>
                    <div className="pt-2 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          onOpenLiveTest("Banijjo Studio Live Storefront")
                        }
                        className="inline-flex items-center gap-1.5 rounded-[6px] bg-white px-4 py-2.5 text-xs font-bold text-[#650039] hover:bg-[#FBF6EC] transition"
                      >
                        <span>সব পণ্য দেখুন</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-2 gap-3 tabular-nums">
                    {REAL_SEED_PRODUCTS.slice(0, 2).map((p) => (
                      <div
                        key={p.name}
                        onClick={() =>
                          onOpenLiveTest("Banijjo Studio Live Storefront")
                        }
                        className="cursor-pointer rounded-[8px] bg-white p-2.5 text-[#241C21] shadow-sm transition hover:-translate-y-0.5"
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-24 w-full rounded-[6px] object-cover"
                        />
                        <div className="mt-2 text-[11px] font-semibold line-clamp-1">
                          {p.name}
                        </div>
                        <div className="text-xs font-bold text-[#650039] mt-0.5">
                          {p.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Grid */}
                <div className="mt-7">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#241C21]">
                        জনপ্রিয় পণ্যসমূহ
                      </h4>
                      <p className="text-xs text-[#665C62]">
                        যেকোনো পণ্যে ক্লিক করে লাইভ দোকান চালিয়ে দেখুন
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLiveTest("Banijjo Studio Live Storefront")
                      }
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#650039] hover:underline"
                    >
                      <span>সব পণ্য</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 tabular-nums">
                    {REAL_SEED_PRODUCTS.map((prod) => (
                      <div
                        key={prod.name}
                        onClick={() =>
                          onOpenLiveTest("Banijjo Studio Live Storefront")
                        }
                        className="cursor-pointer group rounded-[8px] border border-[#DAD1C7] bg-white overflow-hidden transition hover:border-[#650039] flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative h-32 sm:h-40 w-full bg-[#FBF6EC] overflow-hidden">
                            <img
                              src={prod.image}
                              alt={prod.name}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <span className="absolute top-2.5 left-2.5 rounded-[4px] bg-white px-2 py-0.5 text-[10px] font-semibold text-[#241C21] shadow-2xs">
                              {prod.badge}
                            </span>
                          </div>
                          <div className="p-3 sm:p-3.5">
                            <div className="text-[11px] font-medium text-[#665C62]">
                              {prod.unit}
                            </div>
                            <h5 className="text-xs sm:text-sm font-semibold text-[#241C21] mt-0.5 line-clamp-2">
                              {prod.name}
                            </h5>
                          </div>
                        </div>

                        <div className="px-3 sm:px-3.5 pb-3 sm:pb-3.5 pt-2 border-t border-[#DAD1C7]/60">
                          <div className="flex items-baseline justify-between mb-2.5">
                            <span className="text-sm sm:text-base font-bold text-[#650039]">
                              {prod.price}
                            </span>
                            <span className="text-[11px] text-[#665C62] line-through">
                              {prod.oldPrice}
                            </span>
                          </div>
                          <div className="rounded-[6px] bg-[#650039] group-hover:bg-[#4D002B] py-2 text-center text-[11px] font-semibold text-white transition">
                            অর্ডার করুন
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 2: MERCHANT WORKSPACE (Exact Brand Identity Manual p.33 Layout!) */}
          {activeScreen === "admin" && (
            <div
              key="admin"
              className="flex min-h-[520px] bg-[#FBF6EC] text-[#241C21] animate-panel-reveal"
            >
              {/* Clean Ivory Sidebar with Official Horizontal Logo & Burgundy Active Pill */}
              <div className="hidden md:flex w-60 shrink-0 flex-col bg-[#FBF6EC] border-r border-[#DAD1C7] p-4 justify-between">
                <div>
                  <div className="px-2 pb-5 border-b border-[#DAD1C7]">
                    <img
                      src="/banijjo-logo-horizontal.png"
                      alt="Banijjo Studio"
                      className="h-7 w-auto object-contain"
                    />
                  </div>

                  <div className="mt-4 space-y-1 text-xs font-semibold">
                    {WORKSPACE_NAV_ITEMS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.labelEn}
                          type="button"
                          onClick={() =>
                            item.toBuilder
                              ? setActiveScreen("builder")
                              : undefined
                          }
                          className={`w-full flex items-center gap-2.5 rounded-[6px] px-3 py-2.5 text-left transition ${
                            item.active
                              ? "bg-[#650039] text-white font-bold"
                              : "text-[#241C21] hover:bg-white"
                          }`}
                        >
                          <Icon
                            className={`h-4 w-4 shrink-0 ${
                              item.active ? "text-white" : "text-[#665C62]"
                            }`}
                          />
                          <span>
                            {lang === "bn" ? item.labelBn : item.labelEn}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-[#DAD1C7] pt-3.5 px-2 text-xs">
                  <div className="font-semibold text-[#241C21]">
                    বাণিজ্য অর্গানিক ফুড
                  </div>
                  <div className="text-[11px] text-[#665C62] mt-0.5">
                    Shop Owner • 2FA Active
                  </div>
                </div>
              </div>

              {/* Generous White Data Surface (Manual p.16 & p.33) */}
              <div className="flex-1 bg-white p-6 sm:p-9 space-y-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#650039]">
                      {lang === "bn" ? "লাইভ অর্ডার ও ক্যাশফ্লো" : "Orders & Cashflow"}
                    </h3>
                    <p className="text-xs text-[#665C62] mt-1">
                      {lang === "bn"
                        ? "বাণিজ্য অর্গানিক ফুড • রিয়েল-টাইম আপডেট"
                        : "Banijjo Organic Food • Real-time sync"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setActiveScreen("builder")}
                      className="rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] hover:border-[#650039] px-3.5 py-2 text-xs font-semibold text-[#241C21] transition"
                    >
                      {lang === "bn" ? "স্টোর বিল্ডার" : "Store Builder"}
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLiveTest("Banijjo Merchant Workspace")
                      }
                      className="rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-4 py-2 text-xs font-semibold text-white transition"
                    >
                      {lang === "bn" ? "+ নতুন অর্ডার" : "Add order"}
                    </button>
                  </div>
                </div>

                {/* 4 Clean Summary Metric Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 tabular-nums">
                  <div className="rounded-[8px] border border-[#DAD1C7] bg-[#FBF6EC] p-4">
                    <div className="text-xs font-medium text-[#665C62]">
                      {lang === "bn" ? "মোট অর্ডার মূল্য" : "Placed Value"}
                    </div>
                    <div className="mt-1.5 text-lg sm:text-xl font-bold text-[#241C21]">
                      BDT 4,85,200
                    </div>
                  </div>
                  <div className="rounded-[8px] border border-[#146649]/25 bg-[#EAF4F0] p-4">
                    <div className="text-xs font-semibold text-[#146649]">
                      {lang === "bn" ? "পরিশোধিত (Paid)" : "Paid / Collected"}
                    </div>
                    <div className="mt-1.5 text-lg sm:text-xl font-bold text-[#146649]">
                      BDT 3,92,500
                    </div>
                  </div>
                  <div className="rounded-[8px] border border-[#805100]/25 bg-[#FDF5E6] p-4">
                    <div className="text-xs font-semibold text-[#805100]">
                      {lang === "bn" ? "বকেয়া COD (Pending)" : "Pending COD"}
                    </div>
                    <div className="mt-1.5 text-lg sm:text-xl font-bold text-[#805100]">
                      BDT 78,400
                    </div>
                  </div>
                  <div className="rounded-[8px] border border-[#DAD1C7] bg-[#FBF6EC] p-4">
                    <div className="text-xs font-medium text-[#665C62]">
                      {lang === "bn" ? "রিটার্ন (অটো রিস্টক)" : "Returned"}
                    </div>
                    <div className="mt-1.5 text-lg sm:text-xl font-bold text-[#241C21]">
                      BDT 14,300
                    </div>
                  </div>
                </div>

                {/* Clean Orders Table with Written Status & Right-Aligned Totals (Manual p.33 & p.38) */}
                <div className="overflow-x-auto border-t border-[#DAD1C7]">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-[#DAD1C7] text-[#241C21] font-semibold">
                        <th className="py-3.5 pr-4">
                          {lang === "bn" ? "অর্ডার নম্বর" : "Order"}
                        </th>
                        <th className="py-3.5 px-4">
                          {lang === "bn" ? "ক্রেতা" : "Customer"}
                        </th>
                        <th className="py-3.5 px-4">
                          {lang === "bn" ? "অবস্থা (Status)" : "Status"}
                        </th>
                        <th className="py-3.5 pl-4 text-right">
                          {lang === "bn" ? "মোট টাকা" : "Total"}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DAD1C7]/70 tabular-nums">
                      {SAMPLE_ORDERS.map((ord) => (
                        <tr key={ord.ref} className="hover:bg-[#FBF6EC]/50">
                          <td className="py-3.5 pr-4 font-semibold text-[#241C21]">
                            {ord.ref}
                          </td>
                          <td className="py-3.5 px-4 text-[#665C62]">
                            {lang === "bn" ? ord.customerBn : ord.customerEn}
                          </td>
                          <td className="py-3.5 px-4">
                            <span
                              className={`inline-block rounded-[4px] px-2.5 py-0.5 text-xs font-semibold ${ord.statusTone}`}
                            >
                              {lang === "bn" ? ord.statusBn : ord.statusEn}
                            </span>
                          </td>
                          <td className="py-3.5 pl-4 text-right font-semibold text-[#241C21]">
                            {ord.total}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 3: VISUAL BUILDER */}
          {activeScreen === "builder" && (
            <div
              key="builder"
              className="bg-[#FBF6EC] text-[#241C21] p-4 sm:p-6 animate-panel-reveal"
            >
              <div className="rounded-[8px] border border-[#DAD1C7] bg-white p-3.5 flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/banijjo-logo-symbol.png"
                    alt="Banijjo"
                    className="h-6 w-auto object-contain"
                  />
                  <span className="text-xs font-bold text-[#241C21]">
                    Store Builder • Homepage (Draft #14)
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 rounded-[4px] bg-[#EAF4F0] px-2 py-0.5 text-[11px] font-semibold text-[#146649]">
                    <CheckCircle2 className="h-3 w-3" /> Saved
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] px-3 py-1.5 text-xs font-medium text-[#241C21]">
                    <Palette className="h-3.5 w-3.5 text-[#650039]" /> Theme & Colors
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] px-3 py-1.5 text-xs font-medium text-[#241C21]">
                    <History className="h-3.5 w-3.5 text-[#665C62]" /> Restore
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] px-2.5 py-1.5 text-xs font-medium text-[#241C21]">
                    <Monitor className="h-3.5 w-3.5 text-[#241C21]" /> /{" "}
                    <Smartphone className="h-3.5 w-3.5 text-[#665C62]" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#650039] px-4 py-1.5 text-xs font-semibold text-white">
                    <Rocket className="h-3.5 w-3.5" /> Publish
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-4 rounded-[8px] border border-[#DAD1C7] bg-white p-4 space-y-2">
                  <div className="flex items-center justify-between border-b border-[#DAD1C7] pb-2.5 mb-1">
                    <span className="text-xs font-bold text-[#241C21]">
                      {lang === "bn"
                        ? "পাতার সেকশনসমূহ"
                        : "Page Sections"}
                    </span>
                    <span className="rounded-[4px] bg-[#FBF6EC] border border-[#DAD1C7] px-2 py-0.5 text-[11px] font-semibold text-[#650039]">
                      + Add
                    </span>
                  </div>

                  {BUILDER_SECTIONS.map((s) => {
                    const isSelected = selectedBuilderSection === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedBuilderSection(s.id)}
                        className={`w-full text-left flex items-center justify-between rounded-[6px] border p-2.5 text-xs transition ${
                          isSelected
                            ? "border-[#650039] bg-[#F6EBF1] font-semibold text-[#650039]"
                            : "border-[#DAD1C7] bg-[#FBF6EC] text-[#241C21] hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <GripVertical className="h-4 w-4 text-[#665C62] shrink-0" />
                          <div className="truncate">
                            <div className="truncate">
                              {lang === "bn" ? s.bn : s.t}
                            </div>
                            <div className="text-[10px] text-[#665C62] font-normal">
                              {s.sub}
                            </div>
                          </div>
                        </div>
                        <Eye
                          className={`h-3.5 w-3.5 shrink-0 ml-2 ${
                            isSelected ? "text-[#650039]" : "text-[#665C62]"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                <div className="lg:col-span-8 rounded-[8px] border border-[#DAD1C7] bg-white p-4 sm:p-5">
                  <div className="mb-3 flex items-center justify-between text-xs">
                    <span className="font-medium text-[#665C62]">
                      {lang === "bn"
                        ? "পাবলিশ করার আগে পরিবর্তনগুলো সরাসরি দেখুন"
                        : "Preview what your choice changes before publishing"}
                    </span>
                    <span className="rounded-[4px] bg-[#EAF4F0] px-2 py-0.5 text-[10px] font-semibold text-[#146649]">
                      Live Preview
                    </span>
                  </div>

                  <div
                    className={`rounded-[8px] bg-[#650039] p-5 text-white relative transition ${
                      selectedBuilderSection === "hero"
                        ? "ring-2 ring-[#FF6633] ring-offset-2"
                        : ""
                    }`}
                  >
                    <span className="inline-flex items-center gap-1 absolute top-3 right-3 rounded-[4px] bg-[#FF6633] px-2.5 py-1 text-[10px] font-bold text-[#241C21]">
                      <Edit3 className="h-3 w-3" />
                      <span>Selected</span>
                    </span>
                    <span className="inline-block rounded-[4px] bg-white/15 px-2.5 py-0.5 text-[10px] font-medium text-white">
                      সারাদেশে ক্যাশ অন ডেলিভারি
                    </span>
                    <h4 className="mt-2 text-xl font-bold">
                      ১০০% খাঁটি ও প্রাকৃতিক পণ্যের বিশ্বস্ত সমাহার
                    </h4>
                    <p className="mt-1 text-xs text-white/85 max-w-lg">
                      সুন্দরবনের প্রাকৃতিক চাকের মধু, প্রিমিয়াম আজওয়া খেজুর এবং কাঠের ঘানির খাঁটি সরিষার তেল।
                    </p>
                  </div>

                  <div
                    className={`mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-[8px] p-1 transition tabular-nums ${
                      selectedBuilderSection === "products"
                        ? "ring-2 ring-[#FF6633]"
                        : ""
                    }`}
                  >
                    {REAL_SEED_PRODUCTS.map((p) => (
                      <div
                        key={p.name}
                        className="rounded-[6px] border border-[#DAD1C7] p-2.5 bg-[#FBF6EC]"
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-24 w-full rounded-[4px] object-cover"
                        />
                        <div className="mt-2 text-[11px] font-semibold text-[#241C21] line-clamp-1">
                          {p.name}
                        </div>
                        <div className="text-xs font-bold text-[#650039] mt-0.5">
                          {p.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 4: 1-STEP GUEST CHECKOUT */}
          {activeScreen === "checkout" && (
            <div
              key="checkout"
              className="bg-[#FBF6EC] p-5 sm:p-8 text-[#241C21] animate-panel-reveal"
            >
              <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 rounded-[8px] border border-[#DAD1C7] bg-white p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#DAD1C7] pb-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#241C21]">
                        ডেলিভারি তথ্য ও অর্ডার নিশ্চিতকরণ
                      </h3>
                      <p className="text-xs text-[#665C62]">
                        কোনো একাউন্ট ছাড়াই নাম, মোবাইল নম্বর ও ঠিকানা দিন
                      </p>
                    </div>
                    <span className="rounded-[4px] bg-[#EAF4F0] px-2.5 py-1 text-[11px] font-semibold text-[#146649]">
                      Guest COD
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                    <div>
                      <label className="font-semibold text-[#241C21] block mb-1.5">
                        আপনার নাম *
                      </label>
                      <div className="rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] px-3.5 py-2.5 font-medium text-[#241C21]">
                        মো: রাহাত ইসলাম
                      </div>
                    </div>
                    <div>
                      <label className="font-semibold text-[#241C21] block mb-1.5">
                        মোবাইল নম্বর (১১ সংখ্যা) *
                      </label>
                      <div className="rounded-[6px] border border-[#146649] bg-[#EAF4F0] px-3.5 py-2.5 font-semibold text-[#241C21] flex items-center justify-between tabular-nums">
                        <span>01878601610</span>
                        <span className="inline-flex items-center gap-1 text-[#146649] text-[11px]">
                          <Check className="h-3.5 w-3.5" /> সঠিক
                        </span>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="font-semibold text-[#241C21] block mb-1.5">
                        ডেলিভারি এলাকা *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 tabular-nums">
                        <div className="rounded-[6px] border-2 border-[#650039] bg-[#F6EBF1] p-3">
                          <div className="font-bold text-[#650039]">
                            ঢাকা সিটি
                          </div>
                          <div className="text-[11px] text-[#241C21] mt-0.5">
                            BDT 60 (২৪–৪৮ ঘণ্টা)
                          </div>
                        </div>
                        <div className="rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] p-3">
                          <div className="font-semibold text-[#241C21]">
                            ঢাকা সাব-এরিয়া
                          </div>
                          <div className="text-[11px] text-[#665C62] mt-0.5">
                            BDT 90 (সাভার/গাজীপুর)
                          </div>
                        </div>
                        <div className="rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] p-3">
                          <div className="font-semibold text-[#241C21]">
                            ঢাকার বাইরে
                          </div>
                          <div className="text-[11px] text-[#665C62] mt-0.5">
                            BDT 120 (২–৪ দিন)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="font-semibold text-[#241C21] block mb-1.5">
                        পেমেন্ট পদ্ধতি *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="rounded-[6px] border-2 border-[#650039] bg-[#F6EBF1] p-3">
                          <div className="inline-flex items-center gap-1.5 font-bold text-[#650039]">
                            <Check className="h-3.5 w-3.5" />
                            <span>ক্যাশ অন ডেলিভারি (COD)</span>
                          </div>
                          <div className="text-[11px] text-[#241C21] mt-0.5">
                            পণ্য হাতে পেয়ে মূল্য পরিশোধ
                          </div>
                        </div>
                        <div className="rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] p-3">
                          <div className="font-semibold text-[#241C21]">
                            অনলাইন পেমেন্ট (bKash / SSLCommerz)
                          </div>
                          <div className="text-[11px] text-[#665C62] mt-0.5">
                            বিকাশ, নগদ ও কার্ড পেমেন্ট
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-[8px] border border-[#DAD1C7] bg-white p-5 sm:p-6 flex flex-col justify-between tabular-nums">
                  <div className="space-y-3">
                    <h4 className="text-sm sm:text-base font-bold text-[#241C21] border-b border-[#DAD1C7] pb-2.5">
                      অর্ডার হিসাব (#1008)
                    </h4>
                    {REAL_SEED_PRODUCTS.slice(0, 2).map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-2.5">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-11 w-11 rounded-[6px] object-cover border border-[#DAD1C7]"
                          />
                          <div>
                            <div className="font-semibold text-[#241C21] line-clamp-1">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-[#665C62]">
                              {item.unit} × ১
                            </div>
                          </div>
                        </div>
                        <span className="font-semibold text-[#241C21] shrink-0">
                          {item.price}
                        </span>
                      </div>
                    ))}

                    <div className="rounded-[6px] bg-[#EAF4F0] px-3 py-2 flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#146649] flex items-center gap-1.5">
                        <TicketPercent className="h-4 w-4" /> কুপন: WELCOME10
                      </span>
                      <span className="font-bold text-[#146649]">- ৳ ১৪৭</span>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-[#DAD1C7] text-xs">
                      <div className="flex justify-between text-[#665C62]">
                        <span>পণ্যের মূল্য</span>
                        <span className="font-semibold text-[#241C21]">৳ ১,৪৭০</span>
                      </div>
                      <div className="flex justify-between text-[#665C62]">
                        <span>ডেলিভারি চার্জ (ঢাকা সিটি)</span>
                        <span className="font-semibold text-[#241C21]">৳ ৬০</span>
                      </div>
                      <div className="flex justify-between text-base font-bold text-[#241C21] pt-2 border-t border-[#DAD1C7]">
                        <span>মোট প্রদেয়</span>
                        <span className="text-[#650039]">৳ ১,৩৮৩</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLiveTest("Banijjo Studio Live Checkout")
                      }
                      className="w-full rounded-[6px] bg-[#650039] hover:bg-[#4D002B] py-3.5 text-center text-sm font-semibold text-white transition inline-flex items-center justify-center gap-1.5"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      <span>অর্ডার নিশ্চিত করুন (৳ ১,৩৮৩)</span>
                    </button>
                    <p className="mt-2.5 text-center text-[11px] text-[#665C62] inline-flex w-full items-center justify-center gap-1">
                      <Lock className="h-3 w-3 text-[#146649]" />
                      <span>ডুপ্লিকেট অর্ডার ও ওভারসেল থেকে সুরক্ষিত</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contextual Footer Strip */}
          <div className="border-t border-[#DAD1C7] bg-white px-5 sm:px-7 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-xs sm:text-sm text-[#665C62] font-medium">
              {lang === "bn" ? currentTab.captionBn : currentTab.captionEn}
            </p>
            <button
              type="button"
              onClick={() =>
                onOpenLiveTest("Banijjo Studio Live Storefront")
              }
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#650039] hover:underline shrink-0"
            >
              <span>
                {lang === "bn"
                  ? "নিজে প্রোডাক্ট যোগ করে চালিয়ে দেখুন"
                  : "Try adding products & placing an order"}
              </span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
