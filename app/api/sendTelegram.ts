// app/api/sendTelegram/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    console.log("🚀 Запуск /api/sendTelegram");
    console.log(req.method, req.url);
    try {
        const botToken = process.env.TELEGRAM_BOT_TOKEN!;
        const chatId = process.env.TELEGRAM_CHAT_ID!;

        console.log("✅ Переменные окружения загружены");
        console.log("🔑 Токен:", botToken.substring(0, 10) + "...");
        console.log("💬 Chat ID:", chatId);

        // Получаем данные
        let body;
        try {
            body = await req.json();
            console.log("📋 Получены данные:", JSON.stringify(body, null, 2));
        } catch (e) {
            console.error("❌ Ошибка парсинга JSON:", e);
            return NextResponse.json({
                ok: false,
                error: "Неверный формат JSON"
            }, { status: 400 });
        }

        const { date, passengers, ticketType, name, phone } = body;

        // Проверяем обязательные поля
        if (!name || !phone) {
            return NextResponse.json({
                ok: false,
                error: "Требуется имя и телефон"
            }, { status: 400 });
        }

        // Формируем сообщение
        const message = `
🎫 НОВАЯ ЗАЯВКА НА БРОНИРОВАНИЕ

📅 Дата: ${date || "Не указана"}
👥 Пассажиров: ${passengers}
🎟️ Тип билета: ${ticketType === "oneway" ? "Только туда" : "Туда-обратно"}
💰 Примерная стоимость: ${ticketType === "oneway" ? "1500" : "2800"}₽

👤 Имя: ${name}
📱 Телефон: ${phone}

⏰ Срочно перезвоните для подтверждения брони!
🔗 Источник: сайт baikal-travel.ru
        `.trim();

        console.log("📝 Сообщение для отправки:");
        console.log(message);

        // Отправляем в Telegram
        const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
        console.log("🌐 URL запроса:", telegramUrl.replace(botToken, "TOKEN_HIDDEN"));

        const telegramRes = await fetch(telegramUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "Next.js/14"
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "HTML",
            }),
        });

        console.log("📤 Статус ответа Telegram:", telegramRes.status);
        console.log("📤 Статус текста:", telegramRes.statusText);

        const telegramData = await telegramRes.json();
        console.log("📩 Ответ от Telegram API:", JSON.stringify(telegramData, null, 2));

        if (!telegramData.ok) {
            const errorMsg = telegramData.description || "Неизвестная ошибка Telegram";
            console.error("❌ Ошибка Telegram:", errorMsg);

            return NextResponse.json({
                ok: false,
                error: errorMsg,
                telegramError: telegramData,
                details: "Проверьте токен бота и chat_id"
            }, { status: 500 });
        }

        console.log("✅ Сообщение успешно отправлено!");
        console.log("📨 Message ID:", telegramData.result?.message_id);

        return NextResponse.json({
            ok: true,
            messageId: telegramData.result?.message_id,
            chat: telegramData.result?.chat,
            timestamp: new Date().toISOString()
        });

    } catch (err: any) {
        console.error("💥 Критическая ошибка:", err);
        console.error("Stack:", err.stack);

        return NextResponse.json({
            ok: false,
            error: err.message || "Внутренняя ошибка сервера",
            type: err.constructor.name
        }, { status: 500 });
    }
}