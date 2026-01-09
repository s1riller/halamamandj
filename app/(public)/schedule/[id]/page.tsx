
import Link from "next/link";
import { use } from "react";

// Mock данные расписания
const allSchedules = [
  {
    id: "irkutsk-huzhir-0730",
    from: "Иркутск",
    to: "Хужир (Ольхон)",
    time: "07:30",
    arrivalTime: "13:30",
    duration: "5-6 часов",
    price: 1500,
    seats: 18,
    features: ["Wi-Fi", "Кондиционер", "Багаж", "Тепло одеяло"],
    type: "утренний",
    busType: "Комфортный микроавтобус",
    driver: "Иван Петров",
    driverRating: 4.8,
    description:
      "Удобный маршрут с остановками на пути для отдыха и снеков. Опытный водитель знает все лучшие места для фотографий.",
    amenities: [
      { name: "Wi-Fi на борту", icon: "📡" },
      { name: "Кондиционер", icon: "❄️" },
      { name: "Большой багажник", icon: "🎒" },
      { name: "Тёплое одеяло", icon: "🛏️" },
      { name: "Зарядное устройство", icon: "🔌" },
      { name: "Туалет", icon: "🚽" },
    ],
    reviews: [
      {
        name: "Мария К.",
        rating: 5,
        text: "Отличный рейс! Водитель очень приветливый, рассказал много интересного о Байкале.",
        date: "5 дней назад",
      },
      {
        name: "Алексей С.",
        rating: 4,
        text: "Комфортная дорога, правда немного задержались из-за пробок в городе.",
        date: "1 неделю назад",
      },
      {
        name: "Елена Р.",
        rating: 5,
        text: "Спасибо за волшебное путешествие! Будем ездить только с вами!",
        date: "2 недели назад",
      },
    ],
  },
  // Добавьте больше расписаний для статической генерации
  {
    id: "irkutsk-huzhir-0800",
    from: "Иркутск",
    to: "Хужир (Ольхон)",
    time: "08:00",
    arrivalTime: "14:00",
    duration: "5-6 часов",
    price: 1500,
    seats: 22,
    features: ["Wi-Fi", "Кондиционер", "Чай/кофе"],
    type: "утренний",
    busType: "Комфортный микроавтобус",
    driver: "Петр Сидоров",
    driverRating: 4.9,
    description: "Рейс с горячими напитками на борту. Идеальный выбор для раннего путешествия.",
    amenities: [
      { name: "Wi-Fi", icon: "📡" },
      { name: "Кондиционер", icon: "❄️" },
      { name: "Чай/кофе", icon: "☕" },
      { name: "Зарядка", icon: "🔌" },
    ],
    reviews: [
      {
        name: "Сергей В.",
        rating: 5,
        text: "Отличный кофе на борту! Водитель вежливый и профессиональный.",
        date: "3 дня назад",
      },
    ],
  },
  {
    id: "huzhir-irkutsk-0900",
    from: "Хужир (Ольхон)",
    to: "Иркутск",
    time: "09:00",
    arrivalTime: "15:00",
    duration: "5-6 часов",
    price: 1500,
    seats: 20,
    features: ["Wi-Fi", "Кондиционер", "Багаж"],
    type: "утренний",
    busType: "Комфортный микроавтобус",
    driver: "Алексей Иванов",
    driverRating: 4.7,
    description: "Обратный рейс с Ольхона. Комфортабельный автобус с большим багажным отделением.",
    amenities: [
      { name: "Wi-Fi", icon: "📡" },
      { name: "Кондиционер", icon: "❄️" },
      { name: "Багажник", icon: "🎒" },
    ],
    reviews: [
      {
        name: "Ольга М.",
        rating: 4,
        text: "Удобно, что есть место для большого багажа. Рейс вовремя.",
        date: "1 неделю назад",
      },
    ],
  },
];

interface Params {
  id: string;
}

// Добавьте эту функцию для статического экспорта
export function generateStaticParams() {
  return allSchedules.map((schedule) => ({
    id: schedule.id,
  }));
}

