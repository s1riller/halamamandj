import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Управление пользователями | Webkademy Travel",
  description: "Управление учетными записями пользователей",
};

const users = [
  {
    id: 1,
    name: "Иван Иванов",
    email: "ivan@example.com",
    phone: "+7 (901) 640-40-40",
    role: "User",
    joined: "2024-01-10",
    status: "Активный",
  },
  {
    id: 2,
    name: "Елена Сидорова",
    email: "elena@example.com",
    phone: "+7 (902) 750-50-50",
    role: "User",
    joined: "2024-01-12",
    status: "Активный",
  },
  {
    id: 3,
    name: "Петр Петров",
    email: "petr@example.com",
    phone: "+7 (903) 860-60-60",
    role: "Admin",
    joined: "2024-01-01",
    status: "Активный",
  },
  {
    id: 4,
    name: "Анна Смирнова",
    email: "anna@example.com",
    phone: "+7 (904) 970-70-70",
    role: "User",
    joined: "2024-01-08",
    status: "Заблокирован",
  },
  {
    id: 5,
    name: "Марк Волков",
    email: "mark@example.com",
    phone: "+7 (905) 080-80-80",
    role: "User",
    joined: "2024-01-05",
    status: "Активный",
  },
];

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Управление пользователями</h1>
            <p className="mt-2 text-gray-600">
              Просмотр и управление учетными записями пользователей
            </p>
          </div>
          <button className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700">
            + Добавить пользователя
          </button>
        </div>

        {/* Users Table */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200 bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Имя</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Телефон
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Роль</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                    Присоединился
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
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-200 transition-colors hover:bg-gray-50"
                  >
                    <td className="px-6 py-3 text-sm font-medium text-gray-900">{user.name}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{user.email}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{user.phone}</td>
                    <td className="px-6 py-3 text-sm">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          user.role === "Admin"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-600">{user.joined}</td>
                    <td className="px-6 py-3 text-sm">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          user.status === "Активный"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="space-x-2 px-6 py-3 text-sm">
                      <button className="font-medium text-blue-600 hover:text-blue-700">
                        Редакт.
                      </button>
                      <button className="font-medium text-red-600 hover:text-red-700">
                        {user.status === "Активный" ? "Заблок." : "Разблок."}
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
