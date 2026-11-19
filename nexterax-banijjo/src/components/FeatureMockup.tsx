"use client";

import React from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  CornerDownRight,
  Eye,
  Folder,
  FolderTree,
  Globe,
  Layers,
  Lock,
  MoveVertical,
  RotateCcw,
  Search,
  ShieldCheck,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import type { FeaturePillar, Lang } from "@/data/banijjo-data";
import { BrandThreeDots } from "@/components/BrandThreeDots";

export function FeatureMockup({
  type,
  lang,
}: {
  type: FeaturePillar["mockupType"];
  lang: Lang;
}) {
  if (type === "builder") {
    return (
      <div className="rounded-[8px] border border-[#DAD1C7] bg-white p-4 sm:p-5 shadow-soft-md text-[#241C21]">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DAD1C7] pb-3 mb-4">
          <div className="flex items-center gap-2.5">
            <BrandThreeDots size={7} color="#FF6633" />
            <span className="text-xs font-semibold text-[#241C21]">
              Banijjo Builder • Draft #14
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] px-2.5 py-1 text-[11px] font-medium text-[#241C21]">
              <RotateCcw className="h-3 w-3 text-[#665C62]" /> Rollback
            </span>
            <span className="inline-flex items-center gap-1 rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] px-2.5 py-1 text-[11px] font-medium text-[#241C21]">
              <Eye className="h-3 w-3 text-[#665C62]" /> Preview
            </span>
            <span className="inline-flex items-center gap-1 rounded-[6px] bg-[#650039] px-3 py-1 text-[11px] font-semibold text-white">
              Publish
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-5 space-y-1.5 rounded-[8px] bg-[#FBF6EC] p-3 border border-[#DAD1C7]">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-[#665C62] mb-2">
              {lang === "bn" ? "হোমপেজ সেকশন" : "Storefront Sections"}
            </div>
            {[
              "1. Hero Banner",
              "2. Category Grid (6)",
              "3. Featured Products",
              "4. Promotion Callout",
              "5. Shop Notes & FAQ",
            ].map((item, i) => (
              <div
                key={item}
                className={`flex items-center justify-between rounded-[6px] px-2.5 py-2 text-xs ${
                  i === 1
                    ? "bg-[#650039] text-white font-semibold"
                    : "bg-white text-[#241C21] border border-[#DAD1C7]"
                }`}
              >
                <span className="truncate">{item}</span>
                <MoveVertical
                  className={`h-3.5 w-3.5 shrink-0 ${
                    i === 1 ? "text-white/75" : "text-[#665C62]"
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="sm:col-span-7 rounded-[8px] bg-[#FBF6EC] p-3.5 border border-[#DAD1C7] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="rounded-[4px] bg-[#EAF4F0] px-2 py-0.5 text-[10px] font-semibold text-[#146649]">
                  Live Preview
                </span>
                <span className="text-[11px] font-medium text-[#665C62]">
                  Desktop / Mobile
                </span>
              </div>
              <div className="rounded-[8px] bg-[#650039] p-4 mb-3 text-white">
                <div className="text-[10px] font-medium text-white/80">
                  Your shop, online.
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  Sundarban Honey & Pure Ghee
                </div>
                <div className="mt-2.5 inline-block rounded-[6px] bg-white px-2.5 py-1 text-[10px] font-semibold text-[#650039]">
                  Explore Collection
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 tabular-nums">
                {[
                  { name: "Honey", price: "BDT 1,250" },
                  { name: "Ghee", price: "BDT 980" },
                  { name: "Oil", price: "BDT 1,420" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="rounded-[6px] bg-white border border-[#DAD1C7] p-2 text-center"
                  >
                    <div className="text-[10px] font-medium text-[#665C62]">
                      {p.name}
                    </div>
                    <div className="text-[11px] font-bold text-[#241C21] mt-0.5">
                      {p.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-[#DAD1C7] flex items-center justify-between text-[11px] text-[#665C62]">
              <span>Food • Fashion • Beauty</span>
              <span className="text-[#146649] font-semibold">Safe Restore</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "storefront") {
    return (
      <div className="rounded-[8px] border border-[#DAD1C7] bg-white p-4 sm:p-5 shadow-soft-md text-[#241C21]">
        <div className="flex items-center justify-between border-b border-[#DAD1C7] pb-3 mb-3.5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-[#650039]" />
            <span className="text-xs font-semibold text-[#241C21]">
              1-Step Guest COD Order
            </span>
          </div>
          <span className="rounded-[4px] bg-[#EAF4F0] px-2.5 py-0.5 text-[10px] font-semibold text-[#146649]">
            Verified BD Phone
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-2 rounded-[8px] bg-[#FBF6EC] p-3.5 border border-[#DAD1C7]">
            <div className="text-xs font-semibold text-[#241C21]">
              {lang === "bn"
                ? "ক্রেতার তথ্য (লগইন ছাড়াই)"
                : "Buyer Details (No Login Needed)"}
            </div>
            <div className="rounded-[6px] bg-white border border-[#DAD1C7] px-3 py-2 text-xs text-[#241C21]">
              নাম: মো: রাহাত ইসলাম
            </div>
            <div className="rounded-[6px] bg-[#EAF4F0] border border-[#146649]/40 px-3 py-2 text-xs text-[#241C21] font-semibold flex items-center justify-between tabular-nums">
              <span>01878601610</span>
              <span className="inline-flex items-center gap-1 text-[#146649] text-[11px]">
                <Check className="h-3.5 w-3.5" /> Valid
              </span>
            </div>
            <div className="rounded-[6px] bg-white border border-[#DAD1C7] px-3 py-2 text-xs text-[#241C21]">
              ধানমন্ডি, ঢাকা - ১২০৯
            </div>
            <div className="flex gap-2 text-[11px] tabular-nums">
              <span className="flex-1 rounded-[6px] bg-[#650039] px-2.5 py-1.5 text-center font-semibold text-white">
                ঢাকা সিটি (৳60)
              </span>
              <span className="flex-1 rounded-[6px] bg-white border border-[#DAD1C7] px-2.5 py-1.5 text-center text-[#665C62] font-medium">
                ঢাকার বাইরে (৳120)
              </span>
            </div>
          </div>

          <div className="rounded-[8px] bg-[#FBF6EC] p-3.5 border border-[#DAD1C7] flex flex-col justify-between tabular-nums">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-[#241C21]">
                Order #1008 Summary
              </div>
              <div className="flex justify-between text-xs text-[#665C62]">
                <span>Sundarban Honey (1kg)</span>
                <span className="font-semibold text-[#241C21]">BDT 1,250</span>
              </div>
              <div className="flex justify-between text-xs text-[#146649] font-medium">
                <span>Discount (WELCOME100)</span>
                <span>- BDT 100</span>
              </div>
              <div className="flex justify-between text-xs text-[#665C62]">
                <span>Delivery (Inside Dhaka)</span>
                <span>BDT 60</span>
              </div>
              <div className="border-t border-[#DAD1C7] pt-2 flex justify-between text-sm font-bold text-[#241C21]">
                <span>Total Due (COD)</span>
                <span className="text-[#650039]">BDT 1,210</span>
              </div>
            </div>
            <div className="mt-3 rounded-[6px] bg-[#650039] py-2.5 text-center text-xs font-semibold text-white inline-flex items-center justify-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>অর্ডার নিশ্চিত করুন</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "categories") {
    return (
      <div className="rounded-[8px] border border-[#DAD1C7] bg-white p-4 sm:p-5 shadow-soft-md text-[#241C21]">
        <div className="flex items-center justify-between border-b border-[#DAD1C7] pb-3 mb-3.5">
          <div className="flex items-center gap-2">
            <FolderTree className="h-4 w-4 text-[#650039]" />
            <span className="text-xs font-semibold text-[#241C21]">
              Nested Category Tree & Auto Redirects
            </span>
          </div>
          <span className="rounded-[4px] bg-[#FBF6EC] border border-[#DAD1C7] px-2.5 py-0.5 text-[10px] font-semibold text-[#665C62]">
            Drag & Reorder
          </span>
        </div>
        <div className="space-y-2 text-xs">
          <div className="rounded-[6px] bg-[#FBF6EC] border border-[#DAD1C7] p-2.5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#241C21]">
              <Folder className="h-3.5 w-3.5 text-[#650039]" />
              <span>Organic Foods</span>
            </span>
            <span className="text-[#665C62] font-mono text-[11px]">
              /categories/organic-foods
            </span>
          </div>
          <div className="ml-5 rounded-[6px] bg-[#F6EBF1] border border-[#650039]/30 p-2.5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#650039]">
              <CornerDownRight className="h-3.5 w-3.5 text-[#650039]" />
              <span>Natural Honey</span>
            </span>
            <span className="text-[#650039] font-mono text-[11px]">
              /organic-foods/honey
            </span>
          </div>
          <div className="ml-10 rounded-[6px] bg-[#FBF6EC] border border-[#DAD1C7] p-2.5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[#241C21]">
              <CornerDownRight className="h-3.5 w-3.5 text-[#665C62]" />
              <span>Sundarban Raw Honey</span>
            </span>
            <span className="rounded-[4px] bg-[#EAF4F0] px-2 py-0.5 text-[10px] font-semibold text-[#146649]">
              308 Redirect Active
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "inventory") {
    return (
      <div className="rounded-[8px] border border-[#DAD1C7] bg-white p-4 sm:p-5 shadow-soft-md text-[#241C21]">
        <div className="flex items-center justify-between border-b border-[#DAD1C7] pb-3 mb-3.5">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-[#650039]" />
            <span className="text-xs font-semibold text-[#241C21]">
              PostgreSQL 17 Stock & Order Safeguards
            </span>
          </div>
          <span className="rounded-[4px] bg-[#EAF4F0] px-2.5 py-0.5 text-[10px] font-semibold text-[#146649]">
            Protected
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div className="rounded-[8px] bg-[#FBF6EC] border border-[#DAD1C7] p-3">
            <div className="text-[#665C62] font-medium text-[11px]">
              Order Reference
            </div>
            <div className="font-bold text-[#241C21] mt-1">
              No Duplicate Orders
            </div>
            <p className="text-[11px] text-[#665C62] mt-1 leading-relaxed">
              Repeated mobile taps keep the same order reference instead of creating duplicates.
            </p>
          </div>
          <div className="rounded-[8px] bg-[#F6EBF1] border border-[#650039]/25 p-3">
            <div className="text-[#650039] font-semibold text-[11px]">
              Stock Lock
            </div>
            <div className="font-bold text-[#241C21] mt-1">
              0% Overselling
            </div>
            <p className="text-[11px] text-[#665C62] mt-1 leading-relaxed">
              Locks the final item in stock so two buyers never claim the same piece.
            </p>
          </div>
          <div className="rounded-[8px] bg-[#FBF6EC] border border-[#DAD1C7] p-3">
            <div className="text-[#665C62] font-medium text-[11px]">
              Exact Totals
            </div>
            <div className="font-bold text-[#241C21] mt-1">
              Verified Prices
            </div>
            <p className="text-[11px] text-[#665C62] mt-1 leading-relaxed">
              Prices, discounts, and delivery fees are always verified on the server.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "admin") {
    return (
      <div className="rounded-[8px] border border-[#DAD1C7] bg-white p-4 sm:p-5 shadow-soft-md text-[#241C21]">
        <div className="flex items-center justify-between border-b border-[#DAD1C7] pb-3 mb-3.5">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-[#650039]" />
            <span className="text-xs font-semibold text-[#241C21]">
              Merchant Workspace — COD & Cash Breakdown
            </span>
          </div>
          <span className="text-[11px] font-medium text-[#665C62]">
            Today • BDT
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3 tabular-nums">
          <div className="rounded-[8px] bg-[#FBF6EC] border border-[#DAD1C7] p-2.5">
            <div className="text-[10px] font-medium text-[#665C62]">
              Placed Orders
            </div>
            <div className="text-sm font-bold text-[#241C21] mt-0.5">
              ৳ 4,85,200
            </div>
          </div>
          <div className="rounded-[8px] bg-[#EAF4F0] border border-[#146649]/25 p-2.5">
            <div className="text-[10px] font-semibold text-[#146649]">
              Paid (Collected)
            </div>
            <div className="text-sm font-bold text-[#146649] mt-0.5">
              ৳ 3,92,500
            </div>
          </div>
          <div className="rounded-[8px] bg-[#FDF5E6] border border-[#805100]/25 p-2.5">
            <div className="text-[10px] font-semibold text-[#805100]">
              Pending COD
            </div>
            <div className="text-sm font-bold text-[#805100] mt-0.5">
              ৳ 78,400
            </div>
          </div>
          <div className="rounded-[8px] bg-[#FBECEE] border border-[#A22A3A]/25 p-2.5">
            <div className="text-[10px] font-semibold text-[#A22A3A]">
              Returned
            </div>
            <div className="text-sm font-bold text-[#A22A3A] mt-0.5">
              ৳ 14,300
            </div>
          </div>
        </div>
        <div className="rounded-[6px] bg-[#FBF6EC] border border-[#DAD1C7] p-2.5 flex flex-wrap items-center justify-between gap-1.5 text-[11px] font-medium text-[#241C21]">
          <span className="text-[#805100] font-semibold">Pending</span>
          <ArrowRight className="h-3 w-3 text-[#665C62]" />
          <span className="text-[#245C82] font-semibold">In review</span>
          <ArrowRight className="h-3 w-3 text-[#665C62]" />
          <span>Shipped</span>
          <ArrowRight className="h-3 w-3 text-[#665C62]" />
          <span className="inline-flex items-center gap-1 rounded-[4px] bg-[#EAF4F0] px-2 py-0.5 text-[#146649] font-semibold">
            <span>Paid / Delivered</span>
            <Check className="h-3 w-3" />
          </span>
        </div>
      </div>
    );
  }

  if (type === "security") {
    return (
      <div className="rounded-[8px] border border-[#DAD1C7] bg-white p-4 sm:p-5 shadow-soft-md text-[#241C21]">
        <div className="flex items-center justify-between border-b border-[#DAD1C7] pb-3 mb-3.5">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#650039]" />
            <span className="text-xs font-semibold text-[#241C21]">
              Team Roles & Encrypted API Vault
            </span>
          </div>
          <span className="rounded-[4px] bg-[#EAF4F0] px-2.5 py-0.5 text-[10px] font-semibold text-[#146649]">
            2FA Enabled
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
          {[
            {
              role: "Shop Owner",
              access: "Full Settings + 2FA + Encrypted Keys",
            },
            {
              role: "Store Manager",
              access: "Products, Orders, Discounts & Reports",
            },
            {
              role: "Order Operator",
              access: "Confirm & Ship Orders Only",
            },
            {
              role: "Content Editor",
              access: "Storefront Pages, Photos & SEO Only",
            },
          ].map((r) => (
            <div
              key={r.role}
              className="rounded-[8px] bg-[#FBF6EC] border border-[#DAD1C7] p-3"
            >
              <div className="flex items-center gap-1.5 font-semibold text-[#241C21]">
                <Lock className="h-3.5 w-3.5 text-[#650039]" /> {r.role}
              </div>
              <div className="text-[11px] text-[#665C62] mt-1">{r.access}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "seo") {
    return (
      <div className="rounded-[8px] border border-[#DAD1C7] bg-white p-4 sm:p-5 shadow-soft-md text-[#241C21]">
        <div className="flex items-center justify-between border-b border-[#DAD1C7] pb-3 mb-3.5">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-[#650039]" />
            <span className="text-xs font-semibold text-[#241C21]">
              Search & Link Preview Output
            </span>
          </div>
          <span className="rounded-[4px] bg-[#EBF2F7] px-2.5 py-0.5 text-[10px] font-semibold text-[#245C82]">
            JSON-LD Schema
          </span>
        </div>
        <div className="rounded-[8px] bg-[#FBF6EC] border border-[#DAD1C7] p-3.5 space-y-2">
          <div className="text-[11px] font-medium text-[#146649]">
            https://yourshop.com › products › sundarban-honey
          </div>
          <div className="text-sm font-bold text-[#650039]">
            Sundarban Raw Khalisha Honey (1kg) — Pure & Natural
          </div>
          <div className="text-xs text-[#665C62] leading-relaxed tabular-nums">
            <span className="text-[#146649] font-semibold">
              In Stock · BDT 1,250.00
            </span>{" "}
            — Show a price, a photo, and the exact details buyers ask for in search and social previews.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[8px] border border-[#DAD1C7] bg-white p-4 sm:p-5 shadow-soft-md text-[#241C21]">
      <div className="flex items-center justify-between border-b border-[#DAD1C7] pb-3 mb-3.5">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-[#650039]" />
          <span className="text-xs font-semibold text-[#241C21]">
            A Shop of Your Own
          </span>
        </div>
        <span className="rounded-[4px] bg-[#EAF4F0] px-2.5 py-0.5 text-[10px] font-semibold text-[#146649]">
          100% Isolated
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
        {[
          "Your Own Custom Domain & SSL",
          "Dedicated PostgreSQL Database",
          "Guided Shop Setup Wizard",
          "0% Sales Commission Forever",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-[8px] bg-[#FBF6EC] border border-[#DAD1C7] p-3 font-semibold text-[#241C21]"
          >
            <CheckCircle2 className="h-4 w-4 text-[#146649] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
