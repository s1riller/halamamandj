import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Управление рейсами | OlkhonExpress Travel",
  description: "Управление расписанием автобусов",
};

const schedules = [
  {
    id: 1,
    from: "Иркутск",
    to: "Ольхон",
    time: "08:00",
    duration: "4h 30m",
    seats: "42/45",
    driver: "Иван Петров",
    status: "Активно",
  },
  {
    id: 2,
    from: "Ольхон",
    to: "Листвянка",
    time: "10:30",
    duration: "3h 15m",
    seats: "38/45",
    driver: "Петр Иванов",
    status: "Активно",
  },
  {
    id: 3,
    from: "Иркутск",
    to: "Листвянка",
    time: "14:00",
    duration: "2h 30m",
    seats: "42/45",
    driver: "Марк Волков",
    status: "Активно",
  },
  {
    id: 4,
    from: "Листвянка",
    to: "Иркутск",
    time: "16:30",
    duration: "2h 45m",
    seats: "0/45",
    driver: "Анна Сидорова",
    status: "Отменено",
  },
];

export default function SchedulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Управление рейсами</h1>
            <p className="mt-2 text-gray-600">
              Добавляйте, редактируйте и удаляйте автобусные маршруты
            </p>
          </div>
          <button className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700">
            + Добавить рейс
          </button>
        </div>

        {/* Schedules Table */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200 bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Маршрут
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Время</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Длительность
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Места</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Водитель
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Статус
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((schedule) => (
                  <tr
                    key={schedule.id}
                    className="border-b border-gray-200 transition-colors hover:bg-gray-50"
                  >
                    <td className="px-6 py-3 text-sm font-medium text-gray-900">#{schedule.id}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">
                      {schedule.from} → {schedule.to}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700">{schedule.time}</td>
                    <td className="px-6 py-3 text-sm text-gray-600">{schedule.duration}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{schedule.seats}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{schedule.driver}</td>
                    <td className="px-6 py-3 text-sm">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          schedule.status === "Активно"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {schedule.status}
                      </span>
                    </td>
                    <td className="space-x-2 px-6 py-3 text-sm">
                      <button className="font-medium text-blue-600 hover:text-blue-700">
                        Редакт.
                      </button>
                      <button className="font-medium text-red-600 hover:text-red-700">
                        Удалить
                      </button>
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
