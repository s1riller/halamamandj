# 🗄️ Backend Setup Guide - Хранение данных в БД

## 🎯 Варианты реализации

### Вариант 1: SQLite (ПРОСТОЙ - для начала) ⭐ РЕКОМЕНДУЕТСЯ

- ✅ Не требует отдельного сервера БД
- ✅ Файловая БД (db.sqlite)
- ✅ Идеален для MVP и разработки
- ✅ Легко переместить на PostgreSQL позже
- ❌ Не подходит для production с большими нагрузками

### Вариант 2: PostgreSQL (PRODUCTION)

- ✅ Production-ready
- ✅ Мощный и масштабируемый
- ❌ Требует установки отдельно или Docker
- ❌ Сложнее для начинающих

### Вариант 3: MongoDB (NOSQL)

- ✅ Гибкая схема данных
- ✅ Хороша для быстрого прототипирования
- ❌ Требует установки

---

## 🚀 Шаг 1: Установка зависимостей

### Для SQLite (рекомендуется):

```bash
npm install @prisma/client
npm install -D prisma
```

### Для PostgreSQL (вместо Prisma можно использовать):

```bash
npm install @prisma/client
npm install -D prisma
# И установи PostgreSQL отдельно
```

---

## 🛠️ Шаг 2: Инициализация Prisma

```bash
npx prisma init
```

Это создаст:

- `.env.local` - файл с переменными окружения
- `prisma/schema.prisma` - схема БД

---

## 📋 Шаг 3: Настройка для SQLite

### Файл: `.env.local`

```env
# SQLite (для разработки)
DATABASE_URL="file:./dev.db"

# Или PostgreSQL (для production)
# DATABASE_URL="postgresql://user:password@localhost:5432/webkademy"
```

### Файл: `prisma/schema.prisma`

```prisma
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// Модель пользователя
model User {
  id            String    @id @default(cuid())
  name          String
  email         String    @unique
  password      String    // Должен быть ХЕШИРОВАН с bcrypt!
  phone         String?
  role          String    @default("user") // "user" или "admin"
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  bookings      Booking[]
  reviews       Review[]
}

// Модель расписания
model Schedule {
  id            String    @id @default(cuid())
  from          String    // Город отправления
  to            String    // Город назначения
  departureTime DateTime
  arrivalTime   DateTime
  driverId      String
  driverName    String
  capacity      Int       @default(45)
  price         Int       // в копейках (например, 250000 = 2500₽)
  amenities     String    @default("wifi,toilet,ac") // разделены запятыми
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  bookings      Booking[]
  reviews       Review[]
}

// Модель бронирования
model Booking {
  id            String    @id @default(cuid())
  userId        String
  user          User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  scheduleId    String
  schedule      Schedule  @relation(fields: [scheduleId], references: [id], onDelete: Cascade)

  passengers    Int
  totalPrice    Int       // в копейках
  status        String    @default("pending") // "pending", "confirmed", "cancelled"

  passengerData String    // JSON с данными пассажиров
  paymentMethod String    // "card", "yandex", "sbp"

  bookingNumber String    @unique // "BK001", "BK002" и т.д.
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@unique([userId, scheduleId, createdAt])
}

// Модель отзыва
model Review {
  id            String    @id @default(cuid())
  userId        String
  user          User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  scheduleId    String
  schedule      Schedule  @relation(fields: [scheduleId], references: [id], onDelete: Cascade)

  rating        Int       // 1-5
  comment       String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}
```

---

## 🔄 Шаг 4: Создание БД и миграций

```bash
# Создает БД и применяет схему
npx prisma migrate dev --name init

# После изменения schema.prisma:
npx prisma migrate dev --name "название миграции"
```

---

## 📁 Шаг 5: Создание API Routes

### Файл: `app/api/auth/login/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"; // npm install bcryptjs

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Найти пользователя
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "Пользователь не найден" }, { status: 401 });
    }

    // Проверить пароль
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Неверный пароль" }, { status: 401 });
    }

    // Вернуть пользователя (без пароля)
    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
```

### Файл: `app/api/auth/register/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, phone } = await request.json();

    // Проверить существует ли пользователь
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Пользователь с таким email уже существует" },
        { status: 400 }
      );
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создать пользователя
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone,
        role: "user",
      },
    });

    // Вернуть пользователя (без пароля)
    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Ошибка при регистрации" }, { status: 500 });
  }
}
```

### Файл: `app/api/schedules/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET все расписания или с фильтром
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const date = searchParams.get("date");

    let where: any = {};
    if (from) where.from = { contains: from };
    if (to) where.to = { contains: to };
    if (date) {
      const startDate = new Date(date);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1);
      where.departureTime = { gte: startDate, lt: endDate };
    }

    const schedules = await prisma.schedule.findMany({
      where,
      include: {
        reviews: {
          select: { rating: true },
        },
      },
    });

    return NextResponse.json(schedules);
  } catch (error) {
    return NextResponse.json({ error: "Ошибка при получении расписания" }, { status: 500 });
  }
}

