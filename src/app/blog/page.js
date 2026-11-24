// The blog: every published post from the CMS, newest first. Static, regenerated when the CMS
// calls /api/revalidate.
import PostList from "@/app/_components/blog/PostList";

export const metadata = {
  title: "Blog",
  description: "Every post by Rich Marafioti, newest first.",
};

export default function Blog() {
  return (
    <main>
      <h1>Blog</h1>
      <PostList />
    </main>
  );
}
