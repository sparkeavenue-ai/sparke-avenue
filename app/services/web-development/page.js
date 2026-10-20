"use client";

import { useState } from "react";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import AmbientBackground from "../../components/AmbientBackground";
import InquiryForm from "../../components/InquiryForm";
import useScrollReveal from "../../components/useScrollReveal";
import useMouseGlow from "../../components/useMouseGlow";
import Icon from "../../components/Icon";

const WHAT_WE_BUILD = [
  { icon: "layout", title: "Business Websites", desc: "Professional sites that represent your brand and convert visitors into customers." },
  { icon: "target", title: "Landing Pages", desc: "High-converting single pages built around one clear goal." },
  { icon: "storefront", title: "E-Commerce Websites", desc: "Online stores designed for smooth browsing and easy checkout." },
  { icon: "gear", title: "Custom Web Applications", desc: "Tailored web apps built around your specific business logic." },
  { icon: "phone", title: "Responsive Websites", desc: "Sites that look and work great on every screen size." },
  { icon: "restore", title: "Website Redesign", desc: "Modernizing an existing site without losing what already works." },
];

const APPROACH = [
  { num: "01", title: "Discover", desc: "Understanding your business, goals and audience before writing a line of code." },
  { num: "02", title: "Plan", desc: "Mapping the sitemap, structure and user flow." },
  { num: "03", title: "Design", desc: "Crafting a visual direction that fits your brand." },
  { num: "04", title: "Develop", desc: "Building the site with clean, maintainable code." },
  { num: "05", title: "Test", desc: "Checking performance, responsiveness and every interaction." },
  { num: "06", title: "Launch", desc: "Going live, with support for the handover." },
];

const CAPABILITIES = ["Frontend", "Backend", "Responsive Design", "Performance", "SEO-Friendly Structure", "CMS Integration"];

const PROJECTS = [
  {
    name: "Jewellista.pk",
    logo: "/portfolio/jewellista.png",
    industry: "Luxury Jewelry E-Commerce",
    services: "Custom Next.js Storefront, Instant Checkout & Mobile Optimization",
    metric: "0.8s Load Speed",
  },
  {
    name: "Azmat Cables",
    logo: "/portfolio/azmat-cables.png",
    industry: "Industrial Manufacturing",
    services: "Interactive B2B Product Catalog, Technical Specs & Inquiry Portal",
    metric: "+340% Digital Inquiries",
  },
  {
    name: "Zarnoor Collection",
    logo: "/portfolio/zarnoor-collection.png",
    industry: "Fashion Retail Boutique",
    services: "High-Volume Mobile E-Commerce Store & Courier API Integration",
    metric: "12,000+ Orders Handled",
  },
];

const BENEFITS = [
  { icon: "bolt", title: "Fast" },
  { icon: "phone", title: "Responsive" },
  { icon: "layers", title: "Modern" },
  { icon: "target", title: "User-Focused" },
  { icon: "trending", title: "Conversion-Focused" },
];

