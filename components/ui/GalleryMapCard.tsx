"use client"

import { MapPin, Navigation } from "lucide-react"

export default function GalleryMapCard() {
    // Координаты для маршрута
    const route = {
        start: "52.286974,104.305018", // Иркутск
        end: "53.1933,107.3399",       // Ольхон
        center: "105.5,52.8",          // Центр карты между точками
        zoom: 7                        // Уровень приближения
    }

    // URL для карты с маршрутом (линия + точки)
    const mapUrl = `https://yandex.ru/map-widget/v1/?ll=${route.center}&z=${route.zoom}&l=map&rtext=${route.start}~${route.end}&rtt=auto&pt=${route.start},pm2rdl~${route.end},pm2grl`

    // URL для открытия в Яндекс Картах
    const yandexMapsUrl = `https://yandex.ru/maps/?rtext=Иркутск~Остров+Ольхон&rtt=auto`

    const openYandexMaps = () => {
        window.open(yandexMapsUrl, '_blank')
    }

    return (
        <div
            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group aspect-square"
            onClick={openYandexMaps}
        >
            {/* Карта с маршрутом */}
            <div className="absolute inset-0">
                <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Карта маршрута Иркутск-Ольхон"
                    className="absolute inset-0 w-full h-full"
                />
            </div>

            {/* Наложение при наведении */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <Navigation className="w-5 h-5" />
                        <span className="font-semibold">Открыть маршрут в Яндекс Картах</span>
                    </div>
                    <p className="text-sm opacity-90">Иркутск → Ольхон (280 км)</p>
                </div>
            </div>

            {/* Статичная подпись */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <div>
                        <div className="font-medium flex items-center gap-2">
                            <span>Маршрут на карте</span>
                            <span className="text-xs bg-white/30 px-2 py-0.5 rounded">280 км</span>
                        </div>
                        <div className="text-xs opacity-90 mt-1 flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            <span>Иркутск →</span>
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Ольхон</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}