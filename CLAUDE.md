# Julie Luxury Spa — Development Guide

## Project
Luxury spa booking website for Julie Luxury Spa, Lagos. Built by Toss Enterprise.

## Stack
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS v4 with custom brand tokens
- Framer Motion for animations
- React Hook Form + Zod for booking form validation
- Sonner for toasts
- date-fns for date handling
- Paystack for payments (integration ready, key needed)

## Start Dev Server
```powershell
Set-Location "C:\Users\USER\TossEnterprise\client-projects\julie-luxury-spa"
$env:NEXT_TELEMETRY_DISABLED = "1"
node .\node_modules\next\dist\bin\next dev
```

## Environment Variables
Copy `.env.local` and fill in:
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — e.g. `2348012345678`
- `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` — from Paystack dashboard
- `PAYSTACK_SECRET_KEY` — from Paystack dashboard
- `RESEND_API_KEY` — for booking confirmation emails

## Required Images
Add to `/public/`:
- `logo.png` — Julie Luxury Spa logo (provided)
- `images/hero-spa.jpg` — Hero section background (1920x1080, premium spa shot)
- `images/gallery-1.jpg` through `gallery-6.jpg` — Gallery section images

## Key Files
- `src/lib/services.ts` — Service list, prices, time slots
- `src/components/booking/StepPayment.tsx` — Paystack integration (TODO comment inside)
- `src/app/globals.css` — All brand tokens (colors, fonts)
- `src/components/layout/MobileBar.tsx` — WhatsApp number config

## Paystack Integration
In `StepPayment.tsx`, the payment handler has a clear TODO comment. To activate:
1. Add `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` to `.env.local`
2. Load Paystack inline script in `layout.tsx`: `<Script src="https://js.paystack.co/v1/inline.js" />`
3. Replace the simulated payment in `handlePay()` with the Paystack inline flow

## Deployment
```powershell
pnpm build
vercel --prod
```
