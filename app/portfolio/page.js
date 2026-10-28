"use client";

import { useState } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import AmbientBackground from "../components/AmbientBackground";
import InquiryForm from "../components/InquiryForm";
import Counter from "../components/Counter";
import useScrollReveal from "../components/useScrollReveal";
import useMouseGlow from "../components/useMouseGlow";
import BrandModal, { BRANDS_DATA } from "../components/BrandModal";
import Icon from "../components/Icon";

const STATS = [
  { value: 6, suffix: "", label: "Brands Scaled" },
  { value: 50, suffix: "M+", label: "Impressions Generated" },
  { value: 340, suffix: "%", label: "Peak B2B Lead Growth" },
  { value: 8, suffix: "", label: "Marketing Disciplines" },
];

export default function PortfolioPage() {
  useScrollReveal();
  const glowRef = useMouseGlow();
  const [activeBrand, setActiveBrand] = useState(null);

  return (
    <>
      <AmbientBackground />
      <div className="mouse-glow" ref={glowRef} />
      <SiteNav />

      <section className="svc-hero section">
        <div className="svc-hero-copy">
          <span className="eyebrow">Our Work & Case Studies</span>
          <h1 className="reveal in">Work that speaks in <span style={{ background: "linear-gradient(92deg, #ffab40, #ff7847 45%, #e879f9)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>revenue.</span></h1>
          <p>From luxury e-commerce to industrial B2B — explore how Sparke Avenue drives measurable digital growth for brands across Pakistan.</p>
          <div className="cta-row">
            <a href="/#contact" className="btn">Become Our Next Case Study →</a>
            <a href="/services" className="btn-outline">Explore Services</a>
          </div>
        </div>
        <div className="svc-visual reveal">
          <div style={{ background: "linear-gradient(160deg, rgba(255,255,255,.07), rgba(255,255,255,.02))", border: "1px solid rgba(255,255,255,.12)", borderRadius: 20, padding: 22, boxShadow: "0 30px 60px rgba(0,0,0,.35)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: ".9rem" }}>Featured Case Study</span>
              <span style={{ background: "rgba(255,171,64,.15)", color: "var(--spark)", border: "1px solid rgba(255,171,64,.4)", borderRadius: 999, padding: "3px 10px", fontSize: ".68rem", fontWeight: 700 }}>E-COMMERCE &amp; LUXURY</span>
            </div>
            <div style={{ display: "flex", gap: 14, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.09)", borderRadius: 14, padding: 14 }}>
              <div style={{ width: 78, height: 78, flexShrink: 0, borderRadius: 12, background: "linear-gradient(135deg, #f59e0b, #a855f7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.9rem" }}>💎</div>
              <div>
                <div style={{ fontSize: ".66rem", color: "var(--spark)", fontWeight: 700, letterSpacing: 1 }}>JEWELLISTA.PK</div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: "1rem", margin: "3px 0" }}>Fine Craftsmanship, Modern Elegance</div>
                <div style={{ color: "var(--muted)", fontSize: ".76rem", lineHeight: 1.45 }}>Global e-commerce scale for a Pakistani jewellery brand.</div>
                <div style={{ display: "flex", gap: 6, marginTop: 9, flexWrap: "wrap" }}>
                  <span style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 999, padding: "2px 9px", fontSize: ".66rem", color: "#cbd5e1" }}>SEO</span>
                  <span style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 999, padding: "2px 9px", fontSize: ".66rem", color: "#cbd5e1" }}>Social Media</span>
                  <span style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 999, padding: "2px 9px", fontSize: ".66rem", color: "#cbd5e1" }}>E-commerce</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 14, display: "grid", gap: 9 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 11, border: "1px solid var(--line)", borderRadius: 12, padding: "9px 12px" }}>
                <span style={{ width: 32, height: 32, borderRadius: 9, background: "#38bdf8", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: ".64rem", color: "#12100c", flexShrink: 0 }}>AC</span>
                <div>
                  <div style={{ color: "var(--text)", fontSize: ".84rem", fontWeight: 700, lineHeight: 1.3 }}>Azmat Cables</div>
                  <div style={{ color: "var(--muted)", fontSize: ".7rem" }}>Industrial & Manufacturing · B2B</div>
                </div>
                <span style={{ marginLeft: "auto", color: "var(--spark)", fontSize: ".76rem", fontWeight: 600 }}>Case Study →</span>
              </div><div style={{ display: "flex", alignItems: "center", gap: 11, border: "1px solid var(--line)", borderRadius: 12, padding: "9px 12px" }}>
                <span style={{ width: 32, height: 32, borderRadius: 9, background: "#fbbf24", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: ".64rem", color: "#12100c", flexShrink: 0 }}>WJ</span>
                <div>
                  <div style={{ color: "var(--text)", fontSize: ".84rem", fontWeight: 700, lineHeight: 1.3 }}>Waheed Jewellers</div>
                  <div style={{ color: "var(--muted)", fontSize: ".7rem" }}>Bridal & Fine Jewelry</div>
                </div>
                <span style={{ marginLeft: "auto", color: "var(--spark)", fontSize: ".76rem", fontWeight: 600 }}>Case Study →</span>
              </div><div style={{ display: "flex", alignItems: "center", gap: 11, border: "1px solid var(--line)", borderRadius: 12, padding: "9px 12px" }}>
                <span style={{ width: 32, height: 32, borderRadius: 9, background: "#f472b6", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: ".64rem", color: "#12100c", flexShrink: 0 }}>ZC</span>
                <div>
                  <div style={{ color: "var(--text)", fontSize: ".84rem", fontWeight: 700, lineHeight: 1.3 }}>Zarnoor Collection</div>
                  <div style={{ color: "var(--muted)", fontSize: ".7rem" }}>Fashion E-Commerce</div>
                </div>
                <span style={{ marginLeft: "auto", color: "var(--spark)", fontSize: ".76rem", fontWeight: 600 }}>Case Study →</span>
              </div>
            </div>
          </div>
          <div className="float-badge" style={{ top: "-4%", right: "2%" }}><span className="dot" />Peak Lead Growth +340%</div>
          <div className="float-badge" style={{ bottom: "-4%", left: "2%", top: "auto", right: "auto" }}><span className="dot" />6 Brands Scaled</div>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="results-grid">
          {STATS.map((r) => (
            <div className="result-card reveal" key={r.label}>
              <Counter value={r.value} suffix={r.suffix} />
              <div className="r-label">{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Case Studies</span>
          <h2 className="section-title">Brands We&apos;ve Partnered With</h2>
          <p style={{ color: "var(--muted)", maxWidth: 640, margin: "16px auto 0" }}>
            Click any brand to open its full case study — the challenge, what we did, and the results.
          </p>
        </div>

        <div className="portfolio-grid">
          {BRANDS_DATA.map((c) => (
            <div
              className="portfolio-card reveal"
              key={c.id}
              onClick={() => setActiveBrand(c)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActiveBrand(c); }}
            >
              <div className="portfolio-logo-frame">
                <img src={c.logo} alt={c.name} />
              </div>
              <span className="p-industry">{c.badge}</span>
              <h4>{c.name}</h4>
              <p className="p-tagline">{c.tagline}</p>
              <div className="portfolio-card-action">
                <span>Explore Case Study</span>
                <Icon name="arrowRight" size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta reveal">
        <span className="eyebrow" style={{ justifyContent: "center" }}>Let&apos;s Build Together</span>
        <h2>Want your brand to be our next success story?</h2>
        <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 40px" }}>
          Tell us where you are and where you want to be — we&apos;ll bring the plan.
        </p>
        <InquiryForm serviceName="Portfolio Page Inquiry" extraLabel="Website" extraPlaceholder="Your Website URL" />
      </section>

      <SiteFooter />

      <BrandModal brand={activeBrand} onClose={() => setActiveBrand(null)} />
    </>
  );
}
