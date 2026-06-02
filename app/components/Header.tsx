"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const navItems = [
  { href: "/guide/", label: "ETIASとは" },
  { href: "/flow/", label: "申請手順" },
  { href: "/countries/", label: "対象国" },
  { href: "/fee/", label: "費用" },
  { href: "/faq/", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="site-logo">
          <Logo className="site-logo-mark" size={38} />
          <span className="site-logo-name">ETIAS Application Desk</span>
        </Link>
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="メニューを開く"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      <nav className={`nav-mobile${open ? " open" : ""}`}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
