// The site's name, production URL and description, shared by the root layout, the post pages'
// metadata, the footer and the RSS feed, so they are written once.

export const SITE_NAME = "Rich Marafioti";
// The exact URL stored in the CMS (docs/site.md), which the site is served on with no redirect.
export const SITE_URL = "https://www.richmarafioti.com";
export const SITE_DESCRIPTION =
  "Rich Marafioti, analytics engineer: writing on analytics engineering and data.";

// metadata.alternates.types for every page: <link rel="alternate" type="application/rss+xml">,
// so readers and newsletter vendors find the feed. A page that sets its own alternates (a post's
// canonical URL) replaces the layout's whole, so it adds this again.
export const FEED_ALTERNATE_TYPES = {
  "application/rss+xml": [{ url: "/feed.xml", title: SITE_NAME }],
};
