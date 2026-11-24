// The site navigation: the site name and links on desktop, a Home link and a menu button on
// mobile.
// The current page's link is highlighted and marked aria-current. A Client Component for the
// mobile menu's open state and the current path.
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SITE_NAME } from "@/app/_lib/siteMetadata";

/* naming conventions to define responsive design */
import pc from "@/app/_styling/navbar.module.css";
import mobile from "@/app/_styling/mobile_nav.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // A section's link stays highlighted on its sub-pages (Blog on a post).
  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <nav>
        <Link href="/" className={pc.nav_icon}>
          {SITE_NAME}
        </Link>
        <div className={pc.link_container}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${pc.nav_link} ${isActive(href) ? pc.active_link : ""}`}
              aria-current={isActive(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* mobile navigation menu below */}
        <div className={pc.mobile_nav}>
          <Link
            href="/"
            className={pc.nav_link}
            aria-current={isActive("/") ? "page" : undefined}
            onClick={closeMenu}
          >
            Home
          </Link>
          {/* hamburger menu */}
          <button
            type="button"
            id={mobile.hamMenuContainer}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`${mobile.menuButtonBurger} ${
                isMenuOpen ? mobile.open : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <menu
        id="mobile-menu"
        className={`${pc.menu} ${isMenuOpen ? pc.active : ""}`}
        aria-label="Mobile Navigation"
      >
        {NAV_LINKS.filter(({ href }) => href !== "/").map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={mobile.nav_link}
            aria-current={isActive(href) ? "page" : undefined}
            onClick={closeMenu}
          >
            {label}
          </Link>
        ))}
      </menu>
    </>
  );
}
