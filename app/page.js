"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import AmbientBackground from "./components/AmbientBackground";
import BrandModal, { BRANDS_DATA } from "./components/BrandModal";
import Icon from "./components/Icon";
import { WHATSAPP_CONFIG } from "./config/whatsapp.js";
import { handleWhatsAppSubmit, sanitizeInput } from "./utils/whatsapp.js";

const SERVICES = [
  { tag: "ADS", icon: "target", title: "Performance Marketing", desc: "Targeted Meta & Google Ads campaigns designed to generate qualified leads, high-volume sales, and measurable ROAS.", featured: true, href: "/services/performance-marketing" },
  { tag: "WEB", icon: "layout", title: "Web Development", desc: "Modern, ultra-responsive and lightning-fast websites — from custom e-commerce stores to corporate digital portals.", href: "/services/web-development" },
  { tag: "SMM", icon: "users", title: "Social Media Marketing", desc: "Managing and growing authoritative presence across Instagram, Facebook, TikTok, and LinkedIn with viral content.", href: "/services/social-media-marketing" },
  { tag: "SEO", icon: "search", title: "SEO Services", desc: "On-page, technical, and local SEO to dominate organic search rankings and capture high-intent inbound search traffic.", href: "/services/seo-services" },
  { tag: "BRAND", icon: "palette", title: "Branding & Design", desc: "Memorable brand identities, distinctive logos, and cohesive design systems that command authority.", href: "/services/branding-design" },
  { tag: "CONTENT", icon: "video", title: "Content Creation", desc: "High-end copywriting, 4K video shoots, viral reels, and creative assets that captivate your audience.", href: "/services/content-creation" },
  { tag: "ECOM", icon: "cart", title: "E-Commerce Marketing", desc: "Full-funnel growth strategies that maximize conversion rates, average order value, and recurring revenue.", href: "/services/ecommerce-marketing" },
  { tag: "STRATEGY", icon: "trending", title: "Digital Strategy", desc: "Data-backed roadmaps and media planning that turn ambitious ideas into predictable, sustainable growth.", href: "/services/digital-strategy" },
];

const PROCESS = [
  { num: "01", title: "Discover", desc: "We deep-dive into your brand, audience economics, and growth bottlenecks before drafting strategy." },
  { num: "02", title: "Strategize", desc: "A tailored multichannel roadmap combining the right mix of creative, media, and tech for maximum ROI." },
  { num: "03", title: "Create & Launch", desc: "High-production creative, targeted campaigns, and conversion assets go live with meticulous QA." },
  { num: "04", title: "Measure & Scale", desc: "We track core metrics daily, continuously optimizing ad spend, conversion rates, and lifetime value." },
];

const ABOUT_PILLARS = [
  { icon: "compass", title: "Strategic Architecture", desc: "No generic packages. Every media plan and digital funnel is engineered specifically for your unit economics and target demographic." },
  { icon: "palette", title: "Scroll-Stopping Creative", desc: "We marry premium aesthetics with direct-response psychology so your creative captures attention and drives conversions." },
  { icon: "trending", title: "Full-Funnel Ownership", desc: "From top-of-funnel awareness to post-purchase retention, our integrated team handles everything end-to-end." },
];

const INDUSTRIES = [
  { icon: "palette", title: "Jewellery & Luxury", desc: "Marketing for high-trust, high-ticket purchases — where brand perception is everything." },
  { icon: "cart", title: "E-commerce & Retail", desc: "Full-funnel growth for online stores, from first click to repeat purchase." },
  { icon: "gear", title: "Manufacturing & B2B", desc: "Lead generation and authority building for industrial and B2B brands." },
  { icon: "instagram", title: "Fashion & Lifestyle", desc: "Content and commerce engines for consumer brands people love to follow." },
  { icon: "pin", title: "Real Estate", desc: "Property marketing that sells before launch — from project branding to qualified buyer leads." },
  { icon: "storefront", title: "Restaurants & Hospitality", desc: "Footfall and delivery orders through local SEO, food content and review management." },
];

