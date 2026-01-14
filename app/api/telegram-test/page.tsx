// app/telegram-test/page.tsx
"use client"

import { useState } from "react"

export default function TelegramTestPage() {
    const [result, setResult] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [testData, setTestData] = useState({
        date: "2024-12-25",
        passengers: 2,
        ticketType: "roundtrip",
        name: "Тестовый Клиент",
        phone: "+7 (999) 123-45-67"
    })

    const testSendMessage = async () => {
        setLoading(true)
        setResult(null)

        try {
            console.log("🔄 Отправка тестового запроса...", testData)

            const response = await fetch('/api/sendTelegram', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(testData)
            })

            const data = await response.json()
            console.log("📨 Ответ от сервера:", data)

            setResult({
                status: response.status,
                statusText: response.statusText,
                data,
                timestamp: new Date().toISOString()
            })

        } catch (error: any) {
            console.error("❌ Ошибка при отправке:", error)
            setResult({
                error: error.message,
                name: error.name,
                timestamp: new Date().toISOString()
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Тестирование Telegram API</h1>

            {/* Форма тестовых данных */}
            <div className="bg-white p-6 rounded-lg shadow mb-8">
                <h2 className="text-xl font-semibold mb-4">Тестовые данные</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {Object.entries(testData).map(([key, value]) => (
                        <div key={key}>
                            <label className="block text-sm font-medium mb-1 capitalize">
                                {key}
                            </label>
                            <input
                                type="text"
                                value={value}
                                onChange={(e) => setTestData(prev => ({
                                    ...prev,
                                    [key]: e.target.value
                                }))}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={testSendMessage}
                    disabled={loading}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 font-semibold"
                >
                    {loading ? (
                        <span className="flex items-center gap-2">
                            <span className="animate-spin">⏳</span>
                            Отправка...
                        </span>
                    ) : "📤 Отправить тестовое сообщение"}
                </button>
            </div>

            {/* Результаты */}
            {result && (
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Результат</h2>

                    <div className="mb-4">
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${result.data?.ok ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                            {result.data?.ok ? '✅ Успешно' : '❌ Ошибка'}
                        </div>
                        <span className="ml-2 text-gray-600">
                            {result.timestamp}
                        </span>
                    </div>

                    <div className="space-y-4">
                        {/* Детали ответа */}
                        <div>
                            <h3 className="font-medium mb-2">Детали ответа:</h3>
                            <pre className="bg-gray-50 p-4 rounded text-sm overflow-auto max-h-96">
                                {JSON.stringify(result, null, 2)}
                            </pre>
                        </div>

                        {/* Полезная информация */}
                        {result.data?.error && (
                            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                                <h3 className="font-medium mb-2">💡 Возможные решения:</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Проверьте правильность токена бота</li>
                                    <li>Убедитесь, что бот добавлен в чат</li>
                                    <li>Проверьте chat_id (должен быть отрицательным для групп)</li>
                                    <li>Бот должен быть запущен (отправить /start боту в личке)</li>
                                    <li>Проверьте права бота в группе (может отправлять сообщения)</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Инструкция по устранению проблем */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">🛠️ Диагностика проблем</h2>

                <div className="space-y-4">
                    <div>
                        <h3 className="font-medium mb-2">1. Проверьте токен бота:</h3>
                        <p className="text-sm text-gray-600">
                            Откройте в браузере: <br />
                            <code className="bg-gray-200 px-2 py-1 rounded">
                                https://api.telegram.org/botВАШ_ТОКЕН/getMe
                            </code>
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium mb-2">2. Проверьте chat_id:</h3>
                        <p className="text-sm text-gray-600">
                            Отправьте сообщение боту, затем откройте: <br />
                            <code className="bg-gray-200 px-2 py-1 rounded">
                                https://api.telegram.org/botВАШ_ТОКЕН/getUpdates
                            </code>
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium mb-2">3. Распространенные ошибки:</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• <strong>403 Forbidden</strong> - Бот не в чате или нет прав</li>
                            <li>• <strong>400 Bad Request</strong> - Неверный chat_id или токен</li>
                            <li>• <strong>404 Not Found</strong> - Токен не существует</li>
                            <li>• <strong>429 Too Many Requests</strong> - Лимит Telegram API</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}