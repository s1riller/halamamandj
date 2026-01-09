# 🔍 SEO Оптимизация - Полный гайд для первых мест в Google

## 📊 Как работает SEO ранжирование

### Google учитывает ~200 факторов:
1. **On-page SEO** (30%) - содержимое на странице
2. **Technical SEO** (30%) - техническая оптимизация
3. **Backlinks** (20%) - ссылки с других сайтов
4. **User Experience** (20%) - поведение пользователей

---

## 🎯 Шаг 1: On-Page SEO (Оптимизация контента)

### 1️⃣ Правильные Meta Tags

#### Файл: `app/bus/page.tsx`

```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  // Заголовок (показывается в результатах поиска)
  title: 'Автобусные рейсы на Байкал | Забронируй билет онлайн - ОльхонЭкспресс',
  
  // Описание (видно в Google)
  description: 'Бронируй автобусные билеты на Байкал, в Ольхон и Листвянку. Низкие цены, удобная доставка, 24/7 поддержка. Забронируй билет сейчас!',
  
  // Keywords (помогают Google понять тему)
  keywords: ['автобус Ольхон', 'билеты на Байкал', 'расписание автобусов', 'Иркутск Ольхон'],
  
  // Open Graph (для соцсетей и Telegram)
  openGraph: {
    title: 'Автобусные рейсы на Байкал | ОльхонЭкспресс',
    description: 'Забронируй билет на автобус онлайн. Быстро, безопасно, удобно!',
    url: 'https://ОльхонЭкспресс.ru',
    type: 'website',
    images: [
      {
        url: 'https://ОльхонЭкспресс.ru/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Автобусные рейсы на Байкал',
    description: 'Забронируй билет сейчас!',
    images: ['https://ОльхонЭкспресс.ru/twitter-image.jpg'],
  },
};

export default function BusPage() {
  return (
    <>
      {/* H1 - главный заголовок (должен быть только один!) */}
      <h1>Забронируй билет на автобус до Байкала</h1>
      
      {/* Остальной контент */}
    </>
  );
}
```

### 2️⃣ Структурирование контента

#### Правильная иерархия заголовков:
```html
<!-- ✅ ПРАВИЛЬНО -->
<h1>Главный заголовок страницы</h1>
<h2>Подзаголовок 1</h2>
<p>Содержание...</p>
<h2>Подзаголовок 2</h2>
<p>Содержание...</p>

<!-- ❌ НЕПРАВИЛЬНО -->
<h1>Заголовок 1</h1>
<h3>Пропустили h2!</h3>
<h1>Два заголовка h1</h1>
```

### 3️⃣ Schema.org Structured Data (важно для Google!)

#### Файл: `app/bus/page.tsx`

```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  // ... остальной metadata
};

export default function BusPage() {
  // JSON-LD структурированные данные
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ОльхонЭкспресс Travel',
    logo: 'https://ОльхонЭкспресс.ru/logo.png',
    sameAs: [
      'https://www.facebook.com/ОльхонЭкспресс',
      'https://www.instagram.com/ОльхонЭкспресс',
    ],
  };

  const busServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'BusService',
    name: 'Автобусные рейсы на Байкал',
    description: 'Бронирование билетов на автобусные рейсы',
    url: 'https://ОльхонЭкспресс.ru',
    telephone: '+7 (900) 123-45-67',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RU',
      addressLocality: 'Иркутск',
      postalCode: '664000',
      streetAddress: 'ул. Ленина, 1',
    },
    priceRange: '₽1000-₽5000',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Как забронировать билет?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Выберите маршрут, дату и количество билетов...',
        },
      },
      {
        '@type': 'Question',
        name: 'Какой способ оплаты?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Мы принимаем карты, Яндекс.Касса, СБП...',
        },
      },
    ],
  };

  return (
    <>
      {/* Добавь схему в head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(busServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Контент страницы */}
      <h1>Забронируй билет на автобус до Байкала</h1>
      {/* ... */}
    </>
  );
}
```

### 4️⃣ Ключевые слова (Keywords)

**Правила использования:**
- ✅ Используй ключевые слова в H1, первом параграфе, URL
- ✅ Natural placement - пиши для людей, не для роботов
- ✅ Плотность ключевых слов 1-2% (не спам!)
- ❌ Не повторяй одно слово много раз

```typescript
// ✅ ХОРОШО
<h1>Купить билеты на автобус Иркутск-Ольхон</h1>
<p>Веб-сайт ОльхонЭкспресс предлагает билеты на автобус от Иркутска до Ольхона...</p>

// ❌ ПЛОХО
<h1>Билеты билеты автобус билеты Ольхон билеты</h1>
```

---

## 🛠️ Шаг 2: Technical SEO (Техническая оптимизация)

### 1️⃣ Создание robots.txt

#### Файл: `public/robots.txt`

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/

