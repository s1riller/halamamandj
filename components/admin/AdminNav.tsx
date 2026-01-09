"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
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

const adminNavigation = [
  { name: "Дашбоард", href: "/admin/dashboard", icon: "📊" },
  { name: "Рейсы", href: "/admin/schedules", icon: "🚌" },
  { name: "Пользователи", href: "/admin/users", icon: "👥" },
  { name: "Бронирования", href: "/admin/bookings", icon: "🎟️" },
  { name: "Статистика", href: "/admin/statistics", icon: "📈" },
];

export default function AdminNav() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo and Desktop Nav */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-white">
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>

            {/* Logo */}
            <div className="ms-10 flex shrink-0 items-center sm:ms-0">
              <Link href="/admin/dashboard" className="flex items-center gap-2">
                <div className="text-2xl font-bold text-white">⚙️</div>
                <span className="hidden text-xl font-bold text-white sm:inline">Админ</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-8 sm:block">
              <div className="flex space-x-2">
                {adminNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-gray-700 hover:text-white"
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - User Menu */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="relative">
              <MenuButton className="relative inline-flex items-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-gray-100 transition-all duration-200 hover:bg-gray-600">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-xs font-bold text-white">
                  {user?.name.charAt(0).toUpperCase()}
                </div>
                <span className="hidden text-sm font-medium sm:inline">
                  {user?.name.split(" ")[0]}
                </span>
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-xl transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="border-b border-gray-200 px-4 py-3">
                  <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Роль:{" "}
                    <span className="font-medium text-gray-700">
                      {user?.role === "admin" ? "Администратор" : "Пользователь"}
                    </span>
                  </p>
                </div>

                <MenuItem>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 data-focus:outline-hidden"
                  >
                    👤 Мой профиль
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link
                    href="/"
                    className="block border-t border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 data-focus:outline-hidden"
                  >
                    🏠 На главную
                  </Link>
                </MenuItem>

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
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {adminNavigation.map((item) => (
            <DisclosureButton
              key={item.href}
              as={Link}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 transition-all duration-200 hover:bg-gray-700 hover:text-white"
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
