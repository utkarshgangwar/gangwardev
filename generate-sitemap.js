const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap() {
    const links = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/about', changefreq: 'daily', priority: 0.8 },
        { url: '/portfolio', changefreq: 'daily', priority: 0.7 },
        { url: '/tech-stack', changefreq: 'daily', priority: 0.5 },
    ];

    const sitemap = new SitemapStream({ hostname: 'https://www.gangwar.dev/' });
    const writeStream = createWriteStream('./public/sitemap.xml');

    sitemap.pipe(writeStream);
    links.forEach(link => sitemap.write(link));
    sitemap.end();

    await streamToPromise(sitemap);
    console.log('Sitemap generated!');
}

generateSitemap();
