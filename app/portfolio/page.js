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
          <h1 className="reveal in">Work that speaks in revenue.</h1>
          <p>From luxury e-commerce to industrial B2B — explore how Sparke Avenue drives measurable digital growth for brands across Pakistan.</p>
          <div className="cta-row">
            <a href="/#contact" className="btn">Become Our Next Case Study →</a>
            <a href="/services" className="btn-outline">Explore Services</a>
          </div>
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
