"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ConfirmationPage() {
  const [bookingNumber, setBookingNumber] = useState("");

  useEffect(() => {
    // Генерируем номер бронирования
    setBookingNumber("BK" + Math.random().toString(36).substr(2, 8).toUpperCase());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Success заголовок */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-10 w-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h1 className="mb-3 text-4xl font-bold text-gray-900">Заказ подтвержден!</h1>
          <p className="text-xl text-gray-600">Ваш билет успешно забронирован и оплачен</p>
        </div>

        {/* Основная информация */}
        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Номер бронирования и QR */}
            <div className="flex flex-col items-center justify-center border-r border-gray-200">
              <p className="mb-2 text-sm text-gray-600">Номер бронирования</p>
              <p className="mb-6 text-3xl font-bold text-blue-600">{bookingNumber}</p>

              {/* QR код */}
              <div className="mb-4 rounded-lg border border-gray-200 bg-gray-50 p-6">
                <svg className="h-32 w-32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="white" />
                  <rect width="20" height="20" fill="black" />
                  <rect x="80" width="20" height="20" fill="black" />
                  <rect y="80" width="20" height="20" fill="black" />
                  <rect
                    x="30"
                    y="30"
                    width="40"
                    height="40"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                  />
                  {/* Генерируем некоторые черные квадраты */}
                  {[...Array(25)].map(
                    (_, i) =>
                      Math.random() > 0.5 && (
                        <rect
                          key={i}
                          x={Math.floor(i / 5) * 16 + 20}
                          y={(i % 5) * 16 + 20}
                          width="3"
                          height="3"
                          fill="black"
                        />
                      )
                  )}
                </svg>
              </div>

              <p className="text-center text-xs text-gray-500">Покажите этот код при посадке</p>
            </div>

            {/* Детали поездки */}
            <div className="space-y-6">
              <div>
                <p className="mb-1 text-sm text-gray-600">Маршрут</p>
                <p className="text-xl font-bold text-gray-900">Иркутск → Хужир (Ольхон)</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-1 text-sm text-gray-600">Дата отправления</p>
                  <p className="font-semibold text-gray-900">15 января 2026</p>
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-600">Время</p>
                  <p className="font-semibold text-gray-900">07:30</p>
                </div>
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-600">Место отправления</p>
                <p className="font-semibold text-gray-900">ул. Ленина, 5, Иркутск</p>
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-600">Место прибытия</p>
                <p className="font-semibold text-gray-900">Центр туризма Хужир, о. Ольхон</p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="mb-1 text-sm text-gray-600">Цена</p>
                <p className="text-2xl font-bold text-blue-600">1 500 ₽</p>
              </div>
            </div>
          </div>
        </div>

        {/* Информация о пассажире */}
        <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Информация о пассажире</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-600">Полное имя</p>
              <p className="font-medium text-gray-900">Иван Иванов</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium text-gray-900">ivanov@example.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Телефон</p>
              <p className="font-medium text-gray-900">+7 (901) 640-40-40</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Номер паспорта</p>
              <p className="font-medium text-gray-900">1234 567890</p>
            </div>
          </div>
        </div>

        {/* Полезная информация */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Приезжайте заранее</h3>
                <p className="mt-1 text-sm text-gray-600">за 15 минут до отправления</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Гарантия возврата</h3>
                <p className="mt-1 text-sm text-gray-600">за 3 часа до отправления</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                <svg
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Контакты поддержки</h3>
                <p className="mt-1 text-sm text-gray-600">+7 (901) 640-40-40</p>
              </div>
            </div>
          </div>
        </div>

        {/* Кнопки действий */}
        <div className="space-y-3 sm:flex sm:gap-4 sm:space-y-0">
          <button className="flex-1 rounded-lg bg-blue-600 py-3 font-bold text-white transition-colors hover:bg-blue-700">
            Скачать билет
          </button>

          <button className="flex-1 rounded-lg border-2 border-blue-600 py-3 font-bold text-blue-600 transition-colors hover:bg-blue-50">
            Отправить на email
          </button>

          <Link href="/" className="flex-1">
            <button className="w-full rounded-lg border-2 border-gray-300 py-3 font-bold text-gray-900 transition-colors hover:border-gray-400">
              На главную
            </button>
          </Link>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-8">
          <h3 className="mb-4 text-lg font-bold text-gray-900">Что дальше?</h3>
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-4">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                1
              </span>
              <span>На указанный email придет подтверждение с номером бронирования</span>
            </li>
            <li className="flex gap-4">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                2
              </span>
              <span>Приезжайте в пункт отправления за 15 минут до времени в билете</span>
            </li>
            <li className="flex gap-4">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                3
              </span>
              <span>Предъявите номер бронирования или QR-код водителю при посадке</span>
            </li>
            <li className="flex gap-4">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                4
              </span>
              <span>Отправляйтесь в путешествие! Приятной дороги!</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
