// app/tours/page.tsx
import InfoCard from "@/components/bus/InfoCard";
import IOSButton from "@/components/bus/IosButton";

export default function ToursPage() {
  const popularTours = [
    {
      title: "Классический Ольхон: Мыс Бурхан и Сарайский пляж",
      duration: "1 день",
      price: "от 3 500 ₽",
      features: ["Трансфер", "Опытный гид", "Обед", "Фотосессия"],
      description:
        "Знакомство с главными символами Ольхона - священным мысом Бурхан (Шаман-скала) и самым длинным песчаным пляжем на Байкале.",
    },
    {
      title: "Северный Ольхон: Мыс Хобой и Урочище Песчаное",
      duration: "2 дня",
      price: "от 8 900 ₽",
      features: ["Ночлег в гостевом доме", "Питание включено", "Внедорожник", "Экскурсовод"],
      description:
        "Экспедиция к самой северной точке острова с уникальными скальными образованиями и живописными панорамами.",
    },
    {
      title: "Вокруг Байкала: Иркутск - Листвянка - Тальцы",
      duration: "1 день",
      price: "от 4 200 ₽",
      features: ["Музей Байкала", "Тальцинский музей", "Рыбный рынок", "Канатная дорога"],
      description:
        "Познавательный тур по самым известным достопримечательностям западного побережья Байкала.",
    },
    {
      title: "Конный тур по степям Ольхона",
      duration: "3-4 часа",
      price: "от 2 800 ₽",
      features: ["Инструктор", "Снаряжение", "Чай у костра", "Страховка"],
      description:
        "Прогулка на лошадях по степным ландшафтам острова с посещением древних культовых мест.",
    },
  ];

  const seasonalTours = [
    {
      title: "Ледовый тур: Путешествие по байкальскому льду",
      duration: "Зима (декабрь-март)",
      price: "от 5 900 ₽",
      features: ["Ледовые пещеры", "Гроты", "Пузырьки льда", "Термос с чаем"],
      description:
        "Эксклюзивный зимний тур по замерзшему Байкалу с посещением ледовых образований.",
    },
    {
      title: "Осенняя фото-экспедиция",
      duration: "Сентябрь-Октябрь",
      price: "от 6 500 ₽",
      features: ["Фотограф-гид", "Триподы", "Обработка фото", "Электронный альбом"],
      description: "Тур для фотографов в период золотой осени с лучшими видами для съемки.",
    },
    {
      title: "Весеннее пробуждение Байкала",
      duration: "Апрель-Май",
      price: "от 4 800 ₽",
      features: ["Тающий лед", "Первая зелень", "Птичьи базары", "Горячий обед"],
      description:
        "Наблюдение за уникальным явлением - таянием байкальского льда и пробуждением природы.",
    },
  ];

  const adventureTours = [
    {
      title: "Треккинг по Прибайкальскому хребту",
      duration: "2-3 дня",
      price: "от 12 000 ₽",
      features: ["Палатки", "Повар", "Снаряжение", "Медицинская страховка"],
      description:
        "Пеший поход по горным тропам с ночевками в палатках и видами на Байкал с высоты.",
    },
    {
      title: "Велотур вокруг Ольхона",
      duration: "2 дня",
      price: "от 7 500 ₽",
      features: ["Аренда велосипеда", "Ремнабор", "Шлем", "Сопровождение"],
      description: "Активное путешествие на велосипедах по степным и лесным дорогам острова.",
    },
    {
      title: "Водная экскурсия на катере",
      duration: "4-5 часов",
      price: "от 6 800 ₽",
      features: ["Катер", "Спасательные жилеты", "Рыбалка", "Купание в заливах"],
      description: "Прогулка на катере по Малому Морю с посещением уединенных бухт.",
    },
  ];

  const tourTypes = [
    {
      title: "🚌 Автобусные экскурсии",
      description: "Комфортабельные автобусы с гидом, подходят для всех возрастов",
      count: "8 маршрутов",
    },
    {
      title: "🚙 Индивидуальные туры",
      description: "Персональные программы на внедорожниках с индивидуальным гидом",
      count: "от 2 человек",
    },
    {
      title: "🥾 Активные туры",
      description: "Треккинг, велотуры, конные прогулки для любителей активного отдыха",
      count: "5 программ",
    },
    {
      title: "❄️ Сезонные туры",
      description: "Специальные программы в зависимости от времени года",
      count: "4 сезона",
    },
  ];

  return (
    <div className="w-full space-y-6 py-8 min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Герой-секция */}
        <div className="mb-16 text-center space-y-8 animate-fadeInUp">
          {/* Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur">
            <span className="text-cyan-300 text-sm font-semibold">🎫 Экскурсии по Байкалу</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Откройте красоту Байкала
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-3xl text-lg text-black/80">
            Более 15 уникальных экскурсионных маршрутов. Опытные гиды. Безопасность гарантирована. Для любого времени года.
          </p>

          {/* IOSButtons */}
          <div className="flex flex-wrap justify-center gap-4">
            <IOSButton className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black/80 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
              🎫 Выбрать экскурсию
            </IOSButton>
            <IOSButton>
              👨‍🏫 Консультация гида
            </IOSButton>
            <IOSButton >              ⭐ Отзывы
            </IOSButton>
          </div>
        </div>

        {/* Виды экскурсий */}
        <div className="mb-16">
          <h2 className="mb-12 text-center text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Виды экскурсий
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 animate-fadeInUp animation-delay-1">
            {tourTypes.map((type, index) => (
              <InfoCard
                key={index}
                title={type.title}
                text={type.description}
                details={
                  <div className="mt-4">
                    <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 p-3">
                      <span className="text-sm text-black/80">Доступно:</span>
                      <span className="font-semibold text-cyan-400">{type.count}</span>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>

        {/* Популярные экскурсии */}
        <div className="mb-16">
          <div className="mb-12 space-y-4">
            <h2></h2>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">🌟 Популярные экскурсии</h2>
            <p className="text-black/80 text-lg">Самые востребованные маршруты среди туристов</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 animate-fadeInUp animation-delay-2">
            {popularTours.map((tour, index) => (
              <InfoCard
                key={index}
                title={tour.title}
                text={tour.description}
                details={
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-black/80">
                          <svg
                            className="mr-2 h-5 w-5 text-cyan-400"
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
                          <span className="font-medium">{tour.duration}</span>
                        </div>
                        <div className="text-lg font-bold text-blue-600">
                          {tour.price}
                          <span className="text-sm text-gray-500"> / чел</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {tour.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <IOSButton className="w-full inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text- black transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
                        Забронировать экскурсию
                      </IOSButton>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>

        {/* Сезонные туры */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Сезонные туры</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {seasonalTours.map((tour, index) => (
              <InfoCard
                key={index}
                title={tour.title}
                text={tour.description}
                details={
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                        {tour.duration}
                      </span>
                      <span className="text-lg font-bold text-gray-900">{tour.price}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {tour.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <IOSButton className="w-full inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text- black transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
                      Подробнее о туре
                    </IOSButton>
                  </div>
                }
              />
            ))}
          </div>
        </div>

        {/* Активные туры */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Активные туры для искателей приключений
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {adventureTours.map((tour, index) => (
              <InfoCard
                key={index}
                title={tour.title}
                text={tour.description}
                details={
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg
                          className="mr-2 h-5 w-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                        <span className="font-medium text-gray-700">{tour.duration}</span>
                      </div>
                      <span className="text-lg font-bold text-green-600">{tour.price}</span>
                    </div>

                    <div>
                      <h5 className="mb-2 text-sm font-medium text-gray-700">Включено:</h5>
                      <ul className="space-y-1">
                        {tour.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <svg
                              className="mr-2 h-4 w-4 text-green-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2">
                      <IOSButton className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text- black transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
                        Забронировать
                      </IOSButton>
                      <IOSButton className="flex-1 rounded-lg border border-gray-300 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50">
                        Программа
                      </IOSButton>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>

        {/* Преимущества */}
        <div className="mb-16">
          <InfoCard
            title="Почему выбирают наши экскурсии?"
            text="Более 10 лет опыта организации туров на Байкале"
            details={
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="p-4 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <svg
                      className="h-8 w-8 text-blue-600"
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
                  </div>
                  <h4 className="mb-2 font-bold text-gray-900">Лицензированные гиды</h4>
                  <p className="text-gray-600">
                    Все гиды имеют аккредитацию и знают Байкал как свои пять пальцев
                  </p>
                </div>

                <div className="p-4 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-8 w-8 text-green-600"
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
                  </div>
                  <h4 className="mb-2 font-bold text-gray-900">Безопасность</h4>
                  <p className="text-gray-600">
                    Страховка, проверенное оборудование и регулярный контроль маршрутов
                  </p>
                </div>

                <div className="p-4 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                    <svg
                      className="h-8 w-8 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-2 font-bold text-gray-900">Более 5000 довольных туристов</h4>
                  <p className="text-gray-600">
                    Высокие оценки на TripAdvisor и отзывы в социальных сетях
                  </p>
                </div>
              </div>
            }
            ctaText="Посмотреть отзывы"
            ctaLink="/reviews"
          />
        </div>

        {/* Форма выбора экскурсии */}
        <div className="mb-16">
          <InfoCard
            title="Подобрать экскурсию"
            text="Ответьте на несколько вопросов, и мы подберем идеальный тур для вас"
            details={
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Количество человек
                    </label>
                    <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
                      <option>1-2 человека</option>
                      <option>3-5 человек</option>
                      <option>6-10 человек</option>
                      <option>Более 10 человек</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Предпочитаемый вид тура
                    </label>
                    <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
                      <option>Автобусная экскурсия</option>
                      <option>Индивидуальный тур</option>
                      <option>Активный отдых</option>
                      <option>Сезонный тур</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Даты поездки
                  </label>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      placeholder="Дата начала"
                    />
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      placeholder="Дата окончания"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Дополнительные пожелания
                  </label>
                  <textarea
                    className="h-32 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    placeholder="Расскажите о ваших интересах, ограничениях по здоровью, предпочтениях в питании..."
                  />
                </div>

                <IOSButton className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 py-3 text-lg font-medium text-black/80 transition-all hover:from-blue-700 hover:to-blue-800">
                  Получить подборку туров
                </IOSButton>
              </div>
            }
          />
        </div>

      
      </div>
    </div>
  );
}
