"use client";

import { useSearchParams } from "next/navigation";

export function Explore() {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Explore by #{tag}</h1>
    </div>
  );
}
