const fs = require('fs');
const path = require('path');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://example.com/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>1.0</priority>
    </url>
    <!-- Add more URLs dynamically or statically -->
</urlset>`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap, 'utf8');
console.log('Sitemap generated!');
