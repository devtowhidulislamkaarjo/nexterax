import type { Lang } from "@/data/banijjo-data";

export interface CustomServiceItem {
  id: string;
  number: string;
  title: { bn: string; en: string };
  summary: { bn: string; en: string };
  deliverables: { bn: string; en: string };
}

export const CUSTOM_ENGINEERING_SERVICES: CustomServiceItem[] = [
  {
    id: "website-development",
    number: "01",
    title: {
      bn: "ওয়েবসাইট ডেভেলপমেন্ট",
      en: "Website Development",
    },
    summary: {
      bn: "ব্যবসা বা প্রতিষ্ঠানের জন্য দ্রুতগতির, পরিচ্ছন্ন ও সহজে ব্যবহারযোগ্য ওয়েবসাইট।",
      en: "Fast, clear websites built around your business and visitors.",
    },
    deliverables: {
      bn: "রেসপনসিভ পেজ · SEO কাঠামো · সহজ কনটেন্ট আপডেট",
      en: "Responsive layout · Search-ready structure · Simple updates",
    },
  },
  {
    id: "personal-portfolio",
    number: "02",
    title: {
      bn: "পার্সোনাল পোর্টফোলিও ডেভেলপমেন্ট",
      en: "Personal Portfolio Development",
    },
    summary: {
      bn: "ফাউন্ডার, পরামর্শক ও পেশাজীবীদের কাজ, অভিজ্ঞতা ও পরিচয় তুলে ধরার নিজস্ব ওয়েবসাইট।",
      en: "A calm personal site to present your work, background, and contact details.",
    },
    deliverables: {
      bn: "নিজস্ব ডোমেইন · প্রজেক্ট আর্কাইভ · সরাসরি যোগাযোগ",
      en: "Custom domain · Selected work · Direct inquiry",
    },
  },
  {
    id: "organizational-portfolio",
    number: "03",
    title: {
      bn: "অর্গানাইজেশনাল পোর্টফোলিও ডেভেলপমেন্ট",
      en: "Organizational Portfolio Development",
    },
    summary: {
      bn: "কোম্পানি, এজেন্সি বা প্রতিষ্ঠানের প্রোফাইল, টিম ও কাজের বিবরণ গোছানোভাবে উপস্থাপনের সাইট।",
      en: "Structured company websites showcasing your profile, capabilities, and projects.",
    },
    deliverables: {
      bn: "প্রতিষ্ঠানের পরিচিতি · কেস স্টাডি · টিম ও যোগাযোগ",
      en: "Company overview · Case studies · Team directory",
    },
  },
  {
    id: "custom-website-build",
    number: "04",
    title: {
      bn: "কাস্টম ওয়েবসাইট বিল্ড",
      en: "Custom Website Build",
    },
    summary: {
      bn: "রেডিমেড টেমপ্লেটের বাইরে আপনার নিজস্ব পরিকল্পনা ও প্রয়োজন অনুযায়ী শূন্য থেকে তৈরি ওয়েবসাইট।",
      en: "Bespoke websites designed and engineered from scratch for specific requirements.",
    },
    deliverables: {
      bn: "কাস্টম ইন্টারফেস · আধুনিক ফ্রন্টএন্ড · স্কেলেবল কোডবেস",
      en: "Tailored UI · Modern frontend · Maintainable code",
    },
  },
  {
    id: "system-build",
    number: "05",
    title: {
      bn: "সিস্টেম বিল্ড",
      en: "System Build",
    },
    summary: {
      bn: "প্রতিদিনের ম্যানুয়াল কাজ সহজ করতে আপনার কাজের ধরন অনুযায়ী তৈরি কাস্টম ওয়েব সিস্টেম।",
      en: "Purpose-built web software shaped around your daily operational workflow.",
    },
    deliverables: {
      bn: "কাস্টম ওয়ার্কফ্লো · ইউজার রোল · নিরাপদ ডাটাবেজ",
      en: "Custom workflow · Role permissions · Reliable database",
    },
  },
  {
    id: "internal-office-crm",
    number: "06",
    title: {
      bn: "ইন্টারনাল অফিস সিআরএম বিল্ড",
      en: "Internal Office CRM Build",
    },
    summary: {
      bn: "ক্লায়েন্ট তথ্য, ফলোআপ ও অফিস টিমের প্রতিদিনের কাজ এক জায়গায় পরিচালনার প্রাইভেট সিআরএম।",
      en: "Private internal CRM to organize leads, client follow-ups, and team tasks.",
    },
    deliverables: {
      bn: "লিড ও ক্লায়েন্ট তালিকা · ফলোআপ নোট · টিম অ্যাক্টিভিটি",
      en: "Lead tracking · Follow-up logs · Team assignments",
    },
  },
  {
    id: "erp-build",
    number: "07",
    title: {
      bn: "ইআরপি বিল্ড",
      en: "ERP Build",
    },
    summary: {
      bn: "ইনভেন্টরি, একাউন্টস, এইচআর ও বিভিন্ন ডিপার্টমেন্ট এক সিস্টেমে সংযুক্ত করার পূর্ণাঙ্গ ইআরপি।",
      en: "Unified ERP connecting inventory, accounts, HR, and multi-department operations.",
    },
    deliverables: {
      bn: "স্টক ও হিসাব · মাল্টি-ডিপার্টমেন্ট · স্পষ্ট রিপোর্ট",
      en: "Inventory & finance · Department sync · Clear reporting",
    },
  },
];

export function getServiceInquiryText(titleEn: string): string {
  return `Hello NexteraX Digital, I would like to discuss a ${titleEn} project.`;
}

export type { Lang };
