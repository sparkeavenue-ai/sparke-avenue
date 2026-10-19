"use client";

import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import AmbientBackground from "../components/AmbientBackground";
import InquiryForm from "../components/InquiryForm";
import Counter from "../components/Counter";
import useScrollReveal from "../components/useScrollReveal";
import useMouseGlow from "../components/useMouseGlow";
import Icon from "../components/Icon";

const PILLARS = [
  { icon: "compass", title: "Strategic Architecture", desc: "No generic packages. Every media plan and digital funnel is engineered specifically for your unit economics and target demographic." },
  { icon: "palette", title: "Scroll-Stopping Creative", desc: "We marry premium aesthetics with direct-response psychology so your creative captures attention and drives conversions." },
  { icon: "trending", title: "Full-Funnel Ownership", desc: "From top-of-funnel awareness to post-purchase retention, our integrated team handles everything end-to-end." },
];

const STATS = [
  { value: 50, suffix: "M+", label: "Impressions Generated" },
  { value: 8, suffix: "", label: "Marketing Disciplines" },
  { value: 13, suffix: "", label: "Website Pages Live" },
  { value: 100, suffix: "%", label: "Full-Funnel Coverage" },
];

const TEAM = [
  { initials: "MS", role: "Chief Executive", name: "Muhammad Saad", desc: "Five years running digital growth for direct-to-consumer and enterprise brands before launching Sparke Avenue in 2026. Directly oversees media architecture." },
  { initials: "HM", role: "Head of Strategy", name: "Hannan Munir", desc: "Leads discovery, market intelligence, and multichannel media allocation with deep expertise in attribution models and conversion funnels." },
  { initials: "KA", role: "Creative Director", name: "Kamran Abid", desc: "Directs brand identity, content studio, and video creative. Formerly built and scaled creative engines for high-growth consumer startups." },
];

const TIMELINE = [
  { year: "2026", title: "Sparke Avenue Launches", desc: "Founded in Lahore, Pakistan with a single belief — ambitious brands deserve marketing as ambitious as they are." },
  { year: "2026", title: "Full-Funnel Practice", desc: "Eight disciplines under one roof: SEO, performance marketing, social media, branding, web development, content, e-commerce and digital strategy." },
  { year: "Today", title: "Scaling With Partners", desc: "50M+ impressions generated across client campaigns — and a team obsessed with turning attention into revenue." },
];

export default function AboutPage() {
  useScrollReveal();
  const glowRef = useMouseGlow();

  return (
    <>
      <AmbientBackground />
      <div className="mouse-glow" ref={glowRef} />
      <SiteNav />

      <section className="svc-hero section">
        <div className="svc-hero-copy">
          <span className="eyebrow">About Sparke Avenue</span>
          <h1 className="reveal in">The digital marketing company behind ambitious brands.</h1>
          <p>Sparke Avenue is a full-service digital marketing agency based in Lahore, Pakistan — built for businesses that demand more than traditional agencies deliver.</p>
          <div className="cta-row">
            <a href="/#contact" className="btn">Work With Us →</a>
            <a href="/#portfolio" className="btn-outline">See Our Work</a>
          </div>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Our Story</span>
          <h2 className="section-title">Create. Connect. Grow.</h2>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p className="reveal" style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 20 }}>
            Sparke Avenue was founded in 2026 in Lahore, Pakistan, on a simple observation: most agencies sell activity — reports, impressions, jargon. Few sell outcomes. We built the agency we always wished existed as clients: one that treats your budget like its own money, measures everything in revenue, and owns the full funnel instead of handing you fragments.
          </p>
          <p className="reveal" style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 20 }}>
            Today we unite commercial strategy, premium creative, and conversion-first engineering — helping brands show up with clarity and authority across every digital touchpoint, from Google search to Instagram reels to the checkout page.
          </p>
          <p className="reveal" style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Our name says it all. <b style={{ color: "#fff" }}>Create</b> work worth noticing. <b style={{ color: "#fff" }}>Connect</b> it to the right audience. <b style={{ color: "#fff" }}>Grow</b> what matters — your business.
          </p>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Milestones</span>
          <h2 className="section-title">The Journey So Far</h2>
        </div>
        <div className="timeline">
          {TIMELINE.map((t) => (
            <div className="timeline-item reveal" key={t.title}>
              <div className="timeline-num">{t.year}</div>
              <div><h4>{t.title}</h4><p>{t.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>By The Numbers</span>
          <h2 className="section-title">Proof, Not Promises</h2>
        </div>
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
          <span className="eyebrow" style={{ justifyContent: "center" }}>How We Work</span>
          <h2 className="section-title">Three Pillars, One Obsession: Results</h2>
        </div>
        <div className="svc-grid">
          {PILLARS.map((p) => (
            <div className="svc-card reveal" key={p.title}>
              <div className="icon-chip"><Icon name={p.icon} /></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Meet The Team</span>
          <h2 className="section-title">The People Behind Sparke Avenue</h2>
          <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto" }}>A compact senior team — no account-manager telephone games. You work directly with the people doing the work.</p>
        </div>
        <div className="team-grid">
          {TEAM.map((t) => (
            <div className="team-card reveal" key={t.name}>
              <div className="team-avatar">{t.initials}</div>
              <div className="role">{t.role}</div>
              <h4>{t.name}</h4>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta reveal">
        <span className="eyebrow" style={{ justifyContent: "center" }}>Ready?</span>
        <h2>Let's build your growth story.</h2>
        <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 40px" }}>
          Tell us about your business — we'll bring the strategy, creative and firepower.
        </p>
        <InquiryForm serviceName="About Page Inquiry" extraLabel="Website" extraPlaceholder="Your Website URL" />
      </section>

      <SiteFooter />
    </>
  );
}
