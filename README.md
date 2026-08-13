<<<<<<< HEAD
# Sahaara Foundation

Production-ready Next.js starter for a Bengaluru NGO. Replace all demo figures, placeholder contacts, and placeholder recognition before publishing.

## Local setup

1. `npm install`
2. `npm run dev`
3. Visit `http://localhost:3000`

## Environment variables

Create `.env.local` when connecting services:

`NEXT_PUBLIC_SUPABASE_URL=`  
`NEXT_PUBLIC_SUPABASE_ANON_KEY=`  
`SUPABASE_SERVICE_ROLE_KEY=`  
`RAZORPAY_KEY_ID=`  
`RAZORPAY_KEY_SECRET=`

Never expose `SUPABASE_SERVICE_ROLE_KEY` or `RAZORPAY_KEY_SECRET` to the browser. Create payment orders and verify signatures in server routes.

## Supabase

Create tables for `users`, `programs`, `meal_records`, `donations`, `campaigns`, `schools`, `mothers_support`, `shelters`, `awards`, `gallery`, `volunteers`, `audit_logs`, and `site_settings`. Database-preparation types live in `types/database.ts`. Enable Row Level Security, limit `/admin` to authenticated administrators, and use server-side mutation endpoints.

## Razorpay

Install the Razorpay SDK, add a server-side order route, invoke checkout with only the public key ID, and verify payment signatures server-side before writing a `donations` record. The current modal is intentionally a mock payment flow.

## Admin

`/admin` is a presentational demo area. Protect it with Supabase Auth middleware and a `users.role = 'admin'` check before launch.

## Deploy to Vercel

Push this folder to a Git repository, import it in Vercel, add the environment variables above, set the real public site URL in `app/sitemap.ts` and `app/robots.ts`, then deploy. Add verified organisation details, contacts, payment settings and privacy/legal pages before accepting donations.
=======
# ngo-replica
Sahaara foundation is a Grade 12 demo NGO website concept focused on nutritional meal programs, homeless mother support, and government school assistance. Built with Next.js, TypeScript and Tailwind CSS, it features donation flows, impact tracking, hygiene standards, volunteer registration and a modern responsive UI.
>>>>>>> 6cb4d76e649c0d77d6a0739a1e31cf75a0ce78c9
