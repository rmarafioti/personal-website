// The site footer, on every page: the newsletter signup form and the copyright line.
import NewsletterForm from "@/app/_components/forms/NewsletterForm";
import { SITE_NAME } from "@/app/_lib/siteMetadata";

export default function Footer() {
  return (
    <footer>
      <NewsletterForm />
      <p>
        &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </p>
    </footer>
  );
}
