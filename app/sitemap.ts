import type  { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ОльхонЭкспресс.ru';

  // Статичные страницы
  const staticPages = [
    '',
    '/bus',
    '/search',
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