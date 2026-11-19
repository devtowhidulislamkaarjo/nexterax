export type PresetCode =
  | "food"
  | "fashion"
  | "cosmetics"
  | "tech"
  | "supershop"
  | "electronics";
export type ProductCardVariant =
  | "classic"
  | "minimal"
  | "horizontal"
  | "overlay"
  | "compact";

export interface LiveProductVariant {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  stockQty: number;
}

export interface LiveProduct {
  id: string;
  slug: string;
  name: { bn: string; en: string };
  categorySlug: string;
  categoryName: { bn: string; en: string };
  unitLabel: string;
  price: number;
  compareAtPrice?: number;
  inStock: boolean;
  stockQty: number;
  badge?: { bn: string; en: string };
  sourceTags?: Array<"FEATURED" | "BEST_SELLING" | "JUST_FOR_YOU" | "LOCATION_TRENDING">;
  shortDescription: { bn: string; en: string };
  description: { bn: string; en: string };
  images: string[];
  variants: LiveProductVariant[];
  specs: Array<{ label: { bn: string; en: string }; value: string }>;
  faqs: Array<{ q: { bn: string; en: string }; a: { bn: string; en: string } }>;
}

export interface LiveCategory {
  id: string;
  slug: string;
  name: { bn: string; en: string };
  thumbnailUrl: string;
  itemCount: number;
  subCategories: Array<{
    name: { bn: string; en: string };
    children?: Array<{ bn: string; en: string }>;
  }>;
}

export interface LivePromoBanner {
  id: string;
  badge: { bn: string; en: string };
  title: { bn: string; en: string };
  subtitle: { bn: string; en: string };
  ctaLabel: { bn: string; en: string };
  couponCode?: string;
  discountText: { bn: string; en: string };
  imageUrl: string;
  categoryFilterSlug?: string;
}

export interface LiveStorePresetData {
  code: PresetCode;
  presetLabel: { bn: string; en: string };
  storeName: { bn: string; en: string };
  tagline: { bn: string; en: string };
  announcement: { bn: string; en: string };
  hotline: string;
  freeShippingThreshold: number;
  defaultCardVariant: ProductCardVariant;
  theme: {
    primaryBg: string;
    primaryHoverBg: string;
    primaryText: string;
    primaryBorder: string;
    primarySoftBg: string;
    accentBg: string;
    accentText: string;
    headerBarBg: string;
    heroOverlay: string;
    buttonRadius: string;
  };
  heroSlides: Array<{
    id: string;
    badge: { bn: string; en: string };
    title: { bn: string; en: string };
    subtitle: { bn: string; en: string };
    ctaLabel: { bn: string; en: string };
    secondaryCtaLabel: { bn: string; en: string };
    discountCallout: { bn: string; en: string };
    imageUrl: string;
  }>;
  splitPromoBanners: [LivePromoBanner, LivePromoBanner];
  fullWidthOfferBanner: LivePromoBanner;
  brandStory: {
    badge: { bn: string; en: string };
    title: { bn: string; en: string };
    subtitle: { bn: string; en: string };
    points: Array<{ bn: string; en: string }>;
    ctaLabel: { bn: string; en: string };
    imageUrl: string;
    stats: Array<{ value: string; label: { bn: string; en: string } }>;
  };
  highlights: Array<{
    title: { bn: string; en: string };
    desc: { bn: string; en: string };
  }>;
  testimonials: Array<{
    name: { bn: string; en: string };
    role: { bn: string; en: string };
    rating: number;
    comment: { bn: string; en: string };
    avatarUrl: string;
    productBought: { bn: string; en: string };
  }>;
  storeFaqs: Array<{
    q: { bn: string; en: string };
    a: { bn: string; en: string };
  }>;
  categories: LiveCategory[];
  products: LiveProduct[];
}

export const PRODUCT_CARD_VARIANT_OPTIONS: Array<{
  id: ProductCardVariant;
  label: { bn: string; en: string };
}> = [
  { id: "classic", label: { bn: "১. ক্লাসিক কার্ড", en: "1. Classic Card" } },
  { id: "minimal", label: { bn: "২. মিনিমাল কার্ড", en: "2. Minimal Card" } },
  { id: "horizontal", label: { bn: "৩. হরাইজন্টাল কম্বো", en: "3. Horizontal List" } },
  { id: "overlay", label: { bn: "৪. ডার্ক লাক্সারি ওভারলে", en: "4. Luxury Overlay" } },
  { id: "compact", label: { bn: "৫. ফ্ল্যাশ সেল কম্প্যাক্ট", en: "5. Compact Flash" } },
];

