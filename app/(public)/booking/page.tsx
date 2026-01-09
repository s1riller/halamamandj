// app/booking/page.tsx
import RealTimeSeats from "@/components/bus/RealTimeSeats";

export default function BookingPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">Выбор мест</h1>
      <p className="mb-8 text-gray-600">Выберите удобные места в автобусе</p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RealTimeSeats scheduleId="irkutsk-huzhir-0730" />
        </div>

        <div className="space-y-6">
          {/* Информация о рейсе */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="mb-4 font-bold text-gray-900">Детали рейса</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Маршрут:</span>
                <span className="font-medium">Иркутск → Хужир</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Дата:</span>
                <span className="font-medium">15 декабря 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Время:</span>
                <span className="font-medium">07:30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Цена за место:</span>
                <span className="font-bold text-blue-600">1 500 ₽</span>
              </div>
            </div>
          </div>

          {/* Итоговая сумма */}
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="mb-4 font-bold text-gray-900">Ваш заказ</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Места:</span>
                <span id="selected-seats-count">0</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Итого:</span>
                <span id="total-price">0 ₽</span>
              </div>
              <button className="w-full rounded-lg bg-blue-600 py-3 font-bold text-white transition-colors hover:bg-blue-700">
                Продолжить оформление
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
