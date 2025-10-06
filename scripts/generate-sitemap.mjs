// scripts/generate-sitemap.mjs
import { readdirSync } from 'fs';
import { writeFileSync } from 'fs';
import { join, basename } from 'path';

const SITE = process.env.SITE_URL || 'https://your-domain.tld';

const staticRoutes = ['/', '/projects', '/about', '/resume', '/contact', '/blog'];

// blog slugs from src/posts/*.md
const postsDir = join(process.cwd(), 'src', 'posts');
let postRoutes = [];
try {
  const files = readdirSync(postsDir).filter(f => f.endsWith('.md'));
  postRoutes = files.map(f => `/blog/${basename(f, '.md')}`);
} catch { /* folder may be empty */ }

const urls = [...staticRoutes, ...postRoutes]
  .map(p => `<url><loc>${SITE}${p}</loc></url>`)
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), xml, 'utf8');
console.log('sitemap.xml generated:', urls.length, 'routes');
