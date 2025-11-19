import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const site = process.env.SITE_URL || 'https://portfolio-rho-ochre-79.vercel.app/'
const postsDir = path.resolve('src/posts')
const outFile = path.resolve('public/rss.xml')

const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
const items = files.map(f => {
  const raw = fs.readFileSync(path.join(postsDir, f), 'utf8')
  const { data, content } = matter(raw)
  const slug = f.replace('.md', '')
  return { slug, title: data.title ?? slug, date: data.date ?? new Date().toISOString(), content }
}).sort((a, b) => (a.date < b.date ? 1 : -1))

const esc = s => s.replace(/[<>&'"]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]))

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>Sameer Yadav — Notes</title>
<link>${site}/blog</link>
<description>Notes from building software and games</description>
${items.map(it => `
<item>
  <title>${esc(it.title)}</title>
  <link>${site}/blog/${it.slug}</link>
  <guid>${site}/blog/${it.slug}</guid>
  <pubDate>${new Date(it.date).toUTCString()}</pubDate>
  <description>${esc(it.content.slice(0, 280))}</description>
</item>`).join('')}
</channel></rss>`

fs.writeFileSync(outFile, feed, 'utf8')
console.log('RSS written:', outFile)
