"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import Bars3Icon from "../react/icons/Bars3Icon";
import XMarkIcon from "../react/icons/XMarkIcon";
import HeaderButton from "./HeaderButton";

const navigation = [
  { name: "Главная", href: "/", current: true },
  { name: "Поиск", href: "/search", current: false },
  { name: "Рейсы", href: "/schedule", current: false },
  { name: "Экскурсии", href: "/Tours", current: false },
  { name: "Контакты", href: "/contact", current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-white shadow-md border-b border-cyan-200/30"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-cyan-100 hover:text-cyan-700 focus:outline-2 focus:-outline-offset-1 focus:outline-cyan-600">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent transition-colors hover:opacity-80"
              >
                ОльхонЭкспресс
              </Link>
            </div>
            
            {/* Десктопная навигация с HeaderButton */}
            <div className="hidden sm:ml-8 sm:flex sm:gap-2">
              <HeaderButton text="Главная" href="/" exact asLink />
              <HeaderButton text="Поиск" href="/search" asLink />
              <HeaderButton text="Рейсы" href="/schedule" asLink />
              <HeaderButton text="Экскурсии" href="/Tours" asLink />
              <HeaderButton text="Контакты" href="/contact" asLink />
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {isAuthenticated && user ? (
              <Menu as="div" className="relative">
                <MenuButton className="relative inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-gray-900 transition-all duration-200 hover:bg-gray-200">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-bold text-white">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden text-sm font-medium sm:inline">
                    {user.name.split(" ")[0]}
                  </span>
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white shadow-xl transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="border-b border-gray-200 px-4 py-3">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>

                  <MenuItem>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 data-focus:outline-hidden"
                    >
                      👤 Мой профиль
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link
                      href="/search"
                      className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 data-focus:outline-hidden"
                    >
                      🎟️ Мои бронирования
                    </Link>
                  </MenuItem>

                  {user.role === "admin" && (
                    <MenuItem>
                      <Link
                        href="/admin/dashboard"
                        className="block border-t border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 data-focus:outline-hidden"
                      >
                        ⚙️ Админ-панель
                      </Link>
                    </MenuItem>
                  )}

                  <MenuItem>
                    <button
                      onClick={handleLogout}
                      className="w-full border-t border-gray-200 px-4 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50 data-focus:outline-hidden"
                    >
                      🚪 Выход
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <div className="flex gap-3">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                >
                  Вход
                </Link>
                <Link
                  href="/register"
                  className="rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg"
                >
                  Регистрация
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-2 px-2 pt-2 pb-3">
          <DisclosureButton as="div">
            <HeaderButton text="Главная" href="/" exact asLink className="w-full justify-start" />
          </DisclosureButton>
          <DisclosureButton as="div">
            <HeaderButton text="Поиск" href="/search" asLink className="w-full justify-start" />
          </DisclosureButton>
          <DisclosureButton as="div">
            <HeaderButton text="Рейсы" href="/schedule" asLink className="w-full justify-start" />
          </DisclosureButton>
          <DisclosureButton as="div">
            <HeaderButton text="Экскурсии" href="/Tours" asLink className="w-full justify-start" />
          </DisclosureButton>
          <DisclosureButton as="div">
            <HeaderButton text="Контакты" href="/contact" asLink className="w-full justify-start" />
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
