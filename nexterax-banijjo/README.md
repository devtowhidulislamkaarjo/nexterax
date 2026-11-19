# NexteraX Banijjo — Official Marketing & Sales Website

This is the Next.js 15 (Frontend-Only + Static Export Ready) marketing and sales website for **Banijjo (বাণিজ্য)** — NexteraX Digital's White-Label Single-Seller E-Commerce Platform.

## Features Included
- **Bilingual Support:** Instant toggle between **বাংলা** and **English**.
- **Complete 8-Pillar Feature Explorer:** Interactive previews for Visual Theme Builder, 1-Step Guest COD Checkout, WordPress-style Category Tree & Mega Menus, Atomic Inventory & Anti-Oversell, Admin Financial Analytics, Enterprise Security (Argon2id + MFA + RBAC + AES-256-GCM Vault), SEO/AEO, and Dedicated White-Label Ownership.
- **3 Industry Presets Preview:** Organic Food & Grocery, Fashion & Apparel, and Cosmetics & Beauty.
- **22+ Full-Stack Modules Checklist:** Complete technical breakdown of `client/` (Next.js 15) and `server/` (Express + TypeScript + Prisma + PostgreSQL 17).
- **Direct WhatsApp Ordering & Store Configurator:** Zero backend required — buyers configure their store preset, package tier, and add-ons and send the order directly to `+880 1878-601610` on WhatsApp.

## Local Development
```bash
npm install
npm run dev
```

## Production Build & cPanel Hosting
```bash
npm run build
```
Running `npm run build` generates the **`out/`** folder (including `.htaccess`).
To host on **cPanel** without any Node.js server issues:
1. Open cPanel **File Manager** → go to `/home/rizvi/nexterax-digital.com`.
2. Upload all files inside the **`out/`** folder directly into `/home/rizvi/nexterax-digital.com`.
3. Your site will be live immediately with full SSL, fast static caching, and zero backend errors!
