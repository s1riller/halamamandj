// app/page.tsx

import SearchCard from "@/components/bus/SearchCard";
import InfoCard from "@/components/bus/InfoCard";
import type { Metadata } from 'next';

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
        url: '/public/x-logo.png',
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

export default function Home() {
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
    
 <div className="min-h-screen bg-gradient-to-b from-blue-100/90 via-white/95 to-gray-50/90 backdrop-blur-sm supports-[backdrop-filter]:backdrop-blur-sm overflow-x-hidden">      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar для десктопа */}

          {/* Основной контент */}
          <main className="flex-1 px-4 py-6 lg:px-8 lg:py-8">
            {/* Hero секция */}
            <div className="mb-16 space-y-8">


              {/* Main heading */}
              <div className="text-center space-y-6">
                {/* Badge */}
                <div className="inline-block px-4 py-2 rounded-full bg-cyan-100 border border-cyan-400/50 backdrop-blur">
                  <span className="text-cyan-700 text-sm font-semibold">✨ Путешествуй удобно и безопасно</span>
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                    Билеты на Байкал
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-900 via-cyan-700 to-gray-900 bg-clip-text text-transparent">
                    За несколько кликов
                  </span>
                </h1>

                {/* Description */}
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ежедневные рейсы Иркутск → Ольхон. Комфортные автобусы, безопасная оплата, 24/7 поддержка.
                </p>
              </div>
            </div>

            {/* Поиск билетов */}
            <div className="mb-16">
              <SearchCard />
            </div>

            {/* Быстрые ссылки */}
            <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4 animate-fadeInUp animation-delay-1">
              <a
                href="/schedule"
                className="group rounded-2xl bg-gradient-to-b from-gray-100 to-blue-100 p-6 shadow-sm hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center space-y-3">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 border border-cyan-300 group-hover:border-cyan-400 transition-colors">
                    <svg
                      className="h-7 w-7 text-cyan-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors">
                    📅 Расписание
                  </span>
                </div>
              </a>

              <a
                href="/Tours"
                className="group rounded-2xl bg-gradient-to-b from-gray-100 to-blue-100 p-6 shadow-sm hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center space-y-3">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 group-hover:border-cyan-300/50 transition-colors">
                    <svg
                      className="h-7 w-7 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6V4m6 2a6 6 0 11-12 0 6 6 0 0112 0zM12 9v3m-3-1h6"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors">
                    🎫 Туры
                  </span>
                </div>
              </a>

              <a
                href="/contact"
                className="group rounded-2xl bg-gradient-to-b from-gray-100 to-blue-100 p-6 shadow-sm hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center space-y-3">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 group-hover:border-cyan-300/50 transition-colors">
                    <svg
                      className="h-7 w-7 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors">
                    📧 Контакты
                  </span>
                </div>
              </a>

              <a
                href="/profile"
                className="group rounded-2xl bg-gradient-to-b from-gray-100 to-blue-100 p-6 shadow-sm hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center space-y-3">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 group-hover:border-cyan-300/50 transition-colors">
                    <svg
                      className="h-7 w-7 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors">
                    👤 Профиль
                  </span>
                </div>
              </a>
            </div>

            {/* Основные услуги */}
            <div className="space-y-8 animate-fadeInUp animation-delay-2">
              {/* Рейсы Иркутск — Ольхон */}
              <InfoCard
                title="Рейсы Иркутск — Ольхон"
                text="Ежедневные комфортабельные автобусы прямо до вашего отеля в Хужире"
                details={
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="rounded-2xl border-2 border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 backdrop-blur">
                        <h4 className="mb-3 text-lg font-bold text-cyan-300">✨ Комфорт</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center text-black/80 hover:text-black transition-colors">
                            <svg
                              className="mr-3 h-5 w-5 text-cyan-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Кондиционер и отопление
                          </li>
                          <li className="flex items-center text-black/80 hover:text-black transition-colors">
                            <svg
                              className="mr-3 h-5 w-5 text-cyan-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Мягкие откидные кресла
                          </li>
                          <li className="flex items-center text-black/80 hover:text-black transition-colors">
                            <svg
                              className="mr-3 h-5 w-5 text-cyan-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Бесплатный Wi-Fi
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-2xl border-2 border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 backdrop-blur">
                        <h4 className="mb-3 text-lg font-bold text-blue-300">🔒 Безопасность</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center text-black/80 hover:text-black transition-colors">
                            <svg
                              className="mr-3 h-5 w-5 text-blue-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Опытные водители 1 класса
                          </li>
                          <li className="flex items-center text-black/80 hover:text-black transition-colors">
                            <svg
                              className="mr-3 h-5 w-5 text-blue-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Ежедневный техосмотр
                          </li>
                          <li className="flex items-center text-black/80 hover:text-black transition-colors">
                            <svg
                              className="mr-3 h-5 w-5 text-blue-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Страхование пассажиров
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-xl bg-blue-50 p-6">
                      <h4 className="mb-3 font-bold text-gray-900">📍 Точки отправления</h4>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="rounded-lg bg-white p-4">
                          <div className="mb-2 flex items-center">
                            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                              <span className="font-bold text-blue-600">И</span>
                            </div>
                            <h5 className="font-medium text-gray-900">Иркутск</h5>
                          </div>
                          <p className="text-sm text-gray-600">
                            ул. Тимирязева, 26/9 (фотоцентр «Оригинал»)
                          </p>
                        </div>

                        <div className="rounded-lg bg-white p-4">
                          <div className="mb-2 flex items-center">
                            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                              <span className="font-bold text-green-600">Х</span>
                            </div>
                            <h5 className="font-medium text-gray-900">Хужир</h5>
                          </div>
                          <p className="text-sm text-gray-600">ул. Ленина, 17 (центр поселка)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                features={[
                  "2-3 рейса ежедневно",
                  "5-6 часов в пути",
                  "Время отправления 07:30, 08:00, 14:00",
                  "Доставка до отеля",
                  "Багажное отделение",
                ]}
                ctaText="Смотреть расписание"
                ctaLink="/schedule"
              />

              {/* Индивидуальные трансферы */}
              <InfoCard
                title="🚐 Индивидуальные трансферы"
                text="Персональные перевозки для групп любого размера от 1 до 45 человек"
                details={
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                      <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-4 text-center">
                        <div className="mb-1 text-2xl font-bold text-purple-600">1-3</div>
                        <div className="text-sm text-gray-600">Легковой автомобиль</div>
                      </div>

                      <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-4 text-center">
                        <div className="mb-1 text-2xl font-bold text-blue-600">4-8</div>
                        <div className="text-sm text-gray-600">Минивэн</div>
                      </div>

                      <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-4 text-center">
                        <div className="mb-1 text-2xl font-bold text-green-600">8-19</div>
                        <div className="text-sm text-gray-600">Микроавтобус</div>
                      </div>

                      <div className="rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 p-4 text-center">
                        <div className="mb-1 text-2xl font-bold text-orange-600">до 45</div>
                        <div className="text-sm text-gray-600">Автобус</div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-gradient-to-r from-сyan-400 to-gray-100 p-6">
                      <h4 className="mb-4 font-bold text-gray-900">🎯 Идеально для:</h4>
                      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div className="rounded-lg bg-white p-3 text-center">
                          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                            <svg
                              className="h-5 w-5 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                              />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-gray-800">Корпоративы</span>
                        </div>

                        <div className="rounded-lg bg-white p-3 text-center">
                          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                            <svg
                              className="h-5 w-5 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13 0h-6"
                              />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-gray-800">Семьи</span>
                        </div>

                        <div className="rounded-lg bg-white p-3 text-center">
                          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                            <svg
                              className="h-5 w-5 text-purple-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-gray-800">Туры</span>
                        </div>

                        <div className="rounded-lg bg-white p-3 text-center">
                          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                            <svg
                              className="h-5 w-5 text-amber-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                              />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-gray-800">Встречи</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 p-6">
                      <h4 className="mb-3 font-bold text-gray-900">📞 Как заказать трансфер?</h4>
                      <ol className="space-y-3">
                        <li className="flex items-start">
                          <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-black">
                            1
                          </span>
                          <span className="text-gray-700">
                            Позвоните по телефону{" "}
                            <strong className="text-blue-600">+7 (901) 640-40-40</strong>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-black">
                            2
                          </span>
                          <span className="text-gray-700">
                            Сообщите дату, время и количество человек
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-black">
                            3
                          </span>
                          <span className="text-gray-700">Укажите адреса посадки и высадки</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-black">
                            4
                          </span>
                          <span className="text-gray-700">
                            Получите подтверждение с деталями поездки
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                }
                features={[
                  "Встреча с табличкой",
                  "Помощь с багажом",
                  "Детские кресла",
                  "Бесплатная отмена за 24 часа",
                  "Онлайн-отслеживание",
                ]}
                ctaText="Заказать трансфер"
                ctaLink="/individual"
              />

              {/* Экскурсии */}
              <InfoCard
                title="🗺️ Экскурсии по Байкалу"
                text="Более 15 уникальных маршрутов по самому глубокому озеру планеты"
                details={
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6">
                        <div className="mb-4 flex items-center">
                          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                            <svg
                              className="h-6 w-6 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Ольхон: Мыс Бурхан</h4>
                            <p className="text-sm text-gray-600">
                              Священная Шаман-скала и Сарайский пляж
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-green-600">от 3 500 ₽</span>
                          <span className="text-sm text-gray-500">1 день</span>
                        </div>
                      </div>

                      <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
                        <div className="mb-4 flex items-center">
                          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                            <svg
                              className="h-6 w-6 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Листвянка + музей</h4>
                            <p className="text-sm text-gray-600">
                              Знакомство с Байкалом в миниатюре
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-blue-600">от 4 200 ₽</span>
                          <span className="text-sm text-gray-500">1 день</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 p-6">
                      <h4 className="mb-4 font-bold text-gray-900">✅ Что включено в экскурсии?</h4>
                      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div className="rounded-lg bg-white p-3 text-center">
                          <svg
                            className="mx-auto mb-2 h-8 w-8 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <div className="text-sm font-medium text-gray-800">Транспорт</div>
                        </div>

                        <div className="rounded-lg bg-white p-3 text-center">
                          <svg
                            className="mx-auto mb-2 h-8 w-8 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          <div className="text-sm font-medium text-gray-800">Гид</div>
                        </div>

                        <div className="rounded-lg bg-white p-3 text-center">
                          <svg
                            className="mx-auto mb-2 h-8 w-8 text-purple-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                          </svg>
                          <div className="text-sm font-medium text-gray-800">Билеты</div>
                        </div>

                        <div className="rounded-lg bg-white p-3 text-center">
                          <svg
                            className="mx-auto mb-2 h-8 w-8 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <div className="text-sm font-medium text-gray-800">Страховка</div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-gray-100 p-6 text-black">
                      <h4 className="mb-3 text-xl font-bold">🌟 Почему выбирают нас?</h4>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="p-3 text-center">
                          <div className="mb-1 text-3xl font-bold text-amber-400">10+</div>
                          <div className="text-sm text-gray-300">Лет опыта</div>
                        </div>
                        <div className="p-3 text-center">
                          <div className="mb-1 text-3xl font-bold text-green-400">5000+</div>
                          <div className="text-sm text-gray-300">Довольных туристов</div>
                        </div>
                        <div className="p-3 text-center">
                          <div className="mb-1 text-3xl font-bold text-blue-400">15+</div>
                          <div className="text-sm text-gray-300">Маршрутов</div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                features={[
                  "Лицензированные гиды",
                  "На русском и английском",
                  "Фотосессии на память",
                  "Групповые и индивидуальные",
                  "Сезонные программы",
                ]}
                ctaText="Выбрать экскурсию"
                ctaLink="/tours"
              />
            </div>

            {/* Призыв к действию */}
            <div className="mt-12 rounded-2xl border-2 text-black/80 border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 backdrop-blur">
              <h2 className="mb-4 text-2xl font-bold">Готовы отправиться в путешествие?</h2>
              <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                Забронируйте билеты на автобус, закажите трансфер или выберите экскурсию прямо
                сейчас. Мы позаботимся о вашем комфорте и безопасности.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button className="rounded-full bg-white px-6 py-3 font-bold text-blue-600 transition-colors hover:bg-blue-50">
                  Купить билет онлайн
                </button>
                <button className="rounded-full border-2 border-white bg-transparent px-6 py-3 font-bold text-black transition-colors hover:bg-white/10">
                  Позвонить: +7 (901) 640-40-40
                </button>
              </div>
            </div>

            {/* Футер главной страницы */}
            <footer className="mt-12 border-t border-gray-200 pt-8">
              <div className="text-center text-gray-600">
                <p className="mb-4">© 2018 - {new Date().getFullYear()} ООО "Ольхон-Экспресс"</p>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <a href="/about" className="text-gray-500 hover:text-gray-900">
                    О компании
                  </a>
                  <a href="/reviews" className="text-gray-500 hover:text-gray-900">
                    Отзывы
                  </a>
                  <a href="/partners" className="text-gray-500 hover:text-gray-900">
                    Партнерам
                  </a>
                  <a href="/contacts" className="text-gray-500 hover:text-gray-900">
                    Контакты
                  </a>
                  <a href="/privacy" className="text-gray-500 hover:text-gray-900">
                    Политика конфиденциальности
                  </a>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