const FAQS = [
  { q: "How much does digital marketing cost in Pakistan?", a: "It depends on scope — SEO retainers typically range from PKR 50,000 to PKR 300,000+ per month, while ad management is usually a percentage of spend or a fixed retainer. We scope every engagement around your goals and unit economics, not generic packages." },
  { q: "How long does SEO take to show results?", a: "Most businesses see meaningful movement in 3–6 months. SEO compounds — the early months build the foundation (technical fixes, content, authority) and growth accelerates from there." },
  { q: "Do you work with small businesses or only large companies?", a: "Both. What matters is ambition and readiness to invest in growth — our playbooks adapt to startups and enterprises alike." },
  { q: "What digital marketing services do you offer?", a: "SEO, performance marketing (Meta, Google and TikTok ads), social media marketing, branding and design, web development, content creation, e-commerce marketing and digital strategy — one integrated team." },
  { q: "How do you report results?", a: "In plain language, tied to revenue: leads, sales, cost per acquisition and return on ad spend. You always know what your budget earned." },
  { q: "Why choose a digital marketing agency in Pakistan?", a: "Local market understanding matters — buying behaviour, COD and WhatsApp commerce, festive seasonality. A Pakistan-based team plans around how your customers actually buy." },
];

const TESTIMONIALS = [
  {
    quote: "We at Waheed Jewellers are very satisfied with the services of Sparke Avenue. Their team is professional, creative, and supportive. They have helped us with social media marketing and attractive promotional designs. Highly recommended for anyone looking to grow their business online!",
    name: "Waheed Jewellers",
    detail: "Jewellery \u2014 Social Media Marketing & Design",
    stars: 5,
  },
  {
    quote: "Jewellista had a great experience working with Sparke Avenue! Their team understands our brand needs and provides quality social media marketing and creative designs. We appreciate their efforts and professionalism. Highly recommended for businesses looking to build a strong online presence!",
    name: "Jewellista.pk",
    detail: "Luxury Jewellery \u2014 Social Media Marketing & Creative Design",
    stars: 5,
  },
  {
    quote: "We had a great experience working with Sparke Avenue. Their team is professional, cooperative, and dedicated to delivering quality digital marketing services. Their creative approach and commitment to client satisfaction make them a great choice for businesses looking to grow online. Highly recommended!",
    name: "Azmat Cables",
    detail: "Industrial Manufacturing \u2014 Digital Marketing Services",
    stars: 5,
  },
  {
    quote: "Zarnoor Collection is pleased with the services of Sparke Avenue. Their team is creative, professional, and understands our brand\u2019s needs. From social media management to attractive designs, they provide quality work and great support. Highly recommended for businesses looking to grow online!",
    name: "Zarnoor Collection",
    detail: "Fashion & Lifestyle \u2014 Social Media Management & Design",
    stars: 5,
  },
];

