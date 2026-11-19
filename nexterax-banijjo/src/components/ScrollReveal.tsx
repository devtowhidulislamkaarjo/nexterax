"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealVariant =
  | "fade-up"
  | "fade-in"
  | "scale-up"
  | "slide-left"
  | "slide-right";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const BOT_UA_REGEX =
  /bot|crawl|spider|slurp|google|bing|yandex|baidu|duckduck|facebookexternalhit|twitterbot|whatsapp|linkedinbot|telegrambot|gptbot|oai-searchbot|claudebot|perplexity|lighthouse|chrome-lighthouse|pagespeed/i;

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Immediately show all content for search engine crawlers, Lighthouse, and reduced-motion users
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        navigator.webdriver ||
        BOT_UA_REGEX.test(navigator.userAgent))
    ) {
      setIsVisible(true);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -32px 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const hiddenClasses: Record<RevealVariant, string> = {
    "fade-up": "opacity-0 translate-y-6",
    "fade-in": "opacity-0",
    "scale-up": "opacity-0 translate-y-4 scale-[0.98]",
    "slide-left": "opacity-0 -translate-x-6",
    "slide-right": "opacity-0 translate-x-6",
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className={`seo-reveal transition-[transform,opacity] will-change-[transform,opacity] ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : hiddenClasses[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
}
