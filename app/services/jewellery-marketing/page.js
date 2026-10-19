"use client";

import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import AmbientBackground from "../../components/AmbientBackground";
import InquiryForm from "../../components/InquiryForm";
import Counter from "../../components/Counter";
import useScrollReveal from "../../components/useScrollReveal";
import useMouseGlow from "../../components/useMouseGlow";
import Icon from "../../components/Icon";

const SERVICES = [
  { icon: "palette", title: "Luxury Brand Identity", desc: "Premium logos, packaging and visual systems that make jewellery feel worth its price." },
  { icon: "instagram", title: "Social Media & Reels", desc: "Scroll-stopping reels, shoots and content calendars built for jewellery buyers." },
  { icon: "ads", title: "Meta & Google Ads", desc: "High-intent campaigns for bridal, festive and everyday collections that convert." },
  { icon: "search", title: "Jewellery SEO", desc: "Ranking for the searches your customers make before they buy — gold rates to bridal sets." },
  { icon: "users", title: "Influencer Partnerships", desc: "Creator and stylist collaborations that put your pieces in front of ready buyers." },
  { icon: "cart", title: "E-commerce CRO", desc: "Product pages, checkout flows and retargeting tuned to lift conversion rates." },
];

const PROCESS = [
  { num: "01", title: "Discover", desc: "Deep-dive into your collections, margins, buyers and competitors." },
  { num: "02", title: "Strategize", desc: "A channel mix built around bridal seasons, festivals and buying cycles." },
  { num: "03", title: "Create", desc: "Premium shoots, reels and ad creatives that sell the craft, not just the product." },
  { num: "04", title: "Launch", desc: "Campaigns go live across Meta, Google, TikTok and marketplaces." },
  { num: "05", title: "Measure", desc: "Tracking ROAS, CAC and repeat purchase — not vanity metrics." },
  { num: "06", title: "Scale", desc: "Doubling down on winning creatives and audiences, month after month." },
];

const DASHBOARD = [
  { value: 50, suffix: "M+", label: "Impressions Generated" },
  { value: 4, suffix: "", label: "Jewellery Brands Scaled" },
  { value: 8, suffix: "+", label: "Marketing Disciplines" },
  { value: 100, suffix: "%", label: "Full-Funnel Coverage" },
];

const WHY = ["Trust-First Creative", "Festive Calendar Planning", "High-Ticket Funnels", "Repeat Purchase Engine", "Luxury Positioning"];
const BENEFITS = [
  { icon: "compass", title: "Niche-Obsessed" },
  { icon: "chart", title: "ROI-Driven" },
  { icon: "search", title: "Transparent" },
  { icon: "trending", title: "Scale-Focused" },
];

const FAQS = [
  {
    q: "Why does jewellery marketing need a specialist agency?",
    a: "Jewellery is a high-trust, high-ticket purchase. Buyers research for weeks, compare designs, and buy around weddings and festivals. Generic agencies run generic ads — a specialist plans around buying cycles, builds trust through content, and optimizes for considered purchases, not impulse clicks.",
  },
  {
    q: "Which platforms work best for jewellery brands in Pakistan?",
    a: "Instagram and TikTok for discovery and desire, Meta ads for retargeting, Google for high-intent searches (e.g. bridal sets, gold bangles), and WhatsApp for closing sales. We build the mix around your price point and audience.",
  },
  {
    q: "How long before we see results?",
    a: "Paid campaigns typically show traction in 30–60 days. SEO and brand building compound over 3–6 months. Jewellery has seasonality — bridal and Eid campaigns need 6–8 weeks of runway, so planning ahead matters.",
  },
  {
    q: "Do you work with small jewellers or only big brands?",
    a: "Both. We've scaled luxury e-commerce brands and heritage retailers alike. What matters is product quality and readiness to invest in growth — the playbook adapts to your stage.",
  },
  {
    q: "What does a jewellery marketing engagement include?",
    a: "Strategy, creative production (shoots, reels, ad creatives), campaign management across Meta/Google/TikTok, SEO, influencer partnerships and conversion optimization — one team owning the full funnel.",
  },
];

