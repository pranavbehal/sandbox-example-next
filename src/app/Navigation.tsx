"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav role="navigation" className="main-nav">
      <Link
        href="/cats"
        className={`nav-item ${pathname === "/cats" ? "active" : ""}`}
        aria-current={pathname === "/cats" ? "page" : undefined}
      >
        Cats
      </Link>
      <Link
        href="/dogs"
        className={`nav-item ${pathname === "/dogs" ? "active" : ""}`}
        aria-current={pathname === "/dogs" ? "page" : undefined}
      >
        Dogs
      </Link>
      <Link
        href="/squirrels"
        className={`nav-item ${pathname === "/squirrels" ? "active" : ""}`}
        aria-current={pathname === "/squirrels" ? "page" : undefined}
      >
        Squirrels
      </Link>
          <Link
        href="/walruses"
        className={`nav-item ${pathname === "/walruses" ? "active" : ""}`}
        aria-current={pathname === "/walruses" ? "page" : undefined}
      >
        Walruses
      </Link>
    </nav>
  );
}
