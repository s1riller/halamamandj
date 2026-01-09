"use client";

import { useSearchParams } from "next/navigation";
import SearchResults from "@/components/bus/SearchResults";
import { Suspense } from "react";

// Mock данные расписания
const allSchedules = [
  {
    id: "irkutsk-huzhir-0730",
    from: "Иркутск",
    to: "Хужир (Ольхон)",
    time: "07:30",
    duration: "5-6 часов",
    price: 1500,
    seats: 18,
    features: ["Wi-Fi", "Кондиционер", "Багаж"],
    type: "утренний",
  },
  {
    id: "irkutsk-huzhir-0800",
    from: "Иркутск",
    to: "Хужир (Ольхон)",
    time: "08:00",
    duration: "5-6 часов",
    price: 1500,
    seats: 22,
    features: ["Wi-Fi", "Кондиционер", "Чай/кофе"],
    type: "утренний",
  },
  {
    id: "irkutsk-huzhir-1400",
    from: "Иркутск",
    to: "Хужир (Ольхон)",
    time: "14:00",
    duration: "5-6 часов",
    price: 1500,
    seats: 15,
    features: ["Wi-Fi", "Кондиционер"],
    type: "дневной",
  },
  {
    id: "huzhir-irkutsk-0900",
    from: "Хужир (Ольхон)",
    to: "Иркутск",
    time: "09:00",
    duration: "5-6 часов",
    price: 1500,
    seats: 20,
    features: ["Wi-Fi", "Кондиционер", "Багаж"],
    type: "утренний",
  },
  {
    id: "huzhir-irkutsk-1500",
    from: "Хужир (Ольхон)",
    to: "Иркутск",
    time: "15:00",
    duration: "5-6 часов",
    price: 1500,
    seats: 25,
    features: ["Wi-Fi", "Кондиционер"],
    type: "дневной",
  },
  {
    id: "irkutsk-listvyanka-0600",
    from: "Иркутск",
    to: "Листвянка",
    time: "06:00",
    duration: "1 час",
    price: 400,
    seats: 30,
    features: ["Кондиционер"],
    type: "утренний",
  },
  {
    id: "listvyanka-irkutsk-1700",
    from: "Листвянка",
    to: "Иркутск",
    time: "17:00",
    duration: "1 час",
    price: 400,
    seats: 28,
    features: ["Кондиционер"],
    type: "вечерний",
  },
  {
    id: "irkutsk-talcy-0700",
    from: "Иркутск",
    to: "Тальцы",
    time: "07:00",
    duration: "1.5 часа",
    price: 500,
    seats: 25,
    features: ["Wi-Fi", "Кондиционер"],
    type: "утренний",
  },
];

// Основной контент, который использует useSearchParams
function SearchContent() {
  const searchParams = useSearchParams();

  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const date = searchParams.get("date") || "";

  // Фильтруем результаты
  const results = allSchedules.filter((schedule) => {
    const matchesFrom = !from || schedule.from.toLowerCase().includes(from.toLowerCase());
    const matchesTo = !to || schedule.to.toLowerCase().includes(to.toLowerCase());
    return matchesFrom && matchesTo;
  });

  return (
    <div className="space-y-6 w-full">
      <SearchResults results={results} from={from} to={to} date={date || "Не выбрана"} />
    </div>
  );
}

// Компонент загрузки
function SearchLoading() {
  return (
    <div className="space-y-6 w-full">
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Загрузка результатов поиска...</p>
        </div>
      </div>
    </div>
  );
}

// Основной компонент страницы
export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchContent />
    </Suspense>
  );
}