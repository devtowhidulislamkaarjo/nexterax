"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Home,
  MessageCircle,
  MonitorPlay,
  RotateCcw,
  Send,
  Shirt,
  ShoppingCart,
  Sparkles,
  Sprout,
} from "lucide-react";
import { buildWhatsAppUrl, type Lang } from "@/data/banijjo-data";
import type { PresetCode } from "@/data/live-store-presets";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BrandThreeDots } from "@/components/BrandThreeDots";

interface ChatMessage {
  id: string;
  sender: "bot" | "owner";
  text: string;
  presetAction?: PresetCode;
  actionLabel?: string;
  planHighlight?: string;
  whatsappPrompt?: string;
}

const SHOP_OWNER_TYPES: {
  id: string;
  preset: PresetCode;
  icon: React.ElementType;
  labelBn: string;
  labelEn: string;
  ownerMsgBn: string;
  ownerMsgEn: string;
  botReplyBn: string;
  botReplyEn: string;
  actionBn: string;
  actionEn: string;
}[] = [
  {
    id: "food",
    preset: "food",
    icon: Sprout,
    labelBn: "অর্গানিক ফুড ও এগ্রো ব্র্যান্ড",
    labelEn: "Organic Food & Agro Brand",
    ownerMsgBn: "আমি মধু, ঘি বা অর্গানিক ফুড সেল করি — আমার অ্যাড কনভার্সন কীভাবে বাড়বে?",
    ownerMsgEn: "I run an organic food & grocery brand — how will this boost my ad conversions?",
    botReplyBn:
      "ফুড ব্র্যান্ডের ক্রেতারা ইম্পালসে কেনেন! আমাদের ‘হাই-রিপিট ফুড থিম’-এ ৫০০ গ্রাম/১ কেজি প্যাক সিলেক্টর, কম্বো বান্ডেল অফার এবং ১৫-সেকেন্ডের ওয়ান-ট্যাপ COD চেকআউট আছে—যাতে অ্যাড থেকে আসা ক্রেতা চিন্তা করার আগেই অর্ডার কনফার্ম করে ফেলেন!",
    botReplyEn:
      "Food shoppers buy fast when trust is instant! Our Food & Agro preset pairs weight/combo selectors with a 15-second 1-tap COD flow and free-delivery thresholds that lift your average order value immediately.",
    actionBn: "লাইভ ফুড স্টোর টেস্ট করুন",
    actionEn: "Test-Drive Food Store",
  },
  {
    id: "fashion",
    preset: "fashion",
    icon: Shirt,
    labelBn: "ফ্যাশন, পাঞ্জাবি ও ক্লোদিং লেবেল",
    labelEn: "Fashion, Panjabi & Apparel Label",
    ownerMsgBn: "আমার ক্লোদিং ব্র্যান্ড আছে — নতুন ড্রপ ও সাইজ স্টক কীভাবে ম্যানেজ হবে?",
    ownerMsgEn: "I own an apparel label — how does it handle seasonal drops & size stock?",
    botReplyBn:
      "ক্লোদিং লেবেলের জন্য এতে আছে এডিটোরিয়াল লুকবুক, S–XXL সাইজ পিকার এবং ‘Atomic Stock Lock’! ঈদের রাশে শেষ M সাইজটি বিক্রি হওয়ামাত্র অটো-লক হয়ে যাবে—ওভারসেলের জিরো টেনশন। আর নতুন ড্রপের ব্যানার আপনি নিজেই ৫ মিনিটে লাইভ করতে পারবেন!",
    botReplyEn:
      "Built for high-velocity drops! Showcase editorial lookbooks with S–XXL size pickers backed by Atomic Stock Locking — the instant your final Medium sells out, overselling is blocked automatically.",
    actionBn: "লাইভ ফ্যাশন লেবেল দেখুন",
    actionEn: "Test-Drive Fashion Store",
  },
  {
    id: "cosmetics",
    preset: "cosmetics",
    icon: Sparkles,
    labelBn: "স্কিনকেয়ার ও বিউটি",
    labelEn: "Skincare & Beauty",
    ownerMsgBn: "স্কিনকেয়ার ও বিউটি ব্র্যান্ডের জন্য এতে কী কী প্রিমিয়াম ফিচার আছে?",
    ownerMsgEn: "What makes Banijjo convert so well for skincare & beauty brands?",
    botReplyBn:
      "বিউটি ক্রেতারা ফ্যাক্ট ও প্রিমিয়াম লুক দেখে ভরসা পান! প্রতিটি প্রোডাক্ট পেজে শেড/মিলি ভ্যারিয়েন্ট, ইনগ্রেডিয়েন্ট ও রুটিন গাইড, প্রোমো কুপন (যেমন WELCOME10) এবং VIP রিপিট কাস্টমার ট্র্যাকিং বিল্ট-ইন পাচ্ছেন।",
    botReplyEn:
      "Beauty buyers convert on authority and aesthetic clarity. Present shade/volume pickers, structured routine & ingredient guides, promo codes, and repeat VIP buyer tracking out of the box.",
    actionBn: "লাইভ বিউটি স্টোর দেখুন",
    actionEn: "Test-Drive Beauty Store",
  },
  {
    id: "tech",
    preset: "tech",
    icon: Cpu,
    labelBn: "আইটি ও গ্যাজেট শপ",
    labelEn: "IT, Tech & Gadgets",
    ownerMsgBn: "আমার আইটি ও স্মার্ট গ্যাজেট শপ আছে — স্পেসিফিকেশন ও ওয়ারেন্টি কীভাবে দেখাবো?",
    ownerMsgEn: "I sell IT gear & smart gadgets — how does it showcase specs & official warranty?",
    botReplyBn:
      "টেক ক্রেতারা স্পেক ও ওয়ারেন্টি দেখে কেনেন! আমাদের ‘আইটি ও গ্যাজেট থিম’-এ ক্লিন স্পেসিফিকেশন টেবিল, কালার/সুইচ/ওয়াটেজ ভ্যারিয়েন্ট, অফিসিয়াল ওয়ারেন্টি ব্যাজ এবং ডুপ্লিকেট অর্ডার গার্ড বিল্ট-ইন আছে!",
    botReplyEn:
      "Tech shoppers buy on specs and warranty trust! Our IT & Gadgets preset highlights structured spec tables, switch/wattage variants, official warranty callouts, and atomic flash-sale stock locks.",
    actionBn: "লাইভ আইটি ও গ্যাজেট শপ দেখুন",
    actionEn: "Test-Drive IT & Gadget Store",
  },
  {
    id: "supershop",
    preset: "supershop",
    icon: ShoppingCart,
    labelBn: "সুপার শপ ও ডেইলি মার্ট",
    labelEn: "Super Shop & Mart",
    ownerMsgBn: "আমি অনলাইন সুপার শপ বা ডিপার্টমেন্টাল স্টোর করতে চাই — বড় কার্ট কীভাবে কাজ করবে?",
    ownerMsgEn: "I want to launch an online Super Shop — how fast is multi-item grocery ordering?",
    botReplyBn:
      "সুপার শপের ক্রেতারা একসাথে ১০–১৫টি পণ্য কার্টে নেন! আমাদের ‘সুপার শপ থিম’-এ কুইক-অ্যাড কম্প্যাক্ট কার্ড, ডিপার্টমেন্ট মেগা মেনু, ফ্যামিলি বাজার কম্বো এবং ফ্রি ডেলিভারি প্রোগ্রেস বার থাকায় গড় অর্ডার ভ্যালু (AOV) অনেক বেড়ে যায়!",
    botReplyEn:
      "Super Shop buyers build 10–15 item baskets! Our Super Mart preset features rapid-add compact cards, department aisles, family bazar bundles, and a live free-shipping bar that boosts cart size.",
    actionBn: "লাইভ সুপার শপ দেখুন",
    actionEn: "Test-Drive Super Shop",
  },
  {
    id: "electronics",
    preset: "electronics",
    icon: Home,
    labelBn: "হোম ও কিচেন অ্যাপ্লায়েন্স",
    labelEn: "Home & Appliances",
    ownerMsgBn: "কিচেন ও হোম অ্যাপ্লায়েন্স ব্র্যান্ডের জন্য এই স্টোর কীভাবে সাহায্য করবে?",
    ownerMsgEn: "How does Banijjo support home & kitchen appliance stores?",
    botReplyBn:
      "হাই-টিকেট হোম অ্যাপ্লায়েন্সের জন্য এতে আছে প্রিমিয়াম আর্কিটেকচারাল লেআউট, ১–২ বছরের সার্ভিস ওয়ারেন্টি হাইলাইট, কুরিয়ার ক্যাশফ্লো ট্র্যাকার এবং Google JSON-LD স্কিমা—যাতে ক্রেতারা সার্চ করেই আপনার শোরুম খুঁজে পান!",
    botReplyEn:
      "High-ticket appliances convert with authority! Showcase 2-year warranty badges, motor/material specs, safe nationwide COD rules, and rich Google search snippets automatically.",
    actionBn: "লাইভ অ্যাপ্লায়েন্স শপ দেখুন",
    actionEn: "Test-Drive Appliance Store",
  },
];

