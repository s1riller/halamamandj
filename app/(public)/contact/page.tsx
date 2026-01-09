// app/contacts/page.tsx
import InfoCard from "@/components/bus/InfoCard";
import IOSButton from "@/components/bus/IosButton";
export default function ContactsPage() {
  return (
    <div className="w-full space-y-6 py-8 min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Заголовок страницы */}
        <div className="mb-16 text-center space-y-6 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Свяжитесь с нами
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-black/80 text-lg">
            Мы всегда рады помочь с организацией вашей поездки на Байкал. Свяжитесь с нами удобным для вас способом.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 animate-fadeInUp animation-delay-1">
          {/* Карточка с телефонами и email */}
          <div className="lg:col-span-2">
            <InfoCard
              title="📞 Телефоны и email"
              text="Свяжитесь с нами по телефону или электронной почте"
              details={
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-3 text-sm font-semibold text-cyan-300 uppercase tracking-wider">
                      Телефоны
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center rounded-lg border-2 border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 backdrop-blur">
                        <svg
                          className="mr-3 h-5 w-5 text-cyan-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <div>
                          <p className="font-bold text-cyan-300">+7 (901) 640-40-40</p>
                          <p className="text-sm text-black/80">трансфер и бронирование билетов</p>
                        </div>
                      </div>

                      <div className="flex items-center rounded-lg border-2 border-blue-400/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 backdrop-blur">
                        <svg
                          className="mr-3 h-5 w-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <div>
                          <p className="font-medium text-gray-900">+7 (901) 640-10-10</p>
                          <p className="text-sm text-gray-500">экскурсии и туры</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                      Электронная почта
                    </h4>
                    <div className="flex items-center rounded-lg bg-purple-50 p-3">
                      <svg
                        className="mr-3 h-5 w-5 text-purple-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">olkhon-express@mail.ru</p>
                        <p className="text-sm text-gray-500">по общим вопросам и сотрудничеству</p>
                      </div>
                    </div>
                  </div>
                </div>
              }
              features={[
                "Круглосуточная поддержка",
                "Ответ в течение 1 часа",
                "Консультация на русском и английском",
                "Групповые и индивидуальные запросы",
              ]}
              ctaText="Позвонить сейчас"
              ctaLink="tel:+79016404040"
            />
          </div>

          {/* Карточка с адресами */}
          <div>
            <InfoCard
              title="Адреса отправления"
              text="Места посадки в Иркутске и Хужире"
              details={
                <div className="space-y-6">
                  <div className="rounded-lg bg-amber-50 p-4">
                    <div className="flex items-start">
                      <svg
                        className="mt-0.5 mr-3 h-5 w-5 text-amber-500"
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <h5 className="mb-1 font-medium text-gray-900">Иркутск</h5>
                        <p className="text-sm text-gray-600">
                          ул. Тимирязева, 26/9
                          <br />
                          Автобусная остановка около фотоцентра «Оригинал»
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-emerald-50 p-4">
                    <div className="flex items-start">
                      <svg
                        className="mt-0.5 mr-3 h-5 w-5 text-emerald-500"
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
                      <div>
                        <h5 className="mb-1 font-medium text-gray-900">Хужир</h5>
                        <p className="text-sm text-gray-600">
                          ул. Ленина, 17
                          <br />
                          Центральная улица поселка
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <IOSButton>                      Открыть в картах
                    </IOSButton>
                  </div>
                </div>
              }
            />
          </div>
        </div>

        {/* Карточка с реквизитами компании */}
        <div className="mt-8">
          <InfoCard
            title="Реквизиты компании"
            text="ООО «Ольхон-Экспресс»"
            details={
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <h5 className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                      Юридические данные
                    </h5>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm text-gray-500">ИНН:</span>
                        <p className="font-medium text-gray-900">3808204716</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">ОГРН:</span>
                        <p className="font-medium text-gray-900">1183850018318</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4">
                    <h5 className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                      Почтовый адрес
                    </h5>
                    <p className="font-medium text-gray-900">
                      664011 г. Иркутск,
                      <br />
                      ул. Горького, 27А-12
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                  <div className="flex items-start">
                    <svg
                      className="mt-0.5 mr-3 h-5 w-5 text-blue-500"
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
                    <div>
                      <h5 className="mb-1 font-medium text-gray-900">Официальная компания</h5>
                      <p className="text-sm text-gray-600">
                        Все услуги предоставляются официально с заключением договора и
                        предоставлением всех необходимых документов.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>

        {/* Карточка с рабочими часами */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <InfoCard
              title="Режим работы"
              text="Мы работаем для вас каждый день"
              details={
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-lg bg-green-50 p-4">
                      <h5 className="mb-2 font-medium text-gray-900">
                        Офис и телефонная поддержка
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li className="flex justify-between">
                          <span>Пн-Пт:</span>
                          <span className="font-medium">08:00 - 20:00</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Сб-Вс:</span>
                          <span className="font-medium">09:00 - 18:00</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-blue-50 p-4">
                      <h5 className="mb-2 font-medium text-gray-900">Автобусные рейсы</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li className="flex justify-between">
                          <span>Ежедневно:</span>
                          <span className="font-medium">07:00 - 22:00</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Отправления:</span>
                          <span className="font-medium">по расписанию</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-lg bg-amber-50 p-4">
                    <div className="flex items-start">
                      <svg
                        className="mt-0.5 mr-3 h-5 w-5 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <h5 className="mb-1 font-medium text-gray-900">Экстренная связь</h5>
                        <p className="text-sm text-gray-600">
                          В нерабочее время по экстренным вопросам связаться с водителем можно по
                          номеру +7 (901) 640-40-40
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              }
              features={[
                "Круглосуточная экстренная связь",
                "Онлайн-бронирование 24/7",
                "Поддержка в социальных сетях",
                "Быстрая обработка заявок",
              ]}
            />
          </div>

          {/* Карточка с быстрыми действиями */}
          <div>
            <InfoCard
              title="Быстрые действия"
              text="Полезные ссылки и документы"
              details={
                <div className="space-y-4">
                  <a
                    href="/privacy-policy"
                    className="block rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <svg
                        className="mr-3 h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="font-medium text-gray-900">Политика конфиденциальности</span>
                    </div>
                  </a>

                  <a
                    href="/schedule"
                    className="block rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <svg
                        className="mr-3 h-5 w-5 text-gray-500"
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
                      <span className="font-medium text-gray-900">Расписание рейсов</span>
                    </div>
                  </a>

                  <a
                    href="/faq"
                    className="block rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <svg
                        className="mr-3 h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-medium text-gray-900">Частые вопросы (FAQ)</span>
                    </div>
                  </a>

                  <IOSButton >                    Скачать реквизиты (PDF)
                  </IOSButton>
                </div>
              }
            />
          </div>
        </div>

        {/* Футер страницы */}
        <footer className="mt-12 border-t border-gray-200 pt-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">© 2018 - {new Date().getFullYear()} ООО "Ольхон-Экспресс"</p>
            <p className="text-sm">Все права защищены. Копирование материалов запрещено.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
              <a href="/terms" className="text-gray-500 hover:text-gray-900">
                Пользовательское соглашение
              </a>
              <a href="/privacy-policy" className="text-gray-500 hover:text-gray-900">
                Политика конфиденциальности
              </a>
              <a href="/contract" className="text-gray-500 hover:text-gray-900">
                Договор оферты
              </a>
              <a href="/sitemap" className="text-gray-500 hover:text-gray-900">
                Карта сайта
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
