"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { LiveStorefrontExperience } from "@/components/LiveStorefrontExperience";
import type { PresetCode } from "@/data/live-store-presets";

function LiveStoreInner() {
  const searchParams = useSearchParams();
  const rawPreset = searchParams.get("preset");
  const validPresets: PresetCode[] = [
    "food",
    "fashion",
    "cosmetics",
    "tech",
    "supershop",
    "electronics",
  ];
  const initialPreset: PresetCode = validPresets.includes(
    rawPreset as PresetCode
  )
    ? (rawPreset as PresetCode)
    : "food";

  return <LiveStorefrontExperience initialPreset={initialPreset} />;
}

export default function LiveStorePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex flex-col items-center justify-center gap-3 bg-[#FBF6EC] text-sm font-semibold text-[#241C21]">
          <img
            src="/banijjo-logo-symbol.png"
            alt="Banijjo Studio"
            className="h-10 w-auto object-contain"
          />
          <span>দোকান লোড হচ্ছে...</span>
        </div>
      }
    >
      <LiveStoreInner />
    </Suspense>
  );
}
