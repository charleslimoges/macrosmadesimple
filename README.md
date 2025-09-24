# Notion Mirror Site

This lightweight Next.js site simply embeds any public URL (for example, a Notion page) inside a full-browser iframe so you can host it on your own domain.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file and add the URL you want to display:
   ```bash
   NEXT_PUBLIC_EMBED_URL=https://your-notion-page-or-any-public-url
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the URL printed in the terminal (usually `http://localhost:3000`). The iframe fills the viewport.

## Deploying to Vercel

1. Push this project to a Git repository and import it into Vercel.
2. In the Vercel project settings, add the same `NEXT_PUBLIC_EMBED_URL` environment variable (under **Settings → Environment Variables**).
3. Deploy. The site will render the embedded URL exactly as the source serves it.

### Notes

- Some services, including private Notion pages, block embedding via `X-Frame-Options`/`Content-Security-Policy`. Only URLs that allow being iframed will appear.
- For Notion, ensure the page is publicly shared via **Share → Publish to web**, or use a service that proxies Notion pages if embedding is blocked.
- Change the environment variable anytime to point the site at a different page, then redeploy (or restart the dev server locally).