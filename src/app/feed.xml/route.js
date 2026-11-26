// The site's RSS feed at /feed.xml, built from the CMS posts list. Static like the pages: its
// CMS fetch carries the "cms" tag, so /api/revalidate refreshes it whenever a post changes, and
// it is an empty, valid feed while the CMS isn't wired up.
import { buildFeed } from "@/app/_lib/buildFeed";
import { getPosts } from "@/app/_lib/getPosts";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/app/_lib/siteMetadata";

// The path of each post's own page (docs/site.md → Pages), which each feed item links to as
// {SITE_URL}{POST_PATH}/{slug}.
const POST_PATH = "/blog";

// Route handlers aren't cached by default in Next.js 16; this makes the feed build as static.
export const dynamic = "force-static";

export async function GET() {
  const posts = await getPosts();
  const feed = buildFeed({
    posts,
    siteName: SITE_NAME,
    siteUrl: SITE_URL,
    siteDescription: SITE_DESCRIPTION,
    postPath: POST_PATH,
  });
  return new Response(feed, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
