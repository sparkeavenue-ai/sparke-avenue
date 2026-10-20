"use client";

import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import AmbientBackground from "../../components/AmbientBackground";
import InquiryForm from "../../components/InquiryForm";
import useScrollReveal from "../../components/useScrollReveal";
import useMouseGlow from "../../components/useMouseGlow";
import Icon from "../../components/Icon";

const WHAT_WE_CREATE = [
  { icon: "pen", title: "Copywriting", desc: "Words that sound like your brand and move people to act." },
  { icon: "phone", title: "Social Media Content", desc: "Posts built for how each platform actually works." },
  { icon: "video", title: "Reels", desc: "Short-form video made to be watched, not skipped." },
  { icon: "video", title: "Video Content", desc: "Longer-form video for stories that need more room." },
  { icon: "rocket", title: "Creative Campaigns", desc: "Concept-driven content for key launches and moments." },
  { icon: "image", title: "Visual Content", desc: "Graphics and imagery that reinforce your message." },
];

const PROCESS = [
  { num: "01", title: "Research", desc: "Understanding your audience and what resonates with them." },
  { num: "02", title: "Concept", desc: "Developing ideas worth producing." },
  { num: "03", title: "Create", desc: "Producing the content itself." },
  { num: "04", title: "Review", desc: "Refining before anything goes live." },
  { num: "05", title: "Publish", desc: "Getting content out at the right time." },
  { num: "06", title: "Analyze", desc: "Learning from performance to inform the next piece." },
];

const ECOSYSTEM = ["Idea", "Script", "Design", "Publish", "Engage", "Analyze"];
const SHOWCASE = ["Social Posts", "Reels", "Campaigns", "Articles", "Video"];
const BENEFITS = [
  { icon: "palette", title: "Creative" },
  { icon: "compass", title: "Strategic" },
  { icon: "flame", title: "Engaging" },
  { icon: "target", title: "Platform-Focused" },
];

