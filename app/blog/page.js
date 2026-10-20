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
          <span className="eyebrow">The Sparke Avenue Blog</span>
          <h1 className="reveal in">Digital marketing insights, <span style={{ background: "linear-gradient(92deg, #ffab40, #ff7847 45%, #e879f9)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>no fluff.</span></h1>
          <p>Practical guides on SEO, advertising and growth — written for businesses in Pakistan, by the team that does the work.</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 26 }}>
            <span style={{ background: rgba(255,171,64,.14); border: 1px solid rgba(255,171,64,.45); borderRadius: 999, padding: '6px 14px', fontSize: '.78rem', color: '#ffcf87', fontWeight: 600 }}>🔥 Pricing Guide</span><span style={{ background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12); borderRadius: 999, padding: '6px 14px', fontSize: '.78rem', color: '#cbd5e1' }}>SEO</span><span style={{ background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12); borderRadius: 999, padding: '6px 14px', fontSize: '.78rem', color: '#cbd5e1' }}>Paid Ads</span><span style={{ background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12); borderRadius: 999, padding: '6px 14px', fontSize: '.78rem', color: '#cbd5e1' }}>Social Media</span><span style={{ background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12); borderRadius: 999, padding: '6px 14px', fontSize: '.78rem', color: '#cbd5e1' }}>Branding</span><span style={{ background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12); borderRadius: 999, padding: '6px 14px', fontSize: '.78rem', color: '#cbd5e1' }}>Strategy</span>
          </div>
          <form action="mailto:info@sparkeavenue.com" method="post" encType="text/plain" style={{ display: "flex", gap: 10, marginTop: 26, maxWidth: 480 }}>
            <input type="email" required name="subscriber_email" placeholder="Your work email…" style={{ flex: 1, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 12, padding: "13px 16px", color: "#fff", fontSize: ".88rem", minWidth: 0 }} />
            <button type="submit" style={{ background: "linear-gradient(135deg, #ffab40, #ff7847)", color: "#12100c", fontWeight: 800, borderRadius: 12, padding: "13px 20px", fontSize: ".88rem", border: "none", cursor: "pointer" }}>Subscribe</button>
          </form>
          <div style={{ color: "var(--muted)", fontSize: ".74rem", marginTop: 10 }}>One practical guide every two weeks. No spam, unsubscribe anytime.</div>
        </div>
        <div className="svc-visual reveal">
          <div style={{ background: "linear-gradient(160deg, rgba(255,255,255,.07), rgba(255,255,255,.02))", border: "1px solid rgba(255,255,255,.12)", borderRadius: 20, padding: 22, boxShadow: "0 30px 60px rgba(0,0,0,.35)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: ".9rem" }}>Featured Article</span>
              <span style={{ background: "rgba(255,171,64,.15)", color: "var(--spark)", border: "1px solid rgba(255,171,64,.4)", borderRadius: 999, padding: "3px 10px", fontSize: ".68rem", fontWeight: 700 }}>MOST READ</span>
            </div>
            {(() => { const featured = POSTS.find((p) => p.slug === "digital-marketing-cost-pakistan-2026") || POSTS[0]; const others = POSTS.filter((p) => p.slug !== featured.slug); return (<>
            <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <div style={{ borderRadius: 14, background: "linear-gradient(120deg, #ffab40, #ff7847 55%, #a855f7)", padding: 20, marginBottom: 14 }}>
                <div style={{ fontSize: ".68rem", fontWeight: 800, letterSpacing: 2, color: "rgba(255,255,255,.85)" }}>2026 PRICE GUIDE</div>
                <div style={{ color: "#fff", fontSize: "1.45rem", fontWeight: 800, lineHeight: 1.2, marginTop: 6 }}>Kitna kharcha<br />ata hai? 💸</div>
              </div>
              <div style={{ color: "#fff", fontSize: "1.02rem", fontWeight: 700, lineHeight: 1.4 }}>{featured.title}</div>
              <div style={{ color: "var(--muted)", fontSize: ".74rem", marginTop: 8 }}>{featured.date} · {featured.readTime} · <b style={{ color: "var(--spark)", fontWeight: 600 }}>Read article →</b></div>
            </Link>
            <div style={{ marginTop: 14, borderTop: "1px solid rgba(255,255,255,.09)", paddingTop: 12, display: "grid", gap: 10 }}>
              <Link href={`/blog/${others[0].slug}`} style={{ display: "flex", gap: 11, alignItems: "flex-start", textDecoration: "none" }}>
                <span style={{ flexShrink: 0, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 9, padding: "5px 8px", textAlign: "center", fontSize: ".62rem", color: "var(--muted)", lineHeight: 1.3 }}><b style={{ display: "block", color: "#fff", fontSize: ".85rem" }}>19</b>OCT</span>
                <span>
                  <span style={{ display: "block", color: "#fff", fontSize: ".84rem", fontWeight: 600, lineHeight: 1.4 }}>{others[0].title}</span>
                  <span style={{ display: "block", fontSize: ".7rem", color: "var(--muted)", marginTop: 2 }}>{others[0].readTime} · Guides</span>
                </span>
              </Link>
              <Link href={`/blog/${others[1].slug}`} style={{ display: "flex", gap: 11, alignItems: "flex-start", textDecoration: "none" }}>
                <span style={{ flexShrink: 0, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 9, padding: "5px 8px", textAlign: "center", fontSize: ".62rem", color: "var(--muted)", lineHeight: 1.3 }}><b style={{ display: "block", color: "#fff", fontSize: ".85rem" }}>19</b>OCT</span>
                <span>
                  <span style={{ display: "block", color: "#fff", fontSize: ".84rem", fontWeight: 600, lineHeight: 1.4 }}>{others[1].title}</span>
                  <span style={{ display: "block", fontSize: ".7rem", color: "var(--muted)", marginTop: 2 }}>{others[1].readTime} · Strategy</span>
                </span>
              </Link>
            </div>
            </>); })()}
          </div>
          <div className="float-badge" style={{ top: "-4%", right: "2%" }}><span className="dot" />3 Guides &amp; Growing</div>
          <div className="float-badge" style={{ bottom: "-4%", left: "2%", top: "auto", right: "auto" }}><span className="dot" />New Article Every 2 Weeks</div>
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
