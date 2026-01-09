"use client";

import { useState, useEffect } from "react";

interface SimpleBusSeatsProps {
  scheduleId: string;
}

export default function SimpleBusSeats({ scheduleId }: SimpleBusSeatsProps) {
  // Упрощенная схема: 12 рядов, 4 места в ряду (2+2)
  const rows = 12;
  const seatsPerRow = 4;

  const [occupiedSeats, setOccupiedSeats] = useState<Set<string>>(new Set());
  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Имитация занятых мест
    const occupied = new Set<string>();
    for (let row = 1; row <= rows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        if (Math.random() > 0.7) {
          occupied.add(`${row}-${seat}`);
        }
      }
    }
    setOccupiedSeats(occupied);
  }, [scheduleId]);

  const toggleSeat = (seatId: string) => {
    if (occupiedSeats.has(seatId)) return;

    setSelectedSeats((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(seatId)) {
        newSet.delete(seatId);
      } else {
        newSet.add(seatId);
      }
      return newSet;
    });
  };

  const getSeatPosition = (seatNum: number) => {
    switch (seatNum) {
      case 1:
        return { label: "A", side: "left", type: "window" };
      case 2:
        return { label: "B", side: "left", type: "aisle" };
      case 3:
        return { label: "C", side: "right", type: "aisle" };
      case 4:
        return { label: "D", side: "right", type: "window" };
      default:
        return { label: seatNum.toString(), side: "center", type: "center" };
    }
  };

  const getSeatColor = (seatId: string) => {
    if (occupiedSeats.has(seatId)) return "bg-red-100 border-red-300";
    if (selectedSeats.has(seatId)) return "bg-blue-500 border-blue-600 text-white";
    return "bg-gray-100 border-gray-300 hover:bg-gray-200";
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-bold text-gray-900">Выберите места</h4>
        <div className="text-sm text-gray-600">
          Выбрано: <span className="font-bold">{selectedSeats.size}</span> мест
        </div>
      </div>

      {/* Схема автобуса */}
      <div className="mb-6">
        {/* Кабина */}
        <div className="mb-4 flex justify-center">
          <div className="flex h-8 w-16 items-center justify-center rounded-t-lg bg-gray-800">
            <span className="text-xs text-white">КАБИНА</span>
          </div>
        </div>

        {/* Ряды мест */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            {Array.from({ length: rows }).map((_, rowIndex) => {
              const rowNum = rowIndex + 1;
              const isPremiumRow = rowNum <= 2;

              return (
                <div key={rowNum} className="flex items-center gap-2">
                  <div className="w-8 text-sm font-medium text-gray-600">Ряд {rowNum}</div>

                  {/* Левая сторона */}
                  <div className="flex gap-1">
                    {[1, 2].map((seatNum) => {
                      const seatId = `${rowNum}-${seatNum}`;
                      const position = getSeatPosition(seatNum);

                      return (
                        <button
                          key={seatId}
                          onClick={() => toggleSeat(seatId)}
                          disabled={occupiedSeats.has(seatId)}
                          className={`flex h-8 w-8 items-center justify-center rounded border text-sm font-medium transition-colors ${getSeatColor(seatId)} ${position.type === "window" ? "rounded-l" : "rounded-r"} ${isPremiumRow ? "border-amber-300" : ""} `}
                        >
                          {selectedSeats.has(seatId) || occupiedSeats.has(seatId)
                            ? position.label
                            : position.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Проход */}
                  <div className="flex w-4 justify-center">
                    <div className="h-6 w-1 bg-gray-300"></div>
                  </div>

                  {/* Правая сторона */}
                  <div className="flex gap-1">
                    {[3, 4].map((seatNum) => {
                      const seatId = `${rowNum}-${seatNum}`;
                      const position = getSeatPosition(seatNum);

                      return (
                        <button
                          key={seatId}
                          onClick={() => toggleSeat(seatId)}
                          disabled={occupiedSeats.has(seatId)}
                          className={`flex h-8 w-8 items-center justify-center rounded border text-sm font-medium transition-colors ${getSeatColor(seatId)} ${position.type === "aisle" ? "rounded-l" : "rounded-r"} ${isPremiumRow ? "border-amber-300" : ""} `}
                        >
                          {selectedSeats.has(seatId) || occupiedSeats.has(seatId)
                            ? position.label
                            : position.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-2 flex justify-center">
          {/* Легенда */}
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-black">
            <div className="flex items-center">
              <div className="mr-1 h-4 w-4 rounded border border-gray-300 bg-gray-100"></div>
              <span>Свободно</span>
            </div>
            <div className="flex items-center">
              <div className="mr-1 h-4 w-4 rounded border border-red-300 bg-red-100"></div>
              <span>Занято</span>
            </div>
            <div className="flex items-center">
              <div className="mr-1 h-4 w-4 rounded border border-blue-600 bg-blue-500"></div>
              <span>Выбрано</span>
            </div>
            <div className="flex items-center">
              <div className="mr-1 h-4 w-4 rounded border border-amber-300"></div>
              <span>Премиум</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