export default function ContentCreationPage() {
  useScrollReveal();
  const glowRef = useMouseGlow();

  return (
    <>
      <AmbientBackground />
      <div className="mouse-glow" ref={glowRef} />
      <SiteNav />

      <section className="svc-hero section">
        <div className="svc-hero-copy">
          <span className="eyebrow">Content Creation</span>
          <h1 className="reveal in">Content that earns attention.</h1>
          <p>Strategic copy, social content, reels and visual storytelling created to engage your audience.</p>
          <div className="cta-row">
            <a href="/#contact" className="btn">Create With Us</a>
            <a href="#showcase" className="btn-outline">View Our Content</a>
          </div>
        </div>
        <div className="svc-visual reveal"><div style={{ background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.02));border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:22px;backdropFilter:"blur(6px)";boxShadow:"0 30px 60px rgba(0,0,0,.35)" }}
            <div style={{ position: "relative", background: "linear-gradient(160deg,#a855f7,#ff7847 70%)", borderRadius: 16, padding: "30px 20px 20px", marginBottom: 14, overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 12, right: 14, background: "rgba(0,0,0,.45)", color: "#fff", borderRadius: 8, padding: "3px 9px", fontSize: ".7rem", fontWeight: 700 }}>▶ REEL</div>
              <div style={{ width: 58, height: 58, borderRadius: "50%", background: "rgba(255,255,255,.92)", display: "flex", alignItems: "center", justifyContent: "center", margin: "6px auto 16px" }}>
                <span style={{ color: "#12100c", fontSize: "1.2rem", marginLeft: 4 }}>▶</span>
              </div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", textAlign: "center", fontFamily: "var(--font-display)" }}>POV: Your ads finally convert 🎯</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16 }}>
                <span style={{ color: "#fff", fontSize: ".7rem" }}>0:07</span>
                <div style={{ flex: 1, height: 4, borderRadius: 99, background: "rgba(255,255,255,.35)" }}><div style={{ width: "38%", height: "100%", borderRadius: 99, background: "#fff" }} /></div>
                <span style={{ color: "rgba(255,255,255,.8)", fontSize: ".7rem" }}>0:18</span>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
              <div><div style={{ fontSize: "1rem" }}>❤️</div><div style={{ color: "var(--muted)", fontSize: ".7rem", marginTop: 2 }}>48.2k</div></div>
              <div><div style={{ fontSize: "1rem" }}>💬</div><div style={{ color: "var(--muted)", fontSize: ".7rem", marginTop: 2 }}>1,204</div></div>
              <div><div style={{ fontSize: "1rem" }}>🔄</div><div style={{ color: "var(--muted)", fontSize: ".7rem", marginTop: 2 }}>3,860</div></div>
              <div><div style={{ fontSize: "1rem" }}>👁️</div><div style={{ color: "var(--muted)", fontSize: ".7rem", marginTop: 2 }}>212k</div></div>
            </div>
          </div>
          <div className="float-badge" style={{ top: "-4%", right: "2%" }}><span className="dot" />Reel Ready</div>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>What We Create</span>
          <h2 className="section-title">Content For Every Format</h2>
        </div>
        <div className="svc-grid">
          {WHAT_WE_CREATE.map((s) => (
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
          <span className="eyebrow" style={{ justifyContent: "center" }}>Content Process</span>
          <h2 className="section-title">From Idea to Impact</h2>
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
          <span className="eyebrow" style={{ justifyContent: "center" }}>Content Ecosystem</span>
          <h2 className="section-title">The Full Content Flow</h2>
        </div>
        <div className="flow-row reveal">
          {ECOSYSTEM.map((c, i) => (
            <span key={c} style={{ display: "contents" }}>
              <span className="flow-step">{c}</span>
              {i < ECOSYSTEM.length - 1 && <span className="flow-sep">→</span>}
            </span>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section id="showcase" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Content Showcase</span>
          <h2 className="section-title">Creative Work That Performs</h2>
        </div>
        <div className="showcase-grid">
          {[
            {
              name: "Majid Silver & Gold Collection",
              logo: "/portfolio/majid-silver.png",
              tag: "4K Macro Video & Reels",
              desc: "Close-up diamond-finish jewelry reels, viral audio syncing, and lifestyle unboxings generating 2.9M+ views.",
            },
            {
              name: "Zarnoor Collection",
              logo: "/portfolio/zarnoor-collection.png",
              tag: "UGC & Direct-Response Video Ads",
              desc: "Scroll-stopping TikTok & Instagram video hooks showcasing handbag collections and customer testimonials.",
            },
            {
              name: "Jewellista.pk",
              logo: "/portfolio/jewellista.png",
              tag: "High-Fashion Editorial & Copy",
              desc: "Luxury bridal jewelry catalog copywriting, editorial studio photography, and VIP seasonal launch campaigns.",
            },
          ].map((s, i) => (
            <div className="showcase-card reveal" key={i}>
              <div className="showcase-logo-thumb" style={{ padding: "26px 0 10px" }}>
                <div className="brand-card-logo-frame" style={{ width: 76, height: 76, margin: "0 auto" }}>
                  <img src={s.logo} alt={s.name} />
                </div>
              </div>
              <div className="showcase-body">
                <span className="sc-tag">{s.tag}</span>
                <h4>{s.name}</h4>
                <p>{s.desc}</p>
                <a href="/#contact" style={{ display: "inline-block", marginTop: 12 }}>View Case Study →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Creative Impact</span>
          <h2 className="section-title">What High-End Content Delivers</h2>
        </div>
        <div className="benefit-grid">
          {["Viral Reach", "High Engagement", "2.9M+ Video Views", "Direct Conversions"].map((m) => (
            <div className="benefit-chip reveal" key={m}><h4>{m}</h4></div>
          ))}
        </div>
        <div className="results-note">Verified in-house production metrics across Sparke Avenue creative studio accounts.</div>
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
        <h2>Have an idea? Let&apos;s turn it into content.</h2>
        <InquiryForm serviceName="Content Creation" extraLabel="Content Type" extraPlaceholder="Content Type (e.g. Reels, Copywriting)" />
      </section>

      <SiteFooter />
    </>
  );
}
