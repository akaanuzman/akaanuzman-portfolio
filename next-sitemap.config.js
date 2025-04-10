/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://akaanuzman-portfolio.vercel.app',
    generateRobotsTxt: false, // Next.js App Router ile zaten robots.ts dosyamız olduğu için false
    sitemapSize: 7000,
    generateIndexSitemap: false, // Tek bir sitemap dosyası oluşturacağımız için false
    outDir: 'public',
    exclude: ['/api/*'],
    alternateRefs: [
        {
            href: 'https://akaanuzman-portfolio.vercel.app',
            hreflang: 'en',
        },
        {
            href: 'https://akaanuzman-portfolio.vercel.app/tr',
            hreflang: 'tr',
        },
    ],
    transform: async (config, path) => {
        // Özel sayfa önceliklerini ve güncelleme sıklıklarını ayarlama
        if (path === '/') {
            return {
                loc: path,
                changefreq: 'weekly',
                priority: 1.0,
                lastmod: new Date().toISOString(),
            }
        }

        // Diğer sayfalar için varsayılan ayarlar
        return {
            loc: path,
            changefreq: 'monthly',
            priority: 0.8,
            lastmod: new Date().toISOString(),
        }
    },
}