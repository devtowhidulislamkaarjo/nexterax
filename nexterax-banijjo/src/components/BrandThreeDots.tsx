"use client";

import React from "react";

/**
 * Brand Identity Manual p.24: "A rhythm of three"
 * Three equal circular dots in Warm Coral (#FF6633) or White,
 * spaced at 1.32 diameters center-to-center (i.e. 0.32d gap).
 */
export function BrandThreeDots({
  size = 8,
  color = "#FF6633",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  const gap = Math.round(size * 0.32 * 10) / 10;
  return (
    <span
      aria-hidden="true"
      style={{ gap: `${gap}px` }}
      className={`inline-flex items-center shrink-0 ${className}`}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
          }}
          className="rounded-full block"
        />
      ))}
    </span>
  );
}
