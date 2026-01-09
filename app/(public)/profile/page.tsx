"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("bookings");

  // Mock данные пользователя
  const user = {
    name: "Иван Иванов",
    email: "ivanov@example.com",
    phone: "+7 (901) 640-40-40",
    joined: "Апрель 2024",
  };

  // Mock бронирования
  const bookings = [
    {
      id: "BK1234567",
      from: "Иркутск",
      to: "Хужир (Ольхон)",
      date: "15 января 2026",
      time: "07:30",
      status: "confirmed",
      price: 1500,
    },
    {
      id: "BK7654321",
      from: "Листвянка",
      to: "Иркутск",
      date: "10 января 2026",
      time: "17:00",
      status: "completed",
      price: 400,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Профиль */}
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Карточка профиля */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="mb-6 flex flex-col items-center text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                  {user.name.charAt(0)}
                </div>
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="mt-1 text-gray-600">{user.email}</p>
              </div>

              <div className="space-y-4 border-t border-gray-200 pt-6">
                <div>
                  <p className="mb-1 text-sm text-gray-600">Телефон</p>
                  <p className="font-medium text-gray-900">{user.phone}</p>
                </div>

                <div>
                  <p className="mb-1 text-sm text-gray-600">Участник с</p>
                  <p className="font-medium text-gray-900">{user.joined}</p>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <button className="w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                  Редактировать профиль
                </button>
                <button className="w-full rounded-lg border-2 border-red-600 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50">
                  Выход
                </button>
              </div>
            </div>
          </div>

          {/* Статистика */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Всего поездок</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">12</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Потрачено</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">18 500 ₽</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Рейтинг</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">4.9</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                    <svg
                      className="h-6 w-6 text-yellow-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Вкладки */}
        <div className="rounded-xl border border-gray-200 bg-white">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("bookings")}
              className={`flex-1 border-b-2 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === "bookings"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Мои бронирования
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`flex-1 border-b-2 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === "settings"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Настройки
            </button>
          </div>

          <div className="p-8">
            {activeTab === "bookings" && (
              <div className="space-y-4">
                {bookings.length > 0 ? (
                  bookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg"
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {booking.from} → {booking.to}
                          </h3>
                          <p className="mt-2 text-gray-600">
                            {booking.date} в {booking.time}
                          </p>
                          <div className="mt-3 flex items-center gap-2">
                            <span
                              className={`rounded-full px-3 py-1 text-sm font-medium ${
                                booking.status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {booking.status === "completed" ? "Завершено" : "Подтверждено"}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-3xl font-bold text-blue-600">{booking.price} ₽</p>
                          <p className="mt-2 text-sm text-gray-600">Номер: {booking.id}</p>
                          <div className="mt-4 flex gap-2">
                            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                              Просмотреть
                            </button>
                            {booking.status === "confirmed" && (
                              <button className="rounded-lg border border-red-600 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50">
                                Отменить
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-12 text-center">
                    <svg
                      className="mx-auto mb-4 h-12 w-12 text-gray-400"
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
                    <h3 className="mb-2 text-lg font-medium text-gray-900">Нет бронирований</h3>
                    <p className="mb-6 text-gray-600">
                      Начните с бронирования вашей первой поездки
                    </p>
                    <Link href="/search">
                      <button className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700">
                        Найти билет
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === "settings" && (
              <div className="max-w-2xl space-y-6">
                <div>
                  <h3 className="mb-4 font-bold text-gray-900">Личная информация</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Полное имя
                      </label>
                      <input
                        type="text"
                        defaultValue={user.name}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        defaultValue={user.phone}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="mb-4 font-bold text-gray-900">Уведомления</h3>
                  <div className="space-y-4">
                    <label className="flex items-center">
                      <input type="checkbox" defaultChecked className="h-4 w-4 rounded" />
                      <span className="ml-3 text-gray-900">
                        Уведомления по email о статусе поездок
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 rounded" />
                      <span className="ml-3 text-gray-900">Спецпредложения и скидки</span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700">
                    Сохранить изменения
                  </button>
                  <button className="rounded-lg border border-gray-300 px-6 py-2 font-medium text-gray-900 transition-colors hover:bg-gray-50">
                    Отменить
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
