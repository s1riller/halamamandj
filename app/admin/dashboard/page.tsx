import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Админ-панель | OlkhonExpress Travel",
  description: "Админ-панель для управления сайтом",
};

const stats = [
  { label: "Всего бронирований", value: "428", icon: "🎟️", color: "from-blue-500 to-blue-600" },
  { label: "Активные рейсы", value: "24", icon: "🚌", color: "from-green-500 to-green-600" },
  {
    label: "Зарегистрировано пользователей",
    value: "1.2K",
    icon: "👥",
    color: "from-purple-500 to-purple-600",
  },
  { label: "Доход", value: "₽2.4M", icon: "💰", color: "from-orange-500 to-orange-600" },
];

const recentBookings = [
  {
    id: "BK001",
    user: "Иван Иванов",
    route: "Иркутск → Ольхон",
    date: "2024-01-15",
    amount: "₽2,500",
    status: "Подтверждено",
  },
  {
    id: "BK002",
    user: "Елена Сидорова",
    route: "Ольхон → Листвянка",
    date: "2024-01-15",
    amount: "₽1,800",
    status: "В ожидании",
  },
  {
    id: "BK003",
    user: "Петр Петров",
    route: "Иркутск → Листвянка",
    date: "2024-01-14",
    amount: "₽1,200",
    status: "Подтверждено",
  },
  {
    id: "BK004",
    user: "Анна Смирнова",
    route: "Листвянка → Иркутск",
    date: "2024-01-14",
    amount: "₽2,100",
    status: "Отменено",
  },
  {
    id: "BK005",
    user: "Марк Волков",
    route: "Иркутск → Ольхон",
    date: "2024-01-13",
    amount: "₽2,500",
    status: "Подтверждено",
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Админ-панель</h1>
          <p className="mt-2 text-gray-600">Управление сайтом и бронированиями</p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white shadow-lg`}
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-medium opacity-90">{stat.label}</h3>
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Management Sections */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Рейсы",
              href: "/admin/schedules",
              icon: "🚌",
              desc: "Управление расписанием",
            },
            {
              title: "Пользователи",
              href: "/admin/users",
              icon: "👥",
              desc: "Управление аккаунтами",
            },
            {
              title: "Бронирования",
              href: "/admin/bookings",
              icon: "🎟️",
              desc: "История бронирований",
            },
            {
              title: "Статистика",
              href: "/admin/statistics",
              icon: "📊",
              desc: "Аналитика и отчеты",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow transition-shadow hover:border-blue-300 hover:shadow-lg"
            >
              <div className="mb-3 text-4xl">{item.icon}</div>
              <h3 className="mb-1 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </Link>
          ))}
        </div>

        {/* Recent Bookings */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <h2 className="text-xl font-bold text-gray-900">Последние бронирования</h2>
          </div>

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
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Сумма</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Статус
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-gray-200 transition-colors hover:bg-gray-50"
                  >
                    <td className="px-6 py-3 text-sm font-medium text-gray-900">{booking.id}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{booking.user}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{booking.route}</td>
                    <td className="px-6 py-3 text-sm text-gray-600">{booking.date}</td>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
            <Link href="/admin/bookings" className="font-medium text-blue-600 hover:text-blue-700">
              Смотреть все бронирования →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
