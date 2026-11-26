// The published posts, newest first as the CMS returns them, each as its heading and a link to
// its own page. The link is separate from the heading, since header is optional. The home page
// shows the newest few (limit); the blog page shows them all.
import Link from "next/link";

import PostHeading from "./PostHeading";
import { getPosts } from "@/app/_lib/getPosts";

export default async function PostList({ limit }) {
  const posts = await getPosts();
  const shownPosts = limit ? posts.slice(0, limit) : posts;

  if (shownPosts.length === 0) return <p>No posts yet.</p>;

  return (
    <ul>
      {shownPosts.map((post) => (
        <li key={post.id}>
          <article>
            <PostHeading post={post} as="h2" />
            <Link href={`/blog/${post.slug}`}>Read post</Link>
          </article>
        </li>
      ))}
    </ul>
  );
}
