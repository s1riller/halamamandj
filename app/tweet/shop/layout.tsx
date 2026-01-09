"use client";
import dynamic from "next/dynamic";
import type { PropsWithChildren } from "react";

const DynamicShopMenu = dynamic(() => import("./ShopMenu").then((mod) => mod.ShopMenu), {
  ssr: false,
  loading: () => <div>Loading menu...</div>,
});
export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="w-full">
      <h1 className="mb-6 text-3xl font-bold">Shop</h1>
      <DynamicShopMenu />
      {children}
    </div>
  );
}
