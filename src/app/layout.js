// The root layout around every page: the navbar, the accessibility settings (AppWrapper) around
// the page content, the footer, and the site-wide metadata. The favicon is src/app/favicon.ico.
import AppWrapper from "@/app/_components/AppWrapper";
import Navbar from "@/app/_layout/Navbar";
import Footer from "@/app/_layout/Footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/app/_lib/siteMetadata";

import "./globals.css";

// Site-wide defaults. metadataBase makes every relative URL in metadata absolute, which link
// previews need. A page's own openGraph or twitter replaces these objects whole.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: { card: "summary", title: SITE_NAME, description: SITE_DESCRIPTION },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <AppWrapper>{children}</AppWrapper>
        <Footer />
      </body>
    </html>
  );
}
