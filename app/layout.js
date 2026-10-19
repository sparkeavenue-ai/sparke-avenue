import "./globals.css";

export const metadata = {
  title: "Digital Marketing Agency in Pakistan | Sparke Avenue",
  description:
    "Sparke Avenue is a digital marketing agency in Pakistan offering SEO, paid ads, social media marketing, branding and web development. Create. Connect. Grow.",
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
      <body>{children}</body>
    </html>
  );
}