// POST создание нового расписания (только админ)
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const schedule = await prisma.schedule.create({
      data,
    });

    return NextResponse.json(schedule);
  } catch (error) {
    return NextResponse.json({ error: "Ошибка при создании расписания" }, { status: 500 });
  }
}
```

### Файл: `app/api/bookings/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET бронирования пользователя
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "userId обязателен" }, { status: 400 });
    }

    const bookings = await prisma.booking.findMany({
      where: { userId },
      include: {
        schedule: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    return NextResponse.json({ error: "Ошибка при получении бронирований" }, { status: 500 });
  }
}

// POST создание нового бронирования
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Генерировать уникальный номер бронирования
    const bookingNumber = `BK${Date.now().toString().slice(-6)}`;

    const booking = await prisma.booking.create({
      data: {
        ...data,
        bookingNumber,
      },
      include: {
        schedule: true,
      },
    });

    return NextResponse.json(booking);
  } catch (error) {
    return NextResponse.json({ error: "Ошибка при создании бронирования" }, { status: 500 });
  }
}
```

---

## 🔗 Шаг 6: Обновление AuthContext для работы с API

### Файл: `contexts/AuthContext.tsx` (обновить методы login/register)

```typescript
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string,
    phone?: string
  ) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Восстановить пользователя при загрузке страницы
  useEffect(() => {
    const savedUser = localStorage.getItem('authUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }

      const { user: userData } = await response.json();
      setUser(userData);
      localStorage.setItem('authUser', JSON.stringify(userData));
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    phone?: string
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, phone }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }

      const { user: userData } = await response.json();
      setUser(userData);
      localStorage.setItem('authUser', JSON.stringify(userData));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      setUser(null);
      localStorage.removeItem('authUser');
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin' || false,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
```

---

## 🔐 Шаг 7: Безопасность

### ОБЯЗАТЕЛЬНЫЕ шаги для production:

```bash
# Установить bcrypt для хеширования паролей
npm install bcryptjs

# Установить JWT для токенов (опционально)
npm install jsonwebtoken
```

### Правила:

- ❌ НИКОГДА не отправляй пароль в ответе API
- ✅ Всегда хеши пароли перед сохранением в БД
- ✅ Используй HTTPS в production
- ✅ Валидируй все входные данные
- ✅ Используй CORS для защиты от атак

---

## 📋 Шаг 8: Environment переменные

### Файл: `.env.local`

```env
# БД (SQLite)
DATABASE_URL="file:./dev.db"

# Или PostgreSQL
# DATABASE_URL="postgresql://user:password@localhost:5432/webkademy"

# JWT (опционально)
JWT_SECRET="your-secret-key-change-in-production"

# API URL для фронтенда
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

### Файл: `.env.production` (для production)

```env
DATABASE_URL="postgresql://user:password@database-host:5432/webkademy"
JWT_SECRET="ваш-секретный-ключ"
NEXT_PUBLIC_API_URL="https://yourdomain.com"
```

---

## 🧪 Шаг 9: Тестирование API

### Использовать Postman или curl:

```bash
# Регистрация
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Иван Иванов",
    "email": "ivan@example.com",
    "password": "password123",
    "phone": "+7 (900) 123-45-67"
  }'

# Вход
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "ivan@example.com",
    "password": "password123"
  }'

# Получить расписания
curl http://localhost:3001/api/schedules?from=Иркутск&to=Ольхон
```

---

## 🚀 Шаг 10: Полный процесс

```bash
# 1. Установи зависимости
npm install @prisma/client prisma bcryptjs

# 2. Инициализируй Prisma
npx prisma init

# 3. Скопируй содержимое schema.prisma из этого гайда

# 4. Создай миграцию и БД
npx prisma migrate dev --name init

# 5. Создай API routes (скопируй примеры выше)

# 6. Обнови AuthContext

# 7. Запусти dev сервер
npm run dev

# 8. Тестируй в Postman или браузере
```

---

## 📊 Структура папок

```
app/
├── api/
│   ├── auth/
│   │   ├── login/route.ts
│   │   └── register/route.ts
│   ├── schedules/
│   │   └── route.ts
│   ├── bookings/
│   │   └── route.ts
│   └── users/
│       └── route.ts
└── ...

prisma/
├── schema.prisma
└── dev.db (SQLite файл БД)

.env.local (НЕ коммитить в git!)
```

---

## ⚠️ Важные замечания

1. **`.env.local` НЕ коммитить в git!**
   - Добавь в `.gitignore`:

   ```
   .env.local
   .env.*.local
   dev.db
   ```

2. **Миграции коммитить нужно!**
   - Папка `prisma/migrations` должна быть в git

3. **Для production используй PostgreSQL**
   - SQLite работает только для локальной разработки

4. **Используй Prisma Studio для просмотра БД:**
   ```bash
   npx prisma studio
   ```

---

## 📞 Дальнейшие улучшения

- JWT токены для сессий
- Refresh tokens
- Email подтверждение
- 2FA аутентификация
- Webhook для платежей
- Кэширование Redis
- GraphQL вместо REST

---

_Этот гайд охватывает базовую настройку backend для хранения реальных данных в БД._
