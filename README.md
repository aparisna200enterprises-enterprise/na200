This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production configuration

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` before deployment so canonical metadata, Open Graph URLs, `sitemap.xml`, and `robots.txt` use the production domain.

The contact form sends through Resend when `RESEND_API_KEY` and a verified `RESEND_FROM_EMAIL` are configured. Without those values, it provides a mail-app fallback instead of silently failing.

## Cloudflare Pages with GitHub

This project is configured as a static Next.js export for Cloudflare Pages. In Cloudflare, choose Workers & Pages → Create application → Pages → Import an existing Git repository, then select the GitHub repository.

Use these build settings:

- Framework preset: `Next.js (Static HTML Export)`
- Production branch: `main`
- Build command: `npx next build`
- Build directory: `out`

Set `NEXT_PUBLIC_SITE_URL` in the Pages production environment to the final `pages.dev` or custom-domain URL. Pages serves the static site; the contact form opens a prefilled email in the visitor's mail app because the server-side `/api/contact` route is not included in a static export.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter for the corporate interface.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
