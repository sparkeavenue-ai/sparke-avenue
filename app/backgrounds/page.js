/* Background options preview — PREVIEW ONLY, not linked from the live site.
   Pick an option number and it can be applied to the real homepage. */

export const metadata = {
  title: "Background Options — Preview | Sparke Avenue",
  description: "Preview page showing background styles for the Sparke Avenue homepage.",
  robots: { index: false, follow: false },
};

const OPTIONS = [
  { id: "opt1", num: "Option 1", name: "Aurora Mesh", desc: "Slow-drifting colour clouds — amber, blue, violet. Modern agency feel, soft and premium." },
  { id: "opt2", num: "Option 2", name: "Glow Orbs + Grid", desc: "Current grid, upgraded — big soft glow orbs and a vignette. Familiar, but richer." },
  { id: "opt3", num: "Option 3", name: "Floating Shapes", desc: "Geometric shapes (rings, plus signs, dots) floating slowly. Playful, creative-agency energy." },
  { id: "opt4", num: "Option 4", name: "Dot Matrix + Beams", desc: "Halftone dot pattern with diagonal light beams. Sharp, techy, data-driven feel." },
  { id: "opt5", num: "Option 5", name: "Wave Flow", desc: "Layered waves flowing at the bottom, gradient sky above. Calm, growth-and-momentum feel." },
];

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
        <a href="#opt1" className="btn-outline">See Our Work</a>
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
        @keyframes auroraA { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(60px,-40px) scale(1.15); } 66% { transform: translate(-40px,30px) scale(.95); } }
        @keyframes auroraB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-70px,50px) scale(1.2); } }
        @keyframes auroraC { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(50px,-60px) scale(1.1); } }
        @keyframes orbPulse { 0%,100% { opacity:.55; transform: scale(1); } 50% { opacity:.85; transform: scale(1.12); } }
        @keyframes floatY { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-26px) rotate(8deg); } }
        @keyframes floatY2 { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(20px) rotate(-10deg); } }
        @keyframes beamMove { 0% { transform: translateX(-30%) skewX(-18deg); opacity:.0; } 15% { opacity:.5; } 50% { transform: translateX(30%) skewX(-18deg); opacity:.35; } 100% { transform: translateX(90%) skewX(-18deg); opacity:0; } }
        @keyframes waveMove { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes twinkle { 0%,100% { opacity:.15; } 50% { opacity:.8; } }
        .bg-opt { min-height: 100vh; padding: 110px 24px 70px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: center; }
        .bg-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 50; display: flex; gap: 8px; align-items: center; flex-wrap: wrap; padding: 12px 18px; background: rgba(10,14,23,.85); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255,255,255,.1); }
        .bg-nav a { color: #c7d0df; text-decoration: none; font-size: .82rem; border: 1px solid rgba(255,255,255,.14); border-radius: 999px; padding: 6px 13px; }
        .bg-nav a:hover { color: #fff; border-color: var(--spark); }
        .bg-nav b { color: #fff; font-size: .9rem; margin-right: 6px; }
      `}</style>

      <nav className="bg-nav">
        <b>Background options — preview only</b>
        {OPTIONS.map((o) => (
          <a key={o.id} href={`#${o.id}`}>{o.num}: {o.name}</a>
        ))}
        <span style={{ color: "#93a1b7", fontSize: ".78rem", marginLeft: "auto" }}>Live nahi hai — sirf dekhne ke liye</span>
      </nav>

      {/* OPTION 1 — Aurora Mesh */}
      <section id="opt1" className="bg-opt" style={{ background: "#0a0e17" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div style={{ position: "absolute", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,.5), transparent 65%)", filter: "blur(70px)", top: "-8%", left: "6%", animation: "auroraA 14s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 620, height: 620, borderRadius: "50%", background: "radial-gradient(circle, rgba(76,124,240,.45), transparent 65%)", filter: "blur(80px)", bottom: "-15%", right: "2%", animation: "auroraB 18s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,.4), transparent 65%)", filter: "blur(70px)", top: "30%", left: "42%", animation: "auroraC 16s ease-in-out infinite" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)" }} />
        </div>
        <OptionLabel {...OPTIONS[0]} />
        <HeroSample />
      </section>

      {/* OPTION 2 — Glow Orbs + Grid */}
      <section id="opt2" className="bg-opt" style={{ background: "#0a0e17" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,.55), transparent 60%)", filter: "blur(60px)", top: "4%", left: "12%", animation: "orbPulse 7s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,.5), transparent 60%)", filter: "blur(70px)", bottom: "0%", right: "8%", animation: "orbPulse 9s ease-in-out infinite" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 70% at 50% 45%, transparent 55%, rgba(10,14,23,.85) 100%)" }} />
        </div>
        <OptionLabel {...OPTIONS[1]} />
        <HeroSample />
      </section>

      {/* OPTION 3 — Floating Shapes */}
      <section id="opt3" className="bg-opt" style={{ background: "linear-gradient(180deg, #0a0e17, #0e1526 55%, #0a0e17)" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div style={{ position: "absolute", width: 120, height: 120, borderRadius: "50%", border: "2px solid rgba(245,158,11,.55)", top: "12%", left: "8%", animation: "floatY 8s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 60, height: 60, borderRadius: "50%", background: "rgba(56,189,248,.35)", top: "22%", right: "12%", animation: "floatY2 7s ease-in-out infinite" }} />
          <div style={{ position: "absolute", fontSize: "2.4rem", color: "rgba(245,158,11,.7)", top: "58%", left: "5%", animation: "floatY2 9s ease-in-out infinite" }}>+</div>
          <div style={{ position: "absolute", fontSize: "2rem", color: "rgba(168,85,247,.7)", top: "16%", right: "26%", animation: "floatY 10s ease-in-out infinite" }}>+</div>
          <div style={{ position: "absolute", width: 0, height: 0, borderLeft: "26px solid transparent", borderRight: "26px solid transparent", borderBottom: "44px solid rgba(56,189,248,.3)", bottom: "18%", right: "18%", animation: "floatY 8s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 170, height: 170, borderRadius: "50%", border: "2px dashed rgba(255,255,255,.22)", bottom: "8%", left: "14%", animation: "floatY2 11s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 14, height: 14, borderRadius: "50%", background: "#f59e0b", top: "44%", left: "22%", animation: "twinkle 3s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 10, height: 10, borderRadius: "50%", background: "#38bdf8", top: "68%", right: "30%", animation: "twinkle 4s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,.28), transparent 65%)", filter: "blur(40px)", top: "30%", left: "38%" }} />
        </div>
        <OptionLabel {...OPTIONS[2]} />
        <HeroSample />
      </section>

      {/* OPTION 4 — Dot Matrix + Beams */}
      <section id="opt4" className="bg-opt" style={{ background: "#0a0e17" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.16) 1.2px, transparent 1.2px)", backgroundSize: "22px 22px", maskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 30%, transparent 75%)" }} />
          <div style={{ position: "absolute", top: "-10%", bottom: "-10%", width: 180, background: "linear-gradient(90deg, transparent, rgba(245,158,11,.14), transparent)", left: "18%", animation: "beamMove 9s ease-in-out infinite" }} />
          <div style={{ position: "absolute", top: "-10%", bottom: "-10%", width: 140, background: "linear-gradient(90deg, transparent, rgba(56,189,248,.12), transparent)", left: "58%", animation: "beamMove 12s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(76,124,240,.3), transparent 65%)", filter: "blur(70px)", top: "20%", left: "30%" }} />
        </div>
        <OptionLabel {...OPTIONS[3]} />
        <HeroSample />
      </section>

      {/* OPTION 5 — Wave Flow */}
      <section id="opt5" className="bg-opt" style={{ background: "linear-gradient(180deg, #0b1020 0%, #0d1b33 55%, #0a0e17 100%)" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div style={{ position: "absolute", width: 8, height: 8, borderRadius: "50%", background: "#fff", top: "12%", left: "15%", animation: "twinkle 3.5s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 6, height: 6, borderRadius: "50%", background: "#fff", top: "22%", right: "20%", animation: "twinkle 4.5s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 5, height: 5, borderRadius: "50%", background: "#ffab40", top: "30%", left: "32%", animation: "twinkle 3s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,.35), transparent 65%)", filter: "blur(70px)", top: "8%", right: "10%" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 260, overflow: "hidden" }}>
            <div style={{ display: "flex", width: "200%", animation: "waveMove 14s linear infinite" }}>
              <svg width="100%" height="260" viewBox="0 0 1200 260" preserveAspectRatio="none" style={{ flexShrink: 0 }}>
                <path d="M0,120 C200,60 400,180 600,120 C800,60 1000,180 1200,120 L1200,260 L0,260 Z" fill="rgba(76,124,240,.22)" />
                <path d="M0,170 C200,120 400,220 600,170 C800,120 1000,220 1200,170 L1200,260 L0,260 Z" fill="rgba(245,158,11,.28)" />
              </svg>
              <svg width="100%" height="260" viewBox="0 0 1200 260" preserveAspectRatio="none" style={{ flexShrink: 0 }}>
                <path d="M0,120 C200,60 400,180 600,120 C800,60 1000,180 1200,120 L1200,260 L0,260 Z" fill="rgba(76,124,240,.22)" />
                <path d="M0,170 C200,120 400,220 600,170 C800,120 1000,220 1200,170 L1200,260 L0,260 Z" fill="rgba(245,158,11,.28)" />
              </svg>
            </div>
          </div>
        </div>
        <OptionLabel {...OPTIONS[4]} />
        <HeroSample />
      </section>

      <footer style={{ textAlign: "center", padding: "34px 20px 44px", color: "#93a1b7", fontSize: ".9rem", borderTop: "1px solid rgba(255,255,255,.08)" }}>
        Preview only — koi option pasand aaye to number bata do, main usay homepage par laga dunga. Live kuch nahi hua.
      </footer>
    </main>
  );
}
