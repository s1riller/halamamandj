"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading} = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError("");

    if (!email || !password) {
      setLocalError("Пожалуйста, заполните все поля");
      return;
    }

    try {
      await login(email, password);
      router.push("/profile");
    } catch (err) {
      // Ошибка уже обработана в AuthContext
    }
  };

  const displayError = localError;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {displayError && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">{displayError}</div>
      )}

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="your@email.com"
          disabled={isLoading}
        />
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">Пароль</label>
          <Link href="#" className="text-sm text-blue-600 hover:text-blue-700">
            Забыли пароль?
          </Link>
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="••••••••"
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-2.5 right-3 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <input type="checkbox" id="remember" className="h-4 w-4 rounded" defaultChecked />
        <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
          Запомнить меня
        </label>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? "Загрузка..." : "Войти"}
      </button>

      <p className="text-center text-gray-600">
        Нет аккаунта?{" "}
        <Link href="/register" className="font-medium text-blue-600 hover:text-blue-700">
          Зарегистрируйтесь
        </Link>
      </p>

      {/* Demo информация */}
      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
        <p className="mb-2 font-medium">Тестовые учетные данные:</p>
        <p>Email: user@example.com</p>
        <p>Пароль: 123456</p>
        <p className="mt-2 text-xs">
          Для админа добавьте &apos;admin&apos; в email: admin@example.com
        </p>
      </div>
    </form>
  );
}
