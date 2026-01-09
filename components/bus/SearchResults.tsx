"use client";

import Link from "next/link";
import IOSButton from "./IosButton";
interface SearchResult {
  id: string;
  from: string;
  to: string;
  time: string;
  duration: string;
  price: number;
  seats: number;
  features: string[];
  type: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  from: string;
  to: string;
  date: string;
}

export default function SearchResults({ results, from, to, date }: SearchResultsProps) {
  return (
    <div className="w-full space-y-6 py-8 min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      {/* Заголовок поиска */}
      <div className="animate-fadeInUp space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          🚌 {from} → {to}
        </h1>
        <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-black/60">
          <span className="flex items-center gap-2">📅 {date}</span>
          <span className="flex items-center gap-2">🔍 Найдено <span className="font-bold text-cyan-400">{results.length}</span> рейсов</span>
        </div>
      </div>

      {/* Фильтры */}
      <div className="animate-fadeInUp animation-delay-1 rounded-2xl border-2 border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] p-6 backdrop-blur-xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-black/70">Сортировка</label>
            <select className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-black focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 outline-none transition-all">
              <option className="bg-slate-950">По времени отправления</option>
              <option className="bg-slate-950">По цене (дешевле первыми)</option>
              <option className="bg-slate-950">По длительности</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-black/70">Цена</label>
            <select className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-black focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 outline-none transition-all">
              <option className="bg-slate-950">Любая</option>
              <option className="bg-slate-950">До 1 500 ₽</option>
              <option className="bg-slate-950">1 500 - 2 000 ₽</option>
              <option className="bg-slate-950">Более 2 000 ₽</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-black/70">
              Время отправления
            </label>
            <select className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-black focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 outline-none transition-all">
              <option className="bg-slate-950">Любое</option>
              <option className="bg-slate-950">Утренние (6:00-12:00)</option>
              <option className="bg-slate-950">Дневные (12:00-18:00)</option>
              <option className="bg-slate-950">Вечерние (18:00+)</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-black/70">Удобства</label>
            <select className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-black focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 outline-none transition-all">
              <option className="bg-slate-950">Все</option>
              <option className="bg-slate-950">Wi-Fi</option>
              <option className="bg-slate-950">Кондиционер</option>
              <option className="bg-slate-950">Питание</option>
            </select>
          </div>
        </div>
      </div>

        {/* Список рейсов */}
        {results.length > 0 ? (
          <div className="space-y-4 animate-fadeInUp animation-delay-2">
            {results.map((result, idx) => (
              <Link key={result.id} href={`/schedule/${result.id}`}>
                <div 
                  className="group cursor-pointer mx-8 rounded-2xl border-2 border-black/10 bg-gradient-to-r from-white/5 to-white/[0.02] p-6 shadow-xl hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-105 transition-all duration-300 backdrop-blur-xl animate-slideInLeft"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-5">
                    {/* Время и маршрут */}
                    <div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{result.time}</div>
                      <div className="mt-2 text-sm text-black/70 group-hover:text-black/90 transition-colors">
                        {result.from} → {result.to}
                      </div>
                      <div className="mt-1 text-xs text-black/50">⏱️ {result.duration}</div>
                    </div>

                    {/* Свободных мест */}
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <div className="text-sm text-black/60">Свободных мест</div>
                        <div className="text-2xl font-bold text-green-400">{result.seats} 🪑</div>
                      </div>
                    </div>

                    {/* Удобства */}
                    <div>
                      <div className="mb-2 text-sm text-black/60">Удобства</div>
                      <div className="flex flex-wrap gap-2">
                        {result.features.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 px-2.5 py-1 text-xs font-medium text-cyan-800 backdrop-blur"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Рейтинг */}
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-black/70">4.8</span>
                    </div>

                    {/* Цена и кнопка */}
                    <div className="flex flex-col items-end gap-3">
                      <div className="text-right">
                        <div className="text-sm text-black/60">Цена за место</div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{result.price} ₽</div>
                      </div>
                      <IOSButton className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-110">
                        Выбрать
                      </IOSButton>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-12 text-center backdrop-blur-xl animate-fadeInUp">
            <svg
              className="mx-auto mb-4 h-16 w-16 text-cyan-400/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h3 className="mb-2 text-xl font-bold text-black">Рейсов не найдено</h3>
            <p className="mb-6 text-black/60">Попробуйте изменить параметры поиска или дату</p>
            <Link href="/">
              <button className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
                Новый поиск
              </button>
            </Link>
          </div>
        )}
      </div>

  );
}
