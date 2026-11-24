# Rich Marafioti

Rich Marafioti's personal website, `https://www.richmarafioti.com`: a landing page and a blog. A static Next.js site; the blog posts come from the 3D Web Dev Headless CMS, where Rich writes them, and everything else lives in this repo. Made from the `rmarafioti/frontend_scaffold` template.

## Local setup

Requires Node 24.

```sh
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

The site builds and renders with an empty `.env.local`: with `HEADLESS_CMS_API_URL` unset, CMS content is simply empty. All the variables are server-only (`.env.example` lists them).

## Scripts

| Script                            | What it does                      |
| --------------------------------- | --------------------------------- |
| `npm run dev`                     | Development server                |
| `npm run build` / `npm start`     | Production build, and serve it    |
| `npm test` / `npm run test:watch` | Unit tests (Vitest)               |
| `npm run lint`                    | ESLint                            |
| `npm run format`                  | Prettier, run before every commit |

CI (`.github/workflows/ci.yml`) runs lint and tests, and checks that `docs/cms/` matches client-kit.

## Docs

- `CLAUDE.md`: architecture, conventions, testing and the review checklist.
- `docs/cms/`: how the site talks to the CMS. Synced from `rmarafioti/client-kit` by its Sync workflow (a `3dwd-sync[bot]` pull request); never edited here.
- `docs/site.md`: this site's details, the abilities it uses and its quirks.
