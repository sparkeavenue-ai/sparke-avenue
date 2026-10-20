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
  { icon: "gear", title: "Technical SEO", desc: "Fixing the structural issues that hold your rankings back." },
  { icon: "document", title: "On-Page SEO", desc: "Optimizing content, titles and structure for both users and search engines." },
  { icon: "pin", title: "Local SEO", desc: "Getting found by customers searching near you." },
  { icon: "key", title: "Keyword Research", desc: "Finding the exact terms your customers are searching for." },
  { icon: "pen", title: "Content Optimization", desc: "Improving existing content to rank higher and convert better." },
  { icon: "link", title: "Link Building", desc: "Earning the authority signals search engines reward." },
];

const PROCESS = [
  { num: "01", title: "Audit", desc: "A full technical and content audit of your current site." },
  { num: "02", title: "Research", desc: "Identifying the keywords and opportunities that matter." },
  { num: "03", title: "Strategy", desc: "Building a roadmap prioritized by impact." },
  { num: "04", title: "Optimize", desc: "Implementing on-page and technical fixes." },
  { num: "05", title: "Build", desc: "Growing authority through content and links." },
  { num: "06", title: "Measure", desc: "Tracking rankings, traffic and conversions." },
];

const DASHBOARD = [
  { value: 140, suffix: "%", label: "Organic Traffic" },
  { value: 32, suffix: "+", label: "Keyword Rankings" },
  { value: 75, suffix: "%", label: "Search Visibility" },
  { value: 28, suffix: "%", label: "Conversions" },
];

const WHY_SEO = ["Long-Term Growth", "Organic Visibility", "Qualified Traffic", "Better User Experience", "Sustainable Growth"];
const BENEFITS = [
  { icon: "compass", title: "Strategic" },
  { icon: "chart", title: "Data-Driven" },
  { icon: "search", title: "Transparent" },
  { icon: "trending", title: "Growth-Focused" },
];

