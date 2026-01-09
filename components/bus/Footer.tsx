import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t outline-dashed  bg-gradient-to-b from-white via-white/95 to-blue-100/90 backdrop-blur-sm supports-[backdrop-filter]:backdrop-blur-sm overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Компания */}
          <div>
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent transition-colors hover:opacity-80"
              >
                ОльхонЭкспресс
              </Link>
   
            <p className="mb-4 text-sm text-gray-800">
              Безопасные и комфортные поездки на озеро Байкал
            </p>
            <div className="flex gap-4">

            </div>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-800">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/search" className="text-gray-800 hover:text-gray-800">
                  Билеты на автобус
                </Link>
              </li>
              <li>
                <Link href="/Tours" className="text-gray-800 hover:text-gray-800">
                  Экскурсии
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 hover:text-gray-800">
                  Трансферы
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 hover:text-gray-800">
                  Туры
                </Link>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-800">Информация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-800 hover:text-gray-800">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 hover:text-gray-800">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 hover:text-gray-800">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 hover:text-gray-800">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-800">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <Link href="tel:+79016404040" className="text-gray-800 hover:text-gray-800">
                  +7 (901) 640-40-40
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <Link href="mailto:info@olkhon.ru" className="text-gray-800 hover:text-gray-800">
                  info@olkhon.ru
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span className="text-gray-800">Иркутск, ул. Ленина, 5</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-800">&copy; 2024 ОльхонЭкспресс. Все права защищены.</p>
            <div className="mt-4 flex gap-6 text-sm md:mt-0">
              <Link href="#" className="text-gray-800 hover:text-gray-800">
                Способы оплаты
              </Link>
              <Link href="#" className="text-gray-800 hover:text-gray-800">
                Статус заказа
              </Link>
              <Link href="#" className="text-gray-800 hover:text-gray-800">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
