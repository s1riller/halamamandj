import { Phone, MessageSquare, Mail } from "lucide-react"
import Button from "@/components/ui/Button"

export default function FinalCTA() {
    return (
        <section className="">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Готовы к путешествию на Байкал?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Забронируйте билет онлайн или свяжитесь с нами любым удобным способом
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button
                            variant="orange"
                            className="py-4 px-8 text-lg font-bold"
                            rounded="full"
                        >
                            🚀 Забронировать онлайн
                        </Button>
                        <Button
                            variant="blue"
                            className="py-4 px-8 text-lg font-bold border-white text-white hover:bg-white/10"
                            rounded="full"
                        >
                            📞 Заказать звонок
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="flex flex-col items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                            <Phone className="w-10 h-10 mb-4 text-orange-400" />
                            <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                            <a href="tel:+79148882565" className="text-2xl font-bold hover:text-orange-300 transition-colors">
                                8 (914) 888-25-65
                            </a>
                            <p className="text-slate-300 mt-2">Круглосуточно</p>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                            <MessageSquare className="w-10 h-10 mb-4 text-green-400" />
                            <h3 className="text-xl font-semibold mb-2">WhatsApp/Telegram</h3>
                            <a href="https://wa.me/79991234567" className="text-2xl font-bold hover:text-green-300 transition-colors">
                                +7 (999) 123-45-67
                            </a>
                            <p className="text-slate-300 mt-2">Быстрые ответы</p>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                            <Mail className="w-10 h-10 mb-4 text-blue-400" />
                            <h3 className="text-xl font-semibold mb-2">Email</h3>
                            <a href="mailto:info@baikaltravel.ru" className="text-xl font-bold hover:text-blue-300 transition-colors break-all">
                                info@baikaltravel.ru
                            </a>
                            <p className="text-slate-300 mt-2">Ответим за 2 часа</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}