"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: "Как добраться до Иркутска?",
            answer: "Из Москвы: самолетом (5-6 часов, от 8000₽), поездом (3-4 дня, от 5000₽). Из других городов есть прямые рейсы в Иркутск."
        },
        {
            question: "Что взять с собой в поездку?",
            answer: "Обязательно: паспорт, удобную обувь, теплую одежду (даже летом), воду, перекус. Рекомендуем: power bank, фотоаппарат, наличные."
        },
        {
            question: "Можно ли с детьми?",
            answer: "Да! Дети от 5 лет допускаются в сопровождении взрослых. Для детей 5-12 лет действует скидка 30%. Детские кресла предоставляем бесплатно."
        },
        {
            question: "Как осуществляется возврат билетов?",
            answer: "Возврат за 48 часов до отправления - 100%, за 24 часа - 50%, менее 24 часов - невозможен."
        },
        {
            question: "Какие погодные условия на маршруте?",
            answer: "Летом: +15°C...+25°C, возможны дожди. Зимой: -10°C...-25°C, снег. Рекомендуем следить за прогнозом за день до поездки."
        },
    ]

    return (
        <section className="to-slate-50 my-16 max-w-7xl mx-auto px-4">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
                    Частые вопросы
                </h2>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-slate-800">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-orange-500" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-slate-500" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-6">
                                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}