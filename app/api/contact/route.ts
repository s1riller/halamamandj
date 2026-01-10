import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    // Валидация
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Имя, email, тема и сообщение обязательны' },
        { status: 400 }
      )
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone: phone || '',
        subject,
        message,
        status: 'new',
      },
    })

    return NextResponse.json(
      { message: 'Сообщение успешно отправлено', contact },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact error:', error)
    return NextResponse.json(
      { error: 'Ошибка при отправке сообщения' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(contacts)
  } catch (error) {
    console.error('Get contacts error:', error)
    return NextResponse.json(
      { error: 'Ошибка при получении контактов' },
      { status: 500 }
    )
  }
}
