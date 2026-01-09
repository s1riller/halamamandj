"use client";

import { useState, useRef, useEffect } from "react";

const WEEK_DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

interface DateInputProps {
  value?: string;
  onChange?: (date: string) => void;
}

export default function DateInput({ value, onChange }: DateInputProps) {
  const today = new Date();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = (firstDayOfMonth.getDay() + 6) % 7; // Пн = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Синхронизация с внешним значением
  useEffect(() => {
    if (value === null || value === undefined || value === "") {
      setSelectedDate(null);
    } else {
      try {
        const date = new Date(value);
        if (!isNaN(date.getTime())) {
          setSelectedDate(date);
        }
      } catch (error) {
        console.error("Invalid date value:", value);
        setSelectedDate(null);
      }
    }
  }, [value]);

  // Обработчик выбора даты
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    // Преобразуем дату в строку формата YYYY-MM-DD
    const dateString = date.toISOString().split("T")[0];
    onChange?.(dateString);
    setOpen(false);
  };

  // Закрытие меню при клике вне элемента и нажатии Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div ref={wrapperRef} className="relative">
      {/* Input */}
      <input
        readOnly
        value={selectedDate ? formatDate(selectedDate) : ""}
        placeholder="Выберите дату"
        onClick={() => setOpen(!open)}
        className="w-full rounded-full border border-gray-300 px-4 py-2 text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      {/* Calendar */}
      {open && (
        <div className="z-50 flex items-end bg-black/30 md:fixed md:inset-auto md:items-start md:bg-transparent">
          <div className="mdF:top-full w-full rounded-t-2xl bg-white p-4 shadow-xl md:absolute md:left-0 md:mt-2 md:w-72 md:rounded-2xl md:shadow-lg">
            {/* Mobile header */}

            {/* Desktop header */}
            <div className="mb-4 flex items-center justify-between">
              <button
                onClick={() => setCurrentMonth(new Date(year, month - 1, 1))}
                className="text-2xl text-gray-500 hover:text-black"
              >
                ‹
              </button>

              <span className="text-sm text-xl font-semibold text-gray-500">
                {currentMonth.toLocaleDateString("ru-RU", {
                  month: "long",
                  year: "numeric",
                })}
              </span>

              <button
                onClick={() => setCurrentMonth(new Date(year, month + 1, 1))}
                className="text-2xl text-gray-500 hover:text-black"
              >
                ›
              </button>
            </div>

            {/* Week days */}
            <div className="mb-2 grid grid-cols-7 text-xs text-gray-500">
              {WEEK_DAYS.map((day) => (
                <div key={day} className="text-center">
                  {day}
                </div>
              ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: startDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}

              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const date = new Date(year, month, day);
                const isPast = date < new Date(today.setHours(0, 0, 0, 0));
                const isSelected = selectedDate?.toDateString() === date.toDateString();

                return (
                  <button
                    key={day}
                    disabled={isPast}
                    onClick={() => {
                      setSelectedDate(date);
                      setOpen(false);
                      handleDateSelect(date);
                    }}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm transition ${
                      isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                    } ${isPast ? "cursor-not-allowed text-gray-300" : "text-black"} `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