export default function WebDevelopmentPage() {
  useScrollReveal();
  const glowRef = useMouseGlow();

  return (
    <>
      <AmbientBackground />
      <div className="mouse-glow" ref={glowRef} />
      <SiteNav />

      <section className="svc-hero section">
        <div className="svc-hero-copy">
          <span className="eyebrow">Web Development</span>
          <h1 className="reveal in">Websites built to turn attention into action.</h1>
          <p>Modern, responsive and user-friendly websites designed around your business goals.</p>
          <div className="cta-row">
            <a href="/#contact" className="btn">Start Your Project</a>
            <a href="#showcase" className="btn-outline">View Our Work</a>
          </div>
        </div>
        <div className="svc-visual reveal"><div style={{ background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.02));border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:22px;backdropFilter:"blur(6px)";boxShadow:"0 30px 60px rgba(0,0,0,.35)" }}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
              <span style={{ marginLeft: 10, background: "rgba(255,255,255,.06)", borderRadius: 8, padding: "4px 12px", color: "var(--muted)", fontSize: ".75rem", flex: 1, textAlign: "center" }}>🔒 yourstore.pk</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ width: 22, height: 22, borderRadius: 6, background: "linear-gradient(135deg,#ffab40,#ff7847)", display: "inline-block" }} />
              <span style={{ color: "#fff", fontWeight: 700, fontSize: ".85rem" }}>YourStore</span>
              <span style={{ marginLeft: "auto", color: "var(--muted)", fontSize: ".72rem" }}>Shop · About · Contact</span>
              <span style={{ background: "var(--spark)", color: "#12100c", borderRadius: 8, padding: "4px 10px", fontSize: ".72rem", fontWeight: 700 }}>Shop Now</span>
            </div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.3rem", lineHeight: 1.2, fontFamily: "var(--font-display)", marginBottom: 8 }}>Websites built to turn<br />attention into action.</div>
            <div style={{ color: "var(--muted)", fontSize: ".82rem", marginBottom: 16 }}>Modern, responsive and designed around your goals.</div>
            <div style={{ display: "flex", gap: 10 }}>
              <span style={{ background: "var(--spark)", color: "#12100c", borderRadius: 10, padding: "8px 16px", fontSize: ".8rem", fontWeight: 700 }}>Start Project →</span>
              <span style={{ border: "1px solid rgba(255,255,255,.25)", color: "#fff", borderRadius: 10, padding: "8px 16px", fontSize: ".8rem" }}>View Work</span>
            </div>
          </div>
          <div className="float-badge" style={{ top: "-4%", right: "2%" }}><span className="dot" />Responsive</div><div className="float-badge" style={{ bottom: "-4%", left: "2%" }}><span className="dot" />⚡ Fast Load · 98/100</div>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>What We Build</span>
          <h2 className="section-title">Every Type of Website You Need</h2>
        </div>
        <div className="svc-grid">
          {WHAT_WE_BUILD.map((s) => (
            <div className="svc-card reveal" key={s.title}>
              <div className="icon-chip"><Icon name={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Our Approach</span>
          <h2 className="section-title">From Idea to Launch</h2>
        </div>
        <div className="timeline">
          {APPROACH.map((p) => (
            <div className="timeline-item reveal" key={p.num}>
              <div className="timeline-num">{p.num}</div>
              <div><h4>{p.title}</h4><p>{p.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Technology &amp; Capabilities</span>
          <h2 className="section-title">What Powers Your Website</h2>
        </div>
        <div className="benefit-grid">
          {CAPABILITIES.map((c) => (
            <div className="benefit-chip reveal" key={c}>
              <h4>{c}</h4>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section id="showcase" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Project Showcase</span>
          <h2 className="section-title">A Look At Our Work</h2>
        </div>
        <div className="showcase-grid">
          {PROJECTS.map((p, i) => (
            <div className="showcase-card reveal" key={i}>
              <div className="showcase-logo-thumb" style={{ padding: "26px 0 10px" }}>
                <div className="brand-card-logo-frame" style={{ width: 76, height: 76, margin: "0 auto" }}>
                  <img src={p.logo} alt={p.name} />
                </div>
              </div>
              <div className="showcase-body">
                <span className="sc-tag">{p.industry}</span>
                <h4>{p.name}</h4>
                <p>{p.services}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: ".75rem", color: "var(--spark)" }}>{p.metric}</span>
                  <a href="/#contact">View Project →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Why Sparke Avenue</span>
          <h2 className="section-title">Why Clients Choose Us</h2>
        </div>
        <div className="benefit-grid">
          {BENEFITS.map((b) => (
            <div className="benefit-chip reveal" key={b.title}>
              <div className="b-icon"><Icon name={b.icon} size={26} /></div>
              <h4>{b.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta reveal">
        <span className="eyebrow" style={{ justifyContent: "center" }}>Let&apos;s Talk</span>
        <h2>Your next website should work as hard as you do.</h2>
        <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 40px" }}>
          Have a website idea? Tell us what you need and our team will help turn it into reality.
        </p>
        <InquiryForm serviceName="Web Development" extraLabel="Project Type" extraPlaceholder="Project Type (e.g. Business Website, E-Commerce)" />
      </section>

      <SiteFooter />
    </>
  );
}
