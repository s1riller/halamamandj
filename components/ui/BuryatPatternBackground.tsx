export default function BuryatPatternBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-linear-to-t from-white to-blue-50">
            {/* Левый узор */}
            <div className="absolute left-0 top-0 h-full w-48">
                <svg className="h-full w-full" viewBox="0 0 200 1200" fill="none">
                    {/* Бурятский орнамент - волны и символы */}

                    {/* Основная волна (более заметная) */}
                    <path
                        d="M30,100 Q100,30 170,100 T310,100"
                        stroke="#0ea5e9"
                        strokeWidth="3"
                        strokeOpacity="0.3"
                    />

                    {/* Дополнительные волны */}
                    <path
                        d="M20,150 Q90,80 160,150 T300,150"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        strokeOpacity="0.2"
                    />

                    {/* Солнечный символ */}
                    <circle cx="100" cy="250" r="20" fill="#0ea5e9" fillOpacity="0.15" />
                    <circle cx="100" cy="250" r="12" fill="none" stroke="#0ea5e9" strokeWidth="5" strokeOpacity="1" />

                    {/* Волнообразный узор */}
                    <path
                        d="M40,350 Q100,300 160,350"
                        stroke="#0284c7"
                        strokeWidth="2"
                        strokeOpacity="0.25"
                    />

                    {/* Треугольники (горы) */}
                    <path d="M60,450 L100,380 L140,450 Z" fill="#0ea5e9" fillOpacity="0.2" />
                    <path d="M80,500 L120,430 L160,500 Z" fill="#38bdf8" fillOpacity="0.15" />

                    {/* Точки/орнамент */}
                    <circle cx="70" cy="600" r="6" fill="#0284c7" fillOpacity="0.3" />
                    <circle cx="100" cy="610" r="6" fill="#0284c7" fillOpacity="0.3" />
                    <circle cx="130" cy="600" r="6" fill="#0284c7" fillOpacity="0.3" />

                    {/* Зигзагообразная линия */}
                    <path
                        d="M50,700 L90,650 L130,700 L170,650"
                        stroke="#0ea5e9"
                        strokeWidth="2"
                        strokeOpacity="0.3"
                        strokeLinecap="round"
                    />

                    {/* Повторение узора ниже */}
                    <path
                        d="M30,800 Q100,730 170,800"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        strokeOpacity="0.25"
                    />

                    <circle cx="100" cy="900" r="18" fill="#0ea5e9" fillOpacity="0.15" />

                    <path d="M60,1000 L100,930 L140,1000 Z" fill="#38bdf8" fillOpacity="0.15" />

                    <circle cx="80" cy="1100" r="5" fill="#0284c7" fillOpacity="0.3" />
                    <circle cx="120" cy="1100" r="5" fill="#0284c7" fillOpacity="0.3" />

                </svg>
            </div>

            {/* Правый узор (зеркальное отражение) */}
            <div className="absolute right-0 top-0 h-full w-48">
                <svg className="h-full w-full" viewBox="0 0 200 1200" fill="none">
                    {/* Зеркальное отражение левого узора */}
                    <path
                        d="M170,100 Q100,30 30,100 T-110,100"
                        stroke="#0ea5e9"
                        strokeWidth="3"
                        strokeOpacity="0.3"
                    />

                    <path
                        d="M180,150 Q110,80 40,150 T-100,150"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        strokeOpacity="0.2"
                    />

                    <circle cx="100" cy="250" r="20" fill="#0ea5e9" fillOpacity="0.15" />
                    <circle cx="100" cy="250" r="12" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeOpacity="0.3" />

                    <path
                        d="M160,350 Q100,300 40,350"
                        stroke="#0284c7"
                        strokeWidth="2"
                        strokeOpacity="0.25"
                    />

                    <path d="M140,450 L100,380 L60,450 Z" fill="#0ea5e9" fillOpacity="0.2" />
                    <path d="M120,500 L80,430 L40,500 Z" fill="#38bdf8" fillOpacity="0.15" />

                    <circle cx="130" cy="600" r="6" fill="#0284c7" fillOpacity="0.3" />
                    <circle cx="100" cy="610" r="6" fill="#0284c7" fillOpacity="0.3" />
                    <circle cx="70" cy="600" r="6" fill="#0284c7" fillOpacity="0.3" />

                    <path
                        d="M150,700 L110,650 L70,700 L30,650"
                        stroke="#0ea5e9"
                        strokeWidth="2"
                        strokeOpacity="0.3"
                        strokeLinecap="round"
                    />

                    <path
                        d="M170,800 Q100,730 30,800"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        strokeOpacity="0.25"
                    />

                    <circle cx="100" cy="900" r="18" fill="#0ea5e9" fillOpacity="0.15" />

                    <path d="M140,1000 L100,930 L60,1000 Z" fill="#38bdf8" fillOpacity="0.15" />

                    <circle cx="120" cy="1100" r="5" fill="#0284c7" fillOpacity="0.3" />
                    <circle cx="80" cy="1100" r="5" fill="#0284c7" fillOpacity="0.3" />
                </svg>
            </div>

            {/* Дополнительный градиент для глубины */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-blue-50/20"></div>
        </div>
    );
}