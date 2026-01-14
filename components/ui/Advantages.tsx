import { CheckCircle, Shield, Clock, Users, Star } from "lucide-react"

export default function Advantages() {
    const advantages = [
        { icon: Shield, title: "Безопасные автобусы", desc: "Современный транспорт с опытными водителями" },
        { icon: CheckCircle, title: "Прямые рейсы", desc: "Иркутск-Ольхон без пересадок" },
        { icon: Clock, title: "Работаем с 2015", desc: "9 лет на рынке туристических перевозок" },
        { icon: Users, title: "5000+ туристов", desc: "Довольных клиентов по всему миру" },
        { icon: Star, title: "Поддержка 24/7", desc: "Помощь на любом этапе путешествия" },
    ]

    return (
        <section className="to-slate-50 my-16 max-w-7xl mx-auto px-4">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
                    Почему выбирают нас?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {advantages.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex flex-col items-center text-center">
                                <div className="p-3 bg-orange-100 rounded-full mb-4">
                                    <item.icon className="w-8 h-8 text-orange-600" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-slate-800">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}