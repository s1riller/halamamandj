"use client";
import { useState, useRef, useEffect } from "react";
import { cities } from "@/config/cities";

interface CitySelectProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (city: string) => void;
}

export default function CitySelect({
  label,
  placeholder = "",
  value: controlledValue,
  onChange,
}: CitySelectProps) {
  const [value, setValue] = useState(controlledValue ?? "");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered = cities.filter((city) => city.toLowerCase().includes(value.toLowerCase()));

  // 🔹 Закрытие при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <label className="mb-1 block text-sm font-medium text-black">{label}</label>

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
          setOpen(true);
          onChange?.(e.target.value);
        }}
        onFocus={() => setOpen(true)}
        className="w-full rounded-full border border-gray-300 px-4 py-2 text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      {open && filtered.length > 0 && (
        <ul className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
          {filtered.map((city) => (
            <li
              key={city}
              onClick={() => {
                setValue(city);
                setOpen(false);
                onChange?.(city);
              }}
              className="cursor-pointer px-4 py-2 text-sm text-xl text-black hover:bg-gray-100"
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