export default function ScheduleDetailPage(props: { params: Promise<Params> }) {
  const params = use(props.params);
  const schedule = allSchedules.find((s) => s.id === params.id);

  if (!schedule) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 via-white to-gray-50">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">Рейс не найден</h1>
          <Link href="/search">
            <button className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
              Вернуться к поиску
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const avgRating = (
    schedule.reviews.reduce((sum, r) => sum + r.rating, 0) / schedule.reviews.length
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Заголовок */}
        <div className="mb-8">
          <Link href="/search">
            <button className="mb-4 flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700">
              ← Вернуться к поиску
            </button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">
            {schedule.from} → {schedule.to}
          </h1>
          <p className="mt-2 text-gray-600">{schedule.busType}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Основная информация */}
          <div className="space-y-6 lg:col-span-2">
            {/* Время и маршрут */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-5xl font-bold text-gray-900">{schedule.time}</div>
                  <p className="mt-2 text-gray-600">Отправление</p>
                </div>

                <div className="mx-8 flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-gray-500">{schedule.duration}</span>
                    <span className="text-sm text-gray-500">{schedule.duration}</span>
                  </div>
                  <div className="h-1 rounded-full bg-gradient-to-r from-blue-600 to-green-600"></div>
                </div>

                <div>
                  <div className="text-5xl font-bold text-gray-900">{schedule.arrivalTime}</div>
                  <p className="mt-2 text-gray-600">Прибытие</p>
                </div>
              </div>
            </div>

            {/* Описание */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">О маршруте</h2>
              <p className="mb-6 leading-relaxed text-gray-700">{schedule.description}</p>

              <h3 className="mb-4 font-bold text-gray-900">Водитель</h3>
              <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {schedule.driver.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{schedule.driver}</p>
                  <div className="flex items-center gap-1 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(schedule.driverRating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-600">{schedule.driverRating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Удобства */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Удобства на борту</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {schedule.amenities.map((amenity) => (
                  <div
                    key={amenity.name}
                    className="flex items-center gap-3 rounded-lg bg-blue-50 p-4"
                  >
                    <span className="text-2xl">{amenity.icon}</span>
                    <span className="text-sm font-medium text-gray-900">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Отзывы */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Отзывы</h2>
              <div className="space-y-4">
                {schedule.reviews.map((review, idx) => (
                  <div key={idx} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="mb-2 flex items-start justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "text-yellow-400" : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Боковая панель */}
          <div className="space-y-6">
            {/* Карточка цены */}
            <div className="sticky top-8 rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-6 font-bold text-gray-900">Выбрать рейс</h3>

              <div className="mb-6 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-600">Цена за место</span>
                  <span className="text-2xl font-bold text-blue-600">{schedule.price} ₽</span>
                </div>

                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-600">Свободных мест</span>
                  <span className="font-bold text-green-600">{schedule.seats}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Рейтинг рейса</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i <
                          Math.round(
                            schedule.reviews.reduce((sum, r) => sum + r.rating, 0) /
                              schedule.reviews.length
                          )
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{avgRating}</span>
                  </div>
                </div>
              </div>

              <Link href={`/bus/booking?rideId=${schedule.id}`}>
                <button className="mb-3 w-full rounded-lg bg-blue-600 py-3 font-bold text-white transition-colors hover:bg-blue-700">
                  Забронировать билет
                </button>
              </Link>

              <button className="w-full rounded-lg border-2 border-blue-600 py-3 font-bold text-blue-600 transition-colors hover:bg-blue-50">
                Поделиться
              </button>
            </div>

            {/* Полезная информация */}
            <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6">
              <h3 className="mb-3 flex items-center gap-2 font-bold text-yellow-900">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Полезная информация
              </h3>
              <ul className="space-y-2 text-sm text-yellow-900">
                <li>• Приезжайте за 15 минут до отправления</li>
                <li>• При отмене возврат за 3 часа до рейса</li>
                <li>• Багаж до 20 кг включен в стоимость</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}