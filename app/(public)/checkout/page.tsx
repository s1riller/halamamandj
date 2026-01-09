"use client";

import Link from "next/link";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Выносим основной контент в отдельный компонент
function CheckoutContent() {
  const searchParams = useSearchParams();
  const rideId = searchParams.get("rideId") || "irkutsk-huzhir-0730";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    passportNumber: "",
    birthDate: "",
    paymentMethod: "card",
  });

  const [passengers, setPassengers] = useState([{ id: 1, name: "Пассажир 1", price: 1500 }]);

  const totalPrice = passengers.reduce((sum, p) => sum + p.price, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Переход на страницу подтверждения
    window.location.href = "/bus/confirmation";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">Оформление заказа</h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Основная форма */}
          <div className="space-y-6 lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Информация пассажира */}
              <div className="rounded-xl border border-gray-200 bg-white p-8">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Информация пассажира</h2>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Имя *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Иван"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Фамилия *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Иванов"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="ivanov@example.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Номер телефона *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="+7 (900) 123-45-67"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Номер паспорта *
                      </label>
                      <input
                        type="text"
                        name="passportNumber"
                        value={formData.passportNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="1234 567890"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Дата рождения *
                      </label>
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Способ оплаты */}
              <div className="rounded-xl border border-gray-200 bg-white p-8">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Способ оплаты</h2>

                <div className="space-y-4">
                  <label className="flex cursor-pointer items-center rounded-lg border-2 border-blue-600 bg-blue-50 p-4">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleInputChange}
                      className="h-4 w-4"
                    />
                    <svg
                      className="ml-3 h-6 w-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h8m4 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span className="ml-3 font-medium text-gray-900">Банковская карта</span>
                  </label>

                  <label className="flex cursor-pointer items-center rounded-lg border-2 border-gray-300 p-4 transition hover:border-gray-400">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="yandex"
                      checked={formData.paymentMethod === "yandex"}
                      onChange={handleInputChange}
                      className="h-4 w-4"
                    />
                    <span className="ml-3 font-medium text-gray-900">Яндекс.Касса</span>
                  </label>

                  <label className="flex cursor-pointer items-center rounded-lg border-2 border-gray-300 p-4 transition hover:border-gray-400">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="sbp"
                      checked={formData.paymentMethod === "sbp"}
                      onChange={handleInputChange}
                      className="h-4 w-4"
                    />
                    <span className="ml-3 font-medium text-gray-900">СБП (через банк)</span>
                  </label>
                </div>
              </div>

              {/* Условия */}
              <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6">
                <div className="flex gap-3">
                  <input type="checkbox" required className="mt-1 h-5 w-5" />
                  <div>
                    <p className="text-sm text-gray-900">
                      Я согласен с{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        условиями использования
                      </Link>{" "}
                      и{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        политикой конфиденциальности
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Кнопка оплаты */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 text-lg font-bold text-white transition-colors hover:bg-blue-700"
              >
                Оплатить {totalPrice} ₽
              </button>
            </form>
          </div>

          {/* Итог заказа */}
          <div className="space-y-6">
            <div className="sticky top-8 rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-6 font-bold text-gray-900">Ваш заказ</h3>

              <div className="mb-6 space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <p className="mb-2 text-sm text-gray-600">Рейс</p>
                  <p className="font-medium text-gray-900">Иркутск → Хужир (Ольхон)</p>
                  <p className="mt-1 text-sm text-gray-500">07:30 (15 января 2026)</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="mb-2 text-sm text-gray-600">Количество мест</p>
                  <p className="font-medium text-gray-900">1 место</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="mb-3 text-sm text-gray-600">Пассажиры</p>
                  <div className="space-y-2">
                    {passengers.map((p) => (
                      <div key={p.id} className="flex justify-between text-sm">
                        <span className="text-gray-700">{p.name}</span>
                        <span className="font-medium text-gray-900">{p.price} ₽</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">Итого:</span>
                    <span className="text-3xl font-bold text-blue-600">{totalPrice} ₽</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-3">
                <p className="text-sm text-green-900">
                  ✓ Гарантия возврата в течение 3 часов до отправления
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Компонент загрузки
function CheckoutLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Загрузка данных...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Основной компонент страницы
export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutLoading />}>
      <CheckoutContent />
    </Suspense>
  );
}