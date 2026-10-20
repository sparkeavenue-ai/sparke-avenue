"use client";

import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import AmbientBackground from "../../components/AmbientBackground";
import InquiryForm from "../../components/InquiryForm";
import useScrollReveal from "../../components/useScrollReveal";
import useMouseGlow from "../../components/useMouseGlow";
import Icon from "../../components/Icon";

const WHAT_WE_DO = [
  { icon: "search", title: "Digital Audit", desc: "A full review of where your brand stands today." },
  { icon: "chart", title: "Market Research", desc: "Understanding your industry, audience and opportunity." },
  { icon: "eye", title: "Competitor Analysis", desc: "Learning from what's already working — and what isn't." },
  { icon: "target", title: "Audience Strategy", desc: "Defining exactly who you need to reach and how." },
  { icon: "signal", title: "Channel Strategy", desc: "Choosing the right mix of platforms for your goals." },
  { icon: "trending", title: "Growth Planning", desc: "A roadmap connecting today's efforts to long-term growth." },
];

const PROCESS = [
  { num: "01", title: "Discover", desc: "Understanding your business and current position." },
  { num: "02", title: "Analyze", desc: "Reviewing data, competitors and market context." },
  { num: "03", title: "Define", desc: "Setting clear, measurable goals." },
  { num: "04", title: "Plan", desc: "Building the strategic roadmap." },
  { num: "05", title: "Execute", desc: "Putting the strategy into action across channels." },
  { num: "06", title: "Optimize", desc: "Refining based on real results." },
];

const ECOSYSTEM_NODES = [
  { label: "Website", top: "8%", left: "40%" },
  { label: "SEO", top: "28%", left: "8%" },
  { label: "Social", top: "28%", left: "72%" },
  { label: "Content", top: "55%", left: "4%" },
  { label: "Paid Ads", top: "55%", left: "76%" },
  { label: "Analytics", top: "80%", left: "40%" },
];

const FRAMEWORK = ["Business Goals", "Audience", "Positioning", "Channels", "Campaigns", "Measurement"];
const BENEFITS = [
  { icon: "compass", title: "Strategic" },
  { icon: "chart", title: "Data-Driven" },
  { icon: "link", title: "Integrated" },
  { icon: "trending", title: "Growth-Focused" },
];

