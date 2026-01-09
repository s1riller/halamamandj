import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <div className="mx-auto max-w-md px-4 py-12">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link href="/" className="mb-2 block text-2xl font-bold text-blue-600">
            ОльхонЭкспресс
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Добро пожаловать</h1>
          <p className="mt-2 text-gray-600">Войдите в свой аккаунт</p>
        </div>

        {/* Login Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
          <LoginForm />
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            Нет аккаунта?{" "}
            <Link href="/register" className="font-medium text-blue-600 hover:text-blue-700">
              Создайте его
            </Link>
          </p>
          <p className="mt-2">
            <Link href="/" className="text-gray-600 hover:text-gray-700">
              ← Вернуться на главную
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
