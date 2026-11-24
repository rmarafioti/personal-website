// One post's page, at /blog/<slug>: its heading, its body, and the metadata that gives it a
// preview when it is shared (LinkedIn reads Open Graph). Every published post is built at build
// time; one published later renders on its first visit and is cached. A post that isn't
// published shows the site's 404. Until the CMS adds a slug to posts, the slug is the post's id.
import { notFound } from "next/navigation";

import PostBody from "@/app/_components/blog/PostBody";
import PostHeading from "@/app/_components/blog/PostHeading";
import { getPost } from "@/app/_lib/getPost";
import { getPosts } from "@/app/_lib/getPosts";
import { SITE_DESCRIPTION } from "@/app/_lib/siteMetadata";

// The first image in the body, as an Open Graph image, or undefined when there is none.
function firstImage(body) {
  const element = body.find(({ type }) => type === "image");
  if (!element) return undefined;
  const { src, width, height, altText } = element.image;
  return [{ url: src, width, height, alt: altText }];
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title = post.header || "Blog post";
  const description = post.subHeader || SITE_DESCRIPTION;
  // Without a body image, images is left out and the root layout's default stays.
  const images = firstImage(post.body);

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/blog/${slug}`,
      publishedTime: post.postDate ?? post.createdAt,
      images,
    },
    // A large card only when there is an image to fill it.
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title,
      description,
      images,
    },
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <main>
      <article>
        <PostHeading post={post} as="h1" />
        <PostBody body={post.body} />
      </article>
    </main>
  );
}