export default function DigitalStrategyPage() {
  useScrollReveal();
  const glowRef = useMouseGlow();

  return (
    <>
      <AmbientBackground />
      <div className="mouse-glow" ref={glowRef} />
      <SiteNav />

      <section className="svc-hero section">
        <div className="svc-hero-copy">
          <span className="eyebrow">Digital Strategy</span>
          <h1 className="reveal in">A smarter strategy for sustainable growth.</h1>
          <p>Data-driven digital strategy that connects your brand, audience, channels and goals into one growth system.</p>
          <div className="cta-row">
            <a href="/#contact" className="btn">Build My Strategy</a>
            <a href="#ecosystem" className="btn-outline">Explore Our Approach</a>
          </div>
        </div>
        <div className="svc-visual reveal">
          <div style={{ background: "linear-gradient(160deg, rgba(255,255,255,.07), rgba(255,255,255,.02))", border: "1px solid rgba(255,255,255,.12)", borderRadius: 20, padding: 22, boxShadow: "0 30px 60px rgba(0,0,0,.35)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <span style={{ color: "#fff", fontWeight: 700 }}>Full-Funnel Strategy</span>
              <span style={{ background: "rgba(255,171,64,.15)", color: "#ffab40", border: "1px solid rgba(255,171,64,.4)", borderRadius: 999, padding: "3px 10px", fontSize: ".7rem", fontWeight: 700 }}>90-DAY PLAN</span>
            </div>
            <div style={{ display: "grid", gap: 8, justifyItems: "center" }}>
              <div style={{ width: "100%", background: "linear-gradient(90deg, #38bdf8, #0ea5e9)", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center" }}><span style={{ fontSize: ".82rem", fontWeight: 700, color: "#082f49" }}>👁️ AWARENESS</span><b style={{ marginLeft: "auto", color: "#082f49" }}>1.2M reach</b></div>
              <div style={{ color: "var(--muted)", fontSize: ".7rem" }}>▼ 7% convert</div>
              <div style={{ width: "82%", background: "linear-gradient(90deg, #a855f7, #9333ea)", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center" }}><span style={{ fontSize: ".82rem", fontWeight: 700, color: "#fff" }}>🔍 CONSIDERATION</span><b style={{ marginLeft: "auto", color: "#fff" }}>84K visits</b></div>
              <div style={{ color: "var(--muted)", fontSize: ".7rem" }}>▼ 15% convert</div>
              <div style={{ width: "64%", background: "linear-gradient(90deg, #ff7847, #f97316)", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center" }}><span style={{ fontSize: ".82rem", fontWeight: 700, color: "#431407" }}>💬 LEADS</span><b style={{ marginLeft: "auto", color: "#431407" }}>12.4K</b></div>
              <div style={{ color: "var(--muted)", fontSize: ".7rem" }}>▼ 23% convert</div>
              <div style={{ width: "46%", background: "linear-gradient(90deg, #ffab40, #f59e0b)", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center" }}><span style={{ fontSize: ".82rem", fontWeight: 700, color: "#451a03" }}>🛒 SALES</span><b style={{ marginLeft: "auto", color: "#451a03" }}>2,860</b></div>
            </div>
          </div>
          <div className="float-badge" style={{ top: "-4%", right: "2%" }}><span className="dot" />Har step measurable</div>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>What We Do</span>
          <h2 className="section-title">The Full Strategic Picture</h2>
        </div>
        <div className="svc-grid">
          {WHAT_WE_DO.map((s) => (
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
          <span className="eyebrow" style={{ justifyContent: "center" }}>Strategy Process</span>
          <h2 className="section-title">How the Strategy Comes Together</h2>
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

      <section id="ecosystem" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Digital Ecosystem</span>
          <h2 className="section-title">Every Channel, Working Together</h2>
          <p>Website + SEO + Social + Content + Paid Ads + Analytics — one connected system.</p>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Strategic Framework</span>
          <h2 className="section-title">From Goals to Measurement</h2>
        </div>
        <div className="funnel reveal">
          {FRAMEWORK.map((f, i) => (
            <div key={f} style={{ display: "contents" }}>
              <div className="funnel-step">{f}</div>
              {i < FRAMEWORK.length - 1 && <div className="funnel-arrow">↓</div>}
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section id="case-study" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Featured Case Study</span>
          <h2 className="section-title">Institutional Leadership &amp; Campaign Strategy</h2>
          <p>How a unified digital roadmap delivered a historic electoral outcome for FPUL Alliance.</p>
        </div>
        <div className="case-study-card reveal">
          <div>
            <span className="eyebrow">FPUL Alliance — Lahore Chamber of Commerce (LCCI)</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "#fff", marginBottom: 12 }}>
              Multi-Stakeholder Campaign Strategy &amp; Digital PR
            </h3>
            <p style={{ color: "var(--muted)", fontSize: ".95rem", lineHeight: 1.6, marginBottom: 24 }}>
              Sparke Avenue orchestrated a high-stakes campaign combining executive video interviews, targeted WhatsApp broadcast outreach, digital PR, and convention branding to unify 25+ industry trade sectors.
            </p>
            <div className="case-meta">
              <div><b>Record</b><span>Voter Turnout &amp; Win</span></div>
              <div><b>25+</b><span>Sectors Reached</span></div>
              <div><b>1.5M+</b><span>Digital PR Reach</span></div>
              <div><b>100%</b><span>Cohesive Message</span></div>
            </div>
            <a href="/#contact" className="btn">Plan Your Strategy →</a>
          </div>
          <div className="case-visual-badge">
            <div className="brand-card-logo-frame" style={{ margin: "0 auto 14px", width: 80, height: 80 }}>
              <img src="/portfolio/fpul-alliance.png" alt="FPUL Alliance" />
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", color: "var(--spark)", textTransform: "uppercase", letterSpacing: 1 }}>
                Strategic Scope
              </span>
              <h4 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "1.05rem", marginTop: 4 }}>
                Executive PR, Digital Media &amp; Voter Outreach
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
        <span className="eyebrow" style={{ justifyContent: "center" }}>Let&apos;s Talk</span>
        <h2>Let&apos;s build your growth strategy.</h2>
        <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 40px" }}>
          Tell us about your business, challenges and goals. We&apos;ll help shape the right digital direction.
        </p>
        <InquiryForm serviceName="Digital Strategy" extraLabel="Business Name" extraPlaceholder="Your Business Name" />
      </section>

      <SiteFooter />
    </>
  );
}
