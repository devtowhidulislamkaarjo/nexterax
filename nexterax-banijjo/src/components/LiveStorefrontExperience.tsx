"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  ShoppingBag,
  Search,
  PhoneCall,
  Truck,
  ShieldCheck,
  Award,
  RefreshCw,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ShoppingCart,
  Zap,
  PackageCheck,
  Plus,
  Minus,
  X,
  CheckCircle2,
  Sparkles,
  Monitor,
  Smartphone,
  MessageCircle,
  Tag,
  MapPin,
  CreditCard,
  Clock,
  Star,
  Flame,
  Quote,
  Copy,
  Menu as MenuIcon,
  Home,
  Sprout,
  Shirt,
  Check,
  CornerDownRight,
  SlidersHorizontal,
} from "lucide-react";
import {
  LIVE_STORE_PRESETS,
  PRODUCT_CARD_VARIANT_OPTIONS,
  type PresetCode,
  type ProductCardVariant,
  type LiveProduct,
  type LiveProductVariant,
} from "@/data/live-store-presets";
import { buildWhatsAppUrl } from "@/data/banijjo-data";

interface CartItem {
  product: LiveProduct;
  variant: LiveProductVariant;
  quantity: number;
}

interface PlacedOrderInfo {
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  deliveryZoneName: string;
  paymentMethod: "COD" | "SSLCOMMERZ";
  items: CartItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  grandTotal: number;
  createdAt: string;
}

const DELIVERY_ZONES = [
  {
    id: "inside-dhaka",
    name: {
      bn: "ঢাকা সিটির ভেতরে (২৪-৪৮ ঘণ্টা)",
      en: "Inside Dhaka City (24-48h)",
    },
    fee: 60,
  },
  {
    id: "dhaka-suburb",
    name: {
      bn: "ঢাকা সাব-এরিয়া — গাজীপুর, সাভার, নারায়ণগঞ্জ",
      en: "Dhaka Suburbs (Savar, Gazipur, Narayanganj)",
    },
    fee: 100,
  },
  {
    id: "outside-dhaka",
    name: {
      bn: "ঢাকার বাইরে সারাদেশে (২-৪ দিন)",
      en: "Outside Dhaka Nationwide (2-4 Days)",
    },
    fee: 120,
  },
];

type SmartSourceMode =
  | "ALL"
  | "JUST_FOR_YOU"
  | "BEST_SELLING"
  | "LOCATION_TRENDING";