const AVENUE_PATH = "M40,470 C40,370 340,370 340,270 C340,170 40,170 40,70 C40,30 90,10 140,10";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [activeBrand, setActiveBrand] = useState(null);
  const selectRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleResetForm = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSelectedService("");
    setIsSubmitted(false);
    setSubmittedUrl("");
    setErrorMessage("");
  };

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("in"), i * 60);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // close custom dropdown on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    const result = handleWhatsAppSubmit({
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      service: selectedService,
      requireService: true,
      message: sanitizeInput(formData.message),
    });

    setIsSubmitting(false);

    if (!result.success) {
      setErrorMessage(result.error);
      return;
    }

    setSubmittedUrl(result.url);
    setIsSubmitted(true);
  };

  return (
    <>
      <AmbientBackground />
      <SiteNav />

      {/* Hero Section */}
      <section id="home" className="hero section">
        <div className="hero-copy">
          <span className="eyebrow">Digital Marketing &amp; Creative Agency</span>
          <h1>
            <span className="line"><span>Digital Marketing Agency</span></span>
            <span className="line"><span>in Pakistan That </span><span className="accent">Ignites</span><span> Brands.</span></span>
          </h1>
          <p>
            Sparke Avenue is a full-service digital marketing company in Pakistan offering SEO services,
            social media marketing, performance marketing, branding and web development — built to turn
            ambitious brands into category leaders, in Pakistan and worldwide.
          </p>
          <div className="cta-row">
            <a href="#contact" className="btn">Start a Project →</a>
            <a href="#portfolio" className="btn-outline">View Client Work</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 30, opacity: 0, animation: "fadeUp .9s cubic-bezier(.16,1,.3,1) forwards", animationDelay: ".75s" }}>
            <span style={{ color: "var(--spark)", letterSpacing: 2, fontSize: ".92rem" }}>★★★★★</span>
            <span style={{ color: "var(--muted)", fontSize: ".83rem", lineHeight: 1.5 }}><strong style={{ color: "#fff" }}>Trusted by growing brands</strong><br />Jewellery, retail, manufacturing, fashion &amp; B2B</span>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 24, opacity: 0, animation: "fadeUp .9s cubic-bezier(.16,1,.3,1) forwards", animationDelay: ".85s" }}>
            <span style={{ border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.04)", borderRadius: 999, padding: "6px 13px", fontSize: ".75rem", color: "#c7d0df" }}>SEO</span><span style={{ border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.04)", borderRadius: 999, padding: "6px 13px", fontSize: ".75rem", color: "#c7d0df" }}>Paid Ads</span><span style={{ border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.04)", borderRadius: 999, padding: "6px 13px", fontSize: ".75rem", color: "#c7d0df" }}>Social Media</span><span style={{ border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.04)", borderRadius: 999, padding: "6px 13px", fontSize: ".75rem", color: "#c7d0df" }}>Branding</span><span style={{ border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.04)", borderRadius: 999, padding: "6px 13px", fontSize: ".75rem", color: "#c7d0df" }}>Web Development</span><span style={{ border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.04)", borderRadius: 999, padding: "6px 13px", fontSize: ".75rem", color: "#c7d0df" }}>E-commerce</span>
          </div>
        </div>
        <div style={{ position: "relative", minHeight: 520 }}>
          <div style={{ position: "absolute", top: 8, left: 0, width: "78%", background: "#101827", border: "1px solid rgba(255,255,255,.15)", borderRadius: 18, overflow: "hidden", boxShadow: "0 34px 70px rgba(0,0,0,.5)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.05)", padding: "10px 14px" }}>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#ff5f57" }} /><span style={{ width: 9, height: 9, borderRadius: "50%", background: "#febc2e" }} /><span style={{ width: 9, height: 9, borderRadius: "50%", background: "#28c840" }} />
              <span style={{ marginLeft: 9, background: "rgba(255,255,255,.06)", color: "#93a1b7", borderRadius: 7, padding: "3px 12px", fontSize: ".7rem", flex: 1, textAlign: "center" }}>🔒 sparkeavenue.com</span>
            </div>
            <div style={{ padding: "20px 22px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 16 }}>
                <span style={{ width: 30, height: 24, background: "#fff", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0 }}><img src="/logo-mark.png" alt="Sparke Avenue logo" style={{ width: 25, height: "auto" }} /></span>
                <b style={{ color: "#fff", fontSize: ".8rem" }}>Sparke Avenue</b>
                <span style={{ marginLeft: "auto", color: "#93a1b7", fontSize: ".68rem" }}>Home · Services · Work</span>
                <span style={{ background: "var(--spark)", color: "#170f02", borderRadius: 7, padding: "4px 10px", fontSize: ".68rem", fontWeight: 800 }}>Start a Project</span>
              </div>
              <div style={{ color: "#fff", fontSize: "1.35rem", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-.4px" }}>We turn attention<br /><span style={{ color: "var(--spark)" }}>into revenue.</span></div>
              <p style={{ color: "#93a1b7", fontSize: ".76rem", margin: "8px 0 14px", lineHeight: 1.55 }}>SEO, paid media, social, branding &amp; web — one growth team for ambitious brands.</p>
              <span style={{ display: "inline-block", background: "var(--spark)", color: "#170f02", borderRadius: 8, padding: "7px 14px", fontSize: ".74rem", fontWeight: 800 }}>Explore Services</span>
              <div style={{ display: "flex", gap: 9, marginTop: 16 }}>
                <div style={{ flex: 1, height: 52, borderRadius: 10, background: "linear-gradient(135deg, #f59e0b, #b45309)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem" }}>🔍</div>
                <div style={{ flex: 1, height: 52, borderRadius: 10, background: "linear-gradient(135deg, #a855f7, #6d28d9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem" }}>📈</div>
                <div style={{ flex: 1, height: 52, borderRadius: 10, background: "linear-gradient(135deg, #38bdf8, #0369a1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem" }}>🎬</div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", right: 0, top: 120, width: 172, background: "#0d1322", border: "2px solid rgba(255,255,255,.22)", borderRadius: 26, padding: 10, transform: "rotate(3deg)", boxShadow: "0 30px 60px rgba(0,0,0,.55)", zIndex: 3 }}>
            <div style={{ width: 44, height: 5, borderRadius: 99, background: "rgba(255,255,255,.28)", margin: "2px auto 9px" }} />
            <div style={{ borderRadius: 18, background: "linear-gradient(165deg, #a855f7, #ff7847 78%)", padding: "16px 13px 14px", minHeight: 238, display: "flex", flexDirection: "column" }}>
              <span style={{ alignSelf: "flex-end", background: "rgba(0,0,0,.45)", color: "#fff", borderRadius: 7, padding: "3px 8px", fontSize: ".62rem", fontWeight: 800 }}>▶ REEL</span>
              <span style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,.94)", display: "flex", alignItems: "center", justifyContent: "center", margin: "auto", color: "#170f02", fontSize: "1.05rem", paddingLeft: 4 }}>▶</span>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: ".82rem", lineHeight: 1.35 }}>POV: Your brand goes viral 🎯</div>
              <div style={{ color: "rgba(255,255,255,.85)", fontSize: ".66rem", marginTop: 5 }}>212K views · @sparkeavenue</div>
              <div style={{ height: 4, borderRadius: 99, background: "rgba(255,255,255,.35)", marginTop: 11 }}><div style={{ width: "42%", height: "100%", background: "#fff", borderRadius: 99 }} /></div>
            </div>
          </div>
          <div style={{ position: "absolute", top: -8, right: 14, background: "rgba(14,19,32,.96)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 15, padding: "11px 14px", display: "flex", gap: 10, alignItems: "center", boxShadow: "0 22px 44px rgba(0,0,0,.45)", zIndex: 4 }}>
            <span style={{ width: 48, height: 36, background: "#fff", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0 }}><img src="/logo-mark.png" alt="Sparke Avenue logo" style={{ width: 40, height: "auto" }} /></span>
            <span>
              <b style={{ display: "block", color: "#fff", fontSize: ".76rem" }}>Brand Identity</b>
              <span style={{ color: "#7dd87d", fontSize: ".66rem", fontWeight: 700 }}>Delivered ✓</span>
            </span>
          </div>
          <div style={{ position: "absolute", left: 6, bottom: 6, width: 250, background: "rgba(14,19,32,.96)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 16, padding: "15px 16px", transform: "rotate(-2deg)", boxShadow: "0 26px 52px rgba(0,0,0,.5)", zIndex: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <b style={{ color: "#fff", fontSize: ".8rem" }}>Meta Ads · Client Campaign</b>
              <span style={{ color: "#7dd87d", fontSize: ".66rem", fontWeight: 800 }}>● ACTIVE</span>
            </div>
            <div style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 800, marginTop: 8 }}>4.8x <small style={{ fontSize: ".72rem", color: "#7dd87d", fontWeight: 700 }}>return on ad spend</small></div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 38, marginTop: 10 }}>
              <div style={{ flex: 1, height: "35%", borderRadius: "4px 4px 0 0", background: "linear-gradient(180deg, #ffab40, #ff7847)", opacity: 0.55 }} /><div style={{ flex: 1, height: "50%", borderRadius: "4px 4px 0 0", background: "linear-gradient(180deg, #ffab40, #ff7847)", opacity: 0.65 }} /><div style={{ flex: 1, height: "45%", borderRadius: "4px 4px 0 0", background: "linear-gradient(180deg, #ffab40, #ff7847)", opacity: 0.6 }} /><div style={{ flex: 1, height: "66%", borderRadius: "4px 4px 0 0", background: "linear-gradient(180deg, #ffab40, #ff7847)", opacity: 0.78 }} /><div style={{ flex: 1, height: "82%", borderRadius: "4px 4px 0 0", background: "linear-gradient(180deg, #ffab40, #ff7847)", opacity: 0.9 }} /><div style={{ flex: 1, height: "100%", borderRadius: "4px 4px 0 0", background: "linear-gradient(180deg, #ffab40, #ff7847)", opacity: 1 }} />
            </div>
            <p style={{ color: "#93a1b7", fontSize: ".68rem", marginTop: 8 }}>Campaign performance — last 30 days</p>
          </div>
          <div className="float-badge" style={{ bottom: "9%", right: "2%", top: "auto" }}><span className="dot" />50M+ Impressions Driven</div>
        </div>
      
      </section>

      {/* Marquee Track */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...SERVICES, ...SERVICES].map((s, i) => (
            <span key={i}><b>{s.tag}</b>{s.title}</span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="section">
        <div className="about-wrap">
          <div className="about-header reveal">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title">A Digital Marketing Company Built for Brands That Demand More</h2>
            <p className="about-lead">
              Sparke Avenue is a digital marketing agency based in Pakistan, serving clients locally and worldwide.
              As a full-service digital marketing company, we unite SEO, paid advertising, social media marketing,
              premium creative and conversion-first web development to help brands show up with clarity and authority across every digital touchpoint.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="about-pillars-grid">
            {ABOUT_PILLARS.map((p) => (
              <div className="about-pillar-card reveal" key={p.title}>
                <div className="pillar-icon">
                  <Icon name={p.icon} size={22} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* High-Impact Stat Grid */}
          <div className="about-stats-container reveal">
            <div className="stat-card">
              <span className="stat-num">360°</span>
              <span className="stat-label">Full-Service Digital Management</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">8+</span>
              <span className="stat-label">Integrated Service Disciplines</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">100%</span>
              <span className="stat-label">Data-Driven Growth Execution</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">50M+</span>
              <span className="stat-label">Multichannel Impressions Generated</span>
            </div>
          </div>
        </div>
      </section>

      <div className="road-divider" />

      {/* Vision & Mission Section */}
      <section className="section" style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Why We Exist</span>
          <h2 className="section-title">Vision &amp; Mission</h2>
        </div>
        <div className="vm-grid">
          <div className="vm-card reveal">
            <span className="eyebrow">Our Vision</span>
            <p>To become a globally trusted digital growth partner, transforming high-potential ideas into dominant market brands through relentless creativity, strategic precision, and measurable ROI.</p>
          </div>
          <div className="vm-card reveal">
            <span className="eyebrow">Our Mission</span>
            <p>To empower businesses with holistic digital strategies, captivating creative assets, and performance-driven campaigns that build unshakeable brand equity and predictable customer acquisition.</p>
          </div>
        </div>
      </section>

      <div className="road-divider" />

      {/* PORTFOLIO & BRAND SHOWCASE (Positioned BEFORE Services) */}
      <section id="portfolio" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Client Success Stories</span>
          <h2 className="section-title">Brands We&apos;ve Partnered With</h2>
          <p>
            From high-growth e-commerce and luxury retail to corporate manufacturing and trade alliances,
            explore how Sparke Avenue manages full-scale digital growth. Click any brand to view details.
          </p>
        </div>

        <div className="brands-showcase-grid">
          {BRANDS_DATA.map((brand) => (
            <div
              className="brand-card-interactive reveal"
              key={brand.id}
              onClick={() => setActiveBrand(brand)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActiveBrand(brand); }}
            >
              <div className="brand-card-logo-frame">
                <img src={brand.logo} alt={brand.name} />
              </div>
              <div className="brand-card-content">
                <span className="brand-card-badge">{brand.badge}</span>
                <h4>{brand.name}</h4>
                <p>{brand.industry}</p>
                <div className="brand-card-cta">
                  <span>View Case Study</span>
                  <Icon name="arrowRight" size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-section-footer reveal">
          <Link href="/portfolio" className="btn-outline">
            <span>Explore All Portfolio Case Studies</span>
            <Icon name="external" size={16} />
          </Link>
        </div>
      </section>

      <div className="road-divider" />

      {/* Services Bento Section */}
      <section id="services" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>What We Do</span>
          <h2 className="section-title">Our Core Services</h2>
          <p>Eight specialized digital marketing services — SEO, performance marketing, social media, branding, web development and more — one unified growth strategy designed around where your brand needs to scale next.</p>
        </div>
        <div className="bento">
          {SERVICES.map((s) =>
            s.href ? (
              <Link href={s.href} className={`card reveal ${s.featured ? "featured" : ""}`} key={s.tag}>
                <span className="svc-icon-tile"><Icon name={s.icon} size={s.featured ? 34 : 30} /></span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Link>
            ) : (
              <div className={`card reveal ${s.featured ? "featured" : ""}`} key={s.tag}>
                <span className="svc-icon-tile"><Icon name={s.icon} size={s.featured ? 34 : 30} /></span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            )
          )}
          <a href="#contact" className="card reveal cta-tile">
            <span className="tag">GET STARTED</span>
            <div>
              <h3>Have a project in mind?</h3>
              <p>Let&apos;s talk about where your brand needs to grow next.</p>
              <div className="arrow">→</div>
            </div>
          </a>
        </div>
      </section>

      <div className="road-divider" />

      {/* Process Section */}
      <section id="process" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>How We Work</span>
          <h2 className="section-title">A Process Built Around Results</h2>
        </div>
        <div className="timeline">
          {PROCESS.map((p) => (
            <div className="timeline-item reveal" key={p.num}>
              <div className="timeline-num">{p.num}</div>
              <div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      {/* Industries Section */}
      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Industries</span>
          <h2 className="section-title">Sectors We Know Inside Out</h2>
        </div>
        <div className="svc-grid">
          {INDUSTRIES.map((s) => (
            <div className="svc-card reveal" key={s.title}>
              <div className="icon-chip"><Icon name={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      {/* FAQ Section */}
      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>FAQs</span>
          <h2 className="section-title">Digital Marketing Questions, Answered</h2>
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

      <div className="road-divider" />

      {/* Blog Preview Section */}
      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Insights</span>
          <h2 className="section-title">Latest From The Blog</h2>
        </div>
        <div className="svc-grid">
          <a href="/blog/choosing-digital-marketing-agency-pakistan" className="reveal" style={{ textDecoration: "none" }}>
            <div className="svc-card" style={{ height: "100%" }}>
              <span className="eyebrow" style={{ marginBottom: 12 }}>Guide</span>
              <h3>How to Choose a Digital Marketing Agency in Pakistan: 7 Questions to Ask</h3>
              <p>The right agency grows your revenue; the wrong one burns your budget on jargon.</p>
              <span style={{ color: "var(--spark)", fontSize: ".9rem" }}>Read article →</span>
            </div>
          </a>
          <a href="/blog/seo-vs-paid-ads-pakistan" className="reveal" style={{ textDecoration: "none" }}>
            <div className="svc-card" style={{ height: "100%" }}>
              <span className="eyebrow" style={{ marginBottom: 12 }}>Comparison</span>
              <h3>SEO vs Paid Ads: What Works Better for Pakistani Businesses?</h3>
              <p>Paid ads buy you speed; SEO buys you freedom from ad costs.</p>
              <span style={{ color: "var(--spark)", fontSize: ".9rem" }}>Read article →</span>
            </div>
          </a>
          <a href="/blog/digital-marketing-cost-pakistan-2026" className="reveal" style={{ textDecoration: "none" }}>
            <div className="svc-card" style={{ height: "100%" }}>
              <span className="eyebrow" style={{ marginBottom: 12 }}>Price Guide</span>
              <h3>How Much Does Digital Marketing Cost in Pakistan? (2026)</h3>
              <p>SEO, ads, social media and web dev pricing — plus what actually drives the price.</p>
              <span style={{ color: "var(--spark)", fontSize: ".9rem" }}>Read article →</span>
            </div>
          </a>
        </div>
        <div className="reveal" style={{ textAlign: "center", marginTop: 36 }}>
          <a href="/blog" className="btn-outline">View All Articles</a>
        </div>
      </section>

      <div className="road-divider" />

      {/* Testimonials Section */}
      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Client Love</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="svc-grid">
          {TESTIMONIALS.map((t) => (
            <div className="svc-card reveal" key={t.name}>
              <div style={{ color: "var(--spark)", fontSize: "1rem", letterSpacing: 2, marginBottom: 14 }}>
                {"\u2605".repeat(t.stars)}
              </div>
              <p style={{ fontStyle: "italic", fontSize: "1rem", lineHeight: 1.7, marginBottom: 20 }}>&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontFamily: "var(--font-display)" }}>{t.name}</div>
                <div style={{ color: "var(--muted)", fontSize: ".85rem", marginTop: 4 }}>{t.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Let&apos;s Connect</span>
          <h2 className="section-title">Work With a Digital Marketing Agency That Delivers ROI</h2>
          <p>Ready to grow? Partner with a performance-driven digital marketing company in Pakistan — send an inquiry for tailored SEO, advertising and branding solutions with transparent pricing.</p>
        </div>
        <div className="contact-wrap">
          <div className="contact-info reveal">
            <h3>Direct Channels</h3>
            
            <div className="info-line">
              <div className="icon">
                <Icon name="phone" size={18} />
              </div>
              <div>
                <b>Call / WhatsApp</b>
                <a href={`https://wa.me/${WHATSAPP_CONFIG.phoneNumber}`} target="_blank" rel="noreferrer">{WHATSAPP_CONFIG.displayPhone}</a>
              </div>
            </div>


            <div className="info-line">
              <div className="icon">
                <Icon name="instagram" size={18} />
              </div>
              <div>
                <b>Instagram</b>
                <a href="https://www.instagram.com/sparkeavenue?igsi=MTJxODM2cWQ1eGg0ag==" target="_blank" rel="noreferrer">@sparkeavenue</a>
              </div>
            </div>

            <div className="info-line">
              <div className="icon">
                <Icon name="facebook" size={18} />
              </div>
              <div>
                <b>Facebook</b>
                <a href="https://www.facebook.com/share/1FAhyJD6xb/" target="_blank" rel="noreferrer">/sparkeavenue</a>
              </div>
            </div>

            <div className="info-line">
              <div className="icon">
                <Icon name="linkedin" size={18} />
              </div>
              <div>
                <b>LinkedIn</b>
                <a href="https://www.linkedin.com/company/144785010" target="_blank" rel="noreferrer">Sparke Avenue</a>
              </div>
            </div>
          </div>

          <div className="reveal contact-form-card">
            {isSubmitted ? (
              <div style={{ textAlign: "center", padding: "10px 0" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "rgba(255,171,64,0.12)",
                    border: "1.5px solid var(--spark)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    color: "var(--spark)",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  ✓
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    color: "#fff",
                    marginBottom: "12px",
                  }}
                >
                  Thank You! Your Inquiry Has Been Sent
                </h3>

                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.98rem",
                    lineHeight: "1.7",
                    maxWidth: "460px",
                    margin: "0 auto 28px",
                  }}
                >
                  WhatsApp has been opened with your pre-filled inquiry details. Our team will review your requirements and get back to you shortly.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
                  {submittedUrl && (
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        maxWidth: "340px",
                      }}
                    >
                      Open WhatsApp Again →
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="btn-outline"
                    style={{
                      width: "100%",
                      maxWidth: "340px",
                      justifyContent: "center",
                      padding: "12px 20px",
                      fontSize: "0.92rem",
                    }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    maxLength={80}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address (Optional)"
                    value={formData.email}
                    onChange={handleInputChange}
                    maxLength={100}
                  />
                </div>

                <div className="form-row">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone / WhatsApp Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    maxLength={30}
                    required
                  />
                  <div className="custom-select" ref={selectRef}>
                    <button
                      type="button"
                      className={`select-trigger ${serviceOpen ? "open" : ""} ${!selectedService ? "placeholder" : ""}`}
                      onClick={() => setServiceOpen(!serviceOpen)}
                    >
                      {selectedService || "Select service you're interested in"}
                      <span className="select-caret">▾</span>
                    </button>
                    {serviceOpen && (
                      <div className="select-panel">
                        {SERVICES.map((s) => (
                          <div
                            key={s.tag}
                            className={`select-option ${selectedService === s.title ? "active" : ""}`}
                            onClick={() => {
                              setSelectedService(s.title);
                              setServiceOpen(false);
                              if (errorMessage) setErrorMessage("");
                            }}
                          >
                            {s.title}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell us about your brand, current goals, and project timeline"
                  value={formData.message}
                  onChange={handleInputChange}
                  maxLength={2000}
                  required
                />

                {errorMessage && (
                  <div
                    style={{
                      padding: "12px 16px",
                      background: "rgba(255,107,107,0.08)",
                      border: "1px solid rgba(255,107,107,0.3)",
                      borderRadius: "10px",
                      color: "#ff6b6b",
                      fontSize: "0.88rem",
                      lineHeight: "1.4",
                    }}
                  >
                    ⚠️ {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn"
                  disabled={isSubmitting}
                  style={{
                    justifyContent: "center",
                    width: "100%",
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  {isSubmitting ? "Opening WhatsApp..." : "Send Inquiry via WhatsApp →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* Brand Case Study Modal */}
      <BrandModal brand={activeBrand} onClose={() => setActiveBrand(null)} />
    </>
  );
}

