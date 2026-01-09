import { NextRequest, NextResponse } from 'next/server';

// Добавьте эту строку для статического экспорта
export const dynamic = 'force-static';

export async function GET(request: NextRequest) {
  const baseUrl = 'https://olkhontravel.ru';

  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>olkhontravel Travel - Блог о путешествиях</title>
    <link>${baseUrl}</link>
    <description>Советы и новости о путешествиях на Байкал</description>
    <language>ru</language>
    
    <item>
      <title>10 лучших мест на Байкале</title>
      <link>${baseUrl}/blog/10-best-places</link>
      <description>Откройте для себя самые красивые места Байкала...</description>
      <pubDate>Mon, 15 Jan 2024 10:00:00 GMT</pubDate>
    </item>
    
    <item>
      <title>Как спланировать поездку на Ольхон</title>
      <link>${baseUrl}/blog/olkhon-trip-guide</link>
      <description>Полный гайд по планированию путешествия на остров Ольхон...</description>
      <pubDate>Fri, 12 Jan 2024 14:30:00 GMT</pubDate>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rssContent, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600',
    },
  });
}