import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Управление бронированиями | Webkademy Travel",
  description: "Управление всеми бронированиями",
};

const bookings = [
  {
    id: "BK001",
    user: "Иван Иванов",
    route: "Иркутск → Ольхон",
    date: "2024-01-15",
    amount: "₽2,500",
    passengers: 2,
    status: "Подтверждено",
  },
  {
    id: "BK002",
    user: "Елена Сидорова",
    route: "Ольхон → Листвянка",
    date: "2024-01-15",
    amount: "₽1,800",
    passengers: 1,
    status: "В ожидании",
  },
  {
    id: "BK003",
    user: "Петр Петров",
    route: "Иркутск → Листвянка",
    date: "2024-01-14",
    amount: "₽1,200",
    passengers: 1,
    status: "Подтверждено",
  },
  {
    id: "BK004",
    user: "Анна Смирнова",
    route: "Листвянка → Иркутск",
    date: "2024-01-14",
    amount: "₽2,100",
    passengers: 2,
    status: "Отменено",
  },
  {
    id: "BK005",
    user: "Марк Волков",
    route: "Иркутск → Ольхон",
    date: "2024-01-13",
    amount: "₽2,500",
    passengers: 1,
    status: "Подтверждено",
  },
];

export default function BookingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Управление бронированиями</h1>
            <p className="mt-2 text-gray-600">Просмотр, подтверждение и обработка рефундов</p>
          </div>
          <div className="flex gap-2">
            <button className="rounded-lg border border-gray-200 bg-white px-6 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-100">
              Экспорт
            </button>
            <button className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700">
              Фильтры
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow">
            <p className="text-sm text-gray-600">Всего бронирований</p>
            <p className="mt-1 text-3xl font-bold text-gray-900">428</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow">
            <p className="text-sm text-gray-600">Подтверждено</p>
            <p className="mt-1 text-3xl font-bold text-green-600">312</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow">
            <p className="text-sm text-gray-600">В ожидании</p>
            <p className="mt-1 text-3xl font-bold text-yellow-600">56</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow">
            <p className="text-sm text-gray-600">Отменено</p>
            <p className="mt-1 text-3xl font-bold text-red-600">60</p>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200 bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Пользователь
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Маршрут
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Дата</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Пассажиры
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Сумма</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Статус
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-gray-200 transition-colors hover:bg-gray-50"
                  >
                    <td className="px-6 py-3 text-sm font-medium text-gray-900">{booking.id}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{booking.user}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{booking.route}</td>
                    <td className="px-6 py-3 text-sm text-gray-600">{booking.date}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{booking.passengers}</td>
                    <td className="px-6 py-3 text-sm font-medium text-gray-900">
                      {booking.amount}
                    </td>
                    <td className="px-6 py-3 text-sm">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          booking.status === "Подтверждено"
                            ? "bg-green-100 text-green-700"
                            : booking.status === "В ожидании"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="space-x-2 px-6 py-3 text-sm">
                      <button className="font-medium text-blue-600 hover:text-blue-700">
                        Подробнее
                      </button>
                      {booking.status === "Подтверждено" && (
                        <button className="font-medium text-red-600 hover:text-red-700">
                          Рефунд
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8">
          <Link href="/admin/dashboard" className="font-medium text-blue-600 hover:text-blue-700">
            ← Вернуться в админ-панель
          </Link>
        </div>
      </div>
    </div>
  );
}
