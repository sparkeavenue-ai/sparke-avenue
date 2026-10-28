"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("sa-theme");
    const initial = saved || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("sa-theme", next);
  };
  const [navHidden, setNavHidden] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setNavScrolled(current > 20);
      setNavHidden(current > lastScroll.current && current > 120);
      lastScroll.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${navHidden ? "nav-hidden" : ""} ${navScrolled ? "nav-scrolled" : ""}`}>
      <Link href="/" className="logo">
        <span className="logo-badge">
          <Image src="/logo-mark.png" alt="Sparke Avenue" width={26} height={26} className="logo-mark-img" priority />
        </span>
        <span className="logo-text">Sparke <span style={{ color: "var(--spark)" }}>⚡</span> Avenue</span>
      </Link>
      <ul className={menuOpen ? "open" : ""}>
        <li><a href="/#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="/portfolio" className="nav-link" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
        <li><a href="/services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a href="/blog" className="nav-link" onClick={() => setMenuOpen(false)}>Blog</a></li>
        <li><a href="/contact" className="nav-link nav-cta" onClick={() => setMenuOpen(false)}>Get in Touch</a></li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light or dark theme">{theme === "dark" ? "\u2600" : "\u263E"}</button>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
    </nav>
  );
}
