"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Cpu,
  Home,
  Menu,
  MessageCircle,
  Shirt,
  ShoppingCart,
  Sparkles,
  Sprout,
  X,
} from "lucide-react";
import {
  buildWhatsAppUrl,
  EMAIL_ADDRESS,
  PHONE_DISPLAY,
  WHATSAPP_NUMBER,
  type Lang,
} from "@/data/banijjo-data";
import {
  CUSTOM_ENGINEERING_SERVICES,
  getServiceInquiryText,
} from "@/data/custom-services-data";
import type { PresetCode } from "@/data/live-store-presets";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BrandThreeDots } from "@/components/BrandThreeDots";

const LIVE_DEMO_LINKS: {
  code: PresetCode;
  icon: React.ElementType;
  bn: string;
  en: string;
  subBn: string;
  subEn: string;
}[] = [
  {
    code: "food",
    icon: Sprout,
    bn: "অর্গানিক ফুড শপ",
    en: "Organic Food Shop",
    subBn: "মধু, ঘি ও নিত্যপ্রয়োজনীয় পণ্য",
    subEn: "Honey, ghee & groceries",
  },
  {
    code: "fashion",
    icon: Shirt,
    bn: "পোশাক ও বুটিক শপ",
    en: "Clothing & Boutique",
    subBn: "সাইজ ভ্যারিয়েন্ট ও কালেকশন",
    subEn: "Sizes & seasonal collections",
  },
  {
    code: "cosmetics",
    icon: Sparkles,
    bn: "স্কিনকেয়ার ও বিউটি শপ",
    en: "Skincare & Beauty",
    subBn: "সিরাম, শেড ও কুপন অর্ডার",
    subEn: "Shades, routines & coupons",
  },
  {
    code: "tech",
    icon: Cpu,
    bn: "আইটি ও গ্যাজেট শপ",
    en: "IT, Tech & Gadgets",
    subBn: "ইয়ারবাডস, ওয়াচ ও পিসি গিয়ার",
    subEn: "Specs, variants & warranty",
  },
  {
    code: "supershop",
    icon: ShoppingCart,
    bn: "সুপার শপ ও ডেইলি মার্ট",
    en: "Super Shop & Daily Mart",
    subBn: "মাসের বাজার ও ৬০-মিনিট ডেলিভারি",
    subEn: "60-min express grocery cart",
  },
  {
    code: "electronics",
    icon: Home,
    bn: "হোম ও কিচেন অ্যাপ্লায়েন্স",
    en: "Home & Appliances",
    subBn: "কফি মেকার, ব্লেন্ডার ও হোম গিয়ার",
    subEn: "Smart kitchen & living gear",
  },
];

