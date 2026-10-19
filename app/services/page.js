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
          <h1 className="reveal in">Eight disciplines. One growth engine.</h1>
          <p>Every service at Sparke Avenue is built for the same outcome: measurable business growth. Pick one, or let us run the full funnel.</p>
          <div className="cta-row">
            <a href="/#contact" className="btn">Get a Free Consultation →</a>
            <a href="/about" className="btn-outline">About Us</a>
          </div>
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
