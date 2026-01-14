"use client"

import { useState } from "react"
import { Calendar, Ticket, Phone, User, CheckCircle, Loader2, X } from "lucide-react"
import Button from "@/components/ui/Button"

interface BookingFormProps {
    onClose?: () => void
}

export default function BookingForm({ onClose }: BookingFormProps) {
    const [step, setStep] = useState<"form" | "loading" | "success">("form")
    const [date, setDate] = useState("")
    const [ticketType, setTicketType] = useState("roundtrip")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [error, setError] = useState("")

    const formatPhone = (value: string) => {
        const digits = value.replace(/\D/g, '').replace(/^8/, '7') // 8 → 7
        if (digits.length === 0) return ''
        if (digits.length <= 1) return `+${digits}`
        if (digits.length <= 4) return `+${digits[0]} (${digits.slice(1)}`
        if (digits.length <= 7) return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4)}`
        if (digits.length <= 9) return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`
        return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`
    }


    // Отправка формы на сервер
    const sendBookingRequest = async (data: { date: string, ticketType: string, name: string, phone: string }) => {
        console.log("🔄 Отправка заявки...", data)
        try {
            const res = await fetch("/api/sendTelegram", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            const json = await res.json()
            if (!res.ok) throw new Error(json.error || "Ошибка отправки")
            return { success: true, data: json }
        } catch (err: any) {
            return { success: false, error: err.message || "Ошибка отправки" }
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (!name.trim()) return setError("Введите имя")
        if (!phone.replace(/\D/g, '').match(/^\d{10,11}$/)) return setError("Введите корректный телефон")
        if (!date) return setError("Выберите дату")

        setStep("loading")

        const formData = { name, phone: formatPhone(phone), date, ticketType }
        const result = await sendBookingRequest(formData)

        if (result.success) {
            setStep("success")
            setTimeout(() => {
                setStep("form")
                setName("")
                setPhone("")
                setDate("")
                setTicketType("roundtrip")
                if (onClose) onClose() // Закрываем модальное окно через 5 секунд
            }, 5000)
        } else {
            setStep("form")
            setError(result.error)
        }
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(formatPhone(e.target.value))

    const resetForm = () => {
        setStep("form")
        setName("")
        setPhone("")
        setDate("")
        setTicketType("roundtrip")
        setError("")
    }

    // --- Рендер ---
    if (step === "loading") return (
        <div className="text-center p-8">
            <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4" />
            <p>Отправка заявки...</p>
        </div>
    )

    if (step === "success") return (
        <div className="text-center p-8 bg-green-50 rounded-lg">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <p className="text-lg font-semibold mb-2">Заявка отправлена!</p>
            <p className="text-gray-600 mb-6">Водитель перезвонит вам в течение 15 минут.</p>
            <Button
                onClick={() => {
                    resetForm()
                    if (onClose) onClose()
                }}
                className="mt-4"
            >
                Закрыть
            </Button>
        </div>
    )

    return (
        <div className="relative">
            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full z-10"
                >
                    <X className="w-6 h-6" />
                </button>
            )}

            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Забронировать поездку на Байкал</h2>
                <p className="text-slate-600">
                    Заполните форму ниже и водитель перезвонит вам для подтверждения
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-1">
                        <User className="w-4 h-4" /> Имя *
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                        placeholder="Иван Иванов"
                    />
                </div>

                <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-1">
                        <Phone className="w-4 h-4" /> Телефон *
                    </label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                        placeholder="+7 (999) 123-45-67"
                    />
                </div>

                <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-1">
                        <Calendar className="w-4 h-4" /> Дата поездки *
                    </label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                        min={new Date().toISOString().split('T')[0]}
                    />
                </div>

                <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-1">
                        <Ticket className="w-4 h-4" /> Тип билета
                    </label>
                    <select
                        value={ticketType}
                        onChange={e => setTicketType(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    >
                        <option value="oneway">Только туда</option>
                        <option value="roundtrip">Туда-обратно</option>
                    </select>
                </div>

                {error && <p className="text-red-600 text-sm p-3 bg-red-50 rounded-lg">{error}</p>}

                <Button
                    type="submit"
                    variant="orange"
                    className="w-full py-3 text-lg font-semibold mt-4"
                >
                    🚀 Отправить заявку
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
            </form>
        </div>
    )
}