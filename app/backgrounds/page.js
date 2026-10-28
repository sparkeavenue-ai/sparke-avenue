/* Background options preview v2 — social icons + marketing charts.
   PREVIEW ONLY, not linked from the live site. Pick an option number and it
   can be applied to the real homepage. */

import Icon from "../components/Icon";

export const metadata = {
  title: "Background Options — Social & Charts | Sparke Avenue",
  description: "Preview page showing background styles with social media icons and marketing charts for the Sparke Avenue homepage.",
  robots: { index: false, follow: false },
};

const OPTIONS = [
  { id: "opt1", num: "Option 1", name: "Icon Orbit + Growth Line", desc: "Social icons float around the hero, a soft growth line rises behind. Clean and premium." },
  { id: "opt2", num: "Option 2", name: "Dashboard Cards", desc: "Floating analytics cards — bars, donut, line chart, followers — with social icons on each." },
  { id: "opt3", num: "Option 3", name: "Chart Skyline", desc: "A rising bar chart builds across the bottom, social bubbles float above it." },
  { id: "opt4", num: "Option 4", name: "Social Tiled Grid", desc: "Faint social icons tiled across the background, with a chart strip at the bottom." },
  { id: "opt5", num: "Option 5", name: "Rings + Metrics", desc: "Concentric rings with social icons on them, plus ROAS / Reach / Leads metric chips." },
  { id: "opt6", num: "Option 6", name: "Ticker Tape + Area Chart", desc: "Scrolling social ticker strips top and bottom, soft area chart behind the hero." },
];

/* ---------- small building blocks ---------- */

function SocChip({ name, size = 54, bg = "rgba(255,255,255,.07)", border = "rgba(255,255,255,.16)", color = "#fff", style = {}, glyph }) {
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: bg, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", color, boxShadow: "0 12px 30px rgba(0,0,0,.35)", flexShrink: 0, ...style }}>
      {glyph || <Icon name={name} size={Math.round(size * 0.48)} />}
    </div>
  );
}

function XGlyph({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

function TikTokGlyph({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 3c.4 2.3 1.9 3.8 4.4 4v3.1c-1.7 0-3.2-.5-4.4-1.4v6.6c0 3.4-2.6 5.7-5.9 5.7A5.6 5.6 0 0 1 5 15.4c0-3.2 2.6-5.6 5.8-5.6.3 0 .7 0 1 .1v3.2c-.3-.1-.6-.2-1-.2-1.5 0-2.7 1.1-2.7 2.5s1.2 2.6 2.7 2.6c1.6 0 2.8-1.2 2.8-2.8V3h3z" />
    </svg>
  );
}

function YTGlyph({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8zM10 15.2V8.8L15.5 12 10 15.2z" />
    </svg>
  );
}

function MiniBars({ heights = [35, 55, 42, 70, 58, 88, 100], color = "#f59e0b", style = {} }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 64, ...style }}>
      {heights.map((h, i) => (
        <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "4px 4px 0 0", background: i === heights.length - 1 ? `linear-gradient(180deg, #ffab40, #ff7847)` : color, opacity: i === heights.length - 1 ? 1 : 0.55 + (i / heights.length) * 0.4 }} />
      ))}
    </div>
  );
}

