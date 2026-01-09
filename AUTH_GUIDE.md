# Руководство использования системы авторизации

## 📝 Демо учетные записи

### Обычный пользователь

```
Email: user@example.com
Password: password
```

### Администратор

```
Email: admin@example.com
Password: password
```

**Примечание:** Функция администратора доступна только для аккаунта `admin@example.com`

---

## 🚀 Как использовать AuthContext

### В компоненте

```tsx
"use client";

import { useAuth } from "@/contexts/AuthContext";

export default function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();

  if (!isAuthenticated) {
    return <p>Please log in</p>;
  }

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### Методы

#### `login(email: string, password: string)`

```tsx
const { login, isLoading } = useAuth();

const handleLogin = async () => {
  await login("user@example.com", "password");
  // Пользователь залогирован
};
```

#### `register(name: string, email: string, password: string, phone?: string)`

```tsx
const { register } = useAuth();

const handleRegister = async () => {
  await register("Иван Иванов", "ivan@example.com", "password123", "+7 (900) 123-45-67");
  // Новый пользователь зарегистрирован
};
```

#### `logout()`

```tsx
const { logout } = useAuth();

const handleLogout = async () => {
  await logout();
  // Пользователь вышел из системы
};
```

### Свойства

| Свойство          | Тип            | Описание                                        |
| ----------------- | -------------- | ----------------------------------------------- |
| `user`            | `User \| null` | Текущий пользователь (null если не залогирован) |
| `isLoading`       | `boolean`      | Идет ли процесс аутентификации                  |
| `isAuthenticated` | `boolean`      | Залогирован ли пользователь                     |
| `isAdmin`         | `boolean`      | Является ли пользователь администратором        |

---

## 🔐 Защита маршрутов

### Динамическая проверка в компоненте

```tsx
"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const { isAdmin, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAdmin) {
      router.push("/bus/login");
    }
  }, [isAdmin, isLoading, router]);

  if (isLoading) return <p>Loading...</p>;
  if (!isAdmin) return null;

  return <div>Admin content only</div>;
}
```

---

## 💾 Сохранение данных

Данные пользователя автоматически сохраняются в `localStorage` при логине/регистрации и восстанавливаются при перезагрузке страницы.

```typescript
// Автоматически сохраняется
localStorage.setItem("authUser", JSON.stringify(user));

// Автоматически загружается при инициализации
const savedUser = JSON.parse(localStorage.getItem("authUser") || "null");
```

---

## 🎯 Страницы авторизации

| Маршрут         | Описание                             |
| --------------- | ------------------------------------ |
| `/bus/login`    | Страница входа                       |
| `/bus/register` | Страница регистрации                 |
| `/bus/profile`  | Личный кабинет (требует авторизацию) |

---

## 🚨 Обработка ошибок

```tsx
"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginForm() {
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (email: string, password: string) => {
    try {
      setError("");
      await login(email, password);
      // Успешный вход
    } catch (err) {
      setError("Ошибка при входе. Попробуйте снова.");
    }
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      {/* Форма */}
    </div>
  );
}
```

---

## 🔄 Интеграция с REST API (будущее)

Когда будет добавлена настоящая БД, методы авторизации нужно обновить:

```typescript
// Текущее состояние (mock):
const login = async (email: string, password: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  // Mock логика
};

// Будущее (с API):
const login = async (email: string, password: string) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  const { user, token } = await response.json();
  setUser(user);
  localStorage.setItem("authToken", token);
};
```

---

## 📱 Использование на адаптивных устройствах

Все компоненты авторизации полностью адаптивны:

- ✅ Мобильные телефоны (320px+)
- ✅ Планшеты (768px+)
- ✅ Десктопы (1024px+)

---

## ⚠️ Важные замечания

1. **Безопасность:** Текущая система использует mock-данные. В production необходимо:
   - HTTPS везде
   - JWT или session tokens
   - Хеширование паролей (bcrypt)
   - 2FA для администраторов

2. **Персистентность:** Данные хранятся только в localStorage. При очистке браузера потеряются.

3. **Роль администратора:** Определяется по email (`admin@example.com`). Измените логику в `AuthContext.tsx` при необходимости.

---

## 🎓 Примеры использования

### Условный рендер в зависимости от авторизации

```tsx
const { isAuthenticated, user } = useAuth();

return isAuthenticated ? <p>Welcome, {user?.name}!</p> : <p>Please log in</p>;
```

### Редирект после входа

```tsx
const router = useRouter();
const { login } = useAuth();

const handleLogin = async (email: string, password: string) => {
  await login(email, password);
  router.push("/bus/profile"); // Редирект после входа
};
```

### Отключение кнопок во время загрузки

```tsx
const { isLoading } = useAuth();

return <button disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>;
```

---

_Последнее обновление: 2024-01-15_
