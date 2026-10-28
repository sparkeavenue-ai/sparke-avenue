"use client";

import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import AmbientBackground from "../components/AmbientBackground";
import InquiryForm from "../components/InquiryForm";
import useScrollReveal from "../components/useScrollReveal";
import useMouseGlow from "../components/useMouseGlow";
import Icon from "../components/Icon";

const SERVICES = [
  {
    icon: "search", slug: "/services/seo-services", title: "SEO Services",
    desc: "Rank higher on Google and stay there. Technical SEO, content engines and authority building that turn search into your cheapest acquisition channel.",
    points: ["Technical & on-page SEO", "Keyword & competitor research", "Content strategy & link building", "Local SEO & Google Business"],
  },
  {
    icon: "target", slug: "/services/performance-marketing", title: "Performance Marketing",
    desc: "Paid ads engineered for return, not vanity metrics. Meta, Google and TikTok campaigns built around your unit economics.",
    points: ["Meta, Google & TikTok ads", "Funnel & landing page CRO", "Creative testing systems", "ROAS-focused reporting"],
  },
  {
    icon: "instagram", slug: "/services/social-media-marketing", title: "Social Media Marketing",
    desc: "Content people stop for and a community that buys. Strategy, reels, calendars and growth — handled end-to-end.",
    points: ["Content calendars & reels", "Profile growth & community", "Influencer collaborations", "Social commerce setup"],
  },
  {
    icon: "palette", slug: "/services/branding-design", title: "Branding & Design",
    desc: "Identities that make you the obvious choice. Logos, brand systems and design languages built for recognition.",
    points: ["Logo & visual identity", "Brand guidelines & voice", "Packaging & print design", "Brand refresh & repositioning"],
  },
  {
    icon: "layout", slug: "/services/web-development", title: "Web Development",
    desc: "Websites built to convert, not just look pretty. Fast, SEO-ready builds engineered around your funnel.",
    points: ["Business & corporate sites", "E-commerce development", "Landing pages that convert", "Speed & SEO optimization"],
  },
  {
    icon: "pen", slug: "/services/content-creation", title: "Content Creation",
    desc: "Copy, video and creative that sell. A content engine tuned for attention and conversion across every channel.",
    points: ["Ad creatives & UGC-style video", "Copywriting & blogs", "Product photography direction", "Short-form video systems"],
  },
  {
    icon: "cart", slug: "/services/ecommerce-marketing", title: "E-commerce Marketing",
    desc: "Full-funnel growth for online stores — from first click to repeat purchase, COD-friendly and retention-obsessed.",
    points: ["Store CRO & product feeds", "Abandoned-cart recovery", "WhatsApp & SMS retention", "Marketplace growth"],
  },
  {
    icon: "compass", slug: "/services/digital-strategy", title: "Digital Strategy",
    desc: "The roadmap before the spend. Audits, market intelligence and channel plans so every rupee works harder.",
    points: ["Growth audits & diagnostics", "Channel & budget planning", "Competitor intelligence", "90-day growth roadmaps"],
  },
];

const PROCESS = [
  { n: "01", t: "Discovery", d: "We dig into your business, market and numbers before touching a single campaign." },
  { n: "02", t: "Strategy", d: "A clear plan: channels, budgets, creative angles and what success looks like." },
  { n: "03", t: "Execution", d: "Campaigns, content and creative launched — fast, without the agency telephone game." },
  { n: "04", t: "Optimization", d: "Weekly testing and transparent reporting tied to revenue, not impressions." },
];

