"use client";

import React, { useState } from "react";
import {
  Check,
  CheckCircle2,
  Clock,
  MessageCircle,
  Send,
  ShieldCheck,
} from "lucide-react";
import {
  buildWhatsAppUrl,
  INDUSTRY_PRESETS,
  PHONE_DISPLAY,
  PRICING_TIERS,
  type Lang,
} from "@/data/banijjo-data";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BrandThreeDots } from "@/components/BrandThreeDots";

const ADDONS = [
  {
    id: "domain-hosting",
    en: "Custom Domain & Cloud VPS Setup",
    bn: "নিজস্ব ডোমেইন ও ক্লাউড হোস্টিং সেটআপ",
  },
  {
    id: "courier-api",
    en: "Steadfast / Pathao / RedX / eCourier / Paperfly API",
    bn: "Steadfast / Pathao / RedX / eCourier / Paperfly কুরিয়ার যুক্তকরণ",
  },
  {
    id: "payment-gateway",
    en: "bKash / Nagad / SSLCommerz Payment Gateway",
    bn: "bKash / Nagad / SSLCommerz পেমেন্ট গেটওয়ে",
  },
  {
    id: "product-upload",
    en: "50+ Products & Store Copy Setup",
    bn: "৫০+ পণ্য ও বিবরণ সাজিয়ে দেওয়া",
  },
  {
    id: "pixel-capi",
    en: "Meta Pixel, Server CAPI & Analytics",
    bn: "Facebook Pixel, Server CAPI ও Analytics",
  },
];

