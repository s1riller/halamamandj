"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CitySelect from "./CitySelect";
import DateInput from "./DateInput";

export default function SearchCard() {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [filledFields, setFilledFields] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let count = 0;
    if (from) count++;
    if (to) count++;
    if (date) count++;
    setFilledFields(count);
  }, [from, to, date]);

  const isFormValid = filledFields === 3;
  const progressPercentage = (filledFields / 3) * 100;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      router.push(
        `/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}`
      );
    }
  };

  return (
    <section className="animate-fadeInUp space-y-6 rounded-3xl glass border-2 border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="text-2xl">🎫</span>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-800 via-blue-800 to-indigo-900 bg-clip-text text-transparent drop-shadow-lg">
          Забронируй билет
        </h2>
        <p className="text-black/60 whitespace-nowrap">Легко и быстро</p>
      </div>

      <form onSubmit={handleSearch} className="space-y-6">
        {/* Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <CitySelect label="Откуда" placeholder="Выберите город" value={from} onChange={setFrom} />
          </div>

          <div>
            <CitySelect label="Куда" placeholder="Выберите город" value={to} onChange={setTo} />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-black">Когда</label>
            <DateInput value={date} onChange={setDate} />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-black/70">Прогресс заполнения</span>
            <span className="text-xs font-bold text-cyan-400">{filledFields}/3</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10 border border-white/20">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-lg shadow-cyan-400/50 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Выделяющаяся кнопка */}
        <div className="relative">
          {/* Свечение вокруг кнопки когда форма заполнена */}
          {isFormValid && (
            <div className={`absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl blur-lg opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-50' : 'opacity-30'}`} />
          )}
          
          <button
  type="submit"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  className={`w-full py-5 rounded-xl font-bold text-lg transition-all duration-500 relative overflow-hidden group ${
    isFormValid
      ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 text-black shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:scale-[1.02] active:scale-[0.98] animate-pulse"
      : "bg-white/10 text-black/50 opacity-50 cursor-not-allowed"
  }`}
  disabled={!isFormValid}
>
  {/* Анимированный блеск */}
  {isFormValid && (
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
  )}
  
  {/* Текст кнопки */}
  <span className="relative flex items-center justify-center gap-3">
    {isFormValid ? (
      <>
        <span className="text-2xl group-hover:rotate-12 group-hover:scale-125 transition-all duration-300">🚀</span>
        <span className="text-xl tracking-wide">НАЙТИ РЕЙСЫ</span>
      </>
    ) : (
      <span>Заполните все поля</span>
    )}
  </span>
</button>
          
          {/* Индикатор готовности */}

        </div>
        
        {/* Дополнительная мотивация */}
        {filledFields > 0 && filledFields < 3 && (
          <p className="text-center text-sm text-cyan-300/80 animate-pulse">
            Ещё {3 - filledFields} поле для поиска билетов!
          </p>
        )}
        
       
      </form>
    </section>
  );
}