function MiniLine({ id, stroke = "#38bdf8", style = {} }) {
  return (
    <svg viewBox="0 0 220 70" style={{ width: "100%", height: 70, ...style }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity=".35" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,58 L30,50 L60,54 L90,38 L120,42 L150,24 L180,28 L220,8 L220,70 L0,70 Z" fill={`url(#${id})`} />
      <path d="M0,58 L30,50 L60,54 L90,38 L120,42 L150,24 L180,28 L220,8" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="220" cy="8" r="4" fill={stroke} />
    </svg>
  );
}

function Donut({ value = 78, color = "#f59e0b" }) {
  const r = 26, c = 2 * Math.PI * r;
  return (
    <svg width="76" height="76" viewBox="0 0 76 76">
      <circle cx="38" cy="38" r={r} fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="8" />
      <circle cx="38" cy="38" r={r} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeDasharray={`${(value / 100) * c} ${c}`} transform="rotate(-90 38 38)" />
      <text x="38" y="42" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800">{value}%</text>
    </svg>
  );
}

function GlassCard({ children, style = {} }) {
  return (
    <div style={{ background: "rgba(16,21,43,.82)", border: "1px solid rgba(255,255,255,.13)", borderRadius: 16, padding: "14px 16px", boxShadow: "0 24px 50px rgba(0,0,0,.45)", backdropFilter: "blur(6px)", ...style }}>
      {children}
    </div>
  );
}

function CardTitle({ icon, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#c7d0df", fontSize: ".72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>
      <span style={{ color: "var(--spark)", display: "flex" }}><Icon name={icon} size={15} /></span>{text}
    </div>
  );
}

/* ---------- sample hero (same in every option) ---------- */

function HeroSample() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
      <span className="eyebrow" style={{ justifyContent: "center" }}>Digital Marketing &amp; Creative Agency</span>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.1rem, 5vw, 3.6rem)", lineHeight: 1.12, color: "#fff", margin: "18px 0 16px" }}>
        Digital Marketing Agency in Pakistan That <span style={{ color: "var(--spark)" }}>Ignites</span> Brands.
      </h1>
      <p style={{ color: "#c7d0df", fontSize: "1.05rem", lineHeight: 1.65, maxWidth: 640, margin: "0 auto 28px" }}>
        SEO, paid ads, social media, branding and websites — one team that turns attention into customers.
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="#opt1" className="btn">Start a Project →</a>
        <a href="#opt1" className="btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,.4)" }}>See Our Work</a>
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 30 }}>
        {["360° Growth", "8+ Services", "100% Free Consultation"].map((t) => (
          <span key={t} style={{ border: "1px solid rgba(255,255,255,.14)", background: "rgba(255,255,255,.05)", borderRadius: 999, padding: "7px 15px", fontSize: ".8rem", color: "#c7d0df" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function OptionLabel({ num, name, desc }) {
  return (
    <div style={{ position: "relative", zIndex: 3, maxWidth: 1100, margin: "0 auto 34px", display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
      <span style={{ background: "var(--spark)", color: "#170f02", fontWeight: 800, fontSize: ".8rem", borderRadius: 999, padding: "6px 14px", letterSpacing: 1 }}>{num}</span>
      <b style={{ color: "#fff", fontSize: "1.25rem", fontFamily: "var(--font-display)" }}>{name}</b>
      <span style={{ color: "#93a1b7", fontSize: ".9rem" }}>{desc}</span>
    </div>
  );
}

export default function BackgroundsPreview() {
  return (
    <main style={{ background: "#0a0e17", color: "#f3f5fa" }}>
      <style>{`
        @keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-18px); } }
        @keyframes floatY2 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(14px); } }
        @keyframes bobSlow { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-12px) rotate(2deg); } }
        @keyframes tickerMove { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes ringSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulseDot { 0%,100% { opacity:.5; } 50% { opacity:1; } }
        .bg-opt { min-height: 100vh; padding: 110px 24px 70px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: center; }
        .bg-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 50; display: flex; gap: 8px; align-items: center; flex-wrap: wrap; padding: 12px 18px; background: rgba(10,14,23,.88); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255,255,255,.1); }
        .bg-nav a { color: #c7d0df; text-decoration: none; font-size: .82rem; border: 1px solid rgba(255,255,255,.14); border-radius: 999px; padding: 6px 13px; }
        .bg-nav a:hover { color: #fff; border-color: var(--spark); }
        .bg-nav b { color: #fff; font-size: .9rem; margin-right: 6px; }
      `}</style>

      <nav className="bg-nav">
        <b>Background options — social + charts (preview only)</b>
        {OPTIONS.map((o) => (
          <a key={o.id} href={`#${o.id}`}>{o.num}: {o.name}</a>
        ))}
        <span style={{ color: "#93a1b7", fontSize: ".78rem", marginLeft: "auto" }}>Live nahi hai — sirf dekhne ke liye</span>
      </nav>

      {/* OPTION 1 — Icon Orbit + Growth Line */}
      <section id="opt1" className="bg-opt" style={{ background: "#0a0e17" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse 80% 65% at 50% 45%, black, transparent)" }} />
          <svg viewBox="0 0 1200 500" preserveAspectRatio="none" style={{ position: "absolute", left: 0, right: 0, bottom: "6%", width: "100%", height: 340, opacity: 0.5 }}>
            <defs><linearGradient id="o1g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f59e0b" stopOpacity=".28" /><stop offset="100%" stopColor="#f59e0b" stopOpacity="0" /></linearGradient></defs>
            <path d="M0,420 L150,360 L300,390 L450,280 L600,310 L750,190 L900,220 L1050,110 L1200,60 L1200,500 L0,500 Z" fill="url(#o1g)" />
            <path d="M0,420 L150,360 L300,390 L450,280 L600,310 L750,190 L900,220 L1050,110 L1200,60" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            <circle cx="1050" cy="110" r="6" fill="#f59e0b" />
          </svg>
          <SocChip name="instagram" bg="linear-gradient(135deg,#f58529,#dd2a7b,#8134af)" style={{ position: "absolute", top: "16%", left: "7%", animation: "floatY 7s ease-in-out infinite" }} />
          <SocChip name="facebook" bg="#1877f2" style={{ position: "absolute", top: "24%", right: "8%", animation: "floatY2 8s ease-in-out infinite" }} />
          <SocChip name="linkedin" bg="#0a66c2" size={46} style={{ position: "absolute", bottom: "20%", left: "12%", animation: "floatY2 9s ease-in-out infinite" }} />
          <SocChip bg="#111" glyph={<TikTokGlyph />} style={{ position: "absolute", bottom: "26%", right: "13%", animation: "floatY 7.5s ease-in-out infinite" }} />
          <SocChip name="whatsapp" bg="#25d366" size={46} style={{ position: "absolute", top: "52%", left: "4%", animation: "floatY 8.5s ease-in-out infinite" }} />
          <SocChip bg="#ff0000" glyph={<YTGlyph />} size={46} style={{ position: "absolute", top: "48%", right: "4%", animation: "floatY2 8s ease-in-out infinite" }} />
        </div>
        <OptionLabel {...OPTIONS[0]} />
        <HeroSample />
      </section>

      {/* OPTION 2 — Dashboard Cards */}
      <section id="opt2" className="bg-opt" style={{ background: "#0a0e17" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          <div style={{ position: "absolute", width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle, rgba(76,124,240,.3), transparent 65%)", filter: "blur(70px)", top: "10%", left: "30%" }} />
          <GlassCard style={{ position: "absolute", top: "15%", left: "5%", width: 210, animation: "bobSlow 8s ease-in-out infinite" }}>
            <CardTitle icon="chart" text="Monthly Reach" />
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}><b style={{ color: "#fff", fontSize: "1.5rem" }}>128.4K</b><span style={{ color: "#7dd87d", fontSize: ".78rem", fontWeight: 700 }}>+312%</span></div>
            <MiniBars />
            <div style={{ display: "flex", gap: 6, marginTop: 10 }}><SocChip name="instagram" size={26} bg="linear-gradient(135deg,#f58529,#dd2a7b,#8134af)" /><SocChip name="facebook" size={26} bg="#1877f2" /><SocChip bg="#111" size={26} glyph={<TikTokGlyph size={12} />} /></div>
          </GlassCard>
          <GlassCard style={{ position: "absolute", top: "18%", right: "5%", width: 190, animation: "bobSlow 9s ease-in-out infinite" }}>
            <CardTitle icon="target" text="ROAS" />
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}><Donut value={78} /><div><b style={{ color: "#fff", fontSize: "1.3rem", display: "block" }}>4.8x</b><span style={{ color: "#93a1b7", fontSize: ".75rem" }}>avg. return on ad spend</span></div></div>
          </GlassCard>
          <GlassCard style={{ position: "absolute", bottom: "12%", left: "8%", width: 230, animation: "bobSlow 10s ease-in-out infinite" }}>
            <CardTitle icon="trending" text="Leads this month" />
            <MiniLine id="o2line" stroke="#38bdf8" />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}><span style={{ color: "#c7d0df", fontSize: ".78rem" }}><b style={{ color: "#fff" }}>1,284</b> leads</span><span style={{ color: "#7dd87d", fontSize: ".78rem", fontWeight: 700 }}>▲ 24%</span></div>
          </GlassCard>
          <GlassCard style={{ position: "absolute", bottom: "16%", right: "7%", width: 200, animation: "bobSlow 8.5s ease-in-out infinite" }}>
            <CardTitle icon="users" text="Followers" />
            <b style={{ color: "#fff", fontSize: "1.4rem" }}>86.2K</b>
            <span style={{ color: "#93a1b7", fontSize: ".78rem", display: "block", marginTop: 2 }}>across all platforms</span>
            <div style={{ display: "flex", gap: 6, marginTop: 10 }}><SocChip name="instagram" size={26} bg="linear-gradient(135deg,#f58529,#dd2a7b,#8134af)" /><SocChip name="linkedin" size={26} bg="#0a66c2" /><SocChip name="whatsapp" size={26} bg="#25d366" /><SocChip bg="#ff0000" size={26} glyph={<YTGlyph size={12} />} /></div>
          </GlassCard>
        </div>
        <OptionLabel {...OPTIONS[1]} />
        <HeroSample />
      </section>

      {/* OPTION 3 — Chart Skyline */}
      <section id="opt3" className="bg-opt" style={{ background: "linear-gradient(180deg, #0a0e17, #0d1526 70%, #0a0e17)" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 300, display: "flex", alignItems: "flex-end", gap: 10, padding: "0 6%", opacity: 0.85 }}>
            {[22, 34, 28, 46, 40, 58, 52, 70, 64, 84, 78, 96].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "10px 10px 0 0", background: i >= 9 ? "linear-gradient(180deg, #ffab40, #ff7847)" : "linear-gradient(180deg, rgba(76,124,240,.55), rgba(76,124,240,.18))" }} />
            ))}
          </div>
          <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ position: "absolute", left: 0, right: 0, bottom: 0, width: "100%", height: 300, opacity: 0.9 }}>
            <path d="M0,240 L150,200 L300,220 L450,150 L600,170 L750,100 L900,120 L1050,60 L1200,30" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="1050" cy="60" r="5" fill="#f59e0b" />
          </svg>
          <SocChip name="instagram" bg="linear-gradient(135deg,#f58529,#dd2a7b,#8134af)" style={{ position: "absolute", top: "18%", left: "10%", animation: "floatY 7s ease-in-out infinite" }} />
          <SocChip name="facebook" bg="#1877f2" style={{ position: "absolute", top: "30%", right: "10%", animation: "floatY2 8s ease-in-out infinite" }} />
          <SocChip bg="#111" glyph={<TikTokGlyph />} size={46} style={{ position: "absolute", top: "14%", right: "28%", animation: "floatY 9s ease-in-out infinite" }} />
          <SocChip name="linkedin" bg="#0a66c2" size={46} style={{ position: "absolute", top: "24%", left: "26%", animation: "floatY2 7.5s ease-in-out infinite" }} />
          <SocChip name="whatsapp" bg="#25d366" size={42} style={{ position: "absolute", bottom: "38%", right: "22%", animation: "floatY 8s ease-in-out infinite" }} />
        </div>
        <OptionLabel {...OPTIONS[2]} />
        <HeroSample />
      </section>

      {/* OPTION 4 — Social Tiled Grid */}
      <section id="opt4" className="bg-opt" style={{ background: "#0a0e17" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: "-40px", display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 26, opacity: 0.14, transform: "rotate(-4deg)" }}>
            {Array.from({ length: 40 }).map((_, i) => {
              const icons = ["instagram", "facebook", "linkedin", "whatsapp"];
              const glyphs = [null, null, null, null, "x", "tiktok", "yt"];
              const pick = glyphs[i % glyphs.length];
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                  {pick === "x" ? <XGlyph size={30} /> : pick === "tiktok" ? <TikTokGlyph size={28} /> : pick === "yt" ? <YTGlyph size={30} /> : <Icon name={icons[i % icons.length]} size={30} />}
                </div>
              );
            })}
          </div>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(10,14,23,.25), rgba(10,14,23,.88) 75%)" }} />
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 190, padding: "0 5%", display: "flex", alignItems: "flex-end", gap: 8 }}>
            {[30, 48, 38, 62, 52, 74, 66, 88, 80, 100].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "8px 8px 0 0", background: "linear-gradient(180deg, rgba(245,158,11,.75), rgba(245,158,11,.15))" }} />
            ))}
          </div>
        </div>
        <OptionLabel {...OPTIONS[3]} />
        <HeroSample />
      </section>

      {/* OPTION 5 — Rings + Metrics */}
      <section id="opt5" className="bg-opt" style={{ background: "#0a0e17" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "50%", top: "46%", width: 720, height: 720, transform: "translate(-50%,-50%)", borderRadius: "50%", border: "1.5px dashed rgba(255,255,255,.16)" }} />
          <div style={{ position: "absolute", left: "50%", top: "46%", width: 520, height: 520, transform: "translate(-50%,-50%)", borderRadius: "50%", border: "1.5px dashed rgba(245,158,11,.3)" }} />
          <div style={{ position: "absolute", left: "50%", top: "46%", width: 720, height: 720, transform: "translate(-50%,-50%)", animation: "ringSpin 60s linear infinite" }}>
            <div style={{ position: "absolute", top: -27, left: "50%", marginLeft: -27 }}><SocChip name="instagram" bg="linear-gradient(135deg,#f58529,#dd2a7b,#8134af)" /></div>
            <div style={{ position: "absolute", bottom: -27, left: "50%", marginLeft: -27 }}><SocChip name="facebook" bg="#1877f2" /></div>
            <div style={{ position: "absolute", top: "50%", left: -27, marginTop: -27 }}><SocChip bg="#111" glyph={<TikTokGlyph />} /></div>
            <div style={{ position: "absolute", top: "50%", right: -27, marginTop: -27 }}><SocChip name="linkedin" bg="#0a66c2" /></div>
          </div>
          <div style={{ position: "absolute", left: "50%", top: "46%", width: 520, height: 520, transform: "translate(-50%,-50%)", animation: "ringSpin 40s linear infinite reverse" }}>
            <div style={{ position: "absolute", top: -23, left: "50%", marginLeft: -23 }}><SocChip name="whatsapp" bg="#25d366" size={46} /></div>
            <div style={{ position: "absolute", bottom: -23, left: "50%", marginLeft: -23 }}><SocChip bg="#ff0000" glyph={<YTGlyph />} size={46} /></div>
            <div style={{ position: "absolute", top: "50%", left: -23, marginTop: -23 }}><SocChip bg="#111" glyph={<XGlyph />} size={46} /></div>
          </div>
          <div style={{ position: "absolute", top: "16%", left: "6%", animation: "floatY 8s ease-in-out infinite" }}>
            <GlassCard><span style={{ color: "#93a1b7", fontSize: ".72rem", letterSpacing: 1 }}>ROAS</span><b style={{ color: "#fff", fontSize: "1.35rem", display: "block" }}>4.8x</b></GlassCard>
          </div>
          <div style={{ position: "absolute", top: "20%", right: "6%", animation: "floatY2 9s ease-in-out infinite" }}>
            <GlassCard><span style={{ color: "#93a1b7", fontSize: ".72rem", letterSpacing: 1 }}>REACH</span><b style={{ color: "#fff", fontSize: "1.35rem", display: "block" }}>50M+</b></GlassCard>
          </div>
          <div style={{ position: "absolute", bottom: "14%", left: "10%", animation: "floatY2 8.5s ease-in-out infinite" }}>
            <GlassCard><span style={{ color: "#93a1b7", fontSize: ".72rem", letterSpacing: 1 }}>LEADS / MO</span><b style={{ color: "#fff", fontSize: "1.35rem", display: "block" }}>1,284</b></GlassCard>
          </div>
        </div>
        <OptionLabel {...OPTIONS[4]} />
        <HeroSample />
      </section>

      {/* OPTION 6 — Ticker Tape + Area Chart */}
      <section id="opt6" className="bg-opt" style={{ background: "#0a0e17" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <svg viewBox="0 0 1200 420" preserveAspectRatio="none" style={{ position: "absolute", left: 0, right: 0, top: "18%", width: "100%", height: 420, opacity: 0.55 }}>
            <defs><linearGradient id="o6g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#38bdf8" stopOpacity=".3" /><stop offset="100%" stopColor="#38bdf8" stopOpacity="0" /></linearGradient></defs>
            <path d="M0,340 L150,300 L300,320 L450,230 L600,260 L750,160 L900,190 L1050,90 L1200,50 L1200,420 L0,420 Z" fill="url(#o6g)" />
            <path d="M0,340 L150,300 L300,320 L450,230 L600,260 L750,160 L900,190 L1050,90 L1200,50" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
            <path d="M0,380 L150,350 L300,365 L450,300 L600,320 L750,250 L900,270 L1050,200 L1200,170" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" opacity=".8" />
          </svg>
          {["top: 9%", "bottom: 9%"].map((pos, k) => {
            const [key, val] = pos.split(": ");
            const stripStyle = { position: "absolute", left: 0, right: 0, [key]: val, overflow: "hidden", borderTop: "1px solid rgba(255,255,255,.1)", borderBottom: "1px solid rgba(255,255,255,.1)", background: "rgba(16,21,43,.6)", padding: "10px 0" };
            const items = [
              { icon: "instagram", label: "Instagram" }, { icon: "facebook", label: "Facebook" }, { glyph: "tiktok", label: "TikTok" }, { icon: "linkedin", label: "LinkedIn" }, { icon: "whatsapp", label: "WhatsApp" }, { glyph: "yt", label: "YouTube" }, { glyph: "x", label: "X" },
            ];
            const row = (key2) => (
              <div key={key2} style={{ display: "flex", gap: 34, alignItems: "center", flexShrink: 0, paddingRight: 34 }}>
                {items.map((it) => (
                  <span key={it.label} style={{ display: "flex", gap: 8, alignItems: "center", color: "#c7d0df", fontSize: ".85rem", fontWeight: 600, whiteSpace: "nowrap" }}>
                    <span style={{ color: "var(--spark)", display: "flex" }}>
                      {it.glyph === "tiktok" ? <TikTokGlyph size={16} /> : it.glyph === "yt" ? <YTGlyph size={16} /> : it.glyph === "x" ? <XGlyph size={15} /> : <Icon name={it.icon} size={16} />}
                    </span>{it.label}
                  </span>
                ))}
              </div>
            );
            return (
              <div key={k} style={stripStyle}>
                <div style={{ display: "flex", width: "max-content", animation: `tickerMove ${k === 0 ? 26 : 32}s linear infinite ${k === 1 ? "reverse" : ""}` }}>
                  {row("a")}{row("b")}
                </div>
              </div>
            );
          })}
        </div>
        <OptionLabel {...OPTIONS[5]} />
        <HeroSample />
      </section>

      <footer style={{ textAlign: "center", padding: "34px 20px 44px", color: "#93a1b7", fontSize: ".9rem", borderTop: "1px solid rgba(255,255,255,.08)" }}>
        Preview only — koi option pasand aaye to number bata do, main usay homepage par laga dunga. Live kuch nahi hua.
      </footer>
    </main>
  );
}
