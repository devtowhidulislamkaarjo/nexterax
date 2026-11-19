"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  CUSTOM_ENGINEERING_SERVICES,
  type Lang,
} from "@/data/custom-services-data";
import { ScrollReveal } from "@/components/ScrollReveal";

export function OtherServicesSection({ lang }: { lang: Lang }) {
  return (
    <section
      id="other-services"
      className="py-20 sm:py-28 bg-white border-t border-[#DAD1C7]"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#DAD1C7]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#665C62]">
                {lang === "bn" ? "অন্যান্য সার্ভিস" : "Other Services"}
              </p>
              <h2 className="brand-title mt-2 text-2xl sm:text-[32px] sm:leading-[40px] font-bold text-[#241C21]">
                {lang === "bn"
                  ? "কাস্টম ওয়েবসাইট ও সফটওয়্যার ডেভেলপমেন্ট"
                  : "Custom websites, internal tools, and enterprise systems"}
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#241C21] hover:text-[#650039] transition-colors shrink-0"
            >
              <span>
                {lang === "bn"
                  ? "সার্ভিস পেজটি দেখুন"
                  : "Open services page"}
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="divide-y divide-[#DAD1C7] border-b border-[#DAD1C7]">
          {CUSTOM_ENGINEERING_SERVICES.map((service, idx) => (
            <ScrollReveal
              key={service.id}
              variant="fade-up"
              delay={idx * 40}
            >
              <Link
                href={`/services#${service.id}`}
                className="group py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-8 transition-colors hover:bg-[#FBF6EC]/50 px-2 -mx-2 rounded-[6px]"
              >
                <div className="flex items-baseline gap-4 sm:w-5/12 shrink-0">
                  <span className="text-xs font-medium text-[#665C62] tabular-nums">
                    {service.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-[#241C21] group-hover:text-[#650039] transition-colors">
                    {service.title[lang]}
                  </h3>
                </div>

                <p className="text-sm text-[#665C62] sm:flex-1 pl-7 sm:pl-0">
                  {service.summary[lang]}
                </p>

                <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-[#665C62] group-hover:text-[#241C21] shrink-0 transition-colors">
                  <span>{lang === "bn" ? "বিস্তারিত" : "Details"}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
