# medionline

Medical supplies e-commerce site for Pakistan — built with Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Pages included

- `/` — Home (hero, categories, featured product, stats)
- `/products` — Full catalogue with category filter chips
- `/about` — About the business
- `/contact` — Contact form (UI only for now — not yet wired to email/backend)
- `/faq` — Frequently asked questions (accordion)

## Design system

- **Colors**: deep teal (`#0E3B37`) + amber (`#E2A63B`) accent, warm off-white background
- **Fonts**: Fraunces (headings), Inter (body), Space Mono (labels/prices/SKUs)
- **Signature element**: "prescription label" style product cards with a blister-pack dot pattern

All tokens are defined in `app/globals.css`.

## Sample data

Product and category data lives in `lib/data.ts` — replace this with real
inventory once it's ready, or connect it to a database/CMS later.

## Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to vercel.com → **Add New Project** → import the GitHub repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. Once live, go to **Project → Settings → Domains** to attach `medionline.com`
   (or purchase it directly from that same screen).

## Still to do

- Wire the contact form to an actual email/notification service (Vercel
  Functions, Resend, etc.)
- Replace sample products in `lib/data.ts` with real inventory
- Add SEO metadata per page, `sitemap.xml`, `robots.txt`
- Decide on and integrate the FAQ/support chatbot
