import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'
// GET: Получить расписание с фильтрацией
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const from = searchParams.get('from')
    const to = searchParams.get('to')
    const date = searchParams.get('date')

    const where: any = {
      isActive: true,
    }

    if (from) where.from = { contains: from, mode: 'insensitive' }
    if (to) where.to = { contains: to, mode: 'insensitive' }

    if (date) {
      const startDate = new Date(date)
      const endDate = new Date(date)
      endDate.setDate(endDate.getDate() + 1)

      where.departureTime = {
        gte: startDate,
        lt: endDate,
      }
    }

    const schedules = await prisma.schedule.findMany({
      where,
      include: {
        seats: {
          select: {
            number: true,
            isBooked: true,
          },
        },
      },
      orderBy: {
        departureTime: 'asc',
      },
    })

    return NextResponse.json(schedules)
  } catch (error) {
    console.error('Get schedules error:', error)
    return NextResponse.json(
      { error: 'Ошибка при получении расписания' },
      { status: 500 }
    )
  }
}

// POST: Создать новое расписание (только для админа)
export async function POST(request: NextRequest) {
  try {
    const { from, to, departureTime, arrivalTime, price, busType, totalSeats } =
      await request.json()

    // Валидация
    if (!from || !to || !departureTime || !arrivalTime || !price || !totalSeats) {
      return NextResponse.json(
        { error: 'Все поля обязательны' },
        { status: 400 }
      )
    }

    const schedule = await prisma.schedule.create({
      data: {
        from,
        to,
        departureTime: new Date(departureTime),
        arrivalTime: new Date(arrivalTime),
        duration: Math.floor(
          (new Date(arrivalTime).getTime() - new Date(departureTime).getTime()) /
            60000
        ),
        price,
        busType,
        totalSeats,
        availableSeats: totalSeats,
      },
    })

    // Создание мест для каждого сиденья
    const seats = Array.from({ length: totalSeats }, (_, i) => ({
      scheduleId: schedule.id,
      number: i + 1,
      isBooked: false,
    }))

    await prisma.seat.createMany({
      data: seats,
    })

    return NextResponse.json(
      { message: 'Расписание создано', schedule },
      { status: 201 }
    )
  } catch (error) {
    console.error('Create schedule error:', error)
    return NextResponse.json(
      { error: 'Ошибка при создании расписания' },
      { status: 500 }
    )
  }
}
