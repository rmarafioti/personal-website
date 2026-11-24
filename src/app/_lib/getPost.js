// One published post, found by the /blog/[slug] route param, or null when there is none. It
// reads getPosts(), the same cached and "cms"-tagged request, so revalidation refreshes it too.
// The param is the post's id until the CMS adds a slug to PublicPost (docs/site.md → Abilities);
// then only the match below changes.
import { getPosts } from "./getPosts";

export async function getPost(slug) {
  const posts = await getPosts();
  return posts.find((post) => post.id === slug) ?? null;
}
