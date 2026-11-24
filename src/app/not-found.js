// The site's 404: an unknown URL, and a post that isn't published (the post page calls
// notFound()).
import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main>
      <h1>Page not found</h1>
      <p>This page doesn&apos;t exist, or the post is no longer published.</p>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
    </main>
  );
}
