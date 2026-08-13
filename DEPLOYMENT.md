Deployment to Vercel
====================

This project is a Next.js app and deploys cleanly to Vercel. Follow the steps below to create a production deployment.

Prerequisites
- A GitHub (or GitLab/Bitbucket) account.
- A Vercel account (https://vercel.com/).

Quick steps
1. Initialize a git repo (if not already):

```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to a Git provider (GitHub example):

```bash
gh repo create <your-org>/<repo-name> --public --source=. --push
```

3. On Vercel:
- Go to https://vercel.com/new
- Select your Git provider and choose the repository.
- Vercel will auto-detect Next.js. Default build settings are fine:
  - Build Command: `npm run build`
  - Output Directory: (use default)

4. Set environment variables in the Vercel dashboard (Project Settings → Environment Variables). Add any secrets your app requires, for example:

- `RAZORPAY_KEY_ID` (server-only)
- `RAZORPAY_KEY_SECRET` (server-only)
- `NEXT_PUBLIC_SOME_KEY` (if you have public keys)

5. Deploy: Vercel will create a preview and production deployment automatically on pushes.

Local production verification (recommended before connecting):

```bash
npm run build
npm start
# then open http://localhost:3000
```

Notes & best practices
- Keep secrets out of the repo. Use Vercel environment variables for production keys.
- If you need server-side integrations (payments, webhooks), implement them in API routes or a separate server.
- Optionally add a `vercel.json` for custom routes or advanced settings.

If you want, I can:
- Add a `vercel.json` with recommended settings.
- Add a GitHub Action to lint/build on each push.
- Create a `Dockerfile` for container-based deployments.
