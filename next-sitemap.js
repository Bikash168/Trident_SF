// next-sitemap.js
module.exports = {
    siteUrl: 'https://www.sacred.foundation',  // Change this to your site's URL
    generateRobotsTxt: true,  // Optional, to generate robots.txt
    sitemapSize: 7000,        // Optional, specify the number of URLs per sitemap
    changefreq: 'daily',      // Optional, specify how often the content changes
    priority: 0.7,            // Optional, specify the priority of pages
    exclude: ['/exclude-path'], // Optional, exclude specific pages from the sitemap
    transform: async (config, path) => {
      // Optional: Use this to transform individual pages (for custom behavior)
      return {
        loc: path,             // URL of the page
        changefreq: 'weekly',  // Page frequency
        priority: 0.8,         // Page priority
        lastmod: new Date().toISOString(),  // Optional: last modified date
      };
    },
  };
  