const QUICK_QUESTIONS = [
  {
    id: "inbox-vs-site",
    qBn: "মেসেজে অর্ডার নেওয়ার চেয়ে নিজস্ব সাইটে সেলস দ্বিগুণ হয় কেন?",
    qEn: "Why do top sellers convert 2x more than Inbox?",
    aBn: "মেসেজে ‘প্রাইস কত?’ রিপ্লাই দিতে ৫ মিনিট দেরি হলেই কাস্টমার স্ক্রল করে অন্য পেজে চলে যায়! আর বাণিজ্য স্টুডিওতে অ্যাডে ক্লিক করলেই ০.৮ সেকেন্ডে পুরো কালেকশন খুলে যায়, ক্রেতা ২৪/৭ নিজেই অর্ডার প্লেস করে এবং Server CAPI আপনার অ্যাড খরচ কমিয়ে আনে।",
    aEn: "A 5-minute DM delay loses impulse buyers forever. With your own sub-second store, paid traffic lands on a full brand experience, checks out 24/7 in 15 seconds, and feeds Meta Server CAPI to slash your ad CPA.",
  },
  {
    id: "no-coding",
    qBn: "ডেভেলপার ছাড়া নিজেই ক্যাম্পেইন সাজাতে পারবো?",
    qEn: "Can my team launch campaigns without a developer?",
    aBn: "১০০%! আমাদের নো-কোড ব্র্যান্ড স্টুডিও দিয়ে আপনি নিজেই ক্যানভা চালানোর মতো সহজে নতুন ব্যানার, ফ্ল্যাশ-সেল সেকশন, কুপন ও প্রাইস আপডেট করতে পারবেন—এবং মোবাইল প্রিভিউ দেখে ১ ক্লিকেই লাইভ করতে পারবেন।",
    aEn: "100%. Update hero banners, launch flash-sale blocks, create promo codes, and preview on mobile inside the No-Code Brand Studio — zero coding or agency retainers required.",
  },
  {
    id: "price-plan",
    qBn: "ইনভেস্টমেন্ট কত? মাসিক কোনো কমিশন আছে?",
    qEn: "What’s the investment? Any monthly cut?",
    aBn: "আপনার সেলসের ওপর আজীবন ০% কমিশন এবং কোনো মাসিক ডলার ভাড়া নেই! ওয়ান-টাইম স্টার্টার লঞ্চপ্যাড ৳২৫,০০০ এবং কুরিয়ার, বিকাশ, Meta Pixel ও ৩০টি প্রোডাক্ট রেডি করে দেওয়াসহ টপ সেলারদের পছন্দের ‘বিজনেস প্রো স্কেলার’ ৳৪৫,০০০।",
    aEn: "0% sales commission forever and zero monthly USD rent! Starter Launchpad is BDT 25,000 one-time, and our flagship turnkey Business Pro Scaler (with Couriers, bKash, CAPI & 30 products uploaded) is BDT 45,000.",
    planHighlight: "৳ ২৫,০০০ – ৳ ৪৫,০০০ • আজীবন ০% কমিশন",
  },
  {
    id: "cod-accounting",
    qBn: "কুরিয়ার ও COD ক্যাশফ্লো কীভাবে ট্র্যাক হয়?",
    qEn: "How does it stop COD cashflow confusion?",
    aBn: "টপ সেলারদের সবচেয়ে প্রিয় ফিচার এটি! আপনার ড্যাশবোর্ডে ‘মোট অর্ডার প্লেসড’, ‘ডেলিভারড সেলস’, ‘ব্যাংকে/হাতে আসা আসল ক্যাশ (Paid)’ এবং ‘কুরিয়ারে আটকে থাকা বকেয়া COD’ আলাদাভাবে লাইভ দেখায়—যাতে প্রফিটের হিসাব থাকে ক্রিস্টাল ক্লিয়ার!",
    aEn: "Instead of lumping uncollected parcels into fake revenue, your workspace separates Placed Value, Delivered Sales, Actual Collected Cash, and Pending Courier COD in real time.",
  },
];

