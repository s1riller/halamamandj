"use client";

import { match } from "path-to-regexp";
import { MenuItem } from "./Menu-Item";
import { MENU } from "./menu.data";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

export function Menu() {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();
  return (
    <nav className="ml-auto flex gap-6">
      {MENU.map((menuItem) => (
        <MenuItem
          key={menuItem.name}
          menuItem={menuItem}
          isActive={!!match(menuItem.href)(pathname)}
        />
      ))}
    </nav>
  );
}
