"use client"

import { useState } from "react"
import Button from "@/components/ui/Button"
import BookingForm from "./BookingForm" // Импортируем BookingForm

type HeroSectionProps = {
    backgroundImage: string
}

export default function HeroSection({ backgroundImage }: HeroSectionProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <section
                className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

                <div className="relative z-10 flex flex-col items-center md:items-start justify-center h-full px-4 sm:px-6 md:px-20 text-white text-center md:text-left">

                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 leading-tight max-w-4xl">
                        Пора в путешествие <br className="hidden sm:block" /> на Байкал!
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                        <Button
                            variant="orange"
                            className="w-full sm:w-auto py-3 px-6 text-sm sm:text-base sm:py-4 sm:px-8"
                            rounded="full"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Забронировать билет
                        </Button>

                        <Button
                            variant="blue"
                            className="w-full sm:w-auto py-3 px-6 text-sm sm:text-base sm:py-4 sm:px-8"
                            rounded="full"
                        >
                            Подобрать жилье
                        </Button>
                    </div>
                </div>
            </section>

            {/* Модальное окно с формой бронирования */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fadeIn">
                    <div
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-slideUp"
                        onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри
                    >
                        <div className="p-6 md:p-8">
                            <BookingForm onClose={() => setIsModalOpen(false)} />
                        </div>
                    </div>

                    {/* Клик вне модального окна для закрытия */}
                    <div
                        className="absolute inset-0 -z-10"
                        onClick={() => setIsModalOpen(false)}
                    />
                </div>
            )}
        </>
    )
}