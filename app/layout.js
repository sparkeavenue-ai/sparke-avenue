import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://sparkeavenue.com"),
  title: "Digital Marketing Agency in Pakistan | Sparke Avenue",
  description:
    "Sparke Avenue is a digital marketing agency in Pakistan offering SEO, paid ads, social media marketing, branding and web development. Create. Connect. Grow.",
  alternates: { canonical: "https://sparkeavenue.com" },
  openGraph: {
    type: "website",
    siteName: "Sparke Avenue",
    title: "Digital Marketing Agency in Pakistan | Sparke Avenue",
    description:
      "Sparke Avenue is a digital marketing agency in Pakistan offering SEO, paid ads, social media marketing, branding and web development. Create. Connect. Grow.",
    url: "https://sparkeavenue.com",
    images: [{ url: "/logo-mark.png", width: 512, height: 512, alt: "Sparke Avenue" }],
  },
  twitter: {
    card: "summary",
    title: "Digital Marketing Agency in Pakistan | Sparke Avenue",
    description:
      "Sparke Avenue is a digital marketing agency in Pakistan offering SEO, paid ads, social media marketing, branding and web development. Create. Connect. Grow.",
    images: ["/logo-mark.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sparke Avenue",
  slogan: "Create. Connect. Grow.",
  url: "https://sparkeavenue.com",
  logo: "https://sparkeavenue.com/logo-mark.png",
  description:
    "Digital marketing agency in Pakistan offering SEO, paid ads, social media marketing, branding and web development.",
  email: "info@sparkeavenue.com",
  telephone: "+92-314-4083350",
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    postalCode: "54000",
    addressCountry: "PK",
  },
  sameAs: [
    "https://www.instagram.com/sparkeavenue",
    "https://www.linkedin.com/company/144785010",
    "https://clutch.co/profile/sparke-avenue",
    "https://www.sortlist.com/agency/sparke-avenue",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=satoshi@400,500,700&f[]=jetbrains-mono@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