function BanijjoBotAvatar({ isTyping }: { isTyping: boolean }) {
  return (
    <div className="relative inline-flex items-center justify-center shrink-0">
      <div className="relative h-20 w-20 sm:h-22 sm:w-22 rounded-[12px] bg-[#650039] border border-[#4D002B] shadow-soft-md flex items-center justify-center animate-bot-float">
        <svg
          viewBox="0 0 80 80"
          className="h-14 w-14 sm:h-15 sm:w-15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="31" cy="12" r="3.2" fill="#FF6633" />
          <circle cx="40" cy="12" r="3.2" fill="#FF6633" />
          <circle cx="49" cy="12" r="3.2" fill="#FF6633" />
          <rect x="15" y="20" width="50" height="42" rx="12" fill="#FBF6EC" />
          <rect x="21" y="27" width="38" height="26" rx="8" fill="#241C21" />
          <g className="animate-bot-blink">
            <circle cx="32" cy="38" r="3.5" fill="#FF6633" />
            <circle cx="48" cy="38" r="3.5" fill="#FF6633" />
            <circle cx="33.1" cy="36.9" r="1.1" fill="#FFFFFF" />
            <circle cx="49.1" cy="36.9" r="1.1" fill="#FFFFFF" />
          </g>
          {isTyping ? (
            <rect x="35" y="45" width="10" height="3" rx="1.5" fill="#FBF6EC" />
          ) : (
            <path
              d="M34 45.2C35.8 47.6 44.2 47.6 46 45.2"
              stroke="#FBF6EC"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          )}
        </svg>

        <span className="absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white border border-[#DAD1C7]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#146649]" />
        </span>
      </div>
    </div>
  );
}

