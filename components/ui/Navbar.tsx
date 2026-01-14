"use client"

import NavItem from "@/components/ui/NavItem"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const closeMenu = () => setIsMenuOpen(false)
    return (
        <>
            <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4">
                {/* Логотип */}
                <Link href="/" className="text-xl font-bold text-white">
                    Ольхон зовет
                </Link>

                {/* Десктопное меню */}
                <div className="hidden md:flex items-center gap-6">
                    <NavItem href="/">
                        Места
                    </NavItem>                                        <NavItem href="/">
                        Проживание
                    </NavItem>
                    <NavItem href="/">
                        Проезд
                    </NavItem>
                    <NavItem href="/">
                        Контакты
                    </NavItem>
                </div>

                {/* Мобильное меню и кнопка */}
                <div className="md:hidden flex items-center gap-4">

                    <button
                        className="p-2 text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Мобильное меню */}
            {isMenuOpen && (
                <div className="fixed top-16 left-0 right-0 z-40 md:hidden bg-black shadow-lg animate-in slide-in-from-top-5 duration-300">
                    <div className="flex flex-col p-4">
                        <NavItem href="#tours" onClick={closeMenu}>
                            Места
                        </NavItem>
                        <NavItem href="#places" onClick={closeMenu}>
                            Проживание
                        </NavItem>
                        <NavItem href="#ideas" onClick={closeMenu}>
                            Проезд
                        </NavItem>
                        <NavItem href="#contacts" onClick={closeMenu}>
                            Контакты
                        </NavItem>
                        <div className="mt-4 pt-4 border-t">
                            <p className="text-sm text-white mb-2">Телефон для связи:</p>
                            <a
                                href="tel:+79148882565"
                                className="text-white font-semibold hover:text-orange-500 transition-colors"
                            >
                                8 (914) 888-25-65
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Затемнение фона при открытом меню */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 md:hidden"
                    onClick={closeMenu}
                />
            )}
        </>
    )
}