export function WhatsAppOrderConfigurator({
  lang,
  selectedPlanId,
  onSelectPlan,
}: {
  lang: Lang;
  selectedPlanId: string;
  onSelectPlan: (id: string) => void;
}) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("food");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "courier-api",
    "pixel-capi",
  ]);
  const [businessName, setBusinessName] = useState<string>("");
  const [customerName, setCustomerName] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const activePlan =
    PRICING_TIERS.find((p) => p.id === selectedPlanId) || PRICING_TIERS[1];
  const activePreset =
    INDUSTRY_PRESETS.find((p) => p.id === selectedIndustry) ||
    INDUSTRY_PRESETS[0];

  const selectedAddonObjects = ADDONS.filter((a) =>
    selectedAddons.includes(a.id)
  );
  const addonNamesEn = selectedAddonObjects.map((a) => a.en);

  const composedMessage = [
    `Hello Banijjo Studio! I'd like to discuss setting up my online shop.`,
    ``,
    `• Package: ${activePlan.name.en} (${activePlan.price.en})`,
    `• Shop Theme: ${activePreset.name.en}`,
    addonNamesEn.length > 0
      ? `• Requested Integrations: ${addonNamesEn.join(", ")}`
      : `• Integrations: Standard package features`,
    businessName.trim() ? `• Shop Name: ${businessName.trim()}` : null,
    customerName.trim() ? `• My Name: ${customerName.trim()}` : null,
    notes.trim() ? `• Notes: ${notes.trim()}` : null,
    ``,
    `Please share the next steps to bring my shop online.`,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappHref = buildWhatsAppUrl(composedMessage);

  return (
    <section
      id="order-now"
      className="py-20 sm:py-28 bg-[#FBF6EC] border-t border-[#DAD1C7]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal
          variant="fade-up"
          className="max-w-2xl mx-auto text-center mb-12 sm:mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#650039]">
            {lang === "bn"
              ? "কাস্টম লঞ্চ ব্লুপ্রিন্ট"
              : "Custom Launch Blueprint"}
          </p>
          <h2 className="brand-title mt-3 text-2xl sm:text-[40px] sm:leading-[48px] font-bold text-[#241C21]">
            {lang === "bn"
              ? "৬০ সেকেন্ডে আপনার ফ্ল্যাগশিপ স্টোর কনফিগার করুন"
              : "Build your launch blueprint in 60 seconds"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#665C62] leading-relaxed">
            {lang === "bn"
              ? "কোনো সাইনআপ বা অগ্রিম কার্ড পেমেন্ট লাগবে না। আপনার পছন্দের প্ল্যান, নিশ থিম ও ইন্টিগ্রেশন সিলেক্ট করে সরাসরি আমাদের ইঞ্জিনিয়ারিং টিমের সাথে লাইভ ডেমো বুক করুন।"
              : "Zero upfront card or account signup. Select your growth tier, niche preset, and integrations — then connect directly with our engineering team on WhatsApp."}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Configurator Form */}
          <ScrollReveal
            variant="fade-up"
            delay={80}
            className="lg:col-span-7 space-y-7 rounded-[12px] border border-[#DAD1C7] bg-white p-6 sm:p-8 shadow-soft-md"
          >
            {/* Step 1: Package */}
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#650039] text-[11px] font-bold text-white tabular-nums">
                  01
                </span>
                <span className="text-sm sm:text-base font-bold text-[#241C21]">
                  {lang === "bn"
                    ? "প্যাকেজ নির্বাচন করুন"
                    : "Choose your package"}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 tabular-nums">
                {PRICING_TIERS.map((tier) => {
                  const active = tier.id === selectedPlanId;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => onSelectPlan(tier.id)}
                      className={`text-left rounded-[8px] p-4 border transition-all ${
                        active
                          ? "border-[#650039] bg-[#F6EBF1] ring-1 ring-[#650039]"
                          : "border-[#DAD1C7] bg-[#FBF6EC] hover:bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <span className="text-xs font-semibold text-[#241C21] leading-snug">
                          {tier.name[lang]}
                        </span>
                        <span
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                            active
                              ? "border-[#650039] bg-[#650039] text-white"
                              : "border-[#DAD1C7] bg-white"
                          }`}
                        >
                          {active && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                        </span>
                      </div>
                      <div className="mt-2 text-sm font-bold text-[#650039]">
                        {tier.price[lang]}
                      </div>
                      <div className="mt-0.5 text-[11px] text-[#665C62]">
                        {tier.deliveryTime[lang]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Industry Theme */}
            <div className="pt-4 border-t border-[#DAD1C7]">
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#650039] text-[11px] font-bold text-white tabular-nums">
                  02
                </span>
                <span className="text-sm sm:text-base font-bold text-[#241C21]">
                  {lang === "bn"
                    ? "দোকানের ধরন বেছে নিন"
                    : "Select your shop theme"}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {INDUSTRY_PRESETS.map((preset) => {
                  const active = preset.id === selectedIndustry;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setSelectedIndustry(preset.id)}
                      className={`text-left rounded-[8px] p-4 border transition-all ${
                        active
                          ? "border-[#650039] bg-[#F6EBF1] ring-1 ring-[#650039]"
                          : "border-[#DAD1C7] bg-[#FBF6EC] hover:bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <span className="text-xs font-semibold text-[#241C21] leading-snug">
                          {preset.name[lang]}
                        </span>
                        <span
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                            active
                              ? "border-[#650039] bg-[#650039] text-white"
                              : "border-[#DAD1C7] bg-white"
                          }`}
                        >
                          {active && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                        </span>
                      </div>
                      <div className="mt-1.5 text-[11px] text-[#665C62]">
                        {preset.badgeText}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Optional Integrations */}
            <div className="pt-4 border-t border-[#DAD1C7]">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#650039] text-[11px] font-bold text-white tabular-nums">
                    03
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#241C21]">
                    {lang === "bn"
                      ? "অতিরিক্ত সুবিধাসমূহ"
                      : "Optional integrations"}
                  </span>
                </div>
                <span className="text-xs font-medium text-[#665C62]">
                  {lang === "bn" ? "ঐচ্ছিক" : "Optional"}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ADDONS.map((addon) => {
                  const checked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center gap-3 rounded-[6px] px-3.5 py-3 text-left text-xs border transition-all ${
                        checked
                          ? "border-[#650039] bg-[#F6EBF1] text-[#241C21] font-semibold"
                          : "border-[#DAD1C7] bg-[#FBF6EC] text-[#241C21] hover:bg-white"
                      }`}
                    >
                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] ${
                          checked
                            ? "bg-[#650039] text-white"
                            : "border border-[#DAD1C7] bg-white"
                        }`}
                      >
                        {checked && <Check className="h-3 w-3 stroke-[3]" />}
                      </span>
                      <span className="leading-snug">{addon[lang]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Persistent Form Labels (Manual p.38) */}
            <div className="pt-4 border-t border-[#DAD1C7]">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#650039] text-[11px] font-bold text-white tabular-nums">
                    04
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#241C21]">
                    {lang === "bn"
                      ? "দোকান ও আপনার নাম"
                      : "Your shop details"}
                  </span>
                </div>
                <span className="text-xs font-medium text-[#665C62]">
                  {lang === "bn" ? "ঐচ্ছিক" : "Optional"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="cfg-owner-name"
                    className="block text-xs font-semibold text-[#241C21] mb-1.5"
                  >
                    {lang === "bn" ? "আপনার নাম" : "Your name"}
                  </label>
                  <input
                    id="cfg-owner-name"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={
                      lang === "bn"
                        ? "যেমন: আরিফুল ইসলাম"
                        : "e.g., Ariful Islam"
                    }
                    className="w-full rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] px-3.5 py-2.5 text-sm text-[#241C21] placeholder-[#665C62] focus:border-[#650039] focus:bg-white transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cfg-shop-name"
                    className="block text-xs font-semibold text-[#241C21] mb-1.5"
                  >
                    {lang === "bn"
                      ? "দোকান বা পেজের নাম"
                      : "Shop or page name"}
                  </label>
                  <input
                    id="cfg-shop-name"
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder={
                      lang === "bn"
                        ? "যেমন: Ghorer Organic BD"
                        : "e.g., Pure Agro BD"
                    }
                    className="w-full rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] px-3.5 py-2.5 text-sm text-[#241C21] placeholder-[#665C62] focus:border-[#650039] focus:bg-white transition"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="cfg-shop-notes"
                    className="block text-xs font-semibold text-[#241C21] mb-1.5"
                  >
                    {lang === "bn"
                      ? "আপনার প্রয়োজন সংক্ষেপে লিখুন"
                      : "Notes for our team"}
                  </label>
                  <input
                    id="cfg-shop-notes"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={
                      lang === "bn"
                        ? "যেমন: কুরিয়ার যুক্ত করে দ্রুত দোকান চালু করতে চাই..."
                        : "e.g., Connect Steadfast courier and custom domain..."
                    }
                    className="w-full rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] px-3.5 py-2.5 text-sm text-[#241C21] placeholder-[#665C62] focus:border-[#650039] focus:bg-white transition"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Clean Proposal Summary Card */}
          <ScrollReveal
            variant="scale-up"
            delay={160}
            className="lg:col-span-5 rounded-[12px] border border-[#DAD1C7] bg-white p-6 sm:p-8 shadow-soft-xl lg:sticky lg:top-24"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#DAD1C7] pb-5">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#650039]">
                  {lang === "bn" ? "আপনার লঞ্চ সামারি" : "Your Launch Blueprint"}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#241C21] mt-1">
                  {activePlan.name[lang]}
                </h3>
                <div className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-[#665C62]">
                  <Clock className="h-3.5 w-3.5 text-[#650039]" />
                  <span>{activePlan.deliveryTime[lang]}</span>
                </div>
              </div>
              <div className="text-right shrink-0 tabular-nums">
                <div className="text-xl sm:text-2xl font-bold text-[#650039]">
                  {activePlan.price[lang]}
                </div>
                <div className="text-[11px] font-semibold text-[#146649] mt-0.5">
                  {lang === "bn" ? "আজীবন ০% কমিশন" : "0% Commission"}
                </div>
              </div>
            </div>

            <div className="py-5 space-y-3.5 border-b border-[#DAD1C7] text-xs sm:text-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[#665C62]">
                  {lang === "bn" ? "নির্বাচিত থিম" : "Selected Theme"}
                </span>
                <span className="font-semibold text-[#241C21] text-right">
                  {activePreset.name[lang]}
                </span>
              </div>

              {businessName.trim() && (
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[#665C62]">
                    {lang === "bn" ? "দোকানের নাম" : "Shop Name"}
                  </span>
                  <span className="font-semibold text-[#241C21] text-right">
                    {businessName.trim()}
                  </span>
                </div>
              )}

              <div>
                <span className="block text-[#665C62] mb-2">
                  {lang === "bn"
                    ? "নির্বাচিত সুবিধাসমূহ"
                    : "Included Add-ons"}
                </span>
                {selectedAddonObjects.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {selectedAddonObjects.map((item) => (
                      <span
                        key={item.id}
                        className="inline-flex items-center gap-1 rounded-[4px] bg-[#FBF6EC] border border-[#DAD1C7] px-2.5 py-1 text-[11px] font-medium text-[#241C21]"
                      >
                        <CheckCircle2 className="h-3 w-3 text-[#146649] shrink-0" />
                        <span>{item[lang]}</span>
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-xs text-[#665C62]">
                    {lang === "bn"
                      ? "প্যাকেজের সকল মৌলিক সুবিধা অন্তর্ভুক্ত"
                      : "All standard package features included"}
                  </span>
                )}
              </div>
            </div>

            {/* Clean Message Preview */}
            <div className="my-5 rounded-[8px] bg-[#FBF6EC] border border-[#DAD1C7] p-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#650039]">
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>
                    {lang === "bn"
                      ? "মেসেজ প্রিভিউ"
                      : "WhatsApp Message Preview"}
                  </span>
                </span>
                <BrandThreeDots size={5} color="#FF6633" />
              </div>
              <p className="text-xs text-[#241C21] leading-relaxed">
                {lang === "bn"
                  ? `হ্যালো Banijjo Studio! আমি "${activePlan.name.bn}" প্যাকেজে "${activePreset.name.bn}" থিমে আমার দোকান অনলাইনে চালু করতে চাই।`
                  : `Hello Banijjo Studio! I'd like to set up my "${activePreset.name.en}" shop on the ${activePlan.name.en} package.`}
              </p>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-6 py-4 text-sm sm:text-base font-semibold text-white transition-all"
            >
              <Send className="h-4 w-4" />
              <span>
                {lang === "bn"
                  ? "লাইভ ডেমো ও লঞ্চ স্লট বুক করুন"
                  : "Lock In Your Launch Walkthrough"}
              </span>
            </a>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-[#665C62] tabular-nums">
              <ShieldCheck className="h-4 w-4 text-[#146649] shrink-0" />
              <span>
                {lang === "bn"
                  ? `সরাসরি আমাদের টিমের সাথে কথা বলুন (${PHONE_DISPLAY})`
                  : `Direct support from our team (${PHONE_DISPLAY})`}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