export function ShopOwnerAdvisorBot({
  lang,
  onLaunchPreset,
}: {
  lang: Lang;
  onLaunchPreset: (preset: PresetCode) => void;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const initialText =
      lang === "bn"
        ? "হেই ফাউন্ডার! 👋 পেজের অর্ডার স্কেল করতে চাচ্ছেন? বাম পাশ থেকে আপনার ব্র্যান্ড ক্যাটাগরি সিলেক্ট করুন অথবা নিচের যেকোনো প্রশ্নে ট্যাপ করুন—৩০ সেকেন্ডে দেখিয়ে দিচ্ছি আপনার স্টোর কীভাবে কাজ করবে!"
        : "Hey Founder! 👋 Ready to scale past inbox limits? Pick your brand category on the left or tap a question below to see your exact growth setup in 30 seconds!";

    if (!hasGreeted) {
      const node = sectionRef.current;
      if (!node || !("IntersectionObserver" in window)) {
        setMessages([{ id: "welcome", sender: "bot", text: initialText }]);
        setHasGreeted(true);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setHasGreeted(true);
              setIsTyping(true);
              setTimeout(() => {
                setIsTyping(false);
                setMessages([
                  { id: "welcome", sender: "bot", text: initialText },
                ]);
              }, 480);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(node);
      return () => observer.disconnect();
    } else {
      setMessages((prev) =>
        prev.length === 1 && prev[0].id === "welcome"
          ? [{ id: "welcome", sender: "bot", text: initialText }]
          : prev
      );
    }
  }, [lang, hasGreeted]);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  const pushExchange = (
    ownerText: string,
    botReply: Omit<ChatMessage, "id" | "sender">
  ) => {
    if (isTyping) return;
    const ownerMsg: ChatMessage = {
      id: `owner-${Date.now()}`,
      sender: "owner",
      text: ownerText,
    };
    setMessages((prev) => [...prev, ownerMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          ...botReply,
        },
      ]);
    }, 480);
  };

  const handleSelectShopType = (item: (typeof SHOP_OWNER_TYPES)[number]) => {
    pushExchange(lang === "bn" ? item.ownerMsgBn : item.ownerMsgEn, {
      text: lang === "bn" ? item.botReplyBn : item.botReplyEn,
      presetAction: item.preset,
      actionLabel: lang === "bn" ? item.actionBn : item.actionEn,
    });
  };

  const handleSelectQuestion = (q: (typeof QUICK_QUESTIONS)[number]) => {
    pushExchange(lang === "bn" ? q.qBn : q.qEn, {
      text: lang === "bn" ? q.aBn : q.aEn,
      planHighlight: q.planHighlight,
    });
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed || isTyping) return;
    setInputValue("");

    const lower = trimmed.toLowerCase();
    let replyText = "";
    let presetAction: PresetCode | undefined;
    let actionLabel: string | undefined;

    if (
      lower.includes("price") ||
      lower.includes("cost") ||
      lower.includes("কত") ||
      lower.includes("দাম") ||
      lower.includes("খরচ") ||
      lower.includes("টাকা")
    ) {
      replyText =
        lang === "bn"
          ? "০% মাসিক সেলস কমিশন! ওয়ান-টাইম স্টার্টার লঞ্চপ্যাড ৳২৫,০০০ এবং কুরিয়ার, বিকাশ ও ৩০টি প্রোডাক্ট রেডি করে দেওয়াসহ ‘বিজনেস প্রো স্কেলার’ ৳৪৫,০০০।"
          : "0% monthly commission! Starter Launchpad is BDT 25,000 one-time, and our turnkey Business Pro Scaler (with Couriers, bKash & 30 products uploaded) is BDT 45,000.";
    } else if (
      lower.includes("food") ||
      lower.includes("honey") ||
      lower.includes("মধু") ||
      lower.includes("ঘি") ||
      lower.includes("ফুড")
    ) {
      replyText =
        lang === "bn"
          ? "অর্গানিক ফুড ও এগ্রো ব্র্যান্ডের জন্য আমাদের হাই-কনভার্টিং লাইভ স্টোরটি নিচের বাটনে ট্যাপ করে এখনই টেস্ট করুন!"
          : "Test-drive our high-converting Organic Food & Agro storefront live below!";
      presetAction = "food";
      actionLabel =
        lang === "bn" ? "লাইভ ফুড স্টোর দেখুন" : "Open Food Demo";
    } else if (
      lower.includes("fashion") ||
      lower.includes("cloth") ||
      lower.includes("ফ্যাশন") ||
      lower.includes("পাঞ্জাবি") ||
      lower.includes("শাড়ি") ||
      lower.includes("বুটিক")
    ) {
      replyText =
        lang === "bn"
          ? "ফ্যাশন ও ক্লোদিং ব্র্যান্ডের এডিটোরিয়াল লুকবুক ও অটো-স্টক লক ডেমোটি নিচের বাটনে ট্যাপ করে দেখুন!"
          : "Explore our Fashion & Apparel label storefront with size variants live below!";
      presetAction = "fashion";
      actionLabel =
        lang === "bn" ? "লাইভ ফ্যাশন স্টোর দেখুন" : "Open Fashion Demo";
    } else if (
      lower.includes("tech") ||
      lower.includes("it") ||
      lower.includes("gadget") ||
      lower.includes("আইটি") ||
      lower.includes("গ্যাজেট") ||
      lower.includes("কম্পিউটার")
    ) {
      replyText =
        lang === "bn"
          ? "আইটি, কম্পিউটার ও স্মার্ট গ্যাজেট শপের লাইভ ডেমো স্টোরটি নিচের বাটনে ট্যাপ করে এখনই টেস্ট করুন!"
          : "Explore our IT, Tech & Smart Gadgets storefront with spec tables and warranty badges live below!";
      presetAction = "tech";
      actionLabel =
        lang === "bn" ? "লাইভ আইটি শপ দেখুন" : "Open IT & Gadget Demo";
    } else if (
      lower.includes("super") ||
      lower.includes("mart") ||
      lower.includes("grocery") ||
      lower.includes("সুপার") ||
      lower.includes("মার্ট") ||
      lower.includes("বাজার")
    ) {
      replyText =
        lang === "bn"
          ? "অনলাইন সুপার শপ ও ডেইলি মার্টের ৬০-মিনিট গ্রোসারি স্টোরফ্রন্টটি নিচের বাটনে ট্যাপ করে দেখুন!"
          : "Test-drive our 60-minute Super Shop & Daily Mart storefront live below!";
      presetAction = "supershop";
      actionLabel =
        lang === "bn" ? "লাইভ সুপার শপ দেখুন" : "Open Super Shop Demo";
    } else if (
      lower.includes("appliance") ||
      lower.includes("home") ||
      lower.includes("kitchen") ||
      lower.includes("হোম") ||
      lower.includes("কিচেন") ||
      lower.includes("ইলেকট্রনিক্স")
    ) {
      replyText =
        lang === "bn"
          ? "হোম ও কিচেন অ্যাপ্লায়েন্স ব্র্যান্ডের প্রিমিয়াম লাইভ স্টোরটি নিচে ক্লিক করে চালিয়ে দেখুন!"
          : "Preview our Home & Kitchen Appliances storefront live below!";
      presetAction = "electronics";
      actionLabel =
        lang === "bn" ? "লাইভ অ্যাপ্লায়েন্স শপ দেখুন" : "Open Appliances Demo";
    } else {
      replyText =
        lang === "bn"
          ? "দারুণ প্রশ্ন! নিচের বাটনে ক্লিক করে সরাসরি আমাদের প্রোডাক্ট ইঞ্জিনিয়ারিং টিমের সাথে WhatsApp-এ ১-টু-১ কথা বলে নিন।"
          : "Great question! Tap below to connect directly with our engineering team on WhatsApp for a tailored walkthrough.";
    }

    pushExchange(trimmed, {
      text: replyText,
      presetAction,
      actionLabel,
      whatsappPrompt: trimmed,
    });
  };

  const resetConversation = () => {
    const initialText =
      lang === "bn"
        ? "আপনার ব্র্যান্ড ক্যাটাগরি অথবা নিচের যেকোনো প্রশ্ন বেছে নিন—সাথে সাথে উত্তর দিচ্ছি!"
        : "Pick your brand category or tap a question below to continue!";
    setMessages([{ id: "welcome", sender: "bot", text: initialText }]);
  };

  return (
    <section
      ref={sectionRef}
      id="shop-owner-bot"
      className="py-20 sm:py-24 bg-white border-b border-[#DAD1C7]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Bot Calling Out to Next-Gen Sellers */}
          <ScrollReveal variant="slide-left" className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-[6px] bg-[#FF6633] px-3 py-1 text-xs font-bold text-[#241C21]">
              <span className="animate-bot-wave">👋</span>
              <span>
                {lang === "bn"
                  ? "লাইভ ব্র্যান্ড কনসিয়ার্জ"
                  : "Live Brand Growth Concierge"}
              </span>
            </div>

            <div className="flex items-start gap-4">
              <BanijjoBotAvatar isTyping={isTyping} />
              <div className="flex-1 rounded-[8px] border border-[#DAD1C7] bg-[#FBF6EC] p-4">
                <div className="text-xs sm:text-sm font-bold text-[#650039] mb-1">
                  {lang === "bn"
                    ? "এখনো রাত ২টায় মেসেজে “প্রাইস কত?” রিপ্লাই দিচ্ছেন?"
                    : "Still replying “Check inbox” at 2 AM?"}
                </div>
                <p className="text-xs sm:text-sm text-[#241C21] leading-relaxed">
                  {lang === "bn"
                    ? "প্রতিবার রিপ্লাই দিতে দেরি হওয়া মানেই পেইড অ্যাডের ক্রেতা হারানো! আপনি কী সেল করেন সিলেক্ট করুন—দেখে নিন টপ সেলাররা কীভাবে অটো-পাইলটে অর্ডার ক্লোজ করে।"
                    : "Every delayed DM costs you paid ad buyers. Select your niche below and see how top D2C brands convert traffic on autopilot."}
                </p>
              </div>
            </div>

            <div className="space-y-2.5 pt-1">
              <p className="text-xs font-bold uppercase tracking-wider text-[#665C62]">
                {lang === "bn"
                  ? "আপনার ব্র্যান্ড কোন ক্যাটাগরির?"
                  : "Select your brand niche"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SHOP_OWNER_TYPES.map((shop) => {
                  const Icon = shop.icon;
                  return (
                    <button
                      key={shop.id}
                      type="button"
                      onClick={() => handleSelectShopType(shop)}
                      className="group w-full flex items-center justify-between rounded-[8px] border border-[#DAD1C7] bg-[#FBF6EC] hover:border-[#650039] hover:bg-white px-3 py-2.5 text-left transition-all"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] bg-white border border-[#DAD1C7] text-[#650039] group-hover:bg-[#650039] group-hover:text-white group-hover:border-[#650039] transition-colors">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-xs font-bold text-[#241C21] leading-snug truncate">
                          {lang === "bn" ? shop.labelBn : shop.labelEn}
                        </span>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#665C62] group-hover:text-[#650039] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive Chat Window */}
          <ScrollReveal
            variant="scale-up"
            delay={100}
            className="lg:col-span-7"
          >
            <div className="rounded-[12px] border border-[#DAD1C7] bg-[#FBF6EC] shadow-soft-xl overflow-hidden flex flex-col">
              <div className="surface-dark bg-[#650039] px-5 py-3.5 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <img
                    src="/banijjo-logo-symbol-white.png"
                    alt="Banijjo Symbol"
                    className="h-6 w-auto object-contain"
                  />
                  <div>
                    <div className="text-xs sm:text-sm font-bold flex items-center gap-2">
                      <span>
                        {lang === "bn"
                          ? "বাণিজ্য গ্রোথ অ্যাডভাইজর"
                          : "Banijjo Growth Advisor"}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-[4px] bg-white/15 px-2 py-0.5 text-[10px] font-semibold text-white">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF6633]" />
                        <span>{lang === "bn" ? "অনলাইন" : "Live"}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {messages.length > 1 && (
                    <button
                      type="button"
                      onClick={resetConversation}
                      className="inline-flex items-center gap-1 rounded-[6px] bg-white/10 hover:bg-white/20 px-2.5 py-1 text-[11px] font-medium text-white transition"
                    >
                      <RotateCcw className="h-3 w-3" />
                      <span>{lang === "bn" ? "রিসেট" : "Reset"}</span>
                    </button>
                  )}
                  <BrandThreeDots size={6} color="#FF6633" />
                </div>
              </div>

              <div
                ref={chatScrollRef}
                className="h-[300px] sm:h-[320px] overflow-y-auto p-4 sm:p-6 space-y-4 bg-white"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex animate-panel-reveal ${
                      msg.sender === "owner" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[88%] sm:max-w-[82%] rounded-[8px] px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                        msg.sender === "owner"
                          ? "bg-[#650039] text-white"
                          : "bg-[#FBF6EC] border border-[#DAD1C7] text-[#241C21]"
                      }`}
                    >
                      <p>{msg.text}</p>

                      {msg.planHighlight && (
                        <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-[6px] bg-[#EAF4F0] border border-[#146649]/25 px-2.5 py-1 text-[11px] font-bold text-[#146649] tabular-nums">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          <span>{msg.planHighlight}</span>
                        </div>
                      )}

                      {msg.presetAction && msg.actionLabel && (
                        <div className="mt-3 pt-2.5 border-t border-[#DAD1C7] flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => onLaunchPreset(msg.presetAction!)}
                            className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-3.5 py-2 text-xs font-semibold text-white transition"
                          >
                            <MonitorPlay className="h-3.5 w-3.5" />
                            <span>{msg.actionLabel}</span>
                          </button>
                          <a
                            href="#pricing"
                            className="inline-flex items-center gap-1 rounded-[6px] border border-[#DAD1C7] bg-white hover:border-[#650039] px-3 py-2 text-xs font-semibold text-[#241C21] transition"
                          >
                            <span>
                              {lang === "bn" ? "প্ল্যানগুলো দেখুন" : "See Plans"}
                            </span>
                          </a>
                        </div>
                      )}

                      {msg.whatsappPrompt && (
                        <div className="mt-3 pt-2.5 border-t border-[#DAD1C7]">
                          <a
                            href={buildWhatsAppUrl(
                              `Hello Banijjo Studio! Question about scaling my brand: "${msg.whatsappPrompt}"`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-3.5 py-2 text-xs font-semibold text-white transition"
                          >
                            <MessageCircle className="h-3.5 w-3.5" />
                            <span>
                              {lang === "bn"
                                ? "সরাসরি ইঞ্জিনিয়ারিং টিমে কথা বলুন"
                                : "Chat With Our Team"}
                            </span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start animate-panel-reveal">
                    <div className="rounded-[8px] bg-[#FBF6EC] border border-[#DAD1C7] px-4 py-3 inline-flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#FF6633] animate-typing-1" />
                      <span className="h-2 w-2 rounded-full bg-[#FF6633] animate-typing-2" />
                      <span className="h-2 w-2 rounded-full bg-[#FF6633] animate-typing-3" />
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-[#DAD1C7] bg-[#FBF6EC] px-4 py-3">
                <div className="text-[11px] font-semibold text-[#665C62] mb-2">
                  {lang === "bn"
                    ? "টপ সেলাররা যা জানতে চান:"
                    : "Tap what scaling founders ask most:"}
                </div>
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                  {QUICK_QUESTIONS.map((q) => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => handleSelectQuestion(q)}
                      className="shrink-0 rounded-[6px] border border-[#DAD1C7] bg-white hover:border-[#650039] hover:text-[#650039] px-3 py-1.5 text-xs font-semibold text-[#241C21] transition"
                    >
                      {lang === "bn" ? q.qBn : q.qEn}
                    </button>
                  ))}
                </div>
              </div>

              <form
                onSubmit={handleCustomSubmit}
                className="border-t border-[#DAD1C7] bg-white p-3 flex items-center gap-2"
              >
                <label htmlFor="shop-bot-input" className="sr-only">
                  {lang === "bn" ? "আপনার প্রশ্ন লিখুন" : "Ask a question"}
                </label>
                <input
                  id="shop-bot-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={
                    lang === "bn"
                      ? "আপনার ব্র্যান্ড, অ্যাড বা অর্ডার স্কেলিং নিয়ে প্রশ্ন লিখুন..."
                      : "Ask anything about scaling your brand, COD, or pricing..."
                  }
                  className="flex-1 rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] px-3.5 py-2.5 text-xs sm:text-sm text-[#241C21] placeholder-[#665C62] focus:border-[#650039] focus:bg-white transition"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition shrink-0"
                >
                  <Send className="h-4 w-4" />
                  <span>{lang === "bn" ? "জিজ্ঞেস করুন" : "Ask"}</span>
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
