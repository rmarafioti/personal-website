// A post's body in the order the site owner arranged it: paragraphs with their formatting and
// line breaks, and images through next/image. Any other element type is skipped, so a type the
// CMS adds later never renders as an empty element (docs/cms/posts.md → Rendering posts).
import Image from "next/image";

import FormattedText from "@/app/_components/FormattedText";

import styles from "@/app/_styling/post.module.css";

function renderElement(element, index) {
  if (element.type === "paragraph") {
    return (
      <p key={index} className={styles.paragraph}>
        <FormattedText text={element.text} />
      </p>
    );
  }
  if (element.type === "image") {
    const { src, width, height, altText } = element.image;
    return (
      <Image
        key={index}
        className={styles.image}
        src={src}
        width={width}
        height={height}
        alt={altText}
      />
    );
  }
  return null;
}

// Body elements have no id; their order never changes, so the index is the key.
export default function PostBody({ body }) {
  return <div>{body.map(renderElement)}</div>;
}
