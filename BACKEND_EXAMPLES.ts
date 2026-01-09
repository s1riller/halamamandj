// БЫСТРЫЙ СТАРТ - Скопируй эти файлы чтобы получить рабочий backend

// ========================================
// 1. УСТАНОВКА
// ========================================
/*
npm install @prisma/client prisma bcryptjs
npx prisma init
*/

// ========================================
// 2. prisma/schema.prisma (скопируй весь контент)
// ========================================
/*
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id            String    @id @default(cuid())
  name          String
  email         String    @unique
  password      String
  phone         String?
  role          String    @default("user")
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  bookings      Booking[]
  reviews       Review[]
}

model Schedule {
  id            String    @id @default(cuid())
  from          String
  to            String
  departureTime DateTime
  arrivalTime   DateTime
  driverId      String
  driverName    String
  capacity      Int       @default(45)
  price         Int
  amenities     String    @default("wifi,toilet,ac")
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  bookings      Booking[]
  reviews       Review[]
}

model Booking {
  id            String    @id @default(cuid())
  userId        String
  user          User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  scheduleId    String
  schedule      Schedule  @relation(fields: [scheduleId], references: [id], onDelete: Cascade)
  
  passengers    Int
  totalPrice    Int
  status        String    @default("pending")
  
  passengerData String
  paymentMethod String
  bookingNumber String    @unique
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@unique([userId, scheduleId, createdAt])
}

model Review {
  id            String    @id @default(cuid())
  userId        String
  user          User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  scheduleId    String
  schedule      Schedule  @relation(fields: [scheduleId], references: [id], onDelete: Cascade)
  
  rating        Int
  comment       String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}
*/

// ========================================
// 3. .env.local
// ========================================
/*
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_API_URL="http://localhost:3001"
*/

// ========================================
// 4. app/api/auth/register/route.ts
// ========================================
/*
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, phone } = await request.json();

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email уже используется' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone,
        role: 'user',
      },
    });

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
    return NextResponse.json(
      { error: 'Ошибка при регистрации' },
      { status: 500 }
    );
  }
}
*/

// ========================================
// 5. app/api/auth/login/route.ts
// ========================================
/*
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Пользователь не найден' },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Неверный пароль' },
        { status: 401 }
      );
    }

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
    return NextResponse.json(
      { error: 'Ошибка сервера' },
      { status: 500 }
    );
  }
}
*/

// ========================================
// 6. app/api/schedules/route.ts
// ========================================
/*
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const from = searchParams.get('from');
    const to = searchParams.get('to');

    let where: any = {};
    if (from) where.from = { contains: from };
    if (to) where.to = { contains: to };

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
    return NextResponse.json(
      { error: 'Ошибка' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const schedule = await prisma.schedule.create({ data });
    return NextResponse.json(schedule);
  } catch (error) {
    return NextResponse.json(
      { error: 'Ошибка' },
      { status: 500 }
    );
  }
}
*/

// ========================================
// 7. app/api/bookings/route.ts
// ========================================
/*
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'userId обязателен' },
        { status: 400 }
      );
    }

    const bookings = await prisma.booking.findMany({
      where: { userId },
      include: { schedule: true },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    return NextResponse.json(
      { error: 'Ошибка' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const bookingNumber = `BK${Date.now().toString().slice(-6)}`;

    const booking = await prisma.booking.create({
      data: {
        ...data,
        bookingNumber,
      },
      include: { schedule: true },
    });

    return NextResponse.json(booking);
  } catch (error) {
    return NextResponse.json(
      { error: 'Ошибка' },
      { status: 500 }
    );
  }
}
*/

// ========================================
// 8. КОМАНДЫ ДЛЯ ЗАПУСКА
// ========================================
/*
# Установка
npm install @prisma/client prisma bcryptjs

# Инициализация
npx prisma init

# Скопируй schema.prisma из примера выше в prisma/schema.prisma

# Создай миграцию и БД
npx prisma migrate dev --name init

# Запуск
npm run dev

# Просмотр БД в UI
npx prisma studio

# Очистка БД (осторожно!)
npx prisma migrate reset
*/

// ========================================
// 9. ПОЛЕЗНЫЕ КОМАНДЫ
// ========================================
/*
# Смотреть статус миграций
npx prisma migrate status

# Просмотреть БД
npx prisma studio

# Сгенерировать типы TypeScript
npx prisma generate

# Просмотреть миграции
npx prisma migrate history

# Ототкатить последнюю миграцию (только для dev!)
npx prisma migrate resolve --rolled-back <migration-name>
*/

export const BACKEND_QUICK_START = true;
