import { NextResponse } from 'next/server'
import Templates from '../(data)/Templates'

const siteUrl = 'https://easilyfamous.com'

export async function GET() {
  const staticPages = [
    '',
    'dashboard',
    'dashboard/about',
    'dashboard/privacy-policy',
  ]
  const today = new Date().toISOString().split('T')[0]

  const toolPages = Templates.map((t) => `dashboard/content/${t.slug}`)

  const allPages = [...staticPages, ...toolPages]

  const urls = allPages
    .map(
      (path) =>
        `    <url>\n      <loc>${siteUrl}/${path}</loc>\n      <lastmod>${today}</lastmod>\n    </url>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
