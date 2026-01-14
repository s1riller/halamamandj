// app/api/test/route.ts
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Простой тест - возвращаем текущее время
        return NextResponse.json({
            success: true,
            message: "API работает нормально",
            timestamp: new Date().toISOString(),
            env: {
                hasBotToken: !!process.env.TELEGRAM_BOT_TOKEN,
                hasChatId: !!process.env.TELEGRAM_CHAT_ID
            }
        });
    } catch (error: any) {
        console.error("Test endpoint error:", error);
        return NextResponse.json({
            error: error.message || "Test failed",
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }, { status: 500 });
    }
}