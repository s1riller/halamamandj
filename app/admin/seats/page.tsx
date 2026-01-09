// app/admin/seats/page.tsx
"use client";

import { useState } from "react";
import RealTimeSeats from "@/components/bus/RealTimeSeats";

export default function AdminSeatsPage() {
  const [selectedSchedule, setSelectedSchedule] = useState("irkutsk-huzhir-0730");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">Управление местами</h1>
      <p className="mb-8 text-gray-600">Просмотр и управление занятостью мест</p>

      <div className="mb-8">
        <label className="mb-2 block text-sm font-medium text-gray-700">Выберите рейс</label>
        <select
          value={selectedSchedule}
          onChange={(e) => setSelectedSchedule(e.target.value)}
          className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500"
        >
          <option value="irkutsk-huzhir-0730">Иркутск → Хужир (07:30)</option>
          <option value="irkutsk-huzhir-0800">Иркутск → Хужир (08:00)</option>
          <option value="huzhir-irkutsk-0900">Хужир → Иркутск (09:00)</option>
          <option value="huzhir-irkutsk-1500">Хужир → Иркутск (15:00)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <RealTimeSeats scheduleId={selectedSchedule} />
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-lg font-bold text-gray-900">Статистика рейса</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Всего мест:</span>
                <span className="font-medium">45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Забронировано:</span>
                <span className="font-medium text-blue-600">18</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Свободно:</span>
                <span className="font-medium text-green-600">27</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Заполняемость:</span>
                <span className="font-bold">40%</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-lg font-bold text-gray-900">Быстрые действия</h3>
            <div className="space-y-3">
              <button className="w-full rounded-lg bg-blue-600 py-2.5 text-white hover:bg-blue-700">
                Заблокировать все места
              </button>
              <button className="w-full rounded-lg bg-green-600 py-2.5 text-white hover:bg-green-700">
                Освободить все места
              </button>
              <button className="w-full rounded-lg border border-gray-300 py-2.5 text-gray-700 hover:bg-gray-50">
                Экспорт в Excel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
