# Rich Marafioti: this site

Everything particular to this website. The shared CMS docs in `docs/cms/` are synced unchanged from the client-kit repo and never edited here. Where they say "recorded in `docs/site.md`", the value is below.

## Site Details

| Detail              | Value                                                                                                                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Website name        | Rich Marafioti                                                                                                                                                                                    |
| Production URL      | `https://www.richmarafioti.com`: the exact URL stored in the CMS, no redirect                                                                                                                     |
| Vercel project      | `personal-website`, in 3DWD's Vercel Pro team                                                                                                                                                     |
| CMS media folder    | `richmarafioti`: this site's upload folder in 3DWD's Cloudinary account, given by the CMS                                                                                                         |
| Static image folder | `frontend_scaffold` for now: the template's folder, holding the hero in `_data/photos.js`. Rich's own images go in `public/` or a folder of his own, which then replaces it in `next.config.mjs`  |
| Pages               | `/`: home page (Rich's name, a one-line intro, the newest 3 posts). `/blog`: every post. `/blog/[slug]`: one post. Any unknown URL or unpublished post: the 404 (`not-found.js`)                  |
| Contact form        | None rendered yet. The template's EmailJS form is in the repo, unused, with no EmailJS account. The site will likely use the CMS contact form ability (`3d_wd_backend#126`, Resend) once it ships |

`next/image` loads only from `3dwd/richmarafioti/` (production uploads), `3dwd-dev/richmarafioti/` (local uploads) and the static image folder, set in `next.config.mjs`.

## Abilities this site uses

- **Posts (live):** read `docs/cms/posts.md`. The newest 3 render on `/`, every post on `/blog` (`_components/blog/PostList.jsx`), and each post on its own page, `/blog/[slug]` (`PostHeading.jsx`, `PostBody.jsx`), with Open Graph and Twitter metadata so a post shared on LinkedIn shows its header, subHeader and first image. Built: `_lib/getPosts.js`, `_lib/getPost.js`, `_lib/parseParagraph.js` and `_components/FormattedText.jsx`.
  - The route param is the post's `id` until the CMS adds a readable, stable slug to `PublicPost` and the updated `posts.md` arrives here by sync. Then only `getPost`'s match and `generateStaticParams` change. The blog isn't announced or shared until then, so no link breaks.
- **Contact form (pending):** the CMS contact form ability (`3d_wd_backend#126`) is specced in client-kit first and arrives here as a `docs/cms/` sync PR; it is built here only after that.

## Quirks

- Locally, the CMS sends its revalidate call to the stored production URL, not to this machine. After a dashboard change, POST to `localhost:<port>/api/revalidate` by hand (with the local webhook secret) to see it.
- Each CMS environment issues its own API key and webhook secret, so the local ones never work on staging or production. Production's are in 1Password (3DWD Clients).
- Links in post paragraphs open in a new tab, as `docs/cms/posts.md` specs.
- The domain is on Namecheap with BasicDNS, which `rich@richmarafioti.com`'s email forwarding depends on: never move the nameservers.
- client-kit onboarding (the backend's `docs/deploy.md` → Onboarding, path B). The repo was made from the template, so it already had `docs/cms/`, the CI, `.prettierignore` and the `CLAUDE.md` imports. Done: the `3dwd-sync` App is installed on this repo; it is in client-kit's `clients.json`; client-kit's Sync dry run reports it as matching; Allow auto-merge, Automatically delete head branches, and a `main` ruleset requiring `cms` and `check` are on; Vercel's Ignored Build Step skips docs-only merges. Left: the backend session sets `autoMerge: true` for this repo in client-kit and Rich merges it. From then on, sync PRs here merge themselves on green CI.
