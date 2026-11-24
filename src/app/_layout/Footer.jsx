// The site footer, on every page.
import { SITE_NAME } from "@/app/_lib/siteMetadata";

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </p>
    </footer>
  );
}
