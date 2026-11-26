// One published post, found by the /blog/[slug] route param, or null when there is none. It
// reads getPosts(), the same cached and "cms"-tagged request, so revalidation refreshes it too.
// The param is the post's slug, which never changes (docs/cms/posts.md).
import { getPosts } from "./getPosts";

export async function getPost(slug) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}