Sitemap: https://ОльхонЭкспресс.ru/sitemap.xml
Crawl-delay: 2
```

### 2️⃣ Создание Sitemap (XML)

#### Файл: `app/sitemap.ts`

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ОльхонЭкспресс.ru';

  // Статичные страницы
  const staticPages = [
    '',
    '/bus',
    '/bus/search',
    '/bus/schedule/1',
    '/bus/checkout',
    '/bus/confirmation',
    '/bus/profile',
    '/bus/login',
    '/bus/register',
    '/bus/contact',
  ].map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: page === '' ? 1.0 : 0.8,
  }));

  // Динамические страницы (рейсы)
  const schedulePages = [
    { id: '1', priority: 0.8 },
    { id: '2', priority: 0.8 },
    { id: '3', priority: 0.8 },
  ].map((schedule) => ({
    url: `${baseUrl}/bus/schedule/${schedule.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: schedule.priority,
  }));

  return [...staticPages, ...schedulePages];
}
```

### 3️⃣ Создание RSS Feed (для блога)

#### Файл: `app/feed.xml/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const baseUrl = 'https://ОльхонЭкспресс.ru';

  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>ОльхонЭкспресс Travel - Блог о путешествиях</title>
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
```

### 4️⃣ Next.js Metadata в Root Layout

#### Файл: `app/layout.tsx`

```typescript
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  // Основная информация
  metadataBase: new URL('https://ОльхонЭкспресс.ru'),
  title: {
    template: '%s | ОльхонЭкспресс Travel',
    default: 'ОльхонЭкспресс - Забронируй билет на автобус на Байкал',
  },
  description:
    'Онлайн бронирование билетов на автобусные рейсы до Байкала, Ольхона и Листвянки. Низкие цены, безопасная оплата, круглосуточная поддержка.',

  // Favicons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  // Canonicals (для дублей)
  alternates: {
    canonical: 'https://ОльхонЭкспресс.ru',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  // Verification
  verification: {
    google: 'verification-code-from-google', // Получи из Google Search Console
    yandex: 'verification-code-from-yandex', // Получи из Yandex Webmaster
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        {/* Preconnect для улучшения производительности */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch для внешних ресурсов */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
```

### 5️⃣ Meta Tags для каждой страницы

#### Файл: `app/bus/search/page.tsx`

```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Поиск билетов на автобус - ОльхонЭкспресс',
  description:
    'Поиск и бронирование билетов на автобусные рейсы. Выбери маршрут, дату и забронируй билет онлайн.',
  keywords: ['поиск билетов', 'автобус', 'расписание', 'Байкал'],
};

export default function SearchPage() {
  return (
    <>
      <h1>Поиск автобусных билетов</h1>
      {/* ... */}
    </>
  );
}
```

---

## 📊 Шаг 3: User Experience (Поведение пользователей)

### 1️⃣ Page Speed (Скорость загрузки)

#### Оптимизация изображений:

```typescript
import Image from 'next/image';

// ✅ ПРАВИЛЬНО - использование next/image
<Image
  src="/bus-image.jpg"
  alt="Автобус на маршруте Иркутск-Ольхон"
  width={800}
  height={600}
  priority={true} // Для критичных изображений
/>

// ❌ НЕПРАВИЛЬНО
<img src="/bus-image.jpg" />
```

#### Lazy loading для изображений:

```typescript
<Image
  src="/tour-card.jpg"
  alt="Описание тура"
  width={400}
  height={300}
  loading="lazy" // Загруженяется только когда видно в viewport
/>
```

### 2️⃣ Core Web Vitals (Google учитывает)

```typescript
// Файл: app/layout.tsx

// Добавь этот скрипт для отслеживания
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        {children}

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID"
        ></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YOUR-ID', {
              page_path: window.location.pathname,
            });
          `
        }} />
      </body>
    </html>
  );
}
```

### 3️⃣ Mobile Friendly (мобильная версия)

```typescript
// Используй responsive дизайн (уже делаешь с Tailwind)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* Автоматически подстраивается под размер экрана */}
</div>
```

---

## 🔗 Шаг 4: Backlinks (Ссылки)

### Где получить качественные ссылки:

1. **Туристические сайты:**
   - 2gis.ru (добавь свой бизнес)
   - yandex.ru/maps (Yandex Карты)
   - google.com/maps (Google Maps)

2. **Каталоги и справочники:**
   - Яндекс.Справочник
   - Avvo.com (для услуг)
   - Local.yandex.ru

3. **Контент маркетинг:**
   - Напиши статьи на туристических блогах
   - Создай гостевые посты
   - Упоминай свой сайт как источник

4. **Социальные сети:**
   - Facebook, Instagram, ВКонтакте
   - YouTube (видео о путешествиях)
   - Telegram канал

### Как проверить backlinks:

