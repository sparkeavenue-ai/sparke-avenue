"use client";

import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import AmbientBackground from "../components/AmbientBackground";
import InquiryForm from "../components/InquiryForm";
import useScrollReveal from "../components/useScrollReveal";
import useMouseGlow from "../components/useMouseGlow";
import Icon from "../components/Icon";

const CHANNELS = [
  {
    icon: "phone", title: "Call / WhatsApp",
    value: "+92 314 4083350", href: "https://wa.me/923144083350",
    desc: "Fastest response — usually within hours.",
  },
  {
    icon: "mail", title: "Email",
    value: "info@sparkeavenue.com", href: "mailto:info@sparkeavenue.com",
    desc: "For proposals, partnerships and press.",
  },
  {
    icon: "instagram", title: "Instagram",
    value: "@sparkeavenue", href: "https://www.instagram.com/sparkeavenue",
    desc: "Behind-the-scenes and latest work.",
  },
  {
    icon: "facebook", title: "Facebook",
    value: "/sparkeavenue", href: "https://www.facebook.com/share/1FAhyJD6xb/",
    desc: "Updates, reels and client stories.",
  },
  {
    icon: "linkedin", title: "LinkedIn",
    value: "Sparke Avenue", href: "https://www.linkedin.com/company/144785010",
    desc: "B2B insights and company news.",
  },
  {
    icon: "location", title: "Office",
    value: "Walled City, Lahore", href: null,
    desc: "Serving clients across Pakistan and worldwide.",
  },
];

export default function ContactPage() {
  useScrollReveal();
  const glowRef = useMouseGlow();

  return (
    <>
      <AmbientBackground />
      <div className="mouse-glow" ref={glowRef} />
      <SiteNav />

      <section className="svc-hero section">
        <div className="svc-hero-copy">
          <span className="eyebrow">Get In Touch</span>
          <h1 className="reveal in">Let&apos;s build your growth story.</h1>
          <p>Tell us about your business — we&apos;ll bring the strategy, creative and firepower. Reach out on any channel below, or send an inquiry and we&apos;ll get back within 24 hours.</p>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Direct Channels</span>
          <h2 className="section-title">Pick Your Channel</h2>
        </div>
        <div className="svc-grid">
          {CHANNELS.map((c) => (
            <div className="svc-card reveal" key={c.title}>
              <div className="icon-chip"><Icon name={c.icon} /></div>
              <h3>{c.title}</h3>
              {c.href ? (
                <a href={c.href} target="_blank" rel="noreferrer" style={{ color: "var(--spark)", fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}>
                  {c.value}
                </a>
              ) : (
                <p style={{ color: "#fff", fontWeight: 600, fontSize: "1rem" }}>{c.value}</p>
              )}
              <p style={{ marginTop: 8 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Send An Inquiry</span>
          <h2 className="section-title">Tell Us About Your Project</h2>
          <p style={{ color: "var(--muted)", maxWidth: 600, margin: "16px auto 0" }}>
            Fill this in and we&apos;ll respond within 24 hours with honest next steps — no pushy sales calls.
          </p>
        </div>
        <div className="reveal" style={{ maxWidth: 680, margin: "0 auto" }}>
          <InquiryForm serviceName="Contact Page Inquiry" extraLabel="Website" extraPlaceholder="Your Website URL" />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
