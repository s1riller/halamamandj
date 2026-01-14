import { Star, Quote } from "lucide-react"

export default function Testimonials() {
    const testimonials = [
        {
            name: "Анна Петрова",
            date: "15 августа 2024",
            rating: 5,
            text: "Поездка превзошла все ожидания! Комфортабельный автобус, пунктуальный водитель. Добрались быстро и с удовольствием.",
            avatar: "AP",
            color: "bg-blue-100"
        },
        {
            name: "Иван Сидоров",
            date: "10 июля 2024",
            rating: 5,
            text: "Брал билеты на всю семью. Отличный сервис, поддержка ответила на все вопросы. Обязательно поедем снова!",
            avatar: "ИС",
            color: "bg-orange-100"
        },
        {
            name: "Мария Иванова",
            date: "22 июня 2024",
            rating: 5,
            text: "Очень удобное бронирование, никаких скрытых платежей. Автобус новый, кондиционер работал, что важно в жару.",
            avatar: "МИ",
            color: "bg-emerald-100"
        },
    ]

    return (
        <section className="to-slate-50 my-16 max-w-7xl mx-auto px-4">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                        Что говорят наши клиенты
                    </h2>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-slate-600 font-medium">4.9 из 5 (156 отзывов)</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg p-6 relative">
                            <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-200" />

                            <div className="flex items-center gap-4 mb-4">
                                <div className={`${testimonial.color} w-12 h-12 rounded-full flex items-center justify-center font-bold text-slate-800`}>
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-500">{testimonial.date}</p>
                                </div>
                            </div>

                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-slate-700 italic">"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}