```
- Google Search Console (бесплатно)
- Yandex Webmaster (бесплатно)
- Ahrefs.com (платно, $99+)
- SEMrush (платно, $120+)
```

---

## 📋 Шаг 5: Инструменты для проверки SEO

### Google Search Console (ОБЯЗАТЕЛЬНО)

1. Перейди на https://search.google.com/search-console
2. Добавь свой сайт
3. Загрузи sitemap.xml
4. Следи за ошибками индексации
5. Проверяй клики в поиске

### Yandex Webmaster (для России)

1. Перейди на https://webmaster.yandex.ru
2. Добавь сайт
3. Подтверди право на сайт
4. Загрузи sitemap.xml
5. Следи за индексацией

### Проверка на мобильность

```bash
# Google Mobile-Friendly Test
https://search.google.com/test/mobile-friendly?url=https://ОльхонЭкспресс.ru
```

### PageSpeed Insights

```bash
# Проверь скорость
https://pagespeed.web.dev/?url=https://ОльхонЭкспресс.ru
```

---

## 🎯 Чек-лист SEO оптимизации

### On-Page SEO (Контент)
- [ ] Уникальный, полезный контент (500+ слов на странице)
- [ ] H1 заголовок (только 1 на странице)
- [ ] Meta title (50-60 символов)
- [ ] Meta description (150-160 символов)
- [ ] Ключевые слова в заголовках и первом параграфе
- [ ] Alt текст для изображений
- [ ] Internal links на релевантные страницы
- [ ] Структурированные данные (Schema.org)

### Technical SEO
- [ ] Sitemap.xml создан
- [ ] robots.txt создан
- [ ] Mobile responsive дизайн
- [ ] Быстрая загрузка (< 3 сек)
- [ ] HTTPS включен
- [ ] Нет 404 ошибок
- [ ] Правильная структура URL
- [ ] Canonical tags (для дублей)
- [ ] robots meta tags

### User Experience
- [ ] Легко навигировать
- [ ] Понятный дизайн
- [ ] Быстрая загрузка на мобилях
- [ ] Низкий bounce rate
- [ ] Высокое время на странице
- [ ] Клики в нужные места
- [ ] Доступность (A11y)

### Backlinks & Authority
- [ ] Регистрация в Google My Business
- [ ] Регистрация в Yandex Maps
- [ ] Профили в соцсетях
- [ ] Гостевые посты
- [ ] Упоминания в СМИ
- [ ] Ссылки с авторитетных сайтов

### Monitoring
- [ ] Google Search Console подключена
- [ ] Yandex Webmaster подключена
- [ ] Google Analytics 4 установлена
- [ ] Отслеживание позиций ключевых слов
- [ ] Отслеживание трафика

---

## 💡 Top 10 SEO фактов для Next.js

1. **Metadata в Next.js 13+** - используй `Metadata` export
2. **Dynamic metadata** - можно генерировать для каждой страницы
3. **Image optimization** - используй `next/image` всегда
4. **Sitemap generation** - автоматическое создание в `app/sitemap.ts`
5. **JSON-LD** - добавляй структурированные данные для Google
6. **URL structure** - делай URLs понятными и короткими
7. **Mobile first** - Google индексирует мобильную версию
8. **Core Web Vitals** - Google учитывает скорость и UX
9. **Internal linking** - связывай релевантные страницы
10. **Update regularly** - свежий контент лучше ранжируется

---

## 📈 Примерный результат (3-6 месяцев)

### До оптимизации:
- ❌ Нет позиций в Google
- ❌ Минимум органического трафика
- ❌ Низкие конверсии

### После оптимизации:
- ✅ Top 10 в Google для основных ключевых слов
- ✅ 100+ посещений в месяц из органического поиска
- ✅ 5-10% конверсия в бронирования
- ✅ Рост с каждым месяцем

### Через 12 месяцев:
- ✅ Top 3 в Google для основных запросов
- ✅ 1000+ посещений в месяц
- ✅ Постоянный рост благодаря контент-маркетингу

---

## 🎓 Полезные ресурсы

- **Google Search Central:** https://developers.google.com/search
- **Yandex SEO Guide:** https://yandex.ru/support/webmaster/
- **Ahrefs Learning:** https://ahrefs.com/blog/
- **Moz Learning:** https://moz.com/learn/seo
- **Neil Patel:** https://neilpatel.com/blog/

---

## ⚠️ Что НЕ делать

- ❌ Покупать ссылки
- ❌ Скрывать текст от пользователей
- ❌ Клоакировать контент
- ❌ Спам комментарии с ссылками
- ❌ Наполнять страницу ключевыми словами
- ❌ Копировать контент других сайтов
- ❌ Создавать фермы контента

---

**Главное:** Google хочет видеть *качественный, полезный контент для пользователей*. Оптимизация должна улучшать UX, а не наоборот! 🚀
