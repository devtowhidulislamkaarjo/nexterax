"use client";

import React from "react";
import type { Lang } from "@/data/banijjo-data";
import { ScrollReveal } from "@/components/ScrollReveal";

interface PartnerItem {
  id: string;
  name: string;
  roleBn: string;
  roleEn: string;
  logo: React.ReactNode;
}

const COURIER_AND_PAYMENT_PARTNERS: PartnerItem[] = [
  {
    id: "steadfast",
    name: "Steadfast",
    roleBn: "১ ক্লিকে কুরিয়ার বুকিং",
    roleEn: "1-Click Courier API",
    logo: (
      <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" fill="none">
        <rect width="36" height="36" rx="8" fill="#E6F7F1" />
        <path
          d="M10 19.5L16.5 12H26L19.5 19.5H25L14.5 26L17 19.5H10Z"
          fill="#00A76F"
        />
      </svg>
    ),
  },
  {
    id: "pathao",
    name: "Pathao Courier",
    roleBn: "অটো পার্সেল ও COD সিঙ্ক",
    roleEn: "Auto Parcel & COD",
    logo: (
      <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" fill="none">
        <rect width="36" height="36" rx="8" fill="#FDECEC" />
        <path
          d="M12 25V11H19.8C22.9 11 25 12.9 25 15.8C25 18.7 22.9 20.6 19.8 20.6H16V25H12ZM16 17.3H19.3C20.5 17.3 21.2 16.7 21.2 15.8C21.2 14.9 20.5 14.3 19.3 14.3H16V17.3Z"
          fill="#E82529"
        />
      </svg>
    ),
  },
  {
    id: "redx",
    name: "RedX",
    roleBn: "দেশব্যাপী ফাস্ট ডেলিভারি",
    roleEn: "Nationwide Dispatch",
    logo: (
      <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" fill="none">
        <rect width="36" height="36" rx="8" fill="#241C21" />
        <path
          d="M11.5 11.5H16.2L18 14.6L19.8 11.5H24.5L20.3 18L24.8 24.5H20.1L18 21.1L15.9 24.5H11.2L15.7 18L11.5 11.5Z"
          fill="#FF3B30"
        />
      </svg>
    ),
  },
  {
    id: "ecourier",
    name: "eCourier",
    roleBn: "লাইভ পার্সেল ট্র্যাকিং",
    roleEn: "Live Parcel Tracking",
    logo: (
      <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" fill="none">
        <rect width="36" height="36" rx="8" fill="#FFF3E8" />
        <path
          d="M18 9.5L26 14V22L18 26.5L10 22V14L18 9.5Z"
          stroke="#F37021"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 14.2L18 18.5L25.5 14.2M18 18.5V26"
          stroke="#F37021"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "paperfly",
    name: "Paperfly",
    roleBn: "৬৪ জেলায় হোম ডেলিভারি",
    roleEn: "64-District Coverage",
    logo: (
      <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" fill="none">
        <rect width="36" height="36" rx="8" fill="#EAF4FC" />
        <path
          d="M26 11L10 17.5L16.2 20.1L23.2 14.2L18.4 21.2L21.5 25L26 11Z"
          fill="#0072BC"
        />
      </svg>
    ),
  },
  {
    id: "bkash",
    name: "bKash",
    roleBn: "ইনস্ট্যান্ট মার্চেন্ট পেমেন্ট",
    roleEn: "Instant Tokenized Pay",
    logo: (
      <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" fill="none">
        <rect width="36" height="36" rx="8" fill="#FCE8F1" />
        <path
          d="M17.2 10L23.5 16.8L15.4 20.2L17.2 10Z"
          fill="#E2136E"
        />
        <path
          d="M15.4 20.2L23.5 16.8L20.5 25.5L15.4 20.2Z"
          fill="#B80E58"
        />
        <path
          d="M10.5 15.2L16.6 14.2L15.4 20.2L10.5 15.2Z"
          fill="#F04E98"
        />
        <path d="M23.5 16.8L26.5 15.5L24.5 18.8L23.5 16.8Z" fill="#E2136E" />
      </svg>
    ),
  },
  {
    id: "nagad",
    name: "Nagad",
    roleBn: "মোবাইল ব্যাংকিং গেটওয়ে",
    roleEn: "Fast Mobile Checkout",
    logo: (
      <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" fill="none">
        <rect width="36" height="36" rx="8" fill="#FFF2E5" />
        <circle
          cx="18"
          cy="18"
          r="7.5"
          stroke="#F6921E"
          strokeWidth="2.6"
        />
        <path
          d="M18 12.5C20.2 14.5 21 16.8 19.5 19.5C18.2 21.5 16 21.2 16 19C16 17.5 17.3 16.5 18 15"
          fill="#ED1C24"
        />
      </svg>
    ),
  },
  {
    id: "sslcommerz",
    name: "SSLCommerz",
    roleBn: "ভিসা, মাস্টারকার্ড ও ব্যাংক",
    roleEn: "Cards & Net Banking",
    logo: (
      <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" fill="none">
        <rect width="36" height="36" rx="8" fill="#EBF2FC" />
        <rect
          x="9.5"
          y="12"
          width="17"
          height="12"
          rx="2.5"
          stroke="#1A56DB"
          strokeWidth="2.2"
        />
        <line
          x1="9.5"
          y1="16"
          x2="26.5"
          y2="16"
          stroke="#1A56DB"
          strokeWidth="2.2"
        />
        <rect x="12.5" y="19" width="4.5" height="2" rx="1" fill="#1A56DB" />
      </svg>
    ),
  },
  {
    id: "meta-capi",
    name: "Meta Pixel + CAPI",
    roleBn: "সার্ভার সাইড অ্যাড ট্র্যাকিং",
    roleEn: "Server-Side ROAS Sync",
    logo: (
      <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" fill="none">
        <rect width="36" height="36" rx="8" fill="#E8F2FF" />
        <path
          d="M10.5 20.2C10.5 16.2 13 13.5 15.3 13.5C17 13.5 18.2 14.8 19.6 17.2C21 19.6 22 20.8 23.3 20.8C24.6 20.8 25.5 19.5 25.5 17.6C25.5 15.5 24.3 13.8 22.8 13.8C21.5 13.8 20.4 14.8 19.3 16.4M10.5 20.2C10.5 21.8 11.5 22.5 12.7 22.5C14.1 22.5 15.3 21.3 16.8 18.8"
          stroke="#0081FB"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "ga4",
    name: "Google Analytics 4",
    roleBn: "লাইভ ফানেল ও সেলস ডেটা",
    roleEn: "Live Funnel Analytics",
    logo: (
      <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" fill="none">
        <rect width="36" height="36" rx="8" fill="#FEF4E6" />
        <rect x="11" y="20" width="3.6" height="5.5" rx="1.8" fill="#F9AB00" />
        <rect x="16.2" y="15.5" width="3.6" height="10" rx="1.8" fill="#E37400" />
        <rect x="21.4" y="11" width="3.6" height="14.5" rx="1.8" fill="#E37400" />
      </svg>
    ),
  },
];

export function IntegrationPartnerStrip({ lang }: { lang: Lang }) {
  return (
    <section className="border-b border-[#DAD1C7] bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[#146649]" />
              <h2 className="text-sm sm:text-base font-bold text-[#241C21]">
                {lang === "bn"
                  ? "বাংলাদেশের শীর্ষ কুরিয়ার, পেমেন্ট গেটওয়ে ও অ্যাড ট্র্যাকিংয়ের সাথে রেডি"
                  : "Plug-and-play with Bangladesh’s top couriers, payments & ad platforms"}
              </h2>
            </div>
            <span className="text-xs font-semibold text-[#650039]">
              {lang === "bn"
                ? "১ ক্লিকে পার্সেল বুকিং ও অটো ক্যাশফ্লো সিঙ্ক"
                : "1-Click Parcel Dispatch & Live Sync"}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {COURIER_AND_PAYMENT_PARTNERS.map((partner, idx) => (
              <ScrollReveal
                key={partner.id}
                variant="fade-up"
                delay={idx * 40}
                className="group flex items-center gap-3 rounded-[10px] border border-[#DAD1C7] bg-[#FBF6EC]/55 hover:bg-white hover:border-[#650039]/50 p-3 transition-all shadow-2xs hover:shadow-soft-md"
              >
                {partner.logo}
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-[#241C21] truncate group-hover:text-[#650039] transition-colors">
                    {partner.name}
                  </div>
                  <div className="text-[11px] text-[#665C62] truncate">
                    {lang === "bn" ? partner.roleBn : partner.roleEn}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
