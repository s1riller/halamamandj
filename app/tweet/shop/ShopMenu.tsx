"use client";
import { MenuItem } from "@/components/Menu-Item";
import { PAGES } from "@/config/pages.config";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";

export function ShopMenu() {
  const pathname = usePathname();

  return (
    <nav className="mb-5 flex items-center gap-4">
      <MenuItem
        menuItem={{
          href: PAGES.SHOP,
          name: "SSR",
        }}
        isActive={!!match(PAGES.SHOP)(pathname)}
      />
      <MenuItem
        menuItem={{
          href: PAGES.SSG,
          name: "SSG",
        }}
        isActive={!!match(PAGES.SSG)(pathname)}
      />
      <MenuItem
        menuItem={{
          href: PAGES.ISR,
          name: "ISR",
        }}
        isActive={!!match(PAGES.ISR)(pathname)}
      />
    </nav>
  );
}
