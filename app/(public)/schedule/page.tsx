// app/schedule/page.tsx
import InfoCard from "@/components/bus/InfoCard";

export default function SchedulePage() {
  const schedules = [
    {
      from: "Иркутск",
      to: "Хужир (Ольхон)",
      time: "07:30",
      duration: "5-6 часов",
      price: "1500 ₽",
      seats: "18 мест",
      features: ["Wi-Fi", "Кондиционер", "Багаж"],
      type: "утренний",
    },
    {
      from: "Иркутск",
      to: "Хужир (Ольхон)",
      time: "08:00",
      duration: "5-6 часов",
      price: "1500 ₽",
      seats: "22 места",
      features: ["Wi-Fi", "Кондиционер", "Чай/кофе"],
      type: "утренний",
    },
    {
      from: "Иркутск",
      to: "Хужир (Ольхон)",
      time: "14:00",
      duration: "5-6 часов",
      price: "1500 ₽",
      seats: "15 мест",
      features: ["Wi-Fi", "Кондиционер"],
      type: "дневной",
    },
    {
      from: "Хужир (Ольхон)",
      to: "Иркутск",
      time: "09:00",
      duration: "5-6 часов",
      price: "1500 ₽",
      seats: "20 мест",
      features: ["Wi-Fi", "Кондиционер", "Багаж"],
      type: "утренний",
    },
    {
      from: "Хужир (Ольхон)",
      to: "Иркутск",
      time: "15:00",
      duration: "5-6 часов",
      price: "1500 ₽",
      seats: "18 мест",
      features: ["Wi-Fi", "Кондиционер"],
      type: "дневной",
    },
    {
      from: "Хужир (Ольхон)",
      to: "Иркутск",
      time: "16:30",
      duration: "5-6 часов",
      price: "1500 ₽",
      seats: "12 мест",
      features: ["Wi-Fi", "Кондиционер", "Чай/кофе"],
      type: "вечерний",
    },
  ];

  const popularRoutes = [
    {
      route: "Иркутск → Хужир",
      distance: "270 км",
      duration: "5-6 часов",
      frequency: "3-4 рейса в день",
      popularity: "95% заполняемость",
    },
    {
      route: "Хужир → Иркутск",
      distance: "270 км",
      duration: "5-6 часов",
      frequency: "3-4 рейса в день",
      popularity: "90% заполняемость",
    },
    {
      route: "Иркутск → Листвянка",
      distance: "70 км",
      duration: "1.5 часа",
      frequency: "По запросу",
      popularity: "Индивидуальные заказы",
    },
    {
      route: "Аэропорт → Ольхон",
      distance: "290 км",
      duration: "6-7 часов",
      frequency: "По прилету",
      popularity: "Встреча с табличкой",
    },
  ];

  const monthSchedule = [
    {
      month: "Январь",
      status: "✅ Работает",
      note: "Ледовая переправа, теплые автобусы",
    },
    {
      month: "Февраль",
      status: "✅ Работает",
      note: "Пик ледового сезона",
    },
    {
      month: "Март",
      status: "✅ Работает",
      note: "Таяние льда, уникальные фото",
    },
    {
      month: "Апрель",
      status: "✅ Работает",
      note: "Весеннее расписание",
    },
    {
      month: "Май",
      status: "✅ Работает",
      note: "Начало туристического сезона",
    },
    {
      month: "Июнь",
      status: "✅ Работает",
      note: "Летнее расписание, больше рейсов",
    },
    {
      month: "Июль",
      status: "✅ Работает",
      note: "Высокий сезон, бронируйте заранее",
    },
    {
      month: "Август",
      status: "✅ Работает",
      note: "Пик туристического сезона",
    },
    {
      month: "Сентябрь",
      status: "✅ Работает",
      note: "Бархатный сезон, золотая осень",
    },
    {
      month: "Октябрь",
      status: "✅ Работает",
      note: "Осеннее расписание",
    },
    {
      month: "Ноябрь",
      status: "✅ Работает",
      note: "Установление льда",
    },
    {
      month: "Декабрь",
      status: "✅ Работает",
      note: "Зимнее расписание",
    },
  ];

  const specialOffers = [
    {
      title: "Раннее бронирование",
      discount: "-15%",
      condition: "При покупке за 30 дней",
      code: "EARLY15",
    },
    {
      title: "Семейная скидка",
      discount: "-20%",
      condition: "От 3 человек в группе",
      code: "FAMILY20",
    },
    {
      title: "Туда-обратно",
      discount: "-10%",
      condition: "При покупке билетов в обе стороны",
      code: "RETURN10",
    },
    {
      title: "Студенческая",
      discount: "-25%",
      condition: "При предъявлении студенческого",
      code: "STUDENT25",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Герой-секция */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Расписание автобусных рейсов
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Ежедневные комфортабельные автобусы по маршруту Иркутск — Ольхон — Иркутск. Актуальное
            расписание, цены и доступные места.
          </p>
        </div>

        {/* Поиск рейсов */}
        <div className="mb-12">
          <InfoCard
            title="🔍 Найти рейс"
            text="Выберите направление и дату для поиска доступных рейсов"
            details={
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-black/80">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Откуда</label>
                    <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
                      <option  value="">Выберите город отправления</option>
                      <option value="irkutsk">Иркутск</option>
                      <option value="khuzhir">Хужир (Ольхон)</option>
                      <option value="airport">Аэропорт Иркутск</option>
                      <option value="station">Ж/д вокзал Иркутск</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Куда</label>
                    <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
                      <option value="">Выберите город прибытия</option>
                      <option value="khuzhir">Хужир (Ольхон)</option>
                      <option value="irkutsk">Иркутск</option>
                      <option value="listvyanka">Листвянка</option>
                      <option value="other">Другой населенный пункт</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-black/80">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Дата отправления
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Количество пассажиров
                    </label>
                    <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
                      <option>1 пассажир</option>
                      <option>2 пассажира</option>
                      <option>3 пассажира</option>
                      <option>4 пассажира</option>
                      <option>5 и более</option>
                    </select>
                  </div>
                </div>

                <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 py-3.5 text-lg font-bold text-white transition-all hover:from-blue-700 hover:to-blue-800">
                  Найти рейсы
                </button>
              </div>
            }
          />
        </div>

        {/* Текущее расписание */}
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Актуальное расписание</h2>
              <p className="mt-2 text-gray-600">
                На сегодня{" "}
                {new Date().toLocaleDateString("ru-RU", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 font-medium text-blue-600 hover:text-blue-800">
                Скачать PDF →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {schedules.map((schedule, index) => (
              <InfoCard
                key={index}
                title={`${schedule.from} → ${schedule.to}`}
                text={`Время отправления: ${schedule.time} • В пути: ${schedule.duration}`}
                details={
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                          schedule.type === "утренний"
                            ? "bg-blue-100 text-blue-800"
                            : schedule.type === "дневной"
                              ? "bg-green-100 text-green-800"
                              : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {schedule.type}
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{schedule.price}</div>
                        <div className="text-sm text-gray-500">за билет</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                      <div>
                        <div className="text-sm text-gray-600">Свободных мест:</div>
                        <div
                          className={`text-lg font-bold ${
                            parseInt(schedule.seats) > 10
                              ? "text-green-600"
                              : parseInt(schedule.seats) > 5
                                ? "text-amber-600"
                                : "text-red-600"
                          }`}
                        >
                          {schedule.seats}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-gray-600">Пункт отправления:</div>
                        <div className="font-medium text-gray-900">
                          {schedule.from === "Иркутск" ? "ул. Тимирязева, 26/9" : "ул. Ленина, 17"}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {schedule.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 rounded-lg bg-blue-600 py-2.5 font-medium text-white transition-colors hover:bg-blue-700">
                        Выбрать места
                      </button>
                      <button className="rounded-lg border border-gray-300 px-6 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50">
                        Подробнее
                      </button>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>

        {/* Популярные маршруты */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Популярные маршруты</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {popularRoutes.map((route, index) => (
              <InfoCard
                key={index}
                title={route.route}
                text={`${route.distance} • ${route.duration}`}
                details={
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Частота:</span>
                      <span className="font-medium text-gray-900">{route.frequency}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Заполняемость:</span>
                      <span className="font-medium text-green-600">{route.popularity}</span>
                    </div>
                    <button className="mt-2 w-full rounded-lg bg-gray-100 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-200">
                      Смотреть рейсы
                    </button>
                  </div>
                }
              />
            ))}
          </div>
        </div>

        {/* График работы по месяцам */}
        <div className="mb-12">
          <InfoCard
            title="📅 График работы по месяцам"
            text="Мы работаем круглый год! Расписание может меняться в зависимости от сезона."
            details={
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                        Месяц
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                        Статус
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                        Особенности сезона
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthSchedule.map((month, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="font-medium text-gray-900">{month.month}</div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                            {month.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">{month.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          />
        </div>

        {/* Специальные предложения */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Специальные предложения</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {specialOffers.map((offer, index) => (
              <InfoCard
                key={index}
                title={offer.title}
                text={offer.condition}
                details={
                  <div className="text-center">
                    <div className="mb-3 text-4xl font-bold text-blue-600">{offer.discount}</div>
                    <div className="mb-4">
                      <div className="mb-1 text-sm text-gray-500">Промокод:</div>
                      <div className="font-mono text-lg font-bold text-gray-900">{offer.code}</div>
                    </div>
                    <button className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 py-2.5 font-medium text-white transition-all hover:from-blue-600 hover:to-blue-700">
                      Применить скидку
                    </button>
                  </div>
                }
              />
            ))}
          </div>
        </div>

        {/* Важная информация */}
        <div className="mb-12">
          <InfoCard
            title="📋 Важная информация"
            text="Правила перевозки и полезные советы для комфортной поездки"
            details={
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 font-bold text-gray-900">Правила перевозки</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg
                        className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Регистрация за 30 минут до отправления
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Бесплатный багаж до 20 кг на человека
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Дети до 5 лет бесплатно (без отдельного места)
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Отмена бронирования за 24 часа — бесплатно
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 font-bold text-gray-900">Что взять с собой</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg
                        className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-blue-500"
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
                      Паспорт или документ, удостоверяющий личность
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-blue-500"
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
                      Тёплую одежду (даже летом вечером прохладно)
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-blue-500"
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
                      Воду и легкий перекус в дорогу
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-blue-500"
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
                      Зарядное устройство для телефона
                    </li>
                  </ul>
                </div>
              </div>
            }
            ctaText="Скачать правила перевозки (PDF)"
            ctaLink="/rules.pdf"
          />
        </div>

        {/* Частые вопросы */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Частые вопросы</h2>

          <div className="space-y-4">
            <InfoCard
              title="Можно ли изменить дату поездки после покупки билета?"
              text="Да, вы можете изменить дату поездки один раз бесплатно при условии уведомления за 24 часа до отправления."
            />

            <InfoCard
              title="Есть ли туалет в автобусе?"
              text="На маршруте Иркутск-Ольхон предусмотрены санитарные остановки каждые 2-3 часа. В автобусе туалета нет."
            />

            <InfoCard
              title="Как добраться до точки отправления в Иркутске?"
              text="Мы можем организовать трансфер от вашего отеля до точки отправления. Стоимость трансфера уточняйте при бронировании."
            />

            <InfoCard
              title="Что делать, если я опоздал на автобус?"
              text="Свяжитесь с нами по телефону +7 (901) 640-40-40. Мы постараемся предложить альтернативный рейс в течение 24 часов."
            />
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-center text-white">
          <h2 className="mb-4 text-2xl font-bold">Нужна помощь с выбором рейса?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-blue-100">
            Наши операторы помогут подобрать оптимальный рейс, ответят на все вопросы и забронируют
            для вас лучшие места в автобусе.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+79016404040"
              className="rounded-full bg-white px-6 py-3 font-bold text-blue-600 transition-colors hover:bg-blue-50"
            >
              Позвонить: +7 (901) 640-40-40
            </a>
            <button className="rounded-full border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:bg-white/10">
              Написать в WhatsApp
            </button>
          </div>
        </div>

        {/* Футер страницы */}
        <footer className="mt-12 border-t border-gray-200 pt-8">
          <div className="text-center text-gray-600">
            <p className="mb-4">
              © 2018 - {new Date().getFullYear()} ООО "Ольхон-Экспресс" •
              <span className="ml-2 text-sm">
                Расписание обновлено: {new Date().toLocaleDateString("ru-RU")}
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/contacts" className="text-gray-500 hover:text-gray-900">
                Контакты и адреса
              </a>
              <a href="/refund" className="text-gray-500 hover:text-gray-900">
                Возврат билетов
              </a>
              <a href="/agreement" className="text-gray-500 hover:text-gray-900">
                Договор оферты
              </a>
              <a href="/privacy" className="text-gray-500 hover:text-gray-900">
                Политика конфиденциальности
              </a>
            </div>
            <div className="mt-4 text-xs text-gray-500">
              * Расписание может меняться в зависимости от погодных условий и дорожной обстановки.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
