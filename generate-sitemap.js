import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

// Define your routes here
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', changefreq: 'daily', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/case-study', changefreq: 'monthly', priority: 0.8 },
  { url: '/pricing-plans', changefreq: 'monthly', priority: 0.8 },
  { url: '/thank-you', changefreq: 'monthly', priority: 0.8 },
  // Add individual case studies
  { url: '/case-study/freesoft-transformation-logon-utility', changefreq: 'monthly', priority: 0.7 },
  { url: '/case-study/le-petals-logon-utility', changefreq: 'monthly', priority: 0.7 },
  { url: '/case-study/coderworkz-ravi-jindal-logon-utility', changefreq: 'monthly', priority: 0.7 },
  // Add services
  { url: '/services/communication-solutions/bulk-sms', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/communication-solutions/voice-calls', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/communication-solutions/whatsapp-business-api', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/communication-solutions/smpp', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/communication-solutions/otp', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/communication-solutions/international-sms', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/communication-solutions/rcs-messaging', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/advertising-solutions/whatsapp-marketing-service', changefreq: 'monthly', priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname: 'https://yourdomain.com' });

routes.forEach(route => sitemap.write(route));
sitemap.end();

streamToPromise(sitemap).then(data => {
  fs.writeFileSync('./public/sitemap.xml', data.toString());
}).catch(err => {
  console.error(err);
});
