"use client";

import Link from "next/link";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import AmbientBackground from "../components/AmbientBackground";
import useScrollReveal from "../components/useScrollReveal";
import useMouseGlow from "../components/useMouseGlow";
import { POSTS } from "./posts";

export default function BlogPage() {
  useScrollReveal();
  const glowRef = useMouseGlow();

  return (
    <>
      <AmbientBackground />
      <div className="mouse-glow" ref={glowRef} />
      <SiteNav />

      <section className="svc-hero section">
        <div className="svc-hero-copy">
          <span className="eyebrow">Blog</span>
          <h1 className="reveal in">Digital marketing insights, no fluff.</h1>
          <p>Practical guides on SEO, advertising and growth — written for businesses in Pakistan, by the team that does the work.</p>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="svc-grid">
          {POSTS.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="reveal" style={{ textDecoration: "none" }}>
              <div className="svc-card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <span className="eyebrow" style={{ marginBottom: 12 }}>{post.date} · {post.readTime}</span>
                <h3 style={{ marginBottom: 12 }}>{post.title}</h3>
                <p style={{ flex: 1 }}>{post.excerpt}</p>
                <span style={{ color: "var(--spark)", fontSize: ".9rem", marginTop: 16 }}>Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
