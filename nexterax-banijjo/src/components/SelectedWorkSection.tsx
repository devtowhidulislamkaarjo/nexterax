"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Eye,
  Lock,
  MessageCircle,
  X,
} from "lucide-react";
import { buildWhatsAppUrl, type Lang } from "@/data/banijjo-data";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BrandThreeDots } from "@/components/BrandThreeDots";

type WorkCategory = "all" | "ecommerce" | "crm" | "portfolio";

interface PortfolioProject {
  id: string;
  category: Exclude<WorkCategory, "all">;
  categoryLabel: { bn: string; en: string };
  title: { bn: string; en: string };
  domainDisplay: string;
  liveUrl?: string;
  screenshotUrl: string;
  summary: { bn: string; en: string };
  deliverables: { bn: string[]; en: string[] };
}

const SELECTED_PROJECTS: PortfolioProject[] = [
  {
    id: "nexaamart",
    category: "ecommerce",
    categoryLabel: {
      bn: "ই-কমার্স প্ল্যাটফর্ম",
      en: "E-Commerce Storefront",
    },
    title: {
      bn: "Nexa Mart BD",
      en: "Nexa Mart BD",
    },
    domainDisplay: "nexaamartbd.com",
    liveUrl: "https://nexaamartbd.com/",
    screenshotUrl: "/portfolio/nexaamart-website.jpg",
    summary: {
      bn: "প্রিমিয়াম ঘড়ি, ব্যাগ, জুয়েলারি, বিউটি ও কিউরেটেড গিফট আইটেমের পূর্ণাঙ্গ ই-কমার্স স্টোরফ্রন্ট — দ্রুত মোবাইল ক্যাটালগ ব্রাউজিং ও সারাদেশে ক্যাশ অন ডেলিভারি সুবিধাসহ।",
      en: "Full-scale D2C e-commerce storefront for premium watches, bags, jewelry, beauty, and curated gifts with fast mobile browsing and nationwide Cash on Delivery.",
    },
    deliverables: {
      bn: [
        "মাল্টি-ক্যাটাগরি প্রোডাক্ট ক্যাটালগ",
        "ওয়ান-স্টেপ ক্যাশ অন ডেলিভারি চেকআউট",
        "কাস্টম ব্র্যান্ডিং ও অর্ডার ম্যানেজমেন্ট",
      ],
      en: [
        "Multi-Category Product Catalog",
        "1-Step Nationwide COD Checkout",
        "Custom Storefront & Order Workspace",
      ],
    },
  },
  {
    id: "fluentlearner-crm",
    category: "crm",
    categoryLabel: {
      bn: "কাস্টম ইন্টারনাল সিআরএম",
      en: "Custom Internal CRM",
    },
    title: {
      bn: "FluentLearner — সেলস ও অ্যাডমিন CRM",
      en: "FluentLearner — Admin & Sales CRM",
    },
    domainDisplay: "Internal Office CRM",
    screenshotUrl: "/portfolio/fluentlearner-crm.jpg",
    summary: {
      bn: "ফ্লুয়েন্ট লার্নারের সেলস ও অ্যাডমিশন টিমের জন্য নির্মিত ডেডিকেটেড ইন্টারনাল সিআরএম — অ্যাক্টিভ লিড পাইপলাইন, ফলো-আপ কিউ অ্যালার্ট, স্টুডেন্ট এনরোলমেন্ট, বকেয়া হিসাব ও টিম পারফরম্যান্স ট্র্যাকিং।",
      en: "Dedicated internal CRM & performance hub featuring active lead pipelines, automated follow-up queue alerts, student enrollment & due tracking, and daily staff activity metrics.",
    },
    deliverables: {
      bn: [
        "লিড পাইপলাইন ও রিয়েল-টাইম ফলো-আপ অ্যালার্ট",
        "এনরোলমেন্ট ও বকেয়া কালেকশন লেজার",
        "টিম অ্যাক্টিভ-টাইম ও ডেইলি KPI বোর্ড",
      ],
      en: [
        "Lead Pipeline & Follow-Up Queue Alerts",
        "Student Enrollment & Due Ledger",
        "Executive Active-Time & Daily KPI Board",
      ],
    },
  },
  {
    id: "legalmax",
    category: "portfolio",
    categoryLabel: {
      bn: "অর্গানাইজেশনাল পোর্টফোলিও ওয়েবসাইট",
      en: "Organizational Portfolio Website",
    },
    title: {
      bn: "LegalMax BD",
      en: "LegalMax BD",
    },
    domainDisplay: "thelegalmax.com",
    liveUrl: "https://thelegalmax.com/",
    screenshotUrl: "/portfolio/legalmax-website.jpg",
    summary: {
      bn: "ইনকাম ট্যাক্স রিটার্ন, ভ্যাট কমপ্লায়েন্স, RJSC কোম্পানি রেজিস্ট্রেশন ও কর্পোরেট আইনি সেবার দ্বিভাষিক (বাংলা/EN) পোর্টফোলিও ওয়েবসাইট এবং ইন্টারঅ্যাক্টিভ ট্যাক্স ক্যালকুলেটর।",
      en: "Bilingual (Bangla/EN) legal & tax advisory portfolio website equipped with an interactive Income Tax Calculator, structured service directory, and direct WhatsApp consultation.",
    },
    deliverables: {
      bn: [
        "দ্বিভাষিক (বাংলা ও English) ইউজার ইন্টারফেস",
        "ইন্টারঅ্যাক্টিভ ইনকাম ট্যাক্স ক্যালকুলেটর",
        "সার্ভিস ডিরেক্টরি ও ডাইরেক্ট কনসালটেশন ফ্লো",
      ],
      en: [
        "Bilingual (Bangla & English) Experience",
        "Interactive Income Tax Calculator",
        "Structured Legal Service Directory",
      ],
    },
  },
  {
    id: "foliobd",
    category: "portfolio",
    categoryLabel: {
      bn: "ডিজিটাল পোর্টফোলিও প্ল্যাটফর্ম",
      en: "Digital Portfolio & NFC Platform",
    },
    title: {
      bn: "Folio BD",
      en: "Folio BD",
    },
    domainDisplay: "foliobd.com",
    liveUrl: "https://foliobd.com/",
    screenshotUrl: "/portfolio/foliobd-og.jpg",
    summary: {
      bn: "স্মার্ট NFC বিজনেস কার্ড, ওয়ান-ট্যাপ ডিজিটাল ইন্ট্রো প্রোফাইল এবং প্রফেশনাল পার্সোনাল পোর্টফোলিও ওয়েবসাইট তৈরির আধুনিক প্ল্যাটফর্ম।",
      en: "Smart NFC business card and personal portfolio platform where a single phone tap opens a custom digital intro card and lifetime portfolio website.",
    },
    deliverables: {
      bn: [
        "স্মার্ট NFC + QR ডাইনামিক প্রোফাইল সিস্টেম",
        "ইনস্ট্যান্ট ডিজিটাল ইন্ট্রো ও পোর্টফোলিও পেজ",
        "কাস্টম কার্ড অর্ডার ও সারাদেশে ডেলিভারি ফ্লো",
      ],
      en: [
        "Smart NFC + QR Dynamic Profile Engine",
        "Instant Digital Intro & Portfolio Pages",
        "Custom Card Ordering & Nationwide Delivery",
      ],
    },
  },
];