export function LiveStorefrontExperience({
  initialPreset = "food",
  onBackToMarketing,
}: {
  initialPreset?: PresetCode;
  onBackToMarketing?: () => void;
}) {
  const [presetCode, setPresetCode] = useState<PresetCode>(initialPreset);
  const preset = LIVE_STORE_PRESETS[presetCode];

  const [lang, setLang] = useState<"bn" | "en">("bn");
  const [cardVariant, setCardVariant] = useState<ProductCardVariant>(
    preset.defaultCardVariant
  );
  const [viewportMode, setViewportMode] = useState<"desktop" | "mobile">(
    "desktop"
  );
  const isMobile = viewportMode === "mobile";

  // Mobile Menu Drawer state (Matches Banijjo_Studio_SaaS/client/src/components/storefront/header.tsx)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [expandedMobileCatId, setExpandedMobileCatId] = useState<string | null>(
    null
  );

  // Storefront navigation & filtering state
  const [viewMode, setViewMode] = useState<
    "home" | "product" | "checkout" | "order-success"
  >("home");
  const [selectedCategorySlug, setSelectedCategorySlug] =
    useState<string>("all");
  const [smartSource, setSmartSource] = useState<SmartSourceMode>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [heroSlideIdx, setHeroSlideIdx] = useState<number>(0);

  // Active Product Detail View state
  const [activeProduct, setActiveProduct] = useState<LiveProduct | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [selectedVariant, setSelectedVariant] =
    useState<LiveProductVariant | null>(null);
  const [detailQty, setDetailQty] = useState<number>(1);

  // Cart & Drawer state
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [copiedCoupon, setCopiedCoupon] = useState<boolean>(false);

  // Checkout state
  const [customerName, setCustomerName] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");
  const [customerAddress, setCustomerAddress] = useState<string>("");
  const [selectedZoneId, setSelectedZoneId] = useState<string>("inside-dhaka");
  const [paymentMethod, setPaymentMethod] = useState<"COD" | "SSLCOMMERZ">(
    "COD"
  );
  const [couponInput, setCouponInput] = useState<string>("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [placedOrder, setPlacedOrder] = useState<PlacedOrderInfo | null>(null);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterSubscribed, setNewsletterSubscribed] =
    useState<boolean>(false);

  // Sync preset change
  useEffect(() => {
    const nextPreset = LIVE_STORE_PRESETS[presetCode];
    setCardVariant(nextPreset.defaultCardVariant);
    setSelectedCategorySlug("all");
    setSmartSource("ALL");
    setSearchQuery("");
    setHeroSlideIdx(0);
    setViewMode("home");
    setActiveProduct(null);
    setMobileMenuOpen(false);
    setExpandedMobileCatId(nextPreset.categories[0]?.id || null);

    const firstProd = nextPreset.products[0];
    if (firstProd && firstProd.variants[0]) {
      setCart([
        {
          product: firstProd,
          variant: firstProd.variants[0],
          quantity: 1,
        },
      ]);
    }
  }, [presetCode]);

  useEffect(() => {
    setPresetCode(initialPreset);
  }, [initialPreset]);

  // Hero slider auto-advance
  useEffect(() => {
    if (viewMode !== "home") return;
    const timer = setInterval(() => {
      setHeroSlideIdx((prev) => (prev + 1) % preset.heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [viewMode, preset.heroSlides.length]);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg((prev) => (prev === msg ? null : prev));
    }, 2400);
  };

  const filteredProducts = useMemo(() => {
    return preset.products.filter((p) => {
      const matchesCat =
        selectedCategorySlug === "all" ||
        p.categorySlug === selectedCategorySlug;
      const matchesSmart =
        smartSource === "ALL" ||
        (Array.isArray(p.sourceTags) && p.sourceTags.includes(smartSource));
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.name.bn.toLowerCase().includes(q) ||
        p.name.en.toLowerCase().includes(q) ||
        p.categoryName.bn.toLowerCase().includes(q) ||
        p.categoryName.en.toLowerCase().includes(q);
      return matchesCat && matchesSmart && matchesQuery;
    });
  }, [preset.products, selectedCategorySlug, smartSource, searchQuery]);

  const totalCartItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const subtotal = useMemo(
    () =>
      cart.reduce((sum, item) => sum + item.variant.price * item.quantity, 0),
    [cart]
  );

  const discountAmount = useMemo(() => {
    if (appliedCoupon === "WELCOME10") {
      return Math.round(subtotal * 0.1);
    }
    return 0;
  }, [subtotal, appliedCoupon]);

  const activeZone =
    DELIVERY_ZONES.find((z) => z.id === selectedZoneId) || DELIVERY_ZONES[0];

  const isFreeShipping = subtotal >= preset.freeShippingThreshold;
  const shippingFee =
    cart.length === 0 ? 0 : isFreeShipping ? 0 : activeZone.fee;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleAddToCart = (
    product: LiveProduct,
    variant: LiveProductVariant = product.variants[0],
    qty = 1,
    buyNow = false
  ) => {
    setCart((prev) => {
      const idx = prev.findIndex(
        (i) => i.product.id === product.id && i.variant.id === variant.id
      );
      if (idx > -1) {
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          quantity: updated[idx].quantity + qty,
        };
        return updated;
      }
      return [...prev, { product, variant, quantity: qty }];
    });

    if (buyNow) {
      setCartDrawerOpen(false);
      setMobileMenuOpen(false);
      setViewMode("checkout");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      showToast(
        lang === "bn"
          ? `"${product.name.bn}" কার্টে যুক্ত হয়েছে!`
          : `"${product.name.en}" added to cart!`
      );
    }
  };

  const handleUpdateCartQty = (
    productId: string,
    variantId: string,
    delta: number
  ) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (
            item.product.id === productId &&
            item.variant.id === variantId
          ) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleOpenProductDetail = (product: LiveProduct) => {
    setActiveProduct(product);
    setSelectedVariant(product.variants[0]);
    setActiveImageIdx(0);
    setDetailQty(1);
    setMobileMenuOpen(false);
    setViewMode("product");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleApplyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    if (code === "WELCOME10") {
      setAppliedCoupon("WELCOME10");
      showToast(
        lang === "bn"
          ? "WELCOME10 কুপনে ১০% ডিসকাউন্ট যুক্ত হয়েছে!"
          : "10% Discount Applied with WELCOME10!"
      );
    } else {
      showToast(
        lang === "bn"
          ? "ডেমো কুপন কোড হিসেবে WELCOME10 ব্যবহার করুন"
          : "Try demo coupon code: WELCOME10"
      );
    }
  };

  const handleCopyCoupon = (code: string) => {
    setAppliedCoupon(code);
    setCouponInput(code);
    setCopiedCoupon(true);
    showToast(
      lang === "bn"
        ? `কুপন কোড ${code} অটো-অ্যাপ্লাই করা হয়েছে (১০% ছাড়)!`
        : `Coupon ${code} auto-applied (10% OFF)!`
    );
    setTimeout(() => setCopiedCoupon(false), 2000);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const orderNum = `BNJ-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder: PlacedOrderInfo = {
      orderNumber: orderNum,
      customerName:
        customerName.trim() || (lang === "bn" ? "তানভীর আহমেদ" : "Tanvir Ahmed"),
      customerPhone: customerPhone.trim() || "01711-000000",
      customerAddress:
        customerAddress.trim() ||
        (lang === "bn"
          ? "বাড়ি ১২, রোড ৫, ধানমন্ডি, ঢাকা"
          : "House 12, Road 5, Dhanmondi, Dhaka"),
      deliveryZoneName: activeZone.name[lang],
      paymentMethod,
      items: [...cart],
      subtotal,
      discount: discountAmount,
      shippingFee,
      grandTotal,
      createdAt: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setPlacedOrder(newOrder);
    setViewMode("order-success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeSlide =
    preset.heroSlides[heroSlideIdx] || preset.heroSlides[0];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (viewMode !== "home") {
      setViewMode("home");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Render individual product card (Mobile & Desktop optimized)
  const renderProductCard = (product: LiveProduct) => {
    const primaryImage = product.images[0];
    const discountPct =
      product.compareAtPrice && product.compareAtPrice > product.price
        ? Math.round(
            ((product.compareAtPrice - product.price) /
              product.compareAtPrice) *
              100
          )
        : null;

    // 2. MINIMAL CARD
    if (cardVariant === "minimal") {
      return (
        <article
          key={product.id}
          className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-4 text-center shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-xl"
        >
          <div>
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100">
              <button
                type="button"
                onClick={() => handleOpenProductDetail(product)}
                className="block h-full w-full text-left"
              >
                <img
                  src={primaryImage}
                  alt={product.name[lang]}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </button>

              {discountPct && (
                <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-rose-600 px-2 py-0.5 text-[10px] font-extrabold text-white shadow">
                  -{discountPct}%
                </span>
              )}

              <button
                type="button"
                onClick={() => handleAddToCart(product)}
                title="Add to Cart"
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-md backdrop-blur transition hover:bg-slate-900 hover:text-white"
              >
                <ShoppingCart className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="mt-2.5 space-y-1">
              <span className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                {product.unitLabel}
              </span>
              <button
                type="button"
                onClick={() => handleOpenProductDetail(product)}
                className="line-clamp-2 min-h-[2.25rem] block w-full text-center text-xs sm:text-sm font-bold leading-snug text-slate-900 hover:underline"
              >
                {product.name[lang]}
              </button>
            </div>
          </div>

          <div className="mt-2.5 pt-2">
            <div className="flex items-baseline justify-center gap-1.5">
              <span
                className={`text-sm sm:text-lg font-extrabold ${preset.theme.primaryText}`}
              >
                ৳{product.price.toLocaleString()}
              </span>
              {product.compareAtPrice && (
                <span className="text-[11px] text-slate-400 line-through">
                  ৳{product.compareAtPrice.toLocaleString()}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() =>
                handleAddToCart(product, product.variants[0], 1, true)
              }
              className={`mt-2.5 inline-flex w-full items-center justify-center gap-1 ${preset.theme.buttonRadius} bg-slate-900 px-3 py-2 text-[11px] sm:text-xs font-bold text-white shadow-sm transition hover:bg-slate-800`}
            >
              <Zap className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span className="truncate">
                {lang === "bn" ? "দ্রুত অর্ডার" : "Quick Order"}
              </span>
            </button>
          </div>
        </article>
      );
    }

    // 3. HORIZONTAL CARD
    if (cardVariant === "horizontal") {
      return (
        <article
          key={product.id}
          className="group flex h-full flex-row items-stretch gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:border-slate-300 hover:shadow-md"
        >
          <button
            type="button"
            onClick={() => handleOpenProductDetail(product)}
            className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:w-32"
          >
            <img
              src={primaryImage}
              alt={product.name[lang]}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            {discountPct && (
              <span className="pointer-events-none absolute left-1.5 top-1.5 rounded bg-amber-500 px-1.5 py-0.5 text-[10px] font-extrabold text-white shadow">
                -{discountPct}%
              </span>
            )}
          </button>

          <div className="flex min-w-0 flex-1 flex-col justify-between text-left">
            <div>
              <div className="flex flex-wrap items-center gap-1.5">
                <span
                  className={`rounded ${preset.theme.primarySoftBg} px-2 py-0.5 text-[10px] font-bold ${preset.theme.primaryText}`}
                >
                  {product.unitLabel}
                </span>
                <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-700">
                  <PackageCheck className="h-3 w-3" />{" "}
                  {lang === "bn" ? "স্টকে আছে" : "In Stock"}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleOpenProductDetail(product)}
                className="mt-1 line-clamp-2 block text-left text-xs sm:text-sm font-extrabold leading-snug text-slate-900 hover:underline"
              >
                {product.name[lang]}
              </button>
            </div>

            <div className="mt-2 border-t border-slate-100 pt-2">
              <div className="flex flex-wrap items-baseline gap-2">
                <span
                  className={`text-sm sm:text-base font-extrabold ${preset.theme.primaryText}`}
                >
                  ৳{product.price.toLocaleString()}
                </span>
                {product.compareAtPrice && (
                  <span className="text-[11px] text-slate-400 line-through">
                    ৳{product.compareAtPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <div className="mt-2 flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className={`inline-flex items-center justify-center gap-1 rounded-lg border ${preset.theme.primaryBorder} ${preset.theme.primarySoftBg} px-2.5 py-1.5 text-[11px] font-bold ${preset.theme.primaryText}`}
                >
                  <ShoppingCart className="h-3 w-3 shrink-0" />
                  <span>{lang === "bn" ? "কার্ট" : "Add"}</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleAddToCart(product, product.variants[0], 1, true)
                  }
                  className={`inline-flex flex-1 items-center justify-center gap-1 rounded-lg ${preset.theme.primaryBg} ${preset.theme.primaryHoverBg} px-2.5 py-1.5 text-[11px] font-bold text-white`}
                >
                  <Zap className="h-3 w-3 shrink-0" />
                  <span>{lang === "bn" ? "অর্ডার" : "Buy"}</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      );
    }

    // 4. OVERLAY LUXURY CARD
    if (cardVariant === "overlay") {
      return (
        <article
          key={product.id}
          className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          <div>
            <button
              type="button"
              onClick={() => handleOpenProductDetail(product)}
              className="relative block aspect-[4/3] w-full overflow-hidden bg-slate-800 text-left"
            >
              <img
                src={primaryImage}
                alt={product.name[lang]}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-900 to-transparent" />
              <div className="pointer-events-none absolute left-2 right-2 top-2 flex items-center justify-between gap-1">
                <span className="rounded-full bg-slate-950/80 px-2 py-0.5 text-[10px] font-bold text-amber-300 backdrop-blur truncate">
                  {product.unitLabel}
                </span>
                {discountPct && (
                  <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-extrabold text-slate-950 shadow shrink-0">
                    -{discountPct}%
                  </span>
                )}
              </div>
            </button>

            <div className="px-3 sm:px-4 pt-2.5 text-left">
              <button
                type="button"
                onClick={() => handleOpenProductDetail(product)}
                className="line-clamp-2 min-h-[2.25rem] block text-left text-xs sm:text-sm font-extrabold leading-snug text-white hover:text-amber-300"
              >
                {product.name[lang]}
              </button>
            </div>
          </div>

          <div className="p-3 sm:p-4 pt-2 text-left">
            <div className="flex flex-wrap items-baseline gap-1.5 border-t border-slate-800 pt-2">
              <span className="text-sm sm:text-base font-extrabold text-amber-400">
                ৳{product.price.toLocaleString()}
              </span>
              {product.compareAtPrice && (
                <span className="text-[11px] text-slate-400 line-through">
                  ৳{product.compareAtPrice.toLocaleString()}
                </span>
              )}
            </div>

            <div className="mt-2.5 grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => handleAddToCart(product)}
                className="inline-flex items-center justify-center gap-1 rounded-xl border border-white bg-white px-2 py-1.5 text-[11px] font-extrabold text-slate-950 hover:bg-slate-100 transition"
              >
                <ShoppingCart className="h-3 w-3 shrink-0" />
                <span className="truncate">
                  {lang === "bn" ? "কার্টে নিন" : "Add"}
                </span>
              </button>
              <button
                type="button"
                onClick={() =>
                  handleAddToCart(product, product.variants[0], 1, true)
                }
                className="inline-flex items-center justify-center gap-1 rounded-xl bg-amber-400 px-2 py-1.5 text-[11px] font-extrabold text-slate-950 hover:bg-amber-300"
              >
                <Sparkles className="h-3 w-3 shrink-0" />
                <span className="truncate">
                  {lang === "bn" ? "অর্ডার" : "Buy"}
                </span>
              </button>
            </div>
          </div>
        </article>
      );
    }

    // 5. COMPACT FLASH-SALE CARD
    if (cardVariant === "compact") {
      return (
        <article
          key={product.id}
          className="group flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm transition hover:border-emerald-600 hover:shadow-md"
        >
          <div>
            <button
              type="button"
              onClick={() => handleOpenProductDetail(product)}
              className="relative block aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-100"
            >
              <img
                src={primaryImage}
                alt={product.name[lang]}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              {discountPct && (
                <span className="pointer-events-none absolute left-1.5 top-1.5 rounded bg-rose-600 px-1.5 py-0.5 text-[10px] font-extrabold text-white">
                  -{discountPct}%
                </span>
              )}
            </button>

            <div className="mt-2 px-0.5 text-left">
              <button
                type="button"
                onClick={() => handleOpenProductDetail(product)}
                className="line-clamp-2 min-h-[2.25rem] block text-left text-xs font-bold leading-snug text-slate-900 hover:underline"
              >
                {product.name[lang]}
              </button>
            </div>
          </div>

          <div className="mt-2 space-y-2 pt-1">
            <div className="flex items-center justify-between rounded-lg bg-emerald-50/90 px-2 py-1">
              <span className="text-xs sm:text-sm font-extrabold text-emerald-800">
                ৳{product.price.toLocaleString()}
              </span>
              {product.compareAtPrice && (
                <span className="text-[10px] text-slate-400 line-through">
                  ৳{product.compareAtPrice.toLocaleString()}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleAddToCart(product)}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-700 bg-white text-emerald-800 hover:bg-emerald-50"
              >
                <ShoppingCart className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  handleAddToCart(product, product.variants[0], 1, true)
                }
                className={`inline-flex h-8 flex-1 items-center justify-center gap-1 rounded-lg ${preset.theme.primaryBg} px-2 text-[11px] font-bold text-white`}
              >
                <Zap className="h-3 w-3 shrink-0" />
                <span className="truncate">
                  {lang === "bn" ? "অর্ডার" : "Buy"}
                </span>
              </button>
            </div>
          </div>
        </article>
      );
    }

    // 1. DEFAULT CLASSIC DUAL-BUTTON CARD
    return (
      <article
        key={product.id}
        className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-3 sm:p-3.5 shadow-sm transition hover:border-emerald-600/40 hover:shadow-md"
      >
        <div>
          <button
            type="button"
            onClick={() => handleOpenProductDetail(product)}
            className="relative block aspect-square w-full overflow-hidden rounded-xl bg-slate-100"
          >
            <img
              src={primaryImage}
              alt={product.name[lang]}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
            {discountPct && (
              <span className="pointer-events-none absolute left-2 top-2 rounded-lg bg-amber-500 px-2 py-0.5 text-[10px] font-extrabold text-white shadow">
                -{discountPct}%
              </span>
            )}
            {product.badge && (
              <span
                className={`pointer-events-none absolute right-2 top-2 rounded-lg ${preset.theme.primaryBg} px-2 py-0.5 text-[10px] font-bold text-white shadow`}
              >
                {product.badge[lang]}
              </span>
            )}
          </button>

          <div className="mt-2.5 space-y-1 text-left">
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-medium text-slate-500">
              <span className="truncate">{product.unitLabel}</span>
              <span className="inline-flex items-center gap-1 text-emerald-700 font-bold shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                <span>{lang === "bn" ? "স্টকে আছে" : "In Stock"}</span>
              </span>
            </div>

            <button
              type="button"
              onClick={() => handleOpenProductDetail(product)}
              className="line-clamp-2 min-h-[2.25rem] block text-left text-xs sm:text-sm font-bold leading-snug text-slate-900 hover:text-emerald-700"
            >
              {product.name[lang]}
            </button>
          </div>
        </div>

        <div className="mt-2.5 pt-2 text-left">
          <div className="flex items-baseline gap-1.5">
            <span
              className={`text-sm sm:text-base font-extrabold ${preset.theme.primaryText}`}
            >
              ৳{product.price.toLocaleString()}
            </span>
            {product.compareAtPrice && (
              <span className="text-[11px] text-slate-400 line-through">
                ৳{product.compareAtPrice.toLocaleString()}
              </span>
            )}
          </div>

          <div className="mt-2.5 grid grid-cols-2 gap-1.5">
            <button
              type="button"
              onClick={() => handleAddToCart(product)}
              className={`inline-flex items-center justify-center gap-1 ${preset.theme.buttonRadius} border ${preset.theme.primaryBorder} ${preset.theme.primarySoftBg} px-2 py-1.5 text-[11px] font-bold ${preset.theme.primaryText} transition hover:opacity-90`}
            >
              <ShoppingCart className="h-3 w-3 shrink-0" />
              <span className="truncate">
                {lang === "bn" ? "কার্টে নিন" : "Add"}
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                handleAddToCart(product, product.variants[0], 1, true)
              }
              className={`inline-flex items-center justify-center gap-1 ${preset.theme.buttonRadius} ${preset.theme.primaryBg} ${preset.theme.primaryHoverBg} px-2 py-1.5 text-[11px] font-bold text-white shadow-sm transition`}
            >
              <Zap className="h-3 w-3 shrink-0" />
              <span className="truncate">
                {lang === "bn" ? "অর্ডার" : "Buy"}
              </span>
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FBF6EC] text-[#241C21] pb-20">
      {/* =====================================================================
       * 1. BANIJJO BRAND-THEMED TOP TEMPLATE SWITCHER BAR
       *    White + Warm Ivory + Royal Burgundy (#650039) + Coral (#FF6633)
       * ===================================================================== */}
      <div className="sticky top-0 z-50 border-b border-[#DAD1C7] bg-white/95 backdrop-blur-md text-[#241C21] shadow-2xs">
        <div className="mx-auto max-w-7xl px-2.5 sm:px-6 h-16 flex items-center justify-between gap-2.5">
          {/* Left: Official Brand Mark + Back Button */}
          <div className="flex items-center gap-2 shrink-0">
            {onBackToMarketing ? (
              <button
                type="button"
                onClick={onBackToMarketing}
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] hover:border-[#650039] hover:bg-[#F6EBF1] px-2.5 sm:px-3.5 py-2 text-xs font-bold text-[#241C21] hover:text-[#650039] transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5 text-[#650039] shrink-0" />
                <span className="hidden sm:inline">
                  {lang === "bn" ? "ফিরে যান" : "Back"}
                </span>
              </button>
            ) : (
              <a
                href="/"
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-[6px] border border-[#DAD1C7] bg-[#FBF6EC] hover:border-[#650039] hover:bg-[#F6EBF1] px-2.5 sm:px-3.5 py-2 text-xs font-bold text-[#241C21] hover:text-[#650039] transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5 text-[#650039] shrink-0" />
                <span className="hidden sm:inline">
                  {lang === "bn" ? "ফিরে যান" : "Back"}
                </span>
              </a>
            )}
            <img
              src="/banijjo-favicon.png"
              alt="Banijjo Studio"
              className="hidden xl:block h-8 w-8 rounded-[6px] border border-[#DAD1C7] bg-white p-0.5 object-contain shrink-0"
            />
          </div>

          {/* Center: Clean 6-Preset Segmented Switcher in Banijjo Ivory & Burgundy */}
          <div className="flex items-center gap-1 bg-[#FBF6EC] p-1 rounded-[8px] border border-[#DAD1C7] overflow-x-auto no-scrollbar">
            {[
              {
                code: "food" as PresetCode,
                icon: Sprout,
                label: { bn: "ফুড", en: "Food" },
                fullLabel: { bn: "ফুড স্টোর", en: "Food Store" },
              },
              {
                code: "fashion" as PresetCode,
                icon: Shirt,
                label: { bn: "ফ্যাশন", en: "Fashion" },
                fullLabel: { bn: "ফ্যাশন স্টোর", en: "Fashion Store" },
              },
              {
                code: "cosmetics" as PresetCode,
                icon: Sparkles,
                label: { bn: "বিউটি", en: "Beauty" },
                fullLabel: {
                  bn: "বিউটি স্টোর",
                  en: "Beauty Store",
                },
              },
              {
                code: "tech" as PresetCode,
                icon: Monitor,
                label: { bn: "আইটি", en: "IT & Tech" },
                fullLabel: {
                  bn: "আইটি ও গ্যাজেট",
                  en: "IT & Gadgets",
                },
              },
              {
                code: "supershop" as PresetCode,
                icon: ShoppingCart,
                label: { bn: "সুপার শপ", en: "Super Shop" },
                fullLabel: {
                  bn: "সুপার শপ",
                  en: "Super Shop",
                },
              },
              {
                code: "electronics" as PresetCode,
                icon: Home,
                label: { bn: "হোম গিয়ার", en: "Appliances" },
                fullLabel: {
                  bn: "হোম অ্যাপ্লায়েন্স",
                  en: "Home & Living",
                },
              },
            ].map((item) => {
              const isActive = presetCode === item.code;
              const PresetIcon = item.icon;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setPresetCode(item.code)}
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-[6px] px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-bold transition-all ${
                    isActive
                      ? "bg-[#650039] text-white shadow-2xs"
                      : "text-[#665C62] hover:text-[#241C21] hover:bg-white"
                  }`}
                >
                  <PresetIcon
                    className={`h-3.5 w-3.5 shrink-0 ${
                      isActive ? "text-[#FF6633]" : "text-[#665C62]"
                    }`}
                  />
                  <span className="sm:hidden">{item.label[lang]}</span>
                  <span className="hidden sm:inline">
                    {item.fullLabel[lang]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Device Toggle + Burgundy Order Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="hidden md:inline-flex rounded-[8px] bg-[#FBF6EC] border border-[#DAD1C7] p-0.5">
              <button
                type="button"
                onClick={() => setViewportMode("desktop")}
                title="Desktop View"
                className={`rounded-[6px] px-2.5 py-1.5 text-xs font-bold transition ${
                  viewportMode === "desktop"
                    ? "bg-[#650039] text-white shadow-2xs"
                    : "text-[#665C62] hover:text-[#241C21]"
                }`}
              >
                <Monitor className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewportMode("mobile")}
                title="Mobile Phone View"
                className={`rounded-[6px] px-2.5 py-1.5 text-xs font-bold transition ${
                  viewportMode === "mobile"
                    ? "bg-[#650039] text-white shadow-2xs"
                    : "text-[#665C62] hover:text-[#241C21]"
                }`}
              >
                <Smartphone className="h-3.5 w-3.5" />
              </button>
            </div>

            <a
              href={buildWhatsAppUrl(
                `Hello Banijjo Studio! I just tested the *${preset.storeName.en} (${presetCode.toUpperCase()} Preset)* live storefront and want to launch my store with this preset!`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-[6px] bg-[#650039] hover:bg-[#4D002B] px-3 sm:px-4 py-2 text-xs font-semibold text-white transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#FF6633] shrink-0" />
              <span className="hidden sm:inline">
                {lang === "bn" ? "এই থিমে স্টোর নিন" : "Start With Theme"}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Toast Notification in Banijjo Brand Theme */}
      {toastMsg && (
        <div className="fixed bottom-16 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-[8px] bg-[#650039] border border-[#4D002B] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-2xl flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[#FF6633] shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* =====================================================================
       * 2. SIMULATED STOREFRONT VIEWPORT CONTAINER (DESKTOP OR 390PX MOBILE)
       * ===================================================================== */}
      <div
        className={`mx-auto transition-all duration-300 ${
          isMobile
            ? "max-w-[412px] my-4 sm:my-6 rounded-[36px] border-[8px] border-[#241C21] shadow-2xl overflow-hidden bg-white relative"
            : "w-full bg-slate-50"
        }`}
      >
        {/* ===================================================================
         * BANIJJO STOREFRONT HEADER
         * =================================================================== */}
        <header
          className={`${
            isMobile ? "sticky top-0" : "sticky top-16"
          } z-30 border-b border-slate-200 bg-white shadow-sm`}
        >
          {/* Store Top Announcement Strip */}
          <div
            className={`${preset.theme.headerBarBg} px-3 sm:px-4 py-1.5 text-center text-[11px] sm:text-xs font-medium text-white`}
          >
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
              <p className="mx-auto sm:mx-0 line-clamp-1">
                {preset.announcement[lang]}
              </p>
              {!isMobile && (
                <div className="hidden items-center gap-4 sm:flex">
                  <button
                    type="button"
                    onClick={() => {
                      if (placedOrder) {
                        setViewMode("order-success");
                      } else {
                        showToast(
                          lang === "bn"
                            ? "অর্ডার ট্র্যাকিং দেখতে যেকোনো একটি পণ্যে ১-স্টেপ ডেমো অর্ডার সম্পন্ন করুন!"
                            : "Place a 1-step demo order to inspect the live 5-stage Order Tracker!"
                        );
                      }
                    }}
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    <Truck className="h-3.5 w-3.5" />
                    <span>
                      {lang === "bn" ? "অর্ডার ট্র্যাক করুন" : "Track Order"}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Store Main Header Row */}
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-4 px-3 sm:px-4 py-2.5 sm:py-3">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              {/* Mobile Hamburger Menu Button (Visible on Mobile Phones & Mobile Preview Mode - Exact match to Banijjo header.tsx) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle category navigation menu"
                className={`${
                  isMobile ? "inline-flex" : "inline-flex lg:hidden"
                } items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 p-2 text-slate-800 shrink-0 shadow-2xs`}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-rose-600" />
                ) : (
                  <MenuIcon className="h-5 w-5" />
                )}
              </button>

              {/* Store Logo & Name */}
              <button
                type="button"
                onClick={() => {
                  setViewMode("home");
                  setSelectedCategorySlug("all");
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-left focus:outline-none min-w-0"
              >
                <img
                  src="/banijjo-favicon.png"
                  alt={preset.storeName[lang]}
                  className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl object-contain border border-slate-200 p-0.5 bg-white shrink-0"
                />
                <div className="min-w-0">
                  <span className="block text-sm sm:text-lg font-extrabold tracking-tight text-slate-900 truncate">
                    {preset.storeName[lang]}
                  </span>
                  {!isMobile && (
                    <span className="hidden text-[11px] text-slate-500 sm:block truncate">
                      {preset.tagline[lang]}
                    </span>
                  )}
                </div>
              </button>
            </div>

            {/* Live Search Box (Desktop Only) */}
            {!isMobile && (
              <div className="hidden flex-1 max-w-xl md:flex">
                <div className="relative flex w-full">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (viewMode !== "home") setViewMode("home");
                    }}
                    placeholder={
                      lang === "bn"
                        ? `${preset.storeName.bn}-এ পণ্য খুঁজুন...`
                        : `Search products in ${preset.storeName.en}...`
                    }
                    className="w-full rounded-l-xl border border-slate-300 bg-slate-50 px-4 py-2 text-sm text-slate-900 focus:border-emerald-600 focus:bg-white focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setViewMode("home");
                      scrollToSection("mod-products");
                    }}
                    className={`inline-flex items-center gap-1.5 rounded-r-xl ${preset.theme.primaryBg} ${preset.theme.primaryHoverBg} px-5 py-2 text-sm font-semibold text-white`}
                  >
                    <Search className="h-4 w-4" />
                    <span>{lang === "bn" ? "খুঁজুন" : "Search"}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Right Actions: Language, Hotline & Cart Trigger */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <div className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50 p-0.5 text-[11px] font-extrabold">
                <button
                  type="button"
                  onClick={() => setLang("bn")}
                  className={`rounded-lg px-2 py-1 transition ${
                    lang === "bn"
                      ? `${preset.theme.primaryBg} text-white`
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  বাংলা
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`rounded-lg px-2 py-1 transition ${
                    lang === "en"
                      ? `${preset.theme.primaryBg} text-white`
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  EN
                </button>
              </div>

              {!isMobile && (
                <div className="hidden items-center gap-2 rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 xl:flex">
                  <PhoneCall className={`h-4 w-4 ${preset.theme.primaryText}`} />
                  <div>
                    <span className="block text-[10px] text-slate-400">
                      {lang === "bn" ? "হটলাইন নম্বর" : "Hotline"}
                    </span>
                    <span>{preset.hotline}</span>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={() => setCartDrawerOpen(true)}
                className={`relative inline-flex items-center gap-1.5 rounded-xl ${preset.theme.primaryBg} ${preset.theme.primaryHoverBg} px-3.5 py-2 text-xs font-extrabold text-white shadow-sm transition`}
              >
                <ShoppingBag className="h-4 w-4 text-white" />
                {!isMobile && (
                  <span className="hidden sm:inline text-white">
                    {lang === "bn" ? "কার্ট দেখুন" : "View Cart"}
                  </span>
                )}
                <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-400 px-1.5 text-[11px] font-extrabold text-slate-950">
                  {totalCartItems}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Quick Category Menu Bar & Search Trigger (Shown on Mobile Devices & Mobile Viewport Mode) */}
          <div
            className={`${
              isMobile ? "flex" : "flex lg:hidden"
            } items-center justify-between gap-2 border-t border-slate-100 bg-slate-50 px-3 py-2`}
          >
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center gap-1.5 rounded-xl ${preset.theme.primaryBg} px-3 py-1.5 text-xs font-extrabold text-white shadow-2xs shrink-0`}
            >
              <MenuIcon className="h-3.5 w-3.5" />
              <span>
                {lang === "bn" ? "সকল ক্যাটাগরি মেনু" : "Categories Menu"}
              </span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>

            <div className="relative flex-1">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (viewMode !== "home") setViewMode("home");
                }}
                placeholder={
                  lang === "bn" ? "পণ্য খুঁজুন..." : "Search products..."
                }
                className="w-full rounded-xl border border-slate-300 bg-white pl-3 pr-8 py-1.5 text-xs text-slate-900 focus:outline-none"
              />
              <Search className="h-3.5 w-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* =================================================================
           * MOBILE NAVIGATION & CATEGORY TREE DRAWER
           * (Exact replica of Banijjo_Studio_SaaS/client/src/components/storefront/header.tsx lines 456-537)
           * ================================================================= */}
          {mobileMenuOpen && (
            <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-2xl max-h-[75vh] overflow-y-auto">
              <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2.5">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider ${preset.theme.primaryText}`}
                >
                  <MenuIcon className="h-3.5 w-3.5" />
                  <span>
                    {lang === "bn"
                      ? "স্টোর নেভিগেশন ও ক্যাটাগরি ট্রি"
                      : "Store Navigation & Category Tree"}
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600"
                >
                  <span>{lang === "bn" ? "বন্ধ করুন" : "Close"}</span>
                  <X className="h-3 w-3" />
                </button>
              </div>

              <div className="flex flex-col space-y-2 text-sm font-medium text-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategorySlug("all");
                    setViewMode("home");
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-left text-xs font-extrabold text-slate-900"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <Home className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{lang === "bn" ? "হোম পেজ" : "Home Page"}</span>
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategorySlug("all");
                    setMobileMenuOpen(false);
                    scrollToSection("mod-products");
                  }}
                  className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-left text-xs font-extrabold text-slate-900"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <ShoppingBag className="h-3.5 w-3.5 text-indigo-600" />
                    <span>
                      {lang === "bn" ? "সকল পণ্য (All Products)" : "All Products"}
                    </span>
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </button>

                {/* Nested Category & Sub-Category Tree */}
                <div className="pt-2">
                  <div className="mb-2 px-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                    {lang === "bn"
                      ? "ক্যাটাগরি ও সাব-ক্যাটাগরি সমূহ"
                      : "Categories & Sub-Categories"}
                  </div>

                  <div className="space-y-2">
                    {preset.categories.map((cat) => {
                      const isExpanded =
                        expandedMobileCatId === cat.id ||
                        expandedMobileCatId === "all";
                      return (
                        <div
                          key={cat.id}
                          className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-2.5"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedCategorySlug(cat.slug);
                                setMobileMenuOpen(false);
                                scrollToSection("mod-products");
                              }}
                              className="flex items-center gap-2.5 text-left flex-1"
                            >
                              <img
                                src={cat.thumbnailUrl}
                                alt={cat.name[lang]}
                                className="h-8 w-8 rounded-full object-cover border border-slate-200 shrink-0"
                              />
                              <div>
                                <div className="text-xs font-extrabold text-slate-900">
                                  {cat.name[lang]}
                                </div>
                                <div className="text-[10px] text-slate-500">
                                  {cat.subCategories.length}{" "}
                                  {lang === "bn"
                                    ? "টি সাব-ক্যাটাগরি"
                                    : "Sub-Categories"}
                                </div>
                              </div>
                            </button>

                            {cat.subCategories.length > 0 && (
                              <button
                                type="button"
                                onClick={() =>
                                  setExpandedMobileCatId(
                                    expandedMobileCatId === cat.id
                                      ? null
                                      : cat.id
                                  )
                                }
                                className="rounded-lg bg-white border border-slate-200 p-1.5 text-slate-600"
                              >
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform ${
                                    isExpanded ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                            )}
                          </div>

                          {/* Indented 1st & 2nd Level Sub-Categories (Exact match to Banijjo header.tsx) */}
                          {isExpanded && cat.subCategories.length > 0 && (
                            <div className="ml-4 mt-2.5 space-y-1.5 border-l-2 border-emerald-200 pl-3 text-xs text-slate-700">
                              {cat.subCategories.map((sub, sIdx) => (
                                <div key={sIdx}>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setSelectedCategorySlug(cat.slug);
                                      setMobileMenuOpen(false);
                                      scrollToSection("mod-products");
                                    }}
                                    className="flex items-center gap-1 w-full py-1 text-left font-bold text-slate-800 hover:text-emerald-700"
                                  >
                                    <CornerDownRight className="h-3 w-3 text-slate-400 shrink-0" />
                                    <span>{sub.name[lang]}</span>
                                  </button>

                                  {sub.children && sub.children.length > 0 && (
                                    <div className="ml-4 space-y-1 text-[11px] text-slate-500">
                                      {sub.children.map((sub2, cIdx) => (
                                        <button
                                          key={cIdx}
                                          type="button"
                                          onClick={() => {
                                            setSelectedCategorySlug(cat.slug);
                                            setMobileMenuOpen(false);
                                            scrollToSection("mod-products");
                                          }}
                                          className="flex items-center gap-1 w-full py-0.5 text-left hover:text-emerald-700"
                                        >
                                          <CornerDownRight className="h-2.5 w-2.5 text-slate-400 shrink-0" />
                                          <span>{sub2[lang]}</span>
                                        </button>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Drawer Quick Links */}
                <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setViewMode("checkout");
                    }}
                    className={`inline-flex items-center justify-center gap-1.5 rounded-xl ${preset.theme.primaryBg} py-2.5 text-center text-xs font-extrabold text-white`}
                  >
                    <Zap className="h-3.5 w-3.5 text-amber-300" />
                    <span>
                      {lang === "bn" ? "১-স্টেপ চেকআউট" : "1-Step Checkout"}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setCartDrawerOpen(true);
                    }}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-center text-xs font-extrabold text-slate-800"
                  >
                    <ShoppingCart className="h-3.5 w-3.5 text-emerald-700" />
                    <span>
                      {lang === "bn" ? "শপিং কার্ট" : "View Cart"} (
                      {totalCartItems})
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Desktop Category Mega-Menu Bar (Hidden on Mobile / Mobile Preview Mode) */}
          {!isMobile && (
            <nav className="hidden lg:block border-t border-slate-200 bg-white">
              <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategorySlug("all");
                    setViewMode("home");
                  }}
                  className={`rounded-lg px-3.5 py-1.5 whitespace-nowrap transition ${
                    selectedCategorySlug === "all" && viewMode === "home"
                      ? `${preset.theme.primaryBg} text-white shadow-2xs`
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                >
                  {lang === "bn" ? "হোম ও সকল পণ্য" : "Home & All Products"}
                </button>

                {preset.categories.map((cat) => {
                  const isActiveCat =
                    selectedCategorySlug === cat.slug && viewMode === "home";
                  return (
                    <div key={cat.id} className="group relative">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCategorySlug(cat.slug);
                          setViewMode("home");
                          scrollToSection("mod-products");
                        }}
                        className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 whitespace-nowrap transition ${
                          isActiveCat
                            ? `${preset.theme.primaryBg} text-white shadow-2xs`
                            : "bg-slate-100/80 hover:bg-slate-200 text-slate-800"
                        }`}
                      >
                        <span>{cat.name[lang]}</span>
                        {cat.subCategories.length > 0 && (
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition duration-200 group-hover:rotate-180 ${
                              isActiveCat ? "text-white" : "text-slate-500"
                            }`}
                          />
                        )}
                      </button>

                    {/* Hover Sub-Category Dropdown */}
                    {cat.subCategories.length > 0 && (
                      <div className="invisible absolute left-0 top-full z-50 mt-1 min-w-64 rounded-2xl border border-slate-200 bg-white p-2.5 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
                        <div
                          className={`mb-1.5 border-b border-slate-100 px-2.5 pb-1.5 text-[10px] font-extrabold uppercase tracking-wider ${preset.theme.primaryText}`}
                        >
                          {cat.name[lang]} —{" "}
                          {lang === "bn" ? "সাব-ক্যাটাগরি" : "Sub-Categories"}
                        </div>
                        <div className="space-y-1">
                          {cat.subCategories.map((sub, sIdx) => (
                            <div key={sIdx}>
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedCategorySlug(cat.slug);
                                  setViewMode("home");
                                  scrollToSection("mod-products");
                                }}
                                className="flex w-full items-center justify-between gap-2 rounded-xl px-2.5 py-1.5 text-left text-xs font-semibold text-slate-800 transition hover:bg-slate-100"
                              >
                                <div className="flex items-center gap-2">
                                  <img
                                    src={cat.thumbnailUrl}
                                    alt={sub.name[lang]}
                                    className="h-5 w-5 rounded-full object-cover"
                                  />
                                  <span>{sub.name[lang]}</span>
                                </div>
                              </button>
                              {sub.children && sub.children.length > 0 && (
                                <div className="ml-6 mt-0.5 space-y-0.5 border-l-2 border-slate-200 pl-2.5">
                                  {sub.children.map((ch, cIdx) => (
                                    <button
                                      key={cIdx}
                                      type="button"
                                      onClick={() => {
                                        setSelectedCategorySlug(cat.slug);
                                        setViewMode("home");
                                        scrollToSection("mod-products");
                                      }}
                                      className="flex items-center gap-1 w-full rounded-lg px-2 py-1 text-left text-[11px] font-medium text-slate-600 hover:bg-slate-100"
                                    >
                                      <CornerDownRight className="h-2.5 w-2.5 text-slate-400 shrink-0" />
                                      <span>{ch[lang]}</span>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    </div>
                  );
                })}

                <button
                  type="button"
                  onClick={() => setViewMode("checkout")}
                  className={`ml-auto inline-flex items-center gap-1.5 rounded-lg border ${preset.theme.primaryBorder} ${preset.theme.primarySoftBg} px-3.5 py-1.5 text-xs font-extrabold whitespace-nowrap ${preset.theme.primaryText}`}
                >
                  <Zap className="h-3.5 w-3.5" />
                  <span>{lang === "bn" ? "১-স্টেপ চেকআউট" : "1-Step Checkout"}</span>
                </button>
              </div>
            </nav>
          )}
        </header>

        {/* ===================================================================
         * VIEW 1: STOREFRONT HOME (ALL BANIJJO BUILDER MODULES LIVE)
         * =================================================================== */}
        {viewMode === "home" && (
          <div className={isMobile ? "space-y-7 pb-10" : "space-y-12 pb-14"}>
            {/* MODULE 1: HERO SLIDER CAROUSEL */}
            <section
              id="mod-hero"
              className={`relative flex w-full items-center overflow-hidden bg-slate-900 ${
                isMobile
                  ? "min-h-[270px]"
                  : "min-h-[300px] sm:min-h-[440px] lg:min-h-[500px]"
              }`}
            >
              <img
                key={activeSlide.imageUrl}
                src={activeSlide.imageUrl}
                alt={activeSlide.title[lang]}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${preset.theme.heroOverlay}`}
              />

              <div
                className={`relative z-10 mx-auto w-full max-w-7xl text-white ${
                  isMobile ? "px-4 py-6" : "px-4 sm:px-6 py-8 sm:py-12"
                }`}
              >
                <div className="max-w-2xl space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-block rounded-full bg-amber-400 px-3 py-0.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow">
                      {activeSlide.badge[lang]}
                    </span>
                    <span className="rounded-full bg-rose-600 px-2.5 py-0.5 text-[10px] sm:text-xs font-extrabold text-white shadow">
                      {activeSlide.discountCallout[lang]}
                    </span>
                  </div>

                  <h1
                    className={`font-extrabold leading-tight drop-shadow ${
                      isMobile
                        ? "text-xl"
                        : "text-2xl sm:text-4xl lg:text-5xl"
                    }`}
                  >
                    {activeSlide.title[lang]}
                  </h1>

                  <p
                    className={`text-slate-100 drop-shadow leading-relaxed ${
                      isMobile
                        ? "text-xs line-clamp-2"
                        : "text-xs sm:text-base lg:text-lg"
                    }`}
                  >
                    {activeSlide.subtitle[lang]}
                  </p>

                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={() => scrollToSection("mod-products")}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-extrabold text-slate-950 shadow-lg transition"
                    >
                      <span>{activeSlide.ctaLabel[lang]}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => scrollToSection("mod-split-banners")}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-white/60 bg-slate-950/65 hover:bg-slate-950/85 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md backdrop-blur transition"
                    >
                      <span>{activeSlide.secondaryCtaLabel[lang]}</span>
                    </button>
                  </div>
                </div>

                {/* Slide Indicators & Controls */}
                <div className="mt-5 sm:mt-8 flex items-center justify-between border-t border-white/20 pt-3">
                  <div className="flex items-center gap-1.5">
                    {preset.heroSlides.map((s, idx) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setHeroSlideIdx(idx)}
                        className={`h-2 rounded-full transition-all ${
                          idx === heroSlideIdx
                            ? "w-7 bg-amber-400"
                            : "w-2 bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={() =>
                        setHeroSlideIdx(
                          (heroSlideIdx - 1 + preset.heroSlides.length) %
                            preset.heroSlides.length
                        )
                      }
                      className="rounded-lg border border-white/25 bg-black/30 p-1.5 backdrop-blur transition hover:bg-black/50"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setHeroSlideIdx(
                          (heroSlideIdx + 1) % preset.heroSlides.length
                        )
                      }
                      className="rounded-lg border border-white/25 bg-black/30 p-1.5 backdrop-blur transition hover:bg-black/50"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* MODULE 2: DELIVERY / SERVICE HIGHLIGHTS */}
            <section id="mod-highlights" className="mx-auto max-w-7xl px-3 sm:px-4">
              <div
                className={`grid gap-2.5 sm:gap-4 ${
                  isMobile
                    ? "grid-cols-2"
                    : "grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {preset.highlights.map((item, idx) => {
                  const icons = [Award, Truck, ShieldCheck, RefreshCw];
                  const IconComp = icons[idx % icons.length];
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 sm:gap-3.5 rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 shadow-sm"
                    >
                      <div
                        className={`flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl ${preset.theme.primarySoftBg} ${preset.theme.primaryText}`}
                      >
                        <IconComp className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                          {item.title[lang]}
                        </h3>
                        <p className="mt-0.5 text-[11px] sm:text-xs text-slate-600 line-clamp-2">
                          {item.desc[lang]}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* MODULE 3: CIRCULAR CATEGORY GRID */}
            <section id="mod-categories" className="mx-auto max-w-7xl px-3 sm:px-4">
              <div className="mb-4 sm:mb-6 flex flex-wrap items-end justify-between gap-2">
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900">
                    {lang === "bn"
                      ? "জনপ্রিয় ক্যাটাগরি সমূহ"
                      : "Shop by Category"}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {lang === "bn"
                      ? "ক্যাটাগরি সিলেক্ট করুন অথবা উপরের মেনু থেকে সাব-ক্যাটাগরি দেখুন"
                      : "Tap a category or open the menu to browse sub-categories"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className={`inline-flex items-center gap-1 rounded-xl ${preset.theme.primarySoftBg} px-3 py-1.5 text-xs font-extrabold ${preset.theme.primaryText}`}
                >
                  <MenuIcon className="h-3.5 w-3.5" />
                  <span>
                    {lang === "bn"
                      ? "মেনুতে সব সাব-ক্যাটাগরি দেখুন"
                      : "All Sub-Categories in Menu"}
                  </span>
                </button>
              </div>

              <div
                className={`grid gap-3 sm:gap-4 ${
                  isMobile ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4"
                }`}
              >
                {preset.categories.map((cat) => {
                  const active = selectedCategorySlug === cat.slug;
                  return (
                    <div key={cat.id} className="group relative">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCategorySlug(
                            active ? "all" : cat.slug
                          );
                          scrollToSection("mod-products");
                        }}
                        className={`flex h-full w-full flex-col items-center justify-center rounded-2xl border-2 p-3.5 sm:p-5 text-center transition ${
                          active
                            ? `${preset.theme.primaryBorder} ${preset.theme.primarySoftBg} shadow-md`
                            : "border-slate-200 bg-white hover:border-slate-300 shadow-sm hover:shadow-md"
                        }`}
                      >
                        <div className="h-14 w-14 sm:h-20 sm:w-20 overflow-hidden rounded-full border-2 border-slate-100 bg-slate-50 shadow-sm">
                          <img
                            src={cat.thumbnailUrl}
                            alt={cat.name[lang]}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          />
                        </div>
                        <span className="mt-2.5 text-xs sm:text-sm font-extrabold text-slate-900 line-clamp-1">
                          {cat.name[lang]}
                        </span>
                        <span
                          className={`mt-1 inline-flex items-center gap-0.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                            active
                              ? `${preset.theme.primaryBg} text-white`
                              : `${preset.theme.primarySoftBg} ${preset.theme.primaryText}`
                          }`}
                        >
                          <span>
                            {active
                              ? lang === "bn"
                                ? "নির্বাচিত ক্যাটাগরি"
                                : "Selected"
                              : `${cat.subCategories.length}${
                                  lang === "bn" ? "টি সাব-ক্যাটাগরি" : " Sub-Cats"
                                }`}
                          </span>
                          {!active && <ChevronDown className="h-3 w-3" />}
                        </span>
                      </button>

                      {/* Desktop Hover Sub-Categories Popover */}
                      {!isMobile && cat.subCategories.length > 0 && (
                        <div className="hidden lg:block invisible absolute left-1/2 top-full z-40 mt-1.5 w-64 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-2xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
                          <div
                            className={`mb-1.5 border-b border-slate-100 pb-1 text-left text-[10px] font-extrabold uppercase tracking-wider ${preset.theme.primaryText}`}
                          >
                            {cat.name[lang]} —{" "}
                            {lang === "bn" ? "সাব-ক্যাটাগরি" : "Sub-Categories"}
                          </div>
                          <div className="space-y-1 text-left">
                            {cat.subCategories.map((sub, sIdx) => (
                              <div key={sIdx}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedCategorySlug(cat.slug);
                                    scrollToSection("mod-products");
                                  }}
                                  className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                                >
                                  <span
                                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${preset.theme.primarySoftBg} text-[9px] font-bold ${preset.theme.primaryText}`}
                                  >
                                    {sub.name[lang].slice(0, 1)}
                                  </span>
                                  <span>{sub.name[lang]}</span>
                                </button>
                                {sub.children && sub.children.length > 0 && (
                                  <div className="ml-5 mt-0.5 space-y-0.5 border-l-2 border-slate-100 pl-2">
                                    {sub.children.map((ch, cIdx) => (
                                      <button
                                        key={cIdx}
                                        type="button"
                                        onClick={() => {
                                          setSelectedCategorySlug(cat.slug);
                                          scrollToSection("mod-products");
                                        }}
                                        className="flex items-center gap-1 w-full rounded-md px-2 py-1 text-left text-[11px] font-medium text-slate-600 hover:bg-slate-50"
                                      >
                                        <CornerDownRight className="h-2.5 w-2.5 text-slate-400 shrink-0" />
                                        <span>{ch[lang]}</span>
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* MODULE 4: DUAL RELATED PROMOTIONAL CAMPAIGN BANNERS */}
            <section
              id="mod-split-banners"
              className="mx-auto max-w-7xl px-3 sm:px-4"
            >
              <div
                className={`grid gap-4 ${
                  isMobile ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"
                }`}
              >
                {preset.splitPromoBanners.map((banner) => (
                  <div
                    key={banner.id}
                    className="group relative flex min-h-[200px] sm:min-h-[250px] flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8 text-white shadow-lg"
                  >
                    <img
                      src={banner.imageUrl}
                      alt={banner.title[lang]}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />

                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <span className="rounded-full bg-amber-400 px-3 py-0.5 text-[10px] sm:text-[11px] font-extrabold text-slate-950 shadow">
                        {banner.badge[lang]}
                      </span>
                      <span className="rounded-full bg-rose-600 px-2.5 py-0.5 text-[11px] font-extrabold text-white shadow">
                        {banner.discountText[lang]}
                      </span>
                    </div>

                    <div className="relative z-10 mt-3 max-w-md space-y-2">
                      <h3 className="text-lg sm:text-2xl font-extrabold leading-snug drop-shadow">
                        {banner.title[lang]}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed line-clamp-2">
                        {banner.subtitle[lang]}
                      </p>
                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={() => {
                            if (banner.categoryFilterSlug) {
                              setSelectedCategorySlug(
                                banner.categoryFilterSlug
                              );
                            }
                            scrollToSection("mod-products");
                          }}
                          className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-extrabold text-slate-950 shadow transition hover:bg-amber-300"
                        >
                          <span>{banner.ctaLabel[lang]}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* MODULE 5: SMART PERSONALIZED PRODUCT GRID */}
            <section id="mod-products" className="mx-auto max-w-7xl px-3 sm:px-4">
              {/* Mobile-Friendly Horizontal Scrollable Filter & Card Style Bar */}
              <div className="mb-5 space-y-2.5 rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 shadow-sm">
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                  {[
                    {
                      id: "ALL" as SmartSourceMode,
                      icon: Star,
                      label: { bn: "সব পণ্য", en: "All" },
                    },
                    {
                      id: "JUST_FOR_YOU" as SmartSourceMode,
                      icon: Sparkles,
                      label: { bn: "Just For You", en: "Just For You" },
                    },
                    {
                      id: "BEST_SELLING" as SmartSourceMode,
                      icon: Flame,
                      label: { bn: "বেস্ট সেলিং", en: "Best Selling" },
                    },
                    {
                      id: "LOCATION_TRENDING" as SmartSourceMode,
                      icon: MapPin,
                      label: { bn: "এলাকায় জনপ্রিয়", en: "Area Trending" },
                    },
                  ].map((tab) => {
                    const active = smartSource === tab.id;
                    const TabIcon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setSmartSource(tab.id)}
                        className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-extrabold transition shrink-0 ${
                          active
                            ? "bg-amber-400 text-slate-950 shadow-sm"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        <TabIcon className="h-3.5 w-3.5 shrink-0" />
                        <span>{tab.label[lang]}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar border-t border-slate-100 pt-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-slate-500 shrink-0 mr-1">
                    <SlidersHorizontal className="h-3 w-3 text-slate-400" />
                    <span>{lang === "bn" ? "কার্ড ডিজাইন:" : "Card Style:"}</span>
                  </span>
                  {PRODUCT_CARD_VARIANT_OPTIONS.map((opt) => {
                    const active = cardVariant === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setCardVariant(opt.id)}
                        className={`whitespace-nowrap rounded-lg px-2.5 py-1 text-[11px] font-bold transition shrink-0 ${
                          active
                            ? `${preset.theme.primaryBg} text-white shadow-sm`
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {opt.label[lang]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Section Heading */}
              <div className="mb-4 sm:mb-6 flex flex-wrap items-end justify-between gap-2">
                <div>
                  {smartSource === "JUST_FOR_YOU" && (
                    <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-800">
                      <Sparkles className="h-3 w-3 text-amber-500" />
                      <span>
                        {lang === "bn"
                          ? "আপনার পছন্দ ও লোকেশন অনুযায়ী বাছাইকৃত"
                          : "Personalized for you"}
                      </span>
                    </span>
                  )}
                  {smartSource === "LOCATION_TRENDING" && (
                    <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-extrabold text-amber-900">
                      <MapPin className="h-3 w-3 text-amber-600" />
                      <span>
                        {lang === "bn"
                          ? "আপনার এলাকায় সর্বাধিক অর্ডারকৃত"
                          : "Trending in your area"}
                      </span>
                    </span>
                  )}
                  {smartSource === "BEST_SELLING" && (
                    <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-0.5 text-[10px] font-extrabold text-rose-800">
                      <Flame className="h-3 w-3 text-rose-600" />
                      <span>
                        {lang === "bn"
                          ? "সর্বাধিক বিক্রিত পণ্য"
                          : "Top-Selling Favorites"}
                      </span>
                    </span>
                  )}
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900">
                    {lang === "bn"
                      ? "সেরা বিক্রিত ও জনপ্রিয় পণ্য"
                      : "Featured & Best-Selling Products"}
                  </h2>
                </div>

                {selectedCategorySlug !== "all" && (
                  <button
                    type="button"
                    onClick={() => setSelectedCategorySlug("all")}
                    className={`inline-flex items-center gap-1.5 rounded-xl ${preset.theme.primaryBg} px-3.5 py-1.5 text-xs font-bold text-white shadow-2xs`}
                  >
                    <span>
                      {
                        preset.categories.find(
                          (c) => c.slug === selectedCategorySlug
                        )?.name[lang]
                      }
                    </span>
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* Product Grid (2 columns on mobile just like real Bangladeshi mobile e-commerce apps!) */}
              <div
                className={`grid gap-3 sm:gap-5 ${
                  cardVariant === "horizontal"
                    ? isMobile
                      ? "grid-cols-1"
                      : "grid-cols-1 md:grid-cols-2"
                    : isMobile
                    ? "grid-cols-2"
                    : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                }`}
              >
                {filteredProducts.map((product) => renderProductCard(product))}
              </div>
            </section>

            {/* MODULE 6: FULL-SCREEN PROMOTIONAL OFFER BANNER WITH COUPON */}
            <section
              id="mod-full-banner"
              className={`relative flex w-full items-center overflow-hidden ${
                isMobile ? "min-h-[230px]" : "min-h-[260px] sm:min-h-[340px]"
              }`}
            >
              <img
                src={preset.fullWidthOfferBanner.imageUrl}
                alt={preset.fullWidthOfferBanner.title[lang]}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />

              <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 py-8 text-white">
                <span className="mb-2 inline-block rounded-full bg-amber-400 px-3 py-0.5 text-[10px] sm:text-xs font-extrabold text-slate-950 shadow">
                  {preset.fullWidthOfferBanner.badge[lang]}
                </span>
                <h2
                  className={`max-w-2xl font-extrabold drop-shadow leading-tight ${
                    isMobile ? "text-lg" : "text-xl sm:text-4xl"
                  }`}
                >
                  {preset.fullWidthOfferBanner.title[lang]}
                </h2>
                <p className="mt-1.5 max-w-2xl text-xs sm:text-base text-slate-200 drop-shadow">
                  {preset.fullWidthOfferBanner.subtitle[lang]}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      handleCopyCoupon(
                        preset.fullWidthOfferBanner.couponCode || "WELCOME10"
                      );
                      setViewMode("checkout");
                    }}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-slate-950 shadow-lg transition"
                  >
                    <span>{preset.fullWidthOfferBanner.ctaLabel[lang]}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  {preset.fullWidthOfferBanner.couponCode && (
                    <button
                      type="button"
                      onClick={() =>
                        handleCopyCoupon(
                          preset.fullWidthOfferBanner.couponCode!
                        )
                      }
                      className="inline-flex items-center gap-1.5 rounded-xl border border-dashed border-amber-400/80 bg-white/10 hover:bg-white/20 px-3.5 py-2 text-xs font-extrabold text-amber-300 backdrop-blur transition"
                    >
                      <Copy className="h-3.5 w-3.5" />
                      <span>
                        {copiedCoupon
                          ? lang === "bn"
                            ? "কুপন অ্যাপ্লাইড!"
                            : "Applied!"
                          : preset.fullWidthOfferBanner.discountText[lang]}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </section>

            {/* MODULE 7: IMAGE WITH TEXT / BRAND STORY MODULE */}
            <section id="mod-story" className="mx-auto max-w-7xl px-3 sm:px-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-10 shadow-sm">
                <div
                  className={`grid items-center gap-6 ${
                    isMobile ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-12"
                  }`}
                >
                  <div className={isMobile ? "" : "lg:col-span-6"}>
                    <div className="relative overflow-hidden rounded-2xl shadow-md">
                      <img
                        src={preset.brandStory.imageUrl}
                        alt={preset.brandStory.title[lang]}
                        className={`w-full object-cover ${
                          isMobile ? "h-56" : "h-64 sm:h-96"
                        }`}
                      />
                      <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2 rounded-xl bg-slate-950/85 p-2.5 text-center text-white backdrop-blur">
                        {preset.brandStory.stats.map((st) => (
                          <div key={st.value}>
                            <div className="text-xs sm:text-lg font-black text-amber-400">
                              {st.value}
                            </div>
                            <div className="text-[9px] sm:text-[10px] text-slate-300">
                              {st.label[lang]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`space-y-3.5 ${isMobile ? "" : "lg:col-span-6"}`}
                  >
                    <span
                      className={`inline-block rounded-full ${preset.theme.primarySoftBg} px-3 py-1 text-xs font-extrabold ${preset.theme.primaryText}`}
                    >
                      {preset.brandStory.badge[lang]}
                    </span>
                    <h2
                      className={`font-extrabold text-slate-900 leading-tight ${
                        isMobile ? "text-xl" : "text-2xl sm:text-3xl"
                      }`}
                    >
                      {preset.brandStory.title[lang]}
                    </h2>
                    <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
                      {preset.brandStory.subtitle[lang]}
                    </p>

                    <ul className="space-y-2 pt-1">
                      {preset.brandStory.points.map((pt, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-800"
                        >
                          <CheckCircle2
                            className={`h-4 w-4 shrink-0 mt-0.5 ${preset.theme.primaryText}`}
                          />
                          <span>{pt[lang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* MODULE 8: CUSTOMER TESTIMONIALS WITH PHOTOS & 5-STAR RATINGS */}
            <section id="mod-reviews" className="mx-auto max-w-7xl px-3 sm:px-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-10 shadow-sm">
                <div className="mb-6 text-center">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full ${preset.theme.primarySoftBg} px-3.5 py-1 text-xs font-extrabold ${preset.theme.primaryText}`}
                  >
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
                    <span>
                      {lang === "bn"
                        ? "৪.৯/৫ ভেরিফায়েড কাস্টমার রেটিং"
                        : "4.9/5 Verified Customer Rating"}
                    </span>
                  </span>
                  <h2 className="mt-2 text-xl sm:text-3xl font-extrabold text-slate-900">
                    {lang === "bn"
                      ? "সম্মানিত গ্রাহকদের মতামত"
                      : "Verified Buyer Reviews"}
                  </h2>
                </div>

                <div
                  className={`grid gap-4 ${
                    isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"
                  }`}
                >
                  {preset.testimonials.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 text-slate-900 shadow-sm"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-amber-400">
                            {Array.from({ length: item.rating }).map(
                              (_, sIdx) => (
                                <Star
                                  key={sIdx}
                                  className="h-4 w-4 fill-amber-400 text-amber-400"
                                />
                              )
                            )}
                          </div>
                          <Quote className="h-5 w-5 text-slate-200" />
                        </div>

                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-700">
                          “{item.comment[lang]}”
                        </p>

                        <div className="mt-2.5 inline-flex items-center gap-1 rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-[10px] font-bold text-slate-600">
                          <ShoppingBag className="h-3 w-3 text-emerald-600" />
                          <span>{item.productBought[lang]}</span>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-3 border-t border-slate-200/80 pt-3.5">
                        <img
                          src={item.avatarUrl}
                          alt={item.name[lang]}
                          className="h-10 w-10 rounded-full border-2 border-emerald-600 object-cover shadow-sm"
                        />
                        <div>
                          <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">
                            {item.name[lang]}
                          </h3>
                          <p
                            className={`text-[11px] font-semibold ${preset.theme.primaryText}`}
                          >
                            {item.role[lang]}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* MODULE 9: STOREFRONT FAQ & NEWSLETTER */}
            <section className="mx-auto max-w-7xl px-3 sm:px-4 space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm">
                <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 mb-4">
                  {lang === "bn"
                    ? "সাধারণ জিজ্ঞাসিত প্রশ্ন (FAQ)"
                    : "Storefront FAQ"}
                </h2>
                <div
                  className={`grid gap-3.5 ${
                    isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
                  }`}
                >
                  {preset.storeFaqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {faq.q[lang]}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                        {faq.a[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`rounded-3xl ${preset.theme.headerBarBg} px-5 py-8 text-center text-white shadow-lg`}
              >
                <div className="mx-auto max-w-xl">
                  <h2 className="text-lg sm:text-2xl font-extrabold">
                    {lang === "bn"
                      ? "নিউজলেটার সাবস্ক্রাইব করুন"
                      : "Subscribe to Our Store Newsletter"}
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-slate-200">
                    {lang === "bn"
                      ? "নতুন পণ্য ও বিশেষ ছাড়ের আপডেট সবার আগে পান"
                      : "Get early access to new arrivals and seasonal offers"}
                  </p>
                  {newsletterSubscribed ? (
                    <p className="mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-amber-300">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>
                        {lang === "bn"
                          ? "ধন্যবাদ! আপনার সাবস্ক্রিপশন সম্পন্ন হয়েছে।"
                          : "Thank you! You are now subscribed."}
                      </span>
                    </p>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (newsletterEmail.trim()) {
                          setNewsletterSubscribed(true);
                          setNewsletterEmail("");
                        }
                      }}
                      className="mt-4 flex flex-col sm:flex-row gap-2"
                    >
                      <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder={
                          lang === "bn"
                            ? "আপনার ইমেইল লিখুন..."
                            : "Enter your email address..."
                        }
                        className="flex-1 rounded-xl border border-white/20 bg-white px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="rounded-xl bg-amber-400 hover:bg-amber-300 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-slate-950 transition"
                      >
                        {lang === "bn" ? "যুক্ত হোন" : "Subscribe"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ===================================================================
         * VIEW 2: PRODUCT DETAIL VIEW (MOBILE & DESKTOP OPTIMIZED)
         * =================================================================== */}
        {viewMode === "product" && activeProduct && (
          <div className="mx-auto max-w-6xl px-3 sm:px-4 py-6">
            <button
              type="button"
              onClick={() => setViewMode("home")}
              className="mb-4 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>
                {lang === "bn"
                  ? "স্টোরের সকল পণ্যে ফিরে যান"
                  : "Back to Storefront"}
              </span>
            </button>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 shadow-lg">
              <div
                className={`grid gap-6 ${
                  isMobile ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-12"
                }`}
              >
                {/* Left: 3-Image Gallery */}
                <div
                  className={`space-y-3 ${isMobile ? "" : "lg:col-span-6"}`}
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <img
                      src={
                        activeProduct.images[activeImageIdx] ||
                        activeProduct.images[0]
                      }
                      alt={activeProduct.name[lang]}
                      className="h-full w-full object-cover"
                    />
                    {activeProduct.badge && (
                      <span
                        className={`absolute left-3 top-3 rounded-lg ${preset.theme.primaryBg} px-3 py-1 text-xs font-extrabold text-white shadow`}
                      >
                        {activeProduct.badge[lang]}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    {activeProduct.images.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIdx(idx)}
                        className={`aspect-square overflow-hidden rounded-xl border-2 transition ${
                          activeImageIdx === idx
                            ? preset.theme.primaryBorder
                            : "border-slate-200 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${activeProduct.name[lang]} ${idx + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Product Info, Variant Selector, Quantity, Buy Actions */}
                <div
                  className={`flex flex-col justify-between space-y-5 ${
                    isMobile ? "" : "lg:col-span-6"
                  }`}
                >
                  <div className="space-y-3.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span
                        className={`rounded-full ${preset.theme.primarySoftBg} px-3 py-1 font-bold ${preset.theme.primaryText}`}
                      >
                        {activeProduct.categoryName[lang]}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 font-bold text-emerald-800">
                        <Check className="h-3.5 w-3.5" />
                        <span>{lang === "bn" ? "স্টকে আছে" : "In Stock"}</span>
                      </span>
                    </div>

                    <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                      {activeProduct.name[lang]}
                    </h1>

                    <div className="flex items-baseline gap-3">
                      <span
                        className={`text-2xl sm:text-3xl font-black ${preset.theme.primaryText}`}
                      >
                        ৳
                        {(
                          selectedVariant?.price || activeProduct.price
                        ).toLocaleString()}
                      </span>
                      {(selectedVariant?.compareAtPrice ||
                        activeProduct.compareAtPrice) && (
                        <span className="text-sm sm:text-base text-slate-400 line-through">
                          ৳
                          {(
                            selectedVariant?.compareAtPrice ||
                            activeProduct.compareAtPrice
                          )?.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {activeProduct.description[lang]}
                    </p>

                    {/* Variant Selector */}
                    {activeProduct.variants.length > 0 && (
                      <div className="space-y-2 pt-1">
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700">
                          {lang === "bn"
                            ? "ভ্যারিয়েন্ট / সাইজ সিলেক্ট করুন:"
                            : "Select Variant / Pack Size:"}
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {activeProduct.variants.map((v) => {
                            const isSelected = selectedVariant?.id === v.id;
                            return (
                              <button
                                key={v.id}
                                type="button"
                                onClick={() => setSelectedVariant(v)}
                                className={`rounded-xl border px-3.5 py-2 text-xs font-extrabold transition ${
                                  isSelected
                                    ? `${preset.theme.primaryBorder} ${preset.theme.primaryBg} text-white shadow`
                                    : "border-slate-200 bg-slate-50 text-slate-800"
                                }`}
                              >
                                {v.title} — ৳{v.price.toLocaleString()}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Quantity + Add to Cart / Buy Now */}
                    <div className="pt-3 space-y-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="inline-flex items-center rounded-xl border border-slate-300 bg-slate-50">
                          <button
                            type="button"
                            onClick={() =>
                              setDetailQty((q) => Math.max(1, q - 1))
                            }
                            className="p-2.5 text-slate-700 hover:bg-slate-200 rounded-l-xl"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 text-sm font-extrabold text-slate-900">
                            {detailQty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setDetailQty((q) => q + 1)}
                            className="p-2.5 text-slate-700 hover:bg-slate-200 rounded-r-xl"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            handleAddToCart(
                              activeProduct,
                              selectedVariant || activeProduct.variants[0],
                              detailQty,
                              false
                            )
                          }
                          className={`flex-1 inline-flex items-center justify-center gap-2 rounded-xl border-2 ${preset.theme.primaryBorder} ${preset.theme.primarySoftBg} px-4 py-2.5 text-xs sm:text-sm font-extrabold ${preset.theme.primaryText}`}
                        >
                          <ShoppingCart className="h-4 w-4" />
                          <span>
                            {lang === "bn" ? "কার্টে যোগ করুন" : "Add to Cart"}
                          </span>
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          handleAddToCart(
                            activeProduct,
                            selectedVariant || activeProduct.variants[0],
                            detailQty,
                            true
                          )
                        }
                        className={`w-full inline-flex items-center justify-center gap-2 rounded-xl ${preset.theme.primaryBg} ${preset.theme.primaryHoverBg} px-5 py-3.5 text-xs sm:text-base font-extrabold text-white shadow-lg`}
                      >
                        <Zap className="h-4 w-4 text-amber-300" />
                        <span>
                          {lang === "bn"
                            ? "ক্যাশ অন ডেলিভারিতে অর্ডার করুন (১-স্টেপ)"
                            : "Buy Now — 1-Step Cash on Delivery"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================
         * VIEW 3: 1-STEP GUEST COD & SSLCOMMERZ CHECKOUT
         * =================================================================== */}
        {viewMode === "checkout" && (
          <div className="mx-auto max-w-6xl px-3 sm:px-4 py-6">
            <button
              type="button"
              onClick={() => setViewMode("home")}
              className="mb-4 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>
                {lang === "bn" ? "স্টোরে ফিরে যান" : "Continue Shopping"}
              </span>
            </button>

            <div
              className={`grid gap-6 ${
                isMobile ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-12"
              }`}
            >
              {/* Shipping & Payment Form */}
              <form
                onSubmit={handlePlaceOrder}
                className={`rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-lg space-y-5 ${
                  isMobile ? "" : "lg:col-span-7"
                }`}
              >
                <div className="border-b border-slate-100 pb-3.5">
                  <span
                    className={`inline-block rounded-full ${preset.theme.primarySoftBg} px-3 py-1 text-xs font-extrabold ${preset.theme.primaryText}`}
                  >
                    {lang === "bn"
                      ? "লগইন ছাড়াই ১-স্টেপ অর্ডার"
                      : "Zero-Friction Guest Checkout"}
                  </span>
                  <h2 className="mt-1.5 text-xl sm:text-2xl font-extrabold text-slate-900">
                    {lang === "bn"
                      ? "ক্যাশ অন ডেলিভারি চেকআউট"
                      : "1-Step Cash on Delivery"}
                  </h2>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {lang === "bn" ? "আপনার সম্পূর্ণ নাম *" : "Full Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder={
                        lang === "bn"
                          ? "যেমন: তানভীর আহমেদ"
                          : "e.g., Tanvir Ahmed"
                      }
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {lang === "bn"
                        ? "মোবাইল নাম্বার (১১ ডিজিট) *"
                        : "Mobile Number *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="017XXXXXXXX"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {lang === "bn"
                        ? "ডেলিভারি এরিয়া নির্বাচন করুন *"
                        : "Select Delivery Zone *"}
                    </label>
                    <div className="space-y-2">
                      {DELIVERY_ZONES.map((z) => {
                        const active = selectedZoneId === z.id;
                        return (
                          <label
                            key={z.id}
                            onClick={() => setSelectedZoneId(z.id)}
                            className={`flex items-center justify-between rounded-xl border p-3 cursor-pointer transition ${
                              active
                                ? `${preset.theme.primaryBorder} ${preset.theme.primarySoftBg}`
                                : "border-slate-200 bg-white"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="deliveryZone"
                                checked={active}
                                onChange={() => setSelectedZoneId(z.id)}
                                className="h-4 w-4 accent-emerald-600"
                              />
                              <span className="text-xs font-bold text-slate-900">
                                {z.name[lang]}
                              </span>
                            </div>
                            <span className="text-xs font-extrabold text-slate-900">
                              {isFreeShipping ? (
                                <span className="text-emerald-600">FREE</span>
                              ) : (
                                `৳${z.fee}`
                              )}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {lang === "bn"
                        ? "বিস্তারিত ডেলিভারি ঠিকানা *"
                        : "Full Delivery Address *"}
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder={
                        lang === "bn"
                          ? "বাসা নং, রোড নং, এলাকা ও থানা..."
                          : "House, Road, Area, Thana..."
                      }
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2 text-sm text-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("COD")}
                      className={`flex items-center gap-2 rounded-xl border p-3 text-left transition ${
                        paymentMethod === "COD"
                          ? `${preset.theme.primaryBorder} ${preset.theme.primarySoftBg}`
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <Truck
                        className={`h-4 w-4 shrink-0 ${preset.theme.primaryText}`}
                      />
                      <span className="text-xs font-extrabold text-slate-900">
                        {lang === "bn" ? "ক্যাশ অন ডেলিভারি" : "Cash on Delivery"}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("SSLCOMMERZ")}
                      className={`flex items-center gap-2 rounded-xl border p-3 text-left transition ${
                        paymentMethod === "SSLCOMMERZ"
                          ? `${preset.theme.primaryBorder} ${preset.theme.primarySoftBg}`
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <CreditCard className="h-4 w-4 shrink-0 text-indigo-600" />
                      <span className="text-xs font-extrabold text-slate-900">
                        bKash / Nagad
                      </span>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-2xl ${preset.theme.primaryBg} ${preset.theme.primaryHoverBg} px-5 py-3.5 text-sm font-extrabold text-white shadow-xl transition`}
                >
                  <CheckCircle2 className="h-5 w-5" />
                  <span>
                    {lang === "bn"
                      ? `অর্ডার কনফার্ম করুন — ৳${grandTotal.toLocaleString()}`
                      : `Confirm Order — ৳${grandTotal.toLocaleString()}`}
                  </span>
                </button>
              </form>

              {/* Order Summary & Coupon Engine */}
              <div
                className={`space-y-4 ${isMobile ? "" : "lg:col-span-5"}`}
              >
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg space-y-4">
                  <h3 className="text-base font-extrabold text-slate-900">
                    {lang === "bn" ? "আপনার অর্ডার সামারি" : "Order Summary"}
                  </h3>

                  <div className="divide-y divide-slate-100 max-h-60 overflow-y-auto pr-1">
                    {cart.map((item) => (
                      <div
                        key={`${item.product.id}-${item.variant.id}`}
                        className="flex items-center justify-between gap-2.5 py-2.5"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name[lang]}
                            className="h-12 w-12 rounded-xl object-cover border border-slate-200 shrink-0"
                          />
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-slate-900 truncate">
                              {item.product.name[lang]}
                            </h4>
                            <p className="text-[11px] text-slate-500">
                              {item.variant.title} × {item.quantity}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-extrabold text-slate-900 shrink-0">
                          ৳
                          {(
                            item.variant.price * item.quantity
                          ).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Coupon Box */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 mb-1.5">
                      <span className="inline-flex items-center gap-1">
                        <Tag className="h-3 w-3 text-emerald-600" />
                        {lang === "bn"
                          ? "প্রোমো কোড: WELCOME10"
                          : "Promo: WELCOME10"}
                      </span>
                      {appliedCoupon && (
                        <span className="inline-flex items-center gap-0.5 text-emerald-700 font-extrabold">
                          <Check className="h-3 w-3" />
                          <span>-10%</span>
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        placeholder="WELCOME10"
                        className="flex-1 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold uppercase text-slate-900"
                      />
                      <button
                        type="button"
                        onClick={handleApplyCoupon}
                        className="rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-extrabold text-white"
                      >
                        {lang === "bn" ? "অ্যাপ্লাই" : "Apply"}
                      </button>
                    </div>
                  </div>

                  {/* Totals */}
                  <div className="space-y-1.5 border-t border-slate-200 pt-3 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>{lang === "bn" ? "সাবটোটাল" : "Subtotal"}</span>
                      <span className="font-bold text-slate-900">
                        ৳{subtotal.toLocaleString()}
                      </span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-700 font-bold">
                        <span>
                          {lang === "bn"
                            ? "কুপন ডিসকাউন্ট (10%)"
                            : "Discount (10%)"}
                        </span>
                        <span>-৳{discountAmount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-slate-600">
                      <span>
                        {lang === "bn" ? "ডেলিভারি চার্জ" : "Shipping Fee"}
                      </span>
                      <span className="font-bold text-slate-900">
                        {shippingFee === 0 ? "FREE" : `৳${shippingFee}`}
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-2.5 text-sm font-black text-slate-900">
                      <span>{lang === "bn" ? "সর্বমোট" : "Grand Total"}</span>
                      <span className={preset.theme.primaryText}>
                        ৳{grandTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================
         * VIEW 4: ORDER CONFIRMATION & LIVE 5-STAGE ORDER TRACKING
         * =================================================================== */}
        {viewMode === "order-success" && placedOrder && (
          <div className="mx-auto max-w-4xl px-3 sm:px-4 py-8">
            <div className="rounded-3xl border-2 border-emerald-500 bg-white p-5 sm:p-10 shadow-xl space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-800">
                      {lang === "bn"
                        ? "অর্ডার সফলভাবে সম্পন্ন!"
                        : "Demo Order Confirmed!"}
                    </span>
                    <h2 className="text-xl font-black text-slate-900 mt-1">
                      Order #{placedOrder.orderNumber}
                    </h2>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xl font-black text-emerald-700">
                    ৳{placedOrder.grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-emerald-600" />
                  <span>
                    {lang === "bn"
                      ? "লাইভ অর্ডার ট্র্যাকিং পাইপলাইন (৫ ধাপ)"
                      : "Live 5-Stage Order Tracking"}
                  </span>
                </h3>
                <div
                  className={`grid gap-2 ${
                    isMobile ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-5"
                  }`}
                >
                  {[
                    {
                      stage: "1. PENDING",
                      label: lang === "bn" ? "অর্ডার গৃহীত" : "Order Placed",
                      done: true,
                    },
                    {
                      stage: "2. CONFIRMED",
                      label:
                        lang === "bn" ? "স্টক রিজার্ভড" : "Stock Reserved",
                      done: true,
                    },
                    {
                      stage: "3. PACKAGING",
                      label:
                        lang === "bn" ? "প্যাকেজিং চলছে" : "In Packaging",
                      done: false,
                    },
                    {
                      stage: "4. SHIPPED",
                      label:
                        lang === "bn" ? "কুরিয়ারে পাঠানো" : "Shipped",
                      done: false,
                    },
                    {
                      stage: "5. DELIVERED",
                      label: lang === "bn" ? "ডেলিভারি সম্পন্ন" : "Delivered",
                      done: false,
                    },
                  ].map((st) => (
                    <div
                      key={st.stage}
                      className={`rounded-xl border p-2.5 text-center ${
                        st.done
                          ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                          : "border-slate-200 bg-slate-50 text-slate-400"
                      }`}
                    >
                      <div className="text-[10px] font-black">{st.stage}</div>
                      <div className="text-xs font-bold mt-0.5">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#650039] p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-extrabold">
                    {lang === "bn"
                      ? `আপনার ব্র্যান্ডের জন্য "${preset.storeName.bn}" স্টোরটি চালু করতে চান?`
                      : `Want this "${preset.storeName.en}" store for your brand?`}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={buildWhatsAppUrl(
                      `Hello Banijjo Studio! I just tested the 1-Step Checkout on the *${preset.storeName.en} (${presetCode.toUpperCase()} Preset)* and want to order this Banijjo store!`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-[8px] bg-[#FF6633] px-4 py-2.5 text-xs font-extrabold text-[#241C21]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>
                      {lang === "bn"
                        ? "WhatsApp-এ অর্ডার করুন"
                        : "Order on WhatsApp"}
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setViewMode("home")}
                    className="rounded-[8px] border border-white/30 bg-white/15 px-3.5 py-2.5 text-xs font-bold text-white"
                  >
                    {lang === "bn" ? "স্টোরে ফিরুন" : "Back to Store"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================
         * BANIJJO STOREFRONT FOOTER
         * =================================================================== */}
        <footer className="mt-8 border-t border-slate-200 bg-slate-900 text-slate-300 pb-16 lg:pb-0">
          <div
            className={`mx-auto grid max-w-7xl gap-6 px-5 py-10 ${
              isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-4"
            }`}
          >
            <div>
              <div className="flex items-center gap-2.5">
                <img
                  src="/banijjo-favicon.png"
                  alt={preset.storeName[lang]}
                  className="h-8 w-8 rounded-lg bg-white p-0.5 object-contain"
                />
                <h3 className="text-sm font-extrabold text-white">
                  {preset.storeName[lang]}
                </h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {preset.tagline[lang]}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                {lang === "bn" ? "ক্যাটাগরি সমূহ" : "Top Categories"}
              </h4>
              <ul className="mt-2.5 space-y-1.5 text-xs">
                {preset.categories.map((c) => (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategorySlug(c.slug);
                        setViewMode("home");
                        scrollToSection("mod-products");
                      }}
                      className="hover:text-white"
                    >
                      {c.name[lang]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                {lang === "bn" ? "গুরুত্বপূর্ণ লিংক" : "Quick Links"}
              </h4>
              <ul className="mt-2.5 space-y-1.5 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="hover:text-white"
                  >
                    {lang === "bn"
                      ? "সকল সাব-ক্যাটাগরি মেনু"
                      : "All Sub-Categories"}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setViewMode("checkout")}
                    className="hover:text-white"
                  >
                    {lang === "bn" ? "১-স্টেপ চেকআউট" : "1-Step Checkout"}
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                {lang === "bn" ? "ক্যাশ অন ডেলিভারি" : "Cash on Delivery"}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {lang === "bn"
                  ? "পণ্য হাতে বুঝে পেয়ে ডেলিভারি ম্যানের কাছে মূল্য পরিশোধ করুন।"
                  : "Pay Cash on Delivery right at your doorstep."}
              </p>
            </div>
          </div>
        </footer>

        {/* ===================================================================
         * MOBILE STICKY BOTTOM APP BAR (Makes Mobile Shopping Super Smooth!)
         * =================================================================== */}
        <div
          className={`${
            isMobile ? "sticky bottom-0 flex" : "fixed bottom-0 inset-x-0 flex lg:hidden"
          } z-40 items-center justify-around border-t border-slate-200 bg-white/95 backdrop-blur-md py-2 px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]`}
        >
          <button
            type="button"
            onClick={() => {
              setViewMode("home");
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`flex flex-col items-center gap-0.5 text-[10px] font-extrabold ${
              viewMode === "home" && !mobileMenuOpen
                ? preset.theme.primaryText
                : "text-slate-600"
            }`}
          >
            <Home className="h-4 w-4" />
            <span>{lang === "bn" ? "হোম" : "Home"}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex flex-col items-center gap-0.5 text-[10px] font-extrabold ${
              mobileMenuOpen ? preset.theme.primaryText : "text-slate-600"
            }`}
          >
            <MenuIcon className="h-4 w-4" />
            <span>{lang === "bn" ? "ক্যাটাগরি মেনু" : "Categories"}</span>
          </button>

          <button
            type="button"
            onClick={() => setCartDrawerOpen(true)}
            className="relative flex flex-col items-center gap-0.5 text-[10px] font-extrabold text-slate-600"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -top-1 right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-400 px-1 text-[9px] font-black text-slate-950">
              {totalCartItems}
            </span>
            <span>{lang === "bn" ? "কার্ট" : "Cart"}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              setViewMode("checkout");
            }}
            className={`flex items-center gap-1 rounded-xl ${preset.theme.primaryBg} px-3.5 py-2 text-xs font-extrabold text-white shadow`}
          >
            <Zap className="h-3.5 w-3.5 text-amber-300" />
            <span>{lang === "bn" ? "চেকআউট" : "Checkout"}</span>
          </button>
        </div>
      </div>

      {/* =====================================================================
       * SLIDE-OUT CART DRAWER
       * ===================================================================== */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm">
          <div className="flex h-full w-full max-w-md flex-col justify-between bg-white shadow-2xl">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className={`h-5 w-5 ${preset.theme.primaryText}`} />
                <h3 className="text-base font-extrabold text-slate-900">
                  {lang === "bn" ? "আপনার শপিং কার্ট" : "Your Shopping Cart"} (
                  {totalCartItems})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setCartDrawerOpen(false)}
                className="rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-emerald-50 px-5 py-2.5 border-b border-emerald-100 text-xs font-bold text-emerald-900">
              {isFreeShipping ? (
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>
                    {lang === "bn"
                      ? "অভিনন্দন! আপনি সম্পূর্ণ ফ্রি ডেলিভারি পাচ্ছেন!"
                      : "Congratulations! You unlocked FREE shipping!"}
                  </span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5">
                  <Truck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>
                    {lang === "bn"
                      ? `আর মাত্র ৳${(
                          preset.freeShippingThreshold - subtotal
                        ).toLocaleString()} কেনাকাটা করলেই ডেলিভারি ফ্রি!`
                      : `Add ৳${(
                          preset.freeShippingThreshold - subtotal
                        ).toLocaleString()} more for FREE Shipping!`}
                  </span>
                </span>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-5 divide-y divide-slate-100">
              {cart.length === 0 ? (
                <div className="py-16 text-center text-sm text-slate-500">
                  {lang === "bn"
                    ? "আপনার কার্টে কোনো পণ্য নেই"
                    : "Your cart is currently empty"}
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.variant.id}`}
                    className="flex items-center justify-between gap-3 py-3.5"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name[lang]}
                      className="h-14 w-14 rounded-xl object-cover border border-slate-200 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                        {item.product.name[lang]}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {item.variant.title}
                      </p>
                      <p
                        className={`text-xs font-extrabold mt-0.5 ${preset.theme.primaryText}`}
                      >
                        ৳
                        {(
                          item.variant.price * item.quantity
                        ).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() =>
                          handleUpdateCartQty(
                            item.product.id,
                            item.variant.id,
                            -1
                          )
                        }
                        className="rounded-lg border border-slate-200 p-1 hover:bg-slate-100"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-6 text-center text-xs font-extrabold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          handleUpdateCartQty(
                            item.product.id,
                            item.variant.id,
                            1
                          )
                        }
                        className="rounded-lg border border-slate-200 p-1 hover:bg-slate-100"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-slate-200 p-5 space-y-3 bg-slate-50">
              <div className="flex items-center justify-between text-sm font-extrabold text-slate-900">
                <span>{lang === "bn" ? "সাবটোটাল:" : "Subtotal:"}</span>
                <span>৳{subtotal.toLocaleString()}</span>
              </div>
              <button
                type="button"
                disabled={cart.length === 0}
                onClick={() => {
                  setCartDrawerOpen(false);
                  setViewMode("checkout");
                }}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-2xl ${preset.theme.primaryBg} ${preset.theme.primaryHoverBg} px-5 py-3.5 text-sm font-extrabold text-white shadow-lg disabled:opacity-50`}
              >
                <Zap className="h-4 w-4 text-amber-300" />
                <span>
                  {lang === "bn"
                    ? "১-স্টেপ ক্যাশ অন ডেলিভারি চেকআউট"
                    : "Proceed to 1-Step COD Checkout"}
                </span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LiveStorefrontExperience;