export default function SeoServicesPage() {
  useScrollReveal();
  const glowRef = useMouseGlow();

  return (
    <>
      <AmbientBackground />
      <div className="mouse-glow" ref={glowRef} />
      <SiteNav />

      <section className="svc-hero section">
        <div className="svc-hero-copy">
          <span className="eyebrow">SEO Services</span>
          <h1 className="reveal in">Get found by the people searching for you.</h1>
          <p>Strategic SEO designed to improve visibility, rankings, organic traffic and sustainable growth.</p>
          <div className="cta-row">
            <a href="/#contact" className="btn">Improve My Rankings</a>
            <a href="#case-study" className="btn-outline">Explore Our Work</a>
          </div>
        </div>
        <div className="svc-visual reveal">
          <div style={{ background: "linear-gradient(160deg, rgba(255,255,255,.07), rgba(255,255,255,.02))", border: "1px solid rgba(255,255,255,.12)", borderRadius: 20, padding: 22, boxShadow: "0 30px 60px rgba(0,0,0,.35)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 999, padding: "10px 16px", marginBottom: 18 }}>
              <span>🔍</span>
              <span style={{ color: "#fff", fontSize: ".9rem" }}>digital marketing agency pakistan</span>
            </div>
            <div style={{ background: "rgba(255,171,64,.08)", border: "1px solid rgba(255,171,64,.35)", borderRadius: 14, padding: "14px 16px", marginBottom: 12 }}>
              <div style={{ color: "#7dd87d", fontSize: ".78rem", marginBottom: 4 }}>sparkeavenue.com</div>
              <div style={{ color: "#fff", fontWeight: 600, fontSize: ".95rem", marginBottom: 4 }}>Digital Marketing Agency in Pakistan | Sparke Avenue</div>
              <div style={{ color: "var(--spark)", fontSize: ".8rem", letterSpacing: 2 }}>★★★★★ <span style={{ color: "var(--muted)", letterSpacing: 0 }}>· #1 Result</span></div>
            </div>
            <div style={{ border: "1px solid rgba(255,255,255,.07)", borderRadius: 14, padding: "12px 16px", marginBottom: 10, opacity: 0.55 }}>
              <div style={{ color: "#9db2ce", fontSize: ".75rem", marginBottom: 6 }}>competitor-agency.com</div>
              <div style={{ height: 9, width: "70%", background: "rgba(255,255,255,.18)", borderRadius: 99 }} />
            </div>
            <div style={{ border: "1px solid rgba(255,255,255,.07)", borderRadius: 14, padding: "12px 16px", opacity: 0.35 }}>
              <div style={{ color: "#9db2ce", fontSize: ".75rem", marginBottom: 6 }}>another-agency.pk</div>
              <div style={{ height: 9, width: "55%", background: "rgba(255,255,255,.18)", borderRadius: 99 }} />
            </div>
          </div>
          <div className="float-badge" style={{ top: "-4%", right: "2%" }}><span className="dot" />Traffic ↑ 340%</div>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>SEO Services</span>
          <h2 className="section-title">Every Layer of SEO, Covered</h2>
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
          <span className="eyebrow" style={{ justifyContent: "center" }}>SEO Process</span>
          <h2 className="section-title">The Journey to Page One</h2>
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
          <span className="eyebrow" style={{ justifyContent: "center" }}>SEO Dashboard</span>
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
        <div className="results-note">Verified search ranking and visibility benchmarks across Sparke Avenue client campaigns.</div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Why SEO</span>
          <h2 className="section-title">Why It&apos;s Worth Doing Right</h2>
        </div>
        <div className="benefit-grid">
          {WHY_SEO.map((w) => (
            <div className="benefit-chip reveal" key={w}><h4>{w}</h4></div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section id="case-study" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Featured Case Study</span>
          <h2 className="section-title">Organic Search Domination</h2>
          <p>How technical and local SEO drove high-value inbound B2B inquiries.</p>
        </div>
        <div className="case-study-card reveal">
          <div>
            <span className="eyebrow">Azmat Cables &amp; Waheed Jewellers</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "#fff", marginBottom: 12 }}>
              B2B Industrial &amp; Local High-Intent Search Authority
            </h3>
            <p style={{ color: "var(--muted)", fontSize: ".95rem", lineHeight: 1.6, marginBottom: 24 }}>
              Sparke Avenue implemented comprehensive technical SEO, high-intent product schema, and Google Business Profile optimization, ranking core cable and jewelry keywords in top positions.
            </p>
            <div className="case-meta">
              <div><b>#1</b><span>Google Ranking</span></div>
              <div><b>+240%</b><span>Organic Traffic</span></div>
              <div><b>340%</b><span>Inquiry Increase</span></div>
              <div><b>5.0★</b><span>Google Rating</span></div>
            </div>
            <a href="/#contact" className="btn">Get an SEO Audit →</a>
          </div>
          <div className="case-visual-badge">
            <div className="brand-card-logo-frame" style={{ margin: "0 auto 14px", width: 80, height: 80 }}>
              <img src="/portfolio/azmat-cables.png" alt="Azmat Cables" />
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", color: "var(--spark)", textTransform: "uppercase", letterSpacing: 1 }}>
                SEO Deliverables
              </span>
              <h4 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "1.05rem", marginTop: 4 }}>
                Technical Fixes, Catalog Schema &amp; Local Pack
              </h4>
            </div>
          </div>
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
        <span className="eyebrow" style={{ justifyContent: "center" }}>Ready?</span>
        <h2>Ready to be seen?</h2>
        <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 40px" }}>
          Tell us about your business and let&apos;s create an SEO strategy built around your goals.
        </p>
        <InquiryForm serviceName="SEO Services" extraLabel="Website" extraPlaceholder="Your Website URL" />
      </section>

      <SiteFooter />
    </>
  );
}