export function SelectedWorkSection({ lang }: { lang: Lang }) {
  const [activeFilter, setActiveFilter] = useState<WorkCategory>("all");
  const [zoomedProject, setZoomedProject] = useState<PortfolioProject | null>(
    null
  );

  const filteredProjects = SELECTED_PROJECTS.filter((project) =>
    activeFilter === "all" ? true : project.category === activeFilter
  );

  const filters: { id: WorkCategory; bn: string; en: string }[] = [
    { id: "all", bn: "সব প্রজেক্ট (৪)", en: "All Work (4)" },
    { id: "ecommerce", bn: "ই-কমার্স", en: "E-Commerce" },
    { id: "crm", bn: "সিআরএম ও সিস্টেম", en: "Internal CRM" },
    { id: "portfolio", bn: "পোর্টফোলিও ও প্ল্যাটফর্ম", en: "Portfolio & Web" },
  ];

  return (
    <section
      id="our-work"
      className="py-20 sm:py-28 bg-[#FBF6EC] border-t border-[#DAD1C7]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Category Filter */}
        <ScrollReveal
          variant="fade-up"
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#650039]">
              {lang === "bn"
                ? "আমাদের নির্বাচিত কাজ ও কেস স্টাডি"
                : "Selected Live Work & Systems"}
            </p>
            <h2 className="brand-title mt-3 text-2xl sm:text-[40px] sm:leading-[48px] font-bold text-[#241C21]">
              {lang === "bn"
                ? "বাস্তব বিজনেসের জন্য আমাদের তৈরি লাইভ ওয়েবসাইট ও সিস্টেম"
                : "Real platforms, storefronts, and CRMs built by our team"}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#665C62] leading-relaxed">
              {lang === "bn"
                ? "ই-কমার্স ব্র্যান্ড থেকে শুরু করে ইন্টারনাল অফিস সিআরএম, কর্পোরেট পোর্টফোলিও এবং স্মার্ট ডিজিটাল প্ল্যাটফর্ম—সরাসরি লাইভ প্রজেক্টগুলো ঘুরে দেখুন।"
                : "From flagship D2C storefronts to custom executive CRMs, legal advisory portals, and smart NFC portfolio platforms."}
            </p>
          </div>

          <div className="inline-flex flex-wrap gap-1.5 rounded-[8px] border border-[#DAD1C7] bg-white p-1.5 self-start lg:self-auto">
            {filters.map((tab) => {
              const active = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`rounded-[6px] px-3.5 py-2 text-xs font-semibold transition-all ${
                    active
                      ? "bg-[#650039] text-white shadow-2xs"
                      : "text-[#665C62] hover:text-[#241C21] hover:bg-[#FBF6EC]"
                  }`}
                >
                  {lang === "bn" ? tab.bn : tab.en}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* 2-Column Project Showcase Grid */}
        <div
          key={activeFilter}
          className="grid grid-cols-1 lg:grid-cols-2 gap-7 animate-panel-reveal"
        >
          {filteredProjects.map((project, idx) => {
            const crmInquiryUrl = buildWhatsAppUrl(
              `Hello NexteraX Digital! I saw the *${project.title.en}* project in your portfolio and would like to build a similar system for my organization.`
            );

            return (
              <ScrollReveal
                key={project.id}
                variant="fade-up"
                delay={idx * 80}
                className="group rounded-[12px] border border-[#DAD1C7] bg-white overflow-hidden shadow-soft-md hover:border-[#650039] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Browser Chrome Bar */}
                  <div className="bg-[#241C21] px-4 py-2.5 flex items-center justify-between gap-3 text-xs text-white">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <BrandThreeDots size={6} color="#FF6633" />
                      <span className="truncate rounded-[4px] bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/90">
                        {project.domainDisplay}
                      </span>
                    </div>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FF6633] hover:text-white transition shrink-0"
                      >
                        <span>
                          {lang === "bn" ? "লাইভ সাইট" : "Live Site"}
                        </span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-white/75 shrink-0">
                        <Lock className="h-3 w-3 text-[#FF6633]" />
                        <span>
                          {lang === "bn" ? "প্রাইভেট সিআরএম" : "Private CRM"}
                        </span>
                      </span>
                    )}
                  </div>

                  {/* Visual Preview Viewport */}
                  <div className="relative h-56 sm:h-64 w-full border-b border-[#DAD1C7] bg-[#FBF6EC] overflow-hidden">
                    <div
                      onClick={() => setZoomedProject(project)}
                      className="cursor-pointer relative h-full w-full overflow-hidden"
                    >
                      <img
                        src={project.screenshotUrl}
                        alt={project.title.en}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setZoomedProject(project);
                        }}
                        className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-[6px] bg-[#241C21]/85 hover:bg-[#650039] px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm transition"
                      >
                        <Eye className="h-3.5 w-3.5 text-[#FF6633]" />
                        <span>
                          {lang === "bn" ? "বড় করে দেখুন" : "Inspect Screen"}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-block rounded-[4px] bg-[#FF6633] px-2.5 py-1 text-[11px] font-bold text-[#241C21]">
                        {project.categoryLabel[lang]}
                      </span>
                      <span className="text-xs font-medium text-[#665C62]">
                        NexteraX Digital Build
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#241C21] group-hover:text-[#650039] transition-colors">
                        {project.title[lang]}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#665C62] leading-relaxed">
                        {project.summary[lang]}
                      </p>
                    </div>

                    <ul className="grid grid-cols-1 gap-1.5 pt-2 border-t border-[#DAD1C7]/70">
                      {project.deliverables[lang].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs font-medium text-[#241C21]"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#146649] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-colors"
                    >
                      <span>
                        {lang === "bn"
                          ? "লাইভ ওয়েবসাইট ভিজিট করুন"
                          : "Visit Live Website"}
                      </span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setZoomedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                      <span>
                        {lang === "bn"
                          ? "সিআরএম ড্যাশবোর্ড প্রিভিউ দেখুন"
                          : "Preview CRM Dashboard"}
                      </span>
                    </button>
                  )}

                  <a
                    href={crmInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] hover:border-[#650039] px-4 py-3 text-xs font-semibold text-[#241C21] transition-colors"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-[#650039]" />
                    <span>
                      {lang === "bn" ? "এমন প্রজেক্ট বানান" : "Build Similar"}
                    </span>
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Screenshot Lightbox Modal */}
      {zoomedProject && zoomedProject.screenshotUrl && (
        <div
          onClick={() => setZoomedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#241C21]/75 backdrop-blur-sm p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl rounded-[12px] border border-[#DAD1C7] bg-white overflow-hidden shadow-2xl animate-panel-reveal"
          >
            <div className="bg-[#241C21] px-4 sm:px-6 py-3 flex items-center justify-between text-white">
              <div className="flex items-center gap-3 min-w-0">
                <BrandThreeDots size={6} color="#FF6633" />
                <span className="text-xs sm:text-sm font-bold truncate">
                  {zoomedProject.title[lang]}
                </span>
                <span className="hidden sm:inline-block rounded-[4px] bg-white/10 px-2 py-0.5 text-[11px] text-white/80">
                  {zoomedProject.domainDisplay}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setZoomedProject(null)}
                className="rounded-[6px] bg-white/10 hover:bg-white/20 p-1.5 text-white transition"
                aria-label="Close preview"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[75vh] overflow-auto bg-[#FBF6EC] p-3 sm:p-5">
              <img
                src={zoomedProject.screenshotUrl}
                alt={zoomedProject.title.en}
                className="w-full h-auto rounded-[8px] border border-[#DAD1C7]"
              />
            </div>

            <div className="px-4 sm:px-6 py-3.5 bg-white border-t border-[#DAD1C7] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <p className="text-xs text-[#665C62]">
                {zoomedProject.summary[lang]}
              </p>
              <div className="flex items-center gap-2.5 shrink-0">
                {zoomedProject.liveUrl && (
                  <a
                    href={zoomedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-4 py-2 text-xs font-semibold text-white transition"
                  >
                    <span>
                      {lang === "bn" ? "লাইভ সাইটে যান" : "Open Live Site"}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setZoomedProject(null)}
                  className="rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] px-4 py-2 text-xs font-semibold text-[#241C21]"
                >
                  {lang === "bn" ? "বন্ধ করুন" : "Close"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
