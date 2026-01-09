import Link from "next/link";
import type { IMenuItem } from "./menu.data";

interface Props {
  menuItem: IMenuItem;
  isActive: boolean;
}

export function MenuItem({ menuItem, isActive }: Props) {
  return (
    <Link
      className={`
        relative px-3 py-2 rounded-lg transition-all duration-200 font-medium
        ${
          isActive
            ? "text-cyan-600 bg-cyan-50 border border-cyan-200"
            : "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50"
        }
      `}
      href={menuItem.href}
    >
      {menuItem.name}
    </Link>
  );
}
