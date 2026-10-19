export default function sitemap() {
  const pages = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/portfolio', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/seo-services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/performance-marketing', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/social-media-marketing', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/branding-design', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/web-development', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/content-creation', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/ecommerce-marketing', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/digital-strategy', priority: 0.8, changeFrequency: 'monthly' },
  ]
  return pages.map((p) => ({
    url: `https://sparkeavenue.com${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))
}