export const LIVE_STORE_PRESETS: Record<PresetCode, LiveStorePresetData> = {
  /* ========================================================================
   * PRESET 1: ORGANIC FOOD & GROCERY (GhorerBazar Style)
   * ======================================================================== */
  food: {
    code: "food",
    presetLabel: {
      bn: "ফুড ও অর্গানিক গ্রোসারি প্রিসেট",
      en: "Organic Food & Grocery Preset",
    },
    storeName: {
      bn: "বাণিজ্য অর্গানিক ফুড",
      en: "Banijjo Organic Food",
    },
    tagline: {
      bn: "১০০% খাঁটি ও প্রাকৃতিক খাদ্যপণ্যের বিশ্বস্ত প্রতিষ্ঠান",
      en: "100% Pure & Natural Organic Groceries Delivered to Your Door",
    },
    announcement: {
      bn: "সারাদেশে দ্রুত ক্যাশ অন ডেলিভারি! ২০০০৳+ অর্ডারে সম্পূর্ণ ফ্রি ডেলিভারি | কুপন কোড: WELCOME10",
      en: "Nationwide Cash on Delivery! Free Shipping on orders over ৳2,000 | Coupon: WELCOME10",
    },
    hotline: "+8801878-601610",
    freeShippingThreshold: 2000,
    defaultCardVariant: "classic",
    theme: {
      primaryBg: "bg-emerald-700",
      primaryHoverBg: "hover:bg-emerald-800",
      primaryText: "text-emerald-700",
      primaryBorder: "border-emerald-600",
      primarySoftBg: "bg-emerald-50",
      accentBg: "bg-amber-400",
      accentText: "text-amber-500",
      headerBarBg: "bg-emerald-900",
      heroOverlay: "from-emerald-950/90 via-emerald-950/70 to-emerald-950/25",
      buttonRadius: "rounded-xl",
    },
    heroSlides: [
      {
        id: "food-slide-1",
        badge: {
          bn: "১০০% ল্যাব টেস্টেড ও বিশুদ্ধতার নিশ্চয়তা",
          en: "100% Lab-Tested Purity Guaranteed",
        },
        title: {
          bn: "সুন্দরবনের প্রাকৃতিক খলিশা মধু ও গাওয়া ঘি এখন আপনার ঘরে",
          en: "Pure Sundarban Khalisha Honey & Desi Ghee Delivered Fresh",
        },
        subtitle: {
          bn: "চাক ভাঙা প্রাকৃতিক মধু, পাবনার খাঁটি দানাদার ঘি, মদিনার আজওয়া খেজুর এবং তেঁতুল কাঠের ঘানি ভাঙা সরিষার তেল।",
          en: "Raw Sundarban honey, Pabna grainy cow ghee, Madinah Ajwa dates, and wood-pressed mustard oil.",
        },
        ctaLabel: { bn: "সকল অর্গানিক পণ্য দেখুন", en: "Shop All Organic Foods" },
        secondaryCtaLabel: { bn: "কম্বো অফার দেখুন", en: "View Combo Offers" },
        discountCallout: { bn: "সর্বোচ্চ ২৫% ছাড়!", en: "Up to 25% OFF!" },
        imageUrl: "/images/store/sundarban-honey-hero.jpg",
      },
      {
        id: "food-slide-2",
        badge: {
          bn: "মদিনার প্রিমিয়াম খেজুর ও ড্রাই ফ্রুটস",
          en: "Premium Madinah Dates & Dry Fruits",
        },
        title: {
          bn: "মদিনার ভিআইপি আজওয়া ও মরিয়ম খেজুর — সরাসরি ইমপোর্টেড",
          en: "Directly Imported Madinah VIP Ajwa & Mariam Dates",
        },
        subtitle: {
          bn: "কোনো প্রকার কৃত্রিম সিরাপ বা প্রিজারভেটিভ ছাড়া ১০০% ফ্রেশ খেজুর ও প্রিমিয়াম মিক্সড নাটস।",
          en: "Zero artificial syrup or preservatives — 100% fresh dates and roasted mixed dry fruits.",
        },
        ctaLabel: { bn: "খেজুর ও বাদাম দেখুন", en: "Explore Dates & Nuts" },
        secondaryCtaLabel: { bn: "স্পেশাল গিফট বক্স", en: "Special Gift Boxes" },
        discountCallout: { bn: "নতুন স্টক এসেছে!", en: "Fresh Import Batch!" },
        imageUrl: "/images/store/madinah-dates.jpg",
      },
      {
        id: "food-slide-3",
        badge: {
          bn: "ফ্যামিলি হেলদি গ্রোসারি প্যাক",
          en: "Family Healthy Grocery Pack",
        },
        title: {
          bn: "তেঁতুল কাঠের ঘানি ভাঙা খাঁটি সরিষার তেল ও অর্গানিক মশলা",
          en: "Cold-Pressed Wood Ghani Mustard Oil & Organic Spices",
        },
        subtitle: {
          bn: "দেশি মাঘী সরিষা থেকে প্রথম চাপে তৈরি ঝাঁঝালো সরিষার তেল—পরিবারের প্রতিদিনের সুস্বাস্থ্যের জন্য।",
          en: "First-press pungent mustard oil made from local Maghi seeds for everyday healthy cooking.",
        },
        ctaLabel: { bn: "তেল ও ঘি কালেকশন", en: "Shop Oil & Ghee" },
        secondaryCtaLabel: { bn: "ক্যাশ অন ডেলিভারি", en: "Cash on Delivery" },
        discountCallout: { bn: "২০০০৳+ অর্ডারে ফ্রি ডেলিভারি", en: "Free Shipping ৳2000+" },
        imageUrl: "/images/store/organic-grocery-banner.jpg",
      },
    ],
    splitPromoBanners: [
      {
        id: "food-promo-1",
        badge: { bn: "সর্বাধিক বিক্রিত কম্বো", en: "Best-Selling Combo" },
        title: {
          bn: "সুন্দরবনের মধু + পাবনার গাওয়া ঘি ফ্যামিলি প্যাক",
          en: "Sundarban Honey + Pabna Ghee Family Combo",
        },
        subtitle: {
          bn: "একসাথে অর্ডার করলেই পাচ্ছেন অতিরিক্ত ৩৫০ টাকা সাশ্রয় এবং ফ্রি হোম ডেলিভারি!",
          en: "Order together to save an extra ৳350 plus complimentary doorstep delivery!",
        },
        ctaLabel: { bn: "কম্বো অর্ডার করুন", en: "Shop Honey & Ghee" },
        discountText: { bn: "৳৩৫০ ছাড়", en: "Save ৳350" },
        imageUrl: "/images/store/pabna-ghee.jpg",
        categoryFilterSlug: "honey",
      },
      {
        id: "food-promo-2",
        badge: { bn: "প্রিমিয়াম ইম্পোর্ট", en: "Premium Import" },
        title: {
          bn: "মদিনার আজওয়া খেজুর ও হানি নাটস এনার্জি প্যাক",
          en: "Madinah Ajwa Dates & Honey Nuts Energy Pack",
        },
        subtitle: {
          bn: "প্রতিদিনের পুষ্টি ও রোগ প্রতিরোধ ক্ষমতা বাড়াতে ১০০% প্রাকৃতিক সুপারফুড।",
          en: "100% natural superfoods for daily nutrition and family immunity.",
        },
        ctaLabel: { bn: "খেজুর কালেকশন দেখুন", en: "Shop Dates & Nuts" },
        discountText: { bn: "১৫% ছাড়", en: "15% OFF" },
        imageUrl: "/images/store/honey-nuts.jpg",
        categoryFilterSlug: "dates-nuts",
      },
    ],
    fullWidthOfferBanner: {
      id: "food-full-offer",
      badge: { bn: "মৌসুমি মেগা অফার — সীমিত সময়ের জন্য", en: "Seasonal Mega Offer — Limited Time" },
      title: {
        bn: "পরিবারের সুস্বাস্থ্যের জন্য অর্গানিক ফুড বক্সে ১০% ইনস্ট্যান্ট ডিসকাউন্ট!",
        en: "Get 10% Instant Discount on Every Organic Family Food Box!",
      },
      subtitle: {
        bn: "চেকআউট পেজে কুপন কোড WELCOME10 ব্যবহার করলেই সাথে সাথে ১০% মূল্য ছাড় এবং পণ্য হাতে পেয়ে পেমেন্ট করার সুবিধা।",
        en: "Use coupon code WELCOME10 at 1-step checkout for 10% instant discount with 100% Cash on Delivery.",
      },
      ctaLabel: { bn: "এখনই শপিং করুন", en: "Claim Offer Now" },
      couponCode: "WELCOME10",
      discountText: { bn: "কুপন: WELCOME10", en: "Code: WELCOME10" },
      imageUrl: "/images/store/sundarban-honey-hero.jpg",
    },
    brandStory: {
      badge: { bn: "কেন আমাদের পণ্য আলাদা?", en: "Why Our Organic Food?" },
      title: {
        bn: "সরাসরি উৎপাদনকারী ও মৌয়ালদের হাত থেকে আপনার খাবার টেবিলে",
        en: "Directly Sourced from Traditional Farmers & Sundarban Honey Collectors",
      },
      subtitle: {
        bn: "মধ্যস্বত্বভোগী ছাড়াই আমরা সরাসরি সুন্দরবনের মৌয়াল, পাবনার খামারি এবং নিজস্ব কাঠের ঘানি থেকে শতভাগ খাঁটি খাদ্যপণ্য সংগ্রহ করি। প্রতিটি ব্যাচ বিএসটিআই ও ল্যাব টেস্টেড।",
        en: "We source directly from Sundarban honey collectors, Pabna dairy farmers, and our own wood-pressed oil mills with rigorous lab testing.",
      },
      points: [
        {
          bn: "কোনো প্রকার কেমিক্যাল, কৃত্রিম রঙ বা প্রিজারভেটিভ নেই",
          en: "Zero chemicals, artificial colors, or preservatives",
        },
        {
          bn: "পণ্য হাতে পেয়ে খেয়ে/দেখে ডেলিভারি ম্যানকে মূল্য পরিশোধের সুবিধা",
          en: "Inspect upon delivery before paying Cash on Delivery",
        },
        {
          bn: "পছন্দ না হলে ৭ দিনের মধ্যে শর্তহীন রিটার্ন ও রিফান্ড গ্যারান্টি",
          en: "7-day hassle-free return and refund guarantee",
        },
      ],
      ctaLabel: { bn: "সব খাঁটি পণ্য দেখুন", en: "Explore Pure Catalog" },
      imageUrl: "/images/store/mustard-oil.jpg",
      stats: [
        { value: "50,000+", label: { bn: "সন্তুষ্ট পরিবার", en: "Happy Families" } },
        { value: "100%", label: { bn: "ল্যাব টেস্টেড খাঁটি", en: "Lab-Tested Pure" } },
        { value: "24-48h", label: { bn: "দ্রুত হোম ডেলিভারি", en: "Fast Home Delivery" } },
      ],
    },
    highlights: [
      {
        title: { bn: "১০০% খাঁটি পণ্য", en: "100% Pure & Organic" },
        desc: { bn: "ল্যাব টেস্টেড ও প্রাকৃতিক উপাদান", en: "Lab-tested natural ingredients" },
      },
      {
        title: { bn: "দ্রুত হোম ডেলিভারি", en: "Fast Home Delivery" },
        desc: { bn: "ঢাকায় ২৪-৪৮ ঘণ্টায় ডেলিভারি", en: "24-48h delivery inside Dhaka" },
      },
      {
        title: { bn: "ক্যাশ অন ডেলিভারি", en: "Cash on Delivery" },
        desc: { bn: "পণ্য হাতে পেয়ে মূল্য পরিশোধ", en: "Pay after receiving your order" },
      },
      {
        title: { bn: "সহজ রিটার্ন পলিসি", en: "Easy Return Policy" },
        desc: { bn: "পছন্দ না হলে তাৎক্ষণিক রিটার্ন", en: "100% satisfaction guarantee" },
      },
    ],
    testimonials: [
      {
        name: { bn: "তানভীর আহমেদ", en: "Tanvir Ahmed" },
        role: { bn: "ধানমন্ডি, ঢাকা • ভেরিফায়েড ক্রেতা", en: "Dhanmondi, Dhaka • Verified Buyer" },
        rating: 5,
        comment: {
          bn: "সুন্দরবনের খলিশা মধু এবং ঘানি ভাঙা সরিষার তেলের মান সত্যিই অসাধারণ। ঘ্রাণ দেখলেই বোঝা যায় ১০০% খাঁটি। পরিবারের সবাই খুব পছন্দ করেছে।",
          en: "The Sundarban Khalisha honey and cold-pressed mustard oil are truly authentic. My entire family loved the quality.",
        },
        avatarUrl: "/images/store/avatar-male-1.jpg",
        productBought: { bn: "সুন্দরবনের খলিশা মধু (১ কেজি)", en: "Sundarban Honey (1kg)" },
      },
      {
        name: { bn: "ফারজানা রহমান", en: "Farzana Rahman" },
        role: { bn: "চট্টগ্রাম • নিয়মিত গ্রাহক", en: "Chattogram • Repeat Customer" },
        rating: 5,
        comment: {
          bn: "মদিনার আজওয়া খেজুর একদম ফ্রেশ ও নরম ছিল। এয়ারটাইট প্যাকেজিং এবং ক্যাশ অন ডেলিভারি সার্ভিস খুবই দ্রুত।",
          en: "The Madinah Ajwa dates were super fresh and soft. Premium airtight packaging and very fast COD delivery.",
        },
        avatarUrl: "/images/store/avatar-female-1.jpg",
        productBought: { bn: "মদিনার ভিআইপি আজওয়া খেজুর", en: "Madinah VIP Ajwa Dates" },
      },
      {
        name: { bn: "মাহমুদুল হাসান", en: "Mahmudul Hasan" },
        role: { bn: "সিলেট • ভেরিফায়েড ক্রেতা", en: "Sylhet • Verified Buyer" },
        rating: 5,
        comment: {
          bn: "পাবনার গাওয়া ঘি-এর দানাদার টেক্সচার ও ঘ্রাণ ছোটবেলার কথা মনে করিয়ে দিয়েছে। খাঁটি অর্গানিক পণ্যের জন্য সেরা স্টোর।",
          en: "Pabna Gawa Ghee has that authentic grainy texture and rich aroma. Best store for pure organic groceries.",
        },
        avatarUrl: "/images/store/avatar-male-2.jpg",
        productBought: { bn: "পাবনার খাঁটি দানাদার গাওয়া ঘি", en: "Pabna Pure Cow Ghee" },
      },
    ],
    storeFaqs: [
      {
        q: {
          bn: "অর্ডার করার জন্য কি অগ্রিম টাকা দিতে হবে?",
          en: "Do I need to pay in advance to place an order?",
        },
        a: {
          bn: "না, আমাদের সম্পূর্ণ ক্যাশ অন ডেলিভারি (COD) সুবিধা রয়েছে। পণ্য হাতে বুঝে পেয়ে ডেলিভারি ম্যানের কাছে মূল্য পরিশোধ করতে পারবেন।",
          en: "No advance payment is required! You can pay 100% Cash on Delivery when the parcel arrives at your doorstep.",
        },
      },
      {
        q: {
          bn: "ঢাকার ভেতরে ও বাইরে ডেলিভারি চার্জ কত?",
          en: "What are the delivery charges inside and outside Dhaka?",
        },
        a: {
          bn: "ঢাকা সিটির ভেতরে ৬০ টাকা, ঢাকা সাব-এরিয়ায় ১০০ টাকা এবং ঢাকার বাইরে সারাদেশে ১২০ টাকা। ২০০০ টাকার বেশি অর্ডারে ডেলিভারি ফ্রি!",
          en: "Inside Dhaka City is ৳60, Dhaka Suburbs ৳100, and Outside Dhaka ৳120. Orders over ৳2,000 get FREE shipping!",
        },
      },
    ],
    categories: [
      {
        id: "cat-honey",
        slug: "honey",
        name: { bn: "খাঁটি মধু (Pure Honey)", en: "Pure Honey" },
        thumbnailUrl: "/images/store/sundarban-honey-hero.jpg",
        itemCount: 12,
        subCategories: [
          {
            name: { bn: "সুন্দরবনের প্রাকৃতিক মধু", en: "Sundarban Raw Honey" },
            children: [
              { bn: "খলিশা ফুলের মধু", en: "Khalisha Flower Honey" },
              { bn: "গরান ও কেওড়া মধু", en: "Goran & Keora Honey" },
            ],
          },
          {
            name: { bn: "কালোজিরা ও লিচু ফুলের মধু", en: "Blackseed & Litchi Honey" },
          },
        ],
      },
      {
        id: "cat-ghee-oil",
        slug: "ghee-oil",
        name: { bn: "ঘি ও তেল (Ghee & Oil)", en: "Ghee & Oils" },
        thumbnailUrl: "/images/store/pabna-ghee.jpg",
        itemCount: 9,
        subCategories: [
          {
            name: { bn: "পাবনা ও সিরাজগঞ্জের গাওয়া ঘি", en: "Pabna Desi Cow Ghee" },
          },
          {
            name: { bn: "কাঠের ঘানি ভাঙা সরিষার তেল", en: "Cold-Pressed Mustard Oil" },
          },
        ],
      },
      {
        id: "cat-dates-nuts",
        slug: "dates-nuts",
        name: { bn: "খেজুর ও বাদাম (Dates & Nuts)", en: "Dates & Nuts" },
        thumbnailUrl: "/images/store/madinah-dates.jpg",
        itemCount: 15,
        subCategories: [
          {
            name: { bn: "মদিনার আজওয়া ও মরিয়ম খেজুর", en: "Madinah Ajwa & Mariam Dates" },
          },
          {
            name: { bn: "হানি নাটস ও রোস্টেড বাদাম", en: "Honey Nuts & Roasted Almonds" },
          },
        ],
      },
      {
        id: "cat-spices",
        slug: "spices",
        name: { bn: "অর্গানিক মশলা ও চা", en: "Spices & Tea" },
        thumbnailUrl: "/images/store/spices-masala.jpg",
        itemCount: 18,
        subCategories: [
          {
            name: { bn: "সিলেটের প্রিমিয়াম অর্গানিক চা", en: "Sylhet Organic Tea Leaf" },
          },
          {
            name: { bn: "হলুদ, মরিচ ও গরম মশলা গুঁড়া", en: "Pure Spices & Masala" },
          },
        ],
      },
    ],
    products: [
      {
        id: "food-prod-1",
        slug: "sundarban-khalisha-honey",
        name: {
          bn: "সুন্দরবনের প্রাকৃতিক খলিশা ফুলের মধু (১ কেজি)",
          en: "Sundarban Raw Khalisha Flower Honey (1kg)",
        },
        categorySlug: "honey",
        categoryName: { bn: "খাঁটি মধু", en: "Pure Honey" },
        unitLabel: "১ কেজি জার",
        price: 1450,
        compareAtPrice: 1700,
        inStock: true,
        stockQty: 34,
        badge: { bn: "বেস্ট সেলার", en: "Best Seller" },
        sourceTags: ["FEATURED", "BEST_SELLING", "JUST_FOR_YOU", "LOCATION_TRENDING"],
        shortDescription: {
          bn: "সুন্দরবনের মৌয়ালদের হাত থেকে সরাসরি সংগৃহীত ১০০% প্রাকৃতিক ও অপরিশোধিত খলিশা ফুলের মধু।",
          en: "100% raw, unprocessed Khalisha flower honey collected directly from Sundarban honey hunters.",
        },
        description: {
          bn: "সুন্দরবনের সবচেয়ে দামি ও সুস্বাদু মধু হলো খলিশা ফুলের মধু। এতে কোনো প্রকার চিনি, গ্লুকোজ বা কৃত্রিম প্রিজারভেটিভ নেই। সর্দি-কাশি উপশম ও রোগ প্রতিরোধ ক্ষমতা বৃদ্ধিতে অত্যন্ত কার্যকরী।",
          en: "Khalisha flower honey is prized for its rich aroma and natural medicinal properties. Zero added sugar, zero preservatives, and lab-tested for purity.",
        },
        images: [
          "/images/store/sundarban-honey-hero.jpg",
          "/images/store/honey-jar-1.jpg",
          "/images/store/honey-jar-2.jpg",
        ],
        variants: [
          { id: "v-honey-1kg", title: "1 KG Glass Jar", price: 1450, compareAtPrice: 1700, stockQty: 34 },
          { id: "v-honey-500g", title: "500g Glass Jar", price: 780, compareAtPrice: 900, stockQty: 45 },
        ],
        specs: [
          { label: { bn: "উৎস (Origin)", en: "Origin" }, value: "Sundarbans, Satkhira Range" },
          { label: { bn: "বিশুদ্ধতা (Purity)", en: "Purity" }, value: "100% Raw & Unpasteurized" },
          { label: { bn: "মেয়াদ (Shelf Life)", en: "Shelf Life" }, value: "24 Months" },
        ],
        faqs: [
          {
            q: { bn: "মধু কি ফ্রিজে রাখা যাবে?", en: "Should I refrigerate raw honey?" },
            a: {
              bn: "না, খাঁটি মধু ফ্রিজে রাখার প্রয়োজন নেই। স্বাভাবিক তাপমাত্রায় শুষ্ক স্থানে রাখলেই দীর্ঘদিন ভালো থাকে।",
              en: "No, store raw honey at room temperature away from direct sunlight.",
            },
          },
        ],
      },
      {
        id: "food-prod-2",
        slug: "pabna-pure-gawa-ghee",
        name: {
          bn: "পাবনার খাঁটি দানাদার গাওয়া ঘি (৫০০ গ্রাম)",
          en: "Pabna Pure Grainy Cow Ghee (500g)",
        },
        categorySlug: "ghee-oil",
        categoryName: { bn: "ঘি ও তেল", en: "Ghee & Oils" },
        unitLabel: "৫০০ গ্রাম জার",
        price: 890,
        compareAtPrice: 1050,
        inStock: true,
        stockQty: 28,
        badge: { bn: "খাঁটি গাওয়া ঘি", en: "Pure Desi Ghee" },
        sourceTags: ["FEATURED", "BEST_SELLING", "LOCATION_TRENDING"],
        shortDescription: {
          bn: "পাবনা ও সিরাজগঞ্জের বাছাইকৃত দেশি গরুর দুধের ননি থেকে সনাতন পদ্ধতিতে তৈরি সুগন্ধি দানাদার ঘি।",
          en: "Traditional slow-simmered grainy cow ghee from Pabna with unmistakable rich aroma.",
        },
        description: {
          bn: "গরম ভাত, পোলাও, খিচুড়ি কিংবা হালুয়া—সবকিছুতেই পাবনার খাঁটি গাওয়া ঘি আনে রাজকীয় স্বাদ ও ঘ্রাণ। শতভাগ খাঁটি দুধের ক্রিম থেকে তৈরি।",
          en: "Crafted from pure grass-fed cow milk cream in Pabna. Rich in healthy fats, vitamins A, D, E, and K.",
        },
        images: [
          "/images/store/pabna-ghee.jpg",
          "/images/store/butter-ghee-2.jpg",
          "/images/store/mustard-oil.jpg",
        ],
        variants: [
          { id: "v-ghee-500g", title: "500g Glass Jar", price: 890, compareAtPrice: 1050, stockQty: 28 },
          { id: "v-ghee-1kg", title: "1 KG Family Jar", price: 1720, compareAtPrice: 2000, stockQty: 16 },
        ],
        specs: [
          { label: { bn: "উৎপাদন অঞ্চল", en: "Source Region" }, value: "Bera, Pabna" },
          { label: { bn: "উপাদান", en: "Ingredients" }, value: "100% Pure Cow Milk Butterfat" },
        ],
        faqs: [
          {
            q: { bn: "ঘি কি দানাদার হবে?", en: "Does this ghee have a grainy texture?" },
            a: {
              bn: "হ্যাঁ, সনাতন পদ্ধতিতে জ্বাল দেওয়ার কারণে আমাদের গাওয়া ঘি সম্পূর্ণ দানাদার ও সুগন্ধি।",
              en: "Yes, slow caramelization gives our Pabna ghee its signature grainy texture.",
            },
          },
        ],
      },
      {
        id: "food-prod-3",
        slug: "madinah-ajwa-dates-vip",
        name: {
          bn: "মদিনার প্রিমিয়াম আজওয়া খেজুর (১ কেজি ভিআইপি বক্স)",
          en: "Madinah Premium VIP Ajwa Dates (1kg Box)",
        },
        categorySlug: "dates-nuts",
        categoryName: { bn: "খেজুর ও বাদাম", en: "Dates & Nuts" },
        unitLabel: "১ কেজি ভিআইপি বক্স",
        price: 1650,
        compareAtPrice: 1950,
        inStock: true,
        stockQty: 40,
        badge: { bn: "মদিনা ইমপোর্ট", en: "Madinah Import" },
        sourceTags: ["FEATURED", "JUST_FOR_YOU", "BEST_SELLING"],
        shortDescription: {
          bn: "সৌদি আরবের মদিনা থেকে সরাসরি আমদানিকৃত নতুন মৌসুমের নরম ও সুস্বাদু এ-গ্রেড আজওয়া খেজুর।",
          en: "Directly imported Grade-A soft Ajwa dates from Al-Madinah, Saudi Arabia.",
        },
        description: {
          bn: "আজওয়া খেজুর পুষ্টিগুণে ভরপুর একটি বরকতময় ফল। আমাদের প্রতিটি বক্স ফুড-গ্রেড হাইজেনিক প্যাকেজিংয়ে সংরক্ষিত থাকে।",
          en: "Packed with natural antioxidants, fiber, and minerals. Delivered in a sealed luxury gift-ready box.",
        },
        images: [
          "/images/store/madinah-dates.jpg",
          "/images/store/honey-nuts.jpg",
          "/images/store/sundarban-honey-hero.jpg",
        ],
        variants: [
          { id: "v-ajwa-1kg", title: "1 KG VIP Box", price: 1650, compareAtPrice: 1950, stockQty: 40 },
          { id: "v-ajwa-500g", title: "500g Pack", price: 850, compareAtPrice: 1000, stockQty: 25 },
        ],
        specs: [
          { label: { bn: "উৎস দেশ", en: "Country of Origin" }, value: "Al-Madinah, Saudi Arabia" },
          { label: { bn: "গ্রেড", en: "Grade" }, value: "VIP Jumbo Soft" },
        ],
        faqs: [],
      },
      {
        id: "food-prod-4",
        slug: "wood-pressed-mustard-oil-5l",
        name: {
          bn: "তেঁতুল কাঠের ঘানি ভাঙা খাঁটি সরিষার তেল (৫ লিটার)",
          en: "Cold-Pressed Wood Ghani Mustard Oil (5 Liter)",
        },
        categorySlug: "ghee-oil",
        categoryName: { bn: "ঘি ও তেল", en: "Ghee & Oils" },
        unitLabel: "৫ লিটার জার",
        price: 1550,
        compareAtPrice: 1800,
        inStock: true,
        stockQty: 52,
        badge: { bn: "ফ্যামিলি প্যাক", en: "Family Pack" },
        sourceTags: ["FEATURED", "LOCATION_TRENDING", "JUST_FOR_YOU"],
        shortDescription: {
          bn: "দেশি মাঘী সরিষা থেকে তেঁতুল কাঠের ঘানিতে প্রথম চাপে তৈরি ১০০% কেমিক্যালমুক্ত খাঁটি সরিষার তেল।",
          en: "First-press cold-extracted mustard oil from indigenous Maghi mustard seeds.",
        },
        description: {
          bn: "কোনো প্রকার কৃত্রিম ঝাঁঝ বা কেমিক্যাল ছাড়াই তৈরি। ভর্তা, সালাদ ও প্রতিদিনের স্বাস্থ্যকর রান্নার জন্য অতুলনীয়।",
          en: "Zero argemone oil, zero artificial pungency enhancers. Rich in Omega-3 and natural antioxidants.",
        },
        images: [
          "/images/store/mustard-oil.jpg",
          "/images/store/pabna-ghee.jpg",
          "/images/store/spices-masala.jpg",
        ],
        variants: [
          { id: "v-oil-5l", title: "5 Liter Family Gallon", price: 1550, compareAtPrice: 1800, stockQty: 52 },
          { id: "v-oil-2l", title: "2 Liter Bottle", price: 650, compareAtPrice: 750, stockQty: 60 },
        ],
        specs: [
          { label: { bn: "প্রক্রিয়া", en: "Extraction Method" }, value: "Cold Wood-Pressed (Ghani)" },
          { label: { bn: "সরিষার ধরন", en: "Seed Variety" }, value: "Deshi Maghi Mustard" },
        ],
        faqs: [],
      },
      {
        id: "food-prod-5",
        slug: "premium-honey-nuts-mix",
        name: {
          bn: "প্রিমিয়াম হানি নাটস (কাজু, কাঠবাদাম, পেস্তা ও মধু — ৮০০ গ্রাম)",
          en: "Premium Honey Nuts Energy Mix (800g Glass Jar)",
        },
        categorySlug: "dates-nuts",
        categoryName: { bn: "খেজুর ও বাদাম", en: "Dates & Nuts" },
        unitLabel: "৮০০ গ্রাম জার",
        price: 1290,
        compareAtPrice: 1550,
        inStock: true,
        stockQty: 29,
        badge: { bn: "এনার্জি বুস্টার", en: "Energy Booster" },
        sourceTags: ["FEATURED", "JUST_FOR_YOU", "BEST_SELLING"],
        shortDescription: {
          bn: "রোস্টেড কাজু বাদাম, কাঠবাদাম, পেস্তা, আখরোট, কিসমিস ও খাঁটি মধুর পুষ্টিকর মিশ্রণ।",
          en: "Roasted cashews, almonds, pistachios, walnuts, and figs infused in pure raw honey.",
        },
        description: {
          bn: "সকালের নাস্তায় ২ চামচ হানি নাটস সারাদিনের ক্লান্তি দূর করে এবং প্রাকৃতিক এনার্জি যোগায়।",
          en: "A delicious superfood blend packed with protein, healthy omega fats, and natural honey.",
        },
        images: [
          "/images/store/honey-nuts.jpg",
          "/images/store/sundarban-honey-hero.jpg",
          "/images/store/madinah-dates.jpg",
        ],
        variants: [
          { id: "v-hn-800g", title: "800g Glass Jar", price: 1290, compareAtPrice: 1550, stockQty: 29 },
          { id: "v-hn-400g", title: "400g Jar", price: 690, compareAtPrice: 820, stockQty: 35 },
        ],
        specs: [
          { label: { bn: "উপাদান সংখ্যা", en: "Total Ingredients" }, value: "9 Premium Nuts + Raw Honey" },
        ],
        faqs: [],
      },
      {
        id: "food-prod-6",
        slug: "blackseed-flower-honey",
        name: {
          bn: "খাঁটি কালোজিরা ফুলের মধু (১ কেজি)",
          en: "Pure Blackseed (Kalojira) Flower Honey (1kg)",
        },
        categorySlug: "honey",
        categoryName: { bn: "খাঁটি মধু", en: "Pure Honey" },
        unitLabel: "১ কেজি",
        price: 1350,
        compareAtPrice: 1600,
        inStock: true,
        stockQty: 19,
        badge: { bn: "ইমিউনিটি স্পেশাল", en: "Immunity Boost" },
        sourceTags: ["FEATURED", "LOCATION_TRENDING"],
        shortDescription: {
          bn: "শরীয়তপুর ও ফরিদপুরের কালোজিরা মাঠ থেকে সংগৃহীত প্রাকৃতিক কালোজিরা ফুলের মধু।",
          en: "Collected straight from Blackseed (Nigella sativa) fields in Faridpur & Shariatpur.",
        },
        description: {
          bn: "কালোজিরা ফুলের মধুকে বলা হয় প্রাকৃতিক প্রতিষেধক। নিয়মিত সেবনে শরীরের রোগ প্রতিরোধ ক্ষমতা বহুগুণ বৃদ্ধি পায়।",
          en: "Rich dark-amber honey with distinct blackseed floral notes and wellness benefits.",
        },
        images: [
          "/images/store/honey-jar-1.jpg",
          "/images/store/honey-jar-2.jpg",
          "/images/store/sundarban-honey-hero.jpg",
        ],
        variants: [
          { id: "v-kalo-1kg", title: "1 KG", price: 1350, compareAtPrice: 1600, stockQty: 19 },
        ],
        specs: [{ label: { bn: "উৎস", en: "Origin" }, value: "Faridpur Blackseed Fields" }],
        faqs: [],
      },
      {
        id: "food-prod-7",
        slug: "sylhet-organic-gold-tea",
        name: {
          bn: "সিলেটের প্রিমিয়াম অর্গানিক এক্সপোর্ট কোয়ালিটি চা পাতা (১ কেজি)",
          en: "Sylhet Export-Quality Organic Black Tea (1kg)",
        },
        categorySlug: "spices",
        categoryName: { bn: "অর্গানিক মশলা ও চা", en: "Spices & Tea" },
        unitLabel: "১ কেজি প্যাক",
        price: 580,
        compareAtPrice: 700,
        inStock: true,
        stockQty: 64,
        badge: { bn: "সিলেট স্পেশাল", en: "Sylhet Garden" },
        sourceTags: ["FEATURED", "JUST_FOR_YOU"],
        shortDescription: {
          bn: "শ্রীমঙ্গলের সেরা চা বাগানের বাছাইকৃত কচি পাতা থেকে তৈরি কড়া লিকার ও মনমাতানো ঘ্রাণের চা।",
          en: "Hand-selected top-flush tea leaves from Srimangal, Sylhet with bold liquor and aroma.",
        },
        description: {
          bn: "দুধ চা কিংবা রং চা—উভয়ের জন্যই এই এক্সপোর্ট কোয়ালিটি চা পাতা অসাধারণ। অল্প পাতায় ঘন ও কড়া লিকার হয়।",
          en: "Produces a rich golden-amber cup with brisk flavor and zero artificial coloring.",
        },
        images: [
          "/images/store/spices-masala.jpg",
          "/images/store/herbal-tea-seeds.jpg",
          "/images/store/honey-jar-1.jpg",
        ],
        variants: [
          { id: "v-tea-1kg", title: "1 KG Value Pack", price: 580, compareAtPrice: 700, stockQty: 64 },
          { id: "v-tea-500g", title: "500g Pack", price: 310, compareAtPrice: 360, stockQty: 80 },
        ],
        specs: [{ label: { bn: "বাগান", en: "Garden" }, value: "Srimangal, Sylhet" }],
        faqs: [],
      },
      {
        id: "food-prod-8",
        slug: "organic-chia-seeds-superfood",
        name: {
          bn: "অর্গানিক চিয়া সিডস সুপারফুড (৫০০ গ্রাম জার)",
          en: "Organic Chia Seeds Superfood (500g Jar)",
        },
        categorySlug: "dates-nuts",
        categoryName: { bn: "খেজুর ও বাদাম", en: "Dates & Nuts" },
        unitLabel: "৫০০ গ্রাম জার",
        price: 520,
        compareAtPrice: 650,
        inStock: true,
        stockQty: 44,
        badge: { bn: "সুপারফুড", en: "Superfood" },
        sourceTags: ["FEATURED", "LOCATION_TRENDING"],
        shortDescription: {
          bn: "ওজন নিয়ন্ত্রণ, হজমশক্তি বৃদ্ধি ও ওমেগা-৩ সমৃদ্ধ ১০০% ক্লিনড প্রিমিয়াম চিয়া সিডস।",
          en: "Triple-cleaned organic chia seeds rich in Omega-3, dietary fiber, and plant protein.",
        },
        description: {
          bn: "পানি, দুধ, দই বা স্মুদির সাথে মিশিয়ে প্রতিদিন সকালে পান করুন। এতে রয়েছে প্রচুর অ্যান্টিঅক্সিডেন্ট ও ক্যালসিয়াম।",
          en: "Ideal for weight management, heart health, and sustained daily hydration.",
        },
        images: [
          "/images/store/herbal-tea-seeds.jpg",
          "/images/store/honey-nuts.jpg",
          "/images/store/madinah-dates.jpg",
        ],
        variants: [
          { id: "v-chia-500g", title: "500g Airtight Jar", price: 520, compareAtPrice: 650, stockQty: 44 },
        ],
        specs: [{ label: { bn: "গ্রেড", en: "Purity" }, value: "99.9% Machine Cleaned" }],
        faqs: [],
      },
    ],
  },

  /* ========================================================================
   * PRESET 2: MODERN FASHION & APPAREL (Boutique & Lifestyle Style)
   * ======================================================================== */
  fashion: {
    code: "fashion",
    presetLabel: {
      bn: "ফ্যাশন ও বুটিক প্রিসেট",
      en: "Fashion & Apparel Preset",
    },
    storeName: {
      bn: "BANIJJO COUTURE",
      en: "BANIJJO COUTURE",
    },
    tagline: {
      bn: "প্রিমিয়াম ফেস্টিভ ও এভরিডে লাইফস্টাইল ফ্যাশন ব্র্যান্ড",
      en: "Timeless Festive & Everyday Luxury Apparel",
    },
    announcement: {
      bn: "EID & FESTIVE LOOKBOOK LIVE! সারাদেশে ক্যাশ অন ডেলিভারি ও ৭ দিনে সহজ সাইজ এক্সচেঞ্জ সুবিধা!",
      en: "EID & FESTIVE COLLECTION LIVE! Nationwide COD & 7-Day Easy Size Exchange!",
    },
    hotline: "+8801878-601610",
    freeShippingThreshold: 3000,
    defaultCardVariant: "classic",
    theme: {
      primaryBg: "bg-indigo-700",
      primaryHoverBg: "hover:bg-indigo-800",
      primaryText: "text-indigo-700",
      primaryBorder: "border-indigo-600",
      primarySoftBg: "bg-indigo-50",
      accentBg: "bg-amber-400",
      accentText: "text-amber-500",
      headerBarBg: "bg-slate-900",
      heroOverlay: "from-slate-950/90 via-slate-900/65 to-slate-900/20",
      buttonRadius: "rounded-xl",
    },
    heroSlides: [
      {
        id: "fashion-slide-1",
        badge: {
          bn: "LIMITED EDITION FESTIVE DROP",
          en: "LIMITED EDITION FESTIVE DROP",
        },
        title: {
          bn: "ঈদ ও ফেস্টিভ সিগনেচার কালেকশন — আভিজাত্যের নতুন ছোঁয়া",
          en: "New Season Signature Collection — Crafted for Distinction",
        },
        subtitle: {
          bn: "প্রিমিয়াম ইজিপশিয়ান কটন পাঞ্জাবি, ঢাকাই জামদানি শাড়ি এবং এক্সক্লুসিভ ডিজাইনার কুর্তি কালেকশন।",
          en: "Hand-finished Egyptian cotton panjabis, authentic Dhakai Jamdani sarees, and bespoke luxury wear.",
        },
        ctaLabel: { bn: "নতুন কালেকশন দেখুন", en: "Explore New Arrivals" },
        secondaryCtaLabel: { bn: "লুকবুক দেখুন", en: "View Lookbook" },
        discountCallout: { bn: "নতুন ডিজাইন ২০২৬", en: " Fest '26 Drop" },
        imageUrl: "/images/store/mens-panjabi.jpg",
      },
      {
        id: "fashion-slide-2",
        badge: {
          bn: "HERITAGE WEAVES OF BANGLADESH",
          en: "HERITAGE WEAVES OF BANGLADESH",
        },
        title: {
          bn: "অথেনটিক ঢাকাই মসলিন ও জামদানি — কারিগরদের নিপুণ শিল্পকর্ম",
          en: "Authentic Handloom Jamdani & Muslin — Masterfully Woven",
        },
        subtitle: {
          bn: "উৎসব কিংবা বিশেষ আয়োজনে নিজেকে সাজান ঐতিহ্যবাহী তাঁতের জামদানি ও লাক্সারি সিল্কে।",
          en: "Celebrate every occasion with heirloom-quality handwoven sarees and luxury ethnic ensembles.",
        },
        ctaLabel: { bn: "জামদানি ও শাড়ি দেখুন", en: "Shop Women's Ethnic" },
        secondaryCtaLabel: { bn: "সাইজ গাইড", en: "Size Guide" },
        discountCallout: { bn: "হ্যান্ডলুম স্পেশাল", en: "Artisan Edition" },
        imageUrl: "/images/store/jamdani-saree.jpg",
      },
      {
        id: "fashion-slide-3",
        badge: {
          bn: "MEN'S ROYAL BESPOKE LINE",
          en: "MEN'S ROYAL BESPOKE LINE",
        },
        title: {
          bn: "রয়্যাল এমব্রয়ডারি পাঞ্জাবি ও প্রিমিয়াম লেদার এক্সেসরিজ",
          en: "Royal Embroidered Panjabis & Handcrafted Leather Goods",
        },
        subtitle: {
          bn: "কমফোর্ট ফিট, ব্রেথেবল ফ্যাব্রিক এবং নিখুঁত স্টিচিং—প্রতিটি পোশাকে প্রিমিয়াম কোয়ালিটির নিশ্চয়তা।",
          en: "Tailored silhouettes, breathable natural fabrics, and timeless detailing.",
        },
        ctaLabel: { bn: "মেনজ কালেকশন দেখুন", en: "Shop Men's Wear" },
        secondaryCtaLabel: { bn: "ফ্রি সাইজ এক্সচেঞ্জ", en: "Free Size Exchange" },
        discountCallout: { bn: "৳৩০০০+ ফ্রি শিপিং", en: "Free Shipping ৳3000+" },
        imageUrl: "/images/store/fashion-boutique-banner.jpg",
      },
    ],
    splitPromoBanners: [
      {
        id: "fashion-promo-1",
        badge: { bn: "MEN'S FESTIVE EDIT", en: "MEN'S FESTIVE EDIT" },
        title: {
          bn: "ইজিপশিয়ান কটন ও জ্যাকার্ড পাঞ্জাবি সিরিজ",
          en: "Egyptian Cotton & Jacquard Panjabi Series",
        },
        subtitle: {
          bn: "S, M, L, XL, XXL সকল সাইজে রেডি স্টক। ডেলিভারির পর সাইজ না মিললে ফ্রি এক্সচেঞ্জ!",
          en: "Available in S, M, L, XL, XXL with hassle-free doorstep size exchange.",
        },
        ctaLabel: { bn: "পাঞ্জাবি দেখুন", en: "Shop Men's Panjabi" },
        discountText: { bn: "২০% ছাড়", en: "20% OFF" },
        imageUrl: "/images/store/mens-panjabi.jpg",
        categoryFilterSlug: "mens-wear",
      },
      {
        id: "fashion-promo-2",
        badge: { bn: "WOMEN'S LUXURY", en: "WOMEN'S LUXURY" },
        title: {
          bn: "হ্যান্ডলুম জামদানি ও থ্রি-পিস বুটিক কালেকশন",
          en: "Handloom Jamdani & Designer Three-Piece Edit",
        },
        subtitle: {
          bn: "এক্সক্লুসিভ ফেস্টিভ কালার প্যালেট এবং প্রিমিয়াম গিফট বক্স প্যাকেজিং।",
          en: "Curated festive color palettes delivered in signature luxury boxes.",
        },
        ctaLabel: { bn: "উইমেনজ কালেকশন", en: "Shop Women's Edit" },
        discountText: { bn: "নতুন কালেকশন", en: "New Drop" },
        imageUrl: "/images/store/organza-kurti.jpg",
        categoryFilterSlug: "womens-wear",
      },
    ],
    fullWidthOfferBanner: {
      id: "fashion-full-offer",
      badge: { bn: "SEASONAL RUNWAY SALE", en: "SEASONAL RUNWAY SALE" },
      title: {
        bn: "ফেস্টিভ ওয়ারড্রোব আপগ্রেডে ফ্ল্যাট ১০% ডিসকাউন্ট — কুপন: WELCOME10",
        en: "Upgrade Your Festive Wardrobe with Flat 10% OFF — Code: WELCOME10",
      },
      subtitle: {
        bn: "সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা। পোশাক হাতে পেয়ে কোয়ালিটি যাচাই করে মূল্য পরিশোধ করুন।",
        en: "Nationwide Cash on Delivery with instant size exchange support.",
      },
      ctaLabel: { bn: "লুকবুক শপ করুন", en: "Shop The Runway Sale" },
      couponCode: "WELCOME10",
      discountText: { bn: "কুপন: WELCOME10", en: "Code: WELCOME10" },
      imageUrl: "/images/store/fashion-boutique-banner.jpg",
    },
    brandStory: {
      badge: { bn: "BANIJJO COUTURE ATELIER", en: "BANIJJO COUTURE ATELIER" },
      title: {
        bn: "বাংলার ঐতিহ্যবাহী বুনন ও আধুনিক টেইলারিংয়ের অপূর্ব সমন্বয়",
        en: "Where Heritage Bangladeshi Craftsmanship Meets Modern Tailoring",
      },
      subtitle: {
        bn: "নারায়ণগঞ্জের রূপগঞ্জের অভিজ্ঞ জামদানি তাঁতি এবং আমাদের নিজস্ব ডিজাইন স্টুডিওর কারিগরদের নিপুণ হাতে তৈরি হয় প্রতিটি পোশাক।",
        en: "Every garment is crafted in small batches by master weavers and tailors using breathable, skin-friendly premium textiles.",
      },
      points: [
        {
          bn: "১০০% ব্রিদেবল ইজিপশিয়ান কটন, মসলিন ও খাঁটি রেশম সুতা",
          en: "100% breathable Egyptian cotton, muslin, and pure silk",
        },
        {
          bn: "সাইজ না মিললে ৭ দিনের মধ্যে ডোরস্টেপ সাইজ এক্সচেঞ্জ",
          en: "7-day doorstep size exchange if the fit isn't perfect",
        },
        {
          bn: "প্রিমিয়াম গিফট-রেডি বক্স প্যাকেজিং ও সারাদেশে ক্যাশ অন ডেলিভারি",
          en: "Luxury gift-ready box packaging with nationwide COD",
        },
      ],
      ctaLabel: { bn: "অ্যাটেলিয়ার কালেকশন দেখুন", en: "Explore Atelier Collection" },
      imageUrl: "/images/store/jamdani-saree.jpg",
      stats: [
        { value: "35,000+", label: { bn: "ফ্যাশন ক্রেতা", en: "Fashion Clients" } },
        { value: "7 Days", label: { bn: "সহজ সাইজ এক্সচেঞ্জ", en: "Easy Size Exchange" } },
        { value: "100%", label: { bn: "প্রিমিয়াম ফ্যাব্রিক", en: "Authentic Fabrics" } },
      ],
    },
    highlights: [
      {
        title: { bn: "প্রিমিয়াম ফ্যাব্রিক", en: "Luxury Fabrics" },
        desc: { bn: "১০০% এক্সপোর্ট ও হ্যান্ডলুম কোয়ালিটি", en: "100% breathable & skin-friendly" },
      },
      {
        title: { bn: "সহজ সাইজ এক্সচেঞ্জ", en: "7-Day Size Exchange" },
        desc: { bn: "সাইজ না মিললে দ্রুত পরিবর্তন সুবিধা", en: "Instant doorstep size swap" },
      },
      {
        title: { bn: "ক্যাশ অন ডেলিভারি", en: "Cash on Delivery" },
        desc: { bn: "পোশাক দেখে মূল্য পরিশোধ করুন", en: "Pay after inspecting your parcel" },
      },
      {
        title: { bn: "এক্সপ্রেস শিপিং", en: "Express Shipping" },
        desc: { bn: "প্রিমিয়াম বক্স প্যাকেজিংয়ে ডেলিভারি", en: "Delivered in luxury gift boxes" },
      },
    ],
    testimonials: [
      {
        name: { bn: "শায়লা শারমিন", en: "Shaila Sharmin" },
        role: { bn: "গুলশান, ঢাকা • ভেরিফায়েড ক্রেতা", en: "Gulshan, Dhaka • Verified Buyer" },
        rating: 5,
        comment: {
          bn: "ঢাকাই জামদানি শাড়িটির বুনন ও রঙ ছবিতে যেমন দেখেছি বাস্তবে তার চেয়েও সুন্দর! প্রিমিয়াম বক্সে ডেলিভারি পেয়ে খুব ভালো লেগেছে।",
          en: "The Dhakai Jamdani weave and color are even more stunning in person than in photos! Loved the luxury box packaging.",
        },
        avatarUrl: "/images/store/avatar-female-1.jpg",
        productBought: { bn: "হ্যান্ডলুম ঢাকাই জামদানি শাড়ি", en: "Handloom Dhakai Jamdani Saree" },
      },
      {
        name: { bn: "রাফসান জানি", en: "Rafsan Jani" },
        role: { bn: "উত্তরা, ঢাকা • ভেরিফায়েড ক্রেতা", en: "Uttara, Dhaka • Verified Buyer" },
        rating: 5,
        comment: {
          bn: "ইজিপশিয়ান কটন পাঞ্জাবিটার ফিট এবং কাপড়ের কোয়ালিটি এক কথায় সেরা। গরমে পরার জন্য খুবই আরামদায়ক।",
          en: "The Egyptian cotton panjabi has an impeccable tailored fit and feels super breathable all day.",
        },
        avatarUrl: "/images/store/avatar-male-1.jpg",
        productBought: { bn: "রয়্যাল এমব্রয়ডারি পাঞ্জাবি (L)", en: "Royal Embroidered Panjabi (L)" },
      },
      {
        name: { bn: "নুসরাত জাহান", en: "Nusrat Jahan" },
        role: { bn: "রাজশাহী • নিয়মিত গ্রাহক", en: "Rajshahi • Repeat Client" },
        rating: 5,
        comment: {
          bn: "অর্গানজা এমব্রয়ডারি কুর্তি সেটটি অর্ডার করেছিলাম। স্টিচিং এবং ফিনিশিং এত নিখুঁত যে সবাই প্রশংসা করেছে!",
          en: "Ordered the Organza Embroidered Kurti Set. The stitching and finishing got me so many compliments!",
        },
        avatarUrl: "/images/store/avatar-female-2.jpg",
        productBought: { bn: "অর্গানজা এমব্রয়ডারি থ্রি-পিস", en: "Organza Embroidered Kurti Set" },
      },
    ],
    storeFaqs: [
      {
        q: {
          bn: "পাঞ্জাবি বা পোশাকের সাইজ না মিললে কি পরিবর্তন করা যাবে?",
          en: "Can I exchange the size if the garment doesn't fit?",
        },
        a: {
          bn: "হ্যাঁ! ডেলিভারি পাওয়ার ৭ দিনের মধ্যে ট্যাগ অক্ষুণ্ণ রেখে খুব সহজেই অন্য সাইজের সাথে এক্সচেঞ্জ করে নিতে পারবেন।",
          en: "Yes! We offer hassle-free 7-day doorstep size exchanges as long as tags are intact.",
        },
      },
      {
        q: {
          bn: "ডেলিভারির সময় পোশাক চেক করে নেওয়ার সুযোগ আছে কি?",
          en: "Can I check the outfit before paying the delivery rider?",
        },
        a: {
          bn: "অবশ্যই! ডেলিভারি ম্যানের সামনে পার্সেল খুলে কাপড় ও সাইজ দেখে মূল্য পরিশোধ করতে পারবেন।",
          en: "Absolutely! You can inspect the fabric and size in front of the rider before paying Cash on Delivery.",
        },
      },
    ],
    categories: [
      {
        id: "cat-mens",
        slug: "mens-wear",
        name: { bn: "মেনজ পাঞ্জাবি ও ক্যাজুয়াল", en: "Men's Panjabi & Casual" },
        thumbnailUrl: "/images/store/mens-panjabi.jpg",
        itemCount: 24,
        subCategories: [
          {
            name: { bn: "প্রিমিয়াম এমব্রয়ডারি পাঞ্জাবি", en: "Royal Embroidered Panjabi" },
            children: [
              { bn: "ইজিপশিয়ান কটন সিরিজ", en: "Egyptian Cotton Series" },
              { bn: "জ্যাকার্ড ও কাবলি সেট", en: "Jacquard & Kabli Sets" },
            ],
          },
          {
            name: { bn: "ক্যাজুয়াল লিনেন ও পোলো শার্ট", en: "Linen & Polo Shirts" },
          },
        ],
      },
      {
        id: "cat-womens",
        slug: "womens-wear",
        name: { bn: "শাড়ি ও সালোয়ার কামিজ", en: "Saree & Ethnic Wear" },
        thumbnailUrl: "/images/store/jamdani-saree.jpg",
        itemCount: 32,
        subCategories: [
          {
            name: { bn: "ঢাকাই জামদানি ও মসলিন শাড়ি", en: "Dhakai Jamdani & Muslin" },
          },
          {
            name: { bn: "ডিজাইনার কুর্তি ও থ্রি-পিস", en: "Designer Kurti & Three-Piece" },
          },
        ],
      },
      {
        id: "cat-bags",
        slug: "bags-leather",
        name: { bn: "লেদার ব্যাগ ও ওয়ালেট", en: "Bags & Leather" },
        thumbnailUrl: "/images/store/leather-tote-red.jpg",
        itemCount: 14,
        subCategories: [
          { name: { bn: "লেডিস সিগনেচার টোট ব্যাগ", en: "Signature Tote Handbags" } },
          { name: { bn: "জেনুইন লেদার মেনজ ওয়ালেট", en: "Genuine Leather Wallets" } },
        ],
      },
      {
        id: "cat-footwear",
        slug: "footwear",
        name: { bn: "ফুটওয়্যার ও এক্সেসরিজ", en: "Footwear & Accessories" },
        thumbnailUrl: "/images/store/footwear-sneaker-1.jpg",
        itemCount: 19,
        subCategories: [
          { name: { bn: "হ্যান্ডক্রাফটেড লোফার ও নাগরা", en: "Handcrafted Loafers & Nagra" } },
          { name: { bn: "পারফিউম ও কাফলিংক সেট", en: "Perfumes & Cufflinks" } },
        ],
      },
    ],
    products: [
      {
        id: "fash-prod-1",
        slug: "royal-embroidered-cotton-panjabi",
        name: {
          bn: "প্রিমিয়াম ইজিপশিয়ান কটন এমব্রয়ডারি পাঞ্জাবি",
          en: "Royal Embroidered Egyptian Cotton Panjabi",
        },
        categorySlug: "mens-wear",
        categoryName: { bn: "মেনজ কালেকশন", en: "Men's Wear" },
        unitLabel: "Size: S, M, L, XL, XXL",
        price: 2490,
        compareAtPrice: 3200,
        inStock: true,
        stockQty: 26,
        badge: { bn: "ঈদ স্পেশাল", en: "Festive Hit" },
        sourceTags: ["FEATURED", "BEST_SELLING", "JUST_FOR_YOU", "LOCATION_TRENDING"],
        shortDescription: {
          bn: "১০০% ব্রিদেবল ইজিপশিয়ান কটন ফ্যাব্রিকে সূক্ষ্ম কলার ও প্লাকেট এমব্রয়ডারি ওয়ার্ক।",
          en: "Tailored from 100% Egyptian Giza cotton with intricate tonal collar embroidery.",
        },
        description: {
          bn: "উৎসব কিংবা জুমা—যেকোনো বিশেষ দিনে আভিজাত্য ফুটিয়ে তুলতে এই পাঞ্জাবিটি অতুলনীয়। মেটালিক স্ন্যাপ বাটন এবং রিল্যাক্সড স্লিম ফিট কাটিং।",
          en: "Designed for comfort in warm weather while maintaining a sharp, regal silhouette.",
        },
        images: [
          "/images/store/mens-panjabi.jpg",
          "/images/store/mens-shirts-folded.jpg",
          "/images/store/fashion-boutique-banner.jpg",
        ],
        variants: [
          { id: "v-panj-m", title: "Size M (Chest 40\")", price: 2490, compareAtPrice: 3200, stockQty: 8 },
          { id: "v-panj-l", title: "Size L (Chest 42\")", price: 2490, compareAtPrice: 3200, stockQty: 12 },
          { id: "v-panj-xl", title: "Size XL (Chest 44\")", price: 2490, compareAtPrice: 3200, stockQty: 6 },
        ],
        specs: [
          { label: { bn: "ফ্যাব্রিক", en: "Fabric" }, value: "100% Egyptian Giza Cotton" },
          { label: { bn: "ফিট", en: "Fit" }, value: "Regular Tailored Fit" },
        ],
        faqs: [],
      },
      {
        id: "fash-prod-2",
        slug: "handloom-dhakai-jamdani-saree",
        name: {
          bn: "হ্যান্ডলুম ঢাকাই জামদানি শাড়ি — রয়্যাল মেরুন ও গোল্ড জরি",
          en: "Handloom Dhakai Jamdani Saree — Royal Crimson & Gold",
        },
        categorySlug: "womens-wear",
        categoryName: { bn: "শাড়ি ও এথনিক", en: "Women's Ethnic" },
        unitLabel: "12 Haat + Blouse Piece",
        price: 5850,
        compareAtPrice: 7200,
        inStock: true,
        stockQty: 9,
        badge: { bn: "হ্যান্ডলুম অরিজিনাল", en: "Authentic Weave" },
        sourceTags: ["FEATURED", "BEST_SELLING", "JUST_FOR_YOU"],
        shortDescription: {
          bn: "নারায়ণগঞ্জের রূপগঞ্জের দক্ষ তাঁতিদের হাতে বোনা ৮৪ কাউন্টের আসল ঢাকাই জামদানি শাড়ি।",
          en: "Handwoven in Rupganj by master artisans using 84-count cotton and golden zari.",
        },
        description: {
          bn: "প্রতিটি জামদানি শাড়ি তৈরিতে তাঁতিদের সময় লেগেছে ৩ থেকে ৪ সপ্তাহ। সাথে থাকছে ম্যাচিং ব্লাউজ পিস এবং লাক্সারি শাড়ি বক্স।",
          en: "An heirloom masterpiece featuring traditional geometric motifs across the body and anchal.",
        },
        images: [
          "/images/store/jamdani-saree.jpg",
          "/images/store/organza-kurti.jpg",
          "/images/store/fashion-boutique-banner.jpg",
        ],
        variants: [
          { id: "v-jam-crimson", title: "Royal Crimson & Gold", price: 5850, compareAtPrice: 7200, stockQty: 5 },
          { id: "v-jam-ivory", title: "Ivory Pearl & Gold", price: 5850, compareAtPrice: 7200, stockQty: 4 },
        ],
        specs: [
          { label: { bn: "কাউন্ট", en: "Thread Count" }, value: "84 Count Cotton Silk Blend" },
          { label: { bn: "উৎপাদন", en: "Origin" }, value: "Rupganj, Narayanganj" },
        ],
        faqs: [],
      },
      {
        id: "fash-prod-3",
        slug: "designer-organza-kurti-3pcs",
        name: {
          bn: "লাক্সারি অর্গানজা এমব্রয়ডারি কুর্তি থ্রি-পিস সেট",
          en: "Luxury Organza Embroidered Kurti 3-Piece Set",
        },
        categorySlug: "womens-wear",
        categoryName: { bn: "শাড়ি ও এথনিক", en: "Women's Ethnic" },
        unitLabel: "Stitched (S / M / L / XL)",
        price: 3150,
        compareAtPrice: 3800,
        inStock: true,
        stockQty: 18,
        badge: { bn: "নিউ অ্যারাইভাল", en: "New Arrival" },
        sourceTags: ["FEATURED", "LOCATION_TRENDING", "JUST_FOR_YOU"],
        shortDescription: {
          bn: "রেডি-টু-ওয়্যার স্টিচড কামিজ, ট্রাউজার এবং কাটওয়ার্ক অর্গানজা দোপাট্টা সেট।",
          en: "Ready-to-wear stitched ensemble with cutwork organza dupatta and silk trousers.",
        },
        description: {
          bn: "পার্টি কিংবা দাওয়াতে পরার জন্য দারুণ স্টাইলিশ ও আরামদায়ক। ভেতরে সফট কটন লাইনিং দেওয়া আছে।",
          en: "Features delicate floral threadwork, pearl embellishments, and breathable pure cotton lining.",
        },
        images: [
          "/images/store/organza-kurti.jpg",
          "/images/store/jamdani-saree.jpg",
          "/images/store/fashion-boutique-banner.jpg",
        ],
        variants: [
          { id: "v-kurti-s", title: "Size S (36)", price: 3150, compareAtPrice: 3800, stockQty: 4 },
          { id: "v-kurti-m", title: "Size M (38)", price: 3150, compareAtPrice: 3800, stockQty: 8 },
          { id: "v-kurti-l", title: "Size L (40)", price: 3150, compareAtPrice: 3800, stockQty: 6 },
        ],
        specs: [{ label: { bn: "ধরন", en: "Type" }, value: "3-Piece Ready Stitched" }],
        faqs: [],
      },
      {
        id: "fash-prod-4",
        slug: "handcrafted-leather-tote-bag",
        name: {
          bn: "হ্যান্ডক্রাফটেড সিগনেচার লেদার টোট হ্যান্ডব্যাগ",
          en: "Handcrafted Signature Leather Tote Handbag",
        },
        categorySlug: "bags-leather",
        categoryName: { bn: "লেদার ব্যাগ ও ওয়ালেট", en: "Bags & Leather" },
        unitLabel: "100% Genuine Leather",
        price: 2790,
        compareAtPrice: 3400,
        inStock: true,
        stockQty: 15,
        badge: { bn: "সিগনেচার এডিশন", en: "Signature" },
        sourceTags: ["FEATURED", "BEST_SELLING", "LOCATION_TRENDING"],
        shortDescription: {
          bn: "অফিস ও ক্যাজুয়াল আউটিংয়ের জন্য প্রশস্ত কম্পার্টমেন্টসহ প্রিমিয়াম লেদার টোট ব্যাগ।",
          en: "Full-grain leather tote with padded laptop sleeve and gold-plated brass hardware.",
        },
        description: {
          bn: "উন্নত মানের ফিনিশিং, ওয়াটার-রেজিস্ট্যান্ট লাইনিং এবং ডিটাচেবল শোল্ডার স্ট্র্যাপসহ দীর্ঘস্থায়ী ডিজাইন।",
          en: "Designed for everyday sophistication with structured silhouette and magnetic closure.",
        },
        images: [
          "/images/store/leather-tote-red.jpg",
          "/images/store/leather-bag-black.jpg",
          "/images/store/leather-bag-tan.jpg",
        ],
        variants: [
          { id: "v-bag-tan", title: "Cognac Tan", price: 2790, compareAtPrice: 3400, stockQty: 9 },
          { id: "v-bag-black", title: "Obsidian Black", price: 2790, compareAtPrice: 3400, stockQty: 6 },
        ],
        specs: [{ label: { bn: "ম্যাটেরিয়াল", en: "Material" }, value: "Top-Grain Cowhide Leather" }],
        faqs: [],
      },
      {
        id: "fash-prod-5",
        slug: "mens-pure-linen-casual-shirt",
        name: {
          bn: "পিওর ইউরোপিয়ান লিনেন ক্যাজুয়াল শার্ট — অলিভ গ্রিন",
          en: "Pure European Linen Casual Shirt — Olive Green",
        },
        categorySlug: "mens-wear",
        categoryName: { bn: "মেনজ কালেকশন", en: "Men's Wear" },
        unitLabel: "Size: M, L, XL",
        price: 1890,
        compareAtPrice: 2300,
        inStock: true,
        stockQty: 22,
        badge: { bn: "সামার ফেভারিট", en: "Summer Essential" },
        sourceTags: ["FEATURED", "JUST_FOR_YOU"],
        shortDescription: {
          bn: "গরমে সর্বোচ্চ আরামের জন্য প্রি-ওয়াশড ১০০% পিওর লিনেন ফ্যাব্রিকে তৈরি স্মার্ট ক্যাজুয়াল শার্ট।",
          en: "Enzyme-washed 100% pure linen shirt for effortless warm-weather elegance.",
        },
        description: {
          bn: "অফিস কিংবা ভ্রমণে পরার জন্য দারুণ। বারবার ধোয়ার পরেও রঙ ও শেপ অটুট থাকে।",
          en: "Mother-of-pearl buttons, spread collar, and breathable natural linen weave.",
        },
        images: [
          "/images/store/mens-shirts-folded.jpg",
          "/images/store/mens-linen-shirt.jpg",
          "/images/store/mens-panjabi.jpg",
        ],
        variants: [
          { id: "v-lin-m", title: "Size M", price: 1890, compareAtPrice: 2300, stockQty: 10 },
          { id: "v-lin-l", title: "Size L", price: 1890, compareAtPrice: 2300, stockQty: 12 },
        ],
        specs: [{ label: { bn: "ফ্যাব্রিক", en: "Fabric" }, value: "100% Pure Linen" }],
        faqs: [],
      },
      {
        id: "fash-prod-6",
        slug: "artisan-suede-penny-loafers",
        name: {
          bn: "হ্যান্ডক্রাফটেড ইতালিয়ান সুয়েড লেদার লোফার ও স্নিকার",
          en: "Handcrafted Italian Suede Footwear",
        },
        categorySlug: "footwear",
        categoryName: { bn: "ফুটওয়্যার ও এক্সেসরিজ", en: "Footwear" },
        unitLabel: "Size: 40, 41, 42, 43",
        price: 3450,
        compareAtPrice: 4200,
        inStock: true,
        stockQty: 11,
        badge: { bn: "হ্যান্ডমেড", en: "Handcrafted" },
        sourceTags: ["FEATURED", "LOCATION_TRENDING"],
        shortDescription: {
          bn: "পাঞ্জাবি ও ক্যাজুয়াল উভয় পোশাকের সাথে মানানসই মেমোরি-ফোম কুশনড ফুটওয়্যার।",
          en: "Supple suede footwear with memory-foam insole and anti-slip outsole.",
        },
        description: {
          bn: "সারাদিন পরে হাঁটলেও পায়ে কোনো ক্লান্তি আসে না। উন্নতমানের মেমোরি ফোম কুশনিংয়ে তৈরি।",
          en: "Pairs effortlessly with both festive panjabis and casual trousers.",
        },
        images: [
          "/images/store/footwear-sneaker-1.jpg",
          "/images/store/footwear-sneaker-2.jpg",
          "/images/store/leather-bag-black.jpg",
        ],
        variants: [
          { id: "v-shoe-41", title: "EU 41", price: 3450, compareAtPrice: 4200, stockQty: 5 },
          { id: "v-shoe-42", title: "EU 42", price: 3450, compareAtPrice: 4200, stockQty: 6 },
        ],
        specs: [{ label: { bn: "সোল", en: "Insole" }, value: "Orthopedic Cushioned Leather" }],
        faqs: [],
      },
    ],
  },

  /* ========================================================================
   * PRESET 3: COSMETICS, SKINCARE & BEAUTY GLOW
   * ======================================================================== */
  cosmetics: {
    code: "cosmetics",
    presetLabel: {
      bn: "কসমেটিকস ও বিউটি প্রিসেট",
      en: "Cosmetics & Beauty Preset",
    },
    storeName: {
      bn: "BANIJJO GLOW STUDIO",
      en: "BANIJJO GLOW STUDIO",
    },
    tagline: {
      bn: "১০০% অথেনটিক স্কিনকেয়ার, কে-বিউটি ও কসমেটিকস স্টোর",
      en: "100% Authentic Dermatologist-Tested Skincare & K-Beauty",
    },
    announcement: {
      bn: "১০০% অথেনটিক কোরিয়ান ও ডার্মাটোলজিস্ট টেস্টেড স্কিনকেয়ার! বারকোড ভেরিফায়েড প্রোডাক্ট!",
      en: "100% Authentic K-Beauty & Clinical Skincare! Barcode-Verified Original Products!",
    },
    hotline: "+8801878-601610",
    freeShippingThreshold: 1800,
    defaultCardVariant: "classic",
    theme: {
      primaryBg: "bg-rose-700",
      primaryHoverBg: "hover:bg-rose-800",
      primaryText: "text-rose-700",
      primaryBorder: "border-rose-600",
      primarySoftBg: "bg-rose-50",
      accentBg: "bg-amber-400",
      accentText: "text-amber-500",
      headerBarBg: "bg-rose-950",
      heroOverlay: "from-rose-950/90 via-rose-950/65 to-rose-900/20",
      buttonRadius: "rounded-xl",
    },
    heroSlides: [
      {
        id: "cos-slide-1",
        badge: {
          bn: "100% AUTHENTIC & DERMATOLOGIST TESTED",
          en: "100% AUTHENTIC & DERMATOLOGIST TESTED",
        },
        title: {
          bn: "উজ্জ্বল ও স্বাস্থ্যোজ্জ্বল ত্বকের জন্য ক্লিনিক্যাল স্কিনকেয়ার রুটিন",
          en: "Radiant Glass-Skin Formulas Backed by Clinical Science",
        },
        subtitle: {
          bn: "কোরিয়ান নিয়াসিনামাইড সিরাম, ভিটামিন-সি গ্লো বুস্টার, হাইড্রেটিং সানস্ক্রিন এবং লং-লাস্টিং লিপ টিন্ট।",
          en: "Shop authentic Niacinamide serums, Vitamin C boosters, invisible UV sunscreens, and luxury beauty.",
        },
        ctaLabel: { bn: "স্কিনকেয়ার শপ করুন", en: "Shop Skincare Routine" },
        secondaryCtaLabel: { bn: "গ্লো কম্বো দেখুন", en: "View Glow Combos" },
        discountCallout: { bn: "বারকোড ভেরিফায়েড আসল পণ্য", en: "100% Barcode Verified" },
        imageUrl: "/images/store/cosmetics-banner.jpg",
      },
      {
        id: "cos-slide-2",
        badge: {
          bn: "KOREAN GLASS SKIN EDIT",
          en: "KOREAN GLASS SKIN EDIT",
        },
        title: {
          bn: "কোরিয়ান স্নেইল মিউসিন ও হায়ালুরোনিক ডিপ হাইড্রেশন সিরিজ",
          en: "Korean Snail Mucin & Hyaluronic Deep Hydration Edit",
        },
        subtitle: {
          bn: "রোদে পোড়া দাগ, ব্রণের দাগ ও শুষ্কতা দূর করে মাত্র ১৪ দিনে পান গ্লাস-স্কিন উজ্জ্বলতা।",
          en: "Repair skin barrier, fade dark spots, and lock in 72-hour moisture with original K-Beauty.",
        },
        ctaLabel: { bn: "সিরাম কালেকশন দেখুন", en: "Explore Serums" },
        secondaryCtaLabel: { bn: "ফ্রি স্কিন কনসালটেশন", en: "Free Skin Guide" },
        discountCallout: { bn: "সর্বোচ্চ ২০% ছাড়", en: "Up to 20% OFF" },
        imageUrl: "/images/store/serum-dropper.jpg",
      },
      {
        id: "cos-slide-3",
        badge: {
          bn: "LUXURY MAKEUP & FRAGRANCE",
          en: "LUXURY MAKEUP & FRAGRANCE",
        },
        title: {
          bn: "ভেলভেট ম্যাট লিপস্টিক ও লং-লাস্টিং ফ্রেঞ্চ পারফিউম কালেকশন",
          en: "Velvet Matte Lip Tints & Long-Lasting Eau De Parfum",
        },
        subtitle: {
          bn: "প্যারাবেন ও সালফেট মুক্ত ১০০% অরিজিনাল ব্র্যান্ডেড কসমেটিকস এখন ক্যাশ অন ডেলিভারিতে।",
          en: "Cruelty-free, paraben-free luxury makeup and signature fragrances delivered nationwide.",
        },
        ctaLabel: { bn: "মেকআপ ও পারফিউম দেখুন", en: "Shop Makeup & Scents" },
        secondaryCtaLabel: { bn: "কুপন: WELCOME10", en: "Use Code: WELCOME10" },
        discountCallout: { bn: "৳১৮০০+ অর্ডারে ফ্রি ডেলিভারি", en: "Free Shipping ৳1800+" },
        imageUrl: "/images/store/velvet-lip-tint.jpg",
      },
    ],
    splitPromoBanners: [
      {
        id: "cos-promo-1",
        badge: { bn: "3-STEP GLASS SKIN KIT", en: "3-STEP GLASS SKIN KIT" },
        title: {
          bn: "সিরাম + ময়েশ্চারাইজার + সানস্ক্রিন গ্লো কম্বো",
          en: "Serum + Ceramide Cream + SPF50+ Glow Trio",
        },
        subtitle: {
          bn: "একসাথে কম্বো অর্ডার করলেই ৪০০ টাকা ডিসকাউন্ট এবং ফ্রি জেড রোলার গিফট!",
          en: "Save ৳400 on the complete 3-step routine plus get a complimentary gift!",
        },
        ctaLabel: { bn: "সিরাম ও গ্লো কিট দেখুন", en: "Shop Serums & Kits" },
        discountText: { bn: "৳৪০০ ছাড়", en: "Save ৳400" },
        imageUrl: "/images/store/serum-dropper.jpg",
        categoryFilterSlug: "serums",
      },
      {
        id: "cos-promo-2",
        badge: { bn: "VELVET LIP & MAKEUP", en: "VELVET LIP & MAKEUP" },
        title: {
          bn: "ট্রান্সফার-প্রুফ ভেলভেট লিপ টিন্ট ও গ্লো ফাউন্ডেশন",
          en: "Transfer-Proof Velvet Lip Tints & Dewy Cushion",
        },
        subtitle: {
          bn: "বাংলাদেশি স্কিন টোনের জন্য পারফেক্ট শেড রেঞ্জ—১২ ঘণ্টা পর্যন্ত অটুট থাকে।",
          en: "Curated shades for South Asian skin tones with 12-hour weightless wear.",
        },
        ctaLabel: { bn: "মেকআপ শেড দেখুন", en: "Explore Makeup" },
        discountText: { bn: "১৮% ছাড়", en: "18% OFF" },
        imageUrl: "/images/store/velvet-lip-tint.jpg",
        categoryFilterSlug: "makeup",
      },
    ],
    fullWidthOfferBanner: {
      id: "cos-full-offer",
      badge: { bn: "AUTHENTICITY GUARANTEED", en: "AUTHENTICITY GUARANTEED" },
      title: {
        bn: "সব অরিজিনাল স্কিনকেয়ার ও কে-বিউটি পণ্যে ১০% ইনস্ট্যান্ট ছাড়!",
        en: "Get 10% Instant Discount on All Authentic K-Beauty & Skincare!",
      },
      subtitle: {
        bn: "চেকআউট পেজে WELCOME10 কুপন কোড ব্যবহার করুন। প্রতিটি পণ্যের বক্সে অফিসিয়াল বারকোড ও ব্যাচ কোড রয়েছে।",
        en: "Apply code WELCOME10 at checkout. Every item comes with verifiable batch and barcode seals.",
      },
      ctaLabel: { bn: "অফারটি নিন", en: "Shop Glow Sale" },
      couponCode: "WELCOME10",
      discountText: { bn: "কুপন: WELCOME10", en: "Code: WELCOME10" },
      imageUrl: "/images/store/cosmetics-banner.jpg",
    },
    brandStory: {
      badge: { bn: "100% ORIGINAL & SAFE", en: "100% ORIGINAL & SAFE" },
      title: {
        bn: "নকল প্রসাধনীর ভিড়ে শতভাগ আসল ও বারকোড ভেরিফায়েড স্কিনকেয়ারের নিশ্চয়তা",
        en: "Your Trusted Destination for 100% Genuine, Temperature-Controlled Skincare",
      },
      subtitle: {
        bn: "আমরা সরাসরি কোরিয়া, ফ্রান্স ও ইউকের অনুমোদিত ডিস্ট্রিবিউটরদের থেকে পণ্য আমদানি করি এবং সঠিক তাপমাত্রায় সংরক্ষণ করি যাতে প্রতিটি অ্যাক্টিভ ইনগ্রেডিয়েন্ট অক্ষুণ্ণ থাকে।",
        en: "Sourced directly from authorized global distributors and stored in climate-controlled warehousing.",
      },
      points: [
        {
          bn: "প্রতিটি পণ্যে স্ক্যানযোগ্য অরিজিনাল বারকোড ও হলোগ্রাম সিল",
          en: "Scannable authenticity barcode & hologram seal on every box",
        },
        {
          bn: "প্যারাবেন, সালফেট ও ক্ষতিকর মার্কারি মুক্ত ডার্মাটোলজিস্ট টেস্টেড ফর্মুলা",
          en: "Paraben-free, sulfate-free, dermatologist-tested formulations",
        },
        {
          bn: "বাবল-র‍্যাপড সেফ প্যাকেজিং ও সারাদেশে ক্যাশ অন ডেলিভারি",
          en: "Leak-proof bubble-wrapped packaging with nationwide COD",
        },
      ],
      ctaLabel: { bn: "অথেনটিক কালেকশন দেখুন", en: "Browse Authentic Skincare" },
      imageUrl: "/images/store/skincare-ceramide-kit.jpg",
      stats: [
        { value: "100%", label: { bn: "বারকোড ভেরিফায়েড আসল", en: "Barcode Verified" } },
        { value: "40,000+", label: { bn: "বিউটি লাভার", en: "Beauty Lovers" } },
        { value: "4.9 / 5.0", label: { bn: "কাস্টমার রেটিং", en: "Customer Rating" } },
      ],
    },
    highlights: [
      {
        title: { bn: "১০০% অথেনটিক পণ্য", en: "100% Authentic" },
        desc: { bn: "বারকোড ভেরিফায়েড অরিজিনাল ইমপোর্ট", en: "Direct authorized import" },
      },
      {
        title: { bn: "ডার্মাটোলজিস্ট টেস্টেড", en: "Dermatologist Tested" },
        desc: { bn: "সংবেদনশীল ত্বকের জন্য নিরাপদ", en: "Safe for sensitive skin" },
      },
      {
        title: { bn: "ক্যাশ অন ডেলিভারি", en: "Cash on Delivery" },
        desc: { bn: "সিল ও বারকোড দেখে পেমেন্ট করুন", en: "Check seal before paying" },
      },
      {
        title: { bn: "ফ্রি বিউটি গাইড", en: "Free Skin Routine" },
        desc: { bn: "ত্বকের ধরন অনুযায়ী ফ্রি পরামর্শ", en: "Expert skincare guidance" },
      },
    ],
    testimonials: [
      {
        name: { bn: "তাসনিম জারা", en: "Tasnim Zara" },
        role: { bn: "বনানী, ঢাকা • ভেরিফায়েড ক্রেতা", en: "Banani, Dhaka • Verified Buyer" },
        rating: 5,
        comment: {
          bn: "১০% নিয়াসিনামাইড সিরামটি ২ সপ্তাহ ব্যবহারের পর আমার মুখের পোরস ও ব্রণের দাগ অনেক কমে গেছে। বারকোড স্ক্যান করে দেখেছি ১০০% অরিজিনাল!",
          en: "After 2 weeks of using the 10% Niacinamide Serum, my pores and post-acne marks faded noticeably. 100% authentic!",
        },
        avatarUrl: "/images/store/avatar-female-1.jpg",
        productBought: { bn: "১০% নিয়াসিনামাইড + জিঙ্ক গ্লো সিরাম", en: "10% Niacinamide + Zinc Serum" },
      },
      {
        name: { bn: "মেহজাবীন চৌধুরী", en: "Mehjabin Chowdhury" },
        role: { bn: "চট্টগ্রাম • নিয়মিত গ্রাহক", en: "Chattogram • Repeat Customer" },
        rating: 5,
        comment: {
          bn: "ইনভিজিবল সানস্ক্রিন জেলটা একদমই তেলতেলে না এবং কোনো সাদা ভাব (White cast) রাখে না। গরমের জন্য বেস্ট সানস্ক্রিন!",
          en: "The Invisible UV Aqua Sunscreen leaves zero white cast and feels super lightweight in humid weather!",
        },
        avatarUrl: "/images/store/avatar-female-2.jpg",
        productBought: { bn: "ইনভিজিবল ইউভি অ্যাকুয়া সানস্ক্রিন SPF 50+", en: "Invisible UV Sunscreen SPF 50+" },
      },
      {
        name: { bn: "সাদিয়া ইসলাম", en: "Sadia Islam" },
        role: { bn: "সিলেট • ভেরিফায়েড ক্রেতা", en: "Sylhet • Verified Buyer" },
        rating: 5,
        comment: {
          bn: "ভেলভেট ম্যাট লিপ টিন্টের Rosewood শেডটা জাস্ট ওয়াও! ঠোঁট একদম ড্রাই করে না এবং সারাদিন থাকে।",
          en: "The Velvet Matte Lip Tint in Rosewood is gorgeous! Doesn't dry out my lips and lasts through meals.",
        },
        avatarUrl: "/images/store/avatar-female-3.jpg",
        productBought: { bn: "ভেলভেট ম্যাট লিপ টিন্ট — রোজউড", en: "Velvet Matte Lip Tint — Rosewood" },
      },
    ],
    storeFaqs: [
      {
        q: {
          bn: "আপনাদের স্কিনকেয়ার প্রোডাক্ট কি ১০০% অরিজিনাল?",
          en: "Are all your skincare and K-Beauty products 100% authentic?",
        },
        a: {
          bn: "হ্যাঁ, আমাদের প্রতিটি প্রোডাক্ট সরাসরি অনুমোদিত ডিস্ট্রিবিউটর থেকে আমদানিকৃত। ডেলিভারির সময় বক্সের অফিসিয়াল বারকোড স্ক্যান করে যাচাই করে নিতে পারবেন।",
          en: "Yes! Every product is sourced from authorized distributors and can be verified via batch code & barcode upon delivery.",
        },
      },
      {
        q: {
          bn: "তৈলাক্ত ও ব্রণপ্রবণ ত্বকের জন্য কোন সিরামটি ভালো হবে?",
          en: "Which serum is best for oily and acne-prone skin?",
        },
        a: {
          bn: "তৈলাক্ত ও ব্রণপ্রবণ ত্বকের জন্য আমাদের 10% Niacinamide + 1% Zinc Glow Serum এবং Invisible Aqua Gel Sunscreen সবচেয়ে কার্যকরী।",
          en: "Our 10% Niacinamide + 1% Zinc Serum paired with the oil-free Invisible UV Aqua Gel Sunscreen is ideal for oily skin.",
        },
      },
    ],
    categories: [
      {
        id: "cat-serums",
        slug: "serums",
        name: { bn: "ফেস সিরাম ও টোনার", en: "Serums & Toners" },
        thumbnailUrl: "/images/store/serum-dropper.jpg",
        itemCount: 22,
        subCategories: [
          {
            name: { bn: "নিয়াসিনামাইড ও ভিটামিন-সি সিরাম", en: "Niacinamide & Vitamin C" },
            children: [
              { bn: "ব্রাইটেনিং ও স্পট কারেক্টর", en: "Brightening & Spot Care" },
              { bn: "হায়ালুরোনিক হাইড্রেশন বুস্টার", en: "Hyaluronic Hydration" },
            ],
          },
          {
            name: { bn: "কোরিয়ান রাইস ও AHA/BHA টোনার", en: "Korean Rice & AHA/BHA Toners" },
          },
        ],
      },
      {
        id: "cat-sunscreen",
        slug: "sunscreen",
        name: { bn: "সানস্ক্রিন ও ময়েশ্চারাইজার", en: "Sunscreen & Moisturizers" },
        thumbnailUrl: "/images/store/skincare-sunscreen-tube.jpg",
        itemCount: 18,
        subCategories: [
          { name: { bn: "নো-হোয়াইট কাস্ট অ্যাকুয়া সানস্ক্রিন", en: "No-White-Cast Aqua SPF50+" } },
          { name: { bn: "সেরামাইড ব্যারিয়ার রিপেয়ার ক্রিম", en: "Ceramide Barrier Creams" } },
        ],
      },
      {
        id: "cat-makeup",
        slug: "makeup",
        name: { bn: "লিপ টিন্ট ও মেকআপ", en: "Lips & Makeup" },
        thumbnailUrl: "/images/store/velvet-lip-tint.jpg",
        itemCount: 27,
        subCategories: [
          { name: { bn: "ভেলভেট ম্যাট লিপ টিন্ট ও গ্লস", en: "Velvet Lip Tints & Gloss" } },
          { name: { bn: "ডিউই কুশন ফাউন্ডেশন ও ব্লাশ", en: "Dewy Cushion & Blush" } },
        ],
      },
      {
        id: "cat-hair-body",
        slug: "hair-body",
        name: { bn: "হেয়ার ও বডি কেয়ার", en: "Hair & Body Care" },
        thumbnailUrl: "/images/store/skincare-ceramide-kit.jpg",
        itemCount: 15,
        subCategories: [
          { name: { bn: "রোজমেরি অয়েল ও কেরাটিন সিরাম", en: "Rosemary & Keratin Hair Care" } },
          { name: { bn: "বডি লোশন ও শাওয়ার জেল", en: "Brightening Body Lotions" } },
        ],
      },
    ],
    products: [
      {
        id: "cos-prod-1",
        slug: "niacinamide-10-zinc-glow-serum",
        name: {
          bn: "১০% নিয়াসিনামাইড + ১% জিঙ্ক পোর মিনিমাইজিং গ্লো সিরাম (30ml)",
          en: "10% Niacinamide + 1% Zinc Pore-Refining Glow Serum (30ml)",
        },
        categorySlug: "serums",
        categoryName: { bn: "ফেস সিরাম ও টোনার", en: "Serums & Toners" },
        unitLabel: "30ml Dropper Bottle",
        price: 1150,
        compareAtPrice: 1450,
        inStock: true,
        stockQty: 38,
        badge: { bn: "টপ রেটেড কে-বিউটি", en: "#1 Glow Serum" },
        sourceTags: ["FEATURED", "BEST_SELLING", "JUST_FOR_YOU", "LOCATION_TRENDING"],
        shortDescription: {
          bn: "ব্রণের দাগ হালকা করতে, ওপেন পোরস ছোট করতে এবং অতিরিক্ত তেল নিয়ন্ত্রণে ক্লিনিক্যালি প্রমাণিত।",
          en: "Clinically formulated to visibly minimize enlarged pores, control sebum, and brighten skin tone.",
        },
        description: {
          bn: "সকাল ও রাতে ফেসওয়াশের পর ২-৩ ফোঁটা সিরাম ব্যবহারে ত্বক হয় মসৃণ ও উজ্জ্বল। অ্যালকোহল, প্যারাবেন ও ফ্রেগ্র্যান্স মুক্ত।",
          en: "Fragrance-free, non-comedogenic Korean formula suitable for oily, combination, and acne-prone skin.",
        },
        images: [
          "/images/store/serum-dropper.jpg",
          "/images/store/skincare-lotion-white.jpg",
          "/images/store/skincare-ceramide-kit.jpg",
        ],
        variants: [
          { id: "v-nia-30ml", title: "30ml Standard Bottle", price: 1150, compareAtPrice: 1450, stockQty: 38 },
          { id: "v-nia-60ml", title: "60ml Value Size", price: 1990, compareAtPrice: 2500, stockQty: 18 },
        ],
        specs: [
          { label: { bn: "অ্যাক্টিভ উপাদান", en: "Active Ingredients" }, value: "10% Niacinamide + 1% Zinc PCA" },
          { label: { bn: "ত্বকের ধরন", en: "Skin Type" }, value: "All Skin Types (Oily & Acne-Prone)" },
        ],
        faqs: [],
      },
      {
        id: "cos-prod-2",
        slug: "invisible-uv-aqua-sunscreen-spf50",
        name: {
          bn: "ইনভিজিবল ইউভি অ্যাকুয়া জেল সানস্ক্রিন SPF 50+ PA++++ (50ml)",
          en: "Invisible UV Aqua Gel Sunscreen SPF 50+ PA++++ (50ml)",
        },
        categorySlug: "sunscreen",
        categoryName: { bn: "সানস্ক্রিন ও ময়েশ্চারাইজার", en: "Sunscreen" },
        unitLabel: "50ml Tube",
        price: 1290,
        compareAtPrice: 1600,
        inStock: true,
        stockQty: 42,
        badge: { bn: "নো হোয়াইট কাস্ট", en: "Zero White Cast" },
        sourceTags: ["FEATURED", "BEST_SELLING", "LOCATION_TRENDING"],
        shortDescription: {
          bn: "কোনো সাদা ভাব (White Cast) বা তেলতেলে অনুভূতি ছাড়াই সূর্যের ক্ষতিকর UVA/UVB রশ্মি থেকে সুরক্ষা দেয়।",
          en: "Ultra-lightweight watery essence sunscreen that absorbs in seconds with zero white cast.",
        },
        description: {
          bn: "হায়ালুরোনিক অ্যাসিড ও সেনটেলা এশিয়াটিকা সমৃদ্ধ হওয়ায় রোদে ত্বককে ঠান্ডা ও হাইড্রেটেড রাখে। মেকআপের নিচে প্রাইমার হিসেবেও দারুণ কাজ করে।",
          en: "Infused with Centella Asiatica and Hyaluronic Acid to soothe sun-stressed skin.",
        },
        images: [
          "/images/store/skincare-sunscreen-tube.jpg",
          "/images/store/skincare-lotion-white.jpg",
          "/images/store/cosmetics-banner.jpg",
        ],
        variants: [
          { id: "v-spf-50ml", title: "50ml Single Tube", price: 1290, compareAtPrice: 1600, stockQty: 42 },
          { id: "v-spf-duo", title: "Twin Pack (2 x 50ml)", price: 2350, compareAtPrice: 3200, stockQty: 15 },
        ],
        specs: [{ label: { bn: "প্রোটেকশন", en: "Protection" }, value: "SPF 50+ PA++++ Broad Spectrum" }],
        faqs: [],
      },
      {
        id: "cos-prod-3",
        slug: "velvet-matte-lip-tint-rosewood",
        name: {
          bn: "ভেলভেট ম্যাট ওয়েটলেস লিপ টিন্ট — রোজউড কালেকশন",
          en: "Velvet Matte Weightless Lip Tint — Rosewood Edit",
        },
        categorySlug: "makeup",
        categoryName: { bn: "লিপ টিন্ট ও মেকআপ", en: "Lips & Makeup" },
        unitLabel: "4.5g Full Size",
        price: 790,
        compareAtPrice: 990,
        inStock: true,
        stockQty: 50,
        badge: { bn: "১২ ঘণ্টা লং-লাস্টিং", en: "12H Long Wear" },
        sourceTags: ["FEATURED", "JUST_FOR_YOU", "BEST_SELLING"],
        shortDescription: {
          bn: "ঠোঁট শুষ্ক না করেই দেয় সফট-ফোকাস ভেলভেট ম্যাট ফিনিশ এবং ওয়াটারপ্রুফ কালার।",
          en: "Plush whipped-velvet lip tint enriched with Vitamin E and Jojoba oil for smudge-proof wear.",
        },
        description: {
          bn: "বাংলাদেশি সব ধরনের স্কিন টোনের সাথে দারুণ মানানসই ৩টি বেস্ট-সেলিং শেডে পাওয়া যাচ্ছে।",
          en: "Available in 3 universally flattering shades that stay vibrant all day.",
        },
        images: [
          "/images/store/velvet-lip-tint.jpg",
          "/images/store/cosmetics-banner.jpg",
          "/images/store/skincare-ceramide-kit.jpg",
        ],
        variants: [
          { id: "v-lip-01", title: "#01 Rosewood Muse", price: 790, compareAtPrice: 990, stockQty: 20 },
          { id: "v-lip-02", title: "#02 Berry Cashmere", price: 790, compareAtPrice: 990, stockQty: 18 },
          { id: "v-lip-03", title: "#03 Terracotta Peach", price: 790, compareAtPrice: 990, stockQty: 12 },
        ],
        specs: [{ label: { bn: "ফিনিশ", en: "Finish" }, value: "Soft-Focus Velvet Matte" }],
        faqs: [],
      },
      {
        id: "cos-prod-4",
        slug: "ceramide-barrier-repair-moisturizer",
        name: {
          bn: "৫-সেরামাইড ও হায়ালুরোনিক ব্যারিয়ার রিপেয়ার ময়েশ্চারাইজার (100ml)",
          en: "5-Ceramide & Hyaluronic Barrier Repair Cream (100ml)",
        },
        categorySlug: "sunscreen",
        categoryName: { bn: "সানস্ক্রিন ও ময়েশ্চারাইজার", en: "Moisturizers" },
        unitLabel: "100ml Tube",
        price: 1390,
        compareAtPrice: 1750,
        inStock: true,
        stockQty: 31,
        badge: { bn: "৭২ ঘণ্টা হাইড্রেশন", en: "72H Moisture" },
        sourceTags: ["FEATURED", "LOCATION_TRENDING", "JUST_FOR_YOU"],
        shortDescription: {
          bn: "ড্যামেজড স্কিন ব্যারিয়ার রিপেয়ার এবং ত্বককে গভীর থেকে কোমল ও ময়েশ্চারাইজড রাখতে।",
          en: "Strengthens the skin barrier with 5 essential ceramides, panthenol, and hyaluronic acid.",
        },
        description: {
          bn: "অতিরিক্ত রুক্ষতা, লালচে ভাব ও ডিহাইড্রেশন দূর করে ত্বককে করে তোলে প্রাণবন্ত।",
          en: "Rich yet non-greasy formula recommended by dermatologists for daily recovery.",
        },
        images: [
          "/images/store/skincare-ceramide-kit.jpg",
          "/images/store/skincare-lotion-white.jpg",
          "/images/store/serum-dropper.jpg",
        ],
        variants: [
          { id: "v-cer-100ml", title: "100ml Full Size", price: 1390, compareAtPrice: 1750, stockQty: 31 },
        ],
        specs: [{ label: { bn: "মূল উপাদান", en: "Key Actives" }, value: "5 Ceramides + Panthenol + HA" }],
        faqs: [],
      },
    ],
  },

  /* ========================================================================
   * PRESET 4: IT, TECH & SMART GADGETS (Apple Gadgets / Star Tech D2C Style)
   * ======================================================================== */
  tech: {
    code: "tech",
    presetLabel: {
      bn: "আইটি, টেক ও গ্যাজেট স্টোর প্রিসেট",
      en: "IT, Tech & Smart Gadgets Preset",
    },
    storeName: {
      bn: "বাণিজ্য টেক গিয়ার",
      en: "Banijjo Tech Gear",
    },
    tagline: {
      bn: "১০০% অফিসিয়াল ওয়ারেন্টিসহ স্মার্ট গ্যাজেট, অডিও ও পিসি গিয়ার",
      en: "100% Official Warranty Smart Gadgets, Audio & PC Peripherals",
    },
    announcement: {
      bn: "সকল গ্যাজেটে অফিসিয়াল রিপ্লেসমেন্ট ওয়ারেন্টি! ৩০০০৳+ অর্ডারে ফ্রি ডেলিভারি | কুপন কোড: WELCOME10",
      en: "Official Replacement Warranty on All Gadgets! Free Delivery over ৳3,000 | Coupon: WELCOME10",
    },
    hotline: "+8801878-601610",
    freeShippingThreshold: 3000,
    defaultCardVariant: "minimal",
    theme: {
      primaryBg: "bg-blue-700",
      primaryHoverBg: "hover:bg-blue-800",
      primaryText: "text-blue-700",
      primaryBorder: "border-blue-600",
      primarySoftBg: "bg-blue-50",
      accentBg: "bg-cyan-400",
      accentText: "text-cyan-400",
      headerBarBg: "bg-slate-950",
      heroOverlay: "from-slate-950/95 via-slate-950/75 to-slate-900/30",
      buttonRadius: "rounded-lg",
    },
    heroSlides: [
      {
        id: "tech-slide-1",
        badge: {
          bn: "১০০% অথেনটিক ও অফিসিয়াল ওয়ারেন্টি",
          en: "100% Authentic & Official Warranty",
        },
        title: {
          bn: "নেক্সট-জেন ANC ওয়্যারলেস ইয়ারবাডস, স্মার্টওয়াচ ও মেকানিক্যাল গিয়ার",
          en: "Next-Gen ANC Earbuds, AMOLED Smartwatches & Pro Desk Gear",
        },
        subtitle: {
          bn: "সরাসরি অথরাইজড ডিস্ট্রিবিউটর থেকে সংগৃহীত প্রিমিয়াম গ্যাজেট—সিরিয়াল ভেরিফিকেশন ও ৬–১২ মাসের রিপ্লেসমেন্ট ওয়ারেন্টিসহ।",
          en: "Sourced directly from authorized distributors with serial verification and 6–12 months official warranty.",
        },
        ctaLabel: { bn: "সকল গ্যাজেট দেখুন", en: "Shop All Tech Gear" },
        secondaryCtaLabel: { bn: "ডেস্ক সেটআপ কম্বো", en: "Desk Setup Combos" },
        discountCallout: { bn: "সর্বোচ্চ ৩০% ফ্ল্যাশ ছাড়!", en: "Up to 30% Flash Deal!" },
        imageUrl: "/images/store/tech-gadgets-banner.jpg",
      },
      {
        id: "tech-slide-2",
        badge: {
          bn: "প্রো গেমিং ও প্রোডাক্টিভিটি ডেস্ক",
          en: "Pro Gaming & Productivity Desk",
        },
        title: {
          bn: "হট-সোয়াপেবল মেকানিক্যাল কীবোর্ড ও আল্ট্রা-লাইট ওয়্যারলেস মাউস",
          en: "Hot-Swappable Mechanical Keyboards & Tri-Mode Wireless Mice",
        },
        subtitle: {
          bn: "কোডিং, অফিস কিংবা ইস্পোর্টস গেমিং—তিন মোড কানেক্টিভিটি ও দীর্ঘ ব্যাটারি ব্যাকআপসহ প্রো-গ্রেড পেরিফেরালস।",
          en: "Tri-mode Bluetooth, 2.4GHz & USB-C mechanical keyboards built for developers, creators, and gamers.",
        },
        ctaLabel: { bn: "পিসি গিয়ার দেখুন", en: "Explore PC Gear" },
        secondaryCtaLabel: { bn: "অফিসিয়াল ওয়ারেন্টি", en: "Warranty Policy" },
        discountCallout: { bn: "নতুন স্টক লাইভ!", en: "New Drop Live!" },
        imageUrl: "/images/store/tech-keyboard.jpg",
      },
      {
        id: "tech-slide-3",
        badge: {
          bn: "ফাস্ট চার্জিং ও ট্রাভেল পাওয়ার",
          en: "GaN Fast Charging & Power",
        },
        title: {
          bn: "65W GaN ফাস্ট চার্জার ও 20,000mAh ল্যাপটপ পাওয়ার ব্যাংক",
          en: "65W GaN Fast Chargers & 20,000mAh PD Power Banks",
        },
        subtitle: {
          bn: "আইফোন, ম্যাকবুক ও অ্যান্ড্রয়েড ডিভাইসের জন্য মাল্টি-লেয়ার ওভারহিট প্রোটেকশনসহ সুপার-ফাস্ট চার্জিং সলিউশন।",
          en: "Charge MacBooks, iPhones, and flagship Androids safely with multi-layer thermal protection.",
        },
        ctaLabel: { bn: "পাওয়ার ও চার্জার", en: "Shop Power & Hubs" },
        secondaryCtaLabel: { bn: "ক্যাশ অন ডেলিভারি", en: "Nationwide COD" },
        discountCallout: { bn: "৩০০০৳+ ফ্রি শিপিং", en: "Free Shipping ৳3000+" },
        imageUrl: "/images/store/tech-powerbank.jpg",
      },
    ],
    splitPromoBanners: [
      {
        id: "tech-promo-1",
        badge: { bn: "টপ সেলিং অডিও", en: "Best-Selling Audio" },
        title: {
          bn: "Active Noise Cancelling ইয়ারবাডস ও হাই-ফাই হেডফোন",
          en: "48dB Hybrid ANC Earbuds & Studio Wireless Audio",
        },
        subtitle: {
          bn: "ক্রিস্টাল-ক্লিয়ার কল কোয়ালিটি, ৪০ ঘণ্টা ব্যাটারি এবং ১ বছরের অফিসিয়াল ওয়ারেন্টি।",
          en: "Quad-mic ENC crystal calls, 40-hour battery life, and 1-year official warranty.",
        },
        ctaLabel: { bn: "অডিও গিয়ার দেখুন", en: "Shop Audio Gear" },
        discountText: { bn: "৳৭০০ সাশ্রয়", en: "Save ৳700" },
        imageUrl: "/images/store/tech-earbuds.jpg",
        categoryFilterSlug: "audio-gear",
      },
      {
        id: "tech-promo-2",
        badge: { bn: "ডেস্ক সেটআপ বান্ডেল", en: "Creator Desk Bundle" },
        title: {
          bn: "মেকানিক্যাল কীবোর্ড + ওয়্যারলেস মাউস প্রো কম্বো",
          en: "Wireless Mechanical Keyboard + Ergonomic Mouse Combo",
        },
        subtitle: {
          bn: "একসাথে অর্ডার করলেই ফ্রি ডেস্ক ম্যাট ও ইনস্ট্যান্ট ডিসকাউন্ট!",
          en: "Bundle together for extra savings and priority nationwide courier dispatch.",
        },
        ctaLabel: { bn: "পিসি গিয়ার অর্ডার করুন", en: "Shop Peripherals" },
        discountText: { bn: "২০% ছাড়", en: "20% OFF" },
        imageUrl: "/images/store/tech-mouse.jpg",
        categoryFilterSlug: "pc-peripherals",
      },
    ],
    fullWidthOfferBanner: {
      id: "tech-full-offer",
      badge: { bn: "টেক ফেস্ট অফার — সীমিত স্টক", en: "Tech Fest Deal — Limited Units" },
      title: {
        bn: "যেকোনো স্মার্ট গ্যাজেট ও আইটি পণ্যে ১০% ইনস্ট্যান্ট ডিসকাউন্ট!",
        en: "Unlock 10% Instant Discount Across All Official Tech & Gadgets!",
      },
      subtitle: {
        bn: "চেকআউটে কুপন কোড WELCOME10 ব্যবহার করুন—পণ্য হাতে পেয়ে সিলড বক্স চেক করে ডেলিভারি ম্যানকে পেমেন্ট করুন।",
        en: "Apply code WELCOME10 at checkout — inspect intact factory seal upon delivery before paying COD.",
      },
      ctaLabel: { bn: "অফারটি লুফে নিন", en: "Claim Tech Deal" },
      couponCode: "WELCOME10",
      discountText: { bn: "কুপন: WELCOME10", en: "Code: WELCOME10" },
      imageUrl: "/images/store/tech-gadgets-banner.jpg",
    },
    brandStory: {
      badge: { bn: "কেন আমাদের গ্যাজেট শপ সেরা?", en: "Why Tech Buyers Trust Us" },
      title: {
        bn: "কপি বা রিফার্বিশড নয় — ১০০% ইনট্যাক্ট সিলড ও অফিসিয়াল ওয়ারেন্টি গ্যারান্টি",
        en: "Zero Clones or Refurbs — 100% Factory-Sealed Gear With Instant Warranty Claim",
      },
      subtitle: {
        bn: "অনলাইনে গ্যাজেট কেনার সবচেয়ে বড় ভয় নকল পণ্য ও ওয়ারেন্টি নিয়ে ভোগান্তি। বাণিজ্য টেক গিয়ারে প্রতিটি পণ্যের বক্সে অফিসিয়াল সিরিয়াল স্টিকার ও ডিজিটাল ইনভয়েস থাকে, যাতে ওয়ারেন্টি ক্লেইম হয় ঝামেলাহীন।",
        en: "Every device ships factory-sealed with verifiable serial numbers, multi-layer bubble armor, and digital warranty tracking.",
      },
      points: [
        {
          bn: "১০০% অথেনটিক গ্লোবাল ও অফিসিয়াল ভ্যারিয়েন্ট — সিরিয়াল নম্বর ভেরিফাইড",
          en: "100% authentic global & official units with serial verification",
        },
        {
          bn: "৬ থেকে ১২ মাসের ইনস্ট্যান্ট অফিসিয়াল রিপ্লেসমেন্ট ওয়ারেন্টি সুবিধা",
          en: "6 to 12 months hassle-free official replacement warranty",
        },
        {
          bn: "বাবল-র‍্যাপ শকপ্রুফ বক্সে সারাদেশে নিরাপদ ক্যাশ অন ডেলিভারি",
          en: "Shockproof bubble-armored packaging with nationwide COD",
        },
      ],
      ctaLabel: { bn: "অথেনটিক গ্যাজেট দেখুন", en: "Browse Official Gear" },
      imageUrl: "/images/store/tech-smartwatch.jpg",
      stats: [
        { value: "35,000+", label: { bn: "গ্যাজেট ডেলিভারড", en: "Gadgets Delivered" } },
        { value: "100%", label: { bn: "অফিসিয়াল ওয়ারেন্টি", en: "Authentic Warranty" } },
        { value: "24h", label: { bn: "ঢাকায় ফাস্ট ডিসপ্যাচ", en: "Fast Dhaka Dispatch" } },
      ],
    },
    highlights: [
      {
        title: { bn: "১০০% ইনট্যাক্ট বক্স", en: "100% Factory Sealed" },
        desc: { bn: "অথেনটিক সিরিয়াল ভেরিফাইড", en: "Authentic serial verified" },
      },
      {
        title: { bn: "অফিসিয়াল ওয়ারেন্টি", en: "Official Warranty" },
        desc: { bn: "৬–১২ মাস রিপ্লেসমেন্ট গ্যারান্টি", en: "6–12mo replacement cover" },
      },
      {
        title: { bn: "শকপ্রুফ প্যাকেজিং", en: "Shockproof Packing" },
        desc: { bn: "৩-লেয়ার বাবল প্রোটেকশন", en: "3-layer bubble protection" },
      },
      {
        title: { bn: "ক্যাশ অন ডেলিভারি", en: "Cash on Delivery" },
        desc: { bn: "সিলড বক্স দেখে পেমেন্ট", en: "Check intact box on delivery" },
      },
    ],
    testimonials: [
      {
        name: { bn: "তানভীর আহমেদ", en: "Tanvir Ahmed" },
        role: { bn: "সফটওয়্যার ইঞ্জিনিয়ার, উত্তরা", en: "Software Engineer, Uttara" },
        rating: 5,
        comment: {
          bn: "হট-সোয়াপ মেকানিক্যাল কীবোর্ড ও মাউস অর্ডার করেছিলাম। পরদিনই ইনট্যাক্ট সিলড বক্সে হাতে পেয়েছি। টাইপিং ফিল এবং বিল্ড কোয়ালিটি অসাধারণ!",
          en: "Ordered the hot-swap mechanical keyboard and wireless mouse. Arrived next day factory-sealed with official warranty card!",
        },
        avatarUrl: "/images/store/avatar-male-1.jpg",
        productBought: { bn: "৭৫% ওয়্যারলেস মেকানিক্যাল কীবোর্ড", en: "75% Wireless Mechanical Keyboard" },
      },
      {
        name: { bn: "সাদিয়া ইসলাম", en: "Sadia Islam" },
        role: { bn: "ইউআই ডিজাইনার, ধানমন্ডি", en: "Product Designer, Dhanmondi" },
        rating: 5,
        comment: {
          bn: "AMOLED স্মার্টওয়াচ ও ANC ইয়ারবাডস দুটিই ১০০% অরিজিনাল পেয়েছি। সিরিয়াল নম্বর ওয়েবসাইটে চেক করেই ভেরিফাই করা গেছে।",
          en: "Both the AMOLED smartwatch and ANC earbuds verified cleanly on the manufacturer site. Super fast checkout!",
        },
        avatarUrl: "/images/store/avatar-female-2.jpg",
        productBought: { bn: "প্রো হাইব্রিড ANC ইয়ারবাডস", en: "Pro Hybrid ANC Earbuds" },
      },
      {
        name: { bn: "রাফসান কবির", en: "Rafsan Kabir" },
        role: { bn: "ফ্রিল্যান্সার, সিলেট", en: "Remote Creator, Sylhet" },
        rating: 5,
        comment: {
          bn: "লোডশেডিং ও ট্রাভেলের জন্য 65W ল্যাপটপ পাওয়ার ব্যাংকটি নিয়েছি। সিলেট থেকে ক্যাশ অন ডেলিভারিতে একদম নিরাপদ প্যাকেজিংয়ে পেয়েছি।",
          en: "The 65W PD power bank powers my MacBook Air effortlessly during travel. Rock-solid packaging to Sylhet.",
        },
        avatarUrl: "/images/store/avatar-male-2.jpg",
        productBought: { bn: "20,000mAh 65W PD পাওয়ার ব্যাংক", en: "20,000mAh 65W PD Power Bank" },
      },
    ],
    storeFaqs: [
      {
        q: {
          bn: "গ্যাজেটগুলো কি ১০০% অরিজিনাল এবং ইনট্যাক্ট বক্সে আসবে?",
          en: "Are all gadgets 100% authentic and factory-sealed?",
        },
        a: {
          bn: "হ্যাঁ, আমাদের প্রতিটি গ্যাজেট ১০০% অরিজিনাল ইনট্যাক্ট ফ্যাক্টরি সিলড বক্সে ডেলিভারি হয় এবং অফিসিয়াল সিরিয়াল নম্বর দিয়ে ভেরিফাই করার সুবিধা থাকে।",
          en: "Yes, every item ships 100% factory-sealed with verifiable manufacturer serial numbers.",
        },
      },
      {
        q: {
          bn: "ওয়ারেন্টি ক্লেইম করার নিয়ম কী?",
          en: "How do I claim official warranty if needed?",
        },
        a: {
          bn: "আপনার অর্ডারের ডিজিটাল ইনভয়েস ও পণ্যের বক্স সংরক্ষণ করলেই যেকোনো ম্যানুফ্যাকচারিং সমস্যায় সরাসরি আমাদের কাস্টমার কেয়ার বা কুরিয়ারের মাধ্যমে দ্রুত রিপ্লেসমেন্ট পাবেন।",
          en: "Simply keep your digital order invoice and box — we process official warranty replacements via courier or drop-off.",
        },
      },
    ],
    categories: [
      {
        id: "tech-cat-1",
        slug: "audio-gear",
        name: { bn: "ইয়ারবাডস ও অডিও", en: "Audio & Earbuds" },
        thumbnailUrl: "/images/store/tech-earbuds.jpg",
        itemCount: 28,
        subCategories: [
          { name: { bn: "ANC ওয়্যারলেস ইয়ারবাডস", en: "ANC Wireless Earbuds" } },
          { name: { bn: "ওভার-ইয়ার হেডফোন", en: "Studio Headphones" } },
        ],
      },
      {
        id: "tech-cat-2",
        slug: "smartwatches",
        name: { bn: "স্মার্টওয়াচ ও ফিটনেস", en: "Smartwatches" },
        thumbnailUrl: "/images/store/tech-smartwatch.jpg",
        itemCount: 19,
        subCategories: [
          { name: { bn: "AMOLED কলিং ওয়াচ", en: "AMOLED Calling Watches" } },
          { name: { bn: "ওয়াচ স্ট্র্যাপ ও চার্জার", en: "Straps & Docks" } },
        ],
      },
      {
        id: "tech-cat-3",
        slug: "pc-peripherals",
        name: { bn: "কীবোর্ড ও মাউস", en: "Keyboards & Mice" },
        thumbnailUrl: "/images/store/tech-keyboard.jpg",
        itemCount: 34,
        subCategories: [
          { name: { bn: "মেকানিক্যাল কীবোর্ড", en: "Mechanical Keyboards" } },
          { name: { bn: "গেমিং ও এরগোনমিক মাউস", en: "Wireless Mice" } },
        ],
      },
      {
        id: "tech-cat-4",
        slug: "power-charging",
        name: { bn: "পাওয়ার ব্যাংক ও চার্জার", en: "Power & GaN Chargers" },
        thumbnailUrl: "/images/store/tech-powerbank.jpg",
        itemCount: 24,
        subCategories: [
          { name: { bn: "GaN ফাস্ট চার্জার", en: "GaN Fast Chargers" } },
          { name: { bn: "PD পাওয়ার ব্যাংক", en: "PD Power Banks" } },
        ],
      },
    ],
    products: [
      {
        id: "tech-prod-1",
        slug: "sonicpro-anc-wireless-earbuds",
        name: {
          bn: "সনিকপ্রো হাইব্রিড 48dB ANC ওয়্যারলেস ইয়ারবাডস (Bluetooth 5.4)",
          en: "SonicPro Hybrid 48dB ANC Wireless Earbuds (Bluetooth 5.4)",
        },
        categorySlug: "audio-gear",
        categoryName: { bn: "ইয়ারবাডস ও অডিও", en: "Audio & Earbuds" },
        unitLabel: "1 Year Official Warranty",
        price: 2490,
        compareAtPrice: 3200,
        inStock: true,
        stockQty: 38,
        badge: { bn: "বেস্ট সেলার গ্যাজেট", en: "Best Seller" },
        sourceTags: ["FEATURED", "BEST_SELLING", "LOCATION_TRENDING"],
        shortDescription: {
          bn: "৪৮ ডেসিবেল অ্যাক্টিভ নয়েজ ক্যানসেলেশন, ৬-মাইক AI ক্লিয়ার কল এবং ৪০ ঘণ্টা নন-স্টপ ব্যাটারি ব্যাকআপ।",
          en: "48dB hybrid active noise cancellation, 6-mic AI ENC calls, low-latency gaming mode, and 40H playtime.",
        },
        description: {
          bn: "টাইটানিয়াম কোটেড ১২ মিমি ড্রাইভারের কারণে গভীর বেস ও ক্রিস্টাল-ক্লিয়ার ভোকাল পাওয়া যায়। IPX5 সোয়েট-রেজিস্ট্যান্ট এবং ১০ মিনিট ফাস্ট চার্জে ৪ ঘণ্টা প্লেব্যাক সুবিধা।",
          en: "Engineered with 12mm titanium drivers, multipoint dual-device pairing, and USB-C fast charging.",
        },
        images: [
          "/images/store/tech-earbuds.jpg",
          "/images/store/tech-gadgets-banner.jpg",
        ],
        variants: [
          { id: "v-ear-black", title: "Matte Obsidian Black", price: 2490, compareAtPrice: 3200, stockQty: 24 },
          { id: "v-ear-white", title: "Frost Titanium White", price: 2490, compareAtPrice: 3200, stockQty: 14 },
        ],
        specs: [
          { label: { bn: "নয়েজ ক্যানসেলেশন", en: "Noise Control" }, value: "48dB Hybrid ANC + Transparency" },
          { label: { bn: "ব্যাটারি ব্যাকআপ", en: "Battery Life" }, value: "Up to 40 Hours Total" },
          { label: { bn: "অফিসিয়াল ওয়ারেন্টি", en: "Warranty" }, value: "12 Months Official Replacement" },
        ],
        faqs: [],
      },
      {
        id: "tech-prod-2",
        slug: "apexfit-amoled-calling-smartwatch",
        name: {
          bn: "অ্যাপেক্সফিট আল্ট্রা ২.০ ইঞ্চি AMOLED ব্লুটুথ কলিং স্মার্টওয়াচ",
          en: "ApexFit Ultra 2.0\" AMOLED Bluetooth Calling Smartwatch",
        },
        categorySlug: "smartwatches",
        categoryName: { bn: "স্মার্টওয়াচ ও ফিটনেস", en: "Smartwatches" },
        unitLabel: "1 Year Official Warranty",
        price: 3450,
        compareAtPrice: 4290,
        inStock: true,
        stockQty: 26,
        badge: { bn: "AMOLED ডিসপ্লে", en: "60Hz AMOLED" },
        sourceTags: ["FEATURED", "BEST_SELLING", "JUST_FOR_YOU"],
        shortDescription: {
          bn: "অলওয়েজ-অন 60Hz AMOLED ডিসপ্লে, সরাসরি ব্লুটুথ কলিং, SpO2 হার্ট ট্র্যাকিং ও IP68 ওয়াটারপ্রুফ বডি।",
          en: "Crisp 60Hz Always-On AMOLED screen, zinc-alloy frame, Bluetooth calling, and 10-day battery endurance.",
        },
        description: {
          bn: "অফিস ও ক্যাজুয়াল দুই লুকেই দারুণ মানানসই। বক্সের ভেতরে ম্যাগনেটিক চার্জার ও অতিরিক্ত একটি সিলিকন স্ট্র্যাপ ফ্রি থাকছে।",
          en: "Includes both a braided magnetic strap and sport silicone band in the box, compatible with iOS and Android.",
        },
        images: [
          "/images/store/tech-smartwatch.jpg",
          "/images/store/tech-gadgets-banner.jpg",
        ],
        variants: [
          { id: "v-watch-space", title: "Space Black + Extra Strap", price: 3450, compareAtPrice: 4290, stockQty: 16 },
          { id: "v-watch-silver", title: "Titanium Silver + Extra Strap", price: 3590, compareAtPrice: 4400, stockQty: 10 },
        ],
        specs: [
          { label: { bn: "ডিসপ্লে", en: "Display" }, value: "2.0\" Super AMOLED (1000 Nits)" },
          { label: { bn: "ওয়াটার রেজিস্ট্যান্স", en: "Waterproof" }, value: "IP68 Swim-Ready" },
          { label: { bn: "ওয়ারেন্টি", en: "Warranty" }, value: "1 Year Official Warranty" },
        ],
        faqs: [],
      },
      {
        id: "tech-prod-3",
        slug: "keycraft-75-wireless-mechanical-keyboard",
        name: {
          bn: "কী-ক্রাফট K75 ট্রাই-মোড হট-সোয়াপ মেকানিক্যাল কীবোর্ড (RGB)",
          en: "KeyCraft K75 Tri-Mode Gasket Mechanical Keyboard (RGB)",
        },
        categorySlug: "pc-peripherals",
        categoryName: { bn: "কীবোর্ড ও মাউস", en: "Keyboards & Mice" },
        unitLabel: "Gasket Mount • PBT Keycaps",
        price: 4690,
        compareAtPrice: 5500,
        inStock: true,
        stockQty: 18,
        badge: { bn: "ডেভেলপার ফেভারিট", en: "Creator Pick" },
        sourceTags: ["FEATURED", "LOCATION_TRENDING", "JUST_FOR_YOU"],
        shortDescription: {
          bn: "গ্যাসকেট মাউন্ট ক্রিমি সাউন্ড প্রোফাইল, ব্লুটুথ/২.৪জি ওয়্যারলেস মোড ও ভলিউম কন্ট্রোল নব।",
          en: "Creamy pre-lubed linear/tactile switches, CNC rotary knob, 4000mAh battery, and Mac/Windows toggle.",
        },
        description: {
          bn: "প্রোগ্রামার, রাইটার ও গেমারদের জন্য দীর্ঘক্ষণ টাইপিংয়ে শূন্য ক্লান্তি নিশ্চিত করে। ডাবল-শট PBT কী-ক্যাপ কখনোই মুছে যায় না।",
          en: "Full 5-pin hot-swappable PCB with south-facing RGB and sound-dampening poron foam layers.",
        },
        images: [
          "/images/store/tech-keyboard.jpg",
          "/images/store/tech-mouse.jpg",
        ],
        variants: [
          { id: "v-kb-linear", title: "Creamy Linear Switch", price: 4690, compareAtPrice: 5500, stockQty: 11 },
          { id: "v-kb-tactile", title: "Silent Tactile Switch", price: 4790, compareAtPrice: 5600, stockQty: 7 },
        ],
        specs: [
          { label: { bn: "কানেক্টিভিটি", en: "Connectivity" }, value: "Bluetooth 5.1 / 2.4GHz / USB-C" },
          { label: { bn: "ব্যাটারি", en: "Battery" }, value: "4000mAh Rechargeable" },
        ],
        faqs: [],
      },
      {
        id: "tech-prod-4",
        slug: "voltmax-65w-gan-laptop-powerbank-20000mah",
        name: {
          bn: "ভোল্টম্যাক্স 20,000mAh 65W PD ল্যাপটপ ও ফাস্ট চার্জিং পাওয়ার ব্যাংক",
          en: "VoltMax 20,000mAh 65W PD Laptop & Fast-Charge Power Bank",
        },
        categorySlug: "power-charging",
        categoryName: { bn: "পাওয়ার ব্যাংক ও চার্জার", en: "Power & GaN Chargers" },
        unitLabel: "20,000mAh • Digital Display",
        price: 2890,
        compareAtPrice: 3490,
        inStock: true,
        stockQty: 32,
        badge: { bn: "ল্যাপটপ চার্জিং সাপোর্ট", en: "65W Laptop PD" },
        sourceTags: ["FEATURED", "BEST_SELLING", "LOCATION_TRENDING"],
        shortDescription: {
          bn: "ম্যাকবুক, ল্যাপটপ, রাউটার ও স্মার্টফোন সুপার-ফাস্ট চার্জ করার জন্য স্মার্ট ওয়াটেজ ডিসপ্লেসহ 65W পাওয়ার ব্যাংক।",
          en: "Outputs full 65W USB-C Power Delivery for MacBooks, ultrabooks, Steam Deck, iPhone, and Samsung Super Fast Charging.",
        },
        description: {
          bn: "এয়ারলাইন ট্রাভেল সেফ (74Wh) ব্যাটারি সেল এবং বক্সেই ১০০ ওয়াট ব্রেইডেড টাইপ-সি টু টাইপ-সি ক্যাবল সংযুক্ত।",
          en: "Includes a braided 100W E-Marker USB-C cable and real-time LED wattage & battery percentage readout.",
        },
        images: [
          "/images/store/tech-powerbank.jpg",
          "/images/store/tech-gadgets-banner.jpg",
        ],
        variants: [
          { id: "v-pb-20k", title: "20,000mAh (65W Output)", price: 2890, compareAtPrice: 3490, stockQty: 22 },
          { id: "v-pb-combo", title: "Power Bank + 65W GaN Wall Adapter", price: 4190, compareAtPrice: 5100, stockQty: 10 },
        ],
        specs: [
          { label: { bn: "আউটপুট পাওয়ার", en: "Max Output" }, value: "65W USB-C PD 3.0 + PPS" },
          { label: { bn: "পোর্টস", en: "Ports" }, value: "2x USB-C + 1x USB-A" },
        ],
        faqs: [],
      },
      {
        id: "tech-prod-5",
        slug: "aeroglide-ultralight-wireless-mouse",
        name: {
          bn: "অ্যারোগ্লাইড প্রো ওয়্যারলেস এরগোনমিক ও গেমিং মাউস (PAW3395)",
          en: "AeroGlide Pro Tri-Mode Lightweight Wireless Mouse",
        },
        categorySlug: "pc-peripherals",
        categoryName: { bn: "কীবোর্ড ও মাউস", en: "Keyboards & Mice" },
        unitLabel: "59g Ultra-Light",
        price: 1850,
        compareAtPrice: 2350,
        inStock: true,
        stockQty: 44,
        badge: { bn: "৫৯ গ্রাম আল্ট্রা-লাইট", en: "59g Featherweight" },
        sourceTags: ["JUST_FOR_YOU", "BEST_SELLING"],
        shortDescription: {
          bn: "নিখুঁত অপটিক্যাল সেন্সর, সাইলেন্ট/ক্রিস্প সুইচ ও ৮০ ঘণ্টা রিচার্জেবল ব্যাটারি।",
          en: "Featherweight 59g shell, PTFE skates, dual Bluetooth + 2.4GHz dongle, and 80-hour USB-C battery.",
        },
        description: {
          bn: "ল্যাপটপ ও ডেস্কটপ দুই জায়গাতেই তারের ঝামেলা ছাড়া স্মুথ ট্র্যাকিং দেয়।",
          en: "Designed for wrist comfort across 10-hour design, coding, or gaming sessions.",
        },
        images: [
          "/images/store/tech-mouse.jpg",
          "/images/store/tech-keyboard.jpg",
        ],
        variants: [
          { id: "v-ms-black", title: "Stealth Matte Black", price: 1850, compareAtPrice: 2350, stockQty: 28 },
          { id: "v-ms-white", title: "Arctic White", price: 1850, compareAtPrice: 2350, stockQty: 16 },
        ],
        specs: [
          { label: { bn: "ওজন", en: "Weight" }, value: "59 Grams" },
          { label: { bn: "ডিপিআই", en: "DPI Range" }, value: "Up to 26,000 DPI" },
        ],
        faqs: [],
      },
    ],
  },

  /* ========================================================================
   * PRESET 5: SUPER SHOP & DAILY MART (Chaldal / Shwapno Online Style)
   * ======================================================================== */
  supershop: {
    code: "supershop",
    presetLabel: {
      bn: "সুপার শপ ও ডেইলি মার্ট প্রিসেট",
      en: "Super Shop & Daily Mart Preset",
    },
    storeName: {
      bn: "বাণিজ্য সুপার মার্ট",
      en: "Banijjo Super Mart",
    },
    tagline: {
      bn: "মাসের বাজার, তাজা ফলমূল ও প্রতিদিনের নিত্যপণ্য — ৬০ মিনিটে হোম ডেলিভারি",
      en: "Monthly Bazar, Fresh Produce & Household Essentials in 60 Minutes",
    },
    announcement: {
      bn: "ঢাকায় ৬০ মিনিটে দ্রুত হোম ডেলিভারি! ১৫০০৳+ বাজারে ডেলিভারি চার্জ সম্পূর্ণ ফ্রি | কুপন: WELCOME10",
      en: "60-Minute Rapid Delivery in Dhaka! Free Delivery on orders over ৳1,500 | Coupon: WELCOME10",
    },
    hotline: "+8801878-601610",
    freeShippingThreshold: 1500,
    defaultCardVariant: "classic",
    theme: {
      primaryBg: "bg-orange-700",
      primaryHoverBg: "hover:bg-orange-800",
      primaryText: "text-orange-700",
      primaryBorder: "border-orange-600",
      primarySoftBg: "bg-orange-50",
      accentBg: "bg-lime-400",
      accentText: "text-lime-400",
      headerBarBg: "bg-stone-900",
      heroOverlay: "from-stone-950/90 via-stone-900/70 to-stone-900/25",
      buttonRadius: "rounded-xl",
    },
    heroSlides: [
      {
        id: "super-slide-1",
        badge: {
          bn: "৬০ মিনিটে সুপার-ফাস্ট হোম ডেলিভারি",
          en: "60-Minute Rapid Doorstep Delivery",
        },
        title: {
          bn: "মাসের পুরো বাজার এখন ঘরে বসেই — বাজারের চেয়েও সাশ্রয়ী দামে!",
          en: "Your Entire Monthly Family Grocery Delivered Fresh in 60 Minutes",
        },
        subtitle: {
          bn: "চাল, তেল, ডাল, তাজা ফলমূল, দুধ-ডিম থেকে শুরু করে বেবি কেয়ার ও ক্লিনিং পণ্য—জ্যাম ও ব্যাগ টানার ঝামেলা ছাড়াই সরাসরি আপনার দরজায়।",
          en: "Rice, cooking oil, farm-fresh fruits, dairy, coffee, and home care delivered straight to your kitchen at wholesale-beating prices.",
        },
        ctaLabel: { bn: "আজকের বাজার শুরু করুন", en: "Start Grocery Shopping" },
        secondaryCtaLabel: { bn: "মাসিক বাজার কম্বো", en: "Monthly Bazar Combos" },
        discountCallout: { bn: "১৫০০৳+ বাজারে ফ্রি ডেলিভারি!", en: "Free Delivery ৳1500+!" },
        imageUrl: "/images/store/supershop-banner.jpg",
      },
      {
        id: "super-slide-2",
        badge: {
          bn: "সকালের তাজা ফলমূল ও ডেয়ারি",
          en: "Morning Farm-Fresh Produce & Dairy",
        },
        title: {
          bn: "ফরমালিনমুক্ত বাছাইকৃত তাজা ফলমূল, দুধ ও ব্রেকফাস্ট আইটেম",
          en: "Handpicked Fresh Fruits, Full-Cream Dairy & Breakfast Favorites",
        },
        subtitle: {
          bn: "প্রতিদিন ভোরবেলা সরাসরি বাগান ও অনুমোদিত সরবরাহকারী থেকে সংগৃহীত তাজা পণ্য—পছন্দ না হলে ডেলিভারির সময়ই ইনস্ট্যান্ট রিটার্ন!",
          en: "Sorted fresh every morning with temperature-safe delivery bags and doorstep quality inspection.",
        },
        ctaLabel: { bn: "তাজা ফল ও ডেয়ারি দেখুন", en: "Shop Fresh & Dairy" },
        secondaryCtaLabel: { bn: "বেভারেজ ও কফি", en: "Coffee & Beverages" },
        discountCallout: { bn: "প্রতিদিন নতুন স্টক!", en: "Fresh Morning Batch!" },
        imageUrl: "/images/store/supershop-fruits.jpg",
      },
      {
        id: "super-slide-3",
        badge: {
          bn: "ফ্যামিলি মেগা সেভার প্যাক",
          en: "Family Mega Saver Bundles",
        },
        title: {
          bn: "মাসিক ফ্যামিলি বাজার প্যাকে সর্বোচ্চ ৬০০ টাকা নিশ্চিত সাশ্রয়",
          en: "Save Up to ৳600 Every Month With Curated Family Bazar Packs",
        },
        subtitle: {
          bn: "চিনিগুঁড়া চাল, সয়াবিন/সরিষার তেল, মসুর ডাল, চা-পাতা ও ডিটারজেন্ট এক প্যাকেজেই সুপার ডিসকাউন্টে।",
          en: "All essential pantry staples bundled together for busy families with 100% Cash on Delivery.",
        },
        ctaLabel: { bn: "ফ্যামিলি প্যাক দেখুন", en: "View Family Bundles" },
        secondaryCtaLabel: { bn: "ক্যাশ অন ডেলিভারি", en: "Cash on Delivery" },
        discountCallout: { bn: "৳৬০০ পর্যন্ত সাশ্রয়", en: "Save up to ৳600" },
        imageUrl: "/images/store/supershop-basket.jpg",
      },
    ],
    splitPromoBanners: [
      {
        id: "super-promo-1",
        badge: { bn: "মাসিক বাজার হিট", en: "Monthly Pantry Hit" },
        title: {
          bn: "ফ্যামিলি রান্নাঘর কম্বো — চাল, তেল, ডাল ও মশলা প্যাক",
          en: "Complete Kitchen Pantry Bundle — Rice, Oil, Lentils & Spices",
        },
        subtitle: {
          bn: "আলাদা আলাদা কেনার চেয়ে বান্ডেলে কিনলেই ৪৫০ টাকা সাশ্রয় ও ফ্রি হোম ডেলিভারি!",
          en: "Save ৳450 instantly compared to individual MRP with free doorstep delivery.",
        },
        ctaLabel: { bn: "প্যান্ট্রি কম্বো নিন", en: "Shop Pantry Essentials" },
        discountText: { bn: "৳৪৫০ ছাড়", en: "Save ৳450" },
        imageUrl: "/images/store/supershop-basket.jpg",
        categoryFilterSlug: "cooking-essentials",
      },
      {
        id: "super-promo-2",
        badge: { bn: "হোম ও ক্লিনিং সেভার", en: "Home Care Saver" },
        title: {
          bn: "লন্ড্রি ডিটারজেন্ট, ডিশওয়াশ ও ফ্যামিলি হাইজিন প্যাক",
          en: "Liquid Detergent, Dishwash & Household Hygiene Saver",
        },
        subtitle: {
          bn: "পরিবারের পুরো মাসের ক্লিনিং ও পার্সোনাল কেয়ার পণ্যে ফ্ল্যাট ১৫% মূল্য ছাড়।",
          en: "Stock up for the whole month with flat 15% off household cleaning essentials.",
        },
        ctaLabel: { bn: "হোম কেয়ার দেখুন", en: "Shop Home Care" },
        discountText: { bn: "১৫% ছাড়", en: "15% OFF" },
        imageUrl: "/images/store/supershop-care.jpg",
        categoryFilterSlug: "home-cleaning",
      },
    ],
    fullWidthOfferBanner: {
      id: "super-full-offer",
      badge: { bn: "সুপার মার্ট স্পেশাল অফার", en: "Super Mart Weekly Saver" },
      title: {
        bn: "আপনার প্রথম মাসের বাজারে ১০% ইনস্ট্যান্ট ডিসকাউন্ট + ফ্রি ডেলিভারি!",
        en: "Enjoy 10% Instant Discount + Free Delivery on Your Grocery Cart!",
      },
      subtitle: {
        bn: "চেকআউট পেজে কুপন কোড WELCOME10 ব্যবহার করুন—৬০ মিনিটে বাজার হাতে বুঝে নিয়ে ক্যাশ বা বিকাশে পেমেন্ট করুন।",
        en: "Use code WELCOME10 at 1-step checkout — inspect fresh items at your doorstep before paying COD.",
      },
      ctaLabel: { bn: "বাজার কার্টে যোগ করুন", en: "Start Filling Cart" },
      couponCode: "WELCOME10",
      discountText: { bn: "কুপন: WELCOME10", en: "Code: WELCOME10" },
      imageUrl: "/images/store/supershop-banner.jpg",
    },
    brandStory: {
      badge: { bn: "কেন বাণিজ্য সুপার মার্ট?", en: "Why Shop With Our Super Mart?" },
      title: {
        bn: "ট্রাফিক জ্যাম ও ভারী ব্যাগ টানার দিন শেষ — তাজা বাজার পৌঁছে যাবে রান্নাঘরে",
        en: "Skip Traffic & Heavy Bags — Freshly Sorted Groceries at MRP or Less",
      },
      subtitle: {
        bn: "আমাদের ক্লাউড সুপারস্টোরগুলোতে তাপমাত্রা নিয়ন্ত্রিত স্টোরেজ ও অটোমেটেড স্টক ট্র্যাকিং থাকায় মেয়াদোত্তীর্ণ বা বাসি পণ্য যাওয়ার কোনো সুযোগ নেই।",
        en: "Every order is picked from climate-controlled shelves with strict expiry checks and hygienic crate delivery.",
      },
      points: [
        {
          bn: "প্রতিটি পণ্যের মেয়াদ (Expiry Date) ও ওজন শতভাগ চেক করে প্যাকিং",
          en: "100% verified expiry dates and accurate digital weight checks",
        },
        {
          bn: "কোনো সবজি বা ফল পছন্দ না হলে ডেলিভারি ম্যানের কাছেই তাৎক্ষণিক রিটার্ন",
          en: "No-questions-asked doorstep return on any produce item",
        },
        {
          bn: "MRP-এর চেয়ে কম দামে মাসিক ফ্যামিলি কম্বো ও রিপিট অর্ডার সুবিধা",
          en: "Below-MRP family bundles and 15-second repeat ordering",
        },
      ],
      ctaLabel: { bn: "সব ডিপার্টমেন্ট দেখুন", en: "Browse All Aisles" },
      imageUrl: "/images/store/supershop-fruits.jpg",
      stats: [
        { value: "60 Min", label: { bn: "ফাস্ট ডেলিভারি স্লট", en: "Rapid Delivery Slot" } },
        { value: "3,500+", label: { bn: "ডেইলি গ্রোসারি পণ্য", en: "Daily Essentials" } },
        { value: "99.4%", label: { bn: "অন-টাইম ডেলিভারি", en: "On-Time Accuracy" } },
      ],
    },
    highlights: [
      {
        title: { bn: "৬০ মিনিটে ডেলিভারি", en: "60-Min Express" },
        desc: { bn: "প্রধান এরিয়ায় দ্রুত সার্ভিস", en: "Rapid local hub dispatch" },
      },
      {
        title: { bn: "তাজা ও বাছাইকৃত", en: "Farm Fresh Picked" },
        desc: { bn: "প্রতিদিন সকালের নতুন স্টক", en: "Freshly sorted daily" },
      },
      {
        title: { bn: "MRP-এর চেয়ে সাশ্রয়ী", en: "Below MRP Deals" },
        desc: { bn: "বান্ডেল ও পাইকারি ছাড়", en: "Wholesale combo savings" },
      },
      {
        title: { bn: "সহজ ক্যাশ অন ডেলিভারি", en: "Easy Doorstep COD" },
        desc: { bn: "পণ্য বুঝে পেমেন্ট সুবিধা", en: "Pay cash or bKash at door" },
      },
    ],
    testimonials: [
      {
        name: { bn: "ফারজানা করিম", en: "Farzana Karim" },
        role: { bn: "গৃহিণী ও চাকরিজীবী, বনানী", en: "Working Mom, Banani" },
        rating: 5,
        comment: {
          bn: "অফিস সামলে সুপার শপে যাওয়ার সময়ই পেতাম না। এখন মাসের চাল-তেল থেকে শুরু করে ফলমূল সব এক ক্লিকেই অর্ডার করি, ৫৫ মিনিটেই বাসায় চলে আসে!",
          en: "Between work and family, grocery runs were exhausting. Now our entire monthly bazar arrives neatly packed in under an hour!",
        },
        avatarUrl: "/images/store/avatar-female-1.jpg",
        productBought: { bn: "মাসিক ফ্যামিলি মেগা বাজার বক্স", en: "Monthly Family Mega Bazar Box" },
      },
      {
        name: { bn: "কামরুল হাসান", en: "Kamrul Hasan" },
        role: { bn: "ব্যাংকার, মিরপুর ডিওএইচএস", en: "Banker, Mirpur DOHS" },
        rating: 5,
        comment: {
          bn: "ফলমূলগুলোর কোয়ালিটি সত্যিই অবাক করার মতো ফ্রেশ। আর ওয়েবসাইটে ১৫ সেকেন্ডেই লগইন ছাড়া অর্ডার করা যায়—খুবই ঝামেলাহীন।",
          en: "Produce quality is consistently fresh, and checking out without tedious OTP/login forms takes literally 15 seconds.",
        },
        avatarUrl: "/images/store/avatar-male-1.jpg",
        productBought: { bn: "ফ্রেশ ইমপোর্টেড ফ্রুট বাস্কেট", en: "Fresh Imported Fruit Basket" },
      },
      {
        name: { bn: "শারমিন আক্তার", en: "Sharmin Akter" },
        role: { bn: "ডাঃ শারমিন, বসুন্ধরা আবাসিক", en: "Physician, Bashundhara R/A" },
        rating: 5,
        comment: {
          bn: "হোম ক্লিনিং প্যাক ও কফি রেগুলার অর্ডার করি। সুপার শপের লাইনে দাঁড়ানোর চেয়ে এখানে দামও কম পাই।",
          en: "Better discounts than physical supermarket aisles and zero checkout queues!",
        },
        avatarUrl: "/images/store/avatar-female-3.jpg",
        productBought: { bn: "প্রিমিয়াম অ্যারাবিকা রোস্ট কফি", en: "Premium Arabica Roast Coffee" },
      },
    ],
    storeFaqs: [
      {
        q: {
          bn: "ডেলিভারির সময় কোনো ফল বা পণ্য পছন্দ না হলে ফেরত দেওয়া যাবে?",
          en: "Can I return fresh items on the spot if unsatisfied?",
        },
        a: {
          bn: "অবশ্যই! ডেলিভারি ম্যান উপস্থিত থাকা অবস্থায় পণ্য চেক করে কোনো আইটেম পছন্দ না হলে সাথে সাথেই ফেরত দিতে পারবেন এবং বিল থেকে তা বাদ যাবে।",
          en: "Yes! Inspect everything at your door and hand back any item immediately for instant bill adjustment.",
        },
      },
      {
        q: {
          bn: "কত টাকার বাজার করলে ডেলিভারি চার্জ ফ্রি?",
          en: "What is the minimum order for free delivery?",
        },
        a: {
          bn: "মাত্র ১,৫০০ টাকা বা তার বেশি অর্ডারে ডেলিভারি চার্জ সম্পূর্ণ ফ্রি!",
          en: "Orders of ৳1,500 or above qualify for 100% Free Doorstep Delivery.",
        },
      },
    ],
    categories: [
      {
        id: "sup-cat-1",
        slug: "cooking-essentials",
        name: { bn: "চাল, তেল ও বাজার কম্বো", en: "Rice, Oil & Combos" },
        thumbnailUrl: "/images/store/supershop-basket.jpg",
        itemCount: 64,
        subCategories: [
          { name: { bn: "মিনিকেট ও চিনিগুঁড়া চাল", en: "Miniket & Aromatic Rice" } },
          { name: { bn: "তেল, ডাল ও মশলা", en: "Oil, Lentils & Spices" } },
        ],
      },
      {
        id: "sup-cat-2",
        slug: "fresh-produce",
        name: { bn: "তাজা ফলমূল ও সবজি", en: "Fresh Fruits & Veg" },
        thumbnailUrl: "/images/store/supershop-fruits.jpg",
        itemCount: 42,
        subCategories: [
          { name: { bn: "ফ্রেশ ফ্রুটস বাস্কেট", en: "Fresh Fruits" } },
          { name: { bn: "অর্গানিক সবজি", en: "Daily Vegetables" } },
        ],
      },
      {
        id: "sup-cat-3",
        slug: "dairy-breakfast",
        name: { bn: "দুধ, ডিম ও ব্রেকফাস্ট", en: "Dairy & Breakfast" },
        thumbnailUrl: "/images/store/supershop-dairy.jpg",
        itemCount: 38,
        subCategories: [
          { name: { bn: "লিকুইড ও ফুল ক্রিম মিল্ক", en: "Milk & Yogurt" } },
          { name: { bn: "ওটস, সিরিয়াল ও স্প্রেড", en: "Cereal & Spreads" } },
        ],
      },
      {
        id: "sup-cat-4",
        slug: "beverages-snacks",
        name: { bn: "কফি, চা ও স্ন্যাকস", en: "Coffee, Tea & Snacks" },
        thumbnailUrl: "/images/store/supershop-beverages.jpg",
        itemCount: 51,
        subCategories: [
          { name: { bn: "ইমপোর্টেড কফি ও গ্রিন টি", en: "Coffee & Green Tea" } },
          { name: { bn: "বিস্কুট ও ফ্যামিলি স্ন্যাকস", en: "Biscuits & Snacks" } },
        ],
      },
      {
        id: "sup-cat-5",
        slug: "home-cleaning",
        name: { bn: "হোম ক্লিনিং ও কেয়ার", en: "Cleaning & Family Care" },
        thumbnailUrl: "/images/store/supershop-care.jpg",
        itemCount: 33,
        subCategories: [
          { name: { bn: "লন্ড্রি ও ডিশওয়াশ", en: "Laundry & Dishwash" } },
          { name: { bn: "হ্যান্ডওয়াশ ও টিস্যু", en: "Hygiene & Tissue" } },
        ],
      },
    ],
    products: [
      {
        id: "sup-prod-1",
        slug: "monthly-family-bazar-saver-combo",
        name: {
          bn: "মাসিক ফ্যামিলি বাজার মেগা কম্বো (চাল ৫ কেজি + তেল ৫ লিটার + ডাল + চিনি + চা)",
          en: "Monthly Family Bazar Saver Pack (Rice 5kg + Oil 5L + Lentils + Tea)",
        },
        categorySlug: "cooking-essentials",
        categoryName: { bn: "চাল, তেল ও বাজার কম্বো", en: "Rice, Oil & Combos" },
        unitLabel: "8 Essential Items",
        price: 2650,
        compareAtPrice: 3100,
        inStock: true,
        stockQty: 45,
        badge: { bn: "৳৪৫০ সাশ্রয় + ফ্রি ডেলিভারি", en: "Save ৳450" },
        sourceTags: ["FEATURED", "BEST_SELLING", "LOCATION_TRENDING"],
        shortDescription: {
          bn: "ছোট-মাঝারি পরিবারের পুরো মাসের প্রয়োজনীয় চাল, সয়াবিন তেল, মসুর ডাল, চিনিগুঁড়া পোলাও চাল, লবণ ও চা-পাতার কমপ্লিট সেভার বক্স।",
          en: "Complete monthly pantry box featuring 5kg premium Miniket rice, 5L fortified oil, 2kg deshi lentils, 1kg Chinigura rice, salt, sugar & tea.",
        },
        description: {
          bn: "প্রতিটি পণ্য নতুন ব্যাচের এবং বাজারের খুচরা মূল্যের চেয়ে ৪৫০ টাকা সাশ্রয়ে সরাসরি আপনার দরজায় ফ্রি ডেলিভারি করা হয়।",
          en: "Packed hygienically in a heavy-duty corrugated box with 100% freshness and weight guarantee.",
        },
        images: [
          "/images/store/supershop-basket.jpg",
          "/images/store/supershop-banner.jpg",
        ],
        variants: [
          { id: "v-baz-std", title: "Standard Family Pack (8 Items)", price: 2650, compareAtPrice: 3100, stockQty: 30 },
          { id: "v-baz-xl", title: "Large Family Pack (25kg Rice + 12 Items)", price: 4890, compareAtPrice: 5550, stockQty: 15 },
        ],
        specs: [
          { label: { bn: "প্যাকেজ আইটেম", en: "Contents" }, value: "8 Full-Size Pantry Staples" },
          { label: { bn: "ডেলিভারি চার্জ", en: "Delivery" }, value: "Free Home Delivery" },
        ],
        faqs: [],
      },
      {
        id: "sup-prod-2",
        slug: "fresh-vitamin-fruit-family-basket",
        name: {
          bn: "ফ্রেশ ভিটামিন ফ্রুট বাস্কেট — আপেল, মাল্টা, আঙ্গুর ও ডালিম (৪ কেজি)",
          en: "Farm-Fresh Vitamin Fruit Basket — Apple, Malta, Grapes & Pomegranate (4kg)",
        },
        categorySlug: "fresh-produce",
        categoryName: { bn: "তাজা ফলমূল ও সবজি", en: "Fresh Fruits & Veg" },
        unitLabel: "4 kg Assorted Pack",
        price: 1380,
        compareAtPrice: 1620,
        inStock: true,
        stockQty: 29,
        badge: { bn: "আজ সকালের তাজা স্টক", en: "Picked Today" },
        sourceTags: ["FEATURED", "BEST_SELLING", "JUST_FOR_YOU"],
        shortDescription: {
          bn: "গালা আপেল, রসালো মাল্টা, সিডলেস আঙ্গুর ও মিষ্টি ডালিমের ৪ কেজি প্রিমিয়াম ফ্যামিলি হেলথ বাস্কেট।",
          en: "Hand-selected Gala apples, juicy sweet Malta, seedless green grapes, and ruby pomegranates sorted fresh.",
        },
        description: {
          bn: "শতভাগ কেমিক্যালমুক্ত ও বাছাইকৃত গ্রেড-এ ফল। পরিবারের প্রতিদিনের ভিটামিন চাহিদা পূরণে অথবা উপহার হিসেবে দারুণ।",
          en: "Zero bruised pieces — inspected twice before dispatch in breathable eco crates.",
        },
        images: [
          "/images/store/supershop-fruits.jpg",
          "/images/store/supershop-banner.jpg",
        ],
        variants: [
          { id: "v-frt-4kg", title: "4 kg Family Fruit Box", price: 1380, compareAtPrice: 1620, stockQty: 20 },
          { id: "v-frt-2kg", title: "2 kg Regular Pack", price: 720, compareAtPrice: 850, stockQty: 9 },
        ],
        specs: [{ label: { bn: "সোর্সিং", en: "Quality" }, value: "Grade-A Morning Sorted" }],
        faqs: [],
      },
      {
        id: "sup-prod-3",
        slug: "colombian-arabica-gold-roast-coffee",
        name: {
          bn: "কলম্বিয়ান ১০০% অ্যারাবিকা গোল্ড ফ্রিজ-ড্রাইড কফি জার (200g)",
          en: "Colombian 100% Arabica Gold Freeze-Dried Coffee Jar (200g)",
        },
        categorySlug: "beverages-snacks",
        categoryName: { bn: "কফি, চা ও স্ন্যাকস", en: "Coffee, Tea & Snacks" },
        unitLabel: "200g Glass Jar",
        price: 850,
        compareAtPrice: 1020,
        inStock: true,
        stockQty: 52,
        badge: { bn: "ইমপোর্টেড বেস্টসেলার", en: "Imported Hit" },
        sourceTags: ["FEATURED", "JUST_FOR_YOU"],
        shortDescription: {
          bn: "মসৃণ অ্যারোমা ও রিচ ক্যাফে-স্টাইল স্বাদের জন্য মিডিয়াম রোস্টেড ১০০% অ্যারাবিকা কফি।",
          en: "Smooth, aromatic medium-roast Colombian Arabica crystals for instant hot lattes or iced americanos.",
        },
        description: {
          bn: "১টি ২০০ গ্রাম জারে প্রায় ১০০ কাপ প্রিমিয়াম কফি তৈরি করা যায়।",
          en: "Air-tight glass aroma-lock jar yielding ~100 rich cups.",
        },
        images: [
          "/images/store/supershop-beverages.jpg",
          "/images/store/supershop-basket.jpg",
        ],
        variants: [
          { id: "v-cof-200g", title: "200g Glass Jar", price: 850, compareAtPrice: 1020, stockQty: 38 },
          { id: "v-cof-twin", title: "Twin Saver (2 x 200g)", price: 1590, compareAtPrice: 2040, stockQty: 14 },
        ],
        specs: [{ label: { bn: "রোস্ট লেভেল", en: "Roast" }, value: "Medium Gold Arabica" }],
        faqs: [],
      },
      {
        id: "sup-prod-4",
        slug: "farmfresh-uht-full-cream-milk-case",
        name: {
          bn: "ফার্মফ্রেশ UHT ফুল ক্রিম লিকুইড মিল্ক ফ্যামিলি কার্টন (6 x 1 Liter)",
          en: "FarmFresh UHT Full Cream Milk Family Pack (6 x 1 Liter)",
        },
        categorySlug: "dairy-breakfast",
        categoryName: { bn: "দুধ, ডিম ও ব্রেকফাস্ট", en: "Dairy & Breakfast" },
        unitLabel: "6 Liters Carton",
        price: 690,
        compareAtPrice: 780,
        inStock: true,
        stockQty: 60,
        badge: { bn: "ফ্যামিলি ভ্যালু প্যাক", en: "6L Value Case" },
        sourceTags: ["FEATURED", "LOCATION_TRENDING", "BEST_SELLING"],
        shortDescription: {
          bn: "ফোটানোর ঝামেলা ছাড়াই সরাসরি পানযোগ্য পুষ্টিকর ফুল ক্রিম ইউএইচটি দুধ—চা, কফি, ডেজার্ট ও বাচ্চাদের জন্য।",
          en: "Ultra-heat treated pure cow milk in 6 tetra packs — zero preservatives and long pantry shelf life.",
        },
        description: {
          bn: "খুচরা কেনার চেয়ে কার্টন প্যাকে কিনলেই পাচ্ছেন নিশ্চিত ৯০ টাকা সাশ্রয়।",
          en: "Save ৳90 per 6-liter case with guaranteed latest production batch.",
        },
        images: [
          "/images/store/supershop-dairy.jpg",
          "/images/store/supershop-basket.jpg",
        ],
        variants: [
          { id: "v-mlk-6l", title: "6 x 1 Liter Case", price: 690, compareAtPrice: 780, stockQty: 40 },
          { id: "v-mlk-12l", title: "12 x 1 Liter Master Carton", price: 1340, compareAtPrice: 1560, stockQty: 20 },
        ],
        specs: [{ label: { bn: "ফ্যাট কন্টেন্ট", en: "Grade" }, value: "3.5% Full Cream UHT" }],
        faqs: [],
      },
      {
        id: "sup-prod-5",
        slug: "sparklehome-complete-cleaning-bundle",
        name: {
          bn: "স্পার্কল-হোম কমপ্লিট ক্লিনিং প্যাক (লিকুইড ডিটারজেন্ট ২লি + ডিশওয়াশ + ফ্লোর ক্লিনার)",
          en: "SparkleHome Complete Cleaning Bundle (2L Liquid Detergent + Dishwash + Floor Cleaner)",
        },
        categorySlug: "home-cleaning",
        categoryName: { bn: "হোম ক্লিনিং ও কেয়ার", en: "Cleaning & Family Care" },
        unitLabel: "4 Bottle Combo",
        price: 920,
        compareAtPrice: 1150,
        inStock: true,
        stockQty: 37,
        badge: { bn: "২০% কম্বো ছাড়", en: "20% Bundle Off" },
        sourceTags: ["JUST_FOR_YOU", "LOCATION_TRENDING"],
        shortDescription: {
          bn: "ওয়াশিং মেশিন/হ্যান্ড লন্ড্রি লিকুইড, লেমন ডিশওয়াশ জেল, অ্যান্টিব্যাকটেরিয়াল ফ্লোর ক্লিনার ও হ্যান্ডওয়াশ রিফিল।",
          en: "Everything needed for a spotless home: 2L front/top-load liquid detergent, lemon dishwash, pine floor cleaner & handwash.",
        },
        description: {
          bn: "কাপড়ের রঙ উজ্জ্বল রাখে এবং ৯৯.৯% জীবাণু দূর করে।",
          en: "Gentle on hands, tough on grease, and fresh citrus-pine fragrance.",
        },
        images: [
          "/images/store/supershop-care.jpg",
          "/images/store/supershop-banner.jpg",
        ],
        variants: [
          { id: "v-cln-4pk", title: "4-in-1 Monthly Home Pack", price: 920, compareAtPrice: 1150, stockQty: 37 },
        ],
        specs: [{ label: { bn: "বান্ডেল সাইজ", en: "Volume" }, value: "4 Full-Size Bottles" }],
        faqs: [],
      },
    ],
  },

  /* ========================================================================
   * PRESET 6: HOME & LIFESTYLE APPLIANCES (Smart Kitchen & Living Style)
   * ======================================================================== */
  electronics: {
    code: "electronics",
    presetLabel: {
      bn: "হোম ও কিচেন অ্যাপ্লায়েন্স প্রিসেট",
      en: "Home & Kitchen Appliances Preset",
    },
    storeName: {
      bn: "বাণিজ্য হোম অ্যান্ড লিভিং",
      en: "Banijjo Home & Living",
    },
    tagline: {
      bn: "স্মার্ট কিচেন ও আধুনিক ঘরের জন্য প্রিমিয়াম অ্যাপ্লায়েন্স",
      en: "Modern Kitchen & Smart Home Appliances With Official Brand Warranty",
    },
    announcement: {
      bn: "সকল অ্যাপ্লায়েন্সে ১–২ বছরের অফিসিয়াল সার্ভিস ওয়ারেন্টি! সারাদেশে নিরাপদ ক্যাশ অন ডেলিভারি | কুপন: WELCOME10",
      en: "1–2 Years Official Brand Warranty on All Appliances! Safe Nationwide COD | Coupon: WELCOME10",
    },
    hotline: "+8801878-601610",
    freeShippingThreshold: 3500,
    defaultCardVariant: "classic",
    theme: {
      primaryBg: "bg-teal-700",
      primaryHoverBg: "hover:bg-teal-800",
      primaryText: "text-teal-700",
      primaryBorder: "border-teal-600",
      primarySoftBg: "bg-teal-50",
      accentBg: "bg-amber-400",
      accentText: "text-amber-400",
      headerBarBg: "bg-slate-900",
      heroOverlay: "from-slate-950/90 via-slate-900/70 to-slate-900/25",
      buttonRadius: "rounded-lg",
    },
    heroSlides: [
      {
        id: "elec-slide-1",
        badge: {
          bn: "২ বছরের অফিসিয়াল সার্ভিস ওয়ারেন্টি",
          en: "2-Year Official Brand Warranty",
        },
        title: {
          bn: "আপনার আধুনিক রান্নাঘর ও ঘরের জন্য স্মার্ট হোম অ্যাপ্লায়েন্স",
          en: "Upgrade Everyday Living With Smart Kitchen & Home Appliances",
        },
        subtitle: {
          bn: "বারিস্তা এসপ্রেসো মেকার, হেভি-ডিউটি নিউট্রি ব্লেন্ডার, ডাবল-ওয়াল স্মার্ট কেটলি এবং মিনিমালিস্ট হোম লাইটিং—এখন ঘরে বসেই অর্ডার করুন।",
          en: "Barista espresso machines, copper-motor blenders, cool-touch kettles, and Nordic home lighting delivered safely.",
        },
        ctaLabel: { bn: "সকল অ্যাপ্লায়েন্স দেখুন", en: "Shop Home Appliances" },
        secondaryCtaLabel: { bn: "কিচেন কম্বো ডিল", en: "Kitchen Combo Deals" },
        discountCallout: { bn: "সর্বোচ্চ ২৫% ছাড়!", en: "Up to 25% OFF!" },
        imageUrl: "/images/store/home-appliances-banner.jpg",
      },
      {
        id: "elec-slide-2",
        badge: {
          bn: "ক্যাফে স্টাইল হোম কফি কর্নার",
          en: "Home Café Experience",
        },
        title: {
          bn: "২০-বার প্রেশার এসপ্রেসো ও ক্যাপুচিনো মেকার — ঘরেই ক্যাফে টেস্ট",
          en: "20-Bar Italian Pump Espresso & Milk Frother Machine",
        },
        subtitle: {
          bn: "স্টেইনলেস স্টিল বডি ও স্টিম ওয়ান্ড দিয়ে মাত্র ৬০ সেকেন্ডে তৈরি করুন পারফেক্ট লাতে বা ক্যাপুচিনো।",
          en: "Brew rich crema espresso and silky micro-foam lattes every morning in 60 seconds.",
        },
        ctaLabel: { bn: "কফি মেকার দেখুন", en: "Explore Coffee Gear" },
        secondaryCtaLabel: { bn: "অফিসিয়াল ওয়ারেন্টি", en: "2-Year Warranty" },
        discountCallout: { bn: "৳১,৫০০ ক্যাশ ছাড়!", en: "Save ৳1,500!" },
        imageUrl: "/images/store/appliance-coffee.jpg",
      },
    ],
    splitPromoBanners: [
      {
        id: "elec-promo-1",
        badge: { bn: "কিচেন বেস্টসেলার", en: "Kitchen Best Seller" },
        title: {
          bn: "১২০০ ওয়াট কপার মোটর মাল্টি-ব্লেন্ডার ও গ্রাইন্ডার সেট",
          en: "1200W Pure Copper Motor Nutri-Blender & Spice Grinder",
        },
        subtitle: {
          bn: "শক্ত মশলা, বাদাম ও স্মুদি মাত্র ১৫ সেকেন্ডে নিখুঁত গ্রাইন্ড করার নিশ্চয়তা।",
          en: "Crushes ice, dry spices, and smoothies in 15 seconds with 3 stainless jars.",
        },
        ctaLabel: { bn: "ব্লেন্ডার দেখুন", en: "Shop Blenders" },
        discountText: { bn: "৳৮০০ ছাড়", en: "Save ৳800" },
        imageUrl: "/images/store/appliance-blender.jpg",
        categoryFilterSlug: "kitchen-appliances",
      },
      {
        id: "elec-promo-2",
        badge: { bn: "নর্ডিক ডেকোর ও লাইটিং", en: "Modern Home Decor" },
        title: {
          bn: "মিনিমালিস্ট আর্কিটেকচারাল ওয়ার্ম ডেস্ক ও বেডসাইড ল্যাম্প",
          en: "Minimalist Architectural Dimmable Desk & Ambient Lamps",
        },
        subtitle: {
          bn: "ওয়ার্কস্পেস ও বেডরুমের পরিবেশ মুহূর্তেই প্রিমিয়াম করে তুলতে ৩-মোড ওয়ার্ম লাইটিং।",
          en: "3-tone eye-care LED warmth to elevate your study desk or bedside table.",
        },
        ctaLabel: { bn: "হোম লাইটিং দেখুন", en: "Shop Lighting" },
        discountText: { bn: "নতুন কালেকশন", en: "New Arrival" },
        imageUrl: "/images/store/appliance-lamp.jpg",
        categoryFilterSlug: "smart-lighting",
      },
    ],
    fullWidthOfferBanner: {
      id: "elec-full-offer",
      badge: { bn: "হোম আপগ্রেড ফেস্ট", en: "Home Upgrade Fest" },
      title: {
        bn: "যেকোনো কিচেন ও হোম অ্যাপ্লায়েন্সে ১০% ইনস্ট্যান্ট ডিসকাউন্ট!",
        en: "Get 10% Instant Discount on All Smart Kitchen & Home Appliances!",
      },
      subtitle: {
        bn: "চেকআউট পেজে কুপন কোড WELCOME10 ব্যবহার করলেই সাথে সাথে ১০% ছাড় এবং অফিসিয়াল ওয়ারেন্টি কার্ডসহ হোম ডেলিভারি।",
        en: "Apply coupon WELCOME10 at checkout — delivered safely nationwide with official warranty card.",
      },
      ctaLabel: { bn: "এখনই অর্ডার করুন", en: "Shop Appliances" },
      couponCode: "WELCOME10",
      discountText: { bn: "কুপন: WELCOME10", en: "Code: WELCOME10" },
      imageUrl: "/images/store/home-appliances-banner.jpg",
    },
    brandStory: {
      badge: { bn: "গুণগত মান ও আস্থা", en: "Engineered for Daily Reliability" },
      title: {
        bn: "টেকসই কপার মোটর, ফুড-গ্রেড স্টেইনলেস স্টিল ও ২ বছরের ওয়ারেন্টি ভরসা",
        en: "Food-Grade 304 Stainless Steel, Copper Motors & Hassle-Free Service",
      },
      subtitle: {
        bn: "সস্তা প্লাস্টিক অ্যাপ্লায়েন্স কয়েক মাসেই নষ্ট হয়ে যায়। আমাদের প্রতিটি কিচেন ও হোম প্রোডাক্ট বিএসটিআই/সিই স্ট্যান্ডার্ড এবং সরাসরি আফটার-সেলস সার্ভিস সাপোর্টযুক্ত।",
        en: "Every appliance undergoes power-load inspection before shipping in reinforced foam-lined cartons.",
      },
      points: [
        {
          bn: "১ থেকে ২ বছরের অফিসিয়াল মোটর ও সার্ভিস ওয়ারেন্টি কার্ড সংযুক্ত",
          en: "1 to 2 years official motor & parts warranty card included",
        },
        {
          bn: "ফুড-গ্রেড 304 স্টেইনলেস স্টিল ও ওভারলোড অটো-কাটঅফ সেফটি",
          en: "BPA-free food-grade 304 steel with thermal overload protection",
        },
        {
          bn: "ফোম-প্রোটেক্টেড ডাবল কার্টনে সারাদেশে নিরাপদ ক্যাশ অন ডেলিভারি",
          en: "Foam-cushioned double-box courier protection across Bangladesh",
        },
      ],
      ctaLabel: { bn: "কিচেন কালেকশন দেখুন", en: "Explore Collection" },
      imageUrl: "/images/store/appliance-coffee.jpg",
      stats: [
        { value: "2 Years", label: { bn: "সার্ভিস ওয়ারেন্টি", en: "Service Warranty" } },
        { value: "18,000+", label: { bn: "আধুনিক পরিবার", en: "Modern Homes" } },
        { value: "100%", label: { bn: "সেফ ডেলিভারি গ্যারান্টি", en: "Damage-Free Transit" } },
      ],
    },
    highlights: [
      {
        title: { bn: "২ বছর ওয়ারেন্টি", en: "2-Year Warranty" },
        desc: { bn: "অফিসিয়াল মোটর ও সার্ভিস", en: "Official service support" },
      },
      {
        title: { bn: "ফুড-গ্রেড ম্যাটেরিয়াল", en: "Food-Grade 304" },
        desc: { bn: "BPA-মুক্ত ও স্বাস্থ্যসম্মত", en: "BPA-free stainless build" },
      },
      {
        title: { bn: "ডাবল-বক্স প্যাকিং", en: "Double-Box Safe" },
        desc: { bn: "ভাঙা বা ড্যামেজ ঝুঁকি শূন্য", en: "Zero transit damage risk" },
      },
      {
        title: { bn: "ক্যাশ অন ডেলিভারি", en: "Cash on Delivery" },
        desc: { bn: "পণ্য চেক করে মূল্য পরিশোধ", en: "Inspect upon delivery" },
      },
    ],
    testimonials: [
      {
        name: { bn: "নাফিসা রহমান", en: "Nafisa Rahman" },
        role: { bn: "আর্কিটেক্ট, গুলশান", en: "Architect, Gulshan" },
        rating: 5,
        comment: {
          bn: "এসপ্রেসো কফি মেকারটি আমার সকালের রুটিন বদলে দিয়েছে! দেখতে যেমন এলিগ্যান্ট, কফির ক্রেমাও একদম ক্যাফের মতো হয়।",
          en: "The 20-bar espresso machine looks gorgeous on our counter and pulls café-grade shots every single morning.",
        },
        avatarUrl: "/images/store/avatar-female-2.jpg",
        productBought: { bn: "২০-বার বারিস্তা এসপ্রেসো মেকার", en: "20-Bar Barista Espresso Maker" },
      },
      {
        name: { bn: "ইমরান হোসেন", en: "Imran Hossain" },
        role: { bn: "রেস্টুরেন্ট ওনার, চট্টগ্রাম", en: "Chef & Founder, Chattogram" },
        rating: 5,
        comment: {
          bn: "১২০০ ওয়াট কপার ব্লেন্ডারটি দারুণ পাওয়ারফুল। গরম মশলা বা বরফ যেকোনো কিছু সেকেন্ডেই গুঁড়ো হয়ে যায়।",
          en: "1200W blender handles dry whole spices effortlessly without overheating. Worth every taka.",
        },
        avatarUrl: "/images/store/avatar-male-2.jpg",
        productBought: { bn: "১২০০ ওয়াট কপার নিউট্রি ব্লেন্ডার", en: "1200W Copper Nutri-Blender" },
      },
    ],
    storeFaqs: [
      {
        q: {
          bn: "কুরিয়ারে আসার সময় কোনো ক্ষতি হলে কী হবে?",
          en: "What if an appliance gets damaged during courier transit?",
        },
        a: {
          bn: "প্রতিটি অ্যাপ্লায়েন্স মোটা ফোম ও ডাবল কার্টনে পাঠানো হয়। তবুও আনবক্সিংয়ে কোনো ত্রুটি থাকলে আমরা সম্পূর্ণ ফ্রি রিপ্লেসমেন্ট দিয়ে থাকি।",
          en: "We ship in foam-armored double cartons and guarantee 100% free replacement in case of any transit issue.",
        },
      },
    ],
    categories: [
      {
        id: "elec-cat-1",
        slug: "kitchen-appliances",
        name: { bn: "ব্লেন্ডার ও কিচেন গিয়ার", en: "Kitchen Appliances" },
        thumbnailUrl: "/images/store/appliance-blender.jpg",
        itemCount: 27,
        subCategories: [
          { name: { bn: "হেভি-ডিউটি ব্লেন্ডার", en: "Blenders & Grinders" } },
          { name: { bn: "স্মার্ট ইলেকট্রিক কেটলি", en: "Electric Kettles" } },
        ],
      },
      {
        id: "elec-cat-2",
        slug: "coffee-beverage",
        name: { bn: "কফি মেকার ও ব্রুয়ার", en: "Coffee & Espresso" },
        thumbnailUrl: "/images/store/appliance-coffee.jpg",
        itemCount: 14,
        subCategories: [{ name: { bn: "এসপ্রেসো মেশিন", en: "Espresso Machines" } }],
      },
      {
        id: "elec-cat-3",
        slug: "smart-lighting",
        name: { bn: "মডার্ন ল্যাম্প ও ডেকোর", en: "Lamps & Home Living" },
        thumbnailUrl: "/images/store/appliance-lamp.jpg",
        itemCount: 19,
        subCategories: [{ name: { bn: "নর্ডিক ডেস্ক ল্যাম্প", en: "Desk & Floor Lamps" } }],
      },
    ],
    products: [
      {
        id: "elec-prod-1",
        slug: "baristapro-20bar-espresso-coffee-machine",
        name: {
          bn: "বারিস্তাপ্রো ২০-বার স্টেইনলেস এসপ্রেসো ও ক্যাপুচিনো কফি মেকার",
          en: "BaristaPro 20-Bar Stainless Espresso & Cappuccino Maker",
        },
        categorySlug: "coffee-beverage",
        categoryName: { bn: "কফি মেকার ও ব্রুয়ার", en: "Coffee & Espresso" },
        unitLabel: "2 Years Warranty",
        price: 11900,
        compareAtPrice: 13800,
        inStock: true,
        stockQty: 14,
        badge: { bn: "৳১,৯০০ ছাড় + ফ্রি শিপিং", en: "Save ৳1,900" },
        sourceTags: ["FEATURED", "BEST_SELLING", "JUST_FOR_YOU"],
        shortDescription: {
          bn: "ইতালিয়ান ২০-বার প্রেশার পাম্প, স্টিম মিল্ক ফ্রদার ও কাপ ওয়ার্মিং ট্রে—ঘরেই ক্যাফে কোয়ালিটি এসপ্রেসো ও লাতের জন্য।",
          en: "20-bar pressure extraction, professional steam wand, 1.5L detachable tank, and brushed stainless housing.",
        },
        description: {
          bn: "ডাবল শট পোর্টফিল্টার ও মেজারিং ট্যাম্পার বক্সের সাথেই সংযুক্ত। অফিস কিংবা বাসার কফি কর্নারের জন্য প্রিমিয়াম চয়েস।",
          en: "Includes dual-shot portafilter, stainless steel frothing pitcher bonus, and 2-year official service warranty.",
        },
        images: [
          "/images/store/appliance-coffee.jpg",
          "/images/store/home-appliances-banner.jpg",
        ],
        variants: [
          { id: "v-esp-silver", title: "Brushed Stainless Silver", price: 11900, compareAtPrice: 13800, stockQty: 9 },
          { id: "v-esp-black", title: "Matte Noir Edition", price: 12200, compareAtPrice: 14200, stockQty: 5 },
        ],
        specs: [
          { label: { bn: "প্রেশার পাম্প", en: "Pump Pressure" }, value: "20-Bar Italian ULKA" },
          { label: { bn: "ওয়ারেন্টি", en: "Warranty" }, value: "2 Years Official Service" },
        ],
        faqs: [],
      },
      {
        id: "elec-prod-2",
        slug: "nutriblend-1200w-copper-mixer-grinder",
        name: {
          bn: "নিউট্রি-ব্লেন্ড 1200W পিওর কপার মোটর মাল্টি-ব্লেন্ডার (৩টি স্টেইনলেস জার)",
          en: "NutriBlend 1200W Pure Copper Mixer, Smoothie & Spice Grinder (3 Jars)",
        },
        categorySlug: "kitchen-appliances",
        categoryName: { bn: "ব্লেন্ডার ও কিচেন গিয়ার", en: "Kitchen Appliances" },
        unitLabel: "1200W • 3 Steel Jars",
        price: 4290,
        compareAtPrice: 5100,
        inStock: true,
        stockQty: 27,
        badge: { bn: "বেস্ট সেলার কিচেন", en: "Top Rated" },
        sourceTags: ["FEATURED", "BEST_SELLING", "LOCATION_TRENDING"],
        shortDescription: {
          bn: "শুকনো হলুদ-মরিচ গুঁড়ো, আদা-রসুন পেস্ট ও ফ্রুট স্মুদির জন্য ৬-ব্লেড টাইটানিয়াম কাটারযুক্ত হেভি-ডিউটি ব্লেন্ডার।",
          en: "100% pure copper 22,000 RPM motor with wet, dry, and chutney heavy-gauge 304 stainless steel jars.",
        },
        description: {
          bn: "ওভারলোড অটো ব্রেকার থাকায় মোটর জ্বলে যাওয়ার ভয় নেই। ২ বছরের অফিসিয়াল মোটর ওয়ারেন্টিসহ।",
          en: "Built-in thermal overload reset switch and anti-slip suction feet for Bangladeshi spice prep.",
        },
        images: [
          "/images/store/appliance-blender.jpg",
          "/images/store/home-appliances-banner.jpg",
        ],
        variants: [
          { id: "v-bld-3jar", title: "3 Stainless Jars Set", price: 4290, compareAtPrice: 5100, stockQty: 27 },
        ],
        specs: [{ label: { bn: "মোটর পাওয়ার", en: "Motor" }, value: "1200W 100% Copper" }],
        faqs: [],
      },
      {
        id: "elec-prod-3",
        slug: "thermosafe-double-wall-electric-kettle",
        name: {
          bn: "থার্মোসেফ ১.৮ লিটার ডাবল-ওয়াল কুল-টাচ স্মার্ট ইলেকট্রিক কেটলি",
          en: "ThermoSafe 1.8L Double-Wall Cool-Touch Stainless Electric Kettle",
        },
        categorySlug: "kitchen-appliances",
        categoryName: { bn: "ব্লেন্ডার ও কিচেন গিয়ার", en: "Kitchen Appliances" },
        unitLabel: "1.8L • Auto Shut-Off",
        price: 1690,
        compareAtPrice: 2150,
        inStock: true,
        stockQty: 41,
        badge: { bn: "কুল-টাচ সেফটি বডি", en: "Cool-Touch Safe" },
        sourceTags: ["FEATURED", "LOCATION_TRENDING"],
        shortDescription: {
          bn: "ভেতরে জয়েন্টবিহীন 304 স্টেইনলেস স্টিল এবং বাইরে হাত না পোড়ার ডাবল-ওয়াল ইনসুলেটেড বডি।",
          en: "Boils 1.8L water in 3.5 minutes with seamless 304 stainless interior and cool-touch exterior.",
        },
        description: {
          bn: "পানি ফুটলেই অটোমেটিক বন্ধ হয়ে যায় এবং বয়েল-ড্রাই প্রোটেকশন যুক্ত।",
          en: "360° swivel power base with automatic boil-dry shutoff protection.",
        },
        images: [
          "/images/store/appliance-kettle.jpg",
          "/images/store/home-appliances-banner.jpg",
        ],
        variants: [
          { id: "v-ktl-black", title: "Matte Charcoal 1.8L", price: 1690, compareAtPrice: 2150, stockQty: 41 },
        ],
        specs: [{ label: { bn: "ক্যাপাসিটি", en: "Capacity" }, value: "1.8 Liters (1500W)" }],
        faqs: [],
      },
      {
        id: "elec-prod-4",
        slug: "nordic-studio-dimmable-desk-lamp",
        name: {
          bn: "নর্ডিক স্টুডিও আই-কেয়ার ডিমেবল আর্কিটেক্ট ডেস্ক ও বেডসাইড ল্যাম্প",
          en: "Nordic Studio Eye-Care Dimmable Metal Desk & Bedside Lamp",
        },
        categorySlug: "smart-lighting",
        categoryName: { bn: "মডার্ন ল্যাম্প ও ডেকোর", en: "Lamps & Home Living" },
        unitLabel: "3-Tone LED • Solid Metal",
        price: 2190,
        compareAtPrice: 2700,
        inStock: true,
        stockQty: 23,
        badge: { bn: "মিনিমালিস্ট ডেকোর", en: "Aesthetic Pick" },
        sourceTags: ["FEATURED", "JUST_FOR_YOU"],
        shortDescription: {
          bn: "ওয়ার্ম, ন্যাচারাল ও কুল হোয়াইট—৩টি ফ্লিকার-ফ্রি লাইটিং মোড ও পাউডার-কোটেড মেটাল ফিনিশ।",
          en: "Flicker-free warm/neutral/daylight LED modes in a weighted matte metal silhouette.",
        },
        description: {
          bn: "রাত জেগে পড়াশোনা, অফিস ডেস্ক কিংবা বেডসাইড অ্যাম্বিয়েন্ট লাইটিংয়ের জন্য প্রিমিয়াম সংযোজন।",
          en: "Includes energy-saving warm LED bulb and braided cord switch.",
        },
        images: [
          "/images/store/appliance-lamp.jpg",
          "/images/store/home-appliances-banner.jpg",
        ],
        variants: [
          { id: "v-lmp-matte", title: "Matte Charcoal Brass", price: 2190, compareAtPrice: 2700, stockQty: 23 },
        ],
        specs: [{ label: { bn: "বডি ম্যাটেরিয়াল", en: "Material" }, value: "Powder-Coated Steel & Brass" }],
        faqs: [],
      },
    ],
  },
};
