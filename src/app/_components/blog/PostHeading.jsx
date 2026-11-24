// A post's heading: postDate first, then header and subHeader, each only when the site owner
// filled it in (docs/cms/posts.md → Rendering posts). The caller passes the heading level that
// fits its page: the same level for every post in a list.
import { formatPostDate } from "@/app/_lib/formatPostDate";

export default function PostHeading({ post, as: Heading }) {
  const { header, subHeader, postDate } = post;
  if (!header && !subHeader && !postDate) return null;

  return (
    <header>
      {postDate && <time dateTime={postDate}>{formatPostDate(postDate)}</time>}
      {header && subHeader && (
        <hgroup>
          <Heading>{header}</Heading>
          <p>{subHeader}</p>
        </hgroup>
      )}
      {header && !subHeader && <Heading>{header}</Heading>}
      {!header && subHeader && <p>{subHeader}</p>}
    </header>
  );
}