export default function ServicesPage() {
  useScrollReveal();
  const glowRef = useMouseGlow();

  return (
    <>
      <AmbientBackground />
      <div className="mouse-glow" ref={glowRef} />
      <SiteNav />

      <section className="svc-hero section">
        <div className="svc-hero-copy">
          <span className="eyebrow">Our Services</span>
          <h1 className="reveal in">Eight disciplines. One <span style={{ background: "linear-gradient(92deg, #ffab40, #ff7847 45%, #e879f9)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>growth engine.</span></h1>
          <p>Every service at Sparke Avenue is built for the same outcome: measurable business growth. Pick one, or let us run the full funnel.</p>
          <div className="cta-row">
            <a href="/#contact" className="btn">Get a Free Consultation →</a>
            <a href="/about" className="btn-outline">About Us</a>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 26 }}>
            <span style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 999, padding: "6px 14px", fontSize: ".76rem", color: "var(--muted)" }}>🧩 <b style={{ color: '#fff' }}>8</b> services</span><span style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 999, padding: "6px 14px", fontSize: ".76rem", color: "var(--muted)" }}>🎯 Full-funnel approach</span><span style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 999, padding: "6px 14px", fontSize: ".76rem", color: "var(--muted)" }}>📊 Measured in revenue</span>
          </div>
        </div>
        <div className="svc-visual reveal">
          <div style={{ background: "linear-gradient(160deg, rgba(255,255,255,.07), rgba(255,255,255,.02))", border: "1px solid rgba(255,255,255,.12)", borderRadius: 20, padding: 22, boxShadow: "0 30px 60px rgba(0,0,0,.35)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: ".92rem" }}>The Growth Engine</span>
              <span style={{ background: "rgba(255,171,64,.15)", color: "var(--spark)", border: "1px solid rgba(255,171,64,.4)", borderRadius: 999, padding: "3px 10px", fontSize: ".68rem", fontWeight: 700 }}>FULL FUNNEL</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <a href="/services/seo-services" style={{ display: "flex", alignItems: "center", gap: 11, border: "1px solid rgba(255,255,255,.09)", background: "rgba(255,255,255,.04)", borderRadius: 13, padding: 12, textDecoration: "none" }}>
                <span style={{ width: 36, height: 36, flexShrink: 0, borderRadius: 10, background: "rgba(56,189,248,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>🔍</span>
                <span>
                  <span style={{ display: "block", color: "#fff", fontSize: ".83rem", fontWeight: 700, lineHeight: 1.3 }}>SEO Services</span>
                  <span style={{ display: "block", color: "var(--muted)", fontSize: ".68rem", marginTop: 2 }}>Rank & stay on top</span>
                </span>
              </a><a href="/services/performance-marketing" style={{ display: "flex", alignItems: "center", gap: 11, border: "1px solid rgba(255,255,255,.09)", background: "rgba(255,255,255,.04)", borderRadius: 13, padding: 12, textDecoration: "none" }}>
                <span style={{ width: 36, height: 36, flexShrink: 0, borderRadius: 10, background: "rgba(255,171,64,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>🎯</span>
                <span>
                  <span style={{ display: "block", color: "#fff", fontSize: ".83rem", fontWeight: 700, lineHeight: 1.3 }}>Performance Marketing</span>
                  <span style={{ display: "block", color: "var(--muted)", fontSize: ".68rem", marginTop: 2 }}>Ads built for ROAS</span>
                </span>
              </a><a href="/services/social-media-marketing" style={{ display: "flex", alignItems: "center", gap: 11, border: "1px solid rgba(255,255,255,.09)", background: "rgba(255,255,255,.04)", borderRadius: 13, padding: 12, textDecoration: "none" }}>
                <span style={{ width: 36, height: 36, flexShrink: 0, borderRadius: 10, background: "rgba(244,114,182,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>📱</span>
                <span>
                  <span style={{ display: "block", color: "#fff", fontSize: ".83rem", fontWeight: 700, lineHeight: 1.3 }}>Social Media</span>
                  <span style={{ display: "block", color: "var(--muted)", fontSize: ".68rem", marginTop: 2 }}>Content people stop for</span>
                </span>
              </a><a href="/services/branding-design" style={{ display: "flex", alignItems: "center", gap: 11, border: "1px solid rgba(255,255,255,.09)", background: "rgba(255,255,255,.04)", borderRadius: 13, padding: 12, textDecoration: "none" }}>
                <span style={{ width: 36, height: 36, flexShrink: 0, borderRadius: 10, background: "rgba(168,85,247,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>🎨</span>
                <span>
                  <span style={{ display: "block", color: "#fff", fontSize: ".83rem", fontWeight: 700, lineHeight: 1.3 }}>Branding & Design</span>
                  <span style={{ display: "block", color: "var(--muted)", fontSize: ".68rem", marginTop: 2 }}>Identities that stick</span>
                </span>
              </a><a href="/services/web-development" style={{ display: "flex", alignItems: "center", gap: 11, border: "1px solid rgba(255,255,255,.09)", background: "rgba(255,255,255,.04)", borderRadius: 13, padding: 12, textDecoration: "none" }}>
                <span style={{ width: 36, height: 36, flexShrink: 0, borderRadius: 10, background: "rgba(125,216,125,.13)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>💻</span>
                <span>
                  <span style={{ display: "block", color: "#fff", fontSize: ".83rem", fontWeight: 700, lineHeight: 1.3 }}>Web Development</span>
                  <span style={{ display: "block", color: "var(--muted)", fontSize: ".68rem", marginTop: 2 }}>Sites that convert</span>
                </span>
              </a><a href="/services/content-creation" style={{ display: "flex", alignItems: "center", gap: 11, border: "1px solid rgba(255,255,255,.09)", background: "rgba(255,255,255,.04)", borderRadius: 13, padding: 12, textDecoration: "none" }}>
                <span style={{ width: 36, height: 36, flexShrink: 0, borderRadius: 10, background: "rgba(249,115,22,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>🎬</span>
                <span>
                  <span style={{ display: "block", color: "#fff", fontSize: ".83rem", fontWeight: 700, lineHeight: 1.3 }}>Content Creation</span>
                  <span style={{ display: "block", color: "var(--muted)", fontSize: ".68rem", marginTop: 2 }}>Reels, posts & more</span>
                </span>
              </a><a href="/services/ecommerce-marketing" style={{ display: "flex", alignItems: "center", gap: 11, border: "1px solid rgba(255,255,255,.09)", background: "rgba(255,255,255,.04)", borderRadius: 13, padding: 12, textDecoration: "none" }}>
                <span style={{ width: 36, height: 36, flexShrink: 0, borderRadius: 10, background: "rgba(251,191,36,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>🛒</span>
                <span>
                  <span style={{ display: "block", color: "#fff", fontSize: ".83rem", fontWeight: 700, lineHeight: 1.3 }}>E-commerce</span>
                  <span style={{ display: "block", color: "var(--muted)", fontSize: ".68rem", marginTop: 2 }}>Stores that sell</span>
                </span>
              </a><a href="/services/digital-strategy" style={{ display: "flex", alignItems: "center", gap: 11, border: "1px solid rgba(255,255,255,.09)", background: "rgba(255,255,255,.04)", borderRadius: 13, padding: 12, textDecoration: "none" }}>
                <span style={{ width: 36, height: 36, flexShrink: 0, borderRadius: 10, background: "rgba(96,165,250,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>🧭</span>
                <span>
                  <span style={{ display: "block", color: "#fff", fontSize: ".83rem", fontWeight: 700, lineHeight: 1.3 }}>Digital Strategy</span>
                  <span style={{ display: "block", color: "var(--muted)", fontSize: ".68rem", marginTop: 2 }}>The 90-day roadmap</span>
                </span>
              </a>
            </div>
            <div style={{ marginTop: 16, borderTop: "1px solid rgba(255,255,255,.09)", paddingTop: 14, display: "flex", alignItems: "center", gap: 8, fontSize: ".74rem", color: "#cbd5e1", flexWrap: "wrap" }}>
              <b style={{ color: "#fff" }}>Search</b><span style={{ color: "var(--spark)" }}>→</span><b style={{ color: "#fff" }}>Click</b><span style={{ color: "var(--spark)" }}>→</span><b style={{ color: "#fff" }}>Engage</b><span style={{ color: "var(--spark)" }}>→</span><b style={{ color: "#fff" }}>Buy</b><span style={{ color: "var(--spark)" }}>→</span><b style={{ color: "#fff" }}>Repeat</b>
            </div>
          </div>
          <div className="float-badge" style={{ top: "-4%", right: "2%" }}><span className="dot" />8 Services · One Team</div>
          <div className="float-badge" style={{ bottom: "-4%", left: "2%", top: "auto", right: "auto" }}><span className="dot" />Consultation: 100% Free</div>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>What We Do</span>
          <h2 className="section-title">Full-Funnel Digital Marketing Services</h2>
          <p style={{ color: "var(--muted)", maxWidth: 640, margin: "16px auto 0" }}>
            From the first Google search to the final sale — explore each service in detail.
          </p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <a href={s.slug} key={s.slug} className="reveal" style={{ textDecoration: "none" }}>
              <div className="svc-card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <div className="icon-chip"><Icon name={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                  {s.points.map((pt) => (
                    <li key={pt} style={{ color: "var(--muted)", fontSize: ".9rem", display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ color: "var(--spark)" }}>✓</span> {pt}
                    </li>
                  ))}
                </ul>
                <span style={{ marginTop: "auto", color: "var(--spark)", fontSize: ".92rem", fontWeight: 600 }}>
                  Explore {s.title} →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>How We Work</span>
          <h2 className="section-title">From First Call to Compounding Growth</h2>
        </div>
        <div className="timeline">
          {PROCESS.map((p) => (
            <div className="timeline-item reveal" key={p.n}>
              <div className="timeline-num">{p.n}</div>
              <div><h4>{p.t}</h4><p>{p.d}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta reveal">
        <span className="eyebrow" style={{ justifyContent: "center" }}>Not sure where to start?</span>
        <h2>Tell us your goal. We'll map the fastest route.</h2>
        <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 40px" }}>
          Free consultation — no pitch decks, just an honest read on what will move the needle for your business.
        </p>
        <InquiryForm serviceName="Services Page Inquiry" extraLabel="Website" extraPlaceholder="Your Website URL" />
      </section>

      <SiteFooter />
    </>
  );
}
