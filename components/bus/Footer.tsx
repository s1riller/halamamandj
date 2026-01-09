import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Компания */}
          <div>
            <h3 className="mb-4 font-bold text-white">ОльхонЭкспресс</h3>
            <p className="mb-4 text-sm text-gray-400">
              Безопасные и комфортные поездки на озеро Байкал
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.29 20v-7.21H5.5V9.25h2.79V7.07c0-2.77 1.693-4.28 4.153-4.28 1.18 0 2.2.088 2.496.127v2.894h-1.713c-1.345 0-1.605.64-1.605 1.578v2.067h3.21l-.418 3.54h-2.792V20" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.299.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.299 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.299-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.299-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a3.135 3.135 0 110 6.27 3.135 3.135 0 010-6.27zm0 1.802a1.333 1.333 0 100 2.666 1.333 1.333 0 000-2.666zm5.338-3.205a.75.75 0 110 1.5.75.75 0 010-1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/search" className="text-gray-400 hover:text-white">
                  Билеты на автобус
                </Link>
              </li>
              <li>
                <Link href="/Tours" className="text-gray-400 hover:text-white">
                  Экскурсии
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Трансферы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Туры
                </a>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Информация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Контакты
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Условия использования
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+79016404040" className="text-gray-400 hover:text-white">
                  +7 (901) 640-40-40
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@olkhon.ru" className="text-gray-400 hover:text-white">
                  info@olkhon.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Иркутск, ул. Ленина, 5</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-400">&copy; 2024 ОльхонЭкспресс. Все права защищены.</p>
            <div className="mt-4 flex gap-6 text-sm md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                Способы оплаты
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Статус заказа
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
