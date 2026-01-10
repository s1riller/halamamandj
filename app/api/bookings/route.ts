import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// GET: Получить бронирования пользователя
export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id')

    if (!userId) {
      return NextResponse.json(
        { error: 'Не авторизирован' },
        { status: 401 }
      )
    }

    const bookings = await prisma.booking.findMany({
      where: { userId },
      include: {
        schedule: {
          select: {
            from: true,
            to: true,
            departureTime: true,
            arrivalTime: true,
            busType: true,
            price: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(bookings)
  } catch (error) {
    console.error('Get bookings error:', error)
    return NextResponse.json(
      { error: 'Ошибка при получении бронирований' },
      { status: 500 }
    )
  }
}

// POST: Создать новое бронирование
export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id')

    if (!userId) {
      return NextResponse.json(
        { error: 'Не авторизирован' },
        { status: 401 }
      )
    }

    const { scheduleId, seatNumber } = await request.json()

    if (!scheduleId || !seatNumber) {
      return NextResponse.json(
        { error: 'scheduleId и seatNumber обязательны' },
        { status: 400 }
      )
    }

    // Проверка, что место свободно
    const seat = await prisma.seat.findUnique({
      where: {
        scheduleId_number: {
          scheduleId,
          number: seatNumber,
        },
      },
    })

    if (!seat || seat.isBooked) {
      return NextResponse.json(
        { error: 'Место недоступно' },
        { status: 409 }
      )
    }

    // Получить стоимость из schedule
    const schedule = await prisma.schedule.findUnique({
      where: { id: scheduleId },
    })

    if (!schedule) {
      return NextResponse.json(
        { error: 'Расписание не найдено' },
        { status: 404 }
      )
    }

    // Создать бронирование и обновить место
    const booking = await prisma.booking.create({
      data: {
        userId,
        scheduleId,
        seatNumber,
        totalPrice: schedule.price,
        status: 'confirmed',
      },
    })

    // Отметить место как забронированное
    await prisma.seat.update({
      where: {
        scheduleId_number: {
          scheduleId,
          number: seatNumber,
        },
      },
      data: {
        isBooked: true,
        bookedBy: userId,
      },
    })

    // Уменьшить количество свободных мест
    await prisma.schedule.update({
      where: { id: scheduleId },
      data: {
        availableSeats: {
          decrement: 1,
        },
      },
    })

    return NextResponse.json(
      { message: 'Бронирование успешно создано', booking },
      { status: 201 }
    )
  } catch (error) {
    console.error('Create booking error:', error)
    return NextResponse.json(
      { error: 'Ошибка при создании бронирования' },
      { status: 500 }
    )
  }
}
