# Kite Media — Astro site

A static rebuild of [kitemedia.com](https://www.kitemedia.com) in [Astro](https://astro.build), deployed to Cloudflare Workers from GitHub.

## Run it locally

```sh
npm install
npm run dev        # http://localhost:4321, live-reloads as you edit
npm run build      # outputs the static site to dist/
```

Requires Node 22+.

## Where things live

| What | Where |
| --- | --- |
| Pages (one file per URL) | `src/pages/` |
| Shared layout (head, header, footer) | `src/layouts/Base.astro` |
| Reusable pieces (hero, FAQ, contact form, testimonial card…) | `src/components/` |
| Colors, type scale, spacing | `src/styles/global.css` (tokens at the top) |
| Phone, address, nav, social links | `src/data/site.ts` |
| Reviews, team, FAQ, portfolio list | `src/data/*.json` |
| Blog posts (159) | `src/content/blog/*.md` → served at `/post-slug/` |
| Portfolio projects (56) | `src/content/projects/*.md` → served at `/project/slug/` |
| Images | `public/images/` (converted to WebP) |
| Redirects for old WordPress URLs | `public/_redirects` |

### Add a blog post

Create `src/content/blog/my-new-post.md`:

```md
---
{
  "title": "My New Post",
  "date": "2026-12-01T09:00:00",
  "author": "Kym Merrill",
  "categories": ["Search Engine Optimization"],
  "excerpt": "One or two sentences shown on the blog listing.",
  "featuredImage": "/images/2026/12/my-image.webp",
  "featuredAlt": "Describe the image",
  "description": "Meta description for Google."
}
---
<p>Post body. HTML or Markdown both work.</p>
```

## Contact forms

Forms post to whatever URL is in `PUBLIC_FORM_ENDPOINT` (see `.env.example`).
Until that's set, submitting a form shows a message asking people to call or email.
Easiest option: create a free [Web3Forms](https://web3forms.com) key for info@kitemedia.com, then in
Cloudflare → your Worker → Settings → Build → Variables add:

- `PUBLIC_FORM_ENDPOINT` = `https://api.web3forms.com/submit`
- `PUBLIC_FORM_ACCESS_KEY` = your key

and redeploy. Successful submissions land on `/contact-us/thank-you/`.

## Deploy (Cloudflare Workers + GitHub)

`wrangler.jsonc` is already set up for a static site. In the Cloudflare dashboard:
**Workers & Pages → Create application → Import a repository**, pick this repo, then

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Every push to `main` deploys; pull requests get preview URLs.
