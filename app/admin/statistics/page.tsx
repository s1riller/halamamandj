import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Статистика | Webkademy Travel",
  description: "Аналитика и статистика сайта",
};

const monthlyData = [
  { month: "Январь", bookings: 380, revenue: "₽1.9M", users: 280 },
  { month: "Февраль", bookings: 420, revenue: "₽2.1M", users: 320 },
  { month: "Март", bookings: 450, revenue: "₽2.25M", users: 380 },
  { month: "Апрель", bookings: 490, revenue: "₽2.45M", users: 420 },
];

const topRoutes = [
  { route: "Иркутск → Ольхон", bookings: 156, revenue: "₽780K", popularity: "98%" },
  { route: "Ольхон → Листвянка", bookings: 128, revenue: "₽640K", popularity: "85%" },
  { route: "Иркутск → Листвянка", bookings: 112, revenue: "₽560K", popularity: "75%" },
  { route: "Листвянка → Иркутск", bookings: 98, revenue: "₽490K", popularity: "65%" },
];

export default function StatisticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Статистика и аналитика</h1>
          <p className="mt-2 text-gray-600">Подробный анализ производительности сайта</p>
        </div>

        {/* Key Metrics */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg">
            <p className="text-sm opacity-90">Среднее бронирование</p>
            <p className="mt-2 text-4xl font-bold">₽2,180</p>
            <p className="mt-1 text-xs opacity-75">↑ 12% от прошлого месяца</p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white shadow-lg">
            <p className="text-sm opacity-90">Коэффициент конверсии</p>
            <p className="mt-2 text-4xl font-bold">28.4%</p>
            <p className="mt-1 text-xs opacity-75">↑ 3.2% от прошлого месяца</p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white shadow-lg">
            <p className="text-sm opacity-90">Удовлетворение</p>
            <p className="mt-2 text-4xl font-bold">4.7/5.0</p>
            <p className="mt-1 text-xs opacity-75">Из 1200 отзывов</p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white shadow-lg">
            <p className="text-sm opacity-90">Новые пользователи</p>
            <p className="mt-2 text-4xl font-bold">156</p>
            <p className="mt-1 text-xs opacity-75">↑ 18% от прошлого месяца</p>
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Тренды по месяцам</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Месяц</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Бронирований
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Доход</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Новых пользователей
                  </th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((data) => (
                  <tr key={data.month} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-3 text-sm font-medium text-gray-900">{data.month}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{data.bookings}</td>
                    <td className="px-6 py-3 text-sm font-medium text-green-600">{data.revenue}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{data.users}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Routes */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Популярные маршруты</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Маршрут
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Бронирований
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Доход</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Популярность
                  </th>
                </tr>
              </thead>
              <tbody>
                {topRoutes.map((route) => (
                  <tr key={route.route} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-3 text-sm font-medium text-gray-900">{route.route}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{route.bookings}</td>
                    <td className="px-6 py-3 text-sm font-medium text-green-600">
                      {route.revenue}
                    </td>
                    <td className="px-6 py-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-20 overflow-hidden rounded-full bg-gray-200">
                          <div
                            className="h-full bg-blue-600"
                            style={{
                              width: route.popularity,
                            }}
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-700">
                          {route.popularity}
                        </span>
                      </div>
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
