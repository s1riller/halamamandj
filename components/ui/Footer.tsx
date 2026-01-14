export default function Footer() {
    return (


        <footer className="bg-neutral-primary-soft">

            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">ИП Иванов П.Г.</span>
                        </a>
                    </div>
                    {/* Телефон - выделенное место */}
                    <div className="mt-6">
                        <p className="text-slate-600 mb-2">Есть вопросы? Звоните нам:</p>
                        <a
                            href="tel:+78001234567"
                            className="inline-flex items-center gap-2 text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            8 (914) 888-25-65
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <ul className="text-body font-medium">
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">Главная</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Проживание</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Проезд</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Контакты</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
                <hr className="my-6 border-default sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-body sm:text-center">
                        Мы не используем куки и рекомендательные технологии — без них просто нормально можем работать
                    </span>

                </div>
            </div>
        </footer>

    )
}