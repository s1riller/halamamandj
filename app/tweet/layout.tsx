import type { PropsWithChildren } from "react";
import { Header } from "@/components/Header";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="flex w-full max-w-7xl mx-auto justify-center px-4 py-8">{children}</div>
    </div>
  );
}