export default function CustomServicesPage() {
  const [lang, setLang] = useState<Lang>("bn");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [liveStoreDropdownOpen, setLiveStoreDropdownOpen] = useState(false);
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

  const generalInquiryUrl = buildWhatsAppUrl(
    "Hello NexteraX Digital, I would like to discuss a custom website or software project."
  );

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-[#FBF6EC] text-[#241C21]">
      {/* Exact Same Branded Header as Main Website, with /services Active in Nav */}
      <header className="sticky top-0 z-50 border-b border-[#DAD1C7] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 h-[72px]">
          {/* Official Horizontal Lockup — Full Color on White */}
          <Link
            href="/"
            aria-label="Banijjo Studio Home"
            className="flex items-center py-2 shrink-0"
          >
            <img
              src="/banijjo-logo-horizontal.png"
              alt="Banijjo Studio"
              className="h-9 sm:h-10 w-auto min-w-[144px] object-contain"
            />
          </Link>

          {/* Single-Line Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#241C21]">
            <Link
              href="/#features"
              className="whitespace-nowrap hover:text-[#650039] transition-colors"
            >
              {lang === "bn" ? "ফিচারসমূহ" : "Capabilities"}
            </Link>
            <Link
              href="/#presets"
              className="whitespace-nowrap hover:text-[#650039] transition-colors"
            >
              {lang === "bn" ? "ব্র্যান্ড থিম" : "Themes"}
            </Link>

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
                  {LIVE_DEMO_LINKS.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <Link
                        key={item.code}
                        href={`/live-store/?preset=${item.code}`}
                        onClick={() => setLiveStoreDropdownOpen(false)}
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
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/#our-work"
              className="whitespace-nowrap hover:text-[#650039] transition-colors"
            >
              {lang === "bn" ? "আমাদের কাজ" : "Our Work"}
            </Link>
            <Link
              href="/#pricing"
              className="whitespace-nowrap hover:text-[#650039] transition-colors"
            >
              {lang === "bn" ? "প্রাইসিং" : "Pricing"}
            </Link>
            <Link
              href="/services"
              aria-current="page"
              className="whitespace-nowrap font-bold text-[#650039] border-b-2 border-[#650039] py-1"
            >
              {lang === "bn" ? "অন্যান্য সার্ভিস" : "Services"}
            </Link>
            <Link
              href="/#faq"
              className="whitespace-nowrap hover:text-[#650039] transition-colors"
            >
              {lang === "bn" ? "প্রশ্নোত্তর" : "FAQ"}
            </Link>
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

            <Link
              href="/#order-now"
              className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-4.5 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors"
            >
              <span>
                {lang === "bn" ? "ব্র্যান্ড লঞ্চ করুন" : "Launch Your Brand"}
              </span>
            </Link>

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
                {LIVE_DEMO_LINKS.map((item) => (
                  <Link
                    key={item.code}
                    href={`/live-store/?preset=${item.code}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-between rounded-[6px] bg-white border border-[#DAD1C7] px-3 py-2 text-xs font-semibold text-[#241C21]"
                  >
                    <span className="truncate">
                      {lang === "bn" ? item.bn : item.en}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#650039]" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              {[
                {
                  href: "/",
                  label: lang === "bn" ? "হোম পেজ" : "Home",
                  active: false,
                },
                {
                  href: "/#features",
                  label: lang === "bn" ? "ফিচারসমূহ" : "Capabilities",
                  active: false,
                },
                {
                  href: "/#presets",
                  label: lang === "bn" ? "ব্র্যান্ড থিম" : "Themes",
                  active: false,
                },
                {
                  href: "/#our-work",
                  label: lang === "bn" ? "আমাদের কাজ" : "Our Work",
                  active: false,
                },
                {
                  href: "/#pricing",
                  label: lang === "bn" ? "প্রাইসিং" : "Pricing",
                  active: false,
                },
                {
                  href: "/services",
                  label: lang === "bn" ? "অন্যান্য সার্ভিস" : "Services",
                  active: true,
                },
                {
                  href: "/#faq",
                  label: lang === "bn" ? "প্রশ্নোত্তর" : "FAQ",
                  active: false,
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-[6px] px-3 py-2.5 ${
                    item.active
                      ? "bg-[#F6EBF1] font-bold text-[#650039]"
                      : "text-[#241C21] hover:bg-[#FBF6EC]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/#order-now"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#650039] px-4 py-3 text-xs font-semibold text-white"
            >
              <span>
                {lang === "bn" ? "ব্র্যান্ড লঞ্চ করুন" : "Launch Your Brand"}
              </span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Minimal Page Intro */}
        <section className="pt-14 pb-12 sm:pt-20 sm:pb-16 border-b border-[#DAD1C7]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal variant="fade-up" className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#665C62]">
                NexteraX Digital
              </p>
              <h1 className="brand-title mt-3 text-3xl sm:text-[42px] sm:leading-[50px] font-bold text-[#241C21]">
                {lang === "bn"
                  ? "কাস্টম ওয়েবসাইট ও সফটওয়্যার সার্ভিসসমূহ"
                  : "Websites, internal tools, and custom software"}
              </h1>
              <p className="mt-4 text-base text-[#665C62] leading-relaxed">
                {lang === "bn"
                  ? "প্রতিটি প্রজেক্ট আপনার কাজের ধরন ও বাস্তব প্রয়োজন বুঝে পরিচ্ছন্নভাবে তৈরি করা হয়।"
                  : "Every project is shaped calmly around your workflow and long-term needs."}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 7 Services List — Minimal Editorial Layout */}
        <section className="py-12 sm:py-16 bg-white border-b border-[#DAD1C7]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="divide-y divide-[#DAD1C7] border-y border-[#DAD1C7]">
              {CUSTOM_ENGINEERING_SERVICES.map((service, idx) => {
                const inquiryHref = buildWhatsAppUrl(
                  getServiceInquiryText(service.title.en)
                );

                return (
                  <ScrollReveal
                    key={service.id}
                    variant="fade-up"
                    delay={idx * 45}
                  >
                    <article
                      id={service.id}
                      className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline scroll-mt-24"
                    >
                      <div className="md:col-span-5 flex items-baseline gap-4">
                        <span className="text-xs font-medium text-[#665C62] tabular-nums shrink-0">
                          {service.number}
                        </span>
                        <h2 className="text-lg sm:text-xl font-bold text-[#241C21]">
                          {service.title[lang]}
                        </h2>
                      </div>

                      <div className="md:col-span-5 pl-7 md:pl-0 space-y-2">
                        <p className="text-sm sm:text-[15px] text-[#241C21]/90 leading-relaxed">
                          {service.summary[lang]}
                        </p>
                        <p className="text-xs text-[#665C62]">
                          {service.deliverables[lang]}
                        </p>
                      </div>

                      <div className="md:col-span-2 pl-7 md:pl-0 md:text-right pt-1 md:pt-0">
                        <a
                          href={inquiryHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#241C21] hover:text-[#650039] border-b border-[#241C21]/30 hover:border-[#650039] pb-0.5 transition-colors"
                        >
                          <span>
                            {lang === "bn" ? "আলোচনা করুন" : "Discuss"}
                          </span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Minimal Contact Strip */}
        <section className="py-16 sm:py-20 bg-[#FBF6EC]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal
              variant="fade-up"
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-[8px] border border-[#DAD1C7] bg-white p-6 sm:p-10"
            >
              <div className="space-y-1.5">
                <h2 className="text-lg sm:text-xl font-bold text-[#241C21]">
                  {lang === "bn"
                    ? "আপনার প্রজেক্ট নিয়ে কথা বলতে চান?"
                    : "Have a project in mind?"}
                </h2>
                <p className="text-sm text-[#665C62]">
                  {lang === "bn"
                    ? "আপনার প্রয়োজন সংক্ষেপে জানালে আমরা সময়সীমা ও পরিকল্পনা জানিয়ে দেব।"
                    : "Share a brief note about what you need and we will outline a clear plan."}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0 tabular-nums">
                <a
                  href={generalInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-colors"
                >
                  WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center justify-center rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] hover:border-[#650039] px-4 py-3 text-xs sm:text-sm font-medium text-[#241C21] transition-colors"
                >
                  {lang === "bn" ? "কল করুন" : "Call"}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Exact Same Brand Footer as Main Website */}
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
                  <Link href="/#real-ui-preview" className="hover:text-[#650039]">
                    {lang === "bn" ? "দোকান ও ওয়ার্কস্পেস" : "Workspace"}
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="hover:text-[#650039]">
                    {lang === "bn" ? "পণ্য ও সুবিধা" : "Product"}
                  </Link>
                </li>
                <li>
                  <Link href="/#presets" className="hover:text-[#650039]">
                    {lang === "bn" ? "দোকানের থিম" : "Themes"}
                  </Link>
                </li>
                <li>
                  <Link href="/#our-work" className="hover:text-[#650039]">
                    {lang === "bn" ? "আমাদের কাজ" : "Selected Work"}
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-[#650039]">
                    {lang === "bn" ? "প্রাইসিং" : "Pricing"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="font-semibold text-[#650039]"
                  >
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
                {LIVE_DEMO_LINKS.map((item) => (
                  <li key={item.code}>
                    <Link
                      href={`/live-store/?preset=${item.code}`}
                      className="hover:text-[#650039]"
                    >
                      {lang === "bn" ? item.bn : item.en}
                    </Link>
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
                  href={generalInquiryUrl}
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
        href={generalInquiryUrl}
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
    </div>
  );
}
