// The home page: who Rich is, in a line, and his newest posts from the CMS.
import Link from "next/link";

import PostList from "@/app/_components/blog/PostList";
import { SITE_DESCRIPTION, SITE_NAME } from "@/app/_lib/siteMetadata";

// How many of the newest posts the home page shows.
const LATEST_POST_COUNT = 3;

export const metadata = {
  title: { absolute: SITE_NAME },
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return (
    <main>
      <h1>{SITE_NAME}</h1>
      <p>
        Analytics engineer. I write here about analytics engineering, data
        modeling and the tools I build.
      </p>
      <section aria-labelledby="latest-posts">
        <h2 id="latest-posts">Latest posts</h2>
        <PostList limit={LATEST_POST_COUNT} />
        <Link href="/blog">All posts</Link>
      </section>
    </main>
  );
}