export default function JewelleryMarketingPage() {
  useScrollReveal();
  const glowRef = useMouseGlow();

  return (
    <>
      <AmbientBackground />
      <div className="mouse-glow" ref={glowRef} />
      <SiteNav />

      <section className="svc-hero section">
        <div className="svc-hero-copy">
          <span className="eyebrow">Jewellery Marketing</span>
          <h1 className="reveal in">Jewellery marketing that turns browsers into buyers.</h1>
          <p>Full-funnel growth for jewellery and luxury e-commerce brands — from brand identity and viral reels to high-ROAS ad campaigns.</p>
          <div className="cta-row">
            <a href="/#contact" className="btn">Scale My Jewellery Brand</a>
            <a href="#case-study" className="btn-outline">See Our Work</a>
          </div>
        </div>
        <div className="svc-visual reveal">
          <div className="search-mock">
            <div className="search-bar-ui">🔍 bridal gold set pakistan...</div>
            <div className="search-result-row" style={{ animationDelay: ".3s" }}><span className="r-title">Your Brand — Bridal Collection</span><span className="r-rank">#1 ↑</span></div>
            <div className="search-result-row" style={{ animationDelay: ".5s" }}><span className="r-title">Your Brand — Instagram</span><span className="r-rank">#2 ↑</span></div>
            <div className="search-result-row" style={{ animationDelay: ".7s" }}><span className="r-title">Your Brand — Reviews</span><span className="r-rank">#4 ↑</span></div>
          </div>
          <div className="float-badge" style={{ bottom: "6%", right: "-2%", animationDelay: "1s" }}><span className="dot" />Sales ↑</div>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Jewellery Marketing</span>
          <h2 className="section-title">Everything a Jewellery Brand Needs to Grow</h2>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s) => (
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
          <span className="eyebrow" style={{ justifyContent: "center" }}>Our Process</span>
          <h2 className="section-title">From First Shoot to Sold-Out Drop</h2>
        </div>
        <div className="timeline">
          {PROCESS.map((p) => (
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
          <span className="eyebrow" style={{ justifyContent: "center" }}>Track Record</span>
          <h2 className="section-title">Numbers That Matter</h2>
        </div>
        <div className="results-grid">
          {DASHBOARD.map((r) => (
            <div className="result-card reveal" key={r.label}>
              <Counter value={r.value} suffix={r.suffix} />
              <div className="r-label">{r.label}</div>
            </div>
          ))}
        </div>
        <div className="results-note">Agency-wide performance across Sparke Avenue jewellery and luxury client campaigns.</div>
      </section>

      <div className="road-divider" />

      <section className="section" id="case-study">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Case Study</span>
          <h2 className="section-title">Jewellista.pk — Luxury, Engineered to Convert</h2>
        </div>
        <div className="case-grid">
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "#fff", marginBottom: 12 }}>
              Luxury Jewelry — E-Commerce
            </h3>
            <p style={{ color: "var(--muted)", fontSize: ".95rem", lineHeight: 1.6, marginBottom: 24 }}>
              Sparke Avenue built Jewellista&apos;s full digital engine — luxury brand identity, high-end product creative, Instagram and TikTok content, Meta ad campaigns and SEO — turning a jewellery label into a converting e-commerce brand.
            </p>
            <div className="case-meta">
              <div><b>360°</b><span>Full-Funnel Scope</span></div>
              <div><b>4+</b><span>Active Channels</span></div>
              <div><b>Luxury</b><span>Positioning</span></div>
              <div><b>D2C</b><span>E-commerce Model</span></div>
            </div>
            <a href="/#contact" className="btn">Get a Jewellery Growth Plan →</a>
          </div>
          <div className="case-visual-badge">
            <div className="brand-card-logo-frame" style={{ margin: "0 auto 14px", width: 80, height: 80 }}>
              <img src="/portfolio/jewellista.png" alt="Jewellista.pk" />
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", color: "var(--spark)", textTransform: "uppercase", letterSpacing: 1 }}>
                Deliverables
              </span>
              <h4 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "1.05rem", marginTop: 4 }}>
                Branding, Content, Ads &amp; SEO
              </h4>
            </div>
          </div>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Why Sparke Avenue</span>
          <h2 className="section-title">Why Jewellery Brands Choose Us</h2>
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

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>FAQs</span>
          <h2 className="section-title">Jewellery Marketing, Answered</h2>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {FAQS.map((f) => (
            <div className="reveal" key={f.q} style={{ marginBottom: 18, padding: "20px 22px", border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, background: "rgba(255,255,255,.02)" }}>
              <h4 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "1.02rem", marginBottom: 8 }}>{f.q}</h4>
              <p style={{ color: "var(--muted)", fontSize: ".93rem", lineHeight: 1.65 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta reveal">
        <span className="eyebrow" style={{ justifyContent: "center" }}>Ready?</span>
        <h2>Ready to shine?</h2>
        <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 40px" }}>
          Tell us about your jewellery brand and let&apos;s build a growth plan around your collections.
        </p>
        <InquiryForm serviceName="Jewellery Marketing" extraLabel="Website" extraPlaceholder="Your Website URL" />
      </section>

      <SiteFooter />
    </>
  );
}
