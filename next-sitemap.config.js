/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://fhasaj.co.uk',
    generateRobotsTxt: true,
    sitemapSize: 7000,
  }