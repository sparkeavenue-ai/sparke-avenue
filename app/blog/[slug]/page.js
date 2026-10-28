import Link from "next/link";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import AmbientBackground from "../../components/AmbientBackground";
import InquiryForm from "../../components/InquiryForm";
import { POSTS, getPost } from "../posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

function Block({ block }) {
  if (block.h) {
    return <h2 style={{ fontFamily: "var(--font-display)", color: "var(--text)", fontSize: "1.45rem", margin: "44px 0 16px" }}>{block.h}</h2>;
  }
  if (block.list) {
    return (
      <ul style={{ color: "var(--muted)", fontSize: "1.02rem", lineHeight: 1.75, paddingLeft: 22, margin: "16px 0" }}>
        {block.list.map((item, i) => <li key={i} style={{ marginBottom: 8 }}>{item}</li>)}
      </ul>
    );
  }
  if (block.table) {
    return (
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".95rem" }}>
          <thead>
            <tr>
              {block.table.head.map((h, i) => (
                <th key={i} style={{ textAlign: "left", padding: "12px 14px", borderBottom: "1px solid var(--line)", color: "var(--text)", fontFamily: "var(--font-display)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: "12px 14px", borderBottom: "1px solid rgba(255,255,255,.07)", color: j === 0 ? "#fff" : "var(--muted)" }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return <p style={{ color: "var(--muted)", fontSize: "1.02rem", lineHeight: 1.8, margin: "16px 0" }}>{block.p}</p>;
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) {
    return (
      <>
        <SiteNav />
        <section className="section" style={{ textAlign: "center", paddingTop: 140 }}>
          <h1>Article not found</h1>
          <Link href="/blog" style={{ color: "var(--spark)" }}>← Back to blog</Link>
        </section>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <AmbientBackground />
      <SiteNav />

      <article className="section" style={{ maxWidth: 780, margin: "0 auto", paddingTop: 140 }}>
        <Link href="/blog" style={{ color: "var(--spark)", fontSize: ".9rem", textDecoration: "none" }}>← All articles</Link>
        <div style={{ marginTop: 20 }}>
          <span className="eyebrow">{post.date} · {post.readTime}</span>
          <h1 style={{ fontFamily: "var(--font-display)", color: "var(--text)", fontSize: "2.2rem", lineHeight: 1.25, margin: "14px 0 8px" }}>{post.title}</h1>
        </div>
        <div className="road-divider" style={{ margin: "28px 0" }} />
        <div>
          {post.blocks.map((b, i) => <Block key={i} block={b} />)}
        </div>
        <div className="road-divider" style={{ margin: "48px 0" }} />
        <p style={{ color: "var(--muted)", fontSize: ".95rem", lineHeight: 1.7, marginBottom: 24 }}>
          Sparke Avenue is a digital marketing company in Pakistan offering SEO, performance marketing, social media, branding and web development.
        </p>
      </article>

      <section className="final-cta reveal">
        <span className="eyebrow" style={{ justifyContent: "center" }}>Ready?</span>
        <h2>Want this kind of thinking on your business?</h2>
        <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 40px" }}>
          Tell us where you want to grow — we&apos;ll build the plan.
        </p>
        <InquiryForm serviceName="Blog Inquiry" extraLabel="Website" extraPlaceholder="Your Website URL" />
      </section>

      <SiteFooter />
    </>
  